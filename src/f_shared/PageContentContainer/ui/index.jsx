import {Box} from "@mui/material";

export const PageContentContainer = ({children}) => {
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
