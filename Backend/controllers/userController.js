import { validationResult } from "express-validator";
import userModel from "../models/userModel.js";
import { createUser } from "../services/userService.js";

export const registerUser = async (req, res, next) => {
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {fullname, email, password} = req.body;
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
