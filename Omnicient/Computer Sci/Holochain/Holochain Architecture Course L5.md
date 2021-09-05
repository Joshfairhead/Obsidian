[[Holochain]]

- How can you address performance tuning? To make sure people get consistency answers or to ensure your building you application efficiently
- Take an R factor and see how many DHT actions that went to the network, ripples onto the network. For those actions notate how many things you think are being stored.
- --------------
- First, let me apologize for failing to post the Session #4 homework (about verifiable randomization and indexing/linking/finding data that gets posted to your DHT). Sorry about that. I had started to post, got interrupted, and lost track of the fact I never finished.
- On today’s call we talked about a pattern we’ve used for DHT data search indexing via bridging to an index app that certain nodes can volunteer to run and perform indexing and search for other nodes on the main app. We also spent a fair amount of time on the principles involved in writing good validation code: permissions, dependencies, agent-centric code (run by anyone), and eventually consistent (run at any time in the future).
- For next week, I’d like for people to think about performance tuning. How do you write an app that is efficient and not putting undue burden on the DHT and other validators? Choose an R-factor (Redundancy level) for your app, and identify the number of DHT operations triggered by the actions users take as they commit new data to their chains. Put numbers next to those actions representing the number of validation actions each new commit produces.
- Also… next week, we’d like to give you a sneak preview into some of the RAD tools being built to help you build your apps faster and easier.
- See you next week!
- -art
