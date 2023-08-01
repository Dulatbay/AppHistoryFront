import {Box, Stack, Typography, useTheme} from "@mui/material";
import styles from "./style.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export const QuizCard = ({imageSrc}) => {
    const theme = useTheme()
    const secondaryText = theme.palette.text.secondary

    return (
        <>
            <Box width={200}
                 height={200}
                 borderRadius={5}
                 overflow={'hidden'}
                 position={'relative'}
                 sx={{
                     border: `solid ${'#A59A36'} 2px`,
                     transition: 'box-shadow 0.3s',
                     "&:hover": {
                         boxShadow: `0 0 1px 2px ${'#A59A36'}`,
                     },
                     cursor: 'pointer'
                 }}

            >
                <img src={imageSrc}
                     alt={''}
                     className={styles.image}/>
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
        </>
    )
}
