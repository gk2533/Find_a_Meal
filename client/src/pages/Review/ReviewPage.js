import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Form, Input, Button } from 'semantic-ui-react';
import './style.css';

const style = {
  logo: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  searchbar: {
    margin: '3em',
    iconSize: 'massive',
  },
  intro: {
    fontSize: '1.5em',
    marginTop: '1em',
    marginBottom: '1em',
  },
};

export default () => {
  var soupkitchens = ['Zhihan', 'Zamie', 'Gabe', 'Zhihan Chen'];
    
  const searchMe = () => {
    var i = 0;
    var newList = [];
    while (i < variables.length) {
      if (!variables[i].search(currentSearch.search)) {
        newList[newList.length] = variables[i];
      }
      i++;
    }

    if (newList.length === variables.length) {
      return;
    }
    
    return (
      <div>
        <h3>
          {newList.map((variable) => (
            <p>
              <a href={`/soupkitchen?name=${variable}`} key={variable}>
                {variable}
              </a>
            </p>
          ))}
        </h3>
      </div>
    );
  };

  return (
    <div onload={id = getQueryVariable('id')}>
      <div id="background-wrap">
          <div class="x1">
              <div class="cloud"></div>
          </div>

          <div class="x2">
              <div class="cloud"></div>
          </div>

          <div class="x3">
              <div class="cloud"></div>
          </div>

          <div class="x4">
              <div class="cloud"></div>
          </div>

          <div class="x5">
              <div class="cloud"></div>
          </div>
      </div>
      <Container>
        <Header as='h1' style={style.logo} textAlign='center'>
          Soupkitchen
        </Header>
        <Form style={style.searchbar}>
          <Form.Field>
            <Input
              id='search'
              type='search'
              name='search'
              value={currentSearch.search}
              size='massive'
              onChange={updateCurrentSearch}
              onClick={console.log(id)}
              icon='search'
              placeholder='Search up soupkitchens alphabetically!'
            />
          </Form.Field>
        </Form>
      </Container>
      {searchMe()}



      <form class="ui form" onSubmit={createReview}>
        <div class="field">
          <label>Leave a review!</label>
          <textarea name="review" value={currentReview.review} onChange={updateCurrentReview}></textarea>
        </div>

        <div class="field">
        <label>Please rate this soupkitchen from 1-5 (5 being best!)</label>
        <select class="ui dropdown">
          <option name="rate" value="" onChange={updateCurrentReview}>Rate</option>
          <option name="rate" value="1" onChange={updateCurrentReview}>1</option>
          <option name="rate" value="2" onChange={updateCurrentReview}>2</option>
          <option name="rate" value="3" onChange={updateCurrentReview}>3</option>
          <option name="rate" value="4" onChange={updateCurrentReview}>4</option>
          <option name="rate" value="5" onChange={updateCurrentReview}>5</option>
          
        </select>
        </div>

        <div>
          <button type="submit" class="ui button">Submit</button>
        </div>
      </form>
    </div>
  );
};
