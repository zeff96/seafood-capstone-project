const reservationCounter = () => {
  const pReserv = document.querySelectorAll('.reserve-counter p');
  const header = document.querySelector('.reservation');
  header.innerText = `Reservations(${pReserv.length})`;
};

export default reservationCounter;
