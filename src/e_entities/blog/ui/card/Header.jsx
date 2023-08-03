import {Stack, Typography, useTheme} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Header = () => {
    const theme = useTheme()
    const secondaryText = theme.palette.text.secondary

    return (
        <>
            <Stack alignSelf={'stretch'}
                   flexDirection={'row'}
                   justifyContent={'space-between'}>
                <Stack flexDirection={'row'}
                       alignItems={'center'}
                       gap={1}
                       alignSelf={'stretch'}
                       justifyContent={'start'}
                >
                    <AccountCircleIcon sx={{fontSize: 48}}/>
                    <Stack>
                        <Typography fontSize={16}
                                    lineHeight={0.9}
                                    fontWeight={600}>Дулатбай Ахан</Typography>
                        <Typography fontSize={14}
                                    fontWeight={300}
                                    color={secondaryText}>3 дня назад</Typography>
                    </Stack>
                </Stack>
                <Typography color={secondaryText}>|||</Typography>
            </Stack>
        </>
    )
}
