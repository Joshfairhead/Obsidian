---
Tags: []
---
Related: 
# Staking Wallet Setup

As participants in the enDAOment programme you will be awarded tokens for staking from the Regen Foundation. These tokens are used to generate staking rewards from a locked wallet (vesting account); the generated rewards are liquid but the enDAOed tokens are not. To become a csDAO you need to create a locked wallet (vesting account without expiry date), so let's figure out how to do that!

First you'll need to install the Regen CLI tool. There are a several [prerequisites](https://docs.regen.network/ledger/get-started/prerequisites.html) to do this; the easiest way to install these pieces of software if your an a Mac is to install homebrew first and then use the following commands from a terminal: `brew install git`, `brew install make`, `brew install go`. You can now [install Regen](https://docs.regen.network/ledger/get-started/) (you need a computer thats reasonably up to date); this will allow you to run the `regen` command from your command line in order to see the various commands available.

There are two main sub commands:
- `regen query` which lists the modules you can access
- `regen tx` which lists the commands you can run

Before you run any commands however you need to connect to a node. To do this you run either of the above commands with the `--node` flag and the [RPC address](https://github.com/regen-network/mainnet/blob/main/regen-1/rpc-nodes.txt) you wish to connect to. For example you could query the network total balance with: `regen query bank total --node http://rpc.regen.forbole.com:80`.

Now, lets setup a locked wallet to recieve csDAO tokens. Taking a look at our usable flags using the `regen tx vesting` command, we can see two commands: 
- `create-permenet-locked-account`; this is the command we'll use for csDAO wallets.
- `create-vesting-account`; this is used for wallets that eventually unlock.

We're going to use the first command listed above but there's a catch to be aware of; both of these commands need to be used with FRESH addresses. A wallet that already has tokens in it cannot be used as its already registered to the blockchain; however any empty / unregistered address can be converted into a vesting account / locked wallet. This is because when an account first recieves funds it gets assigned an account type. 

This all means that users can securely setup a wallet through Keplr or on a Ledger and so long as they don't make an onchain transaction with it, it's safe for enDAOment. Such an account cannot recieve more locked tokens and a new address will have to be used. If you try to send a second batch of tokens you'll recieve an error. 

So the full command:
- `regen tx vesting create-permenent-locked-account [to address] [amount in uRegen] [flags]`

---
Multisigs not working at the moment buuuut:

Now, to activate a multisig requires using an offline mode that doesnt get broadcast to the network. This is coordinated by bash scripts, theres: `generate-txs.sh`, `multisig-sign.sh`, `multisign-and-validate.py`,`txhashes.txt`.


Other info:
- When the stakers mis behave, slashing occurs (probably from the unlocked tokens?)
- Authz grants privilages to other accounts to perform actions on its behalf