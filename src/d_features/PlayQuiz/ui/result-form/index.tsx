import {useAppSelector} from "@/f_shared/model";
import {selectPlayedState} from "@/d_features/PlayQuiz/model/slice";
import {useNavigate} from "react-router-dom";
import {TitleText} from "@/f_shared/TitleText";
import { Stack } from "@mui/material";
import {Typography} from "@mui/material";

export const QuizPlayedResultForm = () => {
    const navigate = useNavigate()
    const {quizDetail, avgResult, correctAnswers, isPlayed} = useAppSelector(selectPlayedState)

    if (!isPlayed || !quizDetail)
        navigate('/')

    return (
        <Stack>
            <TitleText>Квиз пройден!</TitleText>
            <TitleText>Название: {quizDetail?.title}</TitleText>
            <Typography>Результат: {avgResult?.toFixed(1)}%</Typography>
            <Typography>Правильные ответы: {correctAnswers}/{quizDetail?.questions?.length}</Typography>
        </Stack>
    );
};
