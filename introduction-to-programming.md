# Introduction to programming

## Materials
| Material | Time |
|:-------- | ----:|
|[Javascript Tutorial - Programming Tutorial for Beginners Pt 1](https://www.youtube.com/watch?v=vZBCTc9zHtI)| 13:34 |

## Material Review
- What is JavaScript?
- `<script>` tag
- Declaring variables
- Assigning values
  ```javascript
  let myVariable;
  myVariable = 42;
  let myAnotherVariable = 42
  ```
- `console.log`
- Data types
  - String
    ```javascript
    let companyName = 'Green Fox Academy';
    let eventName = `Summer Coding Camp`;
    console.log(`${companyName} is hosting a ${eventName}!`);
    ```
  - Number
    ```javascript
    let days = 3;
    let PI = 3.14;
    ```
  - Boolean
    ```javascript
    let learning = true;
    let hunger = false;
    ```
  - Array
    ```javascript
    let mentors = ['Aze', 'Peti', 'Levi'];
    console.log(mentors[0]);
    mentors.forEach((mentor, index) => { ... });
    ```
  - Object
    ```javascript
    let company = { name: 'Green Fox Academy', address: 'Andrassy street 66' };
    console.log(company['name']);
    ```
- Comments
  ```javascript
  // I will never run
  ```
- Operators
  - Addition, `+`
  - Substraction, `-`
  - Multiplication, `*`
  - Division, `/`
  - Assignment, `=`
  - Equality, `===`
  - Not, `!`
  - Does-not-equal, `!==`
- Conditionals
  - `if`
  - `if ... else`
  ```javascript
  let coffee = true;
  if (coffee) {
    console.log('I am coding!');
  } else {
    console.log('I am waiting for caffein! ');
  }
  ```
- How to separate your script from the HTML document?
- Functions
  ```javascript
  let add = (a, b) => {
    return a + b;
  }
  ```
- Developer tools

## Workshop

### Exercise 00
- Try each example in the Developer tools

From now on work in separate HTML files per exercise.

### Exercise 01
- Create an application that says `Hello World!`
- Modify the application to greet you
- Extend it to greet your tablemates as well

### Exercise 02
-
