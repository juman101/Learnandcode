import express from "express";
import formidable from "express-formidable"
const router = express.Router();
//middleware
 import { isInstructor, requireSignin } from "../middlewares/index.js";

import {uploadImage, create, read, uploadVideo, addLesson, update, publish, unpublish, courses,checkEnrollment, freeEnrollment,
    paidEnrollment } from '../controllers/course.js';
// import {removeImage}  from '../controllers/course.js';

//image


router.get('/courses',courses);


router.post("/course/upload-image",uploadImage );
// router.post("/course/remove-image",removeImage );

//course
router.post("/course", requireSignin, isInstructor, create);
router.put("/course/:slug", requireSignin, update);
router.get("/course/:slug", read);
router.post("/course/video-upload/:instructorId", requireSignin, formidable(), uploadVideo);
router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);

router.put("/course/publish/:courseId", requireSignin,publish);
router.put("/course/unpublish/:courseId", requireSignin,unpublish);

router.get('/check-enrollment/:courseId',requireSignin,checkEnrollment);


router.post('/free-enrollment/:courseId',requireSignin,freeEnrollment);
router.post('/paid-enrollment/:courseId',requireSignin,paidEnrollment); //our own
export default router;
 