import express from "express";
import {body, query} from "express-validator";
import { createsRide, getFared } from "../controllers/rideController.js";
import { authUser } from "../middlewares/authMidlleware.js";
const router = express.Router();

router.post('/create',
    authUser,
    body('pickup').isString().isLength({min: 3}).withMessage('Pickup location must be at least 3 characters long'),
    body('destination').isString().isLength({min: 3}).withMessage('Destination location must be at least 3 characters long'),
    body('vechicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be car, motorcycle, or auto'),
    createsRide
)

router.get('/get-fare', 
    authUser,
    query('pickup').isString().isLength({min: 3}).withMessage('Pickup location must be at least 3 characters long'),
    query('destination').isString().isLength({min: 3}).withMessage('Destination location must be at least 3 characters long'),
    getFared)

export default router;