import {Box} from "@mui/material";
import React, {ReactNode} from "react";
interface Props{
    children : ReactNode,
    boxShadowColor: string,
    focusColor: string,
    borderRadius: number
}
export const FocusableContainer = ({children, boxShadowColor, focusColor, borderRadius} : Props) => {
    return (
        <Box borderRadius={borderRadius}
             overflow={'hidden'}
             sx={{
                 transition: 'box-shadow 1s',
                 boxShadow: `0 0 15px 5px ${boxShadowColor}`,
                 "&:hover": {
                     boxShadow: `0 0 15px 5px ${focusColor}`,
                 },
                 cursor: 'pointer'
             }}>
            {children}
        </Box>
    )
}
