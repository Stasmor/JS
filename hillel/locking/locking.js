/*
Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д.
 Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28
*/

 function outsideF(startVar){
    in_lock=startVar;
    return function(newVar){
        return startVar+newVar
    }

}
//////////////////////checking
console.log('------------inside_f with number-------------'); 

sum100500n = outsideF(100500); //if f-st val. is number

console.log('res+1=',sum100500n(1)); //number
console.log('res+\"1\"=',sum100500n('1')); //string
console.log('------------inside_f with string -------------');

sum100500s = outsideF('100500');//if f-st val. is string

console.log('res+1=',sum100500s(1));//number
console.log('res+\"1\"=',sum100500s('1'));//string