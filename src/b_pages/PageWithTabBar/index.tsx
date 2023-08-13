import {Box} from "@mui/material";
import {TabBar} from "@/d_features/TabBar";
import {PageContentContainer} from "@/f_shared/PageContentContainer";
import {ReactNode} from "react";

interface Props {
    children : ReactNode
}

export const PageWithTabBar = ({children} : Props) => {
    return (
        <>
            <Box sx={{
                position: 'absolute',
                marginTop: '24px',
                marginLeft: '24px',
            }}>
                <TabBar/>
            </Box>
            <PageContentContainer>
                {children}
            </PageContentContainer>
        </>
    )
}
