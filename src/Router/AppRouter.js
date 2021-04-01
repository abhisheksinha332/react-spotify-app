import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../component/Home';
import Reedirect from '../component/reedirect';
import DashBoard from '../component/Dashboard';
import NotFound from '../component/NotFound';

class AppRouter extends Component {
    render(){ return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/redirect" component={Reedirect} />
                    <Route path="/dashboard" component={DashBoard} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    )}
   
}

export default AppRouter;