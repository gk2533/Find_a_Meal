import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Form, Input } from 'semantic-ui-react';
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
        <Header as='h2' style={style.intro} textAlign='center'>
          Spicy jalapeno bacon ipsum dolor amet tongue incididunt doner, ea pork
          lorem id do. Cillum laboris exercitation in biltong sunt aliquip
          fatback consequat duis ribeye officia bacon. Sunt porchetta enim beef
          ribs est filet mignon pig id. Jowl labore shoulder tempor, in occaecat
          id elit short loin do.
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
        </Form>
      </Container>
      {searchMe()}
    </div>
  );
};
