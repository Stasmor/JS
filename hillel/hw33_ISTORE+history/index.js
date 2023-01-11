import {products} from './products.js';//,orderBase
import {addingOrder} from './meth4Orders.js';


 let orderBase =  [];
 let flagPresents = null;
window.addEventListener('popstate',()=>{ console.warn('inside product.js_ev_popstate'); window.location.reload()});//forward/backwards go+

// localStorage.clear();

 let qntr=0;


const prodList = document.getElementById('prodList');


(function(){
    const sttObj=(history.state===null) ? null:Object.assign({},history.state);
   
    if(history.state !== null){
        orderBase = history.state;
        history.pushState(null,'','');
        addKeyShowFullOrder();
     }
  })();

function addKeyShowFullOrder(){
    let ordPlace = document.querySelector(".title__link");//adding order viewing with btn click
    let a = document.createElement('button');
    a.innerText='track order';
    ordPlace.insertAdjacentElement('afterend',a)
    a.addEventListener('click',()=>{redirect(null,orderBase)})
    flagPresents = 1;
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
            if(flagPresents === null) addKeyShowFullOrder();//
            addingOrder(valObj,orderBase);
        } else {
            redirect(valObj,orderBase)
        }
    }); 
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
    // console.warn(`parent in addStruct=${parent}`);
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

    // console.warn('inside addStruct()+parent',parent);
    return parent.appendChild(mainDiv);
}

if(history.state===null && prodList!==null) showActiveProd(); 

function redirect(item,orderList) { 
    // console.warn('in redirect...');
    history.pushState({item, base: orderList},'redirect','./product.html');
    history.go(0);     
}

function showActiveProd(){
    console.log('in showActiveProd');
    products.forEach((elem)=>{
        console.log('before show actProd');
        addProd(addStruct(prodList), elem);
        console.log('after show actProd');
        // if(elem.isActive) addProd2(prodModel,elem);
        // if(elem.isActive) addProd(prodModel,elem);
    })
}


// // third part of lesson task
import MyCustomElement from './oop.js'
const newObjEl = new MyCustomElement("_","div","MyCustomElement").addClass("products_new").addId("prodList_new").removeAttr("class")
newObjEl.addAttr('type','text') 
document.querySelector('.container').insertAdjacentElement('beforeend',newObjEl.newElem)//insert after all

// console.warn('***end.index.js');
