import {Box, Divider, Stack} from "@mui/material";
import styles from "./style.module.css";
import {NewsLineCard} from "../../e_entities/blog";


const TabLinkBox = ({children, isActive}) => (
    <>
        <Box
            flex={'1'}
            textAlign={'center'}
            padding={1.5}
        >
            <span className={isActive ? styles.active : styles.link}>{children}</span>
        </Box>
    </>
)

export const NewsLinePage = () => {

    return (
        <Stack border={'solid gray 1px'}
               borderBottom={'0px'}
               width={'100%'}
               marginTop={'-25px'}
               spacing={4}
               alignItems={'center'}
               padding={'0 28px'}
        >
            <Stack flexDirection={'row'}
                   justifyContent={'space-between'}
                   margin={'8px 0'}
                   gap={12}>
                <TabLinkBox children={'Подписки'} isActive={false}/>
                <TabLinkBox children={'Рекомендации'} isActive={true}/>
            </Stack>
            <Stack gap={8}
                   alignSelf={'stretch'}>
                <Divider flexItem/>
                <NewsLineCard/>
                <Divider flexItem/>
                <NewsLineCard/>
                <Divider flexItem/>
                <NewsLineCard/>
                <Divider flexItem/>
                <NewsLineCard/>
                <Divider flexItem/>
            </Stack>
        </Stack>
    )
}
