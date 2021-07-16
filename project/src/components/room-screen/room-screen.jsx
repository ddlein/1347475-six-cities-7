import React, {useState} from 'react';
import Logo from '../logo/logo';
import SendReview from '../send-review/send-review';
import ReviewsList from '../reviews-list/reviews-list';
import PropTypes from 'prop-types';
import {OfferTypeToText, CITIES_LIST} from '../../const';
import Promo from '../promo/promo';
import MapCityMain from '../map-city-main/map-city-main';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';


function RoomScreen(props) {
  const [selectedOfferId, setSelectedId] = useState(null);

  const {comments, offers, id, city} = props;

  const offer = offers.find((offerElement) => offerElement.id === id);
  const offersNearby = offers.filter((offerElement) => offerElement.id !== id);
  const images = offer.images;
  const goods = offer.goods;

  const onOfferIdHover = (offerId) => {
    setSelectedId(offerId);
  };

  const promos = offersNearby.map((offerElement) =>
    (<Promo offer={offerElement} key={offerElement.id} onOfferIdHover={onOfferIdHover} classCard="near-places__card" classImage="near-places__image-wrapper"/>),
  );

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.description}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {OfferTypeToText[offer.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro ? (
                    <span className="property__user-status">
                      Pro
                    </span>)
                    : ''}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where
                    the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ReviewsList comments={comments}/>
                <SendReview/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <MapCityMain selectCity={city} city={CITIES_LIST} offers={offersNearby} selectedOfferId={selectedOfferId}
              classMap="property__map"
            />
          </section>


        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {promos}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

RoomScreen.propTypes = {
  comments: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,

};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.cityChange(city));
  },
});

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
