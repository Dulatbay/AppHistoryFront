import {Divider, Stack, Typography} from "@mui/material";
import {ModuleCard} from "../../e_entities/module";

export const LearnPage = () => {
    return (
        <Stack gap={3}
               alignItems={'center'}>
            <Typography fontSize={32}
                        fontWeight={600}>История Казахстана</Typography>
            <Stack width={'100%'} gap={7}>
                <Divider flexItem/>
                <ModuleCard/>
                <Divider flexItem/>
                <ModuleCard/>
                <Divider flexItem/>
                <ModuleCard/>
                <Divider flexItem/>
                <ModuleCard/>
                <Divider flexItem/>
                <ModuleCard/>
                <Divider flexItem/>
            </Stack>
        </Stack>
    )
}
