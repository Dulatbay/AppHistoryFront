import { Stack } from "@mui/material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {TitleText} from "../../../f_shared/TitleText";

export const CardsViewer = ({ title, cards }) => {
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
                {cards.map((card, index) => (
                    // Provide a unique key prop for each card
                    <div key={index}>{card}</div>
                ))}
            </Stack>
        </Stack>
    );
};
