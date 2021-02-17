import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';

const Routes = () => {
    return(
        <Switch>
            <Route path="/"><App/></Route>
        </Switch>
    )
}

export default Routes;