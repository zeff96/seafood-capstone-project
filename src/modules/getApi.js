const APPID = 'rnj8XMRPiQ7GI8jXwBi5';
const commentsUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APPID}/comments/`;
const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APPID}/likes/`;
const reservationsUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APPID}/reservations/`;
const getSeaFoodUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const getSeaFoodItem = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export {
  commentsUrl, likesUrl, reservationsUrl, getSeaFoodUrl, getSeaFoodItem,
};
