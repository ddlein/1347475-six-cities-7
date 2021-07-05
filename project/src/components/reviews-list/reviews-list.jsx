import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import PropTypes from 'prop-types';

function ReviewsList(props) {
  const {comments} = props;
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewsItem comment={comment} key={comment.id}/>
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default ReviewsList;
