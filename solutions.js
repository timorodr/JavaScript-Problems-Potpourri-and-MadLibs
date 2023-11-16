// Write a function named setAlarm that has two arguments.

// The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
// The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)



// We create a function with 2 parameters 'employed' and 'vacationing'
// We create an 'if' statement that read if employed and NOT vacationing 
// If those conditions are met we want to return true
//If not we want to return false
//Console.log the function name and the arguments the homework requests of use and we log TRUE
function setAlarm(employed, vacationing) {
    if(employed && !vacationing) {
        return true
    } else {
        return false
    }
}
console.log(setAlarm(true, false));

