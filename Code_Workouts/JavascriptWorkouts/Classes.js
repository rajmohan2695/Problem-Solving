// Classes in Javascript

class UserDetail {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    display(){
        console.log(`The name is ${this.name} and the age is ${this.age}`)
    }
}

let johan = new UserDetail("Johan",19);

console.log(johan.name);            // Johan

console.log(johan.age);             // 19

johan.display();                    // The name is Johan and the age is 19

/*---------------------------------------------------------------*/

// Calling a function inside the constructor

class UserDetail {
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.display();             // The name is Johan and the age is 19
    }

    display(){
        console.log(`The name is ${this.name} and the age is ${this.age}`)
    }
}

let johan = new UserDetail("Johan",19);

/*---------------------------------------------------------------*/