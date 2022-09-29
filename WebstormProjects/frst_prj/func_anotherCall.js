const str = 'frstrstr'

function logPerson(s,name,age) {
    //return 'in function logPerson';
    console.log(s, name, age);
    //console.log(s[0]+name+age);
    //return 'in function logPerson';
    return`${s[0]}${name}${s[1]}${age}`;
}

const personName = 'Stas';
const personAge = 36;
const personName2 = 'Pasha';
const personAge2 = 5;


const output = logPerson`Имя:${personName} Возраст:${personAge} !!!`;
const output2 = logPerson`Имя:${personName2} Возраст:${personAge2} !!!`;

console.log(output);
console.log(output2);
//console.log(output)