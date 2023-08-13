import { mapSession } from '../lib/mapSession'
import { mapUser } from '../lib/mapUser'
import  {baseApi, SESSION_TAG} from '@/f_shared/api'

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: `/auth/login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [SESSION_TAG],
      transformResponse: (response) => mapSession(response),
    }),
    me: build.query({
      query: () => ({
        url: `/auth/me`,
      }),
      providesTags: [SESSION_TAG],
      transformResponse: (response) => mapUser(response),
    }),
    registration: build.query({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body
      }),
      invalidatesTags: [SESSION_TAG],
      transformResponse: (response) => mapSession(response),
    })
  }),
})

export const { useLoginMutation, useMeQuery } = sessionApi
