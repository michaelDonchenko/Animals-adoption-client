import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

export interface postProps {
  id?: number
  name: string
  age: number
  type: string
  location: string
  gender: string
  size: string
  color: string
  immune: boolean
  sterilized_or_castrated: boolean
  about: string
  phone: number
  adopted?: boolean
}

export interface IQuery {
  type?: string
  location?: string
  gender?: string
  size?: string
  adopted?: boolean
  age: number
  page: number
  order?: string
}

export const createPost = async (obj: postProps) =>
  await axios.post(`${server_url}/create-post`, obj)

export const fetchPosts = async (query: IQuery) =>
  await axios.get(
    `${server_url}/posts?type=${query.type ? query.type : ''}&location=${
      query.location ? query.location : ''
    }&gender=${query.gender ? query.gender : ''}&size=${
      query.size ? query.size : ''
    }&adopted=${query.adopted ? query.adopted : ''}&age=${
      query.age ? query.age : 100
    }&page=${query.page}&order=${query.order ? query.order : ''}`
  )

export const fetchPost = async (postId: string) =>
  await axios.get(`${server_url}/post/${postId}`)

export const fetchPostsByUser = async (page: number) =>
  await axios.get(`${server_url}/posts-by-user?page=${page}`)

export const update = async (obj: postProps) =>
  await axios.put(`${server_url}/update-post?id=${obj.id}`, obj)

export const destroyPost = async (postId: string) =>
  await axios.delete(`${server_url}/post/${postId}`)
