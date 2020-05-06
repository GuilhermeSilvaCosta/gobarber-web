import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import Route from './Route';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={React.lazy(() => import('pages/SignUp'))} />
            <Route path="/dashboard" component={React.lazy(() => import('pages/Dashboard'))} isPrivate />
            <Route path="/profile" component={React.lazy(() => import('pages/Profile'))} isPrivate />

            <Route path="/" component={() => <h1>404</h1>} />
        </Switch>
    );
}
