import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser, logoutUser, registerUser } from '../api/auth'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

interface authProps {
  email: string
  password: string
}

export const login = createAsyncThunk(
  'auth/login',
  async (obj: authProps, { rejectWithValue }) => {
    try {
      const { data } = await loginUser(obj)
      cookies.set('user', data.user)

      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (obj: authProps, { rejectWithValue }) => {
    try {
      const { data } = await registerUser(obj)
      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await logoutUser()
      cookies.remove('user')
      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
