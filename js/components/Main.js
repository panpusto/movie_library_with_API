import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "../redux/store";
import Test from "./Test";



const Main = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Test} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};


export default Main;