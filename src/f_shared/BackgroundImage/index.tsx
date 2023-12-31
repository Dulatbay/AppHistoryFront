import React from "react";
import styles from "./style.module.css";
import {Box} from "@mui/material";

export const BackgroundImage = ({imageSrc}: { imageSrc: string }) => {
    return (
        <Box sx={{opacity: '30%'}}>
            <img src={imageSrc}
                 className={styles.image}
                 alt={''}/>
        </Box>
    )
}
