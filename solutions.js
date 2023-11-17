//************ setAlarm */
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

console.log(setAlarm(true, true))
console.log(setAlarm(false, false))
console.log(setAlarm(false, true))
console.log(setAlarm(true, false));

//************ Count Odd Numbers */
 //Write a function named oddNumberCount which receives one argument that should be a number. 
 //The function should return how many positive odd numbers there are below the number passed into the argument.


// declared a variable that can change value with let. count is equal to 0
// created a function that takes num as a parameter
// created a for loop with i = 1 and as long as i is less than the argument we pass in the function 'i' will increase by 2. 
// it is important to add 2 to i as this creates the amount of odd numbers between 1 and our arguement.
// As long as our for loop is true we will increse count by 1. This is just counting how many times the loop has run essentially
// we return the count, which ends the functions execution and gives a value to be returned. Console log the function with an arguement
let count = 0

function oddNumberCount(num) {
    for(let i = 1; i < num; i+=2) {
        count++
    } return count
 }
 
 
 console.log(oddNumberCount(16))