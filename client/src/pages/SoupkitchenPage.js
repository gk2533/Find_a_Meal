import React from 'react';
import Reviews from '../../components/Review/Review';


export default () => {

  const reviews = [];

  // props.reviews.forEach((review) => {
  //   rows.push(
  //     <ReviewList review={reviews} />
  //   );
  // });

  return (
      <div>
        {reviews}
      </div>
  );
};
