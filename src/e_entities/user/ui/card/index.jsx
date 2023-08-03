import {Box, Button, Stack, Typography} from "@mui/material";
import {TitleText} from "../../../../f_shared/TitleText";
import {States} from "./States";

export const UserCard = () => {
    return (
        <Stack>
            <Stack flexDirection={'row'}
                   justifyContent={'space-between'} alignItems={'center'}>
                <Typography fontSize={18}>Профиль</Typography>
                <Button size={'small'}>Изменить</Button>
            </Stack>
            <TitleText>Дулатбай Ахан</TitleText>
            <Stack flexDirection={'row'}
                   justifyContent={'space-between'}
                   alignItems={'start'}>
                <States/>
                <Box width={250} height={250} bgcolor={'gray'} borderRadius={'100%'}>

                </Box>
            </Stack>
        </Stack>
    )
}
