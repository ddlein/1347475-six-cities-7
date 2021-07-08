import React from 'react';
import PropTypes from 'prop-types';

function CitiesList(props) {
  const {cities, city, onCityChange} = props;
  const classActive = 'tabs__item--active';

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((cityElement) => (
          <li className="locations__item" key={cityElement}>
            <a className={`locations__item-link tabs__item ${city === cityElement ? (
              classActive)
              : ''
            }`} href="#" onClick={(evt) => {
              evt.preventDefault();
              onCityChange(cityElement);
            }}
            >
              <span>{cityElement}</span>
            </a>
          </li>
        ))}

      </ul>
    </section>
  );
}

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
  onCityChange: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

export default CitiesList;
