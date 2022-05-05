const { MongoClient } = require("mongodb");
const util = require('util');
require('dotenv').config()


const uri = "mongodb://localhost:27017";
console.log('is this undefined?', process.env.USER_NAME)
// const uri = `mongodb://${process.env.USER_NAME}:${process.env.PSWD}@${process.env.HOST}:27017`;
const client = new MongoClient(uri);
client.connect();
const db = client.db("Budgets");



const createNewUser = async (userName) => {
  const users = db.collection('users')
  const icons = ['other', 'coffee', 'grocery', 'gas', 'eat-out', 'movie', 'music', 'house', 'gifts', 'snack', 'games', 'self-care']

  const transactions = [
  ]

  userName = 'zcarpen';
  const income = 5500;
  const budget = 3800;
  const totalSaved = 5000
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var year = dateObj.getUTCFullYear();
  const data = {
    expenseCategories: icons,
    allTransactions: transactions,
    userName: userName,
    income: income,
    budget: budget,
    totalSaved: totalSaved
  }
  let newData = { curMonth: `${month}/${year}`, data: data }
  const newUser = {
    userName: userName,
    history: [newData]
  }
  users.insertOne(newUser)
}

const readUser = async (user) => {
  const users = db.collection('users');
  const result = await users.find({ userName: user }).toArray();
  return result;
}

const updateUser = async (user, data, type) => {
  const users = db.collection('users');
  const userInfo = await users.find({ userName: user }).toArray();
  const history = userInfo[0].history.slice(-1)[0]
  const newData = { ...history.data, [type]: data }
  const newHistory = { ...history, data: newData }
  userInfo[0].history.pop();
  userInfo[0].history.push(newHistory)
  await users.updateOne({ userName: user }, { $set: { "history": userInfo[0].history } }, { upsert: false })
}

module.exports = { createNewUser, readUser, updateUser }