import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import PropTypes from 'prop-types';

function ReviewsList(props) {
  const {comments} = props;
  // console.log(comments);
  return (
    <ul className="reviews__list">
      <ReviewsItem comments={comments}/>
    </ul>
  );
}

ReviewsList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default ReviewsList;
