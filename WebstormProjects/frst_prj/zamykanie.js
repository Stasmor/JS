//
// function zam(A) {
//     return function(B) {
//         //console.log(`a=${A},b=${B}, sum= ${A+B}`);
//         return A+B
//     };
// }
//
// console.log('Starting')
// const ff = zam(2);// '2' - in zamyk, ff - функция, возвращаемый результат ф-ции zam
//
// console.log(ff(5));
// console.log(ff(2));
const arr = [1,2,3,4,5]

for (var i = 0; i < 5; i++) {
     // console.log('now i=',i)
    setTimeout(function (ii){
        return function () {
            console.log(`arr[${ii}] = ${arr[ii]}`)
    }}(i),1500);

}

console.log('fin')