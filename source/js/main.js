import 'svgxuse';
import accordion from './modules/accordion';
import form from './modules/form';
import noFocus from './modules/common';

window.addEventListener('DOMContentLoaded', () => {
  noFocus();
  accordion('.gift', '.gift__btn', '.gift__content', 'gift__content--active', 'gift__btn--active');
  form();
});
