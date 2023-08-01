import {Box, Typography, useTheme} from "@mui/material";

export const ClassContainer = ({text, isActive, setIsActiveHandler, index}) => {
    const theme = useTheme()

    return <>
        <Box padding={'5px 15px'}
             onClick={() => setIsActiveHandler(index)}
             border={'solid gray 1px'}
             borderRadius={2}
             sx={{cursor: 'pointer'}}
             bgcolor={isActive ? theme.palette.primary.main : ''}
        >
            <Typography>{text}</Typography>
        </Box>
    </>
}
