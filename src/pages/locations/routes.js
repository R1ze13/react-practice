import React from 'react';
import { Route } from 'react-router';
import locationsPage from './locations';

export default (
    <Route>
        <Route component={ locationsPage } path={ locationsPage.path } />
    </Route>
);
