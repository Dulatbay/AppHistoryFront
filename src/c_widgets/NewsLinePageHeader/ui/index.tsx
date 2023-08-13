import {Box, Stack} from "@mui/material";
import styles from "./style.module.css";
import {TitleText} from "@/f_shared/TitleText";
import {ReactNode} from "react";


interface TabLinkBoxProps {children : ReactNode, isActive:boolean}
const TabLinkBox = ({children, isActive} : TabLinkBoxProps) => (
    <>
        <Box
            flex={'1'}
            textAlign={'center'}
            padding={1.5}
        >
            <TitleText>
                <span className={isActive ? styles.active : styles.link}>{children}</span>
            </TitleText>
        </Box>
    </>
)
export const NewsLinePageHeader = () => {
    return (
        <>
            <Stack flexDirection={'row'}
                   justifyContent={'space-between'}
                   margin={'8px 0'}
                   gap={12}>
                <TabLinkBox children={'Подписки'} isActive={false}/>
                <TabLinkBox children={'Рекомендации'} isActive={true}/>
            </Stack>
        </>
    )
}
