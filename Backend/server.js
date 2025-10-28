const express = require('express')
const app = express()
const { ObjectId } = require('mongodb');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')

dotenv.config();
const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URI;
console.log(url)
const client = new MongoClient(url);
let dbInstance;

async function getDb() {
  if (!dbInstance) {
    await client.connect();
    dbInstance = client.db("pwds");
  }
  return dbInstance;
}

app.use(bodyParser.json())
app.use(cors())
const port = process.env.PORT || 3000

app.get('/api/pwds', async (req, res) => {
  const db = await getDb();
  const collection = db.collection('users');
  const findResult = await collection.find({}).toArray();
  res.send(findResult)
})
app.post('/api/pwds', async (req, res) => {
  const db = await getDb();
  const collection = db.collection('users');
  const result = await collection.insertOne(req.body);
  res.send({message: "User added successfully"})
})

app.delete('/api/pwds/:id', async (req, res) => {
  const db = await getDb();
  const collection = db.collection('users');
  const result = await collection.deleteOne({_id: new ObjectId(req.params.id)});
  res.send({message: "User deleted successfully"})
})

app.put('/api/pwds/:id', async (req, res) => {
  const db = await getDb();
  const collection = db.collection('users');
  const { id } = req.params;
  const updateDoc = { $set: req.body };
  await collection.updateOne({ _id: new ObjectId(id) }, updateDoc);
  res.send({ message: "User updated successfully" });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})