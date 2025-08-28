import { captainModel } from "../models/captainModel.js";
import { createCaptain } from "../services/captainService.js";
import { validationResult } from "express-validator";

export const registerCaptain = async (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password, color, plate, capacity, vehicleType} = req.body;

    const existingCaptain = await captainModel.findOne({ email });
    if (existingCaptain) {
      return res.status(400).json({
        success: false,
        message: "Captain already registered with this email",
      });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })
    await captain.save();
    const token = captain.generateAuthToken();

    res.status(201).json({captain, token});
}