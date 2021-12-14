"use strict";

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

// const a = prompt("Один из просмотренных фильмов", ""),
//     b = prompt("На сколько оцените его", ""),
//     с = prompt("Один из просмотренных фильмов", ""),
//     d = prompt("На сколько оцените его", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из просмотренных фильмов", ""),
        b = prompt("На сколько оцените его", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно много фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Ошибка");
}
console.log(personalMovieDB);

///////////////////

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = "text";
    console.log(num);
}
window.showFirstMessage();
// console.log(num);

// let message = "hello";
// console.log(message);

// function sayHai() {
//     console.log(name);
//     console.log(age);
//     var name = "Lyda";
//     let age = 21;
// }

// sayHai();