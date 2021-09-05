---
Tags: [Principals, Heuristics, Refactor]
---
Related: [[Project Management]] [[Agile]] [[Lean]]
# Theory of Constraints
[Source](https://medium.com/forte-labs/theory-of-constraints-101-table-of-contents-8bbb6627915b#.qtqvp9fnv)

#### Adding up a series of local optima does not automatically lead to a global optimum
- Every system has one bottleneck tighter than all the others
- The performance of the system as a whole is limited by the output of the tightest bottleneck or most limiting constraint
- The only way to improve the overall performance of the system is to improve the output at the bottleneck (or more broadly, the performance of the constraint)
- Any improvement not at the constraint is an illusion
- Many companies’ embrace of local optima leads to overwork and burnout for employees, and reduced throughput and profitability for the bottom line
- A more effective mechanism for limiting work-in-process was not physical limits (belts and parts), but _time_. He proposed restricting work-in-process not by fussing about with lines and containers and parts, but by more directly limiting the _overall_ amount of work at all stages of the system

#### Drum-buffer-rope
- The **processing rate of the bottleneck** is the “Drum” that determines the pace at which the entire system should work (like a drummer in a marching band helping the whole group step in sync). The “Rope” is the **signal that “pulls” a new item of work** into the pipe only when an item is processed by the bottleneck (the same role played by Ford’s belts and Ohno’s kanban cards earlier).
- The need for a buffer in manufacturing becomes obvious when we remember that the capacity of the whole system is equal to the capacity of the bottleneck. What this means is that the “cost” of a broken-down machine (or sick employee) at the bottleneck is not the time lost for that one work center. It is the burn rate for the _entire company_. Every single minute of lost time at the bottleneck must be counted as a lost minute for the entire system.
- The principles of flow imply a management philosophy: **no company should take on more work than their bottleneck can process.**

#### Brooks’ Law
> “Adding people to a late project makes it later”
- The ironic consequence of not allowing people to have excess capacity is that the company is left with tremendously more excess capacity than ever before.

#### Engineering
- Using a simple approach like Drum-Buffer-Rope in this case showed that much of what constrains the productivity of software engineers (and by extension, other knowledge workers) is not related to the details of how they perform their work, but to the management, planning, scheduling, and queueing of work
- In other words, engineering may be the bottleneck of the whole organization, but management is the bottleneck to improving engineering.

#### Five Focusing Steps
- **Identify** the constraint
	- **Make work-in-progress visible**.
	- **Look for the most scarce resources**
		- These tend to be tasks that require certain types of resources — skills, states of mind, tools, blocks of time, or the presence of others — that are in short supply
		- At the team level, a full column on a kanban board where notecards are slowing down and piling up is a pretty clear indicator
	- **Ask people**
		- At what point in product development are there most likely to be “quality cycles” — back-and-forths, quality checks, or rework. Such cycles represent work moving backward through the system.
		- What you are looking for with these questions are the recurring dependencies that are slowing down or blocking people, causing them to start new tasks “in the meantime” and thereby making WIP explode.
		- Common ones include information or decisions from a client, reviews or approvals from management, and answers to questions from internal groups.
	- **Look for constraining policies and rules**
		-  Goldratt said that the most restrictive and damaging constraint in an organization was almost always a “soft constraint” like a policy or rule, not a hard constraint like a machine or the design of a work area
	-  **Perform experiments**
		-  The basic one is a concurrency experiment: make a list of all active projects in the company or department, and cross off half of them, strictly prohibiting any work on the inactive projects until further notice.
		-  As WIP drops, the least constrained resources will start to run out of things to do. This is a pivotal moment — you have to avoid the temptation to either “load up” these resources with new tasks, or fire them as “excess capacity.”
- **Optimize** the constraint
	- A minuite lost ant the constraint applies to the whole company.
		- How can the buffer prepare and prepackage units of work so the constraint is never runs out of work and idles?
		- Quality checks before the constraint so it doesnt waste time on unnecissary tasks. 
		- How can you keep the constraint running with as much uptime as possible? Pizza lunches etc.
		- Preventative maintenence: reduce the risk of having the constraint interrupted; e.g. servers for devs, keep people healthy.
		- Offloading: which tasks that the constraint is currently performing could be performed by other resources? 
		- 5S: how could the constraint’s work environment be organized to promote efficiency, effectiveness, and order?
			- Sort, Set in Order, Shine, Standardize, and Sustain
		- Andon: how can we make it easier and faster for constrained resources to surface and solve problems? (event monitoring, redlights .tc.)
- **Subordinate** the non-constraints
	- The constraint is tied to all other functions in the system. Thus they should be subordinated to the constraint with their capacity directed to it. 
- **Elevate** the constraint
- **Return** to step 1

