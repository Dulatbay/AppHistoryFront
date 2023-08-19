import {createSlice} from "@reduxjs/toolkit";
import {QuizDetailType} from "@/e_entities/quiz";

type PlayedQuizState = {
    isPlayed: boolean,
    correctAnswers: number | undefined,
    quizDetail: QuizDetailType | undefined
    avgResult: number | undefined
}

const initialState: PlayedQuizState = {
    isPlayed: false,
    avgResult: undefined,
    quizDetail: undefined,
    correctAnswers: undefined
};

export const playedQuizSlice = createSlice({
    name: 'playedQuiz',
    initialState,
    reducers: {
        clearData: (state) => {
            state.isPlayed = false
            state.quizDetail = undefined
            state.avgResult = undefined
            state.correctAnswers = undefined
        },
        setToPlayed: (state, {payload}) => {
            state.isPlayed = true
            state.quizDetail = payload.quizDetail
            state.correctAnswers = payload.correctAnswers
            state.avgResult = payload.avgResult
        }
    }
})
export const {setToPlayed, clearData} = playedQuizSlice.actions;

export const selectPlayedState = (state: RootState) => state.playedQuiz
export default playedQuizSlice.reducer;
