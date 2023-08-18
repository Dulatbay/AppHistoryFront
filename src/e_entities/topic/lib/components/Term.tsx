import {Stack, Typography} from "@mui/material";
import {baseNode} from "@/e_entities/topic/lib/types";
import React from "react";

interface Props extends baseNode {
    termText: string;
    description: string;
    isWithHyphen: boolean;
}

export const Term = ({termText, isWithHyphen, description}: Props) => {
    return (
        <Stack direction={"row"} alignItems={"end"} gap={2}>
            <Typography fontSize={24}>
                <b>{termText}</b>
            </Typography>
            <Typography fontSize={24}>
                {isWithHyphen && "-"}
            </Typography>
            <Typography fontSize={18}>
                {description}
            </Typography>
        </Stack>
    )
};
