import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Header,
  Form,
  Input,
  Select,
  TextArea,
  Button,
} from 'semantic-ui-react';
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
  review: {},
};

const ratingOptions = [
  { key: '5', text: '5', value: '5' },
  { key: '4', text: '4', value: '4' },
  { key: '3', text: '3', value: '3' },
  { key: '2', text: '2', value: '2' },
  { key: '1', text: '1', value: '1' },
];

export default () => {
  var soupkitchens = ['Zhihan', 'Zamie', 'Gabe', 'Zhihan Chen'];

  const [currentSearch, setSearch] = useState({
    search: '',
  });

  const updateCurrentSearch = (event) => {
    setSearch({ ...currentSearch, [event.target.name]: event.target.value });
  };

  const searchMe = () => {
    var i = 0;
    var newList = [];
    while (i < soupkitchens.length) {
      if (!soupkitchens[i].search(currentSearch.search)) {
        newList[newList.length] = soupkitchens[i];
      }
      i++;
    }

    if (newList.length === soupkitchens.length) {
      return;
    }

    return (
      <h3>
        {newList.map((variable) => (
          <p>
            <a href='google.com' key={variable}>
              {variable}
            </a>
          </p>
        ))}
      </h3>
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
              onClick={console.log(currentSearch.search)}
              icon='search'
              placeholder='Search up soupkitchens alphabetically!'
            />
          </Form.Field>
          {searchMe()}
        </Form>

        <Header as='h3'>Leave a review!</Header>
        <Form>
          <Form.Field
            control={Select}
            options={ratingOptions}
            label='Rating'
            placeholder='5'
            search
            searchInput={{ id: 'form-select-rating' }}
          />
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Review'
            placeholder='Write your review here'
          />
          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Submit'
            label=''
          />
        </Form>
      </Container>
    </div>
  );
};
