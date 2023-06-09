import { getMeals, getLikes, postLikes } from './get';
import showCounter from './counter';
import commentsModel from '../comments/commentModel';
import reservation from '../reservation/reservation';

const list = document.querySelector('.cards-container');
const bodyEl = document.querySelector('body');

const renderLikes = () => {
  getLikes().then((data) => {
    data.forEach((element) => {
      const likes = document.getElementById(
        `likes_${element.item_id.replace('heart_', '')}`,
      );
      if (likes) {
        likes.textContent = `${element.likes} Likes`;
      }
    });
  });
};

const render = async () => {
  list.innerHTML = '';
  const results = await getMeals();
  const cards = results.meals.splice(1, 12);
  cards.forEach((card) => {
    const cardItem = `<div class="card" id="${card.idMeal}">
      <img class="thumbnail" src="${card.strMealThumb}" alt="thumbnail-icon">
      <div class="container">
        <p class="title">${card.strMeal}</p>
        <div class="likes-container">
          <i class="fa-regular fa-heart heart" id="heart_${card.idMeal}"></i>
          <span id="likes_${card.idMeal}">Likes</span>
        </div>
      </div>
      <button class="btn" type="button" id="comment_${card.idMeal}">Comments</button>
      <button class="btn" type="button" id="reservation_${card.idMeal}">Reversations</button>
    `;
    list.insertAdjacentHTML('beforeend', cardItem);

    showCounter();
    const mainDiv = document.getElementById(card.idMeal);
    mainDiv.addEventListener('click', (e) => {
      if (e.target.id === `heart_${card.idMeal}`) {
        e.target.style.color = 'black';
        postLikes(e.target.id).then(() => {
          e.target.style.color = 'red';
          renderLikes();
        }).catch(() => {
          e.target.style.color = 'red';
        });
      } else if (e.target.id === `comment_${card.idMeal}`) {
        commentsModel(card.idMeal);
        bodyEl.classList.add('no-scroll');
      } else if (e.target.id === `reservation_${card.idMeal}`) {
        reservation(card.idMeal);
        bodyEl.classList.add('no-scroll');
      }
    });
  });
  renderLikes();
};

window.onload = render;
