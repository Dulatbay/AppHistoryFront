import {baseNode} from "@/e_entities/topic/lib/types";
import {Stack, Typography} from "@mui/material";
import {ReactNode} from "react";

interface props extends baseNode {
    imageUrl: string,
    title: string,
    size: "SMALL" | "MEDIUM" | "LARGE" | "FULL_WIDTH"
}

const sizes = {
    "SMALL": 200,
    "MEDIUM": 350,
    "LARGE": 500,
}

const getStyle = (size: "SMALL" | "MEDIUM" | "LARGE" | "FULL_WIDTH") => {
    if (size === "FULL_WIDTH") return {width: "100%", height: "auto"}
    return {width: "auto", height: `${sizes[size]}px`}
}

const getImage = (imageUrl: string, size: "SMALL" | "MEDIUM" | "LARGE" | "FULL_WIDTH", width: string): ReactNode => {
    return <img src={imageUrl}
                alt={""}
                style={{...getStyle(size), imageResolution: "pixelated", objectFit: "contain"}}
    />
}


export const MyImage = ({imageUrl, size, title, width = "auto"}: props) => {
    if (!title)
        return getImage(imageUrl, size, width)
    return (
        <Stack alignItems={"center"}
               width={size === "FULL_WIDTH" ? "100%" : width}>
            {getImage(imageUrl, size, width)}
            <Typography fontSize={16}
                        fontWeight={500}
            >{title}</Typography>
        </Stack>
    );
};
