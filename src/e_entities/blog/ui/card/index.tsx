import {Stack} from "@mui/material";
import {Header} from "./Header";
import {Images} from "./Images";
import {TextContent} from "./TextContent";
import {ButtonTools} from "./ButtonTools";

export const NewsLineCard = () => {
    return (
        <Stack alignSelf={'stretch'} gap={1}>
            <Header/>
            <Images/>
            <TextContent/>
            <ButtonTools/>
        </Stack>
    )
}
