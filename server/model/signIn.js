import mongoose from "mongoose";

const signInSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    },
})

const SignIn = mongoose.model('signin', signInSchema)
export default SignIn;