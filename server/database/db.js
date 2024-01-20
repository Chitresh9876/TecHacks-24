import mongoose from "mongoose"


const DBConnection = async() => {
    const DB_URL = `mongodb+srv://chitreshgupta9876:Annugupta@cluster0.gxjh460.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(DB_URL)
    .then((res)=>{
        console.log('DataBase Connected')
    })
    .catch((err)=>{
        console.log(`Error Message : ${err.message}`);
    })
}

export default DBConnection;