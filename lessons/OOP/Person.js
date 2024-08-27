

class Person{

    constructor(name, age){
        this._name = name;
        this._age = age;
    }


    //Setter

    set name(name){
        this._name = name;
    }

    get name(){
return this._name;
    }
}

let teo = new Person();
teo._a="Tuan"

console.log(teo._a);
console.log(teo);