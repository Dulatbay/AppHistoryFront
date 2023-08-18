import {Box, Button, Stack, Typography} from "@mui/material";
import QuizIcon from '@mui/icons-material/Quiz';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BoltIcon from '@mui/icons-material/Bolt';
import {BackgroundImage} from "@/f_shared/BackgroundImage";
import {FocusableContainer} from "@/f_shared/FocusableContainer";
import {MouseEventHandler, ReactNode} from "react";
import {Module} from "@/e_entities/module/model/types";
import {useNavigate} from "react-router-dom";

const iconState = (icon: ReactNode, text: string) => {
    return <Stack flexDirection={'row'}
                  alignItems={'center'}
                  gap={0.5}>
        {icon}
        <Typography fontSize={16} sx={{opacity: 0.6}} fontWeight={400}>{text}</Typography>
    </Stack>
}


export const ModuleCard = ({imageUrl, title, description, questionsCount, minutes, passedUsersCount, level, id, topicsCount, number}: Module) => {
    const navigate = useNavigate()
    const cardClickHandle: MouseEventHandler = (event) => {
        navigate(`/modules/${id}`)
    }

    return (
        <FocusableContainer focusColor={'#66BB6A'} boxShadowColor={'rgba(185,185,185,0.18)'} borderRadius={5}>
            <Box width={'100%'}
                 position={'relative'}
                 sx={{
                     aspectRatio: '16 / 9',
                 }}
                 onClick={cardClickHandle}
            >
                <BackgroundImage imageSrc={imageUrl}/>
                <Stack
                    position={'absolute'}
                    bottom={24}
                    left={24}
                    right={24}
                    gap={1.5}
                >
                    <Typography fontSize={24}
                                fontWeight={600}
                                lineHeight={0.9}
                    >
                        {title}
                    </Typography>
                    <Typography width={'100%'}
                                style={
                                    {
                                        display: 'inline',
                                        wordWrap: 'break-word',
                                        opacity: 0.8
                                    }}
                                fontSize={16}>
                        {description}
                    </Typography>
                    <Stack flexDirection={'row'} gap={2}>
                        {iconState(<QuizIcon htmlColor={'#9632A6'}/>, `${questionsCount} вопросов`)}
                        {iconState(<AccessTimeFilledIcon htmlColor={'rgba(0,255,240,0.5)'}/>, `${minutes} минут`)}
                        {iconState(<AccountCircleIcon
                            htmlColor={'rgba(245,245,245,0.89)'}/>, `${passedUsersCount} пользователей`)}
                    </Stack>
                    <Stack flexDirection={'row'}
                           justifyContent={'space-between'}
                           alignItems={'center'}
                           width={'100%'}>
                        <Stack flexDirection={'row'}
                               gap={1}>
                            <Typography fontSize={16}
                                        sx={{opacity: 0.6}}
                                        fontWeight={400}>Сложность:</Typography>
                            <Stack flexDirection={'row'}>
                                {Array.from({length: level}).map((_, index) => (
                                    <BoltIcon key={index} htmlColor={'#DADE1B'}/>
                                ))}
                            </Stack>
                        </Stack>
                        <Button variant="contained"
                                color={'success'}
                                size={'small'}>Начать</Button>
                    </Stack>
                </Stack>
            </Box>
        </FocusableContainer>
    )
}
