import React from "react";
import {Box, Button} from "@mui/material";
import {TopicTabBar} from "@/d_features/TopicTabBar";
import {useNavigate, useParams} from "react-router-dom";
import {useGetTopicsByModuleIdQuery} from "@/e_entities/topic";
import {PageContentContainer} from "@/f_shared/PageContentContainer";
import {TopicsDetail} from "e_entities/topic/ui/topics-detail";

export const TopicPage = () => {
    const {moduleId} = useParams()
    const {data, isFetching, isError} = useGetTopicsByModuleIdQuery(moduleId ? +moduleId : -1)
    const navigate = useNavigate()

    if (isError) return <>Ошибка</>
    else if (isFetching) return <>{"<b>Загрузка</b>"}</>

    const backButtonHandler = () => {
        navigate(-1)
    }

    return (
        <>
            {data && (
                <Box position={"relative"}>
                    <Box sx={{
                        position: 'absolute',
                        marginTop: '24px',
                        marginLeft: '24px',
                        width: "300px"
                    }}>
                        <Button onClick={backButtonHandler}>{"<-"} Назад</Button>
                        <TopicTabBar moduleTitle={data.title} topicsTitle={data.topics.map(topic => topic.title)}/>
                    </Box>
                    <PageContentContainer>
                        <TopicsDetail topics={data.topics}/>
                    </PageContentContainer>
                </Box>
            )}
        </>
    );

};
