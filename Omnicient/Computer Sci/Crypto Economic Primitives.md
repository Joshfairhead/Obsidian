
## Significance of a web3 ecosystem
1) Ledger
	- Consensus
		- Proof of Work
		- Proof of Stake
		- Delegated Proof of Stake
		- Proof of Authority
		- Proof of Access
		- Proof of Distance
		- ZkProofs
		- ZkSnarks
	- Interoperability
		- IBC
		- Bridges 
		- Sidechains
		- Roll ups
2) Tokens
	- Fungible
		- Staking tokens
			- Liquid staking
		- Commodities / eco-credits
			- Stable coins
		- Governance tokens
			- Voting rights
			- Securities / equity / bonds
				- Synthetic derivatives / baskets
	- Non-fungible
		- Rights / access
			- Intellectual property / DRM 
			- Objects / Physical internet  
	- Wrappers
3) Agent Wallets 
	- Identity / Digital Twins / Smart wallets
		-  Claims
			- Status
		- Attestations
			- Reputation
	- Signatures / Transactions
		- Meta transactions
		- Multisigs
4) DAOs
	- Treasury
	- Bonding curves
		- Quadratic funding
		- AMMs
			- Liquidity pools
				- External Gauges
				- [Miner Extractable Value](https://blog.chain.link/what-is-miner-extractable-value-mev/#:~:text=One%20such%20example%20is%20Miner,excluding%20transactions%20within%20a%20block)
			- Exchanges
			- Atomic Swaps
		- Taxes
			- Harberger taxes
			- Tributes / burns
5) Governance
	- Curation
		- Token Curated Registries
		- Token Gated Communities
		- Prediction markets 
		- Meme markets
	- Voting
		- Quadratic voting
		- Liquid democracy
		- Futurarchy
	- Arbitration 
		- Third party dispute resolution



---
### Unspecified
Defi primitives
- Loans
	- Flashloans
- Futures
- Forwards

---

# What is a blockchain? 

## Distributed Clocks

The most fundamental explanation of a blockchain is that it's a globally distributed clock that enables the recording of events. The tricky thing about globally distributed clocks is that time is supposed to be relative. Clocks drift from each other depending on their distance and speed of travel so typically standards bodies like UNSO and NIST emit a signal that others syncronise to.

Blockchains provide an alternative to centralised temporalities by inventing it's own standard known as `block time (aka block height).` Block time is governed through whats known as a `consensus mechanism`; an algorithmic ruleset for determining the most probable singular state of affairs on the ledger within a range of tolerence.

## Block creation

A block is a container of `transactions` collected from what's known as the `meme pool`. Computers on the network (aka `miners`/`validators`) collect these transactions in whatever way they see fit (often determined by transaction fees) in order to fill up a block. When a block is `mined` the computer that mines it receives an incentive known as a block reward.

In a `proof-of-work` system, the content of a given block is run through a `hashing algorithm` which combines it with a random variable to produce a random output (`hash`).

When this `hash` matches a prescribed answer (aka `nonce`) the successful miner gets to add their block to the global chain and receives a reward (`block reward`). If the `hash` doesn't match the `nonce` they try again and again as fast as possible until it does - or until someone else gets there first - at which point the race begins once more for the next block. 

By chaining blocks together in a sequence like this you get a universal measure known as `block time`. This is the most fundemental aspect of a blockchain. 


---



%%
- Tokens
	- [[Curation]]
	- [[NFTs]]
- [[Identity Primers]]
    - [[Reputation]]
- Proofs
- Prediction
- Consensus
    - [Miner Extractable Value](https://blog.chain.link/what-is-miner-extractable-value-mev/#:~:text=One%20such%20example%20is%20Miner,excluding%20transactions%20within%20a%20block)
- Micro-economic
    - [[Bonding Curves]]
    - [[Defi]]
    - [[Stable Coins]]
    - [[Securities]]
    - Equity
    - Bonds
    - Derivatives
    - Harbinger Tax
- [Interoperability](https://github.com/Joshfairhead/Resources/wiki/G.-Interoperability)
    - Standards
    - Data structures (Token formats)
    - Inter-network networks (Polkadot, Cosmos)
    - Wrappers
    - Compounds
        - Sets
        - Hierarchies
- Governance / Upgrades
    - Futuracy
    - Liquid Democracy
    - [[Quadratic]] voting
    - Arbitration - Third party dispute resolution
%%