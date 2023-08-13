import {Box, Divider, Stack, useTheme} from "@mui/material";
import {NavLink} from "react-router-dom";
import styles from './style.module.css';
import {ReactNode} from "react";


interface TabLinkProps {to:string, children:ReactNode}
const TabLink = ({to, children} : TabLinkProps) => (
    <NavLink to={to} style={{textDecoration: 'none'}}>
        {({isActive}) => (
            <span className={isActive ? styles.active : styles.link}>{children}</span>
        )}
    </NavLink>
);

export const TabBar = () => {
    const theme = useTheme();
    const dividerColor = theme.palette.divider
    const tabBarColor = theme.palette.secondary.main
    const primaryColor = theme.palette.primary.main

    return (
        <Box sx={{
            padding: '25px 35px',
            background: tabBarColor,
            borderRadius: '20px',
            border: `solid ${primaryColor} 1px`,
            transition: 'box-shadow 0.6s',
            "&:hover": {
                boxShadow: `0 0 20px 1px ${primaryColor}`,
            },
            width: '150px'
        }}>
            <Stack spacing={0.7} alignItems={'center'}>
                <TabLink to="/">Главная</TabLink>
                <TabLink to="/news-line">Лента</TabLink>
                <Divider color={dividerColor} flexItem/>
                <TabLink to="/learn">Обучение</TabLink>
                <TabLink to="/quizes">Квизы</TabLink>
                <TabLink to="/tournaments">Турниры</TabLink>
                <TabLink to="/archive">Архив</TabLink>
                <TabLink to="/map">Карта</TabLink>
                <Divider color={dividerColor} flexItem/>
                <TabLink to="/friends">Друзья</TabLink>
                <TabLink to="/settings">Настройки</TabLink>
            </Stack>
        </Box>
    );
};
