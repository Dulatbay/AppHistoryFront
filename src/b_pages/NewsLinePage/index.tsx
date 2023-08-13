import {Stack} from "@mui/material";
import {NewsLinePageHeader} from "@/c_widgets/NewsLinePageHeader";
import {BlogsViewer} from "@/d_features/BlogsViewer";


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
            <NewsLinePageHeader/>
            <BlogsViewer/>
        </Stack>
    )
}
