import {Stack, Typography} from "@mui/material";

interface props {
    moduleTitle: string
    topicsTitle: string[]
}

export const TopicTabBar = ({moduleTitle, topicsTitle}: props) => {
    return (
        <>
            <Stack>
                <Typography fontSize={24} fontWeight={600} width={'100%'}
                            style={{display: 'inline', wordWrap: 'break-word'}}>Модуль: {moduleTitle}</Typography>
                <Typography>Темы:</Typography>
                {
                    topicsTitle.map((title, index) => <Typography key={index} width={'100%'}
                                                                  style={{display: 'inline', wordWrap: 'break-word'}}>{index + 1}. {title}</Typography>)
                }
            </Stack>
        </>
    );
};
