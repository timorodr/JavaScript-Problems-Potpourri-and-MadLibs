//***************************************** setAlarm */

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

//***************************************** Count Odd Numbers */

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

//***************************************** Disemvoweling Trolls */

// We created a function that accepts str as a parameter
// Next we declared a variable that takes our parameter(which we will pass in an arguement later) and replaces every instances 'g'
// of and all cases 'i' of the declared replacement values or conditions described by the bracket notation and passes an empty value
// We next return the variable to end function exection and console a string as our argument.
function trollsBeGone(str) {
    let vowelsRemoved = str.replace(/[aeiouAEIOU]/gi, '')
    return vowelsRemoved
}
console.log(trollsBeGone("This website is for losers LOL"))

//***************************************** Bank Account Summary */

// We created our object with 4 key-value pairs of our banking information
// We then created our function named bankAccountSummary
// We create a variable set to 0 for the sum of our bankInfo
// We utilized a for...in loop to create a variable 'account' and loop through each property name in our obj
// We then added bankInfo[account] which is the value of each property name we iterated through and added it to sum
// We return sum to stop execution of the function and console log our function with our obj passed as an arguement.
const bankInfo = {
    savings: 9000,
    checking: 2000,
    moneyMarket: 8000,
    creditCard: -1000,
}

function bankAccountSummary() {
    let sum = 0
    for(let account in bankInfo) {
        sum += bankInfo[account]
    } return sum 

}
console.log(bankAccountSummary(bankInfo))

// We create a new variable that is equal to the total amount logged in our previous function
// We create a function that utilizes an 'if' statement with the condition of bankTotal < 0 and returns true
// if we have a negative number for our total and false if our number is greater than 0
// Console log the function with bankTotal passed as our arguement.
let bankTotal = bankAccountSummary(bankInfo)

function inTheRed() {
    if(bankTotal < 0) {
        return true
    } else {
        return false
    }
}
console.log(inTheRed(bankTotal))