import express from 'express'
import dotenv from 'dotenv';

import orderRoomBookedApi from './src/orderRoomBooked/orderRoomBookedApi.js';

// configs
import connectDatabase from "./src/configs/dbConfigs.js";
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
    //Server
app.listen(process.env.port, async() => {
    console.log(`Server chạy bằng con port ${process.env.port}`);
})
export default app;