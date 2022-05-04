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