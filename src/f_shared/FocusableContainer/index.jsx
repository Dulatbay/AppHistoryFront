import {Box} from "@mui/material";

export const FocusableContainer = ({children, boxShadowColor, focusColor, borderRadius}) => {
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
