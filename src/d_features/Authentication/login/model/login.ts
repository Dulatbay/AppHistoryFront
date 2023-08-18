import {createAsyncThunk} from '@reduxjs/toolkit'
import {isFetchBaseQueryError} from '@/f_shared/api'
import {sessionApi} from "@/e_entities/session";

type Params = {
    email: string
    password: string
}

export const loginThunk = createAsyncThunk<void, Params, { state: RootState }>(
    'authentication/login',
    async (body: Params, {dispatch}) => {
        try {
            await dispatch(sessionApi.endpoints.login.initiate(body)).unwrap()
        } catch (error: any) {
            console.log(error)
            if (isFetchBaseQueryError(error)) {
                if (typeof error.data.message === 'string') {
                    throw new Error(error.data.message)
                }
            }

            throw new Error('Unknown error')
        }
    }
)
