/*Пишемо свій слайдер зображень.

На сторінці є зображення та кнопки Next, Prev з боків від зображення.
При кліку на Next - показуємо наступне зображення.
При кліку на Prev - попереднє.
При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.
*/
const keyNext = document.querySelector('#btnNext');
const keyPrev = document.querySelector('#btnPrev');
// const keyNext = document.getElementById('btnNext');
// const keyPrev = document.getElementById('btnPrev');

const qttImg = 6;
let num=1;


const imgTag = document.querySelector('img');
const src = imgTag.getAttribute('src');

const wWidth = document.documentElement.clientWidth;//window.innerWidth;
const wHeight = document.documentElement.clientHeight//window.innerHeight;

const imgArr = [];
(function(path,name,qtt){
    for (let index = 1; index <= qtt; index++) {
        imgArr[index] = path.concat(name,index,'.jpeg');        
    }
    console.log(imgArr);
})('./img/','dog',qttImg)       //adding names of images



const repaintNext = () => {
    console.log('next');
    if(num < qttImg){
        keyPrev.removeAttribute('disabled');
        num+=1;
        const altMod = 'dog'.concat(num);
        imgTag.setAttribute('src',imgArr[num]);
        imgTag.setAttribute('height',wHeight);
        imgTag.setAttribute('alt',altMod);
        
        if(num >= qttImg){
            keyNext.setAttribute('disabled','true');
        }
    }
}

const repaintPrev = () => {
    console.log('prev');
    if(num > 1){
        keyNext.removeAttribute('disabled');
        num-=1;
        const altMod = 'dog'.concat(num);
        imgTag.setAttribute('src',imgArr[num]);
        imgTag.setAttribute('alt',altMod);
        if(num <= 1){
            keyPrev.setAttribute('disabled','true');
        }
    }
}

keyNext.addEventListener("click",repaintNext);
keyPrev.addEventListener("click",repaintPrev);
