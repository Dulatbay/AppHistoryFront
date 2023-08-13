import { createSlice } from '@reduxjs/toolkit'
import { sessionApi } from '../api/sessionApi'


const initialState = {
  isAuthorized: false,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSessionData: (state) => {
      state.accessToken = undefined
      state.userId = undefined
      state.isAuthorized = false
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      sessionApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.isAuthorized = true

        // say TypeScript that isAuthorized = true
        if (state.isAuthorized) {
          state.userId = payload.userId
          state.accessToken = payload.accessToken
        }
      }
    )
  },
})

export const selectIsAuthorized = (state) => state.session.isAuthorized

export const selectUserId = (state) => state.session.userId

export const { clearSessionData } = sessionSlice.actions
