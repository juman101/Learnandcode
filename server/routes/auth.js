import express from "express";

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares/index.js";

// controllers
import {
  register,
  login,
  logout,
  currentUser,
  forgotpassword,
  resetpassword,
} from "../controllers/auth.js";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);
router.post("/forgot-password", forgotpassword);
router.post("/reset-password", resetpassword);


export default router;
