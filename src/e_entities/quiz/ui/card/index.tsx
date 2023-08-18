import {Box, Stack, Typography, useTheme} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {BackgroundImage} from "@/f_shared/BackgroundImage";
import {FocusableContainer} from "@/f_shared/FocusableContainer";
import {Quiz} from "../../model/types";
import {getColorByLevel} from "@/f_shared/lib/getColorByLevel";
import {useNavigate} from "react-router-dom";
import React, {useCallback} from "react";

interface props extends Quiz {

}

export const QuizCard = ({id, title, level, passedUsersCount, questionsCount, userPercent, isVerified, imageUrl}: props) => {
    const theme = useTheme()
    const secondaryText = theme.palette.text.secondary
    const navigate = useNavigate()
    const onPlayClickHandle = useCallback((event: React.MouseEvent<SVGSVGElement>) => {
        navigate(`/quizzes/${id}`)
    }, [navigate, id]);


    console.log(title, level)
    return (
        <FocusableContainer focusColor={getColorByLevel(level)}
                            borderRadius={5}
                            boxShadowColor={'rgba(185,185,185,0.18)'}
        >
            <Box height={200}
                 width={200}
                 borderRadius={5}
                 position={'relative'}
                 sx={{
                     border: `solid ${getColorByLevel(level)} 2px`,
                 }}>
                <BackgroundImage imageSrc={imageUrl}/>
                <Stack justifyContent={'space-between'}
                       alignItems={'center'}
                       flexDirection={'row'}
                       position={'absolute'}
                       width={'100%'}
                       bottom={12}
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
                                {passedUsersCount}
                            </Typography>
                        </Stack>
                        <Typography color={'#B6B6B6'}>
                            Вопросов: {questionsCount}
                        </Typography>
                    </Stack>
                    <PlayCircleOutlineIcon fontSize={'large'}
                                           sx={{color: getColorByLevel(level)}} onClick={onPlayClickHandle}/>
                </Stack>
            </Box>
        </FocusableContainer>
    )
}
