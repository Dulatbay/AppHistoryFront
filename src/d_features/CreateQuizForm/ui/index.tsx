import {Backdrop, Button, CircularProgress, Divider, Stack} from "@mui/material";
import React, {ChangeEvent, useCallback, useState} from "react";
import {Header} from "@/d_features/CreateQuizForm/ui/Header";
import {QuestionForm} from "@/d_features/CreateQuizForm/ui/QuestionForm";
import {Question} from "@/e_entities/question";
import {QuizPostDto, useCreateQuizMutation} from "@/e_entities/quiz";
import {Navigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useGetTitlesQuery} from "@/e_entities/module";

export const CreateQuizForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [questions, setQuestions] = useState(Array<Question>);
    const [createQuiz, {isSuccess, isError, isLoading, error}] = useCreateQuizMutation()

    const {data} = useGetTitlesQuery()
    console.log(data)

    const onTitleChange = useCallback((event: ChangeEvent) => {
        // @ts-ignore
        setTitle(event.target.value)
    }, []);

    const onDescriptionChange = useCallback((event: ChangeEvent) => {
        // @ts-ignore
        setDescription(event.target.value)
    }, []);

    const onCreateQuizHandler = useCallback(async () => {
        const getAvgLevel = () => {
            let sum = 0;
            questions.forEach((q) => (sum += q.level));
            return sum / questions.length;
        };

        const quiz: QuizPostDto = {
            title: title.trim(),
            description: description.trim().length ? description.trim() : null,
            questions: questions,
            level: Math.floor(getAvgLevel()),
            isVerified: false,
        };

        try {
            const response = await createQuiz(quiz);
            console.log("Quiz created:", response);
        } catch (error) {
            console.error("Error creating quiz:", error);
        }
    }, [createQuiz, description, title, questions]);

    if (isSuccess)
        return <Navigate to={'/'}/>

    if (isError) {
        // @ts-ignore
        toast(error.message, {
            toastId: "createError",
        })
        return <Navigate to={'/'}/>
    }


    return (
        <>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isLoading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Stack width={"50%"} gap={3}>
                <Header onDescriptionChange={onDescriptionChange} onTitleChange={onTitleChange}
                        description={description} title={title}/>
                <Divider flexItem/>
                <QuestionForm moduleTopicsTitle={data} questions={questions} setQuestions={setQuestions}/>
                <Button disabled={questions.length < 2 || !title.trim().length}
                        fullWidth
                        variant={"contained"}
                        color={"success"}
                        size={"large"}
                        onClick={onCreateQuizHandler}>Создать квиз</Button>
            </Stack>
        </>
    );
};
