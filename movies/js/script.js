/* Завдання на урок:

1) Реалізувати функціонал, що після заповнення форми та натискання кнопки "Підтвердити" -
новий фільм додається до списку. Сторінка не повинна перезавантажуватись.
Новий фільм повинен додаватися до movieDB.movies.
Для отримання доступу до значення input - звертаємось до нього як input.value;
P.S. Тут є кілька варіантів вирішення завдання, приймається будь-який, але робітник.

2) Якщо назва фільму більша, ніж 21 символ - обрізати його і додати три крапки

3) При кліку на кошик для сміття - елемент буде видалятися зі списку (складно)

4) Якщо у формі стоїть галочка "Зробити коханим" - у консоль вивести повідомлення:
"Додаємо улюблений фільм"

5) Фільми мають бути відсортовані за алфавітом */

'use strict';

// Візьміть свій код із попередньої практики

document.addEventListener('DOMContentLoaded', () => { /* callback функція () => { */

    const movieDB = {
        movies: [
            "LOGAN",
            "Justice league",
            "la la land",
            "Obsession",
            "Scott Pilgrim vs..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),

    addForm = document.querySelector('form.add'), /* для надійності пишемо form.add */
    addInput = addForm.querySelector('.adding__input'),
    checkbox= addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); /* скасовуємо стандартну дію юраузера, тепер при натисканні відправити, сторінка не буде перезавантажуватися */

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Add a new movie");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        
        event.target.reset();
        
    });
    
    const deleteAdv = (arr) => {
        arr.forEach (item => {
            item.remove();
        });
    };


    const makeChanges = () => {
        genre.textContent = 'Drama';

        poster.style.backgroundImage = 'url("img/bg.jpg")'; 
    };

    const sortArr = (arr) => {
        arr.sort();
    };

function createMovieList(films, parent) {
    parent.innerHTML = ""; 
    sortArr(films);
    
    films.forEach((film, i) => {
        parent.innerHTML += `      
            <li class="promo__interactive-item">
                ${i + 1} ${film} 
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent);
        });
    });

}

deleteAdv(adv);
makeChanges();
createMovieList(movieDB.movies, movieList);

});