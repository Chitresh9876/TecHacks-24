import express from 'express'
import SignUpModal from '../model/signUp.js'

const SignUp = async(req, res) => {
console.log("Request Body --> ",req.body)
const {name, email, password, phoneNo} = req.body;
const newUser = new SignUpModal({
    name:name,
    email:email,
    password:password,
    phoneNo:phoneNo,
})

newUser.save()
.then(()=> res.status(200).json('data save succefully'))
.catch((err)=>{
    res.status(500).json('Error while sign up')
})
}

export default SignUp;