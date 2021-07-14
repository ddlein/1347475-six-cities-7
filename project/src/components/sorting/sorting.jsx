import React, {useState} from 'react';
import {SortOption} from '../../const';
import PropTypes from 'prop-types';


function Sorting(props) {
  const {activeSort, onChange} = props;
  const [isOpened, setIsOpened] = useState('');


  return (
    <form className="places__sorting" action="#" method="get" onClick={() => {
      setIsOpened(isOpened === '' ? 'places__options--opened' : '');
    }}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened}`}>
        {Object.entries(SortOption).map(([, title]) => (
          <li className={`places__option  ${activeSort === title ? 'places__option--active' : ''}`} key={title}
            tabIndex="0" onClick={() => onChange(title)}
          >{title}
          </li>))}
      </ul>
    </form>
  );
}

Sorting.propTypes = {
  activeSort: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sorting;
