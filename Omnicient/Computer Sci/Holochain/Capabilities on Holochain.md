---
Tags: [Artifacts, Deliverables, Articles]
---
Related: [[Holochain]] [[Computer Science]]

# Capabilities On Holochain
**History**
- Arguably the biggest mistake in the history of computing is the permissions model. This has resulted in billions of dollars in systems administrator costs and the emergence of centralised BIG tech (GAFA - Google, Amazon, Facebook, Apple). 
- According to Conways Law; we shape the tools we make in our own image, and from then on the tools make us in their image... Put more simply, if all you have is a hammer, everything else looks like a nail. We have had over 50 years of permissions, which has shaped our corporations, tools and ultimately perceptions of reality into a paradigm of command and control. We've even learned to depend on these structures!
- But alas, it didn't have to be this way. We could have created some thing more relational and had an entirely different present tense - we could have implemented capabilities as a pattern!

**Capabilities vs Permissions**
- The difference between capabilities and permissions may seem pretty small but it has huge emergent effects, as illustrated above. So whats the difference in framing?
- Let's take a very concrete example; I'm staying in your house and fancy a cup of tea - stating my thirst out loud you might say "help yourself to the kettle" (capability granted), or I might ask you for the permission to fish out a teabag from your cupboard. As you might observe, it's much of a muchness and they are two views of the same thing - but I pose to you reader; which one feels warmer and more enabling? Asking for something or being offered? I'm going to guess the latter is most peoples preference. 
- Ok, so thats the general concept - but whats actually going on deep down? Well in technological terms we are compressing an access matrix. In particular we've been using the pattern of relating subject to object for many years now rather than the other way around, which is where the pathology lies. Capabilities is relating object to subject; if you have the token then you can do the thing. 
- For more information I recommend this video I filmed back at the internet identity workshop 2017: https://www.youtube.com/watch?v=qZ2LltOmD5A&t=1s

**Capabilities on Holochain**
- Links:
	- A very nice post by Paul on Capabilities: https://forum.holochain.org/t/capability-delegation/1082
	- A video of Art explaining Capbailities: https://www.youtube.com/watch?v=d2OofjB2Yj0
- The Holochain security model is based on capabilities. The first capability token you might encounter is embedded in your source chain header as your agent ID. This token is a public key, which matches a private key that enables you to write to your source chain. You can then write an entry providing another ID the ability to read a given entry. 
- Lets go through an example:
	- Create a private entry on your source chain that contains a message.
	- Create another entry containing a link to the post and allow the receiving agents ID. This is a capability grant, you can optionally parameterise it.
	- Pass a hash of the capability grant to the second party so they can point at it when trying to access the message. This is a capabilities claim. When the second party wants to read the message they follow the hash and do a send/receive on the entry. (See: https://developer.holochain.org/docs/concepts/8_node_to_node_messaging/)

**Token structure**
- Now that we know how capabilities work, we can ask ourselves about the structure, which is relatively simple:
	- Theres an array of keys (whos allowed to read)
	- Theres an array of what (function calls/parameterisation)
	- These arrays can be updated/deleted

**The upside**
- The nice thing about capabilities is that unlike permissions lists you can delegate access as you wish and specify exactly who can call which functions and pre-parameterising them, with later flexibility to amplify or attenuate the level of access permitted. In a nutshell, it's a far more flexible and secure pattern than the permissions paradigm. 
