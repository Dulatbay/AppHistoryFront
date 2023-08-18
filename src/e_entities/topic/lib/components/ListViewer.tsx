import {baseNode} from "@/e_entities/topic/lib/types";
import {ReactNode} from "react";
import {Stack} from "@mui/material";

interface props extends baseNode {
    gap: number,
    children?: ReactNode[],
    isVertical: boolean,
}

export const ListViewer = ({gap, children, isVertical, margin, padding, height, width}: props) => {
    return (
        <Stack gap={gap} direction={isVertical ? "column" : "row"} margin={margin} padding={padding} width={width}
               height={height} flexWrap={"wrap"}>
            {children && children.map((child, index) => (
                <div key={index}>
                    {child}
                </div>
            ))}
        </Stack>
    );
};
