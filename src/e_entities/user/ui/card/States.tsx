import {Stack, Typography, useTheme} from "@mui/material";
import React from "react";

export const States = () => {
    const theme = useTheme();
    return (
        <>
            <Stack color={theme.palette.text.secondary}>
                <Typography color={theme.palette.error.main}>Пройдено истории: 18%</Typography>
                <Typography>Прошел квизов: 15</Typography>
                <Typography>Участвовал в турнирах: 3</Typography>
                <Stack>
                    <Typography color={'#DAC71C'}>1 место: 0</Typography>
                    <Typography lineHeight={0.7} color={'#C0C0C0'}>2 место: 0</Typography>
                    <Typography color={'#8F6700'}>3 место: 0</Typography>
                </Stack>
                <Typography>Друзей: 5</Typography>
                <Typography>Ответы/ошибки: 15/57</Typography>
            </Stack>
        </>
    )
}
