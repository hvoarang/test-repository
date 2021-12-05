// "use strict"

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// Первый Способ ввода переменных по отдельности

// const a = prompt("Один из просмотренных фильмов", "");
// const b = prompt("На сколько оцените его", "");
// const с = prompt("Один из просмотренных фильмов", "");
// const d = prompt("На сколько оцените его", "");

// Второй Способ ввода переменных через запятую. Данные переменных разделяются между задачами ";"

const a = prompt("Один из просмотренных фильмов", ""),
    b = prompt("На сколько оцените его", ""),
    с = prompt("Один из просмотренных фильмов", ""),
    d = prompt("На сколько оцените его", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);