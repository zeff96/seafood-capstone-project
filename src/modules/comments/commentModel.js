import getCommentFoodItem from './commentSFood';
import { renderComments, renderFoodComments } from './renderComments';
import getComments from './getComments';

const loadComments = (itemId) => {
  getComments(itemId).then((data) => {
    renderFoodComments(data);
  });
};

const commentsModel = (itemId) => {
  getCommentFoodItem(itemId).then((data) => {
    renderComments(data, itemId);
    loadComments(itemId);
  });
};

export { commentsModel, loadComments };