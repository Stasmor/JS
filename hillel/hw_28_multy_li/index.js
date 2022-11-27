/**
 * Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел і генерує список з елементів:
 * Якщо за числом йде підмасив, додавати це число, потім крапку, а потім поточний елемент підмасиву. Ви можете розраховувати на коректність вхідних данинх - перед підмасивом обовʼязково має бути число.
 */
const listIn = [1,2, [4, [5] ,6], 7,8,9, [10, [11,12], 13], 14];
    
let lastViewEl = [];
let level=0;
let result = [];
const arrUL = [];


const UL = document.querySelector("#UL");
    
const listView = function(ul,startEl,list){

    list.forEach((elm)=>{
        
        if(typeof(elm)!=="object") {
            if(startEl === ""){
                lastViewEl[level] = elm;
            }else{
                lastViewEl[level] = startEl +'.'+ elm; 
            }

            li = document.createElement('li');
            li.append(lastViewEl[level]);
            ul.append(li);
        }
        else{
            level+=1;
            ul.append(listView(document.createElement('ul'),lastViewEl[level-1],elm));
            level-=1;
        }

    } );
    // console.log('Out=',ul.innerHTML);
     return ul;
}

listView(UL,'',listIn);
