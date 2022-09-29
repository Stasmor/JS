const ObjConst = function () {
    this.name='fromConstrucktor 1'
    this.met1=function(){
        console.log('Meth1 write:',this.name)}
}

const  obj1 = new ObjConst();
let ttt = prompt('Type any...','test');
obj1.name = ttt
obj1.met1();