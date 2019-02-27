/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import UserOnboarding from 'containers/UserOnboarding/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Index from 'containers/Index/Index';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/useronboarding" component={UserOnboarding} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}