const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};


const CITY = {
  title: 'Амстердам',
  latitude: 52.38333,
  longitude: 4.9,
  zoom: 12,
};

const CITIES_LIST = [
  {
    title: 'Paris',
    latitude: 48.856663,
    longitude: 2.351,
    zoom: 12,
  },
  {
    title: 'Cologne',
    latitude: 50.930779,
    longitude: 6.938399,
    zoom: 12,
  },
  {
    title: 'Brussels',
    latitude: 50.854283,
    longitude: 4.352131,
    zoom: 12,
  },
  {
    title: 'Amsterdam',
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 12,
  },
  {
    title: 'Hamburg',
    latitude: 53.550688,
    longitude: 9.992895,
    zoom: 12,
  },
  {
    title: 'Dusseldorf',
    latitude: 51.230569,
    longitude: 6.787428,
    zoom: 12,
  },
];

const OfferType = {
  ROOM: 'room',
  HOUSE: 'house',
  HOTEL: 'hotel',
  APARTMENT: 'apartment',
};

const OfferTypeToText = {
  [OfferType.ROOM]: 'Private room',
  [OfferType.HOUSE]: 'House',
  [OfferType.APARTMENT]: 'Apartment',
  [OfferType.HOTEL]: 'Hotel',
};

const CITIES = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  'Cologne': {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  'Brussels': {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  'Amsterdam': {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  'Hamburg': {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  'Dusseldorf': {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
};


const SortOption = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP: 'Top rated first',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
};


export {AppRoute, OfferType, OfferTypeToText, CITIES_LIST, CITY, SortOption, AuthorizationStatus,APIRoute, CITIES};
