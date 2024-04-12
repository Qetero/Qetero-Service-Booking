import express from "express";
import {
  createBussinessType,
  getAllBussinessTypes,
} from "../controlers/bussinessType.js";

const router = express.Router();

router.get("/", getAllBussinessTypes);
router.post("/", createBussinessType);
export default router;
