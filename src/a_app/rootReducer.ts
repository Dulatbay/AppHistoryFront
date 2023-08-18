import {combineReducers} from '@reduxjs/toolkit'
import {sessionSlice} from "@/e_entities/session";
import {baseApi} from "@/f_shared/api";
import {quizSlice} from '@/e_entities/quiz';

export const rootReducer = combineReducers({
    [sessionSlice.name]: sessionSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [quizSlice.name]: quizSlice.reducer
})
