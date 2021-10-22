import { expiredHrs } from "../math/time.js";

import orderRoomBookingDetail from "./oderRoomBookingDetailData.js";
const orderRoomBookingDetailData = new orderRoomBookingDetail;
class OrderRoomBookingDetailController {
    async create(data) {
        data.expiresAt = expiredHrs(3)
        await orderRoomBookingDetailData.create(data);

    }
    async delete(id) {
        await orderRoomBookingDetailData.delete({ idBookingDetails: id });
    }
}
export default OrderRoomBookingDetailController