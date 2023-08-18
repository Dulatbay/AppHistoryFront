import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import styles from "./Login.module.css";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {LoginForm} from "@/d_features/Authentication/login";
import {useSelector} from "react-redux";
import {selectIsAuthorized} from "@/e_entities/session";
import {Button} from "@mui/material";

export const LoginPage = () => {
    const isAuth = useSelector(selectIsAuthorized)
    const navigate = useNavigate()
    const location = useLocation()
    if (isAuth)
        return <Navigate to={'/'}/>


    const onRegisterRedirectHandler = () => {
        navigate('/register')
    };

    const onComplete = () => {
        navigate(location.state?.returnUrl ?? '/')
    }


    return (<Paper classes={{root: styles.root}} sx={{textAlign: "center"}}>
        <Typography classes={{root: styles.title}} variant="h5">
            Вход в аккаунт
        </Typography>
        <LoginForm onComplete={onComplete}/>
        <Button sx={{textAlign: "center", fontSize: "12px"}} size={"small"} onClick={onRegisterRedirectHandler}>Нет
            аккаунта?</Button>
    </Paper>);
};


