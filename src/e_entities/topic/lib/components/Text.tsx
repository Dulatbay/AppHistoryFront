import {Typography, useTheme} from "@mui/material";
import {baseNode} from "@/e_entities/topic/lib/types";

interface props extends baseNode {
    childTextHTML: string,
    textType: "TITLE" | "DESCRIPTION" | "INFO",
    textColor: "PRIMARY" | "SECONDARY" | "TEXT"
}

const textTypes = {
    "TITLE": 32,
    "DESCRIPTION": 24,
    "INFO": 14
}

const textTypesWeight = {
    "TITLE": 600,
    "DESCRIPTION": 400,
    "INFO": 300
}


export const Text = ({childTextHTML, textColor, textType}: props) => {
    const theme = useTheme()

    function getColor(textColor: string) {
        switch (textColor) {
            case "PRIMARY":
                return theme.palette.primary.main
            case "SECONDARY":
                return theme.palette.secondary.main
            case "TEXT":
                return theme.palette.text.primary
        }
    }

    return (
        <Typography fontSize={textTypes[textType]}
                    color={getColor(textColor)}
                    fontWeight={textTypesWeight[textType]}
                    dangerouslySetInnerHTML={{__html: childTextHTML}}
        ></Typography>
    );
};
