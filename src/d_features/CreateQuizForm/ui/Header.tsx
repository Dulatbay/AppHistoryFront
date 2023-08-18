import {Box, Button, Stack} from "@mui/material";
import {TitleText} from "@/f_shared/TitleText";
import TextField from "@mui/material/TextField";
import React, {ChangeEvent} from "react";

interface props {
    title: string,
    description: string,
    onTitleChange: (event: ChangeEvent) => void,
    onDescriptionChange: (event: ChangeEvent) => void,
}

export const Header = ({title, description, onTitleChange, onDescriptionChange}: props) => {


    return (
        <>
            <Stack direction={"row"}
                   width={"100%"}
                   alignItems={"center"}
                   justifyContent={"space-between"}
                   gap={15}
            >
                <Stack flex={1}
                       gap={2}>
                    <TitleText>Создать квиз</TitleText>
                    <TextField fullWidth label={"Тема"} value={title} error={!title.trim().length}
                               onChange={onTitleChange}/>
                    <TextField fullWidth
                               label={"Description"}
                               multiline
                               rows={"5"}
                               value={description}
                               onChange={onDescriptionChange}/>
                </Stack>
                <Stack alignItems={"center"} gap={1}>
                    <Box width={250} height={250} bgcolor={'gray'} borderRadius={'100%'}></Box>
                    <Button>Изменить</Button>
                </Stack>
            </Stack>
        </>
    );
};
