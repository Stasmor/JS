// У папці `img` є зображення.
// При кожному завантаженні сторінки повинно виводитися випадково обране зображення.

const imgTag = document.querySelector('img');
const src = imgTag.getAttribute('src');
 

const num = (Math.floor(Math.random() * 6)+1);
const srcMod = src.slice(0, src.length-6)+ num +'.jpeg';
const altMod = 'dog'.concat(num);

imgTag.setAttribute('src',srcMod);
imgTag.setAttribute('alt',altMod);
//console.log('srcM=',srcMod);
//console.log('altM=',altMod);



