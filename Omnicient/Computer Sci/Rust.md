---
Tags: [Frameworks, Domains, Index, Refactor]
---
Related: [[Computer Science]] [[Rust Constructs]]

# Rust Index

- Learn Rust
	- [[Rust Constructs]] by Hadyatt
	- [Rust From Scratch](https://www.educative.io/courses/learn-rust-from-scratch)
	- [Rust book](https://doc.rust-lang.org/book/) - Extensive details
	- [Rust by Example](https://doc.rust-lang.org/rust-by-example/) - See how to work with language features
	- [Rustlings](https://github.com/rust-lang/rustlings) - Practical language introduction by fixing series of small problems
	- [Tour of Rust](https://tourofrust.com/) - Interactive tour
		- [Tour of Rust](https://tourofrust.com/TOC_en.html) - Table of contents
	- [Half-hour to learn Rust](https://fasterthanli.me/articles/a-half-hour-to-learn-rust) - test your knowledge of Rust details
	- [Learn Rust by writing a simple game | Opensource.com](https://opensource.com/article/20/12/learn-rust)
	- [Learn Rust article](https://towardsdatascience.com/you-want-to-learn-rust-but-you-dont-know-where-to-start-fc826402d5ba)
	- [Rust battle 4](https://rustbattle.net/)
	- [Rust Patterns](https://rust-unofficial.github.io/patterns/)
	- [Rust intro](https://forum.holochain.org/t/rust-intro/3667/4) (Nastasias devcamp post)
	- [Getting started with Rust](https://stackoverflow.blog/2021/03/15/getting-started-with-rust/) - Stack overflow. Context, key concepts, links

#### Unusual Rust features
- If you don’t have enough time and can only focus on a few things, **this is the part you should read**. These features and their syntax are very specific to Rust and are responsible for most of the confusion among the language learners.
	- ownership memory model
		- TL;DR: there’s no garbage collection and you don’t manually make calls to free memory. Instead, you use syntax to specify which function would have to (automatically) free memory for which variable. In other words, which function is the variable’s owner.
		- proper explanation from the official doc: [https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html 2](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)
	- string implementation (&str and String data types)
		- TL;DR: string literals &str are immutable and compile time defined; String data type is mutable and run time defined. This separation simplifies memory management.
		- proper explanation from the official doc: [https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-string-type 1](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-string-type)
	- there is no built-in None/nil/null value
		- TL;DR: it’s impossible for a variable to not be initialized: it either has a value corresponding to it’s type or doesn’t exist. But you can define variable using special enum Option that implements a None value.
		- proper explanation from the official doc: [https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html#the-option-enum-and-its-advantages-over-null-values 1](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html#the-option-enum-and-its-advantages-over-null-values)
	- error handling with Result enum and ? symbol after function calls
		- TL;DR: if your function can result in an error, you can define it’s return value using the Result enum and specify data type of successful and failed function result. Every time you see ? symbol in the code, it means that function preceding it returns some kind of Result.
		- proper explanation from the official doc: [https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#recoverable-errors-with-result 2](https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#recoverable-errors-with-result)

#### Rust features that you should be familiar with
- code structure: packages, crates and modules
	- TL;DR: package is the highest level of hierarchy and it can contain several crates. Each crate can contain several modules. Modules can be either a single file or a directory.
	- proper explanation from the official doc: [https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html 2](https://doc.rust-lang.org/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html)
- Cargo tool: building the Rust code and dependency management
	- TL;DR: Cargo takes care of calling compiler with all the necessary options for you. It also automatically downloads code dependencies.
	- proper explanation from the official doc: [https://doc.rust-lang.org/book/ch01-03-hello-cargo.html#hello-cargo 1](https://doc.rust-lang.org/book/ch01-03-hello-cargo.html#hello-cargo)
	- see more at: https://doc.rust-lang.org/cargo/index.html
- all variables are immutable by default (and that’s it! no TL;DR)
	- proper explanation from the official doc: https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html#variables-and-mutability
- double and single quotes have different meaning when working with the character & string types
	- TL;DR: char literals are specified with single quotes, as opposed to string literals, which use double quotes
	- proper explanation from the official doc: [https://doc.rust-lang.org/book/ch03-02-data-types.html#the-character-type 1](https://doc.rust-lang.org/book/ch03-02-data-types.html#the-character-type)
- enums and pattern matching syntax
	- TL;DR: enums are not int values under the hood and pattern matching is a bit similar to switch/case operator
	- [https://doc.rust-lang.org/book/ch06-00-enums.html 1](https://doc.rust-lang.org/book/ch06-00-enums.html)
- what are structs
	- TL;DR: bunch of data fields stored together. Golang also has structs, and for [[OOP]] languages that would be data fields of a class.
	- proper explanation from the official doc: https://doc.rust-lang.org/book/ch05-00-structs.html
- what are generic data types
	- TL;DR: these are called generics in Java too and templates in C++. They allow to implement code once but use it for multiple data types.
	- proper explanation from the official doc: https://doc.rust-lang.org/book/ch10-01-syntax.html#generic-data-types
- what are traits
	- TL;DR: these are called interfaces in Golang and Java, abstract classes in [[Python]] and C++. They allow to guarantee existence of certain methods with specified signatures for structs that implement these
	- proper explanation from the official doc: [https://doc.rust-lang.org/book/ch10-02-traits.html#traits-as-parameters 1](https://doc.rust-lang.org/book/ch10-02-traits.html#traits-as-parameters)

#### Rust features you can ignore for now
- lifetimes: if you want to learn more, read [this documentation](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html#thinking-in-terms-of-lifetimes)

#### Tools
- [Rust Community’s crate registry](https://crates.io/)
- [Rust Playground](https://play.rust-lang.org/) - Try writing your own code
- Atom Rust IDE
	- https://atom.io/packages/ide-rust
	- https://blog.atom.io/2017/09/12/announcing-atom-ide.html


#### News
- [Rust in blockchain](https://rustinblockchain.org/)


#### Notes
Notation forms
Implicit | Explicit 