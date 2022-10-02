// 1.
const qttS = 3;
var resStr = "";

for(let i=0;i<qttS;i++)   
    resStr += prompt(`Please input your String # ${i}`);

alert(`Result = ${resStr}`);
console.log('1st: Result = ',resStr);

// 2.
resStr="";
let arrSym = [];

const numIn = "78921";

arrSym = numIn.split('');
    //arrSym.sort();
arrSym.forEach(item => resStr+=item+' ');

alert(`2nd: We have number: ${numIn}.
after transform to symbols: ${resStr}`);
console.log(resStr);
