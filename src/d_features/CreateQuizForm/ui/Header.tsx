import {Box, Button, Stack} from "@mui/material";
import {TitleText} from "@/f_shared/TitleText";
import TextField from "@mui/material/TextField";
import React, {ChangeEvent, useCallback} from "react";

interface props {
    title: string,
    description: string,
    onTitleChange: (event: ChangeEvent) => void,
    onDescriptionChange: (event: ChangeEvent) => void,
    setSelectedImage: (file: File) => void,
    selectedImage: File | null
}

export const Header = ({title, description, onTitleChange, onDescriptionChange, setSelectedImage, selectedImage}: props) => {


    const changeImageClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = false
        input.onchange = (e) => {
            const files = (e.target as HTMLInputElement).files;
            if (files && files.length > 0) {
                const selectedImage = files[0];
                setSelectedImage(selectedImage)
            }
        };
        input.click();
    }, [setSelectedImage]);
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
                    <Box width={250} height={250} borderRadius={'100%'} overflow={"hidden"} bgcolor={"gray"}>
                        {
                            selectedImage && <img src={URL.createObjectURL(selectedImage)} alt={""} style={{height: "100%"}}/>
                        }
                    </Box>
                    <Button onClick={changeImageClick}>Изменить</Button>
                </Stack>
            </Stack>
        </>
    );
};
