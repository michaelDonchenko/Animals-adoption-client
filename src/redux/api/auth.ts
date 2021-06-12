import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

interface authProps {
  email: string
  password: string
}

export const loginUser = async (obj: authProps) =>
  await axios.post(`${server_url}/login`, obj)

export const registerUser = async (obj: authProps) =>
  await axios.post(`${server_url}/register`, obj)

export const logoutUser = async () => await axios.post(`${server_url}/logout`)
