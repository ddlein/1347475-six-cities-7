export const fromApi = (apiObj) => ({
  ...apiObj,
  previewImage: apiObj.preview_image,
  isFavorite: apiObj.is_favorite,
  isPremium: apiObj.is_premium,
  maxAdults: apiObj.max_adults,
  host: {
    ...apiObj.host,
    isPro: apiObj.host.is_pro,
    avatarUrl: apiObj.host.avatar_url,
  },
});
