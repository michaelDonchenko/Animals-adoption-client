import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addImages } from '../actions/cloudinaryActions'

interface stateProps {
  loading: boolean
  error: null | string
  message: null | string
}

const initialState: stateProps = {
  loading: false,
  error: null,
  message: null,
}

export const cloudinarySlice: any = createSlice({
  name: 'cloudinary',
  initialState,
  reducers: {
    cleanCloudinarySuccess: (state, { payload }) => {
      state.message = null
    },
  },
  extraReducers: (builder) => {
    builder
      //new upload images
      .addCase(addImages.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(addImages.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message = payload.message
        state.error = null
      })
      .addCase(addImages.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action.payload.message
      })
  },
})

// Action creators are generated for each case reducer function
export const { cleanCloudinarySuccess } = cloudinarySlice.actions

export const cloudinaryState = (state: any) => state.cloudinary

export default cloudinarySlice.reducer
