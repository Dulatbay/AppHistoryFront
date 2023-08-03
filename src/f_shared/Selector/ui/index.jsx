import {FormControl, MenuItem, Select} from "@mui/material";
import {useState} from "react";

export const Selector = ({items}) => {
    const [current, setCurrent] = useState(0);
    const handleChange = (event) => {
        setCurrent(event.target.value);
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
