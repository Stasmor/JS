export function addingOrder(order,list){  //експортю для викор-ння по кнопці у index та product.js
    const tmstamp = new Date();
    
    let orderNum = order.id +'_'+ String(tmstamp.valueOf()).slice(6,);// create unic ORDER ID
    list[orderNum] = JSON.stringify(order,null,4)//pushing this order to object of orders

    localStorage.setItem(orderNum,JSON.stringify(order,null,4));
  }