import {Stack, Typography, useTheme} from "@mui/material";
import React from "react";
import {StatesType} from "@/e_entities/user";


export const States = ({passedHistoryPercent, passedQuizzes, participatedTournaments, friendsCount, shockDay, firstPlace, thirdPlace, secondPlace, correctAnswers, incorrectAnswers}: StatesType) => {
    const theme = useTheme();
    return (
        <>
            <Stack color={theme.palette.text.secondary}>
                <Typography color={theme.palette.error.main}>Пройдено истории: {passedHistoryPercent}</Typography>
                <Typography>Прошел квизов: {passedQuizzes}</Typography>
                <Typography>Участвовал в турнирах: {participatedTournaments}</Typography>
                <Stack>
                    <Typography color={'#DAC71C'}>1 место: {firstPlace}</Typography>
                    <Typography lineHeight={0.7} color={'#C0C0C0'}>2 место: {secondPlace}</Typography>
                    <Typography color={'#8F6700'}>3 место: {thirdPlace}</Typography>
                </Stack>
                <Typography>Друзей: {friendsCount}</Typography>
                <Typography>Правильные ответы/ошибки: {correctAnswers}/{incorrectAnswers}</Typography>
                <Typography>Ударный режим: {shockDay}</Typography>
            </Stack>
        </>
    )
}
