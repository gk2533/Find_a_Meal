import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Axios from 'axios';

import HomePage from '../pages/Home/HomePage';
import SoupkitchenPage from '../pages/Soupkitchen/SoupkitchenPage';
import FindPage from '../pages/Find/FindPage';
import ReviewPage from '../pages/Review/ReviewPage';

export default () => {
  return (
    <Switch>
      <Route exact path='/home'>
        <HomePage />
      </Route>
      <Route exact path='/soupkitchen'>
        <SoupkitchenPage />
      </Route>
      <Route exact path='/find'>
        <FindPage />
      </Route>
      <Route exact path='/find'>
        <ReviewPage />
      </Route>
      <Route exact path='/404'>
        <h1>Not found</h1>
      </Route>
    </Switch>
  );
};
