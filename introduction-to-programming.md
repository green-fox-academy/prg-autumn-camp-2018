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
    let mentors = ['Aze', 'Arnika', 'Roni', 'Ondra'];
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

- Running `JavaScript` from your `HTML` file:
```html
<html>
  <head>
  </head>
  <body>
    <!-- after all the contents should come the script tag -->
    <script>
    </script>
    <!-- or have the scripts in a separate scripts.js file -->
    <script src="scripts.js"></script>
  </body>
</html>
```

### Exercise 00
- Try each example in the Developer tools

From now on work in separate HTML files per exercise.

### Exercise 01
- Create an application that says `Hello World!` on the console
- Modify the application to greet you
- Extend it to greet your tablemates as well

### Exercise 02
- Create a variable and store the length of the camp in days
- Calculate how much hours are you going to spend coding into another variable and write that to the console
- Create two variables with any values
- Write them to the console
- Try to switch the values of the variables programatically
- Write them out again

### Exercise 03
- Write *"positive"* if the number is above zero
- Write *"zero"* if the number is zero
- Write *"negative"* if the number is below zero
- Use the following code snippet
  ```js
  let number = 10;

  // Your code comes here
  ```

### Exercise 04
- Create an array of the names of your neighbours at the table (use at least 4)
- Using `forEach` write all the names to the console
- Using `forEach` greet each of them individually like: `Ahoj, Aze`
- Add yourself to the array and check greeting yourself
- Change the code, so it only greets, if it's not you (why greet yourself? :) )
- Change the code, so it writes `What a clever person YourName it is` but keep the greeting of others

### Exercise 05
- Create an array of numbers starting from 1 to 15
- Write all the numbers to the console
- Write only the even numbers to the console
- Extend your code so instead of odd numbers it always writes `odd`

### Exercise 06
- Use the same array as in the previous exercise
- But for multiples of three print 'Fizz' instead of the number
- and for the multiples of five print 'Buzz'.
- For numbers which are multiples of both three and five print 'FizzBuzz'.
- Add some more numbers to see if it is working right: 25, 26, 27, 28, 29, 30

### Exercise 07
- Create an object for the details of your favourite book (author, title, year)
- Write out the whole object to the console
- Write out the author of the book
- Write out the title of the book
- Write out the year of the book
- Create two more book objects (with the same details)
- Put all of them into an array
- Write all of them to the console using a `forEach`
- Write out the title for each
- Write out `I recommend reading TitleOfBook` if the year is fresher than 2010
- Write out `You've probably already read TitleOfBook` otherwise

### Exercise 08 (optional)
- Create an array of numbers: 3, 2, 5, 1, 8
- Try to arrange them in ascending order programatically
