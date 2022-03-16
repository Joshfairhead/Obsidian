# Validator Delegation Strategy
- [ ] Check for consent to name validators in the user stories before posting.

## Post
Hey folks, great conversation in this thread! Just to report that last week the foundation gathered for an in person retreat and this conversation was alive there. 

At the moment as your probably aware, the delegation strategy is for the most part quatitive and fairly static. While this is ok on a purely technical level it fails to take into account other potentialities that can happen outside the machine world. In my personal opinion it would be nice to reward other forms of participation within the larger ecosystem. I see from the above thread that others seem to vibe with such a direction as well; above I taste notes of such qualitive leanings in notions of 'buddy systems', 'reputation systems', 'accreditation processes', 'validator performance' - whatever those terms mean specifically could be fleshed out. 

Specifically we are talking about validators in relation to the general ecosystem. I feel its necessary to make this distinction as otherwise we might say that were talking about incentivised network contributions. We are talking about such but centered around the role of validators within the ecosystem.

Within the ecosystem I see several potentially related domains for validators to extend into; marketing, operations, enDAOment (giving and raising capacity) and registry (methodology development and credit creation). It does not in my head make sense for validators to engage in all of these activities, but I can think of a few examples where folks running validators are multi-diciplinary ecosystem participants. To illustrate a little further I'll articulate some real life user stories I'm seeing in the wild.

LOA labs is a validator, however they are also the RND/Foundations marketing team. By promoting the network through their efforts there is a synnergy that creates a virtuous cycle; a network that looks good to the outside world helps with a number of foundational activities. This drives token utility which as a validator means increased profit in their pockets.

Cambiam (sp?) is also a validator, but aside from this they are a methodology developer which is tied to the registry domain. As the registry develops utility, so does the regen token and thus their staking rewards. Another win-win scenerio.

Cosmos Station are also a validator, but aside from this they have developed Mintscan as an additional service to the ecosystem - I'd suggest that making the blockchain more usable is related to the domain of operations (and the foundation). By doing so they have increased the usability and UX of the Cosmos/Regen ecosystem, bringing value to the token once more via added utility. 

This pattern continues for other participants in the space, and most validators connect to one or two other domains creating an informal buddy system of sorts. My sense from the discussion above is that these additional Network Contributions could be further recognised and feed into the weighting system thats already in place. If we were to formalise this system and give it a name I'd call it the 'economic stewards programme'. 

The pragmatic questions of tracking these contributions then comes alive. Some contributions are bigger and others smaller; at this point since many of these services are off chain we simply can't measure and quantify them which makes things tricky. Added to that is the difficulty of time horizons and whats possible now in the near term vs the long term. 

> I strongly believe we need to develop a stronger framework for tracking community contribution, reputation, validator ops auditing etc, then work to update the delegation strategy to consider criteria and have a variable delegation rate according to merit. ~Gregory

The above post captures it well in my opinion, the details will then have to be filled in and codified on chain (perhaps a service someone might wish to fill?). 

My suggestion of a loose framework that categorises activities looks as follows:
![](assets/ValidatorEcology.jpg)
 

As you might notice our user stories from above fall within the framework. This doesnt particularly help quantifiy, measure or weigh the work getting being done by ecosystem participants but it at least attributes significance to their contributions and teases apart activity into five domains. 

My general thought is to start with a buddy system and peer attestation. For each box ticked validators may recieve a bump in redelegations. At the moment this would have to happen off chain but could in future leverage tooling innovations as they come on line (quadratic voting, groups module, reputation systems etc.). My sense is that community calls or office hours could be used for this purpose of 'manual validation'.

There is further discussion around the redelegation time window and so it might be worth while noting that community calls happen bi-weekly. This may be too fast a cadence at first but feels about right to me in the longer term. My suggestion for the window size would be 4-6 weeks, which is just doubling or tripling the cadence of community calls. 

Moving on another bit is the conversation around voting record; the issue of non-votes and arbitrary votes. This is a data problem and I'm against the idea of forcing validators that signal an abstenence to document their reasons; the reason being is that this friction incentivises participants to arbitrarily vote on topics they are ignorant about. If documentaion is required for any vote it should be required for all votes - however I feel this discussion is a red herring. More precicely what I think matters is whether an on chain abstain should be discounted (my opinion is no) but discounting non-participation seems fair even if validators are active elsewhere. This last point is based on the assumption that regular voting (even an abstain) is a sign of legitimacy and that missing out on a weighted delegation is probably incentive enough to start voting again (even with intention to abstain).


---

## Notes
- Prominence
- Nakamato coefficient
	- > Gregory expressed interest in a quadratic cap model—a way of addressing validator centralization at the consensus mechanism layer. Of course, this is a big undertaking, and is more of a mid-term goal. Gregory’s interested in focusing on other ways of achieving a health Nakomoto coefficient in the near-term.
- "Incentivised Network Contributions"
	- Proposal passing via conversation
	- Validators as governance buddies
	- Tying sucesses together
	- Signalling funds availability
- Sepeating stewards form validators
	- but delegation acts as a grant
	- 'fellows' -> 'stewards'
	- "stewards" on a project basis
- Tell the story; create a logos example
- Cosmos contributions? e.g. incentivising IBC relayers?
- Transparent toolkit for delegation pre endaoment


> I strongly believe we need to develop a stronger framework for tracking community contribution, reputation, validator ops auditing etc, then work to update the delegation strategy to consider criteria and have a variable delegation rate according to merit. ~Gregory

> -   Regen Ledger must have an on-chain validator reputation system
> -   Regen Ledger must leverage groups module to create governance system for regen registry and eco-credit asset curation, and governance of community spend pool and other key functions of the ledger efficiently with representative democratic governance instead of unicameral token holder voting on ever topic.
> -   Regen Ledger must embrace a quadratic stake model to incentivize distribution and decentralization of delegations.

Will: 
> It would be nice for the Foundation to consider delegation all the way down through the 75th validator, but how much should we delegate to number 75, as that will effectively set the barrier to entry for other validators?
- Perhaps their delegation cap is as much as they have lost in the process?  ~j

Will: 
> Another related point we discussion is how are commissions used? For example, Akik Takat has committed to reinvesting profits into the mission of the ecosystem, so a higher commission is justified, especially if these commitments can be audited.

Will:
> Discussion then turned to the question of, should Community Staking DAOs run their own validators? Kei responded that this could happen eventually, and that we’re going to start with a buddy system (DAOs paired with existing validators).

Threshold exapmles
> -   delegation top up threshold: 100k
> -   tokens delegated til 100k rewards: 25%
> -   tokens delegate over 100k rewards: 15%


Validator voting record as a measure; abstains count towards voting measure. Downsides: 
> -   Unless you're using multi-sig, it takes less than a minute to vote on a proposal, so it isn't an ideal indicator of validator participation. I know there are a few validators that have been very engaged in the community but haven't voted much, and I'm sure there are some validators that cast a vote without being that informed on the issue.
> -   This method is biased towards validators that joined the set early (and started voting). If you were a new validator, your voting record would be 0/8, simply because you weren't around for the early votes.

^^ can be adjusted to discount history and include only recent votes assuming the redelegation cycle is timebound to a moving window.
- Abstain and document is a counted vote.
	- Could all votes require documentation? It seems that documentation would be a disincentive for validators to abstain and instead select a random option when they dont have adequite information...
- Could this work for discussion contributions as well? (e.g. source cred) 

On validator functions:
- voting
- running a testnet validator
- participating in upgrade testing
- producing tools / materials that help the community save time and be more proficient
- more.
