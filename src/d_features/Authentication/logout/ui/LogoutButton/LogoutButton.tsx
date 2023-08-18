import {useAppDispatch} from '@/f_shared/model'
import {logoutThunk} from '../../model/logout'
import {Button} from "@mui/material";
import React from "react";

export function LogoutButton() {
    const dispatch = useAppDispatch()

    const onConfirmLogout = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        e.preventDefault()

        dispatch(logoutThunk())
    }

    return (
        <Button color="error" variant="outlined" onClick={onConfirmLogout}>
            logout
        </Button>
    )
}
