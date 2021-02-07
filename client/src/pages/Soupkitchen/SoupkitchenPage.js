import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Header,
  Form,
  Input,
  Card,
  Image,
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
  card: {
    width: '85%',
  },
  cardTitle: {
    fontSize: '1.5em',
  },
  cardLocation: {
    paddingLeft: '1.5rem',
    paddingBottom: '1.5rem',
  },
  review: {
    border: '1px black solid',
  },
  reviewTitle: {
    fontWeight: 'bold',
    fontSize: '1.25em',
    paddingLeft: '1.25rem',
  },
  reviewContent: {
    paddingLeft: '1.25rem',
    paddingBottom: '1.25rem',
  },
};

const description =
  'The mission of Cathedral Community Cares (CCC) is to combat and alleviate poverty through preventive poverty services, education and advocacy--specifically targeting the issues of health and hunger. CCC tackles these problems on multiple fronts by addressing the immediate and beyond-emergency needs of the underserved, while seeking long-term policy solutions that will benefit both clients and the greater community. As a part of "the living Cathedral," CCC operates, coordinates and expands its direct service programs and advocacy campaigns based on the ever-unfolding, diverse needs of the community, while fostering self-sufficiency and cultivating social justice through outreach and education. For more information on Cathedral Community Cares services, please call (212) 316-7583. (Taken from https://www.stjohndivine.org/education/community/)';

export default () => {
  let name = '';

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] === variable) {
        return pair[1];
      }
    }
    return false;
  }

  const variables = [];

  const [currentSoupKitchens, setCurrentSoupKitchens] = useState({});

  const [currentSoupKitchen, setCurrentSoupKitchen] = useState({
    id: '',
    name: '',
    cumulative_rate: '',
    picture_url: '',
    location: '',
  });

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

    const getSoupKitchen = async () => {
      Axios.get('api/soup_kitchen/:get_soup_kitchen', {
        params: { name: name },
      })
        .then((resp) => {
          console.log(resp);
          console.log(resp.data);

          setCurrentSoupKitchen({
            id: resp.data.id,
            name: resp.data.name,
            cumulative_rate: resp.data.cumulative_rate,
            picture_url: resp.data.picture_url,
            location: resp.data.location,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getSoupKitchens();
    getSoupKitchen();
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
    <div onload={(name = getQueryVariable('name'))}>
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
        <Form style={style.searchbar}>
          <Form.Field>
            <Input
              id='search'
              type='search'
              name='search'
              value={currentSearch.search}
              size='massive'
              onChange={updateCurrentSearch}
              onClick={console.log(name)}
              icon='search'
              placeholder='Search up soupkitchens alphabetically!'
            />
          </Form.Field>
          {searchMe()}
        </Form>

        <Card style={style.card} centered>
          <Image
            size='small'
            src='https://www.masonrymagazine.com/wp-content/uploads/2018/01/MCAA_CATHEDRAL_OF_ST_JOHN_THE-DEVINE_015.jpg'
            wrapped
            ui={false}
          />
          <Card.Content
            style={style.cardTitle}
            header={`${currentSoupKitchen.name}`}
          />
          <Card.Description style={style.cardLocation}>
            {currentSoupKitchen.cumulative_rate}/5 Stars
          </Card.Description>
          <Card.Meta style={style.cardLocation}>
            {currentSoupKitchen.location}
          </Card.Meta>
          <Card.Content description={description} />

          <div style={style.review}></div>
          <Card.Content style={style.reviewTitle}>
            4/5 Stars - Fantastic community
          </Card.Content>
          <Card.Description style={style.reviewContent}>
            I had the greatest meal of my life here
          </Card.Description>

          <div style={style.review}></div>
          <Card.Content style={style.reviewTitle}>
            2/5 Stars - I've been to better
          </Card.Content>
          <Card.Description style={style.reviewContent}>Meh.</Card.Description>

          <div style={style.review}></div>
          <Card.Content style={style.reviewTitle}>
            4/5 Stars - Nice people!
          </Card.Content>
          <Card.Description style={style.reviewContent}>
            Very nice people.
          </Card.Description>

          <div style={style.review}></div>
          <Card.Content style={style.reviewTitle}>
            3/5 Stars - Fantastic sisters
          </Card.Content>
          <Card.Description style={style.reviewContent}>
            Gave me good food.
          </Card.Description>
        </Card>
        <a href={`/review?id=${currentSoupKitchen.id}`}>
          <Button>Submit a Review</Button>
        </a>
      </Container>
    </div>
  );
};

// import Reviews from '../../components/Review/Review';

// export default () => {
//   const reviews = [];

//   // props.reviews.forEach((review) => {
//   //   rows.push(
//   //     <ReviewList review={reviews} />
//   //   );
//   // });

//   return <div>{reviews}</div>;
// };
