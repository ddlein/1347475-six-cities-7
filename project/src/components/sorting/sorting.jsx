import React, {useState} from 'react';
import {SORT_LIST} from '../../const';
import PropTypes from 'prop-types';


function Sorting(props) {
  const {activeSort, clickHandlerSort, classActiveItem} = props;
  const [classActive, setClassActive] = useState('');
  return (
    <form className="places__sorting" action="#" method="get" onClick={() => {
      setClassActive(classActive === '' ? 'places__options--opened' : '');
    }}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${classActive}`} onClick={(evt) => {
        clickHandlerSort(evt);
      }}
      >
        {SORT_LIST.map((item) => (
          <li className={`places__option ${classActiveItem[item.id] ? 'places__option--active' : ''}`} key={item.id}
            tabIndex="0"
          >{item.title}
          </li>))}
      </ul>
    </form>
  );
}


Sorting.propTypes = {
  activeSort: PropTypes.string.isRequired,
  clickHandlerSort: PropTypes.func.isRequired,
  classActiveItem: PropTypes.array.isRequired,
};

export default Sorting;
