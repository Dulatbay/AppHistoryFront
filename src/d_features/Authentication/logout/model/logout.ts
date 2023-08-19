import {createAsyncThunk} from '@reduxjs/toolkit'
import {SESSION_TAG} from '@/f_shared/api'
import {wait} from '@/f_shared/lib'
import {clearSessionData, sessionApi} from "@/e_entities/session";

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
    'authentication/logout',
    async (_: unknown, {dispatch}) => {
        dispatch(clearSessionData())

        // Wait 10ms to invalidateTags in next event loop tick.
        // Otherwise after invalidate related requests with SESSION_TAG
        // will be started, but isAuthorized will still be equal to true
        await wait(10)

        // 👇 ATTENTION: This line clear all baseApi state instead of sessionApi
        dispatch(sessionApi.util.resetApiState())

        dispatch(sessionApi.util.invalidateTags([SESSION_TAG]))
    }
)
