import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import mainPageScreenProp from '../main-page-screen/main-page-screen.prop';
import {AppRoute} from '../../const';
import {generatePath} from 'react-router';


function Promo(props) {
  const {offer, onOfferIdHover, classCard, classImage} = props;
  const {price, title, type, previewImage, id} = offer;


  const onMouseOverHandler = (() => {
    onOfferIdHover(id);
  });

  const onMouseLeaveHandler = (() => {
    onOfferIdHover(null);
  });


  return (
    <article className={`${classCard} place-card`} onMouseEnter={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      <div className={`${classImage} place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.ROOM, {id: id})}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Promo.propTypes = {
  offer: mainPageScreenProp,
  onOfferIdHover: PropTypes.func.isRequired,
  classCard: PropTypes.string.isRequired,
  classImage: PropTypes.string.isRequired,
};

export default Promo;
