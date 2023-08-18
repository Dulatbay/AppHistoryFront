import {ReactNode, useEffect} from "react";
import {useAppSelector} from "@/f_shared/model";
import {selectIsAuthorized} from "@/e_entities/session";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

interface props {
    children: ReactNode
}

export const ProtectedAuthPage = ({children}: props) => {
    const isAuth = useAppSelector(selectIsAuthorized);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            toast("Сначала войдите в систему", {
                toastId: "login",
                onClick: () => {
                    navigate('/login')
                }
            })
            navigate(-1)
        }
    }, [navigate, isAuth]);

    return (
        <>
            {children}
        </>
    );
};
