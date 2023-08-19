import {Stack, Typography} from "@mui/material";
import {QuizPlay} from "@/d_features/PlayQuiz";
import {useAppSelector} from "@/f_shared/model";
import {selectQuizPlayState} from "@/e_entities/quiz";

export const QuizPlayContainer = () => {
    const {quizDetail, currentQuestionIndex} = useAppSelector(selectQuizPlayState)
    return (
        <Stack margin={"auto"}
               gap={4}>
            <Stack gap={1}>
                <Typography>Вопрос: {currentQuestionIndex + 1}/{quizDetail?.questions.length}</Typography>
            </Stack>
            <QuizPlay />
        </Stack>
    );
};
