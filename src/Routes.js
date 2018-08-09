import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main';

const Routes = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact={true} component={Main} />
        </Switch>
    </ HashRouter>
)

export default Routes;
