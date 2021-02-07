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
  const soupkitchens = ['Zhihan', 'Zamie', 'Gabe', 'Zhihan Chen'];

  const variables = [];

  const [currentSoupKitchens, setCurrentSoupKitchens] = useState({});

  const [currentId, setCurrentId] = useState(0);

  const [currentSearch, setSearch] = useState({
    search: '',
  });

  const updateCurrentSearch = (event) => {
    setSearch({ ...currentSearch, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const getSoupKitchens = async () => {
      Axios.get('api/soup_kitchen/show_soup_kitchens')
        .then((resp) => {
          setCurrentSoupKitchens(resp.data);
          console.log(resp);
          console.log(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getSoupKitchens();
  }, [currentId]);

  for (var i = 0; i < currentSoupKitchens.length; i++) {
    variables[i] = currentSoupKitchens[i].name;
  }

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
    <div>
      <div id='background-wrap'>
        <div class='x1'>
          <div class='cloud'></div>
        </div>

        <div class='x2'>
          <div class='cloud'></div>
        </div>

        <div class='x3'>
          <div class='cloud'></div>
        </div>

        <div class='x4'>
          <div class='cloud'></div>
        </div>

        <div class='x5'>
          <div class='cloud'></div>
        </div>
      </div>
      <Container>
        <Header as='h1' style={style.logo} textAlign='center'>
          Find a Meal
        </Header>
        <Header as='h2' style={style.intro} textAlign='center'>
          Welcome to Find a Meal, a PERN-stack web application focused on
          connecting and identifying soup kitchens for homeless families across
          the country. Our web application goes beyond the few available
          alternatives by giving users the ability to post reviews of the soup
          kitchen’s level of equal opportunity, sense of welcome, and overall
          quality, as well as rate their service on a one-to-five scale.
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
              icon='search'
              placeholder='Search up soupkitchens alphabetically!'
            />
          </Form.Field>
          {searchMe()}
        </Form>
      </Container>
    </div>
  );
};
