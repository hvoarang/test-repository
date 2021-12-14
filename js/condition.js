"use strict";

if (4 == 9) {
    console.log("OK!");
} else {
    console.log("Error");
}

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Too Many");
} else {
    console.log("Ok!");
}

// Тернарный оператор "?" Выводы между собой разделяются знаком ":"

num === 50 ? console.log("Ok!") : console.log("Error");

//  Строгое сравнение

// break & continue - Создает выход из цикла или продолжает его с помощью "continue"

const num = 50;

switch (num) {
    case 49:
        console.log("Wrong");
        break;
    case 100:
        console.log("Wrong");
        break;
    case 50:
        console.log("Done");
        break;
    default:
        console.log("Not this time!");
        break;
}

//break

for (var i = 0; i < 10; i++) {
    console.log("i = " + i);
    if (i == 5) break;
}
// c ontinue

for (var i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log("i = " + i);
}

//  continue заменить фигурными скобками

for (var i = 1; i < 20; i++) {
    if (!(i % 2 == 0)) {
        console.log("i = " + i);
    }
}