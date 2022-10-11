import React from "react";
import Main from '../detail/Main';
import Detail from "../detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Main />} />
                <Route path="detail" element = {<Detail />} />
                <Route path="detail/:id" element = {<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;