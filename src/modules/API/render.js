import { getMeals,getLikes,postLikes } from "./get";
import showCounter from "./counter";
const list = document.querySelector('.cards-container');

const render = async () => {
  list.innerHTML = '';
  const results = await getMeals();
  const cards = results.meals.splice(0,12);
  cards.forEach((card) => {
    const card_item = `<div class="card" id="${card.idMeal}">
      <img class="thumbnail" src="${card.strMealThumb}" alt="thumbnail-icon">
      <div class="container">
        <p class="title">${card.strMeal}</p>
        <div class="likes-container">
          <button class="heart-container" type="button" data-id="${card.idMeal}">
            <i class="fa-regular fa-heart heart"></i>
          </button>
          <span>Likes</span>
        </div>
      </div>
      <button class="btn" type="button">Comments</button>
      <button class="btn" type="button">Reversations</button>
    `
    list.insertAdjacentHTML('beforeend', card_item);

    showCounter();
  });
}

window.onload = render;