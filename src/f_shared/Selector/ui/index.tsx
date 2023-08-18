import {FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React from "react";

interface props {
    items: string[],
    current: number,
    handleChange: (event: SelectChangeEvent<number>) => void
}

export const Selector = ({items, current, handleChange}: props) => {

    return (
        <FormControl fullWidth>
            <Select size={'small'}
                    value={current}
                    onChange={handleChange}
            >
                {items.map((item, index) => <MenuItem value={index} key={index}>{item}</MenuItem>)}
            </Select>
        </FormControl>
    )
}
