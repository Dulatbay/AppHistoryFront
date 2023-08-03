import {Box, Stack, Typography, useTheme} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {BackgroundImage} from "../../../../f_shared/BackgroundImage";
import {FocusableContainer} from "../../../../f_shared/FocusableContainer";

export const QuizCard = ({imageSrc}) => {
    const theme = useTheme()
    const secondaryText = theme.palette.text.secondary

    return (
        <FocusableContainer focusColor={'#A59A36'}
                            borderRadius={5}
                            boxShadowColor={'rgba(185,185,185,0.18)'}
        >
            <Box width={200}
                 height={200}
                 borderRadius={5}
                 position={'relative'}
                 sx={{
                     border: `solid ${'#A59A36'} 2px`,
                 }}
            >
                <BackgroundImage imageSrc={'./1.jpg'}/>
                <Stack justifyContent={'space-between'}
                       alignItems={'center'}
                       flexDirection={'row'}
                       position={'absolute'}
                       width={'100%'}
                       bottom={8}
                       pl={2}
                       pr={2}>
                    <Stack>
                        <Stack justifyContent={'start'}
                               alignItems={'center'}
                               flexDirection={'row'}
                               gap={0.5}>
                            <AccountCircleIcon fontSize={'medium'}
                                               sx={{color: secondaryText}}/>
                            <Typography fontSize={'medium'}
                                        color={secondaryText}>
                                3K
                            </Typography>
                        </Stack>
                        <Typography color={'#B6B6B6'}>
                            Вопросов: 25
                        </Typography>
                    </Stack>
                    <PlayCircleOutlineIcon fontSize={'large'}
                                           sx={{color: '#ffea02'}}/>
                </Stack>
            </Box>
        </FocusableContainer>
    )
}
