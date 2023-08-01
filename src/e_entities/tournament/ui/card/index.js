import {Box, Stack, Typography} from "@mui/material";
import styles from "./style.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const TournamentCard = ({imageSrc}) => {
    return (
        <>
            <Box width={350}
                 height={200}
                 borderRadius={5}
                 overflow={'hidden'}
                 position={'relative'}
                 sx={{
                     border: `solid ${'#A59A36'} 2px`,
                     transition: 'box-shadow 0.3s',
                     "&:hover": {
                         boxShadow: `0 0 1px 2px ${'#A59A36'}`,
                     },
                     cursor: 'pointer'
                 }}
            >
                <img src={imageSrc}
                     alt={''}
                     className={styles.image}/>
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
        </>
    )
}
