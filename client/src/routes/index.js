import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home/HomePage';
import SoupkitchenPage from '../pages/Soupkitchen/SoupkitchenPage';
import ReviewPage from '../pages/Review/ReviewPage';
import StJohnsPage from '../pages/StJohns';

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
      <Route exact path='/stjohns'>
        <StJohnsPage />
      </Route>
      <Route exact path='/404'>
        <h1>Not found</h1>
      </Route>
    </Switch>
  );
};
