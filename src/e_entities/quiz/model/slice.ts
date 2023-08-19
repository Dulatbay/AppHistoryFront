import {createSlice} from '@reduxjs/toolkit';
import {QuizDetail} from "@/e_entities/quiz/model/types";
import {QuizDetailType} from "@/e_entities/quiz";


type QuizState = {
    quizDetail: QuizDetail | null,
    choosesIndex: Array<number>,
    currentQuestionIndex: number
}

const initialState: QuizState = {
    quizDetail: null,
    choosesIndex: [],
    currentQuestionIndex: -1
};

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        clearData: (state) => {
            state.quizDetail = null
            state.choosesIndex = []
            state.currentQuestionIndex = -1
        },
        setChoosesIndex: (state, action) => {
            state.choosesIndex = action.payload
        },
        setCurrentQuestionIndex: (state, action) => {
            state.currentQuestionIndex = action.payload
        },
        setQuiz: (state, {payload}) => {
            state.choosesIndex = []
            state.quizDetail = payload
            state.currentQuestionIndex = 0
        }
    }
});

export const {clearData, setQuiz, setChoosesIndex, setCurrentQuestionIndex} = quizSlice.actions;
export const selectQuizPlayState = (state: RootState) =>
    state.quiz




export default quizSlice.reducer;
