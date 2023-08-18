import {Box, Fab, Stack, Typography} from "@mui/material";
import styles from './styles.module.css'
import DownloadingIcon from "@mui/icons-material/Downloading";

interface Props {
    imageSrc: string,
    title: string
}

export const MapCard = ({imageSrc, title}: Props) => {
    return (
        <Stack width={340} alignItems={'center'} gap={1}>
            <Box height={185} width={'100%'} borderRadius={5} overflow={'hidden'}>
                <img src={imageSrc} alt={''} className={styles.image}/>
            </Box>
            <Stack flexDirection={'row'}
                   justifyContent={'space-between'}
                   width={'100%'}
                   alignItems={'center'}
                   gap={4}
            >
                <Typography fontSize={18} fontWeight={500} flex={3}
                            style={{display: 'inline', wordWrap: 'break-word'}}>{title}</Typography>
                <Fab color="primary" aria-label="download" size={'small'}>
                    <DownloadingIcon/>
                </Fab>
            </Stack>
        </Stack>
    )
}
