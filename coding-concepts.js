// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer: ['H', 'o', 't', 'e', 'l', '2', '0', '2', '3']
// b) Verify and explain: My answer was incorrect. The code outputted an array with 'Hotel' and '2023' as separate elements. The split method separated the string into array elements based on the space between characters.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: There will be an error
// b) Verify and explain: I was somewhat correct. I thought there would be an error because the function doesn't have a return. The code is outputting undefined because "LEARN Student" isn't declared in a variable.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: My answer was correct. The function used the filter method to analyze each of the elements in the array. It divided each element by 2 and if the resulting remainder didn't equal 0, it put that element in a new array.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: My answer was correct. The console log referenced the object myCodingSkills to specifically access the key languages and isolate its value at the 0 index in its array.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Learn { student: 'George', cohort: 'Hotel', year: 2023}
// b) Verify and explain: My answer was correct. The class code constructed a new object with 'George' as the name alongside the other defined key value pairs.
