import {Stack, Typography} from "@mui/material";
import {Switcher} from "../../f_shared/Switcher/ui";
import {ClassSwitcher} from "../../d_features/ClassSwitcher";

export const ArchivePage = () => {

    return (
        <Stack gap={2}>
            <Stack flexDirection={'row'}
                   alignItems={'center'}
                   gap={5}>
                <Typography fontSize={24}
                            fontWeight={'semiBold'}>
                    Учебники по истории
                </Typography>
                <Switcher variants={['Рус', 'Каз', 'Eng']}/>
            </Stack>
            <ClassSwitcher />
        </Stack>
    )
}
