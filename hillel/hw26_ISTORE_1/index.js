  /*Дано 3 блоки
В лівій частині сторінки - перелік категорій.
При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
Клік на товар - інформацію про товар у правому блоці.
В інформації товару - кнопка “купити”. При натисканні на “купити” з'являється повідомлення, що товар куплений і
 повернення у вихідний стан програми (коли відображається лише список категорій).
*/
const categories = [
    {
      id: 1,
      category: "Toys",
    },
    {
      id: 2,
      category: "Sports",
    },
    {
      id: 3,
      category: "Meat",
    },
    {
      id: 4,
      category: "Grocery",
    },
    {
      id: 5,
      category: "Garden",
    },
  ];
  
  const products = [
    {
      id: 1,
      category_id: 2,
      name: "Eggplant - Asian",
      description:
        "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    },
    {
      id: 2,
      category_id: 5,
      name: "Jagermeister",
      description:
        "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    },
    {
      id: 3,
      category_id: 2,
      name: "Wine - Lou Black Shiraz",
      description:
        "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    },
    {
      id: 4,
      category_id: 3,
      name: "Beef - Ox Tongue",
      description:
        "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    },
    {
      id: 5,
      category_id: 3,
      name: "Beef - Bones, Marrow",
      description:
        "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    },
    {
      id: 6,
      category_id: 2,
      name: "Appetizer - Shrimp Puff",
      description:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    },
    {
      id: 7,
      category_id: 4,
      name: "Appetizer - Shrimp Puff",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    },
    {
      id: 8,
      category_id: 1,
      name: "Ecolab - Ster Bac",
      description: "Integer ac leo. Pellentesque ultrices mattis odio.",
    },
    {
      id: 9,
      category_id: 4,
      name: "Vegetable - Base",
      description:
        "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    },
    {
      id: 10,
      category_id: 3,
      name: "Flour - Corn, Fine",
      description:
        "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    },
    {
      id: 11,
      category_id: 1,
      name: "Beer - Guiness",
      description:
        "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: 12,
      category_id: 4,
      name: "Napkin White",
      description:
        "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    },
    {
      id: 13,
      category_id: 2,
      name: "Oil - Truffle, White",
      description:
        "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    },
    {
      id: 14,
      category_id: 5,
      name: "Wine - Puligny Montrachet A.",
      description:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    },
    {
      id: 15,
      category_id: 5,
      name: "Tomatoes Tear Drop",
      description:
        "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    },
  ];
/////////////////////////////////////////////////////////////////////////////////////////
const cat = document.querySelector("#categories");
const prod = document.querySelector("#products");
const descript = document.querySelector("#description");
const message = document.querySelector("#message");
const button = document.querySelector("#buy-button");
  
function categoryUpd(list) {
  // console.log(list);    
  var letters='Category:';
  for (var i = 0; i < list.length; i++) {
      letters += `<li data-category-id=\"${i+1}\">` + list[i].category + "</li>";
  }
 cat.innerHTML = letters;

};
categoryUpd(categories);
///////////////////////////////////////////////////////////////////////

function productsUpd(list,cat_id) { 
  var letters='Products:';
  for (var i = 0; i < list.length; i++) {
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
  descript.removeAttribute('hidden');
  button.removeAttribute('hidden');
};

function handlerButtonClick(){

  message.removeAttribute('hidden');
  window.setTimeout(()=>{
    prod.setAttribute('hidden','');
    descript.setAttribute('hidden','');
    button.setAttribute('hidden','');
    message.setAttribute('hidden','');
    categoryUpd(categories);
  },"2500");//showing message of ordering, then going to start
}

cat.addEventListener("click", handlerCategoryClick);
prod.addEventListener("click", handlerProductClick);
button.addEventListener("click",handlerButtonClick);
