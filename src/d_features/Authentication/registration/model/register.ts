import {createAsyncThunk} from '@reduxjs/toolkit'
import {isFetchBaseQueryError} from '@/f_shared/api'
import {sessionApi} from "@/e_entities/session";

type Params = {
    email: string
    password: string
    username: string
}

export const registerThunk = createAsyncThunk<void, Params, { state: RootState }>(
    'authentication/register',
    async (body: Params, {dispatch}) => {
        try {
            console.log(body)
            const res = await dispatch(sessionApi.endpoints.registration.initiate(body)).unwrap()
            console.log(res)
        } catch (error: any) {
            if (isFetchBaseQueryError(error)) {
                if (typeof error.data.message === 'string') {
                    throw new Error(error.data.message)
                }
            }

            throw new Error('Unknown error')
        }
    }
)
