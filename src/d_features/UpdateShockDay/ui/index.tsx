import {Box, Stack, Typography} from "@mui/material";
import React from 'react'
import {TitleText} from "@/f_shared/TitleText";


export const UpdateShockDay = () => {
    return (
        <>
            <Stack spacing={5}
                   alignItems={'start'}>
                <Box textAlign={'center'}>
                    <TitleText>Обновите ударный режим</TitleText>
                </Box>
                <Box display={'flex'}
                     alignItems={'center'}
                     justifyContent={'center'}
                     bgcolor={'rgba(255,0,0,0.33)'}
                     width={230}
                     height={230}
                     border={`solid ${'#FF0000'} 10px`}
                     borderRadius={'100%'}
                     alignSelf={'center'}
                     sx={{
                         cursor: 'pointer'
                     }}>
                    <Typography fontWeight={600}
                                textAlign={'center'}
                                fontSize={70}>
                        7
                    </Typography>
                </Box>
            </Stack>
        </>
    )
}
