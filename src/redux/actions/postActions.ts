import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createPost,
  destroyPost,
  fetchPost,
  fetchPosts,
  fetchPostsByUser,
  update,
} from '../api/post'
import { postProps, IQuery } from '../api/post'

export const newPost = createAsyncThunk(
  'post/newPost',
  async (obj: postProps, { rejectWithValue }) => {
    try {
      const { data } = await createPost(obj)

      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async (obj: IQuery, { rejectWithValue }) => {
    try {
      const { data } = await fetchPosts(obj)

      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const getPostsByUser = createAsyncThunk(
  'post/getPostsByUser',
  async (page: number, { rejectWithValue }) => {
    try {
      const { data } = await fetchPostsByUser(page)

      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const getPost = createAsyncThunk(
  'post/getPost',
  async (postId: string, { rejectWithValue }) => {
    try {
      const { data } = await fetchPost(postId)

      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const getPostToUpdate = createAsyncThunk(
  'post/getPostToUpdate',
  async (postId: any, { rejectWithValue }) => {
    try {
      const { data } = await fetchPost(postId)

      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const updatePost = createAsyncThunk(
  'post/updatePost',
  async (obj: postProps, { rejectWithValue }) => {
    try {
      const { data } = await update(obj)

      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (postId: string, { rejectWithValue }) => {
    try {
      const { data } = await destroyPost(postId)

      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
