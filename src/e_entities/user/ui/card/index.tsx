import {Box, Stack} from "@mui/material";
import {TitleText} from "@/f_shared/TitleText";
import {States} from "./States";
import React from "react";
import {UserCardType} from "@/e_entities/user";


export const UserCard = ({username, states}: UserCardType) => {

    return (
        <Stack>
            <TitleText>{username}</TitleText>
            <Stack flexDirection={'row'}
                   justifyContent={'space-between'}
                   alignItems={'start'}>
                <States {...states}/>
                <Box width={250} height={250} bgcolor={'gray'} borderRadius={'100%'}></Box>
            </Stack>
        </Stack>
    )
}
