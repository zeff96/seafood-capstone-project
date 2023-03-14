import { commentsUrl } from '../getApi';
import { loadComments } from './commentModel';

const postComments = async (item_id, username, comment) => {
  const response = await fetch(commentsUrl, {
    method: 'POST',
    body: JSON.stringify(
      {
        item_id,
        username,
        comment,
      },
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
const setComments = (data, itemId) => {
  postComments(itemId, data.name.value, data.insights.value).then(() => {
    loadComments(itemId);
  });
};
export default setComments;