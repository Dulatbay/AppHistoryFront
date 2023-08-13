import {createApi} from "@reduxjs/toolkit/query";
import {MODULE_TAG, QUIZ_TAG, SESSION_TAG, TOPIC_TAG} from "./tags";
import {baseQueryWithReauth} from "./baseQueryWithReauth";

export const baseApi = createApi({
    tagTypes: [SESSION_TAG, TOPIC_TAG, MODULE_TAG, QUIZ_TAG],
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
})
