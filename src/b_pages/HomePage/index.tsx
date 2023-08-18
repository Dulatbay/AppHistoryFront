import {Stack} from "@mui/material";
import {UpdateShockDay} from "@/d_features/UpdateShockDay";
import {CardsViewer} from "@/d_features/CardsViewer";
import {TournamentCard} from "@/e_entities/tournament";
import {TopicCard} from "@/e_entities/topic";

export const HomePage = () => {
    return (
        <Stack spacing={8}>
            <UpdateShockDay/>
            <CardsViewer title={'Ближайшие турниры'}
                         cards={[<TournamentCard imageSrc={'./1.jpg'} title={""}/>,
                             <TournamentCard imageSrc={'./2.jpg'} title={""}/>,]}
            />
            <CardsViewer title={'Последнее'}
                         cards={[<TopicCard/>]}
            />
        </Stack>
    )
}
