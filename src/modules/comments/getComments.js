import { commentsUrl } from "../getApi.js";

const getComments = async (itemId) => {
  const response = await fetch(commentsUrl+"?item_id="+itemId);
  const data = await response.json();
  return data;
};

export default getComments;