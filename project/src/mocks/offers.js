const AVATAR_URL = 'https://i.pravatar.cc/128';


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

export {comments};
