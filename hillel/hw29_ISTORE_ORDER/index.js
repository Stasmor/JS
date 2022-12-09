/*
В праву частину з описом товару додати кнопку "купити".
При натисканні на кнопку нижче з'являється форма оформлення замовлення з наступними полями:

- ПІБ покупця
- Місто (вибір зі списку декількох міст)
- Склад Нової пошти для надсилання (числове поле)
- Спосіб оплати: післяплата або оплата на банківську картку
- Кількість продукції, що купується

Реалізувати валідацію форми за допомогою JS, щоб всі поля були заповнені.
При валідаціїї поля ПІБ видаляти зайві пробіли (за допомогою String.trim()).
Якщо дані у формі некоректні, вивести повідомлення про це під формою.
Дані замовлення зберегти у обʼєкті. 
До обʼєкту також додати властивості з даними про дату створення та суму замовлення.
Якщо дані у формі коректні, вивести інформацію про замовлення під формою у форматі JSON.
Щоб розрахувати суму замовлення потрібно додати властивість зі значенням ціни до кожного товару.
Щоб занадто не ускладнювати завдання будемо вважати, що замовлення може складатися лише з одного виду товару.
*/
const categories = [
    {
      id: 1,
      category: "Food",
    },
    {
      id: 2,
      category: "Dress",
    },
    {
      id: 3,
      category: "Home",
    },
    {
      id: 4,
      category: "Garage",
    },
    {
      id: 5,
      category: "Hobbie",
    },
  ];
  
  const products = [
    {
      id: 1,
      category_id: 1,
      name: "Pizza",
      price: 225,
      description:
        "Pizza - best from Italy or New-Vasiuki_pizzaHouse",
    },
    {
      id: 2,
      category_id: 1,
      name: "Khinkaly",
      price: 15,
      description:
        "From Georgia with love!!!",
    },
    {
      id: 3,
      category_id: 2,
      name: "Pixel Tshorts",
      price: 425,
      description:
        "Trend sezon 22-23 year, after Win war!!!",
    },
    {
      id: 4,
      category_id: 2,
      name: "leaky socks from Microsoft",
      price: 50,
      description:
        "Are you remember silent night with Win95 ;-), this socks return you there=)))",
    },
    {
      id: 5,
      category_id: 1,
      name: "Bread",
      price: 25,
      description:
        "Feel the smell of fresh, fragrant bread from our oven...",
    },
    {
      id: 6,
      category_id: 2,
      name: "Scharovary",
      price: 555,
      description:
        "hopaku dance pants",
    },
    {
      id: 7,
      category_id: 3,
      name: "Computer table",
      price: 1025,
      description:
        "Little space, but maximum functionality for work",
    },
    {
      id: 8,
      category_id: 3,
      name: "refrigerator",
      price: 14_445,
      description: "for save your beer & meet",
    },
    {
      id: 9,
      category_id: 5,
      name: "Paraglider wing",
      price: 50_000,
      description:
        "Wing who can give you chance to fly",
    },
    {
      id: 10,
      category_id: 5,
      name: "Paraglider harnes",
      price: 40_000,
      description:
        "sit and fly among the clouds with this harnes",
    },
    {
      id: 11,
      category_id: 4,
      name: "Motorcycle",
      price: 250_000,
      description:
        "Speed & addrenaline?! Best motor sounds & fire-power betwen your legs?;-) ",
    },
    {
      id: 12,
      category_id: 5,
      name: "Book -\"JS for dummies)\" ",
      price: 250,
      description:
      "Dont dream - just sit & study!!!",
    },
    {
      id: 13,
      category_id: 4,
      name: "Hummer",
      price: 2_500_000,
      description:
        "Bee simplest - buy Hummer ;-)",
    },
    {
        id: 14,
        category_id: 5,
        name: "Kinzmarauli",
        price: 5000,
        description:
        "Good Hobbie, wery tasty! Wine for you soul!!!",
    }
  ];
/////////////////////////////////////////////////////////////////////////////////////////
const cat = document.querySelector("#categories");
const prod = document.querySelector("#products");
const descript = document.querySelector("#description");
const message = document.querySelector("#message");
const buttonBasket = document.querySelector("#basket-button");
const buttonBuy = document.querySelector("#buy-button"); 
const errorLine = document.querySelector("#error");
const res_message = document.querySelector("#res_mess");

const form = document.forms[0];
const formEl = document.forms[0].elements;



const order = {
  fullSum:0,
}
const orders = [];

function categoryUpd(list) {
  
  let letters='Category:';
  for (let i = 0; i < list.length; i++) {
      letters += `<li data-category-id=\"${i+1}\">` + list[i].category + "</li>";
  }
 cat.innerHTML = letters;

};

categoryUpd(categories);
///////////////////////////////////////////////////////////////////////

function productsUpd(list,cat_id) { 
    let letters='Products:';
    for (let i = 0; i < list.length; i++) {
     // console.log(`category_id=${list[i].category_id} cat_id=${cat_id}`); 
     if(list[i].category_id !== Number(cat_id)) continue;
     letters += `<li data-product-id=\"${i+1}\">` + list[i].name + "</li>";
  }
  prod.innerHTML = letters
};

///////////////////////////////////////////////////////////////////////

function handlerCategoryClick(ev){
  const selCategory=ev.target.dataset.categoryId;

  if(typeof(selCategory) !== "number" && isNaN(selCategory)) return;
  
  for (let index = 1; index <= cat.childElementCount; index++) {    //cancel coloring selcting before
    if(cat.childNodes[index].style.color === "red")  cat.childNodes[index].removeAttribute("style"); 
  }
  cat.childNodes[selCategory].style.color="red";
  
  prod.removeAttribute('hidden');
  productsUpd(products,selCategory);
};


function handlerProductClick(ev){
    
  const node = ev.target.parentNode;
  const selProduct=([...node.children].indexOf(ev.target)+1);
  const selId=ev.target.dataset.productId;
  
  if(typeof(selId) !== "number" && isNaN(selId)) return;
 
  for (let index = 1; index <= prod.childElementCount; index++) {    //cancel coloring selcting before
    if(prod.childNodes[index].style.color === "red")  prod.childNodes[index].removeAttribute("style"); 
}

  prod.childNodes[selProduct].style.color="red";

  descript.innerText=products[selId-1].description;//HTML = document.createTextNode(products[selProduct].description) ;

  order.price = products[selId-1].price; //selected item price *qtt

  descript.removeAttribute('hidden');
  buttonBasket.removeAttribute('hidden');
};



function handlerButtonBasketClick(){

  message.removeAttribute('hidden');

  buttonBuy.removeAttribute('hidden');
  form.removeAttribute('hidden');
  buttonBasket.setAttribute('hidden','');
}

function handlerButtonBuy(ev){
    
    const timestamp = new Date();
    order.costName = (formEl.costName.value).trim();
    order.city = formEl.city.options[formEl.city.value].text;
    order.depotNum = formEl.depotNum.value;
    order.itemQtt = formEl.itemQtt.value;
    order.payMeth = formEl.payCash.checked ? "cash" : "card";
    order.timestamp = timestamp.toDateString() +' '+ timestamp.toLocaleTimeString();
    ////checking in_data////
    let resCheck = checkOrderField();
    if(resCheck !== '') {errorLine.textContent = checkOrderField(); return;} 
    ///////////////////////
    order.price*=order.itemQtt;
    order.fullSum += order.price;// optionaly, 4 multi item orders
    orders.push(JSON.stringify(order,null,4));//pushing this order to array orders
    

    res_message.innerHTML=`<pre>${JSON.stringify(order, null, 4)}<pre>` //'you order:'+orders;
    res_message.removeAttribute('hidden');
    //errorLine.innerHTML=`<pre>${JSON.stringify(order, null, 4)}<pre>` //'you order:'+orders;
    console.log('Orders:',orders);
       
    //clear all after buy

    form.setAttribute('hidden','');
  // form.reset();
    
    prod.setAttribute('hidden','');
    descript.setAttribute('hidden','');
    buttonBasket.setAttribute('hidden','');
    buttonBuy.setAttribute('hidden','');
    message.setAttribute('hidden','');
    categoryUpd(categories);
    
}

function checkOrderField(){
    let err = '';
    if(order.costName.length === 0) err+='empty Costumer name; ';
    if(order.city === "Your City") err+='empty Costumer city; ';
    if(order.depotNum <= 0) err+='wrong(negative) or zero Depot number; ';
    if(order.itemQtt <= 0) err+='wrong(negative) or zero qtt items in order; ';
    if(err === '') return err; else return 'Error: '+err;
}


cat.addEventListener("click", handlerCategoryClick);
prod.addEventListener("click", handlerProductClick);
buttonBasket.addEventListener("click",handlerButtonBasketClick);
buttonBuy.addEventListener("click",handlerButtonBuy);

