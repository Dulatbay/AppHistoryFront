import {Box, Button, InputAdornment, OutlinedInput, Stack, Typography} from "@mui/material";
import {Selector} from "../../../f_shared/Selector/ui";
import SearchIcon from "@mui/icons-material/Search";

export const QuizesPageHeader = () => {
    return (
        <>
            <Stack flexDirection={'row'}
                   justifyContent={'space-between'}
                   alignItems={'center'}
            >
                <Stack flex={3}>
                    <Typography fontSize={24}
                                fontWeight={600}>Квизы</Typography>
                    <Typography lineHeight={0.5}
                                sx={{opacity: 0.7}}
                                fontSize={14}>отлично подходят для повторения и закрепления материала</Typography>
                </Stack>
                <Stack flexDirection={'row'}
                       flex={2}
                       gap={3}>
                    <Box flex={1}>
                        <Selector items={['Популярные', 'Новые', 'Топовые', 'Мои квизы']}/>
                    </Box>
                    <Box flex={1}>
                        <Selector items={['Все', 'Пройденные', 'Не пройденные']}/>
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
                        color={'success'}>Создать</Button>
                </Stack>
            </Stack>
        </>
    )
}
