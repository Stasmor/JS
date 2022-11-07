/*ДЗ 20. Створюємо сутності

Створити сутність людини:
імʼя
вік
Метод виведення даних
Створити сутність автомобіля:
Характеристики автомобіля окремими властивостями
Методи:
Виведення на екран даних про цей автомобіль
Привласнення цього автомобіля власнику (записати в автомобіль обʼєкт власника)

Що потрібно зробити

1. Створити клас Людина
    властивості 
        імʼя
        вік
    методи
        конструктор, який приймає два параметри: імʼя та вік
        метод, який виводить у консоль інформацію про людину
2. клас Автомобіль
    властивості 
        марка, модель, рік виписку, номерний знак (або на Ваш розсуд)
        власник
    методи 
        конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
        присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
        метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина 
        для виведення інформації про власника


в якості демонстраціїї створити:
    декілька екземплярів класу Людина
    декілька екземплярів класу Автомобіль
    присвоїти власників автомобілям
    */

class Human {
    constructor(name,age){
        this.name=name ;
        this.age=age;
    }
    showHuman(){
        console.log(`  Name: ${this.name}, age:${this.age}`);//this.name this.age
    }
}

class Car {
    constructor(conc, model, year, regNum) {
        this.concern = conc;
        this.model = model;
        this.madeYear = year;
        this.regNumber = regNum;
        this.owner = {name:null,age:0}

        
    }
    setOwner(human){
        if(human.age >= 18){
            this.owner = human;
            this.regNumber ='AT'+Math.round(Math.random()*643) +'EE'

            if(this.concern === 'БТР' && human.name === 'Валерій Залужний') this.regNumber = 'HIMARS'; //it's a joke, sorry ;-)
            
        }else{
            console.log(`Вік: ${human.name} не дозволяє володіти машиною, зачекайте ${18-human.age} років`);
            this.owner.name = null;//now car w-o owner
            this.owner.age = 0;
            this.regNumber = null
        }
    }



    showInfo(){
        
        console.group('Відомості про машину:')
        
        console.log('Марка:',this.concern);
        console.log('Модель:',this.model);
        console.log('рік випуску:',this.madeYear);
        console.log('реє-й номер:',this.regNumber);
        
        console.groupEnd();
        if(this.owner.name !== null && this.owner.__proto__.hasOwnProperty('showHuman')){//+checking null value of 'owner.name' and just check present method 'showHuman' in owner object
            this.owner.showHuman();           
        }else{
            console.log('Власник на даний момент відсутній');
        }

    };


}    

let listAllProperties = function(o){

    var objectToInspect;
    var result = [];
  
    for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }
  
    return result;
  };

    let Car1 = new Car('Volvo','V70++',2024,'empty');
    let Car2 = new Car('Renault','Sandero',2022,'empty');
    let Car3 = new Car('БТР','\"4\"',22,'HIMARS');
    let Car4 = new Car('ЗАЗ','965',1842,'empty');

    let hum0 = new Human('Zla Marichka',17);
    let hum1 = new Human('Валерій Залужний',49);
    let hum2 = new Human('Богдан Хмельницький',249);
   
     Car1.setOwner(hum2); 
     Car1.showInfo();

    Car1.setOwner(hum1);
    Car1.showInfo();

    Car2.setOwner(hum2);
    Car2.showInfo();

    Car2.setOwner(hum0);
    Car2.showInfo();

    Car3.setOwner(hum1);
    Car3.showInfo();

    Car4.showInfo();//show car without owner 
