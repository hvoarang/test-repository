"use strict";

// 1й способ объявления функции "function declaration"
// function hi() {
//     console.log("good mornin");
// }
// hi()

// 2й способ объявления функции "function expression"
// let message = function () {
//     console.log("123123");
// }
// message();

// name - является параметром в который нужно вложить аргумент
// function hi(name) {
//     console.log(`hi! my name is ${name}, and you?`);
// }

// // Значение которое передается как аргумент
// hi("Ben");
// hi("Den");
// hi("Ten");

// let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
    }
}

start();

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

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно много фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш Любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
///////////////////

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log("Я прошел этот урок");
}

learnJS(`JavaScript`, done);
///////////////////
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = "text";
//     console.log(num);
// }
// window.showFirstMessage();
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

function hi(name) {
    console.log(`hi! my name is ${name}, and you?`);
}
hi("Ben");

// интерполяция - это сложение переменных в консоли
let firstName = "Dana";
let secondName = "Michel!";

console.log("What is your name?" + " " + firstName + " " + secondName);

//Callback - Способ задать тайминги для запуска функции
function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    setTimeout(function() {
        console.log(2);
    }, 400);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`я учу: ${lang}`);
    callback();
}

function done() {
    console.log("я прошел этот урок!");
}

learnJS("JavaScript", done);

let options = {
    name: "test",
    height: 1024,
    width: 1024,
    color: {
        border: "green",
        bg: "black",
    },
    makeTest: function() {
        console.log("test");
    },
};
options.makeTest();

const { border, bg } = options.colors;
console.log(border);

console.log(Object.keys(options).length);

// Способ перебора объектов For In
let counter = 0;
for (let key in options) {
    if (typeof options[key] === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

console.log(Object.keys(options).length);