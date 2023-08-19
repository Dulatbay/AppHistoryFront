import {useAppSelector} from "@/f_shared/model";
import {
    clearData,
    getAvgResult,
    getCorrectAnswersCount,
    selectQuizPlayState,
    setChoosesIndex,
    setCurrentQuestionIndex,
    usePassQuizMutation
} from "@/e_entities/quiz";
import {TitleText} from "@/f_shared/TitleText";
import {Backdrop, Box, Button, CircularProgress, Stack} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {QuizPassDto} from "@/e_entities/quiz/api/types";
import {setToPlayed} from "@/d_features/PlayQuiz";

export const QuizPlay = () => {
    const {choosesIndex, quizDetail, currentQuestionIndex} = useAppSelector(selectQuizPlayState)
    const [question, setQuestion] = useState(quizDetail?.questions[currentQuestionIndex])
    const [isPlayed, setIsPlayed] = useState(false);
    const [passQuiz, {isLoading}] = usePassQuizMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setQuestion(quizDetail?.questions[currentQuestionIndex])
    }, [currentQuestionIndex, quizDetail])

    const onQuizPassClick = useCallback(async () => {
        setIsPlayed(true)
            console.log("click")
        if (quizDetail == null) return;
        const toPassQuiz: QuizPassDto = {
            quizId: quizDetail?.id,
            choosesIndex
        }
        try {
            const response = await passQuiz(toPassQuiz).unwrap()
            const correctAnswers = getCorrectAnswersCount(quizDetail, choosesIndex);
            dispatch(setToPlayed({quizDetail: response, correctAnswers, avgResult: getAvgResult(quizDetail, choosesIndex, correctAnswers)}))
            dispatch(clearData())
            navigate('/quizzes/play-result')
            console.log("nav")
        } catch (e) {
            console.log(e)
        }
    }, [choosesIndex, quizDetail, passQuiz, dispatch, navigate]);


    if (!question && !isPlayed)
        return <Navigate to={"/"}/>


    const clickVariant = (index: number) => {
        if (quizDetail?.questions && currentQuestionIndex < quizDetail?.questions.length) {
            if (!choosesIndex)
                dispatch(setChoosesIndex([index]))
            else dispatch(setChoosesIndex([...choosesIndex, index]))
            if (currentQuestionIndex !== quizDetail?.questions.length - 1)
                dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1))
            else {
                setQuestion(undefined)
                setIsPlayed(true)
            }
        }
    }

    // @ts-ignore
    return (
        [
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isLoading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>,
            <Stack alignItems={"start"}
                   gap={4}
                   sx={{border: "1px solid gray"}}
                   padding={4}
                   borderRadius={4}
            >
                {
                    !isPlayed ? [
                        <Box alignSelf={"center"}>
                            <TitleText>
                                {
                                    // @ts-ignore
                                    question.questionText
                                }
                            </TitleText>
                        </Box>,
                        <Stack gap={2} alignSelf={"stretch"}>
                            {
                                // @ts-ignore
                                question.variants.map((variant, index) => (
                                    <Button key={index}
                                            fullWidth
                                            onClick={() => clickVariant(index)}
                                            variant={"outlined"}>{variant.content}</Button>
                                ))
                            }
                        </Stack>] : <Button fullWidth
                                            variant={"contained"}
                                            color={"primary"}
                                            onClick={onQuizPassClick}>Завершить</Button>
                }
            </Stack>]
    );
};
