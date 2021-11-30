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

Ok, thanks for taking the time to articulate this for me Luksus; it's all quite helpful. I think I recognise most of what you've written but its taken some consideration to properly grok the interactions.  

> Agents are rendered/perceived by other agents as a Perspective (the agent's public perspective, i.e. what they claim about themselves and what they share to anybody resolving their DID).

The above in particular helped make things more concrete for me. Perspectives sound like a natural sucessor to profiles in a way. They also feel like a less cannoical take on 'identities' as they're often concieved of in the Sovrin/IIW spaces; more accurate in terminology and multidimensional in representation. This is about the direction I was hoping that Digital Identity might start to go (shudders at the term) as I've watched the space for a while and always felt it was a bit opinionated. 

> Languages are basically just wrappers around any storage mechanism, implementing a high-level, abstract interface, but they rely on Agents since the objects they address and store have to be authored and signed by agents 

Right, thanks. Again clearing some stuff up. So if I understand you right expressions are a unit of language authored from the perspective of an agent. You languages are an abstraction of storage/objects, but something tells me there is more to it than that? Would authored/signed algorythms and functions also constitute units of a language/expressions? Perhaps thats what you imply in the follewing lines:

> Perspectives are lists of Link Expressions. Links are triplets pointing to Expressions (of any kind of Language) and they LinkExpressions are Expressions themselves, so they rely on Agent's as well and track who states this particular association between 3 (other) Expressions. 

That said, I still find the above quote a little confusing. To be clear, this is what I'm understanding:
- Perspectives are linked expressions.
- Linked expressions are triplicated units of a language authored by an agent.
- Languages are stored objects (but potentially other things) authored by an agent. 

> So yeah, all three together create a complete set, like base vectors creating a space. Holochain implements Agents and Languages (=DNAs) but doesn't define or map what I call Perspectives

Ok, this framing makes sense. DNA as a language makes sense; a syntax of zomes (expressions). Agents feel more fuzzy to me; I guess its an agent keys but I also percieve various zomes themselves (personas, deep key, conductor etc) as factors that constitute "agents"? I'm curious where the boundaries that constitute the definition of agents lie (perhaps its just something I've not properly understood because I'm not stuck in with the code). 

> The really interesting thing about separating the world into (or describing the world by) these 3 root entities is that we can "bootstrap" a large (infinite?) number of ontologies that are secondary to this base meta-ontology

Yes, I vibe that this is a pragmatic triple for bootstrapping. I'm compelled to ask a question here; do perspectives always have to be in triadic format? It makes sense as a base type for the meta language but the constraint seems restrictive for articulating languages. My feeling they don't need to be triples but thats just a hunch; I can imagine that tetrads and other forms can be described as perspectives, at least at the lower level.  

----
Follew up thread:

1.  ## ontie.michelle _—_ 10/29/2021
    
    @JoshAFairhead What happens if you reorient your perception of the structure towards seeing forms rather than languages? The _language_ being discussed is iterations of Thing1-relationshipBetween1&2-Thing2 (correct me if I am wrong). I see an important freedom in embracing that these relationships are forms rather than mini-languages. Conflating the concept of languages into the system of formalizations may be conventional to programmers but is not meaningfully generalizable, and thus system-limiting (edited)
    

November 2, 2021

3.  ![](https://cdn.discordapp.com/avatars/318930736566763521/66ace4dbc03abca4a38fb39c9859c561.webp?size=16)@JoshAFairhead
    
    > Languages are basically just wrappers around any storage mechanism, implementing a high-level, abstract interface, but they rely on Agents since the objects they address and store have to be authored and signed by agents Right, thanks. Again clearing some stuff up. So if I understand you right expressions are a unit of language authored from the perspective of an agent. You languages are an abstraction of storage/objects, but something tells me there is more to it than that? Would authored/signed algorithms and functions also constitute units of a language/expressions? Perhaps thats what you imply in the following lines:
    
    ![ ](https://cdn.discordapp.com/avatars/438478591978766337/f5139236c4e6944efb66fdefcaabb406.webp?size=80)
    
    ## Nicolas Luck _—_ 11/02/2021
    
    A Language defines its set of Expressions. An Expression is like an object, but since there is nothing objectively true / for granted, other than what Agents express, I call the objects in AD4M Expressions. And hence, the classes of Expressions I call Languages. So yes, you could easily write a language that stores code. In fact, the Language of Languages does exactly that. It's expressions are the bundled JS code files, addressed by their IPFS file hash. So that, if you join a new Neighbourhood and find links to Languages you don't have installed, the ad4m-executor will automatically try to install these missing Languages by doing a look-up with the Language hash (which is the schema part in the Expression-URL: `<language hash>://<expression address>`), given that you trust the authors of those Languages, or if they are template clones of Languages that you trust.
    
4.  ![](https://cdn.discordapp.com/avatars/318930736566763521/66ace4dbc03abca4a38fb39c9859c561.webp?size=16)@JoshAFairhead
    
    > Perspectives are lists of Link Expressions. Links are triplets pointing to Expressions (of any kind of Language) and they LinkExpressions are Expressions themselves, so they rely on Agent's as well and track who states this particular association between 3 (other) Expressions. That said, I still find the above quote a little confusing. To be clear, this is what I'm understanding: - Perspectives are linked expressions. - Linked expressions are triplicated units of a language authored by an agent. - Languages are stored objects (but potentially other things) authored by an agent. > So yeah, all three together create a complete set, like base vectors creating a space. Holochain implements Agents and Languages (=DNAs) but doesn't define or map what I call Perspectives Ok, this framing makes sense. DNA as a language makes sense; a syntax of zomes (expressions). Agents feel more fuzzy to me; I guess its an agent keys but I also perceive various zomes themselves (personas, deep key, conductor etc) as factors that constitute "agents"? I'm curious where the boundaries that constitute the definition of agents lie (perhaps its just something I've not properly understood because I'm not stuck in with the code). > The really interesting thing about separating the world into (or describing the world by) these 3 root entities is that we can "bootstrap" a large (infinite?) number of ontologies that are secondary to this base meta-ontology Yes, I vibe that this is a pragmatic triple for bootstrapping. I'm compelled to ask a question here; do perspectives always have to be in triadic format? It makes sense as a base type for the meta language but the constraint seems restrictive for articulating languages. My feeling they don't need to be triples but thats just a hunch; I can imagine that tetrads and other forms can be described as perspectives, at least at the lower level.
    
    ![ ](https://cdn.discordapp.com/avatars/438478591978766337/f5139236c4e6944efb66fdefcaabb406.webp?size=80)
    
    ## Nicolas Luck _—_ 11/02/2021
    
    > - Perspectives are linked expressions.
    
    Actually, Perspectives are graphs, represented only by their edges (which are triple links) since the expressions have "objective" / global URLs. So, really, the vertices are there but bundled in the edges. [https://github.com/perspect3vism/ad4m/blob/main/src/perspectives/Perspective.ts](https://github.com/perspect3vism/ad4m/blob/main/src/perspectives/Perspective.ts "https://github.com/perspect3vism/ad4m/blob/main/src/perspectives/Perspective.ts")
    
    > - Linked expressions are triplicated units of a language authored by an agent.
    
    First, links are just triplets of strings (since Expression URLs are represented as URL strings). [https://github.com/perspect3vism/ad4m/blob/main/src/links/Links.ts](https://github.com/perspect3vism/ad4m/blob/main/src/links/Links.ts "https://github.com/perspect3vism/ad4m/blob/main/src/links/Links.ts") But these link triple objects get wrapped with the Expression generic, which adds author, timestamp and signature: [https://github.com/perspect3vism/ad4m/blob/45c515bca7e59013c0327b901e7936f7c9b1ec65/src/expression/Expression.ts#L42](https://github.com/perspect3vism/ad4m/blob/45c515bca7e59013c0327b901e7936f7c9b1ec65/src/expression/Expression.ts#L42 "https://github.com/perspect3vism/ad4m/blob/45c515bca7e59013c0327b901e7936f7c9b1ec65/src/expression/Expression.ts#L42")
    
    > - Languages are stored objects (but potentially other things) authored by an agent.
    
    No, Languages are code plugins that store Expressions (=objects authored by an agent). What kind of objects, what shape, schema or format they have and what technology to use for storing those - and even if new Expressions can be created at all, or if the Language defines a static and finite set of Expressions used as an ontology to tag other Expressions, all of that is up to the Language (developer) to decide.
    
    GitHub
    
    [ad4m/Perspective.ts at main · perspect3vism/ad4m](https://github.com/perspect3vism/ad4m/blob/main/src/perspectives/Perspective.ts)
    
    The Agent-Centric Distributed Application Meta-ontology or just: Agent-Centric DApp Meta-ontology - ad4m/Perspective.ts at main · perspect3vism/ad4m
    
    [![](https://images-ext-2.discordapp.net/external/OddRgAVDM3dmBwo2rvG-8Hh9yO6OSStSVfvpybr0seA/https/opengraph.githubassets.com/1e051deb367a48f327410259ff09523297cfb377917e8b406b9311bf06a118d4/perspect3vism/ad4m?width=400&height=200)](https://opengraph.githubassets.com/1e051deb367a48f327410259ff09523297cfb377917e8b406b9311bf06a118d4/perspect3vism/ad4m)
    
    GitHub
    
    [ad4m/Links.ts at main · perspect3vism/ad4m](https://github.com/perspect3vism/ad4m/blob/main/src/links/Links.ts)
    
    The Agent-Centric Distributed Application Meta-ontology or just: Agent-Centric DApp Meta-ontology - ad4m/Links.ts at main · perspect3vism/ad4m
    
    [![](https://images-ext-2.discordapp.net/external/OddRgAVDM3dmBwo2rvG-8Hh9yO6OSStSVfvpybr0seA/https/opengraph.githubassets.com/1e051deb367a48f327410259ff09523297cfb377917e8b406b9311bf06a118d4/perspect3vism/ad4m?width=400&height=200)](https://opengraph.githubassets.com/1e051deb367a48f327410259ff09523297cfb377917e8b406b9311bf06a118d4/perspect3vism/ad4m)
    
    GitHub
    
    [ad4m/Expression.ts at 45c515bca7e59013c0327b901e7936f7c9b1ec65 · pe...](https://github.com/perspect3vism/ad4m/blob/45c515bca7e59013c0327b901e7936f7c9b1ec65/src/expression/Expression.ts)
    
    The Agent-Centric Distributed Application Meta-ontology or just: Agent-Centric DApp Meta-ontology - ad4m/Expression.ts at 45c515bca7e59013c0327b901e7936f7c9b1ec65 · perspect3vism/ad4m
    
    [![](https://images-ext-2.discordapp.net/external/OddRgAVDM3dmBwo2rvG-8Hh9yO6OSStSVfvpybr0seA/https/opengraph.githubassets.com/1e051deb367a48f327410259ff09523297cfb377917e8b406b9311bf06a118d4/perspect3vism/ad4m?width=400&height=200)](https://opengraph.githubassets.com/1e051deb367a48f327410259ff09523297cfb377917e8b406b9311bf06a118d4/perspect3vism/ad4m)
    
5.  ![](https://cdn.discordapp.com/avatars/318930736566763521/66ace4dbc03abca4a38fb39c9859c561.webp?size=16)@JoshAFairhead
    
    > Perspectives are lists of Link Expressions. Links are triplets pointing to Expressions (of any kind of Language) and they LinkExpressions are Expressions themselves, so they rely on Agent's as well and track who states this particular association between 3 (other) Expressions. That said, I still find the above quote a little confusing. To be clear, this is what I'm understanding: - Perspectives are linked expressions. - Linked expressions are triplicated units of a language authored by an agent. - Languages are stored objects (but potentially other things) authored by an agent. > So yeah, all three together create a complete set, like base vectors creating a space. Holochain implements Agents and Languages (=DNAs) but doesn't define or map what I call Perspectives Ok, this framing makes sense. DNA as a language makes sense; a syntax of zomes (expressions). Agents feel more fuzzy to me; I guess its an agent keys but I also perceive various zomes themselves (personas, deep key, conductor etc) as factors that constitute "agents"? I'm curious where the boundaries that constitute the definition of agents lie (perhaps its just something I've not properly understood because I'm not stuck in with the code). > The really interesting thing about separating the world into (or describing the world by) these 3 root entities is that we can "bootstrap" a large (infinite?) number of ontologies that are secondary to this base meta-ontology Yes, I vibe that this is a pragmatic triple for bootstrapping. I'm compelled to ask a question here; do perspectives always have to be in triadic format? It makes sense as a base type for the meta language but the constraint seems restrictive for articulating languages. My feeling they don't need to be triples but thats just a hunch; I can imagine that tetrads and other forms can be described as perspectives, at least at the lower level.
    
    ![ ](https://cdn.discordapp.com/avatars/438478591978766337/f5139236c4e6944efb66fdefcaabb406.webp?size=80)
    
    ## Nicolas Luck _—_ 11/02/2021
    
    Hm, well, there is two ways to look at Agents. 1. Humans with their device are Agents. So in a way, the ad4m-executor embodies the digital part of an Agent. And yes, cryptographic keys are a main part - which is managed by the ad4m-executor. AD4M uses DIDs to reference agents and to retrieve their public key in order to check signatures. 2. There is an Agent Language which stores Agent Expressions. And it uses DIDs to address Agents. So that is how Agents see other Agents: resolving the DID to an Agent Expression. Agent Expressions contain two things (next to the DID): * a public Perspective, so other Agents can get basic public information about the Agent that was looked-up * a Direct Message Language, so other Agents can send a message to them (edited)
    
6.  ![](https://cdn.discordapp.com/avatars/318930736566763521/66ace4dbc03abca4a38fb39c9859c561.webp?size=16)@JoshAFairhead
    
    > Perspectives are lists of Link Expressions. Links are triplets pointing to Expressions (of any kind of Language) and they LinkExpressions are Expressions themselves, so they rely on Agent's as well and track who states this particular association between 3 (other) Expressions. That said, I still find the above quote a little confusing. To be clear, this is what I'm understanding: - Perspectives are linked expressions. - Linked expressions are triplicated units of a language authored by an agent. - Languages are stored objects (but potentially other things) authored by an agent. > So yeah, all three together create a complete set, like base vectors creating a space. Holochain implements Agents and Languages (=DNAs) but doesn't define or map what I call Perspectives Ok, this framing makes sense. DNA as a language makes sense; a syntax of zomes (expressions). Agents feel more fuzzy to me; I guess its an agent keys but I also perceive various zomes themselves (personas, deep key, conductor etc) as factors that constitute "agents"? I'm curious where the boundaries that constitute the definition of agents lie (perhaps its just something I've not properly understood because I'm not stuck in with the code). > The really interesting thing about separating the world into (or describing the world by) these 3 root entities is that we can "bootstrap" a large (infinite?) number of ontologies that are secondary to this base meta-ontology Yes, I vibe that this is a pragmatic triple for bootstrapping. I'm compelled to ask a question here; do perspectives always have to be in triadic format? It makes sense as a base type for the meta language but the constraint seems restrictive for articulating languages. My feeling they don't need to be triples but thats just a hunch; I can imagine that tetrads and other forms can be described as perspectives, at least at the lower level.
    
    ![ ](https://cdn.discordapp.com/avatars/438478591978766337/f5139236c4e6944efb66fdefcaabb406.webp?size=80)
    
    ## Nicolas Luck _—_ 11/02/2021
    
    Perspectives are not triples. They are graphs, with 3-sided edges = the "Links". A Link does not have to have all 3 parts defined - one, the target, is enough. With that you can add an arbitrary amount of Links going of of the same source Expression, and you can use the link predicate to define what kind of link it is. And since predicates are also just URLs pointing to Expressions, you can invent your own predicates by writing a new Language ![🙂](https://discord.com/assets/da3651e59d6006dfa5fa07ec3102d1f3.svg)
    
7.  ![](https://cdn.discordapp.com/avatars/797116924978266132/bce9d77752cdb6ae0c9b75c0dd07caeb.webp?size=16)@ontie.michelle
    
    @JoshAFairhead What happens if you reorient your perception of the structure towards seeing forms rather than languages? The _language_ being discussed is iterations of Thing1-relationshipBetween1&2-Thing2 (correct me if I am wrong). I see an important freedom in embracing that these relationships are forms rather than mini-languages. Conflating the concept of languages into the system of formalizations may be conventional to programmers but is not meaningfully generalizable, and thus system-limiting (edited)
    
    ![ ](https://cdn.discordapp.com/avatars/438478591978766337/f5139236c4e6944efb66fdefcaabb406.webp?size=80)
    
    ## Nicolas Luck _—_ 11/02/2021
    
    I agree with your notion of separating forms from languages, and actually, I think that is what AD4M does. So to clarify: AD4M Languages are not iterations of Thing1-relationship-Thing2. Instead, Languages define classes of Things (here 'Expressions'). The Thing1-relationship-Thing2 pattern is what is used in Perspectives, to be precise: in the Links of that Perspective (=graph). Languages and their Expressions are objective in that anybody resolving the same URL would get the same data (otherwise the Language would be broken). Perspectives are subjective and always start as a local only "bucket" of associations (which is what those Links are: setting 2 or 3 Expressions into context with each other). With my understand of the term "form", I'd be happy to call the Perspectives form. I think, it is the context and the way of associating Things, that actually gives these things meaning. So it is the graph of a Perspective that really inFORMS us about the semantics.