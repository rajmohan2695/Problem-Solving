// Closures

function retirement(retirementAge){
    var message = ' years left for retirement'
    return function (age) {
        let remainingYears = retirementAge - age;
        console.log(remainingYears + message)
    }
}

const retirementUS = retirement(66);
const retirementSpain = retirement(65);

retirementUS(40);           // 26 years left for retirement
retirementSpain(40);        // 25 years left for retirement

/*---------------------------------------------------------------*/

// Closure : The execution context is snapped at the point while the closure is returned

let a = 20;

function foo() {
    var k = 'value ';
        return function(){
            console.log(k + a)
        }
}

let callBack = foo();

callBack();     // value 20

a = 30;     // 'Changing the value of a'

callBack();     // value 30

/*---------------------------------------------------------------*/

// Closure with private variable

let a = 20;

function foo() {
    let b = a;
    var k = 'private ';
        return function(){
            console.log(k + b)
        }
}

let callBack = foo();

callBack();     // private 20

a = 30;     // 'Changing the value of a'

callBack();     // private 20

/*---------------------------------------------------------------*/