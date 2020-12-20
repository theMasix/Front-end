import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom'
import Home from './Home/Home'
import Login from './user/pages/Login'
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
        </Switch>
    );
};

export default Routes;