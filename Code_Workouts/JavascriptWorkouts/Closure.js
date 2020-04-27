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

