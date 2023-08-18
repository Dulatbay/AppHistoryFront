import {Stack} from "@mui/material";
import {TitleText} from "@/f_shared/TitleText";
import {ModulesViewer} from "@/c_widgets/ModulesViewer";

export const LearnPage = () => {
    return (
        <Stack gap={3}
               alignItems={'center'}>
            <TitleText>История Казахстана</TitleText>
            <ModulesViewer/>
        </Stack>
    )
}
