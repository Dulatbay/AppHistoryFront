import {Stack} from "@mui/material";
import {Switcher} from "../../f_shared/Switcher";
import {ClassSwitcher} from "../../d_features/ClassSwitcher";
import {CardsViewer} from "../../d_features/CardsViewer";
import {ArchiveBookCard} from "../../e_entities/archive-book";
import {MapCard} from "../../e_entities/map";
import {TitleText} from "../../f_shared/TitleText";

export const ArchivePage = () => {
    const books = [
        <ArchiveBookCard/>,
        <ArchiveBookCard/>,
        <ArchiveBookCard/>,
    ]
    const maps = [
        <MapCard imageSrc={'./карта_саков.jfif'} title={'Карта саков'}/>,
        <MapCard imageSrc={'./default_map.jpg'} title={'Карта Казахстана и еще какой-то текст длинный'}/>,
        <MapCard imageSrc={'./карта_саков.jfif'} title={'Карта саков'}/>,
    ]


    return (
        <Stack gap={5}>
            <Stack gap={2}>
                <Stack flexDirection={'row'}
                       alignItems={'center'}
                       gap={5}>
                    <TitleText>Учебники по истории</TitleText>
                    <Switcher variants={['Рус', 'Каз', 'Eng']}/>
                </Stack>
                <ClassSwitcher/>
            </Stack>
            <CardsViewer cards={books}/>
            <CardsViewer title={'Архивы с курсов'} cards={books}/>
            <CardsViewer title={'Карты'} cards={maps}/>
        </Stack>
    )
}
