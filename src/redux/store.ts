import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/auth'
import cloudinarySlice from './reducers/cloudinary'
import postSlice from './reducers/post'

export default configureStore({
  reducer: { auth: authSlice, post: postSlice, cloudinary: cloudinarySlice },
})
