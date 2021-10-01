import express from 'express'



import OrderRoomBookedController from './orderRoomBookedControler.js'

const app = express()
const orderRoomBooked = new OrderRoomBookedController


app.use(express())


app.get('/', async(req, res) => {
    res.json("orderRoomBooked")
})
app.post('/create', async(req, res) => {
    try {
        const data = req.body
        const doc = await orderRoomBooked.create(data)
        res.json(doc)
    } catch (err) {
        res.json(err)
    }
})

app.get('/:id', async(req, res) => {
    const id = req.params.id
    const docs = await orderRoomBooked.findOne({ _id: id })
    res.json(docs)
})

app.post('/update/:id', async(req, res) => {
    const id = req.params.id
    const data = req.body
    data.updatedAt = Date.now()
    const doc1 = await orderRoomBooked.updateOne({ _id: id }, data)
    if (doc1) {
        res.json("update thanh cong")
    } else {
        res.json("update that bai")
    }

})

app.post('/delete/:id', async(req, res) => {
    const id = req.params.id
    await orderRoomBooked.delete({ id })
    res.json(`Delete ${id}`)
})
export default app