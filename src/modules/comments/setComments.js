import { commentsUrl } from '../getApi';

const postComments = async (itemId, username, comment) => {
  await fetch(commentsUrl, {
    method: 'POST',
    body: JSON.stringify(
      {
        item_id: itemId,
        username,
        comment,
      },
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
export default postComments;
