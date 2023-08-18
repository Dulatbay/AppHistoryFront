import {Backdrop, CircularProgress, Stack} from "@mui/material";
import {QuizesPageHeader} from "@/c_widgets/QuizesPageHeader";
import {CardsViewer} from "@/d_features/CardsViewer";
import {QuizCard, useGetByFilterQuery} from "@/e_entities/quiz";
import React, {useState} from "react";

export const QuizesPage = () => {
    const {data, isFetching, isError} = useGetByFilterQuery({type: "ALL", category: "POPULAR"})

    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [currentTypeIndex, setCurrentTypeIndex] = useState(0);

    if (isError)
        return <>Error</>

    return (<Stack gap={5}>
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={isFetching}
        >
            <CircularProgress color="inherit"/>
        </Backdrop>
        <QuizesPageHeader currentTypeIndex={currentTypeIndex}
                          currentCategoryIndex={currentCategoryIndex}
                          setCurrentCategoryIndex={setCurrentCategoryIndex}
                          setCurrentTypeIndex={setCurrentTypeIndex}/>
        <CardsViewer cards={
            data && data.map(quiz => <QuizCard  {...quiz}/>)
        }
        />
    </Stack>)
}
