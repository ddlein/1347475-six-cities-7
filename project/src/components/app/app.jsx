import React from 'react';
import PropTypes from 'prop-types';
import MainPageScreen from '../main-page-screen/main-page-screen';
import {AppRoute} from '../../const';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AuthScreen from '../auth-screen/auth-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function App(props) {
  const {promoCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPageScreen promoCount={promoCount}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen/>
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomScreen/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promoCount: PropTypes.number.isRequired,
};

export default App;
