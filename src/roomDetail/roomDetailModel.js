import Mongoose from "mongoose";

const roomDetailModel = Mongoose.Schema({
    idRoom: {
        type: String,
        required: [true,'idRoom  is required']
    },
    roomName: {
        type: String,
        required: [true,'roomName  is required']
    },
    maximumNumberOfPeople: {
        type: Number,
    },
    roomStatus: {
        type: Array,
        default: ['1', '2', '3','4']
    },
    roomPrice: {
        type: Number,
        default: 0,
    },
    created_at    : {
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    },

})
export default Mongoose.model('roomDetail', roomDetailModel)