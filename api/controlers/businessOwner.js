import BusinessOwner from "../models/businessOwner.js";

export const createBusinessOwner = async (req, res, next) => {
  const newBusinessOwner = new bussinessType(req.body);
  try {
    const savedBusinessOwner = await newBusinessOwner.save();
    res.status(200).json(savedBusinessOwner);
  } catch (error) {
    next(error);
  }
};

export const getAllBusinessOwners = async (req, res) => {
  try {
    const allBusinessOwners = await BusinessOwner.find();
    res.status(200).json(allBusinessOwners);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getBusinessOwner = async (req, res, next) => {
  try {
    const businessOwner = await BusinessOwner.findById(req.params.id);
    res.status(200).json(businessOwner);
  } catch (err) {
    next(err);
  }
};
