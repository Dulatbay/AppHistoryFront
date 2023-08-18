import {Button, Checkbox, Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {ChangeEvent} from "react";
import {Variant} from "@/e_entities/question";

interface props {
    currentVariants: Variant[],
    onVariantTextChange: (event: ChangeEvent) => void,
    currentVariantText: string,
    onAddVariantHandler: () => void
    onDeleteVariantHandler: () => void,
    currentCorrectVariantIndex: number,
    onCorrectVariantIndexChange: (index: number, checked: boolean) => void
}

export const VariantAddForm = ({
                                   currentVariants,
                                   onVariantTextChange,
                                   currentVariantText,
                                   onAddVariantHandler,
                                   onDeleteVariantHandler,
                                   currentCorrectVariantIndex,
                                   onCorrectVariantIndexChange
                               }: props) => {


    return (
        <>
            <Stack direction={"row"} mt={2} width={"100%"} justifyContent={"space-between"}>
                <Button variant={"outlined"} size={"small"} color={"info"}>Найти
                    вариант</Button>
                <Button size={"small"} color={"success"}>Подобрать автоматически</Button>
            </Stack>
            <Stack mt={2} gap={2} alignSelf={"stretch"} textAlign={"center"}>
                {
                    currentVariants.map((variant, index) =>
                        <Stack direction={"row"} key={index}>
                            <TextField fullWidth label={`Вариант ${index + 1}`}
                                       value={variant.content} disabled/>
                            <Checkbox onChange={(event, checked) => {
                                onCorrectVariantIndexChange(index, checked)
                            }}
                                      checked={currentCorrectVariantIndex === index}
                            />
                        </Stack>
                    )
                }
                <TextField label={`Вариант ${currentVariants.length + 1}`}
                           fullWidth
                           variant="filled"
                           onChange={onVariantTextChange}
                           value={currentVariantText}
                />
                <Stack direction={"row"} gap={20}>
                    <Button variant={"contained"} size={"small"}
                            color={"success"}
                            fullWidth
                            onClick={onAddVariantHandler}
                            disabled={!currentVariantText.trim().length}
                    >Добавить</Button>
                    <Button variant={"outlined"} color={"error"}
                            fullWidth
                            onClick={onDeleteVariantHandler}
                            disabled={!currentVariants.length}
                    >Удалить</Button>
                </Stack>
            </Stack>
        </>
    );
};
