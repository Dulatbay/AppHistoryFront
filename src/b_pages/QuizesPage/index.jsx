import {Stack} from "@mui/material";
import {QuizesPageHeader} from "../../c_widgets/QuizesPageHeader";
import {CardsViewer} from "../../d_features/CardsViewer";
import {QuizCard} from "../../e_entities/quiz";

const quizes = [
    <QuizCard imageSrc={'./1.jpg'}/>,
    <QuizCard imageSrc={'./2.jpg'}/>,
    <QuizCard imageSrc={'./3 (2).jpg'}/>,
    <QuizCard imageSrc={'./1.jpg'}/>,
    <QuizCard imageSrc={'./2.jpg'}/>,
    <QuizCard imageSrc={'./3 (2).jpg'}/>,
    <QuizCard imageSrc={'./1.jpg'}/>,
    <QuizCard imageSrc={'./2.jpg'}/>,
    <QuizCard imageSrc={'./3 (2).jpg'}/>,
    <QuizCard imageSrc={'./1.jpg'}/>,
    <QuizCard imageSrc={'./2.jpg'}/>,
    <QuizCard imageSrc={'./3 (2).jpg'}/>,
    <QuizCard imageSrc={'./1.jpg'}/>,
    <QuizCard imageSrc={'./2.jpg'}/>,
    <QuizCard imageSrc={'./3 (2).jpg'}/>,
    <QuizCard imageSrc={'./1.jpg'}/>,
    <QuizCard imageSrc={'./2.jpg'}/>,
    <QuizCard imageSrc={'./3 (2).jpg'}/>,
];
export const QuizesPage = () => {
    return (<Stack gap={5}>
        <QuizesPageHeader/>
        <CardsViewer cards={quizes}/>
    </Stack>)
}
