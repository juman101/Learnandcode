import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares/index.js";

// controllers
import { uploadImage } from "../controllers/course.js";
router.post("/course/upload-image",uploadImage);
export default router;
