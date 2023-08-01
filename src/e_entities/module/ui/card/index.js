import {Box, Button, Stack, Typography} from "@mui/material";
import styles from './style.module.css'
import QuizIcon from '@mui/icons-material/Quiz';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BoltIcon from '@mui/icons-material/Bolt';

const iconState = (icon, text) => {
    return <Stack flexDirection={'row'}
                  alignItems={'center'}
                  gap={0.5}>
        {icon}
        <Typography fontSize={16} sx={{opacity: 0.6}} fontWeight={400}>{text}</Typography>
    </Stack>
}

export const ModuleCard = () => {
    return (
        <>
            <Box width={'100%'}
                 borderRadius={5}
                 position={'relative'}
                 overflow={'hidden'}
                 sx={{
                     aspectRatio: '16 / 9',
                     transition: 'box-shadow 1s',
                     boxShadow: `0 0 15px 5px ${'rgba(185,185,185,0.18)'}`,
                     "&:hover": {
                         boxShadow: `0 0 15px 5px ${'#66BB6A'}`,
                     },
                 }}
            >
                <img src={'./1.jpg'}
                     className={styles.image}
                     alt={''}/>
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
                        Древний век
                    </Typography>
                    <Typography width={'100%'}
                                style={
                                    {
                                        display: 'inline',
                                        wordWrap: 'break-word',
                                        opacity: 0.8
                                    }}
                                fontSize={16}>
                        В этой главе мы рассмотрим древний Казахстан, начиная с каменного века до Тюрков. Будут
                        затронуты периоды бронзового века, а также история народов саков и сарматов. Помимо этого, мы
                        рассмотрим вклад Казахстана в развитие ремесел, земледелия и животноводства. Особое внимание
                        будет уделено уникальным археологическим находкам и памятникам, которые раскроют многогранность
                        прошлого этого удивительного региона.
                    </Typography>
                    <Stack flexDirection={'row'} gap={2}>
                        {iconState(<QuizIcon htmlColor={'#9632A6'}/>, '123 вопроса')}
                        {iconState(<AccessTimeFilledIcon htmlColor={'rgba(0,255,240,0.5)'}/>, '14 часов')}
                        {iconState(<AccountCircleIcon htmlColor={'rgba(245,245,245,0.89)'}/>, '55.5K польвателей')}
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
                                <BoltIcon htmlColor={'#DADE1B'}/>
                                <BoltIcon htmlColor={'#DADE1B'}/>
                                <BoltIcon htmlColor={'#DADE1B'}/>
                            </Stack>
                        </Stack>
                        <Button variant="contained"
                                color={'success'}
                                size={'small'}>Начать</Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}
