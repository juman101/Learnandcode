import express from "express";

const router = express.Router();

// middleware
import { isInstructor, requireSignin } from "../middlewares/index.js";

// controllers
import { create, uploadImage,read } from "../controllers/course.js";
router.post("/course/upload-image",uploadImage);
router.get("/course/:slug", read);

router.post("/course",requireSignin,isInstructor,create);


export default router;
