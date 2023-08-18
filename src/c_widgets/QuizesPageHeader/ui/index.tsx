import {Box, Button, InputAdornment, OutlinedInput, SelectChangeEvent, Stack, Typography} from "@mui/material";
import {Selector} from "@/f_shared/Selector";
import SearchIcon from "@mui/icons-material/Search";
import {TitleText} from "@/f_shared/TitleText";
import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";

interface props {
    setCurrentCategoryIndex: (index: number) => void,
    setCurrentTypeIndex: (index: number) => void,
    currentTypeIndex: number,
    currentCategoryIndex: number
}

export const QuizesPageHeader = ({setCurrentCategoryIndex, setCurrentTypeIndex, currentTypeIndex, currentCategoryIndex}: props) => {
    const navigate = useNavigate()

    const handleCurrentCategoryIndexChange = (event: SelectChangeEvent<number>) => {
        setCurrentCategoryIndex(+event.target.value);
    };
    const handleCurrentTypeIndexChange = (event: SelectChangeEvent<number>) => {
        setCurrentTypeIndex(+event.target.value);
    };


    const onCreateButtonHandler = useCallback(() => {
        navigate('/quizzes/create')
    }, [navigate]);

    return (
        <>
            <Stack flexDirection={'row'}
                   justifyContent={'space-between'}
                   alignItems={'center'}
            >
                <Stack flex={3}>
                    <TitleText>Квизы</TitleText>
                    <Typography lineHeight={0.5}
                                sx={{opacity: 0.7}}
                                fontSize={14}>отлично подходят для повторения и закрепления материала</Typography>
                </Stack>
                <Stack flexDirection={'row'}
                       flex={2}
                       gap={3}>
                    <Box flex={1}>
                        <Selector items={['Популярные', 'Новые', 'Топовые', 'Мои квизы']}
                                  current={currentCategoryIndex}
                                  handleChange={handleCurrentCategoryIndexChange}/>
                    </Box>
                    <Box flex={1}>
                        <Selector items={['Все', 'Пройденные', 'Не пройденные']}
                                  current={currentTypeIndex}
                                  handleChange={handleCurrentTypeIndexChange}/>
                    </Box>
                </Stack>
            </Stack>
            <Stack flexDirection={'row'}
                   width={'100%'}
                   justifyContent={'space-between'}
                   alignItems={'center'}
                   gap={12}
            >
                <Box flex={3}>
                    <OutlinedInput
                        fullWidth
                        sx={{background: '#1E1E1E', borderRadius: 4}}
                        placeholder={'Найти квизы...'}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        }
                    />
                </Box>
                <Stack flex={1}
                       justifyContent={'end'}
                       flexDirection={'row'}>
                    <Button

                        variant="contained"
                        size={'large'}
                        color={'success'} onClick={onCreateButtonHandler}>Создать</Button>
                </Stack>
            </Stack>
        </>
    )
}
