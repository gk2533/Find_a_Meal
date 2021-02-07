import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Form, Input } from 'semantic-ui-react';

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

var soupkitchens = ['Zhihan', 'Zamie', 'Gabe', 'Zhihan Chen'];

// const [searchTerm, setSearch] = useState({
//   value: '',
// });

function search(toFind) {
  var i = 0;
  var newList = [];
  while (i < soupkitchens.length) {
    if (!soupkitchens[i].search(toFind)) {
      newList[newList.length] = soupkitchens[i];
    }
    i++;
  }

  return (
    <ol>
      {newList.map((variable) => (
        <h2 key={variable}>{variable}</h2>
      ))}
    </ol>
  );
}

export default () => {
  return (
    <div>
      <Container>
        <Header as='h1' style={style.logo} textAlign='center'>
          Soupkitchen
        </Header>
        <Header as='h2' style={style.intro} texAlign='center'>
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
              size='massive'
              action={{
                icon: 'search',
                size: 'massive',
                onClick: search(document.querySelector('#search').value),
              }}
              placeholder='Search up soupkitchens alphabetically!'
            />
          </Form.Field>
        </Form>
      </Container>
    </div>
  );
};
