import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'
import { login, logout, register } from '../actions/authActions'

const cookies = new Cookies()

interface stateProps {
  user: null | string
  loading: boolean
  error: null | string
  message: null | string
}

const initialState: stateProps = {
  user: cookies.get('user') ? cookies.get('user') : null,
  loading: false,
  error: null,
  message: null,
}

export const authSlice: any = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetMessage: (state, { payload }) => {
      state.message = null
    },
    resetError: (state, { payload }) => {
      state.error = null
    },
    forceLogout: (state, action) => {
      state.user = null
      state.error = null
      cookies.remove('user')
      cookies.remove('token')
    },
  },
  extraReducers: (builder) => {
    builder
      //login
      .addCase(login.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false
        state.user = payload.user
        state.message = payload.message
        state.error = null
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
      //logout
      .addCase(logout.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.loading = false
        state.user = null
        state.error = null
      })
      .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
      //register
      .addCase(register.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message = payload.message
        state.error = null
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
  },
})

// Action creators are generated for each case reducer function
export const { resetMessage, resetError, forceLogout } = authSlice.actions

export const authState = (state: any) => state.auth

export default authSlice.reducer
