import Mongoose from "mongoose";

const userModel = Mongoose.Schema({
    fullname: {
        type: String,
        required: [true,'fullname  is required']
    },
    phone: {
        type: String,
        required: [true,'phoneNumber  is required']
    },
    email: {
        type: String,
    },
    userName: {
        type: String,
        required:[true,'username is required']
    },
    password: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
        required:[true,'date of birth is required']
    },
    address: {
        type: String,
    },
    status:{
        type:String,
    },
    avatarURL: {
        type: String,
    },

})
export default Mongoose.model('roomDetail', roomDetailModel)