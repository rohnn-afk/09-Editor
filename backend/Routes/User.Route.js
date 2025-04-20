import express from 'express';
import { registerUser } from '../Controller/User.Controller.js';

const UserRouter = express.Router();

UserRouter.post('/register', registerUser);