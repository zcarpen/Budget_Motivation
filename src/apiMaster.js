import axios from 'axios';

export const createUser = (body) => {
  axios({
    method: 'post',
    url: 'http://localhost:3210/create',
    data: { data: 'some' }
  }).then(result => {
    console.log(result)
  }).catch(err => {
    console.log(err)
  })
}

export const getUser = async (user) => {
  const result = await axios.get(`http://localhost:3210/user/${user}`)
  return result.data
}

export const addToUser = async (userName, body, type) => {
  console.log(body)
  const data = {
    body: body,
    type: type
  }

  const result = await axios({
    method: 'post',
    url: `http://localhost:3210/update/${userName}`,
    data: data,
  })
}