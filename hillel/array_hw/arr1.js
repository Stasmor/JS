// Створити масив, довжину та елементи якого задає користувач.

// Відсортувати масив за зростанням.

// Видалити елементи з масиву з 2 по 4 (включно!).


// У міру змін виводити вміст масиву на сторінку.

let arrLength = +prompt('Введіть довжину массиву', 0);
let arrValues = [];

for (let index = 0; index < arrLenth; index++) {

    arrValues.push(+prompt(`Введіть елемент № ${index}`,0));
    console.log(`After push #${index}: ${arrValues}`);
}
    arrValues.sort((a,b) => a-b );
    console.log('After sort: ',arrValues);

    arrValues.splice(1,3);
    console.log('After splice(el2-4): ',arrValues);

    document.getElementById('RES').textContent =  `Finaly arr: ${arrValues}`;
 
