import {Button, Stack} from "@mui/material";
import {UserCard} from "../../e_entities/user";
import {TitleText} from "../../f_shared/TitleText";

export const SettingsPage = () => {
    return (
        <Stack gap={4} width={600}>
            <UserCard />
            <TitleText>Настройки</TitleText>
            <Button color={'error'} variant={'outlined'} sx={{alignSelf: 'end'}}>Выйти</Button>
        </Stack>
    )
}
