/*
Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д.
 Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28
*/

 function outsideF(){
    let in_lock = 0;// замкнута змінна що замкнулася у (sumWithLock = outsideF())
    return function(startVar){
        in_lock += startVar;
        return in_lock 
    };

};
//////////////////////checking
sumWithLock = outsideF(); 

console.log('res+3=',sumWithLock(3));//number
console.log('res+2=',sumWithLock(2));//number
console.log('res+200=',sumWithLock(200));//number
console.log('res+\"200\"=',sumWithLock('200'));//string

