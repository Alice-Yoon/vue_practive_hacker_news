import axios from 'axios'

const config = {
  baseURL: 'https://api.hnpwa.com/v0'
}

async function getNewsList() {
  try {
    const response = await axios.get(`${config.baseURL}/news/1.json`)
    return response
  } catch (error) {
    console.log("api err:", error)
  }
}

function getAskList() {
  try {
    const response = axios.get(`${config.baseURL}/ask/1.json`)
    return response
  } catch (error) {
    console.log("api err:", error)
  }
}

function getJobsList() {
  try {
    const response = axios.get(`${config.baseURL}/jobs/1.json`)
    return response
  } catch (error) {
    console.log("api err:", error)
  }
}

export {
  getNewsList,
  getAskList,
  getJobsList
}