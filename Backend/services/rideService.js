import rideModel from "../models/rideModel.js";
import { getDistanceAndTime } from "./mapsService.js";
import crypto from "crypto";

export async function getFare(pickup, destination) {
    
    if(!pickup || !destination) throw new Error("Pickup and destination are required to calculate fare");

    const distanceTime = await getDistanceAndTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        motorcycle: 20,
    };

    const perKmRate = {
        auto: 5,
        car: 8,
        motorcycle: 6,
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        motorcycle: 1.5,
    };
    console.log(distanceTime)

    const fare = {
        auto: Math.round(baseFare.auto + (distanceTime.distance.value/1000) * perKmRate.auto + (distanceTime.duration.value/60) * perMinuteRate.auto),
        car: Math.round(baseFare.car + (distanceTime.distance.value/1000) * perKmRate.car + (distanceTime.duration.value/60) * perMinuteRate.car),
        motorcycle: Math.round(baseFare.motorcycle + (distanceTime.distance.value/1000) * perKmRate.motorcycle + (distanceTime.duration.value/60) * perMinuteRate.motorcycle),
    };

    return fare;
}



function getOtp(num) {
    function generateOtp(num) {
        if (!num || num <= 0) throw new Error("Number of digits must be greater than 0");

        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num));
        return otp.toString();
    }
    return generateOtp(num);
}

export const createRide = async ({ user, pickup, destination, vechicleType }) => {
    if (!user || !pickup || !destination || !vechicleType) {
        throw new Error("User, Pickup, and Destination are required to create a ride");
    }

    const fare = await getFare(pickup, destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp : getOtp(6),
        fare: fare[vechicleType],
    })

    return ride;
}
