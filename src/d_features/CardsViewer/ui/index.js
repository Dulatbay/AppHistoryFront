import {Stack, Typography} from "@mui/material";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


export const CardsViewer = ({title, cards}) => {
    return (title ? <Stack spacing={2}>
                <Typography fontSize={24}
                            fontWeight={'semiBold'}>
                    {title}
                </Typography>
                <Stack flexDirection={'row'}
                       flexWrap={'wrap'}
                       gap={3}
                >
                    {cards}
                </Stack>
            </Stack>
            :
            <Stack flexDirection={'row'}
                   flexWrap={'wrap'}
                   gap={3}
            >
                {cards}
            </Stack>
    )
}
