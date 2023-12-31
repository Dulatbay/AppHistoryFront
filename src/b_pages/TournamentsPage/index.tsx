import {Stack} from "@mui/material";
import {CardsViewer} from "@/d_features/CardsViewer";
import {TournamentCard} from "@/e_entities/tournament";

export const TournamentsPage = () => {
    const tournaments = [
        <TournamentCard imageSrc={'./1.jpg'} title={""}/>,
        <TournamentCard imageSrc={'./2.jpg'} title={""}/>,
        <TournamentCard imageSrc={'./3 (2).jpg'} title={""}/>,
        <TournamentCard imageSrc={'./4.jpg'} title={""}/>,
        <TournamentCard imageSrc={'./5.jpg'} title={""}/>,
        <TournamentCard imageSrc={'./6.jpeg'} title={""}/>,
        <TournamentCard imageSrc={'./1.jpg'} title={""}/>,

    ];
    return (
        <Stack gap={5}>
            <CardsViewer title={'Ближайшие турниры'} cards={tournaments}/>
            <CardsViewer title={'Пользовательские турниры'} cards={tournaments}/>
            <CardsViewer title={'Прошедшие'} cards={tournaments}/>
        </Stack>
    )
}
