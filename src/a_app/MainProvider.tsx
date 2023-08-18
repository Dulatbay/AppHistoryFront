import {BrowserRouter} from "react-router-dom";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";
import {Provider as ReduxProvider} from "react-redux";
import React, {ReactNode} from "react";
import {appStore, persistedStore} from "@/a_app/appStore";
import {PersistGate} from 'redux-persist/integration/react'

import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const theme = responsiveFontSizes(createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6B68FF',
        },
        secondary: {
            main: '#282424'
        },
        background: {
            default: "#000000"
        },
        text: {
            primary: '#fff',
            secondary: '#B6B6B6'
        },
        divider: '#D9D9D9',
        success: {
            main: '#16d30c'
        }
    },
    typography: {
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
}));


export const MainProvider = ({children}: { children: ReactNode }) => {
    return (
        <BrowserRouter>
            <ReduxProvider store={appStore}>
                <PersistGate loading={null} persistor={persistedStore}>
                    <ThemeProvider theme={theme}>
                        <ToastContainer autoClose={5000}
                                        hideProgressBar={false}
                                        closeOnClick={true}
                                        pauseOnHover={false}
                                        draggable={true}
                                        theme={"dark"}
                        />
                        {children}
                    </ThemeProvider>
                </PersistGate>
            </ReduxProvider>
        </BrowserRouter>
    )
}
