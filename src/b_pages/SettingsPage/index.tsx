import {Box, Button, Stack} from "@mui/material";
import {TitleText} from "@/f_shared/TitleText";
import {useAppSelector} from "@/f_shared/model";
import {UserProfile} from "@/d_features/UserProfile";
import {LogoutButton} from "@/d_features/Authentication/logout";


export const SettingsPage = () => {
    const user = useAppSelector(state => state.session.user);

    if (user === undefined) {
        return <Button>Войдите в систему</Button>;
    }

    return (
        <Stack gap={4} width={600}>
            <UserProfile/>
            <TitleText>Настройки</TitleText>
            <Box sx={{alignSelf: "end"}}>
                <LogoutButton/>
            </Box>
        </Stack>
    );
};
