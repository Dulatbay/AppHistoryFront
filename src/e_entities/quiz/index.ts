export {QuizCard} from './ui/card'
export {QuizDetail} from './ui/detail'
export {useCreateQuizMutation, useGetByFilterQuery, usePassQuizMutation, useGetDetailByIdQuery, useSetImageMutation} from './api/quizApi'
export type {Quiz, QuizDetail as QuizDetailType} from './model/types'
export type {QuizPostDto} from './api/types'
export {clearData, quizSlice, setChoosesIndex, selectQuizPlayState, setCurrentQuestionIndex} from './model/slice'
export type {QuizPassDto} from "./api/types";
export {getAvgResult, getCorrectAnswersCount} from "./lib";

