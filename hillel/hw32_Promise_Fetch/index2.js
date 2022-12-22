const numInput = document.querySelector('#numInpt');
const submit = document.querySelector("#submt");
const getComment = document.querySelector('#getCom');
const outPost = document.querySelector('#outPost');
const outComments = document.querySelector('#outComm');

async function getData(url){
    let response = await fetch(url)    
    let ftch = await response.json(); 
    let ftch2 = `<pre>${JSON.stringify(ftch,null,4)}<pre>` ;
    // console.warn(ftch2);
    return ftch2;
} 

const takePostN = async function(url){
    outPost.innerHTML = await getData(url).catch( err => console.error(`Fetch problem: ${err.message}`) );    
    getComment.removeAttribute('hidden');// if have post #, then unhide getComment
    outComments.innerHTML='';// clr comment geted bfr
}

const takeComment4id = async function (url) {
    outComments.innerHTML = await getData(url).catch( err => console.error(`Fetch problem: ${err.message}`) );
    getComment.setAttribute('hidden','');// if have comments #, then hide getComment
}

submit.addEventListener("click",()=>{ if(Number(numInput.value)!== 0) takePostN(`https://jsonplaceholder.typicode.com/posts/${numInput.value}`); else console.warn('wrong input number')});
getComment.addEventListener("click", ()=>{ if(Number(numInput.value)!== 0) takeComment4id(`https://jsonplaceholder.typicode.com/posts/${numInput.value}/comments`); else console.warn('wrong input number')});



