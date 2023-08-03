import {Typography} from "@mui/material";

export const TitleText = ({children}) => {
    return (
        <Typography fontSize={24}
                    fontWeight={600}>{children}</Typography>
    )
}
