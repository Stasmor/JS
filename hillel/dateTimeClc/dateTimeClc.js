/*Напишіть скрипт, який переводить години в секунди

Запитати у користувача кількість годин

Порахувати, скільки секунд у цій кількості годин

Записати обчислене значення у змінну

Вивести цю змінну користувачеві через alert */

const multHrToSec = 3600;

const inptHr = +prompt("Введіть к-сть годин", 0);

let resSec = inptHr*multHrToSec;

alert(`${inptHr} години = ${resSec} секунд`);

