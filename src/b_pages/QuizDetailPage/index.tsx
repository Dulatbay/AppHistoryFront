import {PageContentContainer} from "@/f_shared/PageContentContainer";
import {Backdrop, Box, Button, CircularProgress} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import React from "react";
import {clearData, QuizDetail, useGetDetailByIdQuery} from "@/e_entities/quiz";
import {useDispatch} from "react-redux";

export const QuizDetailPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {data, isFetching, isError} = useGetDetailByIdQuery(id ? +id : -1)
    const dispatch = useDispatch()
    const backButtonHandler = () => {
        dispatch(clearData())
        navigate(-1)
    }

    if (isError) return <>Error</>

    return (
        <>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isFetching}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
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
                    {data ?
                        <QuizDetail {...data}/>
                        : "Ошибка"
                    }
                </PageContentContainer>
            </Box>
        </>
    );
};
