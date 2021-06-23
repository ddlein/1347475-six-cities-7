import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers, comments} from './mocks/offers';

// const Settings = {
//   PROMO_COUNT: 5,
// };

ReactDOM.render(
  <React.StrictMode>
    <App
      // promoCount={Settings.PROMO_COUNT}
      offers={offers}
      comments={comments}
    />
  </React.StrictMode>,
  document.getElementById('root'));

// export {Settings};
