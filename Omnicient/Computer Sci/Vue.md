---
Tags: [Frameworks, Tools, Artifacts]
---
Related: [[Computer Science]]
# Vue.Js

#### Structure
- Files
	- Template (Layout)
		- Label
		- Select
		- Option
	- Script 
		- Import/Export
			- Data
				- Props (properties)
			- Methods
			- Computed
				- Compute properties here; e.g. page URLS
	- Style
		- Css
- State (VueX)
	- State
		- Add event to state =`$store`
		- Always at root ($), global namespace
	- Mutations
		- Commit and track state changes
		- Should only be called by actions within the current module
	- Actions
		- Calls mutations
		- Should always wrap a mutation for scalability
	- Getters
- Router
	- `$` is route e.g. `$route.query.page`
	- Route parameters via `path: /events/:page` = `$route.params.page)
	- 
- [Style guide](https://vuejs.org/v2/style-guide/[[Component-instance-options-order-recommended]])
- Toys
	- [Vuetify](https://vuetifyjs.com/en/): Material design components
	- VueNative / [NativeScript](https://play.nativescript.org/)
