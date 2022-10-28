/*
Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.
Додати можливість створювати нові будинки на певну кількість квартир.
Не обмежувати кількість мешканців у квартирі
*/
const Human = function(name,gender) {
    this.name=name ,
    this.gender=gender
}
const Flat = function(num){
    this.addrFN=num,
    this.humans = []
}
const House = function(addrHN,flatQtt){
    this.addrHN = addrHN,
    this.flatQtt = flatQtt
    this.flats = [];
    
    this.fillHouseEmpty = function(flatIn){
      this.flats.push('downstage, 0F');//підвал як варіант, щоб зберегти індекс нуль під щось цільове
      for (let index = 1; index <= this.flatQtt; index++) {
          this.flats.push(JSON.parse(JSON.stringify(flatIn)));  //заповнення массиву копіями обьекту квартири..Object.assign({},flatIn)
          this.flats[index].addrFN = index;
      }
    };

    this.occupAdd = function(name,gender,addr){  
        return new Human(name,gender,addr);
    };
    this.putOccupToHome = function(flatNum,occup){
        if(flatNum > this.flatQtt) {console.log(`error: number flat: ${flatNum} is empty!`); return -1;}
        this.flats[flatNum].humans.push(occup);
        return 1;
    };
}



let flatNull = new Flat(); // створення обєкту порожньої квартири

let h1 = new House(1,5); // cстворення Будинку №1 на 5 квартир
h1.fillHouseEmpty(flatNull,5); // наповненя Будинку створенними раніше квартирами

/*створення мешканців*/
let l1 = h1.occupAdd('Stas','M')
let l2 = h1.occupAdd('Tanya','F')
let l3 = h1.occupAdd('Viktor','M')
let l4 = h1.occupAdd('Olga','F')
let l5 = h1.occupAdd('Wishbone','DOG')

/*Заселення людей по квартирам(№ квартири, мешканець)*/
h1.putOccupToHome(1,l1);
h1.putOccupToHome(1,l2);
h1.putOccupToHome(2,l3);
h1.putOccupToHome(3,l4);
h1.putOccupToHome(1,l5);
//h1.putOccup(6,l5);//check wrong number

console.log(h1);

