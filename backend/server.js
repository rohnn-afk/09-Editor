import express from 'express';
import cors from 'cors';    
import dotenv from 'dotenv';    
import cookieParser from 'cookie-parser';
import { ConnectDB } from './Config/ConnectDB.js';

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('API is running...');
})




ConnectDB()
StartServer()

function StartServer() {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })           
}


