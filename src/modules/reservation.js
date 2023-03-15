import { getSeaFoodItem, reservationsUrl } from './getApi';
import reservationCounter from './reserveCounter';
import addReservation from './addReservation';

const reservation = async (idMeal) => {
  try {
    const reservation = document.createElement('div');
    reservation.id = 'popup';
    reservation.classList = 'popup';
    document.body.appendChild(reservation);

    // popup window
    const popupWindow = document.createElement('div');
    popupWindow.classList = 'window';
    reservation.appendChild(popupWindow);

    const popupHead = document.createElement('div');
    popupHead.classList = 'popup-head';
    popupHead.id = 'popup-head';

    popupWindow.appendChild(popupHead);

    const xButton = document.createElement('p');
    xButton.id = 'close';
    xButton.classList = 'close';
    xButton.innerHTML = 'X';
    popupHead.appendChild(xButton);

    const imagePopup = document.createElement('img');
    const meal = await fetch(getSeaFoodItem + idMeal);
    const { meals } = await meal.json();
    const data = meals.find((card) => card.idMeal === idMeal);
    const {
      strMeal, strCategory, strArea, strMealThumb, strYoutube,
    } = data;
    imagePopup.src = strMealThumb;
    imagePopup.classList = 'image-popup';
    imagePopup.id = 'image-popup';
    popupWindow.appendChild(imagePopup);

    const popupHeading = document.createElement('h2');
    popupHeading.id = 'title';
    popupHeading.classList = 'title';
    popupHeading.innerHTML = strMeal;
    popupWindow.appendChild(popupHeading);

    const detailsPopup = document.createElement('div');
    detailsPopup.classList = 'details';
    detailsPopup.id = 'details';
    detailsPopup.innerHTML = ` 
          <p class="meal" id="meal">Meal: ${strMeal}</p>
          <p class="meal" id="meal">Category: ${strCategory}</p>
          <p class="meal" id="meal">Area: ${strArea}</p>
          <p class="meal" id="meal"><a href="${strYoutube}">How to make it!</a></p>
          `;
    const reserving = await fetch(`${reservationsUrl}?item_id=${idMeal}`);
    const reserve = await reserving.json();

    const reservationsHeader = document.createElement('h3');
    // reservationsHeader.innerText = 'Reservations (0)';
    reservationsHeader.classList = 'reservation';
    const wrapper = document.createElement('div');
    wrapper.classList = 'reserve-counter';

    const reservationHeader = document.createElement('h3');
    reservationHeader.textContent = 'Add Reservation';
    reservationHeader.classList = 'header-reservation';

    const reserveForm = document.createElement('form');
    reserveForm.classList = 'form';

    const usernameInput = document.createElement('input');
    usernameInput.classList = 'name';
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Your name';

    const dateStart = document.createElement('input');
    dateStart.classList = 'name';
    dateStart.type = 'date';
    dateStart.placeholder = 'start date';

    const dateEnd = document.createElement('input');
    dateEnd.classList = 'name';
    dateEnd.type = 'date';
    dateEnd.placeholder = 'start end';

    const ReserveButton = document.createElement('button');
    ReserveButton.className = 'btn btn-top';
    ReserveButton.innerText = 'Reserve';
    ReserveButton.addEventListener('click', (e) => {
      e.preventDefault();
      addReservation(
        idMeal,
        usernameInput,
        dateStart,
        dateEnd,
        popupWindow,
        reservationsHeader,
        reservationHeader,
        ReserveButton,
        reserveForm,
        wrapper,
      );
    });

    wrapper.appendChild(reservationsHeader);

    if (reserving.status === 400) {
      reserveForm.append(usernameInput, dateStart, dateEnd, ReserveButton);
      popupWindow.append(detailsPopup, wrapper, reservationHeader, reserveForm);
      reservationCounter();
    }

    if (xButton) {
      xButton.addEventListener('click', () => {
        const bodyEl = document.querySelector('body');
        reservation.remove();
        bodyEl.classList.remove('no-scroll');
      });
    }

    reserve.map((data) => {
      const { username, date_start: dateStart, date_end: dateEnd } = data;
      const reservationsInput = document.createElement('p');
      reservationsInput.classList = 'reservations';

      reservationsInput.innerText = `${dateStart} to ${dateEnd} by ${username}`;
      wrapper.appendChild(reservationsInput);
      return data;
    });

    popupWindow.appendChild(detailsPopup);
    popupWindow.appendChild(wrapper);
    popupWindow.appendChild(reservationHeader);
    reserveForm.appendChild(usernameInput);
    reserveForm.appendChild(dateStart);
    reserveForm.appendChild(dateEnd);
    reserveForm.appendChild(ReserveButton);
    popupWindow.appendChild(reserveForm);
    reservationCounter();
  } catch (error) {
    console.error(error.message);
  }
};

export default reservation;
