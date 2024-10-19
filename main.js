// Основы JavaScript

// задание 2

// let a = 3; //объявление переменной через let
// let task = "напишите формулу вероятности" //объявление переменной через let
// const b = 5; //объявление переменной черезе const
// const animal = "tiger"; //объявление переменной черезе const

// a = 7; //изменение значения переменной
// b = 8; //нельзя изменить значение константы)

// console.log (a); //выводит информацию в консоль браузера
// console.log (b); //выводит информацию в консоль браузера - будет ошибка)

// задание 3

// let квартира23 = "латиница+цифры";
// let валюта_КаЗаХстаНа$ = "регистр и символы";

// console.log (квартира23, валюта_КаЗаХстаНа$); 

// // const 33f = "начинается с цифры";
// // const while = "совпадает с ключевым словом JS";

// Типы данных

// задание 1

// let price = 100;
// let bignumber = 1n;
// let word = "new";
// let children = true;

// // задание 2

// console.log (typeof price);
// console.log (typeof bignumber);
// alert (typeof children);
// alert (typeof word);

// let variables = [price, bignumber, word, children];
// for (let variable of variables) {
//     console.log (typeof variable);
// }

// задание 3

// let a = 3;
// let b = 0;
// console.log (a/b);
// a = -3;
// console.log (a/b);
// b = "nothing";
// console.log (a/b);

// задание 4

// let single = 'одинарные';
// let double = "двойные";
// let age = +prompt ("Введите свой возраст: ");
// let age_5 = alert (`через 5 лет Вам будет: ${age + 5}`);

// задание 5

// let a = null;
// let b;
// console.log (typeof a);
// console.log (typeof b);

// if (a === null) {
//     console.log ("a = null");
// };

// задание 6

// let a = String (5);
// let b = +("hello");
// let b2 = Number("bye");
// let c = Boolean ("world");
// let d = String (true);

// alert (a + " " + b + " " + b2 + " " + c + " " + d);

// задание 7

// let userName = prompt ("Введите Ваше имя:");
// alert (`Здравствуйте, ${userName}!`);
// let result = confirm ("Вы уверены, что хотите продолжить?");
// if (result) {
//     alert ("Хорошо! Продолжаем")
// } else {
//     alert ("Хорошо, отменяем");
// }

// Операторы

let x = 10;
x += 5;
let y = 3;
let z = x**y;
let isGreaterThan1000 = z > 1000;
let complexCondition = x > y && z < 10000; 
console.log (x);
console.log (y);
console.log (z);
console.log (isGreaterThan1000);
console.log (complexCondition);