//storage
let storage1 = []

let itt1 = {
    category: 1,
    name_item: 'gvozd',
    price: 244
}
let itt2 = {
    category: 2,
    name_item: 'bolt',
    price: 200,
    obj: {
        weight:100,
        length:100500
    }
}

// const itt_cp = {};
// Object.assign(itt_cp,itt2 );
const itt_cp = Object.assign({},itt2, {df: 277});
console.log('itt_cp:',itt_cp);

storage1.push(itt1);
storage1.push(itt2);
storage1.push(itt_cp);

console.log(storage1[1].obj.length);

storage1[1].category=7;
console.log('together array:',storage1);
// for(let arr in storage1) console.log(storage1[arr]);