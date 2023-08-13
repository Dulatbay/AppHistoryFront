import {Typography} from "@mui/material";
import React, {ReactNode} from "react";

interface Props{
    children : ReactNode
}
export const TitleText = ({children} : Props) => {
    return (
        <Typography fontSize={24}
                    fontWeight={600}>{children}</Typography>
    )
}
