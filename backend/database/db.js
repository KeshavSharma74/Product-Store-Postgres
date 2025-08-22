import "dotenv/config"
import { neon } from "@neondatabase/serverless";

const sql= neon(process.env.DATABASE_URL);

const dbConnect = async()=>{
    try {
    const result = await sql`SELECT * FROM NOW()`;
        console.log("Database Connected Successfully.");
        
    } catch (error) {
        console.error("Database Connection Failed :", error);
    }
}

export {dbConnect,sql};