import {Stack} from "@mui/material";
import {QuizesPageHeader} from "@/c_widgets/QuizesPageHeader";
import {CardsViewer} from "@/d_features/CardsViewer";
import {QuizCard} from "@/e_entities/quiz";

const quizes = [
    <QuizCard imageSrc={'./1.jpg'} title={""}/>,
    <QuizCard imageSrc={'./2.jpg'} title={""}/>,
    <QuizCard imageSrc={'./3 (2).jpg'} title={""}/>,
    <QuizCard imageSrc={'./1.jpg'} title={""}/>,
    <QuizCard imageSrc={'./2.jpg'} title={""}/>,
    <QuizCard imageSrc={'./3 (2).jpg'} title={""}/>,
    <QuizCard imageSrc={'./1.jpg'} title={""}/>,
    <QuizCard imageSrc={'./2.jpg'} title={""}/>,
    <QuizCard imageSrc={'./3 (2).jpg'} title={""}/>,
    <QuizCard imageSrc={'./1.jpg'} title={""}/>,
    <QuizCard imageSrc={'./2.jpg'} title={""}/>,
    <QuizCard imageSrc={'./3 (2).jpg'} title={""}/>,
    <QuizCard imageSrc={'./1.jpg'} title={""}/>,
    <QuizCard imageSrc={'./2.jpg'} title={""}/>,
    <QuizCard imageSrc={'./3 (2).jpg'} title={""}/>,
    <QuizCard imageSrc={'./1.jpg'} title={""}/>,
    <QuizCard imageSrc={'./2.jpg'} title={""}/>,
    <QuizCard imageSrc={'./3 (2).jpg'} title={""}/>,
];
export const QuizesPage = () => {
    return (<Stack gap={5}>
        <QuizesPageHeader/>
        <CardsViewer cards={quizes}/>
    </Stack>)
}
