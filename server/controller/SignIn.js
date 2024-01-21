import express from 'express'
import SignInModal from '../model/signIn.js'

const SignIn = async(req, res) => {
console.log("Request Body --> ",req.body)
const{name, email, password} = req.body
const user = await SignInModal.findOne({email:email});
console.log('user ---> ', user)
if(user?.password === password){
    res.status(200).json('Signed In');
}
else{
    res.status(500).json('Check Crediantials')
}

}

export default SignIn;