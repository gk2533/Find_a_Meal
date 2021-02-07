import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import SoupkitchenPage from '../pages/SoupkitchenPage';
import ReviewPage from '../pages/ReviewPage';
import ReviewPage from '../pages/ReviewPage';

export default () => {
  return (
    <Switch>
      <Route exact path='/home'>
        <HomePage />
      </Route>
      <Route exact path='/soupkitchen'>
        <SoupkitchenPage />
      </Route>
      <Route exact path='/review'>
        <ReviewPage />
      </Route>
      <Route exact path='/search'>
        <FindPage />
      </Route>
      <Route exact path='/404'>
        <h1>Not found</h1>
      </Route>
    </Switch>
  );
};
