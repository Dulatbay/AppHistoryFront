import {Box, Stack, Typography} from "@mui/material";
import React from "react";
import {TitleText} from "@/f_shared/TitleText";
import {useGetShockDayQuery} from "@/e_entities/user/api/userApi";

export const UpdateShockDay = () => {
    const {data, isFetching, isError} = useGetShockDayQuery();
    const isPlayToday = data ? data.lastPlay !== undefined : false;

    // Определяем дату завтрашнего дня
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilTomorrow = tomorrow.getTime() - new Date().getTime(); // Разница в миллисекундах

    const getBorderStyle = () => {
        if (isPlayToday) {
            return {
                border: `solid ${"#00FF00"} 10px`,
                bgcolor: "rgba(0, 255, 0, 0.33)",
            };
        } else {
            return {
                border: `solid ${"#FF0000"} 10px`,
                bgcolor: "rgba(255, 0, 0, 0.33)",
            };
        }
    };

    if (isFetching) return <>Загрузка...</>;
    else if (isError) return <>Ошибка</>;

    return (
        <>
            <Stack spacing={5} alignItems={"start"}>
                <Box textAlign={"center"}>
                    <TitleText>Обновите ударный режим</TitleText>
                </Box>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    width={230}
                    height={230}
                    borderRadius={"100%"}
                    alignSelf={"center"}
                    sx={{
                        cursor: "pointer",
                        ...getBorderStyle(),
                    }}
                >
                    <Typography fontWeight={600} textAlign={"center"} fontSize={70}>
                        {data && data.shockDay}
                    </Typography>
                </Box>
                {!isPlayToday && (
                    <Box textAlign="center">
                        <Typography>
                            Осталось времени до обновления:{" "}
                            {Math.floor(timeUntilTomorrow / (1000 * 60 * 60))} часов{" "}
                            {Math.floor((timeUntilTomorrow % (1000 * 60 * 60)) / (1000 * 60))} минут
                        </Typography>
                    </Box>
                )}
            </Stack>
        </>
    );
};
