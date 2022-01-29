// "use strict";

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

// /////////////////////////////////////////////////////////////////////

// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }

// // Пусть дана переменная r с радиусом круга. По соответствующей формуле найдите площадь круга и запишите ее в переменную s. Выведите содержимое этой переменной на экран.
// let num = 9;
// if (num < 10 || num > 99);
// else {
//     let num = 4 + 5;
//     if (num <= 9) {
//         console.log("однозначна");
//     } else if (num >= 9) {
//         console.log("двузначное");
//     }

//     let min = 21;
//     if (min >= 0 && min <= 20) {
//         console.log('1/3'); //
//     }
//     if (min >= 21 && min <= 40) {
//         console.log('2/3');
//     }
//     if (min >= 41 && min <= 60) {
//         console.log('3/3');
//     }

//     let arr = [1, 2, 3, 4];
//     if (arr.length <= 3) {
//         console.log("done")
//     } else {
//         console.log(arr[0] + arr[1] + arr[2] + arr[3]);
//     }

//     let str = '12345';
//     if (str[1] == 2) {
//         console.log('true');

//         let str = '12345';
//         let last = str[str.length - 1];
//         if (last == 5) {
//             console.log('!');
//         }

//         //Попытка обратиться к первому символу числа приведет к неожиданному поведению:
//         let num = 12345;
//         if (num[0] == 1) {
//             console.log('верно');
//         } else {
//             console.log('неверно'); // выведет 'неверно'
//         }

//         let num = 12345;
//         let str = String(num);
//         if (str[0] == 1) {
//             console.log('верно'); // выведет 'верно'
//         } else {
//             console.log('неверно');
//         }
//         /*Не обязательно вводить новую переменную, можно применить [0] непосредственно
//         к результату функции String:*/
//         let num = 12345;
//         if (String(num)[0] == 1) {
//             console.log('верно'); // выведет 'верно'
//         } else {
//             console.log('неверно');
//         }

//         let num = 12345;
//         let first = String(num)[0];
//         if (first == 1 || first == 2) {
//             console.log('верно');
//         } else {
//             console.log('неверно');
//         }

//         let num = 11;
//         let first = String(num)[1];
//         if (first == 0) {
//             console.log(true);
//         } else {
//             console.log(false);
//         }

//         let num = 25;
//         let second = String(num)[1];
//         if (second == 0 || second == 2 || second == 4 || second == 6 || second == 8) {
//             console.log(true);
//         } else {
//             console.log(false);
//         }

let arr = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "март",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "декабрь",
];
// let month = 10;
let month = "декабрь";
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == month) {
        document.write("<i>" + arr[i] + "</i>" + " ");
    } else {
        document.write(arr[i] + " ");
    }
}

let year = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let month = year[9];

for (let i = 0; i < year.length; i++) {
    if (year[i] == month) {
        document.write("<i>" + year[i] + "</i>" + " ");
    } else {
        document.write(year[i] + " ");
    }
}

for (const month of year) {
    console.log(month);
}

/*Задача 1
Дан объект следующий объект:*/
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
//С помощью цикла for-in найдите сумму элементов этого объекта.
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let sum = 0;
for (let key in obj) sum += obj[key];
console.log(sum);

// Задача 1
// Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы
// этого массива в консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою работу.

let arr = [9, 8, 7, 5, 0, 6, 4, 3, 2, 1];
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == 0) {
        console.log("");
        break;
    }
}

/*Задача 2
Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до 
первого отрицательного числа.*/

let arr = [9, 8, 7, 5, 1, 6, 4, -3, 6, 1];

let sum = 0;
for (let elem of arr) {
    if (elem >= 0) {
        sum += elem;
    } else {
        break;
    }
}
console.log(sum);

/*Задача 3
Дан массив с числами. Найдите позицию первого числа 3 в этом массиве 
(считаем, что это число обязательно есть в массиве).*/

let arr = [9, 8, 7, 5, 0, 6, 4, 3, 6, 1];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 3) {
        console.log(i);
        break;
    }
}

/*Задача 4
Определите, сколько целых чисел, начиная с числа 1, нужно сложить, 
чтобы сумма получилась больше 100.*/

// let arr = [10, 20, 30, 12, 40, 50, 10];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum >= 90) {
//         console.log(sum);
//         break;
//     }
// }

let arr = [10, 20, 30, 12, 40, 50, 10];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= 100) {
        console.log(sum);
        break;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let elem of arr) {
    let result;
    if (elem % 2 === 0) {
        result = elem * elem;
        console.log(result);
    } else if (elem % 3 === 0) {
        result = elem * elem * elem;
        console.log(result);
    }
} //4, 27, 16, 36, 64, 729

/*Задача 3
Дан следующий массив:
Найдите квадратный корень из суммы кубов его элементов. Для решения 
воспользуйтесь циклом for.*/

let num = 397;
let sum3 = 0;
for (let sum of num) {
    sum3 += Math.pow(sum, 3);
}
console.log(Math.sqrt(sum3)); //101.25709851659784

var array = [1, 2, 3, 4, 5];
var result = 0;

for (let i = 0; i < array.length; i++) {
    result += array[i] ** 3;
}
console.log(Math.sqrt(result));

const arr = [1, 2, 3, 4, 5, 6];

arr.push(10);
console.log(arr);

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    setTimeout(function() {
        console.log(2);
    }, 490);
}
first(1);
second(2);

function learnJs(lang, callback, learn) {
    console.log(`Я учу; ${lang}, bro`);
    callback();
}
learnJs("JavaScript", function() {
    console.log("done");
});

function one() {
    setTimeout(function() {
        console.log("true");
    }, 500);
}

function two() {
    setTimeout(function() {
        console.log("false");
    }, 400);
}

one(1);
two(2);

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(arr.length);

arr.push(5);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

let arr = [1, 2, 3];
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

let inc = (function() {
    let counter = 0;
    return function() {
        counter++;
    };
})();

inc();
inc();

let arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) console.log(i);

let arr = [1, "2", 3, 4, 5];
for (let i = 0; i < arr.length; i++)
    console.log(
        `Название товара ${("2", arr)} и Название массива c элементами в столбик`
    );
typeof i;

[] + false - null + true;