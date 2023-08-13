import {fetchBaseQuery} from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
    baseUrl: "https://localhost:7279/api/",
    prepareHeaders: (headers, { getState }) => {
        const { accessToken } = (getState() as RootState).session

        if (accessToken) {
            headers.set('Authorization', `Bearer ${accessToken}`)
        }

        return headers
    },
})
