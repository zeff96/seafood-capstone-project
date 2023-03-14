import { getData,getLikes,postLikes } from "./get";
const list = document.querySelector('.cards-container');
const counter = document.getElementById('counter');

const sumCount = async () => {
  const data = await getData();
  const results = data.meals.splice(0, 12);
  counter.innerText = results.length;
}
sumCount();

const render = async () => {
  list.innerHTML = '';
  const results = await getData();
  const cards = results.meals.splice(0,12);
  cards.forEach((card, index) => {
    const card_item = `<div class="card" id="${card.idMeal}">
      <img class="thumbnail" src="${card.strMealThumb}" alt="thumbnail-icon">
      <div class="container">
        <p class="title">${card.strMeal}</p>
        <div class="likes-container">
          <i class="fa-regular fa-heart heart" id="heart_${card.idMeal}"></i>
          <span id="likes_${card.idMeal}">Likes 0</span>
        </div>
      </div>
      <button class="btn" type="button" id="comment_${card.idMeal}">Comments</button>
      <button class="btn" type="button" id="reservation_${card.idMeal}">Reversations</button>
    `
    list.insertAdjacentHTML('beforeend', card_item);

    const mainDiv = document.getElementById(card.idMeal);
    mainDiv.addEventListener('click', (e) => {
      if(e.target.id === "heart_"+card.idMeal){
        // console.log(e.target.id);
        postLikes(e.target.id).then(() => {renderLikes()});
      }
    });
  });
  renderLikes()
}

const renderLikes = () => {
  getLikes().then((data) => {
    data.forEach((element) => {
      const likes = document.getElementById("likes_"+element.item_id.replace('heart_', ''));
      if(likes){
        likes.textContent = `Likes ${element.likes}`;
      }
    });
    
  });
}

window.onload = render;