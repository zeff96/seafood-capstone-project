const counter = document.getElementById('counter');

const showCounter = (count) => {
  count = document.querySelectorAll('.card').length;
  counter.innerText = count;
}

export default showCounter