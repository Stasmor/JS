// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

//  const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);

function removeElement(arrIn, num4Del) {
    if(typeof(num4Del) !== 'number' || isNaN(num4Del) || arrIn.indexOf(num4Del)===-1) return; 
    arrIn.splice(arrIn.indexOf(num4Del),1);   
}

//  removeElement(array,91);
//  console.log(array);