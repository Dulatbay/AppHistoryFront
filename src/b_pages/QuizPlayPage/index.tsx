import {Box, Button} from "@mui/material";
import {PageContentContainer} from "@/f_shared/PageContentContainer";
import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {clearData} from "@/e_entities/quiz";
import {QuizPlayContainer} from "@/c_widgets/QuizPlayHeader";

export const QuizPlayPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const backButtonHandler = () => {
        dispatch(clearData())
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
                <QuizPlayContainer/>
            </PageContentContainer>
        </Box>
    );
};
