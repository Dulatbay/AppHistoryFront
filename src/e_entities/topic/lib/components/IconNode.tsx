import {baseNode} from "@/e_entities/topic/lib/types";
import {ReactNode} from "react";
import {Stack} from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import {useTheme} from "@mui/material/styles";
import EastIcon from '@mui/icons-material/East';

interface Props extends baseNode {
    gap: number;
    iconName: "PRIMARY_DOTE" | "ARROW_RIGHT";
    node: ReactNode;
    iconColor: "PRIMARY" | "SECONDARY" | "DEFAULT";
}

export const IconNode = ({gap, iconName, node, iconColor}: Props) => {
    const theme = useTheme(); // Получаем текущую тему из Material-UI

    const getIconColor = (color: "PRIMARY" | "SECONDARY" | "DEFAULT") => {
        switch (color) {
            case "PRIMARY":
                return theme.palette.primary.main;
            case "SECONDARY":
                return theme.palette.secondary.main;
            default:
                if (theme.palette.mode.toLowerCase() === 'dark')
                    return theme.palette.common.white;
                else return theme.palette.common.black
        }
    };

    const getIcon = (iconName: "PRIMARY_DOTE" | "ARROW_RIGHT") => {
        switch (iconName) {
            case "PRIMARY_DOTE":
                return <Brightness1Icon sx={{color: getIconColor(iconColor), fontSize: "10px"}}/>;
            case "ARROW_RIGHT":
                return <EastIcon sx={{color: getIconColor(iconColor)}}/>
            default:
                return null;
        }
    };

    return (
        <Stack direction="row" gap={gap} alignItems="center">
            {getIcon(iconName)}
            {
                node
            }
        </Stack>
    );
};
