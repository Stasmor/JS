/*
Реалізувати рекурсивну функцію, яка зводить число в ступінь.
Ступінь передається як другий аргумент у функцію
pow (num, degree)
*/
/*ф-ція для тестування можливих комбінацій */
function testFunc(func){                    
    const testArgsArr = [5,3,0,-1,'3f',[],{},null,undefined];
   
     for (let index1 = 0; index1 < testArgsArr.length ; index1++) {
        for (let index2 = 0; index2 < testArgsArr.length ; index2++) { 
          //  console.log(`ind1=${testArgsArr[index1]}; ind2=${testArgsArr[index2]} resF=${func(testArgsArr[index1],testArgsArr[index2])}`);
            if(func(testArgsArr[index1],testArgsArr[index2]) !== null){
                console.log(`ind1=${testArgsArr[index1]}; ind2=${testArgsArr[index2]} resF=${func(testArgsArr[index1],testArgsArr[index2])}`);
            }
        }
    }    
}


const pow = function(num, degree){
    let result = num;
        
    if((Number.isNaN(num) || typeof(num) !== 'number') ||(Number.isNaN(degree) || typeof(degree) !== 'number') || degree < 0) return null;
    if(degree === 0) return 1;

    if(degree <= 1)  return result;

    return  result * pow(num,degree-1);
}

testFunc(pow,2);

// console.log(pow(2,0));
// console.log(pow(2,-1));
// console.log(pow(-2,1));
// console.log(pow(2,1));
// console.log(pow(3,4));
// console.log(pow('3j',4));
// console.log(pow('3j','14'));

