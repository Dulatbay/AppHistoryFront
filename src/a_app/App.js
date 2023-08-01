import {MainProvider} from "./MainProvider";
import {MainRouter} from "./MainRouter";
import {CssBaseline} from "@mui/material";
import React from "react";

export default function App() {
    return (
        <MainProvider>
            <CssBaseline/>
            <MainRouter />
        </MainProvider>
    );
}


