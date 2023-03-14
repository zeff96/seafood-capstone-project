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
    const card_item = `<div class="card" id="${index}">
      <img class="thumbnail" src="${card.strMealThumb}" alt="thumbnail-icon">
      <div class="container">
        <p class="title">${card.strMeal}</p>
        <div class="likes-container">
          <i class="fa-regular fa-heart heart" data-id="${index}"></i>
          <span>Likes</span>
        </div>
      </div>
      <button class="btn" type="button">Comments</button>
      <button class="btn" type="button">Reversations</button>
    `
    list.insertAdjacentHTML('beforeend', card_item);

    const btnEl = document.querySelectorAll('.likes-container');
    btnEl.forEach((btn) => btn.addEventListener('click', (e) => {
      const target = e.target;
      if (target.className !== 'heart') return;

      console.log(target);
    }))
  });
}

window.onload = render;