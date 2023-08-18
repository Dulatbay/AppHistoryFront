import {Stack, Typography} from "@mui/material";
import {Question} from "@/e_entities/question/model/types";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import {getColorByLevel} from "@/f_shared/lib/getColorByLevel";

interface props extends Question {
    number: number,
    isFocus: boolean,
    isFocusCorrectIndex: boolean,
    topicTitle: string
}

const getVariant = (isFocusCorrectIndex: boolean, isCorrect: boolean, questionText: string) => {
    return <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"center"} gap={1}>
        <Brightness1Icon fontSize={"small"} sx={{
            color: `${isFocusCorrectIndex ? (isCorrect ? "green" : "white") : "white"}`
        }}/>
        <Typography>{questionText}</Typography>
    </Stack>
}


export const QuestionCard = ({
                                 number,
                                 isFocus,
                                 isFocusCorrectIndex,
                                 correctVariantIndex,
                                 questionText,
                                 variants,
                                 level,
                                 topicTitle
                             }: props) => {
    return (
        <Stack width={"100%"}
               border={`1px solid ${isFocus ? "#001da8" : getColorByLevel(level)}`}
               borderRadius={4}
               padding={"15px 30px"}
               gap={2}
               alignItems={"start"}>
            <Typography>{number}. {questionText}</Typography>
            <Stack gap={1} alignItems={"start"}>
                {
                    variants.map((variant, index) => <div
                        key={index}>{getVariant(isFocusCorrectIndex, index === correctVariantIndex, variant.content)}</div>)
                }
            </Stack>
            <Typography>{topicTitle}</Typography>
        </Stack>
    );
};
