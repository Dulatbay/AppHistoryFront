import {Box, Stack as MuiStack} from '@mui/material'
import React, {ReactNode} from "react";
import {baseNode} from "@/e_entities/topic/lib/types";

interface StackType extends baseNode {
    children: ReactNode[],
    gap: number,
    isVertical: boolean
}

export const MyStack = ({children, gap, isVertical, width, height}: StackType) => {
    return (
        <MuiStack gap={gap} direction={isVertical ? "column" : "row"} width={width} height={height}>
            {children.map((child, index) => (
                <Box key={index}>
                    {child}
                </Box>
            ))}
        </MuiStack>
    );
};
