
export default class MyCustomElement {
    constructor(where,elem,content){
        this.newElem = document.createElement(elem);
        this.newElem.textContent=content;
        // console.warn(this.newElem );
        return this
    }
    addClass(value){
        this.newElem.setAttribute('class', value);
        // console.warn('afeter addClass=',this.newElem)
        return this
    }
    addId(value){
        this.newElem.setAttribute('id', value);
        // console.warn('afeter addId=',this.newElem)
        return this
    }
    addAttr(name,value){
        this.newElem.setAttribute(name, value);
        //  console.warn('afeter addAttr=',this.newElem)
        return this
    }
    removeAttr(value){
        this.newElem.removeAttribute(value);
        
        // console.warn('afeter removeId=',this.newElem)
        return this
    }
}
