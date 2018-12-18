// 1 quest

"use strict";
var TcABSOLUTE = -273.15;
var TfABSOLUTE = -459.67;

var Tc = prompt("Ведите температуру за окном, ℃");
var convertTemperature = 0;

convertTemperature = ((9 / 5) * Number(Tc) + 32);

if (Tc <= TcABSOLUTE) {
    alert("Вы достигли абсолютного нуля");
} else {
    alert("Температура по Фаренгейту: " + convertTemperature);
}


// 2 quest

var name = prompt("Введите имя:");
var admin;

admin = name;

alert("Admin is " + admin);


// 3 quest

var x = 1000 + "108";
alert("Сумма равна:" + x + " " + "Тип:" + typeof x);

/* 4 quest

    Атрибуты (async и defer) отвечают за загрузку скрипта. Первый отвечает за мгновенную выполнение скрипта в процессе загрузки страницы, второй за загрузку в порядке очередности: сначала грузится страница, потом выполняется скрипт.
    
*/
