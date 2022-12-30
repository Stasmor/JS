//import { addingOrder } from "./index.js";

// import {products} from './products.js';
// import {orderBase } from "./index.js";


  // import {meth4Orders} from './meth4Orders.js';
  // const tmp = new meth4Orders
  // const addingOrder = tmp.addingOrder


console.warn('inside product.js');

 window.addEventListener('popstate',()=>{ window.location.reload()});//forward/backwards go+

  (function ins(){
    const sttObj={}
    Object.assign( sttObj ,history.state);
    const productSel = document.querySelector('.product');
    console.warn('in1');
    console.log('sttobj=',sttObj);
    shwProd(sttObj,productSel)
    console.warn('in2');
  })();

//  function addingOrder(order){
//   const tmstamp = new Date();

//    let orderNum = order.id +'_'+ String(tmstamp.valueOf()).slice(6,);// create unic ORDER ID
//    //localStorage.setItem(orderNum,JSON.stringify(order,null,4));
//    orderBase[orderNum] = JSON.stringify(order,null,4)//pushing this order to object of orders
// }
///////////////////// optionaly - localstorage //////////////////////////// 
function showAllOrders(){
  //  localStorage.clear();
   for (let index = 0; index < localStorage.length; index++) {
    console.log(JSON.parse(localStorage.getItem(localStorage.key(index))));
  }
}
///////////////////////////////////////////////////////////////////////////

function shwProd(obj,product){

    product.childNodes[1].innerText = obj.name;
    product.childNodes[3].insertAdjacentHTML('afterbegin',`<img src=${obj.look} alt="${obj.name}" width = 200 height = auto></img>`);
    product.childNodes[5].innerText = obj.price+' $';
    product.childNodes[7].innerText = 'Add to cart';
    product.childNodes[7].addEventListener("click",(ev)=>{
        addingOrder(obj);
        history.back();
      }); 
      console.warn('in3');


    //   function addProd(model,valObj){
    //     const prodModelNew = model;
    //     //const prodModelNew = (qntr >= 1) ? model.cloneNode(true): model;//cloning
    //     prodModelNew.setAttribute('data-id',valObj.id);
    //     prodModelNew.childNodes[0].innerText = valObj.name;
    //     prodModelNew.childNodes[1].insertAdjacentHTML('afterbegin',`<img src=${valObj.look} alt="${valObj.name}" width = 200 height = auto></img>`); //innerText = valObj.name;//image
    //     prodModelNew.childNodes[2].innerText = valObj.price+' $';
    //     if(!valObj.isActive) prodModelNew.childNodes[4].setAttribute('hidden',''); else prodModelNew.childNodes[4].removeAttribute('hidden');
    //     prodModelNew.addEventListener("click",(ev)=>{
    //         // console.log(ev.target.tagName);
    //         if(ev.target.tagName === 'BUTTON' )  {
    //             console.warn('this is a btn!!!');
    //             addingOrder(valObj);
    //         } else {
    //             redirect(valObj)
    //         }
    //     }); 
    //     // prodModelNew.childNodes[4].addEventListener("click",()=>{redirect(valObj)}); 
    //     prodList.appendChild(prodModelNew);
    //     qntr+=1;
    // }






    ///////////////////// optionaly - localstorage ////////////////////////////  
    // const btn = document.createElement('button')
    // btn.textContent = 'showOrders';
    // btn.setAttribute("class", "product__btn");
    // product.appendChild(btn).addEventListener("click",()=>{showAllOrders()});
    ///////////////////////////////////////////////////////////////////////////
    console.warn('in4');
      
 }
 