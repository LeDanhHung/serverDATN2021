import roomDetailModel from "./roomDetailModel.js";

class roomDetailData {
    async create(obj) {
        const doc = await roomDetailModel.create(obj)
        return doc
    }
    async findOne(id) {
        const doc = await roomDetailModel.findById(id)
        return doc
    }
    async updateOne(id, obj) {
        const doc = await roomDetailModel.updateOne({ _id: id }, { $set: obj })
        return doc
    }
    async delete(id) {
        const doc = await roomDetailModel.deleteOne(id)
        return doc
    }

}
export default roomDetailData