import "dotenv/config"
import { neon } from "@neondatabase/serverless";

const db= neon(process.env.DATABASE_URL);

const dbConnect = async()=>{
    try {
    const result = await db`SELECT NOW()`;
        console.log("Database Connected Successfully.");
    } catch (error) {
        console.error("Database Connection Failed :", error);
    }
}

export default dbConnect;