import {Stack, Typography} from "@mui/material";
import {QuizPlay} from "@/d_features/PlayQuiz";
import {useAppSelector} from "@/f_shared/model";
import {selectQuizPlayState} from "@/e_entities/quiz";
import {getAvgResult} from "@/e_entities/quiz/model/slice";

export const QuizPlayContainer = () => {
    const {quizDetail, currentQuestionIndex} = useAppSelector(selectQuizPlayState)
    const avgResult = useAppSelector(getAvgResult)
    return (
        <Stack margin={"auto"}
               gap={4}>
            <Stack gap={1}>
                <Typography>Ваш текущий результат: {avgResult}%</Typography>
                <Typography>Вопрос: {currentQuestionIndex + 1}/{quizDetail?.questions.length}</Typography>
            </Stack>
            <QuizPlay/>
        </Stack>
    );
};
