import { commentsUrl } from "../getApi.js";
import getComments from "./getComments.js";
import { loadComments } from "./commentModel.js";

const postComments = async (item_id, username, comment) => {
  const response = await fetch(commentsUrl,{
    method: 'POST',
    body: JSON.stringify(
      {
        item_id: item_id,
        username: username,
        comment: comment
      }
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
const setComments = (data, itemId) => {
  postComments(itemId, data.name.value, data.insights.value).then(()=>{
    loadComments(itemId);
  });
};
export default setComments;