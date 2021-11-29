---
Tags: []
---
Related: [[JavaScript]] [[Learn Programming Course]] [[Vue]] [[Svelte]]
# Learn Javascript Course

## Substrings
-   A substring is a part or a portion of a string.
-   `string.substring(indexStart, indexEnd)` is used to return a portion of the string.
-   **indexStart**: the position of the first character you'd like to **include**.
-   **indexEnd**: the position of the first character you'd like to **ignore**.
-   the **indexEnd** argument is optional which means you can leave it out.


## Plus operator +=
You can rewrite the `name = name +` in a shorter way using the `+=` operator


## Convert string to number
-   Convert from string to number `Number.parseInt(value, 10)`.
-   `Number.parseInt()` is the name of the function you're calling.
-   10 is the **radix** which you should specify.
-   Make sure to always specify the radix to avoid unpleasant surprises.


## Operations
- Multiplication using the `*` operator. For division, you need to use the `/` operator.
- The remainder operator `%` returns the division remainder between 2 numbers.


## Variables
-   When you use a variable for the first time in JavaScript, you need to declare it with either `let` or `const`.
-   Use `let` for variables that you will need to re-assign later on (as in changing their value)
-   Use `const` for variables that you won't need to re-assign later on.
-   Variables declared with `const` are **not** constant. We will see why later in this course.
-   Variables declared with `const` cannot be re-assigned so you cannot have the `=` next to that variable name after declaring it.
-   If you see `var`, it's from the old version of JavaScript. You can convert it to `let` (sometimes `const` if the variable is not re-assigned).


## Even & Odd
- Remainder operator (`%`). When you get the division remainder of a number by two, you will either get `0` or `1`. This will help you know whether the original number is _even_ (divisible by two without a remainder) or _odd_.


## Arrays
- Arrays in JavaScript allow you to store multiple elements in the same variable. You can store numbers, strings, booleans, arrays, objects & more. These can be mixed within the same array.
```javascript
const values = [10, false, "John"]; // mixed
```
- You can get the number of elements in an array by using the `.length` property

**Get element by index**
- Similarly to strings, you can get an element from an array by using the square bracket syntax `[]` with the `index` starting from 0

**Adding an element**
- You can add an element to an array by using the `.push()` method.
- `.push()` returns the new length of the array, NOT the array itself.

**Arrays & const**
- Even though the variable `numbers` was defined with `const`, we were able to push new data into it. That's because `const` means you can only **assign the variable once** when it's defined. But it doesn't mean the variable is immutable. Its content can change.
- What's the benefit of declaring it as a `const` you ask? The benefit is that once you define it as an array, it will always stay as an array which means you can safely call array methods on it. However, the array content can change.

**Recap**
-   `const data = [1, 2, 3]` is an array containing 3 numbers.
-   `array.length` returns the number of elements inside the array.
-   `array.push(x)` allows you to add the variable **x** to the array.
-   `array.push(x)` returns the new length of the array (after the push has been made).
-   Arrays defined with **const** are not constants because you can change the elements inside of it. However, you cannot re-assign them to another value thus they will always be an array.


## Array Iteration (.forEach)
- Array iteration is one of the most important concepts that you will use in JavaScript.
```javascript
const grades = [10, 8, 13];

grades.forEach(function(grade) {
    // do something with individual grade
    console.log(grade);
});
```
- Always start with a `console.log()` inside your `.forEach` so that you can visualize the shift from array to array item.
- The `.forEach(callback)` method allows you to run the `callback` function for every item in that array


## Array.filter(callback)
- A common array method is the `.filter()` method. When you call this method on an array, you will get back another array that contains some of the items from the original array, based on the condition you specify.
```javascript
variable.filter (function(number) {
    return number >= 10;
})
```
-   The `.filter()` method returns a new array that contains some of the items from the original array, based on the condition you specify.
-   JavaScript will take your callback function and call it for every single item in the array.
-   For the `.filter()` method, the result of the callback function matters. When it's `true`, the item will be included in the resulting array. Otherwise, it won't.
-   JavaScript cannot make a smart guess that the `numbers` array becomes the `number` parameter in your callback function. What it does is that it calls your callback function while giving a value for the **first parameter** that you specified.
-   Use the **plural -> singular** naming convention when using the `.filter()` method


## Array.find(callback)
- When you call the `.find(callback)` method on an array, you will get back **the first item** that matches the condition that you specify. If no items were found, you will get back `undefined`.
- The `.find(callback)` method will call the callback that you provided for every item in the array until one of the callbacks returns `true`. When this happens, it will stop calling the remaining callbacks and return to you the item for which the callback returned `true`.


## .filter() vs .find()
The difference has to do with the **return type** of these 2 methods:
1.  The `.filter()` method **always** returns an array even if it matched one item or no items.
2.  The `.find()` method returns the first array item that matches the callback function or `undefined`.


## Array map
- The `.map(callback)` method allows you to **transform** an array into another one


## Array.includes(item)
- The array `.includes(item)` method is one of the simplest array methods as it takes an `item` rather than a callback and returns `true` when that `item` exists in the array and `false` otherwise
```javascript
const groceries = ["Apple", "Peach", "Tomato"];

groceries.includes("Tomato"); // true
groceries.includes("Bread"); // false
```


## Array.join(glue)
- The array `.join(glue)` method returns a string of the array elements separated by the `glue`.


## Objects
- An object is a data type that allows you to group several variables together into one variable that contains keys and values. This is often used to represent or describe an entity. For example, a person, a user, a product, etc.

## Read the value of a property
- To read the value of a property in an object, you can use the **dot notation**
```javascript
const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};

user.id; // 1
user.firstName; // "Sam"
user.isAdmin; // undefined (property does not exist)
```

## Updating property value
- You can also update a property value using the same **dot notation** followed by an equal sign:
```javascript
const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};

user.lastName = "Blue";
user.age = user.age + 1;
console.log(user); // {id: 1, firstName: "Sam", lastName: "Blue", age: 21}
```
- You are able to update the property value of an object defined by `const` because `const` does **not** mean that the variable is a constant, it just means that you cannot re-assign it. Thus, the variable is always an object, but its content (properties) can change.


## Default parameters
- What do you think will happen if you call `addOne()` (without any argument)? In JavaScript, it won't fail and your code will continue executing.
- Mixing strings and numbers will result in `NaN`

Note: if you're confused by the difference between parameters and arguments, here's a short definition: A parameter is a variable in a function definition. When a function is called, the arguments are the data you pass into the method's parameters.

- Default parameters allow you to give a default value for one or more parameters that have not been provided when the function is called.
```javascript
function addOne(number = 0) {
    return number + 1;
}
```
- When you call the function `addOne()` without any arguments, it'll use the default value you defined in the function signature (`number = 0`)


## Introduction to arrow functions
```javascript
function sum(a, b) {
    return a + b;
}
```
Can be written as:
```javascript
const sum = function(a, b) {
    return a + b;
}
```
You can do that in 2 steps:
1.  remove the function keyword
2.  add an arrow (`=` and `>`) between the parameters `(a, b)` and the opening curly brace `{`

This is how it will look like:
```javascript
const sum = (a, b) => {
    return a + b;
}
```


## Revisiting array methods
### Array forEach
```javascript
grades.forEach(function(grade) {
    console.log(grade);
});
```
The iteration can be rewritten using arrow functions as following:
```javascript
grades.forEach((grade) => {
    console.log(grade);
});
```
Also, because the arrow function has **one** parameter, you are allowed to drop the parentheses `()` surrounding the parameter:
```javascript
grades.forEach(grade => {
    console.log(grade);
});
```
This is only the case when you have **one** parameter. Multiple parameters have to be wrapped in parentheses `()`.


## Implicit return
- When you forget to write `return` in a function in JavaScript, you get an implicit `return undefined`. The word implicit here means that it is inferred but not specifically expressed.
```javascript
const sum = (a, b) => {
    a + b;
}

sum(1, 3); // undefined
```
As you can see, `sum(1, 3)` returns `undefined` because we did not have a `return` keyword inside the function body. However, with arrow functions, you can implicitly return the result of the function on some very specific conditions.
```javascript
// this works 👍 (implicit return)
const sum = (a, b) => a + b;

sum(1, 3); // 4
```
For the implicit return to work, you should have **all** the following conditions:
1.  Your function should be an arrow function.
2.  The function body should be only **one line**. This means you have to remove the curly braces.
3.  You have to remove the `return` keyword because the function body is one line.

### Going further
When you have only one parameter, you are able to drop the parentheses around the parameter
```javascript
const isLegal = (age) => {
    return age >= 18;
}
```
```javascript
const isLegal = (age) => age >= 18;
```
```javascript
const isLegal = age => age >= 18;
```
- This is the shortest possible way (yet clear) you can write this function.


## Array methods revisited
### Array.filter(callback)
```javascript
const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number >= 10;
});
console.log(numbersAboveTen); // [14, 11]
```
Becomes:
```javascript
const numbersAboveTen = numbers.filter(number => number >= 10);
```
- A common mistake here is writing `numbers.filter(number >= 10)` but this does **not** work because you need to pass the parameter first `number` and then the arrow function `=>` and then finally specify the function body which is `number >= 10`.

### Array.find(callback)
```javascript
const names = ["Sam", "Alex", "Charlie"];

const result = names.find(function(name) {
  return name === "Alex";
});
console.log(result); // "Alex"
```
Becomes:
```javascript
const result = names.find(name => name === "Alex");
```

### Array map(callback)
```javascript
const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
```
Becomes: 
```javascript
const doubled = numbers.map(number => number * 2);
```


## String methods
-   String `.trim()` removes all leading and trailing space characters.
-   String `.startsWith(substring)` returns `true` when the `substring` is found at the **beginning** of the string, and `false` otherwise.
-   String `.endsWith(substring)` works the same but for the **end** of the string.
-   String `.includes(substring)` returns `true` when the `substring` can be found _anywhere_ in the string, and `false` otherwise.
-   `String.split(separator)` divides the string into an array by splitting it with the `separator` you provide.
-   `String.replace(search, replace)` replaces the **first** occurrence of `search` by `replace`.
-   `String.replaceAll(search, replace)` is similar to the `.replace()` method except that it replaces **all occurrences**.

### Array to string
First, you start with a `.map()` call to extract the `name` from the `users` array , and then you use **.join()** to join the array elements into one string.
```javascript
const users = [{
    id: 1,
    name: "Sam Doe"
}, {
    id: 2,
    name: "Alex Blue"
}];

const userNamesArray = users.map(user => user.name);
console.log(userNamesArray); // ["Sam Doe", "Alex Blue"];

const csv = userNamesArray.join(", ");
console.log(csv); // "Sam Doe, Alex Blue"
```
or
```javascript
const csv = users.map(user => user.name).join(", ");
console.log(csv); // "Sam Doe, Alex Blue"
```

The above trick is often used to generate an HTML string from an array. Let's say we'd like to return an unordered list (`ul > li`) from the `users` array above. Instead of writing it with `.forEach`, you can use the above trick as follows:
```javascript
const html = `<ul>
    ${users.map(user => `<li>${user.name}</li>`).join("")}
    </ul>`;
console.log(html); // <ul> <li>Sam Doe</li><li>Alex Blue</li> </ul>
```

### Array.every(callback)
The Array `.every(callback)` method returns `true` when **every** item in the array satisfies the condition provided in the callback.
```javascript
const numbers = [15, 10, 20];

const allAbove10 = numbers.every(number => number >= 10); // true
const allAbove15 = numbers.every(number => number >= 15); // false
```

### Array.some(callback)
Similarly, the Array `.some(callback)` method returns `true` when **at least one** item in the array satisfies the condition provided in the callback.
```javascript
const numbers = [15, 10, 20];

const someOver18 = numbers.some(number => number >= 18); // true
const someUnder10 = numbers.some(number => number < 10); // false
```

## Deleting items
Say you've got an array and you'd like to empty it, you can do that by setting its length to 0:
```javascript
const items = ["Pen", "Paper"];
items.length = 0;

console.log(items); // []
```

### Array.splice()
- You can also delete specific items from an array using the `splice(start[, deleteCount])` method. Do not confuse `splice` with another method called `slice`. Did you notice the `[, deleteCount]` syntax? You will often see this syntax in documentation, which means that the `deleteCount` parameter is **optional**.
- The `.splice(start[, deleteCount])` method removes items from the array starting from the `start` index that you specify. If no `deleteCount` is provided, it will remove all the remaining items as of the `start` index.
```javascript
const items = ["Pen", "Paper", "Staples"];
const deletedItem = items.splice(0, 1); // removes one element at index 0
console.log(deletedItem); // ["Pen"]

console.log(items); // ["Paper", "Staples"]
```
- Notice how the `.splice` method **returns** an array of the element(s) removed.

## What is reduce?
```javascript
const sum = grades.reduce((total, current) => { 
    return total + current;
}, 0);
```
-   The `reduce()` method is used to calculate a single value from an array.
-   In other terms, the `reduce()` method **reduces** an array into a single value.
-   The most common use cases of reduce (when working with arrays of numbers) are sum & multiplication.
-   The `reduce()` method takes a reducer which allows you to configure the logic of how the array will be reduced into a single number.
-   The `reduce()` method takes 2 parameters: `reducer` and `initialValue`. `.reduce(reducer, initialValue)`.
-   The `initialValue` is always 0 for sum.
-   The reducer is a callback function that receives 2 arguments: `total` and `current`.
-   The `total` (also called `accumulator`) keeps track of the result of the reduce method. For example, when calculating the sum, it keeps track of the sum, step by step.
-   The `current` represents one item of the array.
-   The `reducer` is called for every item in the array.
-   For multiplication, we use an `initialValue` of 1.
-   Reduce common mistakes:
-   1.  Syntax errors
-   2.  Forgetting to return
-   3.  Wrong initialValue


## Array destructuring
Array destructuring is a relatively new feature of the JavaScript language and is considered syntactic sugar, meaning that it makes your code look easier to read.
Say you've got the following array containing the `width` and `height` of an item and you'd like to create variables for the `width` and `height`:

```javascript
const dimensions = [20, 5]

// create variables
const width = dimensions[0];
const height = dimensions[1];

// log them
console.log(width); //20
console.log(height); //5
```

The above code can be rewritten using the new array destructuring syntax as follows:

```javascript
const dimensions = [20, 5]

// create variables
const [width, height] = dimensions;

// log them
console.log(width); //20
console.log(height); //5
```


## Array concatenation
You can concatenate/merge several arrays into a new array using the `...` spread syntax. Here's an example:
```javascript
const lat = [5.234];
const lng = [1.412];
const point = [...lat, ...lng];
console.log(point); // [5.234, 1.412];
```

Here's another example where we create a new array based on the old one and add new items to it:
```javascript
const items = ["Tissues", "Oranges"];

const otherItems = [...items, "Tomatoes"];
console.log(otherItems); // ["Tissues", "Oranges", "Tomatoes"]
```

## Reading dynamic property
-   You cannot use the **dot syntax** when the property you're trying to read is stored in a variable or the result of an expression (dynamic).
-   Instead, you should use square brackets with the name of the variable inside. For example `[key]`.
-   `object[key]` will evaluate the `key` expression first and then read the property based on its result.
-   The `Object.keys(obj)` method returns an **array** of all the keys in the `obj` that you provide.


## Object methods
```javascript
person.age.toUpperCase(); // ❌ Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
```
- This is one of the **most common errors** that you will see in JavaScript. [TypeScript](https://www.typescriptlang.org/) does a great job at preventing this kind of errors, though it comes with its own overhead.
- It's important to be able to read this error message and understand that the issue is not `.toUpperCase()` but instead, the expression that came before it `person.age`. That's because you end up calling `undefined.toUpperCase()` which does not exist.

- Another note worth mentioning is that when you see `[object Object]` it means that the `.toString()` method has been automatically called on an object which will result in `[object Object]`. So if you see `[object Object]`, it means you tried to use an object in a context that expects a string.
```javascript
const person = {
    id: 1,
    firstName: "Sam"
};

console.log(`Hello ${person}`); // "Hello [object Object]"
```


## Object.values()
- In the previous lesson, we saw that we can access the values of an object by looping through the keys and then dynamically accessing the keys. This works if you need to access both the keys and the values.  
- However, if you only need to access the values, then you can use `Object.values()` which returns an array of the values:
```javascript
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const values = Object.values(user);
console.log(values); // [1, "Sam Green", 20]
```


## Object.entries()
The `Object.entries()` method returns an array of arrays representing every key/value pair.
```javascript
const user = {
    id: 1,
    name: "Sam Green",
    age: 20
};

const entries = Object.entries(user);
```

The entries variable will return the following array of arrays:
```javascript
[
    ["id", 1],
    ["name", "Sam Green"],
    ["age", 20]
]
```


## Object shorthand
- A nifty feature in Objects is the object shorthand. 
```javascript
const age = 18;
const person = {
    name: "John",
    age: age
}
```

- That `age: age` is a bit redundant, thus you're able to write it as follows:
```javascript
const age = 18;
const person = {
    name: "John",
    age
}
```
- Because the property name is the same as the name of the variable used as its value, then you can drop the `: age` so you're left only with `age`. `const user = {age}` is equivalent to `const user = {age: age}`.
- When you have several console.log calls, wrap the values with `{}` so that you use object shorthand. The benefit is that you will be able to see the name of the variable that you were trying to log, alongside its value.


## Destructuring & Concatenation
- Just like array destructuring, you can destructure key/value pairs (or nested objects) from an object. The concept is similar, except that you have to use `{}` instead of `[]` on the left side of the `=` operator and you should have an object on the right side of the `=` operator.
```javascript
const config = {
    id: 1,
    isAdmin: false,
    theme: {
        dark: false,
        accessibility: true
    }
};
```
```javascript
const id = config.id;
const isAdmin = config.isAdmin;
const theme = config.theme;
```
```javascript
const {id, isAdmin, theme} = config;
```


### Destructuring with default value
- It's also possible to destructure with a default value, meaning that you can assign a default value to a property if it does not exist in the object you're destructuring from. For example:
```javascript
const user = {
    id: 1,
    name: "Sam"
};

const {name, isAdmin = false} = user;
console.log(isAdmin); // false
```


### Destructure and rename
It's also possible to destructure and rename from an object. For example, let's say you already have a `name` variable so you'd like to destructure `user.name` and assign it to a variable called `userName`. 
```javascript
const name = "Document title"; // name variable is already declared

const user = {
    id: 1,
    name: "Sam",
    isAdmin: true
};

// destructure user.name into variable userName
const {name: userName, isAdmin} = user;
console.log(userName); // "Sam"
```

## Concatenate objects
- In some scenarios, you'd like to merge 2 objects together. You can do that using the `...` spread operator.
```javascript
const firstPerson = {
    name: "Sam",
    age: 18
}

const secondPerson = {
    age: 25,
    type: "admin"
}

const mergedObjects = {...firstPerson, ...secondPerson};
console.log(mergedObjects); // {name: "Sam", age: 25, type: "admin"}
```
- Notice how the new object ended up with the `name` and `type` from both objects. However, regarding the `age`, since it exists in both objects, only the 2nd one persisted. This is why the order of the objects when spreading them matters.


## Optional chaining
- We know that if an object property returns `undefined`, then we should avoid accessing other properties on it (or calling methods on it) so that we don't get an error. This is why you often see code that looks like this:
```javascript
// assuming object `user`

let name = undefined;
if (user.details && user.details.name && user.details.name.firstName) {
    name = user.details.name.firstName;
}
```
- We can't directly write `let name = user.details.name.firstName` if we suspect that, for some reason, `user.details` might be `null` or `undefined`. And the same for `user.details.name`.  This is why we use an **if** condition and check, step by step, that every property returns a value.
- Enter optional chaining. It lets us refactor the entire code above into the following:
```javascript
// assuming object `user`

const name = user.details?.name?.firstName;
```
- This is called optional chaining which allows you to access a property deep within an object without risking an error if one of the properties is `null` or `undefined`.

**Caveats**
- One important note is that you **cannot** use optional chaining on an object that may not exist. The object **has** to exist. Optional chaining is only used to access a property that may or may not exist.
- This means when you access `user.details?.`, you need to make sure that there is a variable (of any type) called `user`. Otherwise, you get an error.


## Optional chaining (advanced)
-   Optional chaining allows you to access a property deep within an object without risking an error if one of the properties is `null` or `undefined`.
-   In case one of the properties is `null` or `undefined`, then the `?.` will short-circuit to `undefined`.
-   You **cannot** use optional chaining on an object that may not exist. The object **has** to exist. Optional chaining is only used to access a property that may or may not exist.
-   Optional chaining can be used for arrays. The syntax is `?.[index]`
-   Optional chaining can be used for functions. The syntax is `?.functionName()`
-   Optional chaining **cannot** be used for assignment. It's _only_ used for **reading**.


## Nullish coalescing
- The nullish coalescing `??` operator is a new operator introduced in JavaScript that allows you to _default_ to a certain value when the left-hand side is a nullish value. A nullish value is a value that is either `null` or `undefined`
```javascript
const getName = name => {
    return name ?? "N/A";
}

console.log(getName("Sam")); // "Sam"
console.log(getName(undefined)); // "N/A"
console.log(getName(null)); // "N/A"
```
- This operator is useful to avoid showing `undefined` or `null` to the User Interface, which are often signs of bugs.

## Short circuit
The nullish coalescing operator will short-circuit if the left-hand side returns a non-nullish value. This means that it will **not** execute the right-hand side. For example:
```javascript
const getPlaceholder = () => {
    console.log("getPlaceholder called");
    return "N/A";
}

const sayHello = name => {
    return `Hello ${name ?? getPlaceholder()}`;
}

console.log(sayHello("Sam")); // "Hello Sam"
```
- You can only use nullish coalescing when the variable is defined.

## Nullish coalescing (advanced)
Nullish coalescing can be used with optional chaining. The main usage here is to safely access a property that could be nullish while also being able to default to a certain value
```javascript
let name = undefined;
if (user.details && user.details.name && user.details.name.firstName) {
    name = user.details.name.firstName;
} else {
    name = "N/A";
}
```
The above code can be refactored as follows:
```javascript
const name = user.details?.name?.firstName ?? "N/A";
```
What happens here is that if any point any part of this expression `user.details?.name?.firstName` short-circuits and returns `undefined` or `null` then we jump to the right side of the `??` operator and default to the string `"N/A"`.

## null vs undefined
`undefined` means that the value has not been defined yet. Whereas, `null` means that the value has been defined but is empty. In most scenarios, this distinction does not matter.


## Refactoring if conditions
This is a common scenario where you can completely get rid of `if` conditions and have far better maintainable code. 
```javascript
const getPushMessage = status => {
    if (status === "received") {
        return "Restaurant started working on your order.";
    } else if (status === "prepared") {
        return "Driver is picking up your food."
    } else if (status === "en_route") {
        return "Driver is cycling your way!";
    } else if (status === "arrived") {
        return "Enjoy your food!";
    } else {
        return "Unknown status";
    }
}
```

This is a very verbose way to deal with it. We can refactor it by creating an object that contains all possible messages, with the `key` of that object being the `status`. Let's refactor it:
```javascript
const getPushMessage = status => {
    const messages = {
        received: "Restaurant started working on your order.",
        prepared: "Driver is picking up your food.",
        en_route: "Driver is cycling your way!",
        arrived: "Enjoy your food!"
    };

    return messages[status] ?? "Unknown status";
}
```
- Notice how we also used nullish coalescing to handle the `else` case when the `status` is different than the ones we provided.


## Implicit conversion
- The `if` statement expects a boolean. However, when you provide it with a value of another type, it will automatically convert it to a boolean. This is called implicit conversion because the conversion is occurring automatically.
- How are the values converted to boolean? Who decides that `"Sam"` is `true`, while `""` is `false`, and `30` is `true` while `0` is `false`? This is where Falsy values come into place.

## Falsy values
In JavaScript, the values below will be converted to `false` and everything else will be converted to `true`:
-   `false` (is already a boolean)
-   `null`
-   `undefined`
-   `0`
-   `NaN`
-   `""` (empty string)
These values above are called `falsy` values because, when converted to boolean, they will be converted to `false`.


## Arrays of objects
- Arrays of objects are the most common data type that you will encounter when working in web development, that's because most APIs (for example, a weather API, Twitter API, etc.) return arrays of objects

### Always visualize the inner object(s)
- A very important tip when working with arrays of objects, especially when iterating over an array of objects, is to add `console.log()` throughout your code to visualize the object that you receive in the callback.


## Using array methods
-   Calling the `.filter()` method on an array of objects will return an array containing the objects that pass the condition you specify in the callback.
-   Calling the `.find()` method on an array of objects will return the first object that matches the condition you specify in the callback, or `undefined` if no objects satisfy the condition.
-   Calling the `.some()` method on an array of objects will return true when **at least one item** in the array satisfies the condition you specified in the callback. Otherwise, it returns `false`.
-   Calling the `.every()` method on an array of objects will return true when **every item** in the array satisfies the condition you specified in the callback. Otherwise, it returns `false`.

## Reducing arrays of objects


## Try... Catch
-   When a function call might fail, it's recommended that you wrap it with a `try...catch` block.
-   This will allow you to recover from errors.


## Automatic Semi-colon Insertion
-   Some specific statements in JavaScript **need** to end with a semi-colon. So, if the programmer left them out, the JavaScript engine will **automatically place a semi-colon**. This is called Automatic Semi-colon Insert and only applies in very specific cases.
-   The most common example of ASI is with the `return` keyword (mostly while writing React code with JSX).

## Arrays & Objects
- Arrays & Objects are both considered **objects** in JavaScript.  
- When you write `[]`, it's the same as creating a new instance of `Array`.  
- When you write `{}`, it's the same as creating a new instance of `Object`.
```javascript
new Array(); // creates []
new Object(); //creates {}
```
```javascript
[] === []; //false
{} === {}; //false
[10] === [10]; //false
{key: "something"} === {key: "something"}; //false
```
- We expected `[] === []` to be true because they are both empty arrays, but the way JavaScript works is different as it's checking if they are the same instance.


## Object assignment
```javascript
const firstArray = [];
const secondArray = firstArray; // secondArray now points to firstArray
console.log(firstArray); // []
console.log(secondArray); // []

firstArray.push(10);
console.log(firstArray); // [10]
console.log(secondArray); // [10]
```
- You may be surprised why does `secondArray` also contain `10` now? Well that's because when we created `secondArray = firstArray`, we are **not** copying `firstArray`, but rather only creating a reference to it.
- When you assign a variable to an object or array, it does NOT copy it. It will only reference its value.


## Deep Equal
- When comparing 2 objects with `===`, we saw that if they were not the same instance we'll get `false`.
- That's because `===` is comparing the references rather than the values. If you'd like to compare by values, then what you're looking for is called **deep equal**.
- Front-end libraries/frameworks do not use a deep equal strategy when comparing their state (before and after), instead, they use the `===` because it's blazing fast.
- This is why you are required to immutably update the state (whether it was an array or an object).

## What is Immutability?
- An immutable object is an object that cannot be changed. Every update creates a new value, leaving the old one untouched.
- it's important that you understand why immutability is needed, how `===` works, and that assigning a variable to an object will not clone it (but rather point to the same reference).

## Immutable arrays
- We saw that assigning an array to a new variable does not make a new copy of it. So, any changes to that new variable will also affect the original variable. To prevent that, you can create a shallow copy of that array using the spread syntax `...`. Here's how it works:
```javascript
const grades = [10, 20];
const gradesCopy = [...grades];
console.log(gradesCopy); // [10, 20] (new array, not linked to 'grades')
```
- The way it works is that you're creating a **new array** with the `[ ]` syntax, and inside of this array, you're spreading the items from the `grades` array.
- This is why this syntax ends up creating a copy rather than pointing to the same reference.
- This is called a _shallow copy_ (in contrast with _deep copy_, more on that at the end of this chapter).
- This technique covers most scenarios for array immutability as with this new array, you will be able to manipulate it without affecting the original array.
- This technique covers most scenarios for array immutability as with this new array, you will be able to manipulate it without affecting the original array.
- Most array methods that you're familiar with will mutate the original array. For example, `.push()` does mutate the array. The same applies to lesser used methods such as `.sort()`.
- On the other hand, the ones that are immutable are `.filter()` and `.map()` because these methods return a new array (rather than modifying the old one). The `.reduce()` method is also immutable since it returns a new value computed from an array.

### Immutable add
- The most common use case for array immutability is immutably adding an item to an array. You can do that in one line also using the `...` syntax:
```javascript
const grades = [10, 20];
const updated = [...grades, 15];
console.log(updated); // [10, 20, 15] (new array, not related to 'grades')
```
- The reason why this works is that you're creating a new array with the `[ ]` syntax, and inside this array, you're spreading the items from `grades` and adding to it a new value which is `15`.

### Immutable array update/remove
- You can also immutably update an array and immutably remove an item using the `.map()` and `.filter()` methods. Example:
```javascript
const grades = [10, 20, 15];
const updated = grades.filter(grade => grade !== 20);
console.log(updated); // [10, 15]
```
- The `.filter()` method returns a new array (so it does not affect the original one). The `.filter()` callback in this example is excluding the `grade` that has a value of 20.

## Immutable objects
- The same concept applies to objects. We need to create a copy of the object instead of changing the original one. To do so, you can also use the `...` operator to clone an object:
```javascript
const user = {
    id: 1,
    age: 23
};
const cloned = {...user};
console.log(cloned); // {id: 1, age: 23} (new object not related to 'user')
```

### Immutable object update
- To immutably update an object, you need to make a copy of it and then add the new `key: value` that will override the previous one.
```javascript
const user = {
    id: 1,
    age: 23
};
const clonedUser = {
    ...user,
    age: user.age + 1
};
console.log(clonedUser); // {id: 1, age: 24} (new object not related to 'user')
```
- Notice how the `age: user.age + 1` overrides the previous value of the `age` property.

### Immutable delete
- Though less used, here's how you can immutably delete a property from an object. It's a combination of object destructuring and the `...` operator:
```javascript
const book = {
    id: 1,
    title: "Harry Potter",
    year: 2017,
    rating: 4.5
}

// GOOD: immutable
const {year, ...rest} = book;
console.log(rest); // { id: 1, title: "Harry Potter", rating: 4.5}
```
- The reason why this works is because `{year, ...rest} = book` is destructuring the value of the key `year` from the `book` object. This is similar to reading `book.year`.
- However, notice how we ask JavaScript to destructure the rest of the object with `...rest`. This means combining all the other key/values in a new object called `rest`. So we end up with `rest` which is an immutable copy of `book` excluding the `year` property!

## Introduction to classes
- When your code starts growing, you will have a few dozen functions in your source code. To better organize your code, you can group functions that perform similar functionalities into a single **class**.
-   Classes allow you to better organize your code by grouping your code (variables & functions) into a single class
-   Classes promote reusability.
-   A _class_ is a factory that is able to create _instances_.
-   Every instance created from a class is unique.

## Constructor
- When you create a new instance of a class, the `constructor()` function will be automatically called. For example:
```javascript
// class definition
class Person {
    constructor() {
        console.log("I was automatically called");
    }
}

// class usage
const person = new Person; // () are optional when there are no arguments
```
- If the constructor expects some parameters, you can pass some arguments to the `new Person(...)` call. These arguments will be passed to the constructor. For example:
```javascript
// class definition
class Person {
    constructor(firstName, lastName) {
        console.log(firstName + " " + lastName);
    }
}

// class usage
const person = new Person("Sam", "Green");
```

## Instance methods
- We previously talked about how classes group common functionality together. This is achieved by defining instance methods. Instance methods are functions that can be called on an **instance** of a class.
```javascript
// class definition
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// class usage
const person = new Person("Sam", "Green");
console.log(person.getFullName()); // "Sam Green"
```
- The `getFullName()` is an instance method. We write it inside the class definition, and then we are able to call it on an instance (for example the variable `person`).
-  You cannot call `Person.getFullName()`. For that to work, `getFullName()` must be a static method. This is explained in the next chapter.
- It only works on instances, which is why it works on `person` because that variable was assigned to `new Person(...)`.

### Accessing instance variables
- In the previous chapter, we captured `constructor` params into instance variables. This allows us to use those instance variables in instance methods, just like we did here in this example.
- The `getFullName()` instance method uses the `this.firstName` and `this.lastName` instance variables.
```javascript
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        // ❌ this does NOT work
        return `${firstName} ${lastName}`;
    }
}
```
- This is what the keyword `this` refers to. It's referring to the current instance of the class.

## RECAP: 
-   Instance methods are functions that can be called on an **instance** of a class.
-   To be able to use instance variables inside an instance method, you have to prefix them with `this.` (as long as they were captured in the `constructor`)
-   Inside an instance method, `this` refers to the current instance of the class.
-   Object-Oriented Programming (OOP) is when you describe the real world with classes (that you can then instantiate which creates objects).
-   An instance method can call another instance method using the `this.functionName()` syntax.

# Class Concepts
## Getters & Setters
### Setter
- Defining getters and setters in a class is _mostly_ used to validate or modify certain values before they are set as properties on a class.
```javascript
class User {
    set age(value) {
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
}
```
- Inside this setter, we're converting the `value` to a number (with `Number.parseInt(string, 10)`), and then we set the result on a new instance variable called `this._age`.
- The `_` here in `_age` is a convention meaning that this property is internal to the class and should not be accessed from outside. JavaScript recently introduced private fields, however, sufficient browser support is not there yet.
- This is very important. If you accidentally set the result on `this.age`, then you end up creating an infinite loop. That's because whenever you try to access `this.age`, JavaScript will automatically call this setter. So you end up with a function that keeps calling itself forever.

### Getter
- The remaining problem is that if we try to access `user.age`, we get `undefined`. That's because we have not defined a `getter` for the `age` property.
- We do that by defining a `get age()` function as follows:
```javascript
class User {
    get age() {
        console.log("age getter");
        return this._age;
    }

    set age(value) {
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
}
```

### Putting it all together
- You can still use getters and setters with the pattern where you capture constructor parameters. That's because, whenever you access `this.age` from within the class, it will also automatically trigger the `set age(value)` function. This is why we had to create an internal property and call it `this._age` to avoid creating an infinite loop.
```javascript
class User {
    constructor(age) {
        this.age = age; // calls set age(value)
    }

    get age() {
        console.log("age getter");
        return this._age;
    }

    set age(value) {
        console.log("age setter");
        this._age = Number.parseInt(value, 10);
    }
}
```
- This allows us to set the `age` when creating a new instance of `User` but also change it later on
```javascript
const user = new User("30");
console.log(user.age); // 30 (number)
user.age = "31";
console.log(user.age); // 31 (number)
```
- The end result shows that we've enforced the `age` to always be a number because we always convert the received value to a number. You can also change the formatting of a number as we'll see in following challenges.


## Static methods & chaining
- We saw in the previous chapter that instance methods are methods that we can call on an _instance_ of a class (the result of `new ClassName()`).
- For some use cases though, we can create methods that can be called directly on the class and _not_ on the instance. Here's how we use them, assuming a class `Config`:
```javascript
console.log(Config.getYear()); // 2021
```
- Notice how we called the method `getYear()` directly on the class `Config` rather than on an instance. In fact, if you call it on an instance, it does not work because this is a `static` method. Here's how you implement this static method:
```javascript
class Config {
    static getYear() {
        // code to get the current year (for example, 2021)
        const date = new Date();
        return date.getFullYear();
    }
}
```

### When to create static methods?
Though static methods are less used compared to instance methods, here are some common questions you can ask yourself that will help you decide if the method should be static:
-   Is the result of this method the same across all instances of the class? If yes, then it should be `static`.
-   Is the method not accessing any instance variable of this class? If yes, then most likely it should be `static`.

### Static methods cannot access this.
- Since static methods are called on the class and not an instance, they cannot access instance variable or instance methods. Thus, you cannot use `this.` inside of them.
- If you find yourself needing to use `this.` inside a `static` method, then it means it should _not_ be `static`.

### Method chaining
- You may sometimes encounter method chaining, which is a method called on the result of another method. For example, assuming a class `Course`:
```javascript
const course = new Course("Learn JavaScript", false);
course.markAsCompleted().setGrade(18).requestCertificate();
```
- Notice how we call `setGrade(18)` on the result `.markAsCompleted()`. Similarly, we call `.requestCertificate()` on the result of `setGrade(18)`.
- For this to work, these instance methods should always return `this`. The reference to the current instance. By doing so, you are able to call other methods on the instance because they're returning the current instance.
- So, instead of writing the following:
```javascript
course.markAsCompleted();
course.setGrade(18);
course.requestCertificate();
```
- You can chain the method calls, because every method is returning `this`, which in this example is the equivalent of `course` (the current instance):
```javascript
course.markAsCompleted().setGrade(18).requestCertificate();
```
- To make this work, you need to make sure that these instance methods are returning `this`:
```javascript
class Course {
    constructor(name, isCompleted) {
        this.name = name;
        this.isCompleted = isCompleted;
    }

    markAsCompleted() {
        this.isCompleted = true;
        return this; // allows method chaining
    }

    setGrade(grade) {
        this.grade = grade;
        return this; // allows method chaining
    }

    requestCertificate() {
        this.askedForCertificate = true;
        return this; // allows method chaining
    }
}
```

## Class inheritance
```javascript
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
}

class Manager extends Employee {
    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter`);
    }   
}
```

## Overriding methods
- What if we'd like a different implementation for `getFullName()`? For example, we'd like to return `(manager)` after the full name. This is possible in inheritance. You can override functions. Here's how:
```javascript
/ assuming the same class definition for Employee

class Manager extends Employee {
    getFullName() {
        return `${this.firstName} ${this.lastName} (manager)`;
    }

    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter`);
    }   
}
```


## Super
```javascript
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getInitials() {
        return this.firstName[0] + this.lastName[0];
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, department) {
        super(firstName, lastName); // super must be called first
        this.department = department;
    }

    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter in ${this.department}`);
    }   
}
```
- The `super(firstName, lastName)` is calling the `Employee` class' constructor. So, `super()` calls the parent class' constructor.
- If the parent class' constructor has no parameters, then you call `super()`. Otherwise, you can pass parameters just like we did in this example with `super(firstName, lastName)`.
- In this example, the `Manager` class will end up having 3 instance variables `this.firstName` and `this.lastName` which are set by the Employee's constructor, and `this.department` which is set by the `Manager`'s constructor.

## Calling parent instance methods
You can also call functions on the parent class  using the `super` keyword:
```javascript
// assuming the same class definition for Employee

class Manager extends Employee {
    constructor(firstName, lastName, department) {
        super(firstName, lastName); // super must be called first
        this.department = department;
    }

    sendPerformanceReview() {
        console.log(`Sent performance review for current quarter in ${this.department}`);
    }

    getFullName() {
        return super.getFullName() + " [manager]";
    }
}
```


## Class vs function
- JavaScript doesn't have real classes! 😨 The `class` syntax you're using is syntactic sugar!
- In fact, if you ask JavaScript about the **type of** Rectangle, you'll get **function**:
```javascript
typeof(Rectangle); //"function"
```
- Before the `class` keyword was added to the language in 2015, here's how we used to write "classes"
```javascript
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
```
- This function serves as the constructor. It's called the function constructor pattern in JavaScript.


## Prototypal inheritance
-   With classical inheritance, you inherit all of the parent's methods
-   With prototypal inheritance (the one in JavaScript), you can inherit specific functions by adding them to the `.prototype`.
-   The `.prototype` holds all the methods that can be called on instances of that class/function.
-   Prototypal inheritance is more powerful than classical inheritance in most cases, however, it is more complicated, and fewer developers are experienced with it.
-   The `extends` keyword, inherits all the methods from the parent. So, it uses prototypal inheritance to simulate classical inheritance.
-   If you need to inherit a specific function, you can still do that by adding to the `.prototype` object.
-   The most common use case is to use `extends` and inherit all the methods.


## The prototype chain
-   Every object in JavaScript inherits the prototype of `Object`.
-   Inheritance works in JavaScript because of the prototype chain.
-   When you call `child.parentMethod()`, JavaScript will walk up the prototype chain until it finds `parentMethod()` or `null` which signifies the end of the prototype chain.


## Private class fields
### Private instance variables
- To mark an instance variable or method as private, you have to prefix it with the `#` (hash sign).
```javascript
class User {
    #votingAge = 18;
}
```
- Now, `#votingAge` is a private class field that **cannot** be accessed from outside of the class. It can only be accessed from inside the class with `this.#votingAge`.
- Note that private class fields **have** to be defined outside of the constructor first. Then, you can decide to re-use them in the constructor.
```javascript
class User {
    #votingAge;

    constructor() {
        // this works ☑️
        this.#votingAge = 18;
    }
}
```

### Private instance methods
- Private instance methods are often denoted as "helper" methods that are only meant to be used from inside the class. Since there was no JavaScript feature that marked instance methods as private, developers were also prefixing them with an `_`.
- However, now with private class fields, you can prefix the method with `#` and it won't be accessible from the outside
```javascript
class User {
    constructor(age) {
        this.age = age;
        this.#logAge();
    }

    #logAge() {
        console.log(this.age);
    }
}

const user = new User(20);
// cannot call user.#logAge() or user.logAge()
```
- The `#logAge` private method cannot be called from outside of the class. It can only be called from the inside. So, the `this.#logAge()` inside the constructor does work indeed but you will not be able to call `#logAge()` on an instance variable.


## SetTimeout
- Calling other servers will result in delays, we need to account for these!
```javascript
setTimeout(() => {
    console.log("One second has elapsed.");
}, 1000);
```
- What the `setTimeout` function does is that it **queues** the `callback` function that you specify in the future. It will wait the `milliseconds` that you specified. In this example, we specified 1000 milliseconds which is the equivalent of 1 second.
- `setTimeout(callback, milliseconds)` is a JavaScript function that queues the `callback` into the future (depending on the `milliseconds` you specify).
- An asynchronous callback is a callback that runs somewhere in the future.
- Your JavaScript code **always** runs top to bottom. However, some parts of the code might be queued for the future.


## The callback pattern
- Before we learn about this technique, please note that there's a better way of doing it using promises.
```javascript
welcomeUser("Sam", () => {
    console.log("Done welcoming user");
});
```
- Note that the second parameter `() => {console.log("Done welcoming user")}` is a function definition.

```javascript
const welcomeUser = (name, callback) => {
    setTimeout(() => {
        console.log(`Welcome ${name}`);
        callback(); // call the success callback function
    }, 1000);
}
```
- The reason why callbacks exist and why it's possible in JavaScript to schedule work for the future is _performance_.
- 