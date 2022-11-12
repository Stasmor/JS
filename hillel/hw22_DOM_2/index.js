/*
Вивести на сторінку таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється за допомогою JavaScript).
У HTML файлі для тих, хто забув, наведено приклад, як виглядає структура таблиці
*/
let iterNum = 1;

const Rows = 10;
const Cols = 10;

const tbl = document.createElement("table");
const tbd = document.createElement("tbody");

for (let tri = 0; tri < Rows; tri++) {
    const tr = document.createElement("tr");

    for (let tdi = 0; tdi < Cols; tdi++) {
        const td = document.createElement("td");
        // const value = document.createTextNode(iterNum++);
        td.innerHTML=iterNum++; //value;//appendChild(value);// 
        tr.appendChild(td);
    }
    tbd.appendChild(tr);
}

tbl.appendChild(tbd);

document.body.appendChild(tbl);



