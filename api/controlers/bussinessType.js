import BussinessType from "../models/businessType.js";

export const createBussinessType = async (req, res, next) => {
  const newBussinessType = new bussinessType(req.body);
  try {
    const savedBussinessType = await newBussinessType.save();
    res.status(200).json(savedBussinessType);
  } catch (error) {
    next(error);
  }
};

export const getAllBussinessTypes = async (req, res) => {
  try {
    const allBussinessTypes = await BussinessType.find();
    res.status(200).json(allBussinessTypes);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
