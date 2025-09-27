import { validationResult } from "express-validator";
import {getAddressCoordinates, getDistanceAndTime} from "../services/mapsService.js";

export const getCoordinates = async (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {address} = req.query;

    try{
        const coordinates = await getAddressCoordinates(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const getDistanceTime = async (req, res, next) => {

    try{

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const {origin, destination} = req.query;
        const distanceTime = await getDistanceAndTime(origin, destination);
        console.log(distanceTime)
        res.status(200).json(distanceTime);
        next();

    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

export const getAutoCompleteSuggestions = async (req, res, next) => {
    try{

    }catch(error){
        res.status(500).json({error: error.message});
    }
}