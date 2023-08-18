import {baseApi} from "@/f_shared/api";
import {Quiz} from "@/e_entities/quiz/model/types";
import {QuizPostDto} from "@/e_entities/quiz/api/types";
import {QuizDetailType} from "@/e_entities/quiz";

export const quizApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getByFilter: build.query<Quiz[], { type: string, category: string }>({
            query: ({type, category}) => ({
                url: `/quizzes/filter?type=${type}&category=${category}`
            })
        }),
        createQuiz: build.mutation<Quiz, QuizPostDto>({
            query: (body) => ({
                url: "/quizzes",
                body,
                method: "POST"
            })
        }),
        getDetailById: build.query<QuizDetailType, number>({
            query: (id) => ({
                url: `/quizzes/detail/${id}`
            })
        })
    }),
})

export const {useCreateQuizMutation, useGetByFilterQuery, useGetDetailByIdQuery} = quizApi
