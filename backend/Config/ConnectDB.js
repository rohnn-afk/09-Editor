import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const ConnectDB = async () => {
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{console.log("database connected")})
    .catch((err)=>{console.log(err)})
}
