import express from "express";
import { pool } from "./db.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is running",
        timestamp: new Date().toISOString()
    })
});

app.get("/health/db", async (req, res) => {
    try {
        await pool.query("SELECT NOW()");
        res.status(200).json({
            status: "OK",
            message: "Database is OK",
            timestamp: new Date().toISOString()
        })
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Database is not OK",
            timestamp: new Date().toISOString()
        })
    }
})

export default app;