const ActionType = {
  CITY_CHANGE: 'main/cityChange',
  SET_OFFERS: 'main/setOffers',
};

const ActionCreator = {
  cityChange: (city) => ({
    type: ActionType.CITY_CHANGE,
    payload: city,
  }),
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers,
  }),
};

export {ActionType, ActionCreator};
