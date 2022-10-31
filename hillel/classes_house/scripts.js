

class Human {
    constructor(name,gender){
        this.name=name ;
        this.gender=gender;
    }
}

class Flat{
    humans = [];
    addOccup(occup){   
        this.humans.push(occup); //new Human(occupName,gender)
    };
}

class House{
    constructor(flatQtt) {
        this.flatQtt = flatQtt;
        this.flats = [];
    };

    addFlat(flatIn){
        if(this.flats.length < this.flatQtt ){
            // this.flats.push(newFlat(flatIn));  //заповнення массиву глибокими копіями обьекту квартири методом рекурсії(newFlat())
            this.flats.push(JSON.parse(JSON.stringify(flatIn)));  //заповнення массиву копіями обьекту квартири..
        } else{
            alert(`House is full, can\'t add new Flat!`)
        }
    };

}

let human1 = new Human('Stanislav','M');
let human2 = new Human('Tanya','F');
let human3 = new Human('Pavlo','M');
let human4 = new Human('Mark','M');
//let dog = new Human('Wishbone','DOG');

let flat_1 = new Flat();
let flat_2 = new Flat();

 flat_1.addOccup(human1);
 flat_1.addOccup(human2);

 flat_2.addOccup(human3);
 flat_2.addOccup(human4);
  //flat_2.addOccup(dog);//


let House1 = new House(2);
House1.addFlat(flat_1);
House1.addFlat(flat_2);


console.log('After:',House1);

