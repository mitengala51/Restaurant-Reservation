import express from "express";
import cors from "CORS";
import dotenv from "dotenv";
import dbConnection from "./database/db.js";
import { errormiddleware } from "./middleware/error.js";
import reservationrouter from "./Routers/ReservationRouter.js";

const app = express();
dotenv.config({path: "./config/.env"});

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation", reservationrouter)

dbConnection();

app.use(errormiddleware)

export default app;