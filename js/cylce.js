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

/*Задача 4
Дан следующий массив:
Вручную, без цикла, найдите сумму элементов этого массива.*/
let arr = [
    [1, 2, 3, [4, 5, [6, 7]]],
    [8, [9, 10]],
];
let sum =
    arr[0][0] +
    arr[0][1] +
    arr[0][2] +
    arr[0][3][0] +
    arr[0][3][1] +
    arr[0][3][2][0] +
    arr[0][3][2][1] +
    arr[1][0] +
    arr[1][1][0] +
    arr[1][1][1];
console.log(sum); //55

for (let i = 0, j = 0; i <= 9; i++, j += 2) {
    console.log(i, j * i++);
}

let arr = [9, 8, 7, 5, 0, 6, 4, 3, 2, 1];
for (let elem of arr) {
    if (elem == [0]) {
        console.log("есть0");
        break; // выйдем из цикла
    }
}

let a12354rr = [9, 8, 7, 5, 0, 6, 4, 3, 2, 1];
for (let i = 0; i <= 9; i++)
    if ((i = 0)) {
        console.log(i);
        break;
    }

let obj = {
    key1: { a: 1, b: 2, c: { d: 3, e: 4 }, f: 5 },
    key2: { g: 6, h: 7 },
};
//Найдите сумму всех элементов - чисел.
function sumInObj(obj) {
    let result = 0;
    if (typeof obj == "object") {
        for (let key in obj) {
            if (typeof obj[key] != "object") {
                result += obj[key];
            } else {
                let subObj = obj[key];
                result += sumInObj(subObj);
            }
        }
        return result;
    } else {
        return obj;
    }
}
console.log(sumInObj(obj));