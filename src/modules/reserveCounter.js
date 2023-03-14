const reservationCounter = () => {
  const pReserv = document.querySelectorAll('.reserve-counter p');
  const header = document.querySelector('.reservation');
  header.textContent = 'Reservations(' + pReserv.length + ')';
};

export default reservationCounter;
