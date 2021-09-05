---
Tags: [Primitives]
---
Related: [[Computer Science]]
# Clojure from the Ground Up

- source:: https://aphyr.com/tags/Clojure-from-the-ground-up
- Contents
    - welcome
    - types
        - types are nouns. functions are verbs
        - a group of values that work the same waya group of values that work the same way
        - some types overlap and intersect
            - 
        - some types completely subsume another
        - sometimes hierarchical makes sense, like animals
        - sometimes not, like fuzziness
    - integers
    - (INC Long/MAX_VALUE) -> integer ArithmeticException integer overflow
    - dope
    - can use bigint for arbitrary-precision integers
    - wow. can use short for small numbers. and byte. try /MAX_VALUE for any of them
    - fractional numbers
    - "Putting the verb **first** in each list allows us to add or multiply more than one number in the same step:" [[Clojure]]
    - wow that is something i knew but never articulated or formulated clearly in my head
    - this also lets you define identities with 0-arity and 1-arity
    - (+) => 0
    - (*) => 1
    - (- 2) => -2
    - (<= 1 2 3 ) holy fuck this tells you if the whole list is sorted
    - (< 1 1 2) holy fuck tells you if sorted and unique [[Clojure]]
    - Symbols
    - bare strings of characters
    - full (fully qualified) or short names (local)
    - (class 'str)
    - (= str clojure.core/str)
    - most common use: as references/lookups to point to other values
    - Keywords
    - vectors
    - maps
    - map can be verb, keyword can be, or use get! [[Clojure]]
    - it just feels like you're breaking the rules sometimes with Clojure... master the rules like a pro, break them like an artist quote
    - ({:jeff 1 :dros 2} :jeff) => 1
    - (:jeff {:jeff 1 :dros 2}) => 1
    - (get {:jeff 1 :dros 2} :jeff) => 1
    - can take a default value to return smth other than nil
    - im pretty sure data type can be a key in Clojure... [[Clojure]]
    - can (type type)
    - functions
    - sequences
    - can create map, filter, reduce, all with basic recursion
    - and you can create map and filter from reduce, no?
    - map
    - filter
    - Almost
 any operation on a sequence can be expressed in terms of a 
reduce–though for various reasons, many of the Clojure sequence 
functions are not written this way [[Clojure]]
    - iterate - builds off previous: x, (f x), (f (f x)) just like in recursion
    - **side effect free**
    - take
    - repeat and repeatedly
    - (take 5 (repeat (rand))) - same rand reused
    - (repeatedly rand) recomputes function each time - diff rand each time
    - rand **impure**
    - range of course, v similar to [[Python]]
    - cycle is nasty holy
    - "If
 one sequence is bigger than another, map stops at the end of the 
smaller one. We can exploit this to combine finite and infinite 
sequences."
    - this
 is default behavior for map, zipmap, interleave, etc. i always knew it 
ended with the shorter seq, but never made the connection to infinite 
and finite seqs [[Clojure]]
    - oh there's a shuffle coll function. must be impure
    - subseq
    - take and drop for subseq beginning
    - take-last and drop-last for end
    - take-while and drop-while use a fn
    - split-at an index
    - split-with uses a fn
    - filter if true, remove the complement
    - partition n and partition-by f
    - hollllllly molyyyyy
    - annihilates problems 30 and 31 on 4Clojure
    - collapsing sequences
    - group-by
    - frequencies
    - reduce and reductions!!
    - can reduce conj data structure, or use the fn made specifically for this into!
    - ooh reduced for early termination (say for infinite seqs)
    - Almost
 any operation on a sequence can be expressed in terms of a 
reduce–though for various reasons, many of the Clojure sequence 
functions are not written this way [[Clojure]]
    - macros
    - functions rewrite values, macros rewrite code [[macros]]
    - lisp is its own [[metalanguage]] [[homoiconic]]
    - there's procedural macro system (Clojure), templating expressions ([[Scheme]]), and even more powerful [[f-expressions]]
    - [[Scala]] has macros, but the syntax tree looks nothing like the code itself
    - [[special forms]]
    - fixed in Ruby, JS, etc.
    - just macros in Clojure that you can redefine
	- ` ` syntax quote: like normal quote - defining data, don't eval - but can be unquoted to evaluate expressions
    - ~ unquote
    - ~@ unquote-splice: explodes a list
    - particularly great for taking arbitrary number of args or recursive expansions
    - or__5516__auto__ generated to prevent naming conflicts/collisions with local namespace
    - can youse gensym similarly to generate new symbols
    - escape hatch: can override local variable with ~'foo instead of foo#
    - aka symbol capture, anaphoric, unhygenic macro
    - or and if all macros that do not obey normal execution order
    - they can short-circuit and manage control flow
    - recursion
    - when memory cannot be freed up from the stack, because it needs the deeper functions to return
    - [[tail-recursive]] function with recur
    - lol you can use without loop
    - but you can think of loop "like a recursive let"
    - laziness
    - When
 using lazy-seq and its partner lazy-cat, you don’t have to use recur–or
 even be [[tail-recursive]]. The macros interrupt each level of recursion, 
preventing stack overflows.
    - ?????
    - for
    - can use :when for filter, :while for exit condition, :let for binding
    - threading macro
    - wow.
    - macroexpand just blowing my mind, showing me what these macros turn into
    - (macroexpand
'(->> (range 10)
(filter odd?)
(reduce +)))
;; => (reduce + (filter odd? (range 10)))
    - (macroexpand
'(-> {:proton :fermion}
(assoc :photon :boson)
(assoc :neutrino :fermion)))
;; => (assoc (assoc {:proton :fermion} :photon :boson) :neutrino :fermion)
    - Clojure
 isn’t just function-oriented in its syntax; it can be object-oriented, 
and stack-oriented, and array-oriented, and so on–and **mix all of these styles freely, in a controlled way**. If you don’t like the way the language fits a certain problem, **you can write a macro which defines a **new** language, specifically for that subproblem.** [[Clojure]] [[macros]]
    - cond, condp and case,
 for example, express a language for branching based on 
predicates. ->, ->>, and doto express object-oriented and other
 expression-chaining languages.
    - [core.match](https://github.com/clojure/core.match) is a set of macros which express powerful **pattern-matching** and substitution languages.
    - [core.logic](https://github.com/clojure/core.logic) expresses syntax for **logic programming**, for finding values which satisfy complex constraints.
    - [core.async](http://clojure.com/blog/2013/06/28/clojure-core-async-channels.html) restructures Clojure code into **asynchronous** forms so they can do many things at once.
    - For those with a twisted sense of humor, [Swiss Arrows](https://github.com/rplevy/swiss-arrows) extends the threading macros into evil–but delightfully concise!–forms.
    -  read https://aphyr.com/posts/268-language-power [[macros]]
    - state
    - In Clojure, new functions "close over" all variables -- except their arguments which are provided at invocation
    - because fns close over arguments, their evaluation can be deferred
    - currying functions (function factories) allow you to eval expression outside normal sequential order [[concurrency]]
    - delays: lazy
    - futures: parallel
    - promises: concurrency without specifying evaluation
    - "delays and futures built on top of promises, in a way"
    - vars, ^:dynamic binding
    - atoms
    - swap! consecutive, transactional, observable by all
    - swap! takes in a strictly pure fn
    - other languages need locks and shit. super easy with clojure bc immutable data structures, immutable variables, and pure fns
    - Atoms are a great way to represent state, but they are only linearizable **individually**.
    - refs
    - what if you have multiple places of state, that need to update in sync? e.g. banking transactions
    - group transactions with dosync
    - Refs
 are a powerful construct, and make it easier to write complex 
transactional logic safely. However, that safety comes at a cost: **refs are typically an order of magnitude slower to update than atoms.**
    - ensure
    - commute commutative property
    - alter
	- ![](assets/clojuretable.png)
    - logistics
    - a bit of lein, some testing, mainly just data processing tho
    - FPs like [[Erlang]], [[Modula-2]], [[Haskell]], [[Perl]], or [[ML]] have namespaces/modules/packages with 100s of functions
    - [[OOP]] languages will have 100s of classes, some with only one function/method within
    - modeling
    - roadmap
    - [[Debugging]]
