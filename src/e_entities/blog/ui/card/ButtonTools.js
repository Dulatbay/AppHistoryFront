import {Box, Stack, Typography} from "@mui/material";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import {useState} from "react";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


export const ButtonTools = () => {
    const [isLike, setLike] = useState(false)

    const likeClickHandle = () => {
        setLike(!isLike)
    }

    return (
        <Stack flexDirection={'row'} justifyContent={'space-between'} mt={2}>
            <Stack flexDirection={'row'} gap={3}>
                <Stack flexDirection={'row'}
                       gap={0.5}
                       sx={{cursor: 'pointer'}}
                       onClick={likeClickHandle}>
                    {
                        isLike ? <FavoriteOutlinedIcon/> : <FavoriteBorderRoundedIcon/>
                    }
                    <Typography>
                        55
                    </Typography>
                </Stack>
                <Stack flexDirection={'row'} gap={0.5}>
                    <CommentOutlinedIcon/>
                    <Typography>
                        55
                    </Typography>
                </Stack>
            </Stack>
            <Stack flexDirection={'row'} gap={0.5} sx={{opacity: 0.6}}>
                <Box>
                    55
                </Box>
                <Box>
                    <RemoveRedEyeOutlinedIcon/>
                </Box>
            </Stack>
        </Stack>
    )
}
