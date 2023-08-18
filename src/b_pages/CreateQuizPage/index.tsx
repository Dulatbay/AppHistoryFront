import {CreateQuizForm} from "@/d_features/CreateQuizForm";
import {Box, Button} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import {PageContentContainer} from "@/f_shared/PageContentContainer";

export const CreateQuizPage = () => {
    const navigate = useNavigate()

    const backButtonHandler = () => {
        navigate(-1)
    }

    return (
        <>
            <Box position={"relative"}>
                <Box sx={{
                    position: 'absolute',
                    marginTop: '24px',
                    marginLeft: '24px',
                    width: "300px"
                }}>
                    <Button onClick={backButtonHandler}>{"<-"} Назад</Button>
                </Box>
                <PageContentContainer>
                    <CreateQuizForm/>
                </PageContentContainer>
            </Box>
        </>
    );
};
