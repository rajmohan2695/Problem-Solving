// Contructors in Javascript

function SmallUser() {

    if(!new.target){                // used to find whether the function is called without 'new' keyword
        return { name : 'Kaushik' } // returns the object
    }

    this.name = "John";

    return 5;               // <-- returns this ignoring the primitive value 5
}

let one = SmallUser();      // Called without 'new' keyword
console.log( one.name );   // Kaushik
let two = new SmallUser;   // Both new SmallUser() and new SmallUser are same if there is no parameter
console.log( two.name );         // John

/*---------------------------------------------------------------*/