import {useAppSelector} from "@/f_shared/model";
import {selectQuizPlayState, setChoosesIndex, setCurrentQuestionIndex} from "@/e_entities/quiz";
import {TitleText} from "@/f_shared/TitleText";
import {Box, Button, Stack} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

export const QuizPlay = () => {
    const {choosesIndex, quizDetail, currentQuestionIndex} = useAppSelector(selectQuizPlayState)
    const [question, setQuestion] = useState(quizDetail?.questions[currentQuestionIndex])
    const dispatch = useDispatch()

    useEffect(() => {
        setQuestion(quizDetail?.questions[currentQuestionIndex])
    }, [currentQuestionIndex])

    if (!question)
        return <>Квиз закончился</>

    const clickVariant = (index: number) => {
        if (quizDetail?.questions && currentQuestionIndex < quizDetail?.questions.length) {
            if (!choosesIndex)
                dispatch(setChoosesIndex([index]))
            else dispatch(setChoosesIndex([...choosesIndex, index]))
            if (currentQuestionIndex !== quizDetail?.questions.length - 1)
                dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1))
            else setQuestion(undefined)
        }
    }

    return (
        <Stack alignItems={"start"}
               gap={4}
               sx={{border: "1px solid gray"}}
               padding={4}
               borderRadius={4}
        >
            <Box alignSelf={"center"}>
                <TitleText>
                    {question.questionText}
                </TitleText>
            </Box>
            <Stack gap={2} alignSelf={"stretch"}>
                {
                    question.variants.map((variant, index) => (
                        <Button key={index}
                                fullWidth
                                onClick={() => clickVariant(index)}
                                variant={"outlined"}>{variant.content}</Button>
                    ))
                }
            </Stack>
        </Stack>
    );
};
