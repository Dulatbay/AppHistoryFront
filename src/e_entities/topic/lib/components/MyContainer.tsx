import {Box, useTheme} from "@mui/material";
import {baseNode} from "../types";
import React, {ReactNode} from "react";

interface MyContainerType extends baseNode {
    child: ReactNode;
    outlinedType: "NONE" | "DOTTED" | "LINEAR";
    borderColor: "PRIMARY" | "SECONDARY" | "DEFAULT";
    backgroundColor: "PRIMARY" | "SECONDARY" | "DEFAULT" | "NONE";
    isLow: boolean;
}

export const MyContainer = ({
                                child,
                                outlinedType,
                                borderColor,
                                margin,
                                padding,
                                height,
                                isLow,
                                backgroundColor,
                            }: MyContainerType) => {
    const theme = useTheme();

    const getColor = (color: "PRIMARY" | "SECONDARY" | "DEFAULT" | "NONE") => {
        switch (color) {
            case "PRIMARY":
                return theme.palette.primary.main;
            case "SECONDARY":
                return theme.palette.secondary.main;
            case "NONE":
                return "rgba(255,255,255,0)"
            default:
                if (theme.palette.mode.toLowerCase() === 'dark')
                    return theme.palette.common.white
                else return theme.palette.common.black
        }
    };

    return (
        <Box
            sx={{
                border: `1px ${outlinedType.toLowerCase()} ${getColor(
                    borderColor
                )}`,
                opacity: isLow ? "0.7" : "1",
                background: getColor(backgroundColor),
                borderRadius: "12px",
                borderDasharray: '40px 18px'
            }}
            width={"content"}
            height={height}
            margin={margin}
            padding={padding}
        >
            {child}
        </Box>
    );
};
