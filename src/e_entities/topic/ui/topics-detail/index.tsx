import {Stack} from "@mui/material";
import React from "react";
import {Topic} from "../../model/types";
import {TitleText} from "@/f_shared/TitleText";
import {getComponent} from "@/e_entities/topic/lib/parser";

export const TopicsDetail = ({topics}: { topics: Topic[] }) => {
    return (
        <Stack gap={5} alignItems={"stretch"} width={"100%"}>
            {topics.map(topic =>
                <Stack key={topic.id}>
                    <TitleText key={topic.id}>{topic.title}</TitleText>
                    {getComponent(JSON.parse(topic.content))}
                </Stack>)}
        </Stack>
    );
};
