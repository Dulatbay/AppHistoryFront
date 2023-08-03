import {Box, Stack, Typography} from "@mui/material";
import {useState} from "react";


const variantContainer = (text, index, arrayLength, isActive, setActiveIndexHandler) => {
    const getBorderRadius = () => {
        if (index === 0) return '10px 0 0 10px'
        if (index === arrayLength - 1) return "0 10px 10px 0"
        return ''
    };

    if (isActive)
        return <>
            <Box padding={'5px 15px'}
                 bgcolor={'white'}
                 borderRadius={getBorderRadius()}
                 sx={{cursor: 'pointer'}}
                 onClick={() => setActiveIndexHandler(index)}
            >
                <Typography color={'black'}>{text}</Typography>
            </Box>
        </>


    return (
        <>
            <Box padding={'5px 15px'}
                 border={'solid gray 1px'}
                 borderRadius={getBorderRadius()}
                 sx={{cursor: 'pointer'}}
                 borderRight={index !== arrayLength - 1 ? 'solid gray 1px' : ''}
                 onClick={() => setActiveIndexHandler(index)}
            >
                <Typography color={'white'}>{text}</Typography>
            </Box>
        </>
    )
};

export const Switcher = ({variants}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const setActiveIndexHandler = (index) => setActiveIndex(index)

    return (
        <Stack flexDirection={'row'}
               alignItems={'center'}>
            {variants.map((variant, index) => variantContainer(variant, index, variants.length, activeIndex === index, setActiveIndexHandler))}
        </Stack>
    )
}
