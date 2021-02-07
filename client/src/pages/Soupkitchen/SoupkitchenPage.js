import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Form, Input, Card, Image } from 'semantic-ui-react';
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
  'The Holy Spirit Soupkitchen has been open since 1374, and has served over 1 billion people. God bless you.';

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

        <Card style={style.card} centered>
          <Image
            size='small'
            src='https://www.masonrymagazine.com/wp-content/uploads/2018/01/MCAA_CATHEDRAL_OF_ST_JOHN_THE-DEVINE_015.jpg'
            wrapped
            ui={false}
          />
          <Card.Content
            style={style.cardTitle}
            header='Holy Spirit Soupkitchen'
          />
          <Card.Description style={style.cardLocation}>
            3.25/5 Stars
          </Card.Description>
          <Card.Meta style={style.cardLocation}>Brooklyn, New York</Card.Meta>
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
            <Card.Description style={style.reviewContent}>
              Meh.
            </Card.Description>


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
