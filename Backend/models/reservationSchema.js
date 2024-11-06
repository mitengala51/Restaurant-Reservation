import mongoose from "mongoose";
import validator from "validator";

const reservationschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: ["3", "the first name should atleast contain 3 characters"],
        maxlenght: ["30", "the name should not exceed 30 charaxters"]
    },
    lastname: {
        type: String,
        required: true,
        minlength: ["3", "the last name should atleast contain 3 characters"],
        maxlenght: ["30", "the last name should not exceed 30 charaxters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minlength: [10, "Please enter a valid phone number"],
        maxlength: [10, "Please enter a valid phone number"]
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export let booking = mongoose.model('booking', reservationschema);