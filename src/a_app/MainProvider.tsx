import {BrowserRouter} from "react-router-dom";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";
import {Provider as ReduxProvider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import React from "react";

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


const store = configureStore({
    reducer: {
    }
})

export const MainProvider = ({children}) => {
    return (
        <BrowserRouter>
            <ReduxProvider store={store}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </ReduxProvider>
        </BrowserRouter>
    )
}
