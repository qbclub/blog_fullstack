const express = require('express')
const multer = require('multer')
var cors = require('cors')
const { MongoClient } = require('mongodb');

const port = 3000
const app = express()
app.use(cors())


const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

// const upload = multer({ storage: storageConfig })
const upload = multer({ dest: 'uploads/' })
app.use(express.static('uploads'));
app.use(multer({ storage: storageConfig }).single("file"));

const client = new MongoClient("mongodb://0.0.0.0:27017/");


async function mongoStart() {
  await client.connect()
  console.log("connected")
}
const db = client.db('blog');
const postsCollection = db.collection('posts');

app.use(express.json());


app.get('/', async (req, res) => {

  let results = await postsCollection.find({})
    .toArray();

  res.send(results);


})
app.post('/new-post', (req, res) => {
  let post = JSON.parse(req.body.post)
  let filedata = req.file;

  post.imgUrl = `http://localhost:3000/${filedata.filename}`
  postsCollection.insertOne(post)

  if (!filedata)
    res.send("Ошибка при загрузке файла");
  else
    res.send("Файл загружен");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoStart()