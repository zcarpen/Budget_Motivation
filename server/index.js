const express = require('express');
const { createNewUser, readUser } = require('../db/model.js');
const app = express();
const cors = require('cors');
const port = 3210

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

app.post('/create', (req, res) => {
  createNewUser()
})