import Errorhandler from "../middleware/error.js";
import { booking } from "../models/reservationSchema.js";

export const sendreservation = async (req,res,next)=>{
    
    const {firstname , lastname, email, phone, time, date} = req.body;

    if(!firstname || !lastname || !email || !phone || !time || !date){
        return next(new Errorhandler("Please fill all the fields of the form", 400));
    }

    try{
        await booking.create({firstname , lastname, email, phone, time, date});
        res.status(201).json({
            success: true,
            message: "Reservation sent successfully"
        })
    }catch(error){
        
        console.log(error)
        return next(error);
    }
}