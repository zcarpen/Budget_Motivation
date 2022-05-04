const { MongoClient } = require("mongodb");
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
    { id: 1, type: 'other', amount: 10, time: 'someTime' },
    { id: 2, type: 'coffee', amount: 100, time: 'someTime' },
    { id: 3, type: 'grocery', amount: 300, time: 'someTime' },
    { id: 4, type: 'gas', amount: 100, time: 'someTime' },
    { id: 5, type: 'eatOut', amount: 100, time: 'someTime' },
    { id: 6, type: 'movie', amount: 50, time: 'someTime' },
    { id: 7, type: 'music', amount: 50, time: 'someTime' },
    { id: 8, type: 'house', amount: 150, time: 'someTime' },
    { id: 9, type: 'gifts', amount: 30, time: 'someTime' },
    { id: 10, type: 'snack', amount: 30, time: 'someTime' },
    { id: 11, type: 'games', amount: 50, time: 'someTime' },
    { id: 12, type: 'selfCare', amount: 150, time: 'someTime' }
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

module.exports = { createNewUser, readUser }