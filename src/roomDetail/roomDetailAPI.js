import express from 'express'
import roomDetailController from './roomDetailController'

const app = express()
const roomDetail = new roomDetailController


app.use(express())


app.get('/', async(req, res) => {
    res.json("roomDetail")
})
app.post('/create', async(req, res) => {
    try {
        const data = req.body
        const doc = await roomDetail.create(data)
        res.json(doc)
    } catch (err) {
        res.json(err)
    }
})

app.post('/delete/:id', async(req, res) => {
    const id = req.params.id
    await roomDetail.delete({ id })
    res.json(`Delete ${id}`)
})


app.post('/update/:id', async(req, res) => {
    const id = req.params.id
    const data = req.body
    data.updatedAt = Date.now()
    const doc1 = await roomDetail.updateOne({ _id: id }, data)
    if (doc1) {
        res.json("Successfully!!!")
    } else {
        res.json("Failed")
    }

})

app.get('/:id', async(req, res) => {
    const id = req.params.id
    const docs = await roomDetail.findOne({ _id: id })
    res.json(docs)
})



export default app