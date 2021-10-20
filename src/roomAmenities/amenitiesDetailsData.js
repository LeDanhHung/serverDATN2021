import amenitiesModel from "./amenitiesModel";

class amenitiesDetailsData {
    async create(obj) {
        const doc = await amenitiesDetailsData.create(obj)
        return doc
    }
    async findOne(id) {
        const doc = await amenitiesModel.findById(id)
        return doc
    }
    async updateOne(id, obj) {
        const doc = await amenitiesModel.updateOne({ _id: id }, { $set: obj })
        return doc
    }
    async delete(id) {
        const doc = await amenitiesModel.deleteOne(id)
        return doc
    }
}
export default amenitiesDetailsData