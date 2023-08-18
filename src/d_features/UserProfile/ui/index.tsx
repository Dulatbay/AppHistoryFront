import {Button, Stack, Typography} from "@mui/material";
import React from "react";
import {UserCard} from "@/e_entities/user";
import {useAppSelector} from "@/f_shared/model";
import {useGetUserCardQuery} from "@/e_entities/user/api/userApi";

export const UserProfile = () => {
    const user = useAppSelector(state => state.session.user);
    const {data, isError, isFetching} = useGetUserCardQuery(user ? user.id : -1);

    if (isFetching) return <>Загрузка...</>;
    else if (isError || !data) return <>Ошибка</>;


    return (
        <Stack>
            <Stack flexDirection={'row'}
                   justifyContent={'space-between'} alignItems={'center'}>
                <Typography fontSize={18}>Профиль</Typography>
                <Button size={'small'}>Изменить</Button>
            </Stack>
            <UserCard {...data}/>
        </Stack>
    );
};
