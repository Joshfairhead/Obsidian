---
Tags: [Notes]
---
Related: [[Buffe]]
# Debugging Obsidian Version Control

Powerbars:
- Yellow means uncommitted changes
- Green means everything is commiitted

Script behaviour:
- When run manually the script pushes to github provided that changes are not comitted (yellow).
- When run manually the script fails to push to github when changes are already comitted (green).
- When using cron to automate the script, it fails to push to github on its own. However, it commits with the appropriate time stamp. When Cron automates the script I get no alerts. 
- When running the script manually I get two alerts; 'already up to date' and 'already up to date'. This indicates its sucessfully pushed.

My reasoning is thus:
- added crontab to the list of secure applications
- the push command is failing
	- removed the -q flag to no avail