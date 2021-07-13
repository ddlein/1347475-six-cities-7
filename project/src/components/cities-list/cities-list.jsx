import React from 'react';
import PropTypes from 'prop-types';
import {CITIES_LIST} from '../../const';

function CitiesList(props) {
  const {city, onCityChange} = props;
  const classActive = 'tabs__item--active';

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES_LIST.map((cityElement) => (
          <li className="locations__item" key={cityElement.title}>
            <span style={{cursor: 'pointer'}} className={`locations__item-link tabs__item ${city === cityElement.title ? (
              classActive)
              : ''
            }`}  onClick={(evt) => {
              onCityChange(cityElement.title);
            }}
            >
              <span>{cityElement.title}</span>
            </span>
          </li>
        ))}

      </ul>
    </section>
  );
}

CitiesList.propTypes = {
  onCityChange: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

export default CitiesList;
