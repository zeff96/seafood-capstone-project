import getCommentFoodItem from './commentSFood';
import { renderComments, loadComments } from './renderComments';

const commentsModel = (itemId) => {
  getCommentFoodItem(itemId).then((data) => {
    renderComments(data, itemId);
    loadComments(itemId);
  });
};

export default commentsModel;