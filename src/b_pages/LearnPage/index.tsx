import {Divider, Stack} from "@mui/material";
import {ModuleCard} from "@/e_entities/module";
import {TitleText} from "@/f_shared/TitleText";

export const LearnPage = () => {
    return (
        <Stack gap={3}
               alignItems={'center'}>
            <TitleText>История Казахстана</TitleText>
            <Stack width={'100%'} gap={7} maxWidth={1600}>
                <Divider flexItem/>
                <ModuleCard imageSrc={'./1.jpg'}
                            title={'Древний век'}
                            description={' В этой главе мы рассмотрим древний Казахстан, начиная с каменного века до Тюрков. Будут затронуты периоды бронзового века, а также история народов саков и сарматов. Помимо этого, мы рассмотрим вклад Казахстана в развитие ремесел, земледелия и животноводства. Особое внимание будет уделено уникальным археологическим находкам и памятникам, которые раскроют многогранность'}
                            level={5}
                            passedUsers={55}
                            questions={5}
                            minutes={10}
                />
                <Divider flexItem/>

                <Divider flexItem/>

                <Divider flexItem/>

                <Divider flexItem/>

                <Divider flexItem/>
            </Stack>
        </Stack>
    )
}
