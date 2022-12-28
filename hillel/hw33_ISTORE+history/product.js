window.addEventListener('popstate',()=>{ window.location.reload()});//forward/backwards go

  (function ins(){
    const sttObj={}
    Object.assign( sttObj ,history.state);
    const productSel = document.querySelector('.product');
    shwProd(sttObj,productSel)
  })();

function addingOrder(order){
  const tmstamp = new Date();

   let orderNum = order.id +'_'+ String(tmstamp.valueOf()).slice(6,);// create unic ORDER ID
   localStorage.setItem(orderNum,JSON.stringify(order,null,4));
}
///////////////////// optionaly - localstorage //////////////////////////// 
function showAllOrders(){
   for (let index = 0; index < localStorage.length; index++) {
    console.log(JSON.parse(localStorage.getItem(localStorage.key(index))));
  }
}
///////////////////////////////////////////////////////////////////////////

function shwProd(obj,product){

    product.childNodes[1].innerText = obj.name;
    product.childNodes[3].insertAdjacentHTML('afterbegin',`<img src=${obj.look} alt="${obj.name}" width = 200 height = auto></img>`);
    product.childNodes[5].innerText = obj.price+' $';
    product.childNodes[7].innerText = 'Buy';
    product.childNodes[7].addEventListener("click",()=>{addingOrder(obj)}); 

    ///////////////////// optionaly - localstorage ////////////////////////////  
    const btn = document.createElement('button')
    btn.textContent = 'showOrders';
    btn.setAttribute("class", "product__btn");
    product.appendChild(btn).addEventListener("click",()=>{showAllOrders()});
    ///////////////////////////////////////////////////////////////////////////

      
 }
 