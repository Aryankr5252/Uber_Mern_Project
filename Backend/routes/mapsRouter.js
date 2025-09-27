import express from "express";
const router = express.Router();
import {getAutoCompleteSuggestions, getCoordinates, getDistanceTime} from "../controllers/mapController.js";
import {authUser} from "../middlewares/authMidlleware.js";
import {query} from "express-validator";

router.get('/get-coordinates',
    query('address').isString().isLength({min: 3}),
    authUser, getCoordinates 
);

router.get('/get-distance-time',
    query('origin').isString().isLength({min: 3}),
    query('destination').isString().isLength({min: 3}),
    authUser, getDistanceTime
)

router.get('/get-suggestions',
    query('input').isString().isLength({min: 1}),
    authUser, 
    getAutoCompleteSuggestions
)

export default router;