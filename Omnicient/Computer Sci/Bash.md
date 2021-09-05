---
Tags: [Tools, Primitives]
---
Related: [[Computer Science]] [[Fish]] [[Vim]] [[Terminal]]
# Bash

### Shortcuts
- ### Ctrl + R
	- Performs reverse search in bash history that is stored at ~/.bash_history. Reverse search means that it will be performed from the latest commands going back in time.
	- Press it and start typing part of command that you’ve already used before. Once the command appears in the line, you can press Enter to execute it.
	- For example, instead of typing nix-shell https://holochain.love every time you want to launch Holochain shell (after doing it for the first time), you can just do Ctrl + R and then type .love : chances are, your bash history only contains a single command with this substring.
- ### Ctrl + L
	- Clears the currently displayed shell screen. Use it instead of typing Enter several times to visually separate your next command from previous ones.