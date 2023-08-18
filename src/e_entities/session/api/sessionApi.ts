import {baseApi, SESSION_TAG} from '@/f_shared/api'
import {mapSession} from '../lib/mapSession'
import {mapUser} from '../lib/mapUser'
import {type Session, type User} from '../model/types'
import {type RequestLoginBody, type RequestRegisterBody, type SessionDto, type UserDto} from './types'

export const sessionApi = baseApi.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<Session, RequestLoginBody>({
            query: (body) => ({
                url: `/auth/login`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [SESSION_TAG],
            transformResponse: (response: SessionDto) => mapSession(response),
        }),
        me: build.query<User, void>({
            query: () => ({
                url: `/auth/me`,
            }),
            providesTags: [SESSION_TAG],
            transformResponse: (response: UserDto) => mapUser(response),
        }),
        registration: build.mutation<Session, RequestRegisterBody>({
            query: (body) => ({
                url: '/auth/register',
                method: 'POST',
                body
            }),
            invalidatesTags: [SESSION_TAG],
            transformResponse: (response: SessionDto) => mapSession(response),
        })
    }),
})

export const {useMeQuery} = sessionApi
