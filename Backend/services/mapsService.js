

import axios from "axios";

export const getAddressCoordinates = async (address) => {
	if (!address) throw new Error("Address is required");
	const apiKey = process.env.GOOGLE_MAPS_API;
	if (!apiKey) throw new Error("Google Maps API key not set in environment variables");
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
	try {
		const response = await axios.get(url);
		const data = response.data;
        console.log(data)
		if (data.status !== "OK" || !data.results.length) {
			throw new Error("Unable to find coordinates for the given address");
		}
		const location = data.results[0].geometry.location;
		return {
			lat: location.lat,
			lng: location.lng
		};
	} catch (err) {
		throw new Error("Failed to fetch coordinates: " + err.message);
	}
}

export const getDistanceAndTime = async (origin, destination) => {
    if (!origin || !destination) throw new Error("Origin and Destination are required");

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        const data = response.data;
        if(data.status === "OK"){
            if(data.rows[0].elements[0].status === "ZERO_RESULTS"){
                throw new Error("No route could be found between the origin and destination.");
            } 
            return data.rows[0].elements[0];
        }else {
                throw new Error("Unable to find distance and time for the given locations");
            }
    }catch(err){
        throw new Error("Failed to fetch distance and time: " + err.message);
    }
}

export const getSuggestions = async (input) => {
    if (!input) throw new Error("Input is required");

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        if (data.status === "OK") {
            return data.predictions;
        } else {
            throw new Error("Unable to find autocomplete suggestions");
        }
    } catch (err) {
        throw new Error("Failed to fetch autocomplete suggestions: " + err.message);
    }
}