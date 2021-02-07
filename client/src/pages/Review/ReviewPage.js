import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Form, Input, Select, TextArea, Button } from 'semantic-ui-react';
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

const ratingOptions = [
  { key: '5', text: '5', value: '5' },
  { key: '4', text: '4', value: '4' },
  { key: '3', text: '3', value: '3' },
  { key: '2', text: '2', value: '2' },
  { key: '1', text: '1', value: '1' },
];

export default () => {
  var soupkitchens = ['Zhihan', 'Zamie', 'Gabe', 'Zhihan Chen'];
  
  const variables = []
  
  let id = '';
  
  function getQueryVariable(variable)
    {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] === variable){return pair[1];}
       }
       return(false);
    }
  
  const [currentSoupKitchens, setCurrentSoupKitchens] = useState({});

  const [currentId, setCurrentId] = useState(0);
  
  const [currentSearch, setSearch] = useState({
    search: '',
  });

  const [currentReview, setCurrentReview] = useState({
    id: id,
    review: '',
    rate: 3
  })
  
  const updateCurrentSearch = (event) => {
    setSearch({ ...currentSearch, [event.target.name]: event.target.value });
  };
  
  const updateCurrentReview = (event) => {
    setCurrentReview({ ...currentReview, [event.target.name]: event.target.value });
  };
  
  useEffect(() => {
      const getSoupKitchens = async () => {
          Axios.get("api/soup_kitchen/show_soup_kitchens")
            .then(resp => {
              setCurrentSoupKitchens(resp.data);
              console.log(resp);
              console.log(resp.data);
            })
            .catch(error =>{
              console.log(error)
            });
      }
      getSoupKitchens();
  }, [currentId]);
  
  for (var i = 0; i < currentSoupKitchens.length; i++) {
      variables[i] = currentSoupKitchens[i].name;
  }
  
  const createReview = async (event) => {
    event.preventDefault();
    
    setCurrentReview({id: id})
    
    Axios.post("api/soup_kitchens/post_review", currentReview)
      .then(resp => {
          console.log(resp);
      })
      .catch(error => {
          console.error(error);
      })
      
    // window.location.reload();
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
              onClick={console.log(ratingOptions.value)}
              icon='search'
              placeholder='Search up soupkitchens alphabetically!'
            />
          </Form.Field>
          {searchMe}
        </Form>
        <Header as='h3'>Leave a review!</Header>
          <Form>
            <Form.Field
              id = 'rating'
              control={Select}
              options={ratingOptions}
              label='Rating'
              placeholder='5'
              search
              onClick={console.log(ratingOptions.value)}
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
