/*Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
При натисканні на смайл - під ним змінюється значення лічильника.
Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.*/

const reactions = ["👍", "👎", "💚", "💩", "🤣"];

let rating = null;
if(!localStorage.getItem('raitngArr')) {
  rating =[0,0,0,0,0];
}else{
  rating = localStorage.getItem('raitngArr').split(','); //parse memory string to array 
}
 
//localStorage.removeItem('raitngArr');// remove storage rating

// let IDn = 0;//number counter for set ID 

const container = document.querySelector(".container");

const reactionElements = reactions.map((reaction,index) => {

  const wrapper = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = reaction;

  // button.setAttribute('id',`${IDn}`); //or case with ID on button
  
  const counter = document.createElement("div");
  counter.classList.add("counter");
  
  // counter.innerText = 0; 
  counter.innerText = rating[index];
  wrapper.append(button, counter);
  
  // IDn+=1; //or case with ID on button

  return wrapper;
});

reactionElements.forEach((elem) => container.appendChild(elem));

container.addEventListener('click',(ev)=>{
  
  const target = (ev.target.innerText); //case with inner text of button
  const nowNum=reactions.indexOf(target);//case with inner text of button
  
  if(nowNum === -1) return;

  // const nowNum=ev.target.id; //or case with ID on button

  rating[nowNum] = +rating[nowNum]+1;

  localStorage.setItem('raitngArr',rating);

  reactionElements[nowNum].lastChild.innerText = rating[nowNum] ;
  //reactionElements[nowNum].lastChild.innerText = Number(reactionElements[nowNum].lastChild.innerText) + 1 ;

});
