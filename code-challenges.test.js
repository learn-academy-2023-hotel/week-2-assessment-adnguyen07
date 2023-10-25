// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

describe("multiplyBy3", () => {
    it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
        expect(multiplyBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(multiplyBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]

const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

const multiplyBy3 = (array) => {
    return array.map((value => {
        return value * 3
    }))
    }

// Pseudo code:

// Input: array of numbers
// Output: array with all numbers multiplied by 3
// Create function that takes in array as argument.
// Iterate using .map method.
// Multiply each iteration array value by 3.
// Return products into new array created by .map.


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divideBy3", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        expect(divideBy3(object1)).toEqual("15 is divisible by three")
        expect(divideBy3(object2)).toEqual("0 is divisible by three")
        expect(divideBy3(object3)).toEqual("-7 is not divisible by three")
    })
})

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

const divideBy3 = (object) => {
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } else if (object.number % 3 !== 0) {
        return `${object.number} is not divisible by three`
    }
}

// Pseudo code:

// Input: object with a number inside
// Output: string stating whether or not the number inside the object is divisible by three
// Create function that takes in object as argument.
// Make conditional statement that evaluates number inside object. Use modulo to divide number by 3. Set strict equality to equal 0 for the resulting remainder. If it evaluates to true, return string stating number is divisbile by three.
// Make another conditional statement that evaluates number inside object. Use modulo to divide number by 3. Set strict equality with a bang operator equal to 0. If it evaluates to true, return string stating number is not divisible by three.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("wordsCap", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        expect(wordsCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(wordsCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

const wordsCap = (array) => {
    return array.map((string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    })
}

// Pseudo code:

// Input: array of words
// Output: array with all words capitalized
// Create function that takes in array as argument.
// Iterate using .map method.
// For each iteration string, use charAt method to isolate the 0 index character. Also use .toUpperCase() method to capitalize that character.
// Also during each iteration, use .slice() method on string to make a subset string starting at index 1 and ending at end of string.
// Also, during each iteration, concatenate capitalized character and string subset.
// Return resulting string into new array created by .map