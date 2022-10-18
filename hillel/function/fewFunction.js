
/****************************************************************************************************************************** */
// -Дан масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

 const multiTypeArr = [2,7,'29',true,-4,[26,24],null];//values 4 testing 
// const multiTypeArr = ['29',true,[26,24],null];//values 4 testing 
// const multiTypeArr = [];//values 4 testing 

const midlValFunc = function(arr){
    let sum = 0;
    let div = 0;
    for (const arrEl of arr) {
        if(typeof(arrEl) === 'number') {
            sum+=arrEl;
            div+=1;
        } 
    };
    return (sum !== 0 && div !== 0) ? sum/div : null;
}

const resVal = midlValFunc(multiTypeArr);
console.warn(resVal);
/****************************************************************************************************************************** */
// -Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.



const doMath = function(a, znak, b){
    let resString = '';

    if(isNaN(a)||typeof(a)!=='number') return 'недопустиме значення а!!!';
    if(isNaN(b)||typeof(b)!=='number') return 'недопустиме значення b!!!';

    switch(znak){
        case '+': resString =`a + b = ${a+b}`; break;
        case '-': resString =`a - b = ${a-b}`; break;
        case '*': resString =`a * b = ${a*b}`; break;
        case '/': resString =`a / b = ${a/b}`; break;
        case '%': resString =`a % b = ${a/b}`; break;
        case '^': resString =`a ^ b = ${a**b}`; break;
        default: resString ='no operation found!';
    }
    return resString;
}

//const a ='4b';////values 4 testing NaN
const a = +prompt('Введіть а:');
const b = +prompt('Введіть b:');
const sign = prompt('Введіть знак дії:');

console.log(doMath(a, sign ,b));
/****************************************************************************************************************************** */
// -Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

const inRow = +prompt('Введіть к-сть рядків',1);//або перенести до тіла функції...(не зрозуміло з завдання куди)
const inCol = +prompt('Введіть к-сть cтовпців',1);//або перенести до тіла функції...(не зрозуміло з завдання куди)

const twoSpaceArr = function(row,col){

    if((isNaN(row)||typeof(row)!=='number')||(isNaN(col)||typeof(col)!=='number')) return;//тут питання, чому при вильоту по цьому Ретюрну повертається обьект(який виводиться у консоль у виклику ф-ціїї)? 

    const tSArr = [];

    for (let rowIndex = 0; rowIndex < row; rowIndex++) {
        tSArr[rowIndex]=[];
        for (let colIndex = 0; colIndex < col; colIndex++) {
            tSArr[rowIndex][colIndex] = prompt(`введіть значення ел-нту Ряду№:${rowIndex+1} Стовпцю№:${colIndex+1}`);
        }
    }

   // tSArr.forEach((rowStrt) => {console.log(rowStrt);});// for checking all values 
    return  tSArr;
}
 
console.log(twoSpaceArr(inRow,inCol));
/****************************************************************************************************************************** */

// -Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач


const fRemSymb = function(inptRow,inptSym){
    for (const sym of inptSym) {
        inptRow = inptRow.replaceAll(sym,'');
    }
   return inptRow;
}

console.log(fRemSymb('No born!!!',['r',' ','o']));

/****************************************************************************************************************************** */