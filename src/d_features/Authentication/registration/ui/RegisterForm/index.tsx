import TextField from "@mui/material/TextField";
import styles from "./style.module.css";
import {useForm} from "react-hook-form";
import {useCallback} from "react";
import {RegisterFormSchema} from "@/d_features/Authentication/registration/model/registerFormSchema";
import {registerThunk} from "@/d_features/Authentication/registration/model/register";
import {Button} from "@mui/material";
import {useAppDispatch} from "@/f_shared/model";

type Props = {
    onComplete: () => void
}

export const RegisterForm = (props: Props) => {
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        setError
    } = useForm({
        defaultValues: {
            email: 'adulatbai@bk.ru', password: '123456', username: "Dulatbay Akhan"
        },
        mode: 'onChange'
    })

    const onSubmit = useCallback(
        ({email, password, username}: RegisterFormSchema) => {
            dispatch(registerThunk({email, password, username}))
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
            <TextField className={styles.field}
                       label="Имя"
                       fullWidth
                       error={Boolean(errors.username?.message)}
                       helperText={errors.username?.message}
                       {...register('username', {required: "Укажите имя"})}
            />
            <TextField className={styles.field}
                       label="E-Mail"
                       error={Boolean(errors.email?.message)}
                       helperText={errors.email?.message}
                       {...register('email', {required: "Укажите почту"})}
                       fullWidth/>
            <TextField className={styles.field}
                       label="Пароль"
                       error={Boolean(errors.password?.message)}
                       helperText={errors.password?.message}
                       {...register('password', {required: "Укажите пароль"})}
                       fullWidth/>
            <Button size="large"
                    variant="contained"
                    disabled={!isValid}
                    fullWidth
                    type={'submit'}>
                Зарегистрироваться
            </Button>
        </form>
    );
};
