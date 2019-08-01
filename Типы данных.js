'use strict';

var number = 5; //Число (целые, дроби, infinity, NaN) 1.
//console.log(4/0);
//console.log('string'*9);

var string = "Hello!"; //Строка - данные заключенные в "" 2.
var sym = Symbol(); //Символы 3.
var boolean = true; //Логическое значение true/false 4.

null; //В коде чего-то не существует (ошибка) 5.
//console.log(something)

undefined; // В коде что-то существует, но не имеет значения 6.
//let something;

var obj = {}; //Объект, коллекция данных, структура 7.

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name); //Получение значения свойства.
console.log(persone["name"]); //Получения значения свойства, заданного любой строкой.

let arr = ['plum.png','orange.jpg','apple.bmp']; //Массив

console.log(arr[0]);