import express from 'express'
import dotenv from 'dotenv';

import orderRoomBookedApi from './src/orderRoomBooked/orderRoomBookedApi.js';
import roomDetailModel from "./src/roomDetail/roomDetailModel";
import roomDetailController from "./src/roomDetail/roomDetailController";
import roomDetailAPI from "./src/roomDetail/roomDetailAPI";
import roomDetailData from "./src/roomDetail/roomDetailData";

// configs
import connectDatabase from "./src/configs/dbConfigs.js";
import userAPI from "./src/user/userAPI";
import amenitiesAPI from "./src/roomAmenities/amenitiesAPI";
dotenv.config()
connectDatabase();
const app = express();
app.use(express())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));




app.get("/home", async(req, res) => {
    res.json("Trang chủ dự án tốt nghiệp ")

})

//Route
app.use('/orderRoomBooked', orderRoomBookedApi)
app.use('/roomDetailAPI',roomDetailAPI)
app.use('/userAPI',userAPI)
app.use('/roomAmenitiesAPI',amenitiesAPI)
    //Server
app.listen(process.env.port, async() => {
    console.log(`Server chạy bằng con port ${process.env.port}`);
})
export default app;