import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

function App(props) {
  const {promoCount} = props;

  return (
    <MainPage promoCount={promoCount}/>
  );
}

App.propTypes = {
  promoCount: PropTypes.number.isRequired,
};

export default App;
