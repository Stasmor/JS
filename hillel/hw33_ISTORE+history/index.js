import {products} from './products.js';

// import {meth4Orders} from './meth4Orders.js';
// console.warn('inside 0 index.js');
// const tmp = new meth4Orders
// const addingOrder = tmp.addingOrder


export const orderBase = {};




 let qntr=0;
// const order = {};

const prodList = document.querySelector('#prodList');

export function addingOrder(order){  //експортю для викор-ння по кнопці у product.js
    const tmstamp = new Date();
  
     let orderNum = order.id +'_'+ String(tmstamp.valueOf()).slice(6,);// create unic ORDER ID
    
     orderBase[orderNum] = JSON.stringify(order,null,4)//pushing this order to object of orders
    //  localStorage.setItem(orderNum,JSON.stringify(order,null,4));
    console.log({orderBase});
  }

function addProd(model,valObj){
    const prodModelNew = model;
    //const prodModelNew = (qntr >= 1) ? model.cloneNode(true): model;//cloning
    prodModelNew.setAttribute('data-id',valObj.id);
    prodModelNew.childNodes[0].innerText = valObj.name;
    prodModelNew.childNodes[1].insertAdjacentHTML('afterbegin',`<img src=${valObj.look} alt="${valObj.name}" width = 200 height = auto></img>`); //innerText = valObj.name;//image
    prodModelNew.childNodes[2].innerText = valObj.price+' $';
    if(!valObj.isActive) prodModelNew.childNodes[4].setAttribute('hidden',''); else prodModelNew.childNodes[4].removeAttribute('hidden');
    prodModelNew.addEventListener("click",(ev)=>{
        // console.log(ev.target.tagName);
        if(ev.target.tagName === 'BUTTON' )  {
            console.warn('this is a btn!!!');
            addingOrder(valObj);
        } else {
            redirect(valObj)
        }
    }); 
    // prodModelNew.childNodes[4].addEventListener("click",()=>{redirect(valObj)}); 
    prodList.appendChild(prodModelNew);
    qntr+=1;
}

// function addProd(where,valObj){
//     let str=`
//     <div 'data-id=${valObj.id} class="product">
//         <div class="product__title">${valObj.name}</div>
//         <div class="product__image">${valObj.name}</div>
//         <div class="product__price">${valObj.price}</div>
//         <button class="product__btn">Add to cart</button>
//         </div>
//         `
//         where.insertAdjacentHTML('afterend',str);

//    console.warn(str);
// }

function addStruct(parent){
    const attr = ["product__title","product__image","product__price","product__btn"];
   
    const mainDiv = document.createElement('div')
    mainDiv.setAttribute('class',"product");

    let fragment = document.createDocumentFragment();
    for (const iterAtr of attr) {
        let itemName = document.createElement('div');
        itemName.setAttribute('class', iterAtr);
        fragment.appendChild(itemName);
    }
    const btn = document.createElement('button')
    btn.textContent = 'Add to cart';
    btn.setAttribute('class', attr[3]);
    
    mainDiv.appendChild(fragment);
    mainDiv.appendChild(btn);

    console.warn('inside addStruct()');
    return parent.appendChild(mainDiv);
}

console.warn('inside index.js');
showActiveProd();

function redirect(item) { 
    history.pushState(item,'redirect','./product.html');
    history.go(0);  

    //  location.assign('./product.html')
    console.warn('after go!!!$$$$$');
    console.warn('after go!!!$$$$$');
    console.warn('after go!!!$$$$$');
    console.warn('after go!!!$$$$$');
    console.warn('after go!!!$$$$$');
    console.warn('after go!!!$$$$$');
    
}

function showActiveProd(){
    products.forEach((elem)=>{
        console.log('before show actProd');
        addProd(addStruct(prodList), elem);
        console.log('after show actProd');
        // if(elem.isActive) addProd2(prodModel,elem);
        // if(elem.isActive) addProd(prodModel,elem);
    })
}



// // third part of lesson task
// import MyCustomElement from './oop.js'
// const newObjEl = new MyCustomElement("_","div","MyCustomElement").addClass("products_new").addId("prodList_new").removeAttr("class")
// newObjEl.addAttr('type','text') 
// document.querySelector('.container').insertAdjacentElement('beforeend',newObjEl.newElem)//insert after all

// console.warn('***end.index.js');