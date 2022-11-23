/*На сторінці інпут та кнопка.
При натисканні на кнопку - переходимо за посиланням, яке введено у інпут.
Також треба реалізувати перевірку введеного значення, чи вказаний протокол http/https.
Якщо протокол не вказаний - додаємо https*/

const button = document.querySelector("#Go");
const input = document.querySelector("#URL");


function handlerButtonClick(){
    let url = input.value;
    if(url.indexOf("http") === -1) url="https://"+url; 
    if(url.indexOf(".") === -1) { //URL must contain at least one character "."
        alert('NO VALID URL!');
    } else{
        //window.location.replace(url);
         window.location.assign(url);
    }
}

input.addEventListener( 'keyup',  event => {
    if( event.code === 'Enter' ) handlerButtonClick();
  });

button.addEventListener("click",handlerButtonClick);


