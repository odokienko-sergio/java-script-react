/* Завдання на урок:

1) Видалити всі рекламні блоки зі сторінки (права частина сайту)

2) Змінити жанр фільму, поміняти "комедія" на "драма"

3) Змінити заднє тло постера з фільмом на зображення "bg.jpg". Воно лежить у папці img.
Реалізувати лише за допомогою JS

4) Список фільмів на сторінці сформувати на підставі даних із цього JS файлу.
Сортувати за алфавітом

5) Додати нумерацію виведених фільмів */

'use strict';

const movieDB = {
    movies: [
        "LOGAN",
        "Justice league",
        "LA LA LAND",
        "Одержимость",
        "Scott Pilgrim vs..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'), /* за допомогою методу querySelectorAll ми отримуємо все img класса .promo__adv */
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'); /* метод querySelector використовуємо щоб отримати Перший елемент по даному селектору */

/*стрілочна функція для видалення кожного (item) елемента з масиву adv */
adv.forEach (item => {
    item.remove();
});
/* Безіменна функція в якій міститься лише один аргумент item який приходить із псевдомасиву adv
adv.forEach (function (item) {
    item.remove();
});
*/

genre.textContent = 'Фантастика'; /* змінюємо текст для genre у якому елемент з класом .promo__genre */
genre.style.margin = '40px 0 10px 0';

poster.style.backgroundImage = 'url("img/bg.jpg")'; /* міняємо стиль (беграунд) для poster у якому клас .promo__bg */

movieList.innerHTML = ""; /* метод innerHTML = "" очищуэ movieList */

movieDB.movies.sort(); /* Тут ми беремо масив (movies) об'єкта (movieDB) і сортуємо .sort() */

//console.log(poster.innerHTML);


/* формуємо html верстку
якщо нам потрібно перебрати елементи то ми беремо лічильник forEach з двома аргументами film-кожний елемент масиву та i-номер по порядку
*/
movieDB.movies.forEach((film, i) => {
    /* movieList.innerHTML = movieList.innerHTML + "якесь значення"  */
    movieList.innerHTML += `      
        <li class="promo__interactive-item">
            ${i + 1} ${film} 
            <div class="delete"></div>
        </li>
    `; /* ${} - Знак інтерпалації. Тепер це динамічний конетнт, ${i+1} - номер по порядку і ${film} - це кожен елемент */
});

/*
a = a + "aaa"; // два способи однакові
a += "aaa";   // скорочений варіант
*/


/*
adv.forEach(function (item) { 
    item.remove();
});
*/

/* мій приклад */
poster.style.backgroundImage = 'url("img/ot.jpg")';

const title = document.querySelector('.promo__title');
title.innerHTML = "";

const descr = poster.querySelector('.promo__descr');
descr.innerHTML = 'Player of the Month:';

const promoRatings = document.querySelector('.promo__ratings');
promoRatings.innerHTML = "<span>Marcus Rashford</span>";
promoRatings.style.margin = '0px 0 0 0';
/*****************/

