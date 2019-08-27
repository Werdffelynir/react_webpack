import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'

import Main from "./components/Main";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Projects from "./components/Projects";
import Notfound from "./components/notfound";
import Dashboard from "./components/Dashboard";


const routing = (
    <Router>
        <Dashboard>

            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/profile" component={Profile} />
                <Route path='/settings' render={() => <Settings />}/>
                <Route path="/project(s?)/:id?" component={Projects} />

                <Route path='/404' component={Notfound} />
                <Redirect from='*' to='/404' />
            </Switch>

        </Dashboard>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
