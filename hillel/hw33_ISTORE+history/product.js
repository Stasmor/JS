import {addingOrder} from './meth4Orders.js';

window.addEventListener('popstate',()=>{ console.warn('inside product.js_ev_popstate'); window.location.reload()});//forward/backwards go+

let sttObj = {};

(function (){
    sttObj = history.state;
    const productSel = document.querySelector('.product');
    // console.log('sttobj.base=',sttObj.base);
    // console.log('sttobj.item=',sttObj.item);
    if(sttObj.item === null && sttObj.base !== null) showListOrders(sttObj.base); else  shwProd(sttObj.item,productSel);
  })();
  

  function showListOrders(list) { 
    let letters='Order:<ul>';
    const place = document.querySelector('.product');

    place.childNodes[1].setAttribute('hidden','')
    place.childNodes[3].setAttribute('hidden','')
    place.childNodes[5].setAttribute('hidden','')
    place.childNodes[7].setAttribute('hidden','')

    const keysList = Object.keys(list);
    // console.log('row=',keysList);
    for (let i = 0; i < keysList.length; i++) {
      // console.log('val=',list[keysList]);
     letters += `<li data-order-id=\"\">` + list[keysList[i]] + "</li>";
  }
  letters +='</ul>'
  // console.log('list=',letters);
  place.insertAdjacentHTML('afterbegin',letters)
};

///////////////////// optionaly - localstorage //////////////////////////// 
// function showLSorders(){
//   //  localStorage.clear();
//   for (let index = 0; index < localStorage.length; index++) {
//     console.log(JSON.parse(localStorage.getItem(localStorage.key(index))));
//   }
// }
///////////////////////////////////////////////////////////////////////////

function shwProd(obj,product){

    product.childNodes[1].innerText = obj.name;
    product.childNodes[3].insertAdjacentHTML('afterbegin',`<img src=${obj.look} alt="${obj.name}" width = 200 height = auto></img>`);
    product.childNodes[5].innerText = obj.price+' $';
    product.childNodes[7].innerText = 'Add to cart';
    product.childNodes[7].addEventListener("click",(ev)=>{
        addingOrder(sttObj.item,sttObj.base)
      // console.warn('aft pushing',sttObj.base);
        history.pushState(sttObj.base,'redirect','./index.html');//Object.assign(sttObj.base,obj)//(sttObj.base.push(obj))
        history.go(0); 
      }); 
    
    
    ///////////////////// optionaly - localstorage ////////////////////////////  
    // const btn = document.createElement('button')
    // btn.textContent = 'showOrders';
    // btn.setAttribute("class", "product__btn");
    // product.appendChild(btn).addEventListener("click",()=>{showLSorders()});
    ///////////////////////////////////////////////////////////////////////////
     
 }
 