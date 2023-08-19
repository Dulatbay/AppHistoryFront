import {QuizDetailType} from "@/e_entities/quiz";



export const getCorrectAnswersCount = (quizDetail : QuizDetailType, choosesIndex:number[]) => {
    let correctAnswers = 0;
    for (let i = 0; i < choosesIndex.length; i++) {
        if (quizDetail?.questions[i].correctVariantIndex ===choosesIndex[i]) {
            correctAnswers++;
        }
    }
    return correctAnswers
}
export const getAvgResult = (quizDetail : QuizDetailType, choosesIndex:number[], correctAnswersCount: number) => {
    if (!quizDetail?.questions.length || correctAnswersCount === 0) {
        return 0;
    }

    const totalQuestions = quizDetail?.questions.length;
    return (correctAnswersCount / totalQuestions) * 100;
}

