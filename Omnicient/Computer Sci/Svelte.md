---
Tags: [Tools, Frameworks]
---
Related: [[Computer Science]] [[User Interface]] 

# Svelte
Current lesson: https://www.udemy.com/course/sveltejs-the-complete-guide/learn/lecture/14689492#overview
 
## Notes
- Javascript is the only language that runs in the client/browser. 
- Modern web apps use single page builds and API interfaces (json)
- Svelte is a compiler not a framework
- Frameworks like Vue and your code are usually shipped together, and then the server serves compiled responses to the client. 
- Svelte is a compiler that packs your code into vanilla machine readable JS which is then run on server.
- Each Svelte page is a component
	- Components are made up of 
		- `<script>` = logic
		- `<style>` = css
		- html elements (no tag, just a line break)
- package.json lists dependencies and uses node to install them
- `props:` allows you to add key value pairs to main.js which can be called from app.svelte with the command `export let *key*;`

### Base syntax
Event - Data - Output

Data
- Output
	- Change text 
	- Change Css class
	- Set HTML attribute/property
- Input
	- Text entered into the input
	- Button clicked
	- Data loaded from a server
	
Handlebars {} can take simple javascript methods and expressions
e.g. {age + 1} or {age.toUpperCase()}
This should generally be avoided and HTML kept clean

Reactive variables:
- `$:` creates a labelled expression/labeled statement. If an expression is labeled, it will update when a variable is updated. This is useful for keeping logic in the `<script>` section as opposed to having it in the markup. 
- Labeled statements can also trigger other bits of logic; `if` statements, `console.log(name)`, etc.
- If you have a circular input output circuit like `<input type = 'text' value ="{name}" on:input="{nameInput}" />`, then you can use the `bind:` command instead: `<input type = 'text' bind:value="{name}" />`. This should not generally be done because one should generall manage their inputs and outputs explicitly.

Components:
`<Component>` or `<component>`
- Lower case elements will be treated as html elements
- Upper case elements will be treated as custom components
Styles are scoped to component

Props/Exporting variables:
`<script>
export let something = 'something'
</script>`
- Expose access to the variable from outside


	
	
### Articles
- [Svelte kit and Tailwind](https://levelup.gitconnected.com/how-to-use-svelte-kit-with-tailwind-css-jit-just-in-time-compilation-bc04c0c9ec17) [[Tailwind]]
