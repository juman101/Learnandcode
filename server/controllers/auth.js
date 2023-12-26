import express from 'express';
import User from "../models/user.js";
import { hashPassword,comparePassword } from "../utils/auth.js";
import jwt from 'jsonwebtoken'
const JWT_SECRET="JUMANDASJHDVKJSDBCKJBDCKJBKJDBC"
const router = express.Router();

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password || password.length < 6) {
      return res.status(400).send("Name, email, and password (at least 6 characters) are required");
    }

    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is taken");

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Register user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save(); // Save the user

    return res.json({ ok: true }); // Registration successful
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const login =async (req, res) => {
    try{
       console.log(req.body);

       const {email, password} = req.body;
       const user =await User.findOne({ email}).exec();
       if(!user)
       return res.status(400).send("user not found");

       const match =await comparePassword(password,user.password);

     const token =jwt.sign({_id:user._id},JWT_SECRET,{expiresIn :"7d"});

               user.password =undefined; //

               res.cookie("token",token,
               {
                httpOnly: true //
               });


               res.json(user);


    }



    catch (err) {
console.log(err);
return res.status(400).send("Error. Try again.");


    }
};

export default router;
