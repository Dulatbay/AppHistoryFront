import {Stack, Typography} from "@mui/material";

export const TopicCard = () => {

    return (
        <Stack alignItems={'center'}
               justifyContent={'center'}
               width={200}
               height={200}
               bgcolor={'#572FCA'}
               borderRadius={5}
               sx={{
                   cursor: 'pointer'
               }}
        >
            <Typography fontSize={40}>
                7.5
            </Typography>
        </Stack>
    )
}
