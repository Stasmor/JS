
let resultArrayString = [];


// - Вивести на сторінку в один рядок через кому числа від 10 до 20
 resultArrayString[0] = "Вивести на сторінку в один рядок через кому числа від 10 до 20 \n ";

for (let index = 10; index <= 20; index++) {
    resultArrayString[0] = resultArrayString[0] + index +','; 
}


 // - Вивести квадрати чисел від 10 до 20
 resultArrayString[1] = ("Вивести квадрати чисел від 10 до 20 \n");

for (let index = 10; index <= 20; index++) {
     resultArrayString[1] = resultArrayString[1] + index + ' = ' + (index**2) + "\n";

}


// - Вивести таблицю множення на 7
resultArrayString[2] = ("Вивести таблицю множення на 7 \n");

for (let index = 0; index <= 9; index++) {
    resultArrayString[2] = resultArrayString[2] + '7 * '+ index + '=' + (index * 7)+ "\n";
}


// - Знайти суму всіх цілих чисел від 1 до 15
let sumNum = 0;

for (let index = 1; index <= 15; index++) {
   sumNum += index;
}
resultArrayString[3] = `сума всіх цілих чисел від 1 до 15 = ${sumNum}`;


// - Знайти добуток усіх цілих чисел від 15 до 35
let multNum = 1;

for (let index = 15; index <= 35; index++) {
   multNum *= index;
}
resultArrayString[4] = `добуток усіх цілих чисел 15 до 35 = ${multNum}`;


// - Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let result = 0;

for (let index = 1; index <= 500; index++){
    result += index;
 }
 result /= 500;
 resultArrayString[5] = `Середнє арифметичне 1..500 = ${result}`;


// - Вивести суму лише парних чисел в діапазоні від 30 до 80 (2 варіанти)
let sumEvenNum = 0;
//припускаємо що ми знаємо що 30 - парне число
for (let index = 30; index <= 80; index=index+2) {
    sumEvenNum += index;
}
/*якщо ми "не знаємо парності 30", тоді можна інкрементувати по +1 та перевіряти парність ч-з  % 2 === 0
подібно прикладу нижче */
resultArrayString[6] = `Сума парних чисел (30..80) = ${sumEvenNum}`;



// - Вивести всі числа в діапазоні від 100 до 200 кратні 3
resultArrayString[7]='Вивести всі числа в діапазоні від 100 до 200 кратні 3:  \n';

for (let index = 100; index <= 200; index++) {
    if(index % 3 === 0)  resultArrayString[7] = resultArrayString[7] + index +','; 
}


// -Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// -Визначити кількість його парних дільників
// -Знайти суму його парних дільників
const NATURAL_NUM = 8; //type your number

let arrDivisions = [];
let step = NATURAL_NUM;
let qttEvDiv = 0;
let sumEvenDiv = 0;

while(step >= 1) {
    if(NATURAL_NUM % step == 0) {
        arrDivisions.push(step);
        if(step % 2 == 0){ 
            qttEvDiv++;
            sumEvenDiv += step;
        }
    }
    step --;
}

resultArrayString[8]=`Натуральне число = ${NATURAL_NUM} \n Його дільники:${arrDivisions}
К-сть його парних дільників = ${qttEvDiv}\n  Сума його парних діл-ків = ${sumEvenDiv}`;


 resultArrayString.forEach(element => {
    alert(element);
});



// -Надрукувати повну таблицю множення від 1 до 10

let tableRowSelector = 1;
let tableCelIter;
let rowStr = '';
let bufferStr = '';
let rowsArr = [];
rowsArr.push('Таблиця множення(1..10): \n');

while (tableRowSelector<=10){

    for (tableCelIter = 1; tableCelIter <= 10; tableCelIter++) {
        bufferStr=` ${tableRowSelector}*${tableCelIter}=${tableRowSelector*tableCelIter}; `;
        rowStr=rowStr+bufferStr;
    }
   

    rowsArr.push(rowStr+'\n');
    rowStr='';
  
    tableRowSelector++;
}

 //console.log(rowsArr);
 alert(rowsArr);

/* варіант із 2мірним массивом
let tableNumSelector = 10;
let tableNumIter;
let bufferStr;
let tableArr = [];

while (tableNumSelector>=1){

    tableArr[tableNumSelector] = [];//create insight array

    for (tableNumIter = 1; tableNumIter <= 10; tableNumIter++) {
        workStr=`${tableNumSelector}*${tableNumIter}=${tableNumSelector*tableNumIter}`;
        tableArr[tableNumSelector][tableNumIter] = workStr;

    }
    tableArr[tableNumSelector][tableNumIter+1]='\n';
    tableNumSelector--;
}

console.log(tableArr);
*/



