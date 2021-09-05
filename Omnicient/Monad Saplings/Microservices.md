---
Tags: [Frameworks, Domains, Index, Tools, Refactor]
---
Related: [[Computer Science]]

# Microservices

- [Microservices.io](https://microservices.io/)
- [O'Reily Building Microservices](http://index-of.es/Varios/Sam%20Newman-Building%20Microservices-O%27Reilly%20Media%20(2015).pdf) Copy link, paste - brackets break Roam
- [Mastering Chaos - A Netflix Guide to Microservices](https://www.youtube.com/watch?v=CZ3wIuvmHeM)
	- [Hystrix](https://github.com/Netflix/Hystrix) - now in maintenence
- Dependecy
    - Fault injection testing to see if it will work
    - Critical microservices
        - What are key, can they work without dependencies
    - Eventual consistancy
- Scale
    - Auto scaling
    - [Chaos monkey](https://github.com/Netflix/chaosmonkey)
    - Dedicated Sharding is an anti-pattern
    - [EVCache](https://github.com/Netflix/EVCache) writes across nodes but reads locally
- Varience
- [Spinnaker](https://www.spinnaker.io/) Multi cloud deployment
