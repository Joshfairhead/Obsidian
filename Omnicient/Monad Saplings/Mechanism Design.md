---
Tags: [Primitives, Frameworks, Domains]
---
Related: [[Omnicient/Monad Saplings/Games]] [[Game Theory]] [[Crypto Economic Primitives]] [[Economic Markets]] [[Meta-learning]] [[Omnicient/Monad Saplings/Design]]
# Mechanism Design
#### References
- Less Wrong - [Mechanism design](https://www.lesswrong.com/s/Yh4YsGDD9WYiZqRnf/p/xTvdaCwaeZnePMuX5#fn1)
- LessWrong - [Incentive compatibility and the revelation principle](https://www.lesswrong.com/posts/N4gDA5HPpGC4mbTEZ/incentive-compatibility-and-the-revelation-principle)

#### LessWrong Notes
- A generic agent has the label __i__
- A set or variable __Z__ __i__ belongs to agent __i__
- We can also describe __Z-i__ which means __Z__ without agent __i__ (but other agents such as __Z1__)
- This enables us to write __Z__ as (__Z__ __i__, __Z__ − __i__), highlighting agent __i__’s part in the profile.
- Agent traits are knows as "types" and "type space" can be considered their affordances
- A typical notation for the type of agent __i__ is __θ__ __i__, an element of the type space Θ __i__.
- In particular, we might want specific outcomes to occur for each profile of types. A goal like this is called a __social choice function__, specifying a mapping from profiles of agent types to outcomes __f__:  ∏ __i__ Θ __i__ → __X__. A social choice function __f__ says, “If the types of agents are __θ__ 1 through __θ__ __N__, the outcome __f__(__θ__1, …, __θ__ __N__) ∈ __X__ should happen”.
- We’ll formalize any possible institution as a __mechanism__ (__M__, __g__) consisting of a set of messages __M__ __i__ for each agent and an outcome function __g__:  ∏ __i__ __M__ __i__ → __X__ that assigns an outcome for each profile of messages received from agents.
