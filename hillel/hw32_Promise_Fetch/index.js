/*
Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, 
то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
Зробити завдання використовуючи проміси, перехопити помилки.
*/

/// 2 ways for solve

 const numInput = document.querySelector('#numInpt');
 const submit = document.querySelector("#submt");
 const getComment = document.querySelector('#getCom');
 const outPost = document.querySelector('#outPost');
 const outComments = document.querySelector('#outComm');

 // 1-st way
 
//   let postNum = 0;
  
//  const takePostN = function(){
//      postNum = numInput.value;
//      // console.warn('numinput=',postNum);
//      fetch(`https://jsonplaceholder.typicode.com/posts/${postNum}`)
//          .then(response => response.json())
//          .then(json =>  {outPost.innerHTML = `<pre>${JSON.stringify(json,null,4)}<pre>`}) //`<pre>${orderStr}<pre>`
//          .then(getComment.removeAttribute('hidden'))// if have post #, then unhide getComment
//          .catch(err => alert(`catch+ ${err}`))
  
//  }
 
//  const takeComment4id = function () {
//      fetch(`https://jsonplaceholder.typicode.com/posts/${postNum}/comments`)
//         .then(response => response.json())
//         .then(json =>  {outComments.innerHTML = `<pre>${JSON.stringify(json,null,4)}<pre>`}) //`<pre>${orderStr}<pre>`
//         .then(getComment.setAttribute('hidden',''))// if have comments #, then hide getComment
//         .catch(err => alert(`catch+ ${err}`))
//  }
 
//  submit.addEventListener("click",takePostN);
//  getComment.addEventListener("click",takeComment4id);

// 2-nd way

const getData = function(url, callback){
    fetch(url)
        // .then(response => {if(response.status === 200) { return response.json()} else throw 'error';})
        .then(response=> {
            if(!response.ok) {
             throw new Error(`fetch err:${response.status}`);
            }
            return response.json();
        })
        .then(json => { callback(`<pre>${JSON.stringify(json,null,4)}<pre>`)}) 
        .catch(err => alert(`catch+ ${err}`))
}

const takePostN = function(res){
    outPost.innerHTML = res;    
    getComment.removeAttribute('hidden');// if have post #, then unhide getComment
    outComments.innerHTML='';// clr comment geted bfr
}

const takeComment4id = function (res) {
    outComments.innerHTML = res;
    getComment.setAttribute('hidden','');// if have comments #, then hide getComment
}

submit.addEventListener("click",()=>{ if(Number(numInput.value)!== 0) getData(`https://jsonplaceholder.typicode.com/posts/${numInput.value}`,takePostN); else alert('wrong input number')});
getComment.addEventListener("click", ()=>{ if(Number(numInput.value)!== 0) getData(`https://jsonplaceholder.typicode.com/posts/${numInput.value}/comments`,takeComment4id); else alert('wrong input number')});

