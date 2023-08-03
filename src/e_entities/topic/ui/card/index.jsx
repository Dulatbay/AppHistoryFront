import {Stack, Typography} from "@mui/material";
import {FocusableContainer} from "../../../../f_shared/FocusableContainer";

export const TopicCard = () => {

    return (
        <FocusableContainer boxShadowColor={'rgba(185,185,185,0.18)'} borderRadius={5} focusColor={'#9176e7'}>
            <Stack alignItems={'center'}
                   justifyContent={'center'}
                   width={200}
                   height={200}
                   bgcolor={'#572FCA'}
            >
                <Typography fontSize={40}>
                    7.5
                </Typography>
            </Stack>
        </FocusableContainer>
    )
}
