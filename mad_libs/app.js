// console.log("bello borld")

//***************************************** MadLibs - Building an Object */

// We created an obj with 5 key-value pairs which values are an empty string
// We created a function and assigned variables to each key in our object. We ran a prompt for each individual variable then assigned that
// input to our value in the object.
// Once the prompts are all completed we used an alert with interpolation of the answers we received and inserted into our key-value pairs
// in the object.
// We invoke the function!
const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: ""
}

function startMadlib() {
    const numberInput = prompt(`Give me a number :)`)
        words.number = numberInput
    const adjectiveInput = prompt(`Give me an adjective...please`)
        words.adjective = adjectiveInput
    const pluralNounInput = prompt(`Give me an plural noun!`)
        words.pluralNoun = pluralNounInput
    const adverbInput = prompt(`Give me an adverb NOW!!!`)
        words.adverb = adverbInput
    const anotherAdjectiveInput = prompt(`Give me an another adjective...please`)
        words.anotherAdjective = anotherAdjectiveInput
    alert(`Once upon a time a group of ${words.number} General Assembly graduates
    got together and made a startup called ${words.adjective} Technologies.
    Their goal was to create smart ${words.pluralNoun}.
    They approached the challenge ${words.adverb}
    which ultimately lead them to ${words.anotherAdjective} fame.`)
}
startMadlib()
console.log(words)