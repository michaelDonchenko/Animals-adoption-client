import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  getPost,
  getPosts,
  getPostsByUser,
  newPost,
  getPostToUpdate,
  updatePost,
  deletePost,
} from '../actions/postActions'

interface stateProps {
  post: null | object
  createdPost: null | object
  postToUpdate: null | object
  posts: []
  postsByUser: []
  count: undefined | number
  pages: undefined | number
  loading: boolean
  error: null | string
  message: null | string
  queryObj: {
    age: number | null
    type: string
    location: string
    gender: string
    size: string
    adopted: boolean | ''
    page: number
    order: string
  }
}

const initialState: stateProps = {
  post: null,
  createdPost: null,
  postToUpdate: null,
  posts: [],
  postsByUser: [],
  count: undefined,
  pages: undefined,
  loading: false,
  error: null,
  message: null,
  queryObj: {
    age: null,
    type: '',
    location: '',
    gender: '',
    size: '',
    adopted: '',
    page: 1,
    order: '',
  },
}

export const postSlice: any = createSlice({
  name: 'post',
  initialState,
  reducers: {
    cleanPostSuccess: (state, { payload }) => {
      state.createdPost = null
      state.message = null
    },
    setQueryType: (state, action) => {
      state.queryObj.type = action.payload
    },
    setQueryPage: (state, action) => {
      state.queryObj.page = action.payload
    },
    setQueryObject: (state, action) => {
      state.queryObj = action.payload
    },
    resetFilters: (state, action) => {
      state.queryObj.age = null
      state.queryObj.type = ''
      state.queryObj.location = ''
      state.queryObj.gender = ''
      state.queryObj.size = ''
      state.queryObj.adopted = ''
      state.queryObj.page = 1
    },
    resetPostToUpdate: (state, action) => {
      state.postToUpdate = null
    },
    cleanMessage: (state, action) => {
      state.message = null
    },
  },
  extraReducers: (builder) => {
    builder
      //new post
      .addCase(newPost.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(newPost.fulfilled, (state, { payload }) => {
        state.loading = false
        state.createdPost = payload.post
        state.message = payload.message
        state.error = null
      })
      .addCase(newPost.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
      //get posts
      .addCase(getPosts.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.loading = false
        state.posts = payload.posts.rows
        state.count = payload.posts.count
        state.pages = payload.pages
        state.error = null
      })
      .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
      // get posts by user
      .addCase(getPostsByUser.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(getPostsByUser.fulfilled, (state, { payload }) => {
        state.loading = false
        state.postsByUser = payload.posts.rows
        state.count = payload.posts.count
        state.pages = payload.pages
        state.error = null
      })
      .addCase(getPostsByUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : action.payload === 'Unauthorized'
          ? (state.error = action.payload)
          : (state.error = action.payload.message)
      })
      //get single post
      .addCase(getPost.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(getPost.fulfilled, (state, { payload }) => {
        state.loading = false
        state.post = payload.post
        state.error = null
      })
      .addCase(getPost.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
      //get post to update
      .addCase(getPostToUpdate.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(getPostToUpdate.fulfilled, (state, { payload }) => {
        state.loading = false
        state.postToUpdate = payload.post
        state.error = null
      })
      .addCase(
        getPostToUpdate.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false
          action.payload.errors
            ? (state.error = action.payload.errors[0].msg)
            : (state.error = action.payload.message)
        }
      )
      //update post
      .addCase(updatePost.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(updatePost.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message = payload.message
        state.error = null
      })
      .addCase(updatePost.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
      //delete post
      .addCase(deletePost.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.loading = false
        state.message = payload.message
        state.error = null
      })
      .addCase(deletePost.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
  },
})

// Action creators are generated for each case reducer function
export const {
  cleanPostSuccess,
  setQueryType,
  setQueryPage,
  resetFilters,
  resetPostToUpdate,
  setQueryObject,
  cleanMessage,
} = postSlice.actions

export const postState = (state: any) => state.post

export default postSlice.reducer
