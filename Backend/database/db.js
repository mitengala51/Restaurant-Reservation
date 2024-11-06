import mongoose from "mongoose";

async function dbConnection(){

    try{
        await mongoose.connect(process.env.MONGOOSE_URI, {
            dbName: "Restaurant"
        })
        console.log("Connected to MongoDB")
    }catch(error){
        console.log("Error connecting to MongoDB: " + error )
    }
}

export default dbConnection;
