import express from "express"
import "dotenv/config"
import cors from "cors"
import {dbConnect} from "./database/db.js";
import productRouter from "./routes/product.route.js";

const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/v1',productRouter);

const port = process.env.PORT || 4000;

dbConnect();

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
})