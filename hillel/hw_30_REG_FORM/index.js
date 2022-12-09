/*
Реалізовуємо форму для реєстрації.
Поля:
- Ім'я, Прізвище (Текстові поля)
- Дата народження (Текстове поле)
- Стать (radio)
- Місто (select)
- Адреса (textarea)
- Мови, якими володіє (checkbox)
- Кнопка “Зберегти”
За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.
*/

const errorLine = document.querySelector("#error");
const res_message = document.querySelector("#res_mess");
const button = document.querySelector("#btn");
const langSelector = document.querySelector('#lang');

const formEl = document.forms[0].elements;

const costumer = {};

function handlerButton(){
    
    errorLine.textContent = '';
    costumer.name = (formEl.costName.value).trim();
    costumer.dateB = formEl.dateB.value;
    costumer.gender = formEl.mn.checked ? "Man" : "Woman"; //formEl.depotNum.value;
    costumer.city = formEl.city.options[formEl.city.value].text;

    costumer.addr = formEl.addr.value;
      
    let selected = langSelector.selectedOptions;
    let selRes = '';
    for (let i = 0; i < selected.length; i++) {
        selRes+=selected[i].label+';';
    }
    costumer.lang = selRes;



    ////checking in_data////
    let resCheck = checkAllField();
    if(resCheck !== '') {errorLine.textContent = checkAllField(); return;} 
    ///////////////////////


    

    res_message.innerHTML=`<pre>${JSON.stringify(costumer, null, 4)}<pre>` //'you order:'+orders;
    res_message.removeAttribute('hidden');
    //errorLine.innerHTML=`<pre>${JSON.stringify(order, null, 4)}<pre>` //'you order:'+orders;
    console.log({costumer});

    
}

function checkAllField(){
    let err = '';
    if(costumer.name.length === 0) err+='empty Name; ';
    if(costumer.dateB.length === 0 ) err+='empty Date of Birth; ';
    if(costumer.city === "Your City:") err+='empty Costumer city; ';
    if(costumer.addr.length === 0) err+='empty Address; ';
    if(costumer.lang === "Your lang:;" || costumer.lang === "") err+='not select any of Languages; ';
    if(err === '') return err; else return 'Error: '+err;
}

button.addEventListener("click",handlerButton);