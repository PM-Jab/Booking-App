import express from "express";

import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  deleteByCityHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create
router.post("/", verifyAdmin, createHotel);

// update
router.put("/:id", verifyAdmin, updateHotel);

// delete
router.delete("/:id", verifyAdmin, deleteHotel);

//deleteMany
router.delete("/deleteBycity/:city", verifyAdmin, deleteByCityHotel);

// get
router.get("/find/:id", getHotel);

// get all
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
