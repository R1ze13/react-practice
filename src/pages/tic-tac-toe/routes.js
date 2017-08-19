import React from 'react';
import { Route } from 'react-router';
import ticTacToePage from './tic-tac-toe';

export default (
    <Route>
        <Route component={ ticTacToePage } path={ ticTacToePage.path } />
    </Route>
);
