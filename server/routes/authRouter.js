import express from "express";
import SignUp from '../controller/SignUp.js'
import SignIn from '../controller/SignIn.js'

const authRouter = express.Router();

authRouter.post('/sign-up', SignUp);
authRouter.post('/sign-in', SignIn);




export default authRouter;