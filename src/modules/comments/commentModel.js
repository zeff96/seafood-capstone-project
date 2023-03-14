import getCommentFoodItem from "./commentSFood";
import {renderComments, renderFoodComments} from "./renderComments";
import getComments from "./getComments.js";

const commentsModel = (itemId) => {
getCommentFoodItem(itemId).then((data) => {
  // console.log(data);
  renderComments(data,itemId);
  loadComments(itemId);
  
});
};

const loadComments = (itemId) => {
  getComments(itemId).then(data => {
    // console.log(data);
    renderFoodComments(data);
  });
};

export {commentsModel, loadComments};