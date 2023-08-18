import Paper from "@mui/material/Paper";
import {Avatar, Button, Typography} from "@mui/material";
import {selectIsAuthorized} from "@/e_entities/session";
import styles from './style.module.css';
import {Navigate, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {RegisterForm} from "@/d_features/Authentication/registration/ui/RegisterForm";

export const RegisterPage = () => {
    const isAuth = useSelector(selectIsAuthorized)
    const navigate = useNavigate()
    useEffect(() => {
        console.log(isAuth)
    }, [isAuth])

    if (isAuth)
        return <Navigate to={'/'}/>

    const onLoginRedirectHandler = () => {
        navigate('/login')
    };
    const onComplete = async () => {
    }


    return (
        <>
            <Paper classes={{root: styles.root}} sx={{textAlign: "center"}}>
                <Typography classes={{root: styles.title}} variant="h5">
                    Создание аккаунта
                </Typography>
                <div className={styles.avatar}>
                    <Avatar sx={{width: 100, height: 100}}/>
                </div>
                <RegisterForm onComplete={onComplete}/>
                <Button sx={{textAlign: "center", fontSize: "12px"}} size={"small"} onClick={onLoginRedirectHandler}>Уже
                    есть аккаунт?</Button>
            </Paper>
        </>
    );
};
