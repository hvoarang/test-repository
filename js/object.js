"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red",
    },
    makeTest: function() {
        console.log("Test");
    },
};

options.makeTest();

const { border, bg } = options.colors;
console.log(border);

console.log(Object.keys(options).length);

console.log(options.name);

delete options.name;

console.log(options);
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

var array = [1, 2, 3, 4, 5];
var result = 0;

for (let i = 0; i < array.length; i++) {
    result += array[i] ** 3;
}
console.log(Math.sqrt(result));

console.log("123", +"321");

let colorYea = "Blue";
let user = "Vasa";
let userName = "Vasa";
console.log(user);

let stringPlusNum = "2" + " " + 2;
console.log(stringPlusNum);

let user = "2";
let admin = "3";

console.log(user + admin);
console.log(user + +admin);
console.log(+user + +admin);

let str = "BRO";
let str1 = "bro";
console.log(str < str1);

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

let x = 11 % 3;
console.log(x);

name = 0;
console.log(name ? ? "без имени"
    $ { name });


console.log('558' > 22++);

function sayHai() {
    let age = 21;
    var name = "Lyda";
    console.log(name);
    console.log(age);
}
sayHai();