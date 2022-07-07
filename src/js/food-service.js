import localStorApi from './localstorage';
import menu from './menu.json';
import { createMarkupMenu } from '../templates/createMarkupMenu';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_STORAGE_KEY = 'theme';

const listRef = document.querySelector('.gallery');
const themeToggleRef = document.querySelector('.theme-switch__toggle');

const markup = createMarkupMenu(menu);
listRef.insertAdjacentHTML('beforeend', markup.join(''));

initPage();

themeToggleRef.addEventListener('input', event => {
  const { checked } = event.target;
  document.body.className = checked ? Theme.DARK : Theme.LIGHT;
  localStorApi.save(THEME_STORAGE_KEY, checked);
});

function initPage() {
  const savedCheck = localStorApi.load(THEME_STORAGE_KEY);
  document.body.className = savedCheck ? Theme.DARK : Theme.LIGHT;
  themeToggleRef.checked = savedCheck ? true : false;
}

// themeToggleRef.addEventListener('input', event => {
//   const { checked } = event.target;
//   const currentTheme = checked ? Theme.DARK : Theme.LIGHT;
//   document.body.className = currentTheme;
//   localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
// });

// function initPage() {
//   const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

//   if (savedTheme) {
//     document.body.className = savedTheme;
//   }

//   // themeToggleRef.checked = savedTheme === Theme.LIGHT ? false : true;
//   themeToggleRef.checked = savedTheme === Theme.DARK ? true : false;
// }

{
  /* <li class="menu__item">
    <article class="card">

        <img src="{{image}}" alt="{{name}}" class="card__image" />

        <div class="card__content">
            <h2 class="card__name">{{name}}</h2>
            <p class="card__price">
                <i class="material-icons"> monetization_on </i>
                {{price}} кредитов
            </p>

            <p class="card__descr">
                {{description}}
            </p>

            <ul class="tag-list">

                <li class="tag-list__item">{{}}</li>

            </ul>
        </div>

        <button class="card__button button">
            <i class="material-icons button__icon"> shopping_cart </i>
            В корзину
        </button>

    </article>
</li> */
}
