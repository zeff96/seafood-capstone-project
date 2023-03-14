import { getSeaFoodItem } from '../getApi';

const getCommentFoodItem = async (ItemId) => {
  const response = await fetch(getSeaFoodItem + ItemId);
  const data = await response.json();
  return data;
};

export default getCommentFoodItem;