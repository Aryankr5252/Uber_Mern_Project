import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import { connectdb } from "./db/db.js";

const app = express();

app.use(cors());

//database connection 
connectdb();

app.get("/", (req, res) => {
    res.send("hanji")
})

export default app;