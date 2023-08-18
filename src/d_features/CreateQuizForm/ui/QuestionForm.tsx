import {
    Button,
    Divider,
    FormControl,
    InputLabel,
    ListSubheader,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack
} from "@mui/material";
import {TitleText} from "@/f_shared/TitleText";
import TextField from "@mui/material/TextField";
import {Question, QuestionCard, Variant} from "@/e_entities/question";
import React, {ChangeEvent, useCallback, useState} from "react";
import {VariantAddForm} from "./VariantAddForm";
import {toast} from "react-toastify";
import {ModuleTitle} from "@/e_entities/module";

interface props {
    questions: Array<Question>,
    setQuestions: (questions: Array<Question>) => void,
    moduleTopicsTitle: Array<ModuleTitle> | undefined
}

export const QuestionForm = ({questions, setQuestions, moduleTopicsTitle}: props) => {
    const [isCreateQuestion, setIsCreateQuestion] = useState(false);
    const [currentQuestionText, setCurrentQuestionText] = useState("");
    const [currentVariants, setCurrentVariants] = useState(Array<Variant>);
    const [currentVariantText, setCurrentVariantText] = useState("");
    const [currentQuestionLevel, setCurrentQuestionLevel] = useState("1");
    const [currentCorrectVariantIndex, setCurrentCorrectVariantIndex] = useState(0);
    const [currentChosenTopicId, setCurrentChosenTopicId] = useState(1);


    const onCreateQuestionHandler = useCallback(() => {
        if (isCreateQuestion) {
            setCurrentQuestionText("")
            setCurrentVariants([])
        }
        setIsCreateQuestion(!isCreateQuestion)
    }, [isCreateQuestion]);

    const onQuestionTextInputChange = useCallback((event: ChangeEvent) => {
        // @ts-ignore
        if (event.target.value && event.target.value.trim().length) setCurrentQuestionText(event.target.value)
        else {
            setCurrentQuestionText("")
        }
    }, []);


    const onAddVariantHandler = useCallback(() => {
        currentVariants.push({content: currentVariantText});
        setCurrentVariants(currentVariants);
        setCurrentVariantText("");
    }, [currentVariants, currentVariantText]);

    const onVariantTextChange = useCallback((event: ChangeEvent) => {
        // @ts-ignore
        setCurrentVariantText(event.target.value)
    }, []);

    const onDeleteVariantHandler = useCallback(() => {
        const newVariants = [...currentVariants];
        newVariants.pop();
        setCurrentVariants(newVariants);
    }, [currentVariants]);

    const onAddQuestionHandler = useCallback(() => {
        if (Number.isNaN(parseInt(currentQuestionLevel)) || +currentQuestionLevel <= 0 || +currentQuestionLevel > 3)
            toast("Укажите сложность в диапазоне от 1 до 3")

        const toAddQuestion: Question = {
            questionText: currentQuestionText,
            level: +currentQuestionLevel,
            correctVariantIndex: currentCorrectVariantIndex,
            variants: currentVariants,
            id: 0,
            topicId: currentChosenTopicId,
            topicTitle: ""
        }
        const newQuestions = [...questions];
        newQuestions.push(toAddQuestion)
        setQuestions(newQuestions);
        setCurrentQuestionText("")
        setCurrentVariants([])
        setCurrentCorrectVariantIndex(0)
    }, [currentChosenTopicId, setQuestions, currentCorrectVariantIndex, currentQuestionLevel, questions, currentQuestionText, currentVariants]);

    const onDeleteQuestionHandler = useCallback(() => {
        const newQuestions = [...questions];
        newQuestions.pop();
        setQuestions(newQuestions);
    }, [setQuestions, questions]);

    const onQuestionLevelChange = useCallback((event: ChangeEvent) => {
        // @ts-ignore
        setCurrentQuestionLevel(event.target.value)
    }, []);


    const onCorrectVariantIndexChange = (index: number, checked: boolean) => {
        console.log(checked)
        if (!checked) return;
        setCurrentCorrectVariantIndex(index)
    }
    const onCurrentTopicChange = (event: SelectChangeEvent) => {
        // @ts-ignore
        setCurrentChosenTopicId(+event.target.value);
    };

    return (
        <form>
            <Stack gap={2}>
                <TitleText>Вопросы</TitleText>
                <Stack flexDirection={"row"}
                       gap={15}
                >
                    {
                        !isCreateQuestion ? <Button variant={"contained"} color={"success"}
                                                    onClick={onCreateQuestionHandler}>Добавить</Button>
                            :
                            <Button variant={"contained"} color={"warning"}
                                    onClick={onCreateQuestionHandler}>Отменить</Button>
                    }

                    <Button variant={"outlined"} color={"info"} disabled={isCreateQuestion}>Найти</Button>
                </Stack>
                {
                    isCreateQuestion ?
                        <Stack direction={"row"}>
                            <Stack width={"100%"}>
                                <TextField fullWidth label={"Вопрос"}
                                           onChange={onQuestionTextInputChange}
                                           value={currentQuestionText}/>
                                {
                                    currentQuestionText.trim().length ?
                                        <VariantAddForm currentVariants={currentVariants}
                                                        onVariantTextChange={onVariantTextChange}
                                                        currentVariantText={currentVariantText}
                                                        onAddVariantHandler={onAddVariantHandler}
                                                        onDeleteVariantHandler={onDeleteVariantHandler}
                                                        currentCorrectVariantIndex={currentCorrectVariantIndex}
                                                        onCorrectVariantIndexChange={onCorrectVariantIndexChange}
                                        />
                                        : "Прежде чем добавить вариант, добавьте текст вопроса"
                                }
                                <Stack mt={10} gap={3}>
                                    <FormControl sx={{m: 1, width: "100%"}}>
                                        <InputLabel htmlFor="grouped-select">Выбрать тему</InputLabel>
                                        <Select id="grouped-select" label="Выбрать тему"
                                                value={`${currentChosenTopicId}`} onChange={onCurrentTopicChange}
                                        >
                                            {
                                                moduleTopicsTitle?.map(module => (
                                                        [
                                                            <ListSubheader key={module.id}>
                                                                {module.title}
                                                            </ListSubheader>,
                                                            module.topics.map(topic => (
                                                                [
                                                                    <MenuItem value={topic.id} key={topic.id}>
                                                                        {topic.title}
                                                                    </MenuItem>
                                                                ]
                                                            ))
                                                        ]
                                                    )
                                                )
                                            }
                                        </Select>
                                    </FormControl>
                                    <Stack direction={"row"}>
                                        <TextField type={"number"} label={"Сложность"} value={currentQuestionLevel}
                                                   onChange={onQuestionLevelChange}
                                                   error={Number.isNaN(parseInt(currentQuestionLevel)) || +currentQuestionLevel <= 0 || +currentQuestionLevel > 3}

                                        />
                                        <Button disabled={currentVariants.length < 2}
                                                fullWidth
                                                variant={"contained"}
                                                color={"primary"}
                                                onClick={onAddQuestionHandler}>Создать вопрос</Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack> :
                        ""
                }
                <Divider flexItem sx={{marginTop: 14}}/>
                <Stack direction={"row"} width={"100%"} justifyContent={"space-between"}>
                    <TitleText>Добавленные вопросы</TitleText>
                    <Button variant={"outlined"} color={"error"} disabled={!questions.length}
                            onClick={onDeleteQuestionHandler}>Удалить</Button>
                </Stack>
                <Stack gap={2} alignItems={"start"}>
                    {questions.map((question, index) =>
                        <QuestionCard key={index}
                                      number={index + 1}
                                      isFocus={false}
                                      isFocusCorrectIndex={true}
                                      id={question.id}
                                      questionText={question.questionText}
                                      level={question.level}
                                      correctVariantIndex={question.correctVariantIndex}
                                      variants={question.variants}
                                      topicId={question.topicId}
                                      topicTitle={""}
                        />)}
                </Stack>

            </Stack>
        </form>
    );
};
