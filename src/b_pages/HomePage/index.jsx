import {Stack} from "@mui/material";
import {UpdateShockDay} from "../../d_features/UpdateShockDay";
import {CardsViewer} from "../../d_features/CardsViewer";
import {TournamentCard} from "../../e_entities/tournament";
import {QuizCard} from "../../e_entities/quiz";
import {TopicCard} from "../../e_entities/topic";

export const HomePage = () => {
    return (
        <Stack spacing={8}>
            <UpdateShockDay/>
            <CardsViewer title={'Ближайшие турниры'}
                         cards={[<TournamentCard imageSrc={'./1.jpg'}/>, <TournamentCard imageSrc={'./2.jpg'}/>,]}
            />
            <CardsViewer title={'Последнее'}
                         cards={[<QuizCard imageSrc={'./5.jpg'}/>, <TournamentCard imageSrc={'./4.jpg'}/>, <TopicCard />]}
            />
        </Stack>
    )
}
