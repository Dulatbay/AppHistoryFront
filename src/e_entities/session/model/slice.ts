import {createSlice} from '@reduxjs/toolkit'
import {sessionApi} from '../api/sessionApi'
import {User} from "@/e_entities/session/model/types";


type SessionSliceState = {
    token?: string
    user?: User
    isAuthorized: boolean
}


const initialState: SessionSliceState = {
    isAuthorized: false
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        clearSessionData: (state) => {
            state.isAuthorized = false
            state.user = undefined
            state.token = undefined
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            sessionApi.endpoints.login.matchFulfilled,
            (state, {payload}) => {
                state.isAuthorized = true
                // say TypeScript that isAuthorized = true
                if (state.isAuthorized) {
                    state.user = payload.user
                    state.token = payload.token
                }
            }
        )
        builder.addMatcher(
            sessionApi.endpoints.registration.matchFulfilled,
            (state, {payload}) => {
                state.isAuthorized = true
                // say TypeScript that isAuthorized = true
                if (state.isAuthorized) {
                    console.log(payload)
                    state.user = payload.user
                    state.token = payload.token
                    console.log(state)
                }
            }
        )
    },
})

export const selectIsAuthorized = (state: RootState) =>
    state.session.isAuthorized

export const selectUserId = (state: RootState) => state.session.user?.id

export const {clearSessionData} = sessionSlice.actions
