import {QuizDetailType} from '@/e_entities/quiz'
import {Box, Button, Stack, Typography} from '@mui/material';
import {TitleText} from "@/f_shared/TitleText";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {QuestionCard} from "@/e_entities/question";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setQuiz} from "@/e_entities/quiz/model/slice";

interface props extends QuizDetailType {

}

export const QuizDetail = ({authorDto, id, questions, description, title, imageUrl, averageResult}: props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onPlayQuiz = useCallback(() => {
        dispatch(setQuiz({authorDto, id, questions, description, title, imageUrl, averageResult}))
        navigate('/quizzes/play')
    }, []);

    return (
        <Stack direction={"row"}
               justifyContent={"space-between"}
               width={"65%"}
               gap={10}
        >
            <Stack>
                <TitleText>{title}</TitleText>
                <Box width={200} height={200} sx={{background: "gray"}} borderRadius={4} mt={1} overflow={"hidden"}>
                    <img src={imageUrl} alt={""} style={{height: "100%"}}/>
                </Box>
                <Stack direction={"column"}>
                    <TitleText>{authorDto.username}</TitleText>
                    <Stack direction={"row"}>
                        {
                            [1, 2, 3, 4, 5].map(lvl => <StarBorderIcon key={lvl}/>)
                        }
                    </Stack>
                </Stack>
                <Typography sx={{opacity: 0.8}}
                            fontSize={16}>Всего вопросов: {questions.length}</Typography>
                <Typography sx={{opacity: 0.8}}
                            fontSize={16}>Средний
                    результат: {averageResult === -1 ? "0%" : `${averageResult.toFixed(1)}%`}</Typography>
                <Typography sx={{opacity: 0.8}}
                            fontSize={14}>Описание: {description}</Typography>
                <Stack direction={"row"} justifyContent={"space-between"} mt={2}>
                    <BookmarkBorderIcon/>
                    <Button variant={"contained"} size={"small"} onClick={onPlayQuiz}>GO</Button>
                </Stack>
            </Stack>
            <Box flex={1}>
                <TitleText>Вопросы:</TitleText>
                <Stack gap={4} mt={2}>
                    {questions.map((question, index) =>
                        <QuestionCard {...question} number={index + 1}
                                      key={index}
                                      isFocus={false}
                                      isFocusCorrectIndex={false}
                                      topicTitle={question.topicTitle}/>)}
                </Stack>
            </Box>
        </Stack>
    );
};
