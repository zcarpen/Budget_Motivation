const express = require('express');
const { createNewUser, readUser, updateUser } = require('../db/model.js');
const app = express();
const cors = require('cors');
const port = 3210
console.log('whats?')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.get('/user/*', async (req, res) => {
  const result = await readUser(req.originalUrl.split('/')[2])
  res.send(result)
})

app.post('/update/*', async (req, res) => {
  const { body, type } = req.body;
  const result = await updateUser(req.originalUrl.split('/')[2], body, type)
})

app.get('/create', (req, res) => {
  console.log('created')
  createNewUser()
})