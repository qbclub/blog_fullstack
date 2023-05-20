const express = require('express')
const { MongoClient } = require('mongodb');
const app = express()
var cors = require('cors')
const port = 3000

const client = new MongoClient("mongodb://0.0.0.0:27017/");


async function mongoStart() {
  await client.connect()
  console.log("connected")
}
const db = client.db('blog');
const postsCollection = db.collection('posts');


app.use(cors())
app.use(express.json());

app.get('/', async (req, res) => {

  let results = await postsCollection.find({})
    .toArray();

  res.send(results);


})
app.post('/new-post', (req, res) => {

  postsCollection.insertOne(req.body)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoStart()