import express from "express"
import "dotenv/config"
import cors from "cors"
import dbConnect from "./database/db.js";

const app=express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

dbConnect();

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
})