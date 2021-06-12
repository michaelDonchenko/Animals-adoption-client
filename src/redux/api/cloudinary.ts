import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

export interface Iobj {
  image: string
  postId: string
}

export const uploadImages = async (obj: Iobj) =>
  await axios.post(`${server_url}/upload-images`, obj)
