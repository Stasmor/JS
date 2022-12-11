/*
Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення 
 навіть після оновлення сторінки (використати localStorage).
На сторінці спочатку під списком категорій відображається також кнопка “Мої замовлення”.
При кліку на “Мої замовлення”:
- замість категорій відображається список усіх замовлень користувача (дата та сума)
- при кліку на замовлення в середній частині відображаються деталі замовлення.
- в правій частині відображаються дані про товар з замовлення
Також реалізувати можливість видалення замовлення зі списку. Потрібно реалізувати можливість видаляти замовлення по одному, 
 тобто напроти кожного рядку зі збереженим заказом повинна бути кнопка для видалення цього рядку. 

 (Підказка - можна використовувати значення `Date.now()` на момент збереження замовлення у якості айдішника замовлення. 
 Потім при виведенні списка замовлень цей айдішник додати як дата атрибут. 
 Таким чином можна буде обробляти кліки по кнопках видалення рідків з замовленнями)
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

const buttonOrdersShow = document.querySelector("#shw_info-button");
const removeKeys = document.querySelector(".outer")

const errorLine = document.querySelector("#error");
const res_message = document.querySelector("#res_mess");

const form = document.forms[0];
const formEl = document.forms[0].elements;



const order = {
  fullSum:0,
}

const ordersM = [];//memory

///////////////////////////////////////////////////////////////////////
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


function ordUpd(list) { 
  let letters='Details:';
  let detail = Object.entries(list);
  for (let i = 0; i < detail.length; i++) {
      letters += `<li data-product-id=\"\">` + detail[i][0] +':'+ detail[i][1] + "</li>";
  }

  prod.innerHTML = letters
  prod.removeAttribute('hidden');

  // console.log(`list.itemId=${list.itemId}`);
    
  let res = products.find(obj => obj.id === +list.itemId);//
  descript.innerText = res.description;
  descript.removeAttribute('hidden');

};

///////////////////////////////////////////////////////////////////////

function handlerCategoryClick(ev){

  const varList = ev.target.hasAttribute('data-category-Id') ? 'categories': 'order'; // flag category|order selection
  // console.log('data_attr=', varList);
  const selCategory = (varList === 'categories') ? ev.target.dataset.categoryId : ev.target.dataset.orderId;
  // console.log('selCat=', selCategory);  
  for (let index = 1; index <= cat.childElementCount; index++) {    //cancel coloring selcting before
    if(cat.childNodes[index].style.color === "red")  cat.childNodes[index].removeAttribute("style"); 
  }

  if(varList === 'categories') cat.childNodes[selCategory].style.color="red";
  
  prod.removeAttribute('hidden');

  let res = ordersM.find(obj => obj.id === selCategory);//4 orders
  
  if(varList === 'categories') productsUpd(products,selCategory); else ordUpd(res); 
 
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

  order.itemId=selId;
  order.price = products[selId-1].price; //selected item price *qtt
  order.itemName = products[selId-1].name;

  descript.removeAttribute('hidden');
  buttonBasket.removeAttribute('hidden');
};



function handlerButtonBasketClick(){

  message.removeAttribute('hidden');
  buttonBuy.removeAttribute('hidden');
  form.removeAttribute('hidden');
  buttonBasket.setAttribute('hidden','');
  // console.warn('on to Basket///');
}

function handlerButtonBuy(){
    
    const tmstamp = new Date();
    order.costName = (formEl.costName.value).trim();
    order.city = formEl.city.options[formEl.city.value].text;
    order.depotNum = formEl.depotNum.value;
    order.itemQtt = formEl.itemQtt.value;
    order.payMeth = formEl.payCash.checked ? "cash" : "card";
    order.timestamp = tmstamp.toDateString() +' '+ tmstamp.toLocaleTimeString();
    

    order.id = order.itemId +'_'+ String(tmstamp.valueOf()).slice(6,);// create unic ORDER ID

    ////checking in_data////
    let resCheck = checkOrderField();
    if(resCheck !== '') {errorLine.textContent = checkOrderField(); return;} 
    ///////////////////////
    order.price*=order.itemQtt;
    order.fullSum += order.price;// optionaly, 4 multi item orders
    orderStr=JSON.stringify(order,null,4); 
    
    //orders.push(orderStr);//pushing this order to array orders
    
    localStorage.setItem(order.id,JSON.stringify(order,null,4));

    res_message.innerHTML=`<pre>${orderStr}<pre>` //'you order:'+orders;
    res_message.removeAttribute('hidden');
    
    // console.log('Orders:',orders);
    // console.warn('buy_end'); 

        
    //clear all after buy
    clrscr();

    categoryUpd(categories);
    
  };
  
function checkOrderField(){
  let err = '';
    if(order.costName.length === 0) err+='empty Costumer name; ';
    if(order.city === "Your City") err+='empty Costumer city; ';
    if(order.depotNum <= 0) err+='wrong(negative) or zero Depot number; ';
    if(order.itemQtt <= 0) err+='wrong(negative) or zero qtt items in order; ';
    if(err === '') return err; else return 'Error: '+err;
}

function showStoreOrders(){
  // localStorage.clear();

  clrscr();

  if(buttonOrdersShow.dataset.showingVar !== 'info') {

    buttonOrdersShow.dataset.showingVar = 'info';
    removeKeys.innerHTML = '';
    prod.addEventListener("click", handlerProductClick);
    buttonOrdersShow.innerText='Show stored order';
    categoryUpd(categories);
    return;
  }
            
  //removeKeys.removeAttribute('hidden');

  res_message.setAttribute('hidden','');
  prod.removeEventListener("click", handlerProductClick);

  let letters='Orders:';
  let btns_line='';

  for (let index = 0; index < localStorage.length; index++) {
    ordersM[index] = JSON.parse(localStorage.getItem(localStorage.key(index)));

    // console.warn(`№${index+1}: Date= ${ordersM[index].timestamp}, Sum=${ordersM[index].fullSum}`);

    letters += `<li data-order-id=\"${ordersM[index].id}\">` + '№'+(index+1)+' Time:'+ ordersM[index].timestamp +' Sum:'+ ordersM[index].fullSum + "</li>";
    btns_line+= `<button data-order-id=\"${ordersM[index].id}\" class="inner">Rem${index+1}</button> \n <br>`                            

    
  }
  
  cat.innerHTML = letters;
  removeKeys.innerHTML = btns_line;

  buttonOrdersShow.dataset.showingVar = 'to ordering';
  buttonOrdersShow.innerText='back to Store';
  
};

function removeOrder(ev){
  const remTarget = ev.target.dataset.orderId;
  // console.warn('ID 4 rem =', remTarget);  
  // console.log('deleteEl=', ordersM.splice(ordersM.find(obj => obj.id === remTarget),1));
    buttonOrdersShow.dataset.showingVar = 'info';
  if(confirm(`Do you want Remove order #${remTarget} ?`)) {
    localStorage.removeItem(remTarget)
    showStoreOrders();
  }
}

function clrscr(){
  
  form.setAttribute('hidden','');
  prod.setAttribute('hidden','');
  descript.setAttribute('hidden','');
  buttonBasket.setAttribute('hidden','');
  buttonBuy.setAttribute('hidden','');
  message.setAttribute('hidden','');

}


cat.addEventListener("click", handlerCategoryClick);
prod.addEventListener("click", handlerProductClick);
buttonBuy.addEventListener("click",handlerButtonBuy);
buttonBasket.addEventListener("click",handlerButtonBasketClick);
buttonOrdersShow.addEventListener("click",showStoreOrders);
removeKeys.addEventListener("click",removeOrder);
