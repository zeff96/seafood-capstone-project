import { reservationsUrl } from '../getApi';

const displayReservations = async (
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
) => {
  try {
    const reserving = await fetch(`${reservationsUrl}?item_id=${idMeal}`);
    const reserve = await reserving.json();

    reservationsHeader.innerText = `Reservations (${reserve.length})`;
    reservationsHeader.classList = 'reservation';
    wrapper.appendChild(reservationsHeader);

    if (reserving.status === 400) {
      popupWindow.appendChild(reservationHeader);
      reserveForm.appendChild(usernameInput);
      reserveForm.appendChild(dateStart);
      reserveForm.appendChild(dateEnd);
      reserveForm.appendChild(ReserveButton);
      popupWindow.appendChild(reserveForm);
    }

    reserve.map((data) => {
      const { username, date_start: dateStart, date_end: dateEnd } = data;
      const reservationsInput = document.createElement('p');
      reservationsInput.classList = 'reservations';

      reservationsInput.innerText = `${dateStart} to ${dateEnd} by ${username}`;
      wrapper.appendChild(reservationsInput);
      return data;
    });

    popupWindow.appendChild(wrapper);
    popupWindow.appendChild(reservationHeader);
    reserveForm.appendChild(usernameInput);
    reserveForm.appendChild(dateStart);
    reserveForm.appendChild(dateEnd);
    reserveForm.appendChild(ReserveButton);
    popupWindow.appendChild(reserveForm);
  } catch (error) {
    console.error(error);
  }
};

export default displayReservations;
