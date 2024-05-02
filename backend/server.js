
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000

app.get("/", (req,res) =>{
    res.send("Hello World!!!")
})

app.use("/api/auth", authRoutes)


app.listen(PORT, ()=>{

    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);
    
    });

