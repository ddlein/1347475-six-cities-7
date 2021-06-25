import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import mainPageScreenProp from '../main-page-screen/main-page-screen.prop';
import {AppRoute} from '../../const';

function Promo(props) {
  const {offer, updateState, onOfferItemHover} = props;
  const {price, title, type, previewImage, id} = offer;

  const offerRef = useRef(null);

  const onMouseOverHandler = ((evt) => {
    onOfferItemHover(id);
    updateState(id);
  });


  return (
    <article className="cities__place-card place-card" ref={offerRef} onMouseOver={onMouseOverHandler}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.ROOM}>
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
  updateState: PropTypes.func.isRequired,
  onOfferItemHover: PropTypes.func.isRequired,
};

export default Promo;
