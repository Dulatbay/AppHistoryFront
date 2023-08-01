import {Box} from "@mui/material";
import {TabBar} from "../../c_widgets/TabBar/ui";
import {PageContentContainer} from "../../f_shared/PageContentContainer/ui";

export const PageWithTabBar = ({children}) => {
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
