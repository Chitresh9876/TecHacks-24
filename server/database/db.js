import mongoose from "mongoose"


const DBConnection = async() => {
    const DB_URL = 'mongodb://127.0.0.1:27017';
    await mongoose.connect(DB_URL)
    .then((res)=>{
        console.log('DataBase Connected')
    })
    .catch((err)=>{
        console.log(`Error Message : ${err.message}`);
    })
}

export default DBConnection;