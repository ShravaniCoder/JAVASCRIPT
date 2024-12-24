// when combining Dollar sign($), curly brackets({}), & backticks(``).
// why we need this? is to simply make a coding lives easier
// if we have two variable 
let a = 10;
let b = 20;
console.log("Sum of", a, "and", b, "is", (a + b)) // Run Command (node 1.templateLiterals.js)
// this above code is now not so clean & requires a lot of work hence we use template literals, they neetly enclose everything with in backticks with the executable cot placed inside the $ sign & curlyy bracces:
console.log(`Sum of ${a} and ${b} is ${a + b}`)
// template literals are used to embled variables and expressions into the string,
// making the code more readable and flexible
// `Sum of ${a} and ${b} is ${a + b}`