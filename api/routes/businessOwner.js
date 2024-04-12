import express from "express";
import {
  createBusinessOwner,
  getAllBusinessOwners,
  getBusinessOwner,
} from "../controlers/bussinessOwner.js";

const router = express.Router();

router.post("/", createBusinessOwner);

router.get("/", getAllBusinessOwners);
router.get("/:id", getBusinessOwner);
export default router;
