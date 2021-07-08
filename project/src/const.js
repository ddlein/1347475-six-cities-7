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

const CITIES_NAME = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export {AppRoute, CITY, OfferType, OfferTypeToText, CITIES_NAME};
