import roomDetailData from "./roomDetailData";
const data = new roomDetailData
class roomDetailController {
    async create(obj) {
        const doc = await data.create(obj)
        return doc
    }
    async findOne(id) {
        const doc = await data.findOne(id)
        return doc
    }
    async updateOne(id, obj) {
        const doc = await data.updateOne(id, obj)
        return doc
    }
    async delete(id) {
        const doc = await data.delete(id)
        return doc
    }
}
export default roomDetailController