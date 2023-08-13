import {Fab, Stack, Typography} from "@mui/material";
import {FocusableContainer} from "@/f_shared/FocusableContainer";
import {BackgroundImage} from "@/f_shared/BackgroundImage";
import DownloadingIcon from '@mui/icons-material/Downloading';

export const ArchiveBookCard = () => {
    return (
        <FocusableContainer boxShadowColor={'rgba(91,91,91,0.18)'}
                            borderRadius={5}
                            focusColor={'rgba(26,85,173,0.74)'}>
            <Stack width={200} height={300} position={'relative'} border={`solid ${'#545454'} 1px`} borderRadius={5}>
                <BackgroundImage imageSrc={'./book.jpg'}/>
                <Stack
                    position={'absolute'}
                    bottom={24}
                    flexDirection={'row'}
                    left={12}
                    right={12}
                    alignItems={'end'}
                >
                    <Typography width={'100%'} style={{display: 'inline', wordWrap: 'break-word'}} flex={1}>
                        История Казахстана Ахметова С.
                    </Typography>
                    <Fab color="primary" aria-label="download">
                        <DownloadingIcon/>
                    </Fab>
                </Stack>
            </Stack>
        </FocusableContainer>
    )
}
