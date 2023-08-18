import {fetchBaseQuery} from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
    baseUrl: "https://localhost:7279/api/",
    prepareHeaders: (headers, {getState}) => {
        const {token} = (getState() as RootState).session

        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }

        return headers
    },
})
