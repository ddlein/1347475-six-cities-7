import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  PROMO_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promoCount={Settings.PROMO_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));

export {Settings};
