import {FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React from "react";
import {useState} from "react";

interface props {
    items: string[]
}

export const Selector = ({items}:props) => {
    const [current, setCurrent] = useState(0);
    const handleChange = (event :  SelectChangeEvent<number>) => {
        setCurrent(+event.target.value);
    };

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
