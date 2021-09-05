
---
Tags: [Frameworks, Calls, Notes, Domains]
---
Related: [[Computer Science]] [[Ome]]

# Conversation with [[Ome]] about Static vs Dynamic languages

- [[Ome]] Gak, [14 Jan 2020 at 14:58:47]:
- This is the best answer that can be given about that topic: https://stackoverflow.com/a/2696369
- TL;DR:
- > There is no real agreement on what "strongly typed" means, although the most widely used definition in the professional literature is that in a "strongly typed" language, it is not possible for the programmer to work around the restrictions imposed by the type system. This term is almost always used to describe statically typed languages.
- The question could be more interesting about dynamicly vs staticly typed systems
- Josh (real or robot?), [14 Jan 2020 at 15:17:50]:
- Thanks, that's actually pretty much we moved to (convo with [[Thomas]]) on the topic of strong/weak... Moves into static/dynamic world as you suggest but I don't get the difference between them particularly well other than dynamic systems are typically smaller in size so better for web apps but more buggy in ways...
- [[Ome]] Gak, [15 Jan 2020 at 10:13:24]:
- dynamic -> quick and dirty
- static -> reliable but hard
- It depends what you are trying to accomplish with your software
- Josh (real or robot?), [15 Jan 2020 at 11:35:01]:
- Is there a middle ground? E.g. Rust being between low level and high level. Is there a semi-static language that is less rigid but still largely predictable?
- Josh (real or robot?), [15 Jan 2020 at 11:40:12]:
- I'm thinking about large scale software (social critical infrastructures) that doesn't fail, built from the grass roots in swarm like organisational patterns... E.g hackathons where people are uncertain how they will be working... So hack and slash but hardening if the shit sticks, so more easily refactorable.... Tall order I know. Agile languages let's say...
- [[Ome]] Gak, [15 Jan 2020 at 12:36:15]:
- Rust looks very promising as a step in that direction. It also has a lively community (which means tooling and know-how around the language) and Mozilla behind it.
- But then people may also say that TypeScript is also a good option. It's basically a hardened version of JS, so many people can learn it easily. And against it, that it actually compiles down to JS, so the guarantees you get are only in the TS -> JS compiler phase, but not at runtime.
- On a completely different direction, a more essoteric alternative is Statebox
- https://statebox.org/
- http://petrinet.org/
- https://edit.statebox.cloud/
- These guys are building tools around applied category theory, which guarantees type correctness among other properties
- You can see the examples in petrinet.org of what is possible to build with their framework
- And in edit.statebox.cloud you can see how their graphical editor works (although it's difficult to understand what is going on without reading their doc, which I don't know where it is right now)
- I see what they are building as potentially opening a whole new paradigm of programming, but it's still super early in the design & development phases
- Still, super interesting to peek into, and I think you would enjoy a lot talking to some of the guys in the statebox community
- By the way, applied category theory goes beyond static types even. If you want to look a bit into this rabbit hole, check out dependent types and Idris.
- https://www.idris-lang.org/
- </spam>
- back to work xP
