import {baseNode} from "@/e_entities/topic/lib/types";
import {Box, Stack} from "@mui/material";
import React, {ReactNode} from "react";

interface ContentViewerType extends baseNode {
    text: ReactNode,
    gap: number,
    child: ReactNode,
    titleBottomBorder: "NONE" | "SOLID" | "DASHED",
    titleBottomColor: string,
}

export const ContentViewer = ({text, titleBottomBorder, child, gap, padding, margin, width, height, titleBottomColor}: ContentViewerType) => {
    return (
        <Stack margin={margin}
               padding={padding}
               gap={gap}
               width={width}
               height={height}>
            <Box sx={{
                borderBottom: `1px ${titleBottomBorder} ${titleBottomColor}`
            }}>
                {text}
            </Box>
            {child}
        </Stack>
    );
};
