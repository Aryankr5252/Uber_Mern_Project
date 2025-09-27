import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import { connectdb } from "./db/db.js";
import userRouter from "./routes/userRouter.js"
import cookieParser from "cookie-parser";
import captainRouter from "./routes/captainRouter.js";
import mapsRouter from "./routes/mapsRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors());

//database connection 
connectdb();

//All routes
app.use('/users', userRouter);
app.use('/captains', captainRouter);
app.use("/maps", mapsRouter);
app.get("/", (req, res) => {
    res.send("hanji")
})

export default app;