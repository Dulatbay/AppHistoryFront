import {Divider, Stack} from "@mui/material";
import {ModuleCard, useGetAllModuleQuery} from "@/e_entities/module";

export const ModulesViewer = () => {
    const {data, isFetching, isError} = useGetAllModuleQuery();

    if (isFetching)
        return <>Загрузка</>

    if (isError)
        return <>Ошибка</>

    return <Stack width={'100%'} gap={7} maxWidth={1600}>
        {data && data.map((module, index) => [
                <ModuleCard {...module} key={module.id}/>,
                <Divider flexItem key={index}/>
            ]
        )}
    </Stack>
}