import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Promo from '../promo/promo';
import MapCityMain from '../map-city-main/map-city-main';
import {CITY, CITIES_NAME} from '../../const';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import CitiesList from '../cities-list/cities-list';

function MainPageScreen(props) {
  const [selectedOfferId, setSelectedId] = useState(null);
  const {offers, onCityChange, city} = props;
  const onOfferIdHover = (offerId) => {
    setSelectedId(offerId);
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === city);

  const promos = filteredOffers.map((offer) => (
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={CITIES_NAME} city={city} onCityChange={onCityChange}/>

        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--closed">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {promos}
              </div>
            </section>
            <div className="cities__right-section">
              <MapCityMain city={CITY} offers={filteredOffers} selectedOfferId={selectedOfferId}
                classMap="cities__map"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPageScreen.propTypes =
  {
    offers: PropTypes.array.isRequired,
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

MainPageScreen.propTypes = {
  onCityChange: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};


export {MainPageScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainPageScreen);
