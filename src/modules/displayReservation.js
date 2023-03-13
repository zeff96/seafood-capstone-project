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
  wrapper
) => {
  try {
    const reserving = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rnj8XMRPiQ7GI8jXwBi5/reservations?item_id=${idMeal}`
    );
    const reserve = await reserving.json();

    reservationsHeader.innerText = `Reservations (${reserve.length})`;
    reservationsHeader.classList = 'comment';
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
      const { username, date_start, date_end } = data;
      const reservationsInput = document.createElement('p');
      reservationsInput.classList = 'comments';

      reservationsInput.innerText = `${date_start} to ${date_end} by ${username}`;
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
