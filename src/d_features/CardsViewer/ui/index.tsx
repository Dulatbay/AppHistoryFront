import {Stack} from "@mui/material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {TitleText} from "@/f_shared/TitleText";
import {ReactNode} from "react";

interface Props {
    title?: string,
    cards: Array<ReactNode> | undefined
}

export const CardsViewer = ({title, cards}: Props) => {


    return (
        <Stack spacing={2}>
            {title && (
                <TitleText>{title}</TitleText>
            )}
            <Stack
                flexDirection={"row"}
                flexWrap={"wrap"}
                gap={3}
            >
                {cards && cards.map((card, index) => (
                    <div key={index}>{card}</div>
                ))}
            </Stack>
        </Stack>
    );
};
