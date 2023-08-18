import React from "react";
import {MainProvider} from "./MainProvider";
import {MainRouter} from "./MainRouter";
import {CssBaseline} from "@mui/material";

export default function App() {
    return (
        <MainProvider>
            <CssBaseline/>
            <MainRouter/>
        </MainProvider>
    );
}


