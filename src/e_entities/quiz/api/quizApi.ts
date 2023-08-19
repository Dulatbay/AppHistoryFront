import {baseApi} from "@/f_shared/api";
import {Quiz} from "@/e_entities/quiz/model/types";
import {QuizPassDto, QuizPostDto} from "@/e_entities/quiz/api/types";
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
        }),
        passQuiz: build.mutation<QuizDetailType, QuizPassDto>({
            query: (quizPassDto) => ({
                url: '/quizzes/pass-quiz',
                body: quizPassDto,
                method: "POST"
            })
        }),
        setImage: build.mutation<void, {id: number, formData: FormData}>({
            query: ({id, formData}) => ({
                url: `/quizzes/set-image/${id}`,
                method: "PATCH",
                body: formData
            })
        })
    }),
})

export const {useCreateQuizMutation, useGetByFilterQuery, useGetDetailByIdQuery, usePassQuizMutation, useSetImageMutation} = quizApi
