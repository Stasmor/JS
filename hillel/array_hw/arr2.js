// Дано масив    [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
const targtArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.
let sum=0
let qttPos=0;

targtArr.forEach(element => {
    if(element > 0){
        sum+=element;
        qttPos+=1;    
    }  
});
// console.log(`sum:${sum},qttPos:${qttPos}`);


// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
let minVal=0;
let minNum=0;
let maxVal=0;
let maxNum=0;

targtArr.forEach(element => {
    if(element < minVal){
        minVal=element;    
    }  
    if(element > maxVal){
        maxVal=element;    
    } 
    maxNum=targtArr.indexOf(maxVal);
});

//  console.log(`minVal:${minVal},minNum:${minNum}`);
//  console.log(`maxVal:${maxVal},maxNum:${maxNum}`);

/*  additional way Math methods */
const _minVal = arr => arr.reduce((accum, element) => Math.min(accum, element));
const _maxVal = arr => arr.reduce((accum, element) => Math.max(accum, element));
  
//  console.log("Min with Math:", _minVal(targtArr));
//  console.log("Max with Math:", _maxVal(targtArr));


// Визначити кількість негативних елементів.
let negElem = 0;
targtArr.forEach(element => {
   (element < 0) ? negElem+=1 : negElem;
});
//  console.log(`кількість негативних елементів = ${negElem}`);



// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.

let EvnPosArr = targtArr.filter(elememt => (elememt % 2) === 0);
let OddPosArr = targtArr.filter(elememt => (elememt % 2) !== 0);
  
 let qttEvPosElem = 0;
 let sumEvPosElem = 0;
 let qttOddPosElem = 0;
 let sumOddPosElem = 0;

for (const elem of EvnPosArr) {
    qttEvPosElem+=1;
    sumEvPosElem+=elem;
}
for (const elem of OddPosArr) {
     qttOddPosElem+=1;
     sumOddPosElem+=elem;
 }
// console.log(`к-сть парних позитивних ел-тів = ${qttEvPosElem}, суму парних позитивних еk-тів = ${sumEvPosElem} `);
// console.log(`к-сть непарних позитивних ел-тів = ${qttOddPosElem}, суму непарних позитивних ел-тів = ${sumOddPosElem} `);


// Знайти добуток позитивних елементів.
const res = targtArr.reduce((mult,elem)=>{
mult = (elem > 0) ? mult*elem: mult ;
return mult;
},1)

// console.log(`Добуток позитивних елементів: ${res}`);

// Знайти найбільший серед елементів масиву, ост альні обнулити.
const maxValue =  targtArr.reduce((accum, element) => Math.max(accum, element),0);
maxNum=targtArr.indexOf(maxValue);
// console.log('Max='+maxValue+' n='+maxNum);

targtArr.fill(0, 0, maxNum);
targtArr.fill(0, maxNum+1);
/*  additional way: заливка всього 0 та запис по індексу */
// targtArr.fill(0, 0);
// targtArr[maxNum] = maxVal; 

//  console.log('найбільший серед елементів масиву, інщі обнулити ',targtArr);

