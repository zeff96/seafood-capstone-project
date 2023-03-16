import { likesUrl } from '../getApi';

const getAllData = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const getJsonObj = await response.json();
  const result = getJsonObj.slice(0, 12);
  return result.length;
};

const getAllLikes = async () => {
  const res = await fetch(likesUrl);
  const getJsonObj = await res.json();

  return getJsonObj.length;
};

export { getAllData, getAllLikes };