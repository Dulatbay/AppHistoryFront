import {Box, Stack, Typography} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {BackgroundImage} from "../../../../f_shared/BackgroundImage";
import {FocusableContainer} from "../../../../f_shared/FocusableContainer";

export const TournamentCard = ({imageSrc}) => {
    return (
        <FocusableContainer borderRadius={5} focusColor={'#A59A36'} boxShadowColor={'rgba(185,185,185,0.18)'}>
            <Box width={350}
                 height={200}
                 borderRadius={5}
                 overflow={'hidden'}
                 position={'relative'}
                 sx={{
                     border: `solid ${'#A59A36'} 2px`,
                     cursor: 'pointer'
                 }}
            >
                <BackgroundImage imageSrc={imageSrc}/>
                <Stack justifyContent={'space-between'}
                       alignItems={'center'}
                       flexDirection={'row'}
                       position={'absolute'}
                       width={'100%'}
                       bottom={16}
                       pl={2}
                       pr={2}>
                    <Stack justifyContent={'center'}
                           alignItems={'center'}
                           flexDirection={'row'}
                           gap={0.5}>
                        <AccountCircleIcon fontSize={'large'}/>
                        <Typography fontSize={'large'}>
                            3K
                        </Typography>
                    </Stack>
                    <Stack justifyContent={'center'}
                           alignItems={'end'}>
                        <Typography fontSize={24}
                                    fontWeight={600}
                                    lineHeight={0.9}
                        >
                            Средний
                        </Typography>
                        <Typography fontSize={16}
                                    fontWeight={400}>
                            6 дней
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </FocusableContainer>
    )
}
