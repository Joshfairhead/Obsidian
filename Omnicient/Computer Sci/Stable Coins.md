---
Tags: [Primitives]
---
Related: [[Crypto Economic Primitives]] [[Omnicient/Monad Seeds/Economics]]


## Unpegged Stablecoins

### [FEI protocol](https://wenger-trayner.com/)
Set to launch on March 31, Fei Protocol is a new decentralized stablecoin 
protocol that will be partially collateralized by Ether. It recently 
made headlines as it raised [$19 million](https://messari.us17.list-manage.com/track/click?u=5b89525c77acdd986027c25d1&id=b911083f7b&e=fbc34c282d) from a16z, Framework Ventures, Coinbase Ventures, and Nascent, among others.

At the center of the excitement around Fei are two novel ideas:

Combined they offer the potential to create a truly governance-minimized, capital efficient, decentralized stablecoin.
- **Protocol Controlled Value **
	- Protocol Controlled Value (PCV) involves the protocol of itself taking ownership of collateral it receives when users mint new FEI (the stablecoin). FEI cannot be redeemed for its underlying collateral. This stands in contrast to every other collateral based decentralized stablecoin including partially collateralized stablecoins like FRAX and ESD (in Continuous ESD), and over-collateralized stablecoins like Dai, which can be redeemed for their underlying collateral.
	- FEI enters circulation via sale along a bonding curve. When the price of FEI rises above $1.01 users can buy FEI from the bonding curve. At launch the project will only support a single bonding curve denominated in ETH, meaning that users can only buy FEI with ETH; however, it eventually plans to support additional curves denominated in other ERC-20 tokens. The assets deposited into the bonding curve may not be redeemed and are permanently owned by the protocol (hence why FEI is not redeemable for its underlying collateral).
	- To bootstrap growth, the protocol will allow users to mint FEI from the ETH bonding curve at a discount starting at $0.50 with a sublinear growth rate based on the supply, until it reaches a target. This target FEI supply, known as “Scale,” will be set for 100 million FEI, which the Fei team believes will be large enough to merit integrations with other DeFi protocols. Once Fei reaches its target supply at which point $1 of ETH would mint 1 FEI, the curve will then add a buffer (initially set to 1%) to provide room for price variance above $1 so that all trading doesn’t occur below the peg (more on why in a bit).
	- The second and perhaps most important reason why the bonding curve is clever is because of what Fei can do with the capital it raises from the bonding curve. As explained in prior paragraphs Fei retains ETH raisedvia the bonding curve as Protocol Controlled Value (PCV). Fei will initially use 100% of its PCV to supply liquidity to a FEI/ETH Uniswap pool to create liquid secondary markets for FEI. To get the FEI it needs for liquidity, the protocol mints FEI which it owns. This additional FEI will be paired with each unit of FEI users bought along the bonding curve, which should allow the depth of the Uniswap market to be on par with the circulating FEI supply.
- **Direct Incentives **
	- Direct incentives offer a novel mechanism for incentivizing stability below the peg. It is described in the whitepaper as follows:
	- __“A direct incentive stablecoin is one in which both the trading activity and usage of the stablecoin are incentivized, where rewards and penalties drive the price towards the peg. In general this would include at least one incentivized exchange acting as a hub. All other exchanges and secondary markets can arbitrage with the incentivized exchanges. This helps maintain the peg throughout the ecosystem.”__
	- How this works in practice is that when FEI is below the peg Fei provides disincentives to sell below the peg, while providing incentives to buy below the peg. When a trader sells FEI below the peg, part of their FEI is burned. When a trader buys FEI below the peg, they receive newly minted FEI. These mints and burns apply directly to the trader's balance, in proportion to FEI’s distance from the peg. The incentives are enforced by the protocol through building in functionality to FEI that specifies that a subset of transactions that interact with an incentivized address - in this case the Uniswap liquidity pool that users trade against - will have their wallet balances affected.
	- The burn rate for selling below the peg will be proportional to the magnitude of the price deviation squared and the size of the sell order. On the flip side the minting rate for buying below the peg will be proportional to the magnitude of the price deviation, the size of the buy order, and the time since the peg was last at $1 (measured in blocks). The formulas used ensure that volatility below the peg is net deflationary.
- **A promising new model for stability **
	- To learn more about how FEI uses reweightings in addition to direct incentives to maintain its peg, its TRIBE governance token, Fei's "Genesis Period," as well as the opportunities and challenges ahead, [read the full analysis](https://messari.us17.list-manage.com/track/click?u=5b89525c77acdd986027c25d1&id=58240a8699&e=fbc34c282d).


#### [RAI](https://mailchi.mp/a149ed1e5b07/ethereum-un-pegged?e=fbc34c282d)
- RAI is a governance minimized non pegged stablecoin.
- It is an attempt to create a more trust-minimized version Dai not pegged to the dollar. It is solely backed by ETH and stabilized autonomously using a PID controller.
- At a high level RAI is similar to Single Collateral DAI (SCD). It is an overcollateralized debt position for users that demand ETH leverage.
- Users can open this position by depositing ETH into a SAFE (similar to Maker’s vaults) and minting RAI against it. Users can redeem their collateral by paying back their RAI plus a borrow fee. RAI’s token FLX is used to govern and backstop the system.
- However, RAI introduces a number of changes to the SCD model. First and foremost, RAI is not pegged to the dollar and instead pegged to itself. It starts out with an arbitrary target price (called the redemption price) that it adjusts to influence the market price of RAI.
- The way this works is that as RAI moves away from its redemption price, the protocol automatically adjusts its redemption price to proportionally oppose the price move in order to stabilize RAI.

- Essentially the system devalues or revalues RAI according to a redemption rate (rate at which RAI is being devalued or revalued) to incentivize people to borrow or pay back their debt.
- “It works kind of like a spring: the further the market price of RAI moves from the target price, the more powerful the interest rate, and the greater the incentive to return RAI to equilibrium.” - Ameen Soleimani.


#### [Float](https://mailchi.mp/a149ed1e5b07/ethereum-un-pegged?e=fbc34c282d)
- Float Protocol is a two token, partially collateralized non pegged stablecoin protocol.
- FLOAT draws its value from its underlying basket of collateral (ETH), and is stabilized through auctions. BANK backstops FLOAT, earns protocol profits, and governs the Float protocol.
- At the core of Float’s stability model is protocol controlled value (PCV) and dutch auctions. Float protocol maintains a fund to stabilize the price of FLOAT called the “Basket” which holds a portfolio of cryptoassets - initially just ETH.
- The Basket is owned by the protocol and is built up through FLOAT auctions. FLOAT’s Target Price will start at an arbitrary number - initially $1.618 and will slowly adjust over time depending on the value of the basket relative to the value of the outstanding FLOAT.
- The protocol sells newly minted FLOAT to arbitrageurs in exchange for a mix of ETH and BANK. The ETH is put into the Basket while the BANK received is burned.
    
	
#### [Olympus](https://mailchi.mp/a149ed1e5b07/ethereum-un-pegged?e=fbc34c282d)
- Olympus DAO is an attempt to create a stable currency (OHM) through managing a treasury of assets.
- Initially this treasury will consist solely of DAI and OHM-DAI Sushi LP shares. Over time Olympus DAO will add new collateral types and ultimately stabilize versus a basket.
- At a high level Olympus DAO features a single token, OHM, which is both the system’s stable asset and its governance token. OHM can be staked in return for sOHM which allows OHM holders to accrue protocol profits as well as participate in Olympus DAO governance.
- Olympus DAO maintains a treasury (PCV) that ultimately provides a price floor on OHM. It is built up through sales of OHM and through yield generating opportunities using its existing treasury assets (e.g depositing its treasury DAI into Compound to generate yield).
- When OHM trades above 1 DAI, the protocol mints and sells new OHM. When OHM trades below 1 DAI, the protocol buys back and burns OHM.
- Olympus DAO also features Bonds which are a secondary policy tool. It enables Olympus DAO to both incentivize and accumulate OHM liquidity pool shares (this value also accrues to OHM stakers).
- Essentially a Bond provides a user the option to trade their OHM/DAI LP share with the protocol for OHM at a discount at a later date. The purpose of this operation is to both incentivize and lock liquidity by offering yield.
- You can read our full report on non pegged stablecoins [here](https://messari.io/article/the-art-of-central-banking-on-blockchains-non-pegged-stablecoins?utm_source=newsletter&utm_medium=ATF&utm_campaign=nonpeggedstablecoins).~
