import {Box} from "@mui/material";
import React, {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export const PageContentContainer = ({children}: Props) => {
    return (
        <>
            <Box sx={{
                minWidth: '920px',
                maxWidth: '70%',
                margin: 'auto',
                paddingTop: '24px'
            }}>
                {children}
            </Box>
        </>
    )
}
