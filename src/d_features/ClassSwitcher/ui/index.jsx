import {Stack} from "@mui/material";
import {useState} from "react";
import {ClassContainer} from "./ClassContainer";

const classes = ['Все', '5 класс', '6 класс', '7 класс', '8 класс', '9 класс', '10 класс', '11 класс']


export const ClassSwitcher = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const setActiveHandler = (index) => setActiveIndex(index)

    return (
        <>
            <Stack flexDirection={'row'}
                   alignItems={'center'}
                   gap={2}>
                {
                    classes.map((text, index) => <ClassContainer
                        key={index}
                        text={text}
                        index={index}
                        isActive={activeIndex === index}
                        setIsActiveHandler={setActiveHandler}
                    />)
                }
            </Stack>
        </>
    )
}
