---
Tags: []
---
Related: 
# Crypto Primitives


#### Significance of a web3 ecosystem
- Ledger
	- Consensus
		- Proof of Work
		- Proof of Stake
		- Delegated Proof of Stake 
		- Proof of Authority
		- Proof of Distance
	- Interoperability
		- Bridges 
		- Sidechains
		- Roll ups
	- ZkProofs
	- ZkSnarks
- Tokens
	- Fungible
		- Stable coins
		- Staking tokens
		- Commodities / eco-credits
			- Futures
			- Forward
		- Governance tokens
			- Voting rights
			- Securities / equity / bonds
				- Synthetic derrivitives / baskets
	- Non-fungible
		- Rights / access
			- Intellectual property / DRM 
			- Objects / Physical internet  
	- Wrappers
- Identity / Digital Twins 
	- Wallets / Smart wallets
		- Signatures
			- Transactions
				- Meta transactions
	- Claims
		- Status
	- Attestations
		- Reptuation
- Governance
	- DAOs
		- Multisigs
		- Voting
			- Quadratic voting
			- Quadratic funding
			- Liquid democracy
			- Futurarchy
		- Treasury
			- Bonding curves
				- AMMs
					- Liquidity pools
					- External Gauges
				- [Miner Extractable Value](https://blog.chain.link/what-is-miner-extractable-value-mev/#:~:text=One%20such%20example%20is%20Miner,excluding%20transactions%20within%20a%20block)
			- Exchanges
			- Atomic Swaps
		- Taxes
			- Harberger takes
			- Tributes / burns
		- Arbitration 
			- Third party dispute resolution
- Applications
	- Curation
		- Token Curated Registries
		- Token Gated Communities
		- Prediction markets 
		- Meme markets

   ---

# What is a blockchain? 

## Clocks

The most fundamental explanation of a blockchain its a globally synchronised clock.

The tricky thing about globally synchronising clocks is that Einstein proved that time is relative. Clocks drift from eachother depending on their distance and speed of travel; so who decides which clock is objectivly correct? Typically centralised standards bodies like UNSO and NIST.

The blockchain provides an alternative to these institutions by inventing it's own standard known as `block time (aka block height);` which is ultimately determined by a distributed network of computers through whats known as a `consensus mechanism.`

As everyones clocks are slightly different; how do you syncronise them? Naturally, you need a universal event to reference. On the blockchain, this event is the creation of a new block.

## Block creation

A block is a container of transactions or information collected from what's known as the `meme pool`). Computers on the network (aka `miners`/`validators`) collect these transactions or pieces of information in whatever order they see fit - often determined by transaction fees - in order to fill up a block.

In a `proof-of-work` system, the content of a given block is run through a `hashing algorithm` which combines it with a random variable to produce a random output (`hash`).

When this `hash` matches a prescribed answer (aka `nonce`) the successful miner gets to add their block to the global chain and recieves a reward (`block reward`). If the `hash` doesn't match the `nonce` they try again and again as fast as possible until it does - or until someone else gets there first - at which point the race begins again for the next block.

By chaining blocks together in a sequence like this you get a universal measure known as `block time`. This is the most fundemental aspect of a blockchain.