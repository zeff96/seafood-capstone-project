import postComments from './setComments';
import getComments from './getComments';

const renderFoodComments = (commets) => {
  const ulComments = document.getElementById('comments');
  ulComments.innerHTML = '';
  commets.forEach((element) => {
    ulComments.innerHTML += `<li>${element.creation_date} ${element.username}: 
    ${element.comment}</li>`;
  });
};

const loadComments = (itemId) => {
  getComments(itemId).then((data) => {
    renderFoodComments(data);
  });
};

const renderComments = (data, itemId) => {
  const renderLocation = document.getElementById('food-container');
  renderLocation.classList.remove('disable');
  renderLocation.innerHTML = `
  <div class="food">
    <div class="food-img">
      <span id="close-comment">X</i></span>
      <img src=${data.meals[0].strMealThumb} alt="">
      <h2>${data.meals[0].strMeal}</h2>
    </div>
      <ul class="food-info">
        <li>
          <ul>
            <li>Category: ${data.meals[0].strCategory}</li>
            <li>Area: ${data.meals[0].strArea}</li>
          </ul>
        </li>
        <li>
          <ul>
            <li><a href=${data.meals[0].strYoutube}>How To Make</a></li>
            <li>Power</li>
          </ul>
        </li>
      </ul>
    <div class="food-comments">
      <div class="comments-container">
        <h3>Comments(0)</h3>
        <ul id="comments">
        </ul>
      </div>
      <form class="comments-form" id="comments-form" action="#" method="post">
      <h3>Add a Comment</h3>
        <label for="name"></label>
        <input type="text" name="name" id="name" placeholder="Your Name">
        <label for="insights"></label>
        <textarea name="insights" id="insights" cols="30" rows="10" placeholder="Your Insights"></textarea>
        <button type="submit">Comment</button>
      </form>
    </div>
  </div>`;

  const form = document.getElementById('comments-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    postComments(itemId, form.name.value, form.insights.value).then(() => {
      loadComments(itemId);
    });
  });

  const closeBtn = document.getElementById('close-comment');
  closeBtn.addEventListener('click', () => {
    renderLocation.classList.add('disable');
  });
};

export { renderComments, renderFoodComments, loadComments };