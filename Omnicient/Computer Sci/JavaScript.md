---
Tags: [Tools, Primitives]
---
Related: [[Computer Science]] [[Vue]] 
# JavaScript

### Why JavaScript
JavaScript is the only programming language that runs in your browser. Which is why whenever you want to build an interactive browser app, you will have to write some JavaScript code.

- Learning JS
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
- 