import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Promo from '../promo/promo';
import MapCityMain from '../map-city-main/map-city-main';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import CitiesList from '../cities-list/cities-list';
import Sorting from '../sorting/sorting';
import {AppRoute, AuthorizationStatus, SortOption} from '../../const';
import {logout} from '../../store/api-actions';
import {Link} from 'react-router-dom';

function MainPageScreen(props) {
  const {POPULAR, LOW_TO_HIGH, HIGH_TO_LOW, TOP} = SortOption;

  const [selectedOfferId, setSelectedId] = useState(null);
  const [activeSort, setActiveSort] = useState(POPULAR);

  const {offers, onCityChange, city, authorizationStatus, setLogout, user} = props;
  const onOfferIdHover = (offerId) => {
    setSelectedId(offerId);
  };

  const onChange = (title) => {
    setActiveSort(title);
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  let sortedOffers = [...filteredOffers];

  switch (activeSort) {
    case HIGH_TO_LOW:
      sortedOffers = filteredOffers.sort((a, b) => b.price - a.price);
      break;
    case LOW_TO_HIGH:
      sortedOffers = filteredOffers.sort((a, b) => a.price - b.price);
      break;
    case POPULAR:
      sortedOffers = filteredOffers;
      break;
    case TOP:
      sortedOffers = filteredOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }


  const promos = sortedOffers.map((offer) => (
    <Promo offer={offer} key={offer.id} onOfferIdHover={onOfferIdHover} classCard="cities__place-card"
      classImage="cities__image-wrapper"
    />));

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              {(authorizationStatus === AuthorizationStatus.AUTH) ? (
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{user.email}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link onClick={setLogout} className="header__nav-link" to="/"                    >
                      <span className="header__login">Sign out</span>
                    </Link>
                  </li>
                </ul>) : (
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LOGIN}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>)}
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList city={city} onCityChange={onCityChange}/>

        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {city}</b>

              <Sorting activeSort={activeSort} onChange={onChange}/>

              <div className="cities__places-list places__list tabs__content">
                {promos}
              </div>
            </section>
            <div className="cities__right-section">
              <MapCityMain selectCity={city} offers={sortedOffers} selectedOfferId={selectedOfferId}
                classMap="cities__map"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  city: state.city,
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.cityChange(city));
  },
  setLogout() {
    dispatch(logout());
  },
});

MainPageScreen.propTypes = {
  onCityChange: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  setLogout: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};


export {MainPageScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainPageScreen);
