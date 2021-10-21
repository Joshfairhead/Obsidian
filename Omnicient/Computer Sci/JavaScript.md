---
Tags: [Tools, Primitives]
---
Related: [[Computer Science]] [[Vue]] 
# JavaScript

### Why JavaScript
JavaScript is the only programming language that runs in your browser. Which is why whenever you want to build an interactive browser app, you will have to write some JavaScript code.

- Learning JS
	- Well designed course: https://learnjavascript.online/
    - MDN Documentation
        - [String object and methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
        - [Math object and methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
    - W3C Schools
        - https://www.w3schools.com/js/js_function_definition.asp

#### Structure
- Properties
	- `this.property`
- Functions `{}`
	- `function double(number) {return number * 2};`
		- Declare function, declare function name, (declare parameter), {keyword, variable, * 2};
		- Paramaters are special types of variable
			- A parameter is a variable that a function receives.
		- Methods are function definition statements in `{}`
	- `double()` <- call function above
	- `double(5)` <- `5` = **argument**

## Learn JS Highlights
[Link](https://learnprogramming.online/app.html)

### Basic operations
- The first time you define a variable, you have to define it with let, however the next time you use that variable, you should NOT use let anymore

### Basic functions
- A function is a reusable piece of code that performs some logic and gives you a result.
- For example, assuming we have a function `sum`, then writing `sum(3, 5)` will give us the sum of 3 and 5 which is 8
- There's an important benefit of functions, which is **reusability**
- The function keyword is used to define a function. This allows you to group related code logic together to make a reusable task.
- **return** is an important keyword used to give the _result_ of the function
- Note that the `return` keyword can **only** be used **inside** a function.
- Once having defined a function, you can call it with different values
	- `function double(number) {return number * 2};`
		-  `double(4)` = 4 is the paramater passed to the function variables in this case `number`
-  functions allow us to reuse logic
-  A parameter is a variable that a function receives.
-  So to call a function, you have to write its **name** (in this example `double`) and then you need to have the parentheses `()` with a value that you want to pass for the parameter. Hence why it looks like: `double(5)` or `double(20)`
- Recap
	-   A parameter is a variable that a function receives.
	-   Most functions will use that variable they receive and will compute the result based on it.
	-   To call a function, you have to start with its **name** then opening parentheses `(`, then the value you want to give to the parameter and then a closing parenthesis `)`
-   Functions can have 0 or more parameters
	-   `Function add(a, b) {return add a + b}`
	-   `add(5, 10)`
		-   the `5, 10` are called **arguments**
	- The parameters of a function are only accessible **inside** that function. That means from the opening `{` until the corresponding closing `}`.
		- This concept is called the **scope** of a variable
	- Since functions **return** a result, you can in fact store that result in a variable
		- `let firstResult = double(4)`

Strings
- Programming languages have what we call **data types**, these are the different types that variables can hold. In real life, a number (for example 35) is different than a name (for example "Sam"). One of them is a number, the other one is a string.

 ```javascript
let city = "Stockholm"
city.length // this will result in 9
```
- `.length` is a property (of the variable city, which is "stockholm")

Console log
- As you start to work more with variables and functions, it becomes hard to remember what the value of some variable is, so it would be nice to have a way to **visualize** that.
- This is exactly why we have the `console.log()` function
- -   `console.log()` allows you to visualize your code in the **console**.
-   The **console** is only visible to you (the developer), but not the end-user.
-   `console.log()` helps you find bugs.
- `console.log` does **NOT** replace return. It must therefore be interjected
-  When you have a `return ` in your function, this will be the last line of code executed in that function.

Methods
- Methods are NOT properties, but easily confusible. 
- `name.length` is a property whereas `name.toUpperCase()` is a method. Methods **require the parentheses at the end** or else they won't work. You can think of the `()` in this case as a way to perform an action.
- The `.toUpperCase()` method allows us to make a new copy of a string while converting every single character to uppercase. This allows you to go from "alex" to "ALEX".

Equality comparison operator
- Because the `=` sign will only do **assignment**, there is a completely different operator used for **equality comparison** and that is `===` that's 3 equals ===
- Notice how the moment we want to **compare** we use `===` and the moment we want to **assign** (give a value) then it's **`=`**
- So 1 equal sign is for assignment and 3 equal signs are for equality comparison.
- When you want to check that 2 numbers are NOT the same, then you should use the `!==` operator (which is written as !`==`)

If Statements
- the `if` keyword which is followed by a condition in between parentheses
- Curly braces `{}` containing the piece of the code that should be run conditionally (this is called the **body of the if**)
- When the answer is `true`, then the body of the if condition (so everything between the curly braces after the `if`) will execute.
- With `if` conditions, some lines of code may be skipped, depending on the condition.
	- Syntax breakdown
	- Let's break down the syntax of an if condition:
		1.  We start with the `if` keyword
		2.  followed by open parenthesis `(`
		3.  then the **condition**. Which is for example `age >= 18` or could be `grade === 10` depending on what you're checking in the if condition.
		4.  then followed by a closing parenthesis `)`
		5.  then followed by an open curly brace `{`. This denotes the start of the if block. Which determines what would happen if the condition inside the `if` was `true`.
		6.  You could have whatever expression here. We didn't learn about expressions yet, but you could return here if you were in a function, or change the value of a variable.
		7.  finally, you should close the opening curly brace with a closing one: `}`
	-  If you forget the closing `}` you will get an error message along the lines of: `Unexpected end of input`.
	-  If you forget the parentheses, you will get an error message along the lines of: `Unexpected identifier`. That's because it was not expecting to see `age` in `age >= 18` because of the missing parentheses.
	- The function body (which is all the code between the curly braces `{ }` in a function definition), is where you'll often spend most of your time

`.trim()`
- The `.trim()` method allows us to make a new copy of a string while removing leading and trailing spaces from the original string
- The `.trim()` is often used in forms on websites. For example, when you sign up to some website, they will often `.trim()` your email because users might enter extra spaces at the beginning or end of the email by accident

Variable Reassignment
-   The `.trim()` method allows us to make a new copy of the string while removing leading and trailing spaces from the original string.
-   The `.trim()`, `.toLowerCase()` and `.toUpperCase()` methods create new copies of the variable and do not change the original variable.
-   To change the variable, you have to re-assign it to itself with the function call. For example: `cleaned = cleaned.trim()` will change the value of `cleaned` and make it trimmed.
-   You cannot re-define a variable once it has been defined, only reassign it

Function/Variable rules
-   Variables/Functions are case sensitive
-   You cannot use a variable before declaring it

Naming conventions:
- A naming convention is a set of rules that you should take into consideration when defining the name of a variable and function
- In JavaScript, the naming convention for variables & functions is: **lowerCamelCase**

Boolean pro tip:
- When defining a variable that will contain a boolean value or a function that will return a boolean value, it's a good idea to give it a name that starts with `can` or `has` or `is`. For example: `canVote`, `isLegal`, `hasVoted`, `isRegistered`.  
- The name implies that there will be a boolean as a value.

Naming
- You will most likely never stumble upon this, but just in case, you cannot start a variable name with a number.
- Rather than knowing the exact rules for what a valid variable/function name is, it's easier to always start it with a letter (any letter from `a` to `z`) or an `_` (underscore).

Parameter confusion
- The common confusion that happens with developers is when you declare a variable with the same name as the parameter.

Expressions:
- An expression is a combination of one or more variables, functions, and operators that the programming language computes to produce a value.  
- An expression produces a value and can be written wherever a value is expected.

Undefined data type
- The `undefined` data type can only contain one value which is `undefined`.
- You can think of `undefined` as the word **nothing** in English. For example:
- > What are you planning on doing tonight? Nothing.
- So when a variable contains nothing, then its value is `undefine`
- if you define a variable and do not give it any value, its value by default will be `undefined`.
- If a function has **no** return keyword, then you will get `undefined`.
- This is a concept called **implicit return**. The word **implicit** means: suggested though not directly expressed. In simplified terms, it means when you don't provide a `return`, JavaScript will automatically `return undefined` for you:
```javascript
function getNameLength(name) {
    name.length
    return undefined // implicit return added by JavaScript
}
```
- Note that you will **NOT** see that `return undefined` but think as if it gets added after you run the code while being processed by the computer
-   The concept of implicit return also applies in functions with branching (with if conditions).
-   If one of the branches does not have a `return`, it will `return undefined`. We will learn how to fix that in upcoming chapters.

Conditional function call
-   You can call functions inside **if** conditions.
-   Calling functions inside if conditions allows your program to handle more complicated use cases.

The "opposite" of a `=== true` is `=== false` or `!== true`.

So the opposite of `age >= 18` is `age < 18`. Notice how the `>=` becomes `<` rather than `<=`. That's because if you take the `age` 18, you are allowed to vote which means it should be excluded from its opposite.

Let's say you're playing a game where you need to get a score of at least 100 to win. The condition to win would be: `score >= 100`. What would be the condition to lose? It would be `score < 100`. So because **100** is counted as winning, it should be excluded from its opposite, which is why the `>=` operator becomes a strict `<` operator.
-   The opposite of `age >= 18` is `age < 18`.
-   The opposite of `score >= 100` is `score < 100`.
-   The opposite of `lives < 0` is `lives >= 0`.

#### else
The `else` keyword can be used to handle all the other cases of an `if` condition. For example, to make the code above return **"You are not allowed to vote"** when the `age >= 18` returns `false`, you have to add the `else` keyword like this:

```javascript
function getVotingMessage(age) {
    if (age >= 18) {
        return "You are allowed to vote"
    } else {
        return "You are not allowed to vote"
    }
}
```

#### else if
`else if` allows us to handle other cases, not necessarily the "opposite" or the "rest". Writing `else if` after the `else`. Having an `else` is optional, but if you decide to have an `else`, then it **must be at the end**.

#### Simplifying Booleans
```javascript
function canVote(age) {
    return age >= 18
}
```
- This pattern **only** applies where we check if something is true, and return true and return false in other cases.If you were returning a string or a number, this pattern cannot be used.

#### String concatenation 
```javascript
let message = "Welcome " + name
console.log(message) // "Welcome Alex"
```
- Notice how we used the `+` operator to **concatenate** the string with the value of the variable. This means it puts them together, glues them together into one string.
- The `+` sign can do either **addition** or **concatenation** depending on the two items before and after it. We call them the `operands`.
	1.  If the 2 operands are numbers, then `+` will perform an **addition**. For example: `1 + 3` will result in `4` (addition).
	2.  If one of the 2 operands is a string, then `+` will perform a **concatenation**. For example: `"abc" + "def"` will result in `"abcdef"` (concatenation).

#### Template strings
-   It's possible to define strings with the **backtick character**, which is this character: `
-   Strings defined with the backtick character are called **template strings**.
-   Here's an example of a string defined with the backtick character: let name = `Sam`

Interpolation
- In the previous chapter, we learned how to concatenate a string with a variable. There's another way to achieve the same result but in a nicer way, at least when you get used to it. And that is called **interpolation**.
- **Interpolation** is when you insert variables (or expressions) inside a **string**. The end result will be a string containing the values of these variables (or expressions).
- To write interpolation correctly, remember that interpolation requires 2 steps:
	1.  The string **has** to be a template string (which means, written using the backtick character). It does NOT work with string created with the double-quotes.
	2.  Wrap the variable with `${` and then `}`.

### Arrays:
**An array is a list of values**.
-   Arrays are a new data structure that we're learning about.
-   An array is a list of values.
-   Instead of defining 5 variables called `grades1`, `grades2`, etc., you can define **one** variable called `grades` which is an array containing those numbers.
-   You can think of arrays as a **row** in an excel sheet.

As we learn more about arrays, you're going to discover that arrays come with specific methods that will help us manage them. How do you create an empty array? The answer is quite simple, an empty array is denoted by `[]`. The square brackets are a syntax that instructs JavaScript that this is the array data type.

`let array = [Array, items]`
- Array items are the items within an array
- Arrays can contain not just numbers but also strings, booleans, etc
- Array operations allow you to run some functions on an array. For example, you can ask JavaScript: does the array `[10, 15, 20]` include the number `15`? And you'd get a boolean answer (either true or false).
	 1.  To access an item from an array, there's a new syntax for it which is the square brackets `[]`
	 2. Inside the square brackets you should have the **position** of the item that you want to read. So for example `[1]`
	 3. This syntax needs to go directly after the name of the array. So for the above example, it would look like `grades[1]`
	 4. This is the tricky part. The **position** starts at 0. We're going to spend plenty of time to make sure you understand this one.
- in JavaScript (and the majority of programming languages), the **position** starts at 0. In day to day life, you're used to start counting from 1, but in programming we count from 0.
- A quick note that we've been using the word **position**, but a more correct word that you will see people use would be **index**. We just didn't want to introduce too many things at once :) So from now on, we'll start referring to the position as the **index** or **array index**
- Since the index in an array starts from 0, then if you want to access the first item of the array, you'd have to write: `array[0]`.
- The reason why the index starts from 0 is mostly due to how programming languages store arrays in the memory.  
	- In an over simplified way, they save the location of the first item of the array, and from that item they can make the jump to the next one. So having an index starting at 0 simplifies the math for it.
- You may have noticed that all array names that we've used so far are in the **plural**. That's a very good habit to have. It's a best practice because arrays are made to contain more than 1 item. So having their name in plural will make it easier for you to reason about the array. This will become more evident once we learn about the `.forEach` method.
- If you try to access an element that doesnt exist, the console will return `undefined`
- Because the array index is 0-based, the last item is always going to be positioned **one** number less than the total number of items
- To be on the safe side, it's often better to write the `()` which dictate the order of the Mathematical operations. In this example, we want to multiply `firstRectangle[0]` with `firstRectangle[1]` before subtracting that to the remaining part of the operation, which is why it's better to group them with parentheses `()`. And the same thing applies to the `secondRectangle[0] * secondRectangle[1]`. In mathematics, multiplication has higher precedence over subtraction

**Changing the contents of an array**
-  The logic is similar to reading an element.
-  Ask yourself: how can I **read** that item that I want to change?
	-  `grades[0] // returns 5`
-  Now assign it to the new value with the equal sign (`=`) and the new value like so:
	-  `grades[0] = 6`
- Always perform the operations and then at the end of the function, return the array.

**Array length**
- We've got the `.length` property on arrays which returns the **number of items** in that array

> The `.length` is a property, meaning that it's a value that has already been computed. It's **NOT** a function which is why you should not put the `()` afterward.

The last item of an array is always at position: **number of items - 1**
So the **number of items - 1** can be written as the following expression, assuming a variable called `items`: `items.length - 1`.
- `items[items.length - 1] // (last item)`
	- The code above works for no matter how many items there are in the array (except for 0 items).

##### Array.push()
- A method is a function that you can call on a certain data structure.
- The `.push(item)` method adds (or pushes) an item into an existing array
- Every time you call `push(item)` it adds that item at **the end of the array**.
- What's nice about the `.length` property is that it always reflects the number of items in this array
- The methods and functions that you call, will **always** return something. Even if it's `undefined`.
- The `.push(item)` method returns the **new length of the array**. So it returns a number
- if we assign the result of `.push()` into a variable, it will be a number representing the new length of the array:
- Most often, you will need to return the new array rather than the new length of the array, which is why you have to `return` the array after you `.push()` rather than returning the result of `.push()`.
- You can also push a variable into an array

##### array.includes(item)
- Say you have an array containing some numbers and you would like to check if that array **includes** (contains) a certain number. This means, that you want to go through every item of that array and check if a certain number exists, returning a boolean
-   `array.includes(item)` allows you to check whether the `item` exists inside the `array`.
-   `array.includes(item)` returns a boolean.
-   `array.includes(item)` returns `true` when the item is found inside the array.
-   `array.includes(item)` returns `false` when the item is NOT found inside the array.

#### Array join
- Say you have an array of numbers and you would like to convert that array into a string. For example, you want to convert `[3, 1, 6]` to the string: `"3;1;6"`. Here's how you can do it:
```javascript
let numbers = [3, 1, 6]

let string = numbers.join(";") // "3;1;6"
```
- The `array.join(glue)` method converts the array into a string by **gluing** together the items with the `glue` that you provide
- Another common example is converting an array into CSV format:
```javascript
let numbers = [3, 1, 6]
let csv = numbers.join(", ") // "3, 1, 6"
```
	
##### Iteration + Callbacks
- The array **.forEach()** method is one of the most important methods on arrays.
- The `.forEach()` method allows us to iterate over an array
- What the forEach does is that it allows you to run a function for every item of an array
```javascript
let grades = [14, 10, 18]

grades.forEach(function logGrade(grade) {
    console.log(grade)
})
```
- Now, this function `logGrade` will be called **for every item in the array**.
- When calling functions, we've been used to calling them with a number, a string or a boolean.
- However, you may have noticed, that with the `.forEach()`, we passed a function.
- We call this function a **callback** because this function is being called back automatically by the JavaScript.
- A callback function is a function that is passed as an argument and that will be called by the programming language (sometimes at a later stage).
- When writing the callback for the `.forEach` method, you can actually remove the function name completely, that's because this function won't be re-used anywhere else, so it's meaningless to give it a name.
```javascript
let grades = [14, 10, 18]

grades.forEach(function logGrade(grade) {
    console.log(grade)
})
```
To
```javascript
let grades = [14, 10, 18]

grades.forEach(function (grade) {
    console.log(grade)
})
```
- We recommend that you drop the function name. When you drop the function name, it's often referred to as **anonymous function**, which is a function without a name
- From experience, we think that the most challenging concept for beginners with the `.forEach()` method is the shift from an array into an array item.
- When you write `grades.forEach()` and you pass it a `function (grade){ ... }`, you have to immediately stop thinking of the `grades` array and start thinking about **one element of the array**.
 
 Callbacks: Plural to Singular
- When iterating over an array, you're always going from an array of several items into iterating over them **one by one**.
- Make sure your array name is **plural**.
- And make sure the function you pass to the forEach has the parameter in the **singular**.
- You can think of writing array iterations as 3 steps
	- 1.  Start by writing `grades.forEach()`
	- Then inside the forEach(), you need to write the function that will be called for every grade: `function(grade) { }`
	- And finally, you add the `console.log(grade)` inside of that function.

- Once we're going to write the code that sums an array, we need to tell the programming language that we want to have a variable that will hold the **sum**. But then, we need to give it a certain value. What would that be? 0? 1?
	- Because it's a sum, we start at 0.
- paramaters inside callbacks are scoped and are only available inside the function
- Make sure that you define the `let sum = 0` **before** the `.forEach()`.

- In this lesson, we're going to learn how to put our logic in a function, so that we can reuse it. For example, a function `calculateSum(array)` that takes an array of numbers and returns the sum of items in that array.
- This will allow us to **reuse** our code with different arrays
```javascript
function calculateSum(items) {
    let sum = 0
    items.forEach(function(item) {
        sum = sum + item
    })
    return sum
}

// Sample usage
calculateSum([10, 20, 30]) // 60
calculateSum([5, 2]) // 7
calculateSum([]) // 0
```
- A common mistake is placing the `return sum` _inside_ the `.forEach(function(item) { ... })` but that won't work as you will need to **return** from the outer function, which is `calculateSum`. If you `return` inside the function of the `.forEach()`, you will **NOT** be returning from the `calculateSum`, because they are different functions.  
- So make sure to place the `return sum` at the end of the function.
- The `sum = sum + grade` piece of code can be re-written as: `sum += grade`
- The `+=` operator means that it will take the old value and add to it.

- Mathematically speaking, the average is calculated with the following formula:
`average = sum / count`
- The average always depends on the **sum** and the **count**. So when a new number is added to that array, the `count` becomes 4. For example, if we add 50, we get the array `[10, 20, 30, 50]`, now the average = 110 / 4 = 27.5

#### Array map
- Wherever you need to transform an existing array into a new one, you should use the `.map()` method.
- The `.map()` method allows you to apply a transformation for every item in an array. Thus the end result will be an array containing the same **number of items** (but most likely different values for those items).
- The `.map()` function **will return** the transformed array. This is why we assigned the result of `grades.map(...)` to the new variable `let doubledGrades`.


#### What is reduce?
The goal of the `reduce()` method is to calculate a single value from an array. In other terms, you **reduce** an array into a single value

Reduce example: sum
- We can **reduce** the array [5, 10, 5] to the number 20.  
- We can **reduce** the array [2, 4, 3] to the number 9.
- One of the most common use cases of `reduce()`, which is summing the array items.

Reduce example: multiplication
- We can **reduce** the array [10, 2, 2] to the number 40 (10 * 2 * 2 = 40).

So is the reduce method a sum or a multiplication?  
- It's neither. That's because the `reduce()` method accepts the **reducer** which is a callback that you have to write. That callback can be sum, multiplication or some other logic that you may think of.
- So reduce is a generic function that will reduce an array into a single value. The way it will reduce that array into a single value is configurable by you, the developer. You can configure that in the `reducer` callback

#### Array reduce: sum
Reducer (total, current):
```javascript
function(total, current) { 
    return total + current
}
```
- This is the callback that is applied for every item in the array, however, this callback takes 2 parameters: `total` and `current`.
- This is the callback that is applied for every item in the array, however, this callback takes 2 parameters: `total` and `current`.
- The `total` is always referring to the last computed value by the reduce function. You may often see this called as `accumulator` in documentation which is a more correct name. And the `current` is referring to a single item in the array. Let's see what this means by showing the value of `total` and `current` for every step:
```javascript
// code that we run
let grades = [10, 15, 5]

let sum = grades.reduce(function(total, current) { 
    return total + current
}, 0);
```
- The first time the callback runs, total is assigned 0, and current will be assigned to the first item of the array. So total = 0 and current = 10.
- Then we return `total + current` which is `0 + 10 = 10`. Now the new value of `total` becomes 10.
- The callback runs the second time and this time `current = 15` (second item of the array) and `total = 10`. We return `total + current` which is `10 + 15 = 25`. The current value of `total` becomes 25.
- The callback runs the third time and this time `current = 5` (third item of the array) and `total = 25`. We return `total + current` which is `25 + 5 = 30`.
- There are no more items in the array, so the result of the reduce is the final value of `total` which is 30. 
- Thus the sum is 30.

##### Initial Value
The `.reduce()` method accepts 2 arguments: `reducer` and `initialValue` (not to be confused by the 2 parameters of the `reducer` which are `total` and `current`). The `initialValue` is the value we give to the `total` (or `accumulator`) the first time the callback runs.

