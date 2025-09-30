import { validationResult } from "express-validator";
import { createRide } from "../services/rideService.js";
import {getFare} from "../services/rideService.js";

export const createsRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { pickup, destination, vechicleType } = req.body;
    try {
        const ride = await createRide({ user: req.user._id, pickup, destination, vechicleType });
        res.status(201).json({ success: true, ride });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getFared = async (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {pickup, destination} = req.query;

    try{
        const fare = await getFare(pickup, destination);
        res.status(200).json({success: true, fare});
    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}