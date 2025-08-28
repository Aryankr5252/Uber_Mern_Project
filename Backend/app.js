import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import { connectdb } from "./db/db.js";
import userRouter from "./routes/userRouter.js"
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors());

//database connection 
connectdb();

//All routes
app.use('/users', userRouter);
app.get("/", (req, res) => {
    res.send("hanji")
})

export default app;