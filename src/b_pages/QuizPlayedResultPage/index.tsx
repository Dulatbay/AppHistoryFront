import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Box, Button} from "@mui/material";
import {PageContentContainer} from "@/f_shared/PageContentContainer";
import React from "react";
import {clearData, QuizPlayedResultForm} from "@/d_features/PlayQuiz";
import {sessionApi} from "@/e_entities/session";

export const QuizPlayedResultPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const backButtonHandler = () => {
        dispatch(clearData())
        dispatch(sessionApi.util.resetApiState())
        navigate(-1)
    }

    return (
        <Box position={"relative"}>
            <Box sx={{
                position: 'absolute',
                marginTop: '24px',
                marginLeft: '24px',
                width: "300px"
            }}>
                <Button onClick={backButtonHandler}>{"<-"} Выйти</Button>
            </Box>
            <PageContentContainer>
                <QuizPlayedResultForm />
            </PageContentContainer>
        </Box>
    )
};
