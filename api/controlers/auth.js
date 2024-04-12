import mongoose from "mongoose";
import userMapping from "../models/userMapping.js";
import { getUserInfo } from "../utils/getUserInfo.js";
import { removeFirebaseUser } from "../utils/removeFirebaseUser.js";
import { createError } from "../utils/createError.js";
import ServiceProvider from "../models/serviceProvider.js";
import BusinessOwner from "../models/businessOwner.js";
import Customer from "../models/customer.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Business from "../models/business.js";
dotenv.config();

const ownerHasBusiness = (id) => {
  let business = Business.findOne({ ownerId: id });
  if (business) return true;
  else return false;
};

export const register = async (req, res, next) => {
  const { firebaseToken, collectionName, TIN } = req.body;
  try {
    const userInfo = await getUserInfo(firebaseToken);
    const userExists = await userMapping.findOne({ uid: userInfo.uid });
    if (userExists) {
      return next(createError(400, "email is already in use"));
    }
    let newUser;
    switch (collectionName) {
      case "Customer":
        newUser = new Customer(userInfo);
        break;
      case "Business Owner":
        newUser = new BusinessOwner(userInfo);
        newUser.TIN = TIN;
        break;
      case "Service Provider":
        newUser = new ServiceProvider(userInfo);
        break;
      default:
        removeFirebaseUser(firebaseToken);
        return next(createError(400, "Registration failed. Try again later."));
    }
    await newUser.save();
    const userMap = new userMapping({
      uid: userInfo.uid,
      collectionName: collectionName,
    });
    await userMap.save();
    res.status(200).send("Account created successfully.");
  } catch (error) {
    removeFirebaseUser(firebaseToken);
    return next(error);
  }
};

export const login = async (req, res, next) => {
  const { firebaseToken } = req.body;
  try {
    const userInfo = await getUserInfo(firebaseToken);
    const userMap = await userMapping.findOne({ uid: userInfo.uid });
    if (!userMap) {
      removeFirebaseUser(firebaseToken);
      return next(createError(400, "user not found"));
    }
    var user;
    switch (userMap.collectionName) {
      case "Customer":
        user = await Customer.findOne({ uid: userInfo.uid });
        break;
      case "Business Owner":
        user = await BusinessOwner.findOne({ uid: userInfo.uid });
        break;
      case "Service Provider":
        user = await ServiceProvider.findOne({ uid: userInfo.uid });
        break;
      default:
        return next(createError(500, "Oops, something went wrong"));
    }

    const token = jwt.sign(user._doc, process.env.JWT_KEY);
    return res
      .cookie("user_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        ...user._doc,
        role: userMap.collectionName,
        accountCompleted: ownerHasBusiness(user._doc._id),
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
