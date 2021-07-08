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
  const {offers, comments} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPageScreen />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen/>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen offers={offers}/>
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomScreen comments={comments} offers={offers} id={1}/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
};

export default App;
