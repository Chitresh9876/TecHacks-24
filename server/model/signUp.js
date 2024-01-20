import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema({
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
    phoneNo:{
        type:String,
        require: true
    },
})

const SignUp = mongoose.model('signup', signUpSchema)
export default SignUp;