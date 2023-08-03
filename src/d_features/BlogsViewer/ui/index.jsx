import {Divider, Stack} from "@mui/material";
import {NewsLineCard} from "../../../e_entities/blog";

export const BlogsViewer = () => {
    return (
        <>
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
        </>
    )
}
