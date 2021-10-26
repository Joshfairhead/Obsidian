---
Tags: [Frameworks, Tools, Primitives, Domains, Esoteric]
---
Related: [[Holochain]] [[HoloREA]]


# Perspectivism
- [Perspectivisim repo](https://github.com/lucksus/perspectivism)
- [Readme](https://github.com/perspect3vism/perspect3ve/blob/master/src/ad4m/README.md)

AD4M
- https://github.com/perspect3vism/ad4m-executor/actions

From Luksus:
> Yes, I think Landry's notion about triplication was one of the pieces (among others) that inspired what I'm doing now with Ad4m. I'm intrigued about the dynamic relationship I picture between the 3 entities in Ad4m and which reminded me of Landry's statements about threes. There is an interesting circular interdependence that seems to span off an evolvable and emergent space. And each of those three needs the other two to fully make sense. 
>
>- Agents are rendered/perceived by other agents as a Perspective (the agent's public perspective, i.e. what they claim about themselves and what they share to anybody resolving their DID) and a Language that represents their mailbox - a way to send messages to them. ([https://github.com/perspect3vism/ad4m/blob/main/src/agent/Agent.ts](https://github.com/perspect3vism/ad4m/blob/main/src/agent/Agent.ts "https://github.com/perspect3vism/ad4m/blob/main/src/agent/Agent.ts")) 
>
> - Languages are basically just wrappers around any storage mechanism, implementing a high-level, abstract interface, but they rely on Agents since the objects they address and store have to be authored and signed by agents (hence:" Expression" instead of "object" and "Language" instead of "Storage plug-in"). 
> 
> - Perspectives are fundamental to Agents, as Agent's perceive any Expression _in the context_ of a specific perspective. Perspectives are lists of Link Expressions. Links are triplets pointing to Expressions (of any kind of Language) and they LinkExpressions are Expressions themselves, so they rely on Agent's as well and track who states this particular association between 3 (other) Expressions. 
> 
> So yeah, all three together create a complete set, like base vectors creating a space. Holochain implements Agents and Languages (=DNAs) but doesn't define or map what I call Perspectives. Semantic Web approaches are very similar to what Perspectives represent, but the Semantic Web is not thought in an agent-centric way (i.e. RDF triplets don't have provenance). So you could say, Ad4m is combining these two (I would argue: complementary) approaches and merges them into a coherent formalisation of an agent-centric architecture pattern. 
> 
> The really interesting thing about separating the world into (or describing the world by) these 3 root entities is that we can "bootstrap" a large (infinite?) number of ontologies that are secondary to this base meta-ontology. And I mean not just theoretically bootstrapping ontologies as in describing them - but actually booting a run-time that spans over all yet seen ontologies and that can learn new ontologies as they are discovered in the web. 
> 
> By implementing the core of a run-time with Languages for each of the three entities, the whole system can evolve by agents creating, publishing and using new Languages. So there is a Language of Agents, i.e. something that resolves DIDs to Agent Expressions (as described above), then there is a Language of Languages, which you use to publish new Languages making them accessible via URL and which the run-time uses to automatically look-up Languages when you encounter a Link to an Expression of a Language you don't have yet, and last, there is a Language (well, there can and will be several Languages) about Perspectives. Sharing Perspectives through Languages makes it possible to create very generic agent-centric collaboration spaces - called Neighbourhoods. Or put differently: a Neighbourhood is at its core a set of Agents sharing a Perspective. 
> 
> Not coupling UI code to the specific (partial?) implementations of these three aspects, but accessing implementations through the Ad4m interface of Languages, you can have other Neighbourhoods or apps have their own specific Languages for their specific purpose and even choose their specific set of technologies (Holochain, IPFS, Ethereum, whatever) and still have an Agent "bootstrap into" this specific part of the ad4m-web by downloading and installing Languages as they join new Neighbourhoods.
--------------

Ok, thanks for taking the time to articulate this Luksus; it's all quite helpful. I can understand most of what you've written but its taken some consideration to properly grok the description.  

> Agents are rendered/perceived by other agents as a Perspective (the agent's public perspective, i.e. what they claim about themselves and what they share to anybody resolving their DID).

In particular this helps me understand waht your up to. Perspectives sound like a natural sucessor to profiles in a way. It feels like a less monolithic take on 'identities' as they're concieved of in the Sovrin/IIW spaces. A more accurate term and multidimensional representation. This is the direction I was hoping that Digital Identity might start to go (shudders at the term). 

> Languages are basically just wrappers around any storage mechanism, implementing a high-level, abstract interface, but they rely on Agents since the objects they address and store have to be authored and signed by agents 

Right, thanks. Again clearing some stuff up. So if I understand you right expressions are a unit of language authored by an agent. You say the essence is as an abstraction of storage/objects, but something tells me there is more to it than that. Would authored/signed algorythms and functions also constitute units of a language/expressions? Perhaps thats what you imply in the follewing lines:

> Perspectives are lists of Link Expressions. Links are triplets pointing to Expressions (of any kind of Language) and they LinkExpressions are Expressions themselves, so they rely on Agent's as well and track who states this particular association between 3 (other) Expressions. 

That said, I find the above a bit confusing. To be clear, this is what I'm understanding:
- Perspectives are linked expressions; essentially triples which point to stored objects (but potentially other things). This is a language in itself. 

> So yeah, all three together create a complete set, like base vectors creating a space. Holochain implements Agents and Languages (=DNAs) but doesn't define or map what I call Perspectives

Ok, this framing makes sense. DNA as a language makes sense; a syntax of zomes (expressions). Agents feel more fuzzy to me; I guess its agent keys but also percieve varous zomes themselves (personas, deep key, conductor etc) as factors that "agents" are composed from... I'm curious where the boundaries that constitute the definition of agents lie (perhaps its just something I've not properly understood because I'm playing with the code).

> The really interesting thing about separating the world into (or describing the world by) these 3 root entities is that we can "bootstrap" a large (infinite?) number of ontologies that are secondary to this base meta-ontology

Yes I can see this is a pragmatic triple for bootstrapping. I'm compelled to ask a question here; do perspectives have to be in triadic format? It makes sense as a base type for the meta language but seems restrictive otherwise. My feeling is no they don't but my reasoning is just a hunch; I can imagine that tetrads and other forms can be described as perspectives. 