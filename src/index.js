import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import logo from './Asset/logo.png';
import './index.css';
import './modules/API/render';

const logoIcon = document.querySelectorAll('.logo-icon');
logoIcon.forEach((icon) => {
  icon.src = logo;
});
