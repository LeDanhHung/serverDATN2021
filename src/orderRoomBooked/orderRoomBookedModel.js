import Mongoose from "mongoose";

const orderRoomBookedModel = Mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    timeBooking: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
    },
    bookingStatus: {
        type: Array,
        default: ['1', '2', '3']
    },
    totalRoomRate: {
        type: Number,
        required: true
    }
})
export default Mongoose.model('orderRoomBooked', orderRoomBookedModel)