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
`else if` allows us to handle other cases, not necessarily the "opposite" or the "rest".