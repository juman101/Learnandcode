import express from "express";
import formidable from "express-formidable"
const router = express.Router();

// middleware
import { isInstructor, requireSignin } from "../middlewares/index.js";

// controllers
import { create, uploadImage,read, uploadVideo ,addLesson} from "../controllers/course.js";
router.post("/course/upload-image",uploadImage);
router.get("/course/:slug", read);

router.post("/course",requireSignin,isInstructor,create);
router.post("/course/video-upload/:instructorId", requireSignin, formidable(), uploadVideo);
router.post("/course/lesson/:slug/:instructorId", requireSignin,addLesson);
export default router;
