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


const SortOption = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP: 'Top rated first',
};


export {AppRoute, OfferType, OfferTypeToText, CITIES_LIST, CITY, SortOption};
