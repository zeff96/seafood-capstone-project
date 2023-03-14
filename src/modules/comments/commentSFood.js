import { getSeaFoodItem } from "../getApi.js"
const getCommentFoodItem = async (ItemId) => {
  const response = await fetch(getSeaFoodItem+ItemId);
  const data = await response.json();
  return data;
};

export default getCommentFoodItem;