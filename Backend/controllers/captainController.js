import blackListTokenModel from "../models/blackListTokenModel.js";
import { captainModel } from "../models/captainModel.js";
import { createCaptain } from "../services/captainService.js";
import { validationResult } from "express-validator";

export const registerCaptain = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { fullname, email, password, vehicle } = req.body;

        const existingCaptain = await captainModel.findOne({ email });
        if (existingCaptain) {
            return res.status(400).json({
                success: false,
                message: "Captain already registered with this email",
            });
        }

        const hashedPassword = await captainModel.hashPassword(password);

        // ⬇️ createCaptain hata ke direct model use karo
        const captain = new captainModel({
            fullname: {
                firstname: fullname.firstname || "",
                lastname: fullname.lastname || ""
            },
            email,
            password: hashedPassword,
            vehicle: {
                color: vehicle.color,
                plate: vehicle.plate,
                capacity: vehicle.capacity,
                vehicleType: vehicle.vehicleType   // ✅ spelling match kara
            },
        });

        await captain.save();
        const token = captain.generateAuthToken();

        res.status(201).json({ captain, token });

    } catch (err) {
        console.error("Captain Register Error:", err); // ✅ log karo
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


export const loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password"
        })
    }

    const compared = await captain.comparePassword(password);
    if (!compared) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password"
        })
    }
    const token = captain.generateAuthToken();
    res.cookie("token", token);
    res.status(201).json({ captain, token });
}

export const getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.captain);
}

export const logoutCaptain = async (req, res, next) => {
    const token = req.cookies?.token ||
        (req.headers.authorization ? req.headers.authorization.split(" ")[1] : null);

    await blackListTokenModel.create({ token });

    res.clearCookie('token');

    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    })
}