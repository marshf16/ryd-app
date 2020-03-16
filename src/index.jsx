import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from "./Home"
import Profile from "./pages/Profile"

ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={Home} />
                <Route path="/Profile" component={Profile} />
            </main>
        </div>
    </Router>,
    document.getElementById("root")
)
