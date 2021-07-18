import {ActionCreator} from './action';
import {APIRoute, AppRoute} from '../const';
import {fromApi} from '../services/adapter';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.setOffers(data.map((da) => fromApi(da)))))
    .catch(() => {})
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.setUser(data));
    })
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.setUser(data));
      window.location.href = AppRoute.ROOT;
    })
    .catch(() => {})
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => {
      dispatch(ActionCreator.logout());
      window.location.href = AppRoute.ROOT;
    })
    .catch(() => {})
);

export {fetchOffersList, checkAuth, login, logout};

