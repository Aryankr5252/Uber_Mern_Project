import { validationResult } from "express-validator";
import userModel from "../models/userModel.js";
import { createUser } from "../services/userService.js";
import blackListTokenModel from "../models/blackListTokenModel.js";

export const registerUser = async (req, res, next) => {

  // checks whethe there are any validation errors  
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    //extract user deatils
    const {fullname, email, password} = req.body;

    // check if user aready registered
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered with this email",
      });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })
    await user.save();
    const token = user.generateAuthToken();

    res.status(201).json({user, token});

}

export const loginUser = async (req, res, next) => {
  const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('+password');
    if(!user){
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      })
    }

    const compared = await user.comparePassword(password);

    if(!compared){
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      })
    }

    const token = user.generateAuthToken();
    res.cookie("token", token);

    res.status(201).json({user, token});
    
}

export const getUserProfile = async (req, res, next) => {

  res.status(200).json(req.user);
}

export const logoutUser = async (req, res, next) => {
  res.clearCookie('token');
  const token = req.cookies?.token ||
  (req.headers.authorization ? req.headers.authorization.split(" ")[1] : null);

  await blackListTokenModel.create({token})

  res.status(200).json({
    success: true,
    message: "Logged out successfully"
  })
}