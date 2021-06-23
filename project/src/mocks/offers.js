const AVATAR_URL = 'https://i.pravatar.cc/128';

const offers = [
  {
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/9.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/1.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/17.jpg',
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/20.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/13.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
    ],
    title: 'Perfectly located Castro',
    isFavorite: true,
    isPremium: false,
    rating: 2.8,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 104,
    goods: [
      'Breakfast',
      'Laptop friendly workspace',
      'Coffee machine',
      'Towels',
      'Washer',
      'Dishwasher',
      'Baby seat',
      'Air conditioning',
      'Fridge',
    ],
    host: {
      id: 1,
      name: 'Angelina',
      isPro: true,
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 50.949361,
      longitude: 6.976974,
      zoom: 16,
    },
    id: 1,
  },
  {
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/3.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/5.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/4.jpg',
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/13.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/1.jpg',
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/20.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
    ],
    title: 'Beautiful & luxurious apartment at great location',
    isFavorite: false,
    isPremium: true,
    rating: 2.2,
    type: 'house',
    bedrooms: 3,
    maxAdults: 7,
    price: 212,
    goods: [
      'Air conditioning',
      'Laptop friendly workspace',
      'Washer',
      'Towels',
      'Baby seat',
      'Breakfast',
    ],
    host: {
      id: 2,
      name: 'Jack',
      isPro: true,
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    },
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 52.37854,
      longitude: 4.894976,
      zoom: 16,
    },
    id: 2,
  },
  {
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/4.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/12.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/13.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
      'https://7.react.pages.academy/static/hotel/14.jpg',
      'https://7.react.pages.academy/static/hotel/7.jpg',
      'https://7.react.pages.academy/static/hotel/19.jpg',
      'https://7.react.pages.academy/static/hotel/18.jpg',
      'https://7.react.pages.academy/static/hotel/20.jpg',
      'https://7.react.pages.academy/static/hotel/8.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
    ],
    title: 'Waterfront with extraordinary view',
    isFavorite: true,
    isPremium: false,
    rating: 2.2,
    type: 'hotel',
    bedrooms: 3,
    maxAdults: 6,
    price: 208,
    goods: [
      'Breakfast',
      'Air conditioning',
      'Baby seat',
      'Washing machine',
      'Coffee machine',
      'Washer',
      'Fridge',
      'Dishwasher',
      'Laptop friendly workspace',
      'Towels',
    ],
    host: {
      id: 3,
      name: 'Kolya',
      isPro: true,
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    },
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    location: {
      latitude: 51.236402000000005,
      longitude: 6.784314,
      zoom: 16,
    },
    id: 3,
  },
  {
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: 'https://7.react.pages.academy/static/hotel/20.jpg',
    images: [
      'https://7.react.pages.academy/static/hotel/20.jpg',
      'https://7.react.pages.academy/static/hotel/9.jpg',
      'https://7.react.pages.academy/static/hotel/11.jpg',
      'https://7.react.pages.academy/static/hotel/13.jpg',
      'https://7.react.pages.academy/static/hotel/16.jpg',
      'https://7.react.pages.academy/static/hotel/6.jpg',
      'https://7.react.pages.academy/static/hotel/19.jpg',
      'https://7.react.pages.academy/static/hotel/2.jpg',
      'https://7.react.pages.academy/static/hotel/14.jpg',
      'https://7.react.pages.academy/static/hotel/15.jpg',
      'https://7.react.pages.academy/static/hotel/5.jpg',
      'https://7.react.pages.academy/static/hotel/10.jpg',
      'https://7.react.pages.academy/static/hotel/3.jpg',
      'https://7.react.pages.academy/static/hotel/1.jpg',
    ],
    title: 'The Pondhouse - A Magical Place',
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    type: 'house',
    bedrooms: 3,
    maxAdults: 9,
    price: 627,
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Baby seat',
      'Air conditioning',
      'Breakfast',
    ],
    host: {
      id: 4,
      name: 'Vanya',
      isPro: true,
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    },
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    location: {
      latitude: 50.865556999999995,
      longitude: 4.371696999999999,
      zoom: 16,
    },
    id: 4,
  },
];

const comments = [
  {
    id: 1,
    user: {
      id: 11,
      isPro: false,
      name: 'Jack',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    },
    rating: 4,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2021-05-26T14:56:38.818Z',
  },
  {
    id: 2,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    },
    rating: 3,
    comment: 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    date: '2021-05-26T14:56:38.818Z',
  },
  {
    id: 3,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    },
    rating: 3,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2021-05-26T14:56:38.818Z',
  },
  {
    id: 4,
    user: {
      id: 12,
      isPro: true,
      name: 'Isaac',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    },
    rating: 3,
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2021-06-01T14:56:38.819Z',
  },
];

export {offers, comments};