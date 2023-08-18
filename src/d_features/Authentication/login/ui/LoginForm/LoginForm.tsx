import {useForm} from "react-hook-form";
import React, {useCallback} from "react";
import {Button} from "@mui/material";
import TextField from "@mui/material/TextField";
import styles from './LoginForm.module.css'
import {useAppDispatch} from "@/f_shared/model";
import {loginThunk} from "../../model/login";
import {LoginFormSchema} from "../../model/loginFormSchema";

type Props = {
    onComplete?: () => void
}

export function LoginForm(props: Props) {
    const dispatch = useAppDispatch()


    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        setError
    } = useForm({
        defaultValues: {
            email: 'adulatbai@bk.ru', password: '123456'
        },
        mode: 'onChange'
    })

    const onSubmit = useCallback(
        ({email, password}: LoginFormSchema) => {
            dispatch(loginThunk({email, password}))
                .unwrap()
                .then(() => props.onComplete?.())
                .catch((error) => {
                    setError('email', {type: 'server', message: error.message})
                })
        },
        []
    )


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                className={styles.field}
                label="E-Mail"
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
                {...register('email', {required: "Укажите почту"})}
                type="email"
                fullWidth
            />
            <TextField
                className={styles.field}
                label="Пароль"
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
                type="password"
                {...register('password', {required: "Укажите пароль"})}
                fullWidth
            />
            <Button size="large"
                    variant="contained"
                    disabled={!isValid}
                    fullWidth
                    type={'submit'}>
                Войти
            </Button>
        </form>
    )
}
