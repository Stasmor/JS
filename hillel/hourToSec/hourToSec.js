/*Напишіть скрипт, який переводить години в секунди

Запитати у користувача кількість годин

Порахувати, скільки секунд у цій кількості годин

Записати обчислене значення у змінну

Вивести цю змінну користувачеві через alert */

const MULT_HR_to_SEC = 3600;

const INPT_HR = +prompt("Введіть к-сть годин", 0);

let resSec = INPT_HR * MULT_HR_to_SEC;

alert(`${INPT_HR} години = ${resSec} секунд`);
