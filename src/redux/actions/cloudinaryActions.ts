import { createAsyncThunk } from '@reduxjs/toolkit'
import { uploadImages } from '../api/cloudinary'
import { Iobj } from '../api/cloudinary'

export const addImages = createAsyncThunk(
  'cloudinary/addImages',
  async (obj: Iobj, { rejectWithValue }) => {
    try {
      const { data } = await uploadImages(obj)
      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
