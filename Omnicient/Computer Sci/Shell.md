---
Tags: [Tools, Primitives]
---
Related: [[Computer Science]] [[Fish]] [[Bash]] [[Vim]] [[Terminal]]
# Shell

### Commands
- `mkdir` - Make a folder / directory
- `touch` - Create an empty file
- `echo 'string'>*myfile.txt*` - Creates 'myfile.txt and puts 'string' into it
- 


### Tools
[Starship](https://github.com/starship/starship) cross shell prompt
[PC commands](https://geniushub.io/how-to-delete-files-folders-directories-cmd-windows-command-line-prompt-del-rmdir/)

### Syntax & commands
- #### Autocomplete with Tab
	- Most shells implement the autocomplete that is triggered by pressing Tab button. Use it to avoid typing the entire thing you wanted to type.
	- Things autocomplete works for:
		- shell commands
		- contents of the directory you’re in
	- For example, if I want to run command cat on a file really-unnecessary-long-filename.txt that is located in the same directory I’m running my shell in, I can do the following:
		- type cat  (using autocomplete on a short command like that usually gives more options to choose from than needed, so I prefer typing it manually)
		- continue typing start of the filename: cat r and then press Tab
		- either autocomplete will instantly complete the entire filename or I’ll get suggestions on all contents of the current directory whose name starts with r .
		- if there are multiple suggestions, I need to type few more letters so that there’s only a single option
- #### Create multiple files with curly braces syntax
	- You can use curly braces to mention multiple things in the same command and avoid running this command multiple times.
	- For example, if I want to create empty files anchor.rs , entry.rs , validation.rs in the directory course/ I can do it like this:
	- touch course/{anchor,entry,validation}.rs

- #### Chron (timers)
	- https://ostechnix.com/a-beginners-guide-to-cron-jobs/

- #### $PATH
	- This is the path specified to search for commands
	- It is used to execute scripts and such
	- https://beautifulracket.com/setting-the-mac-os-path.html

- #### CDPATH for bookmarks
	- [Shell bookmarks](https://medium.com/@marko.luksa/linux-osx-shell-trick-create-bookmarks-so-you-can-cd-directly-into-the-dirs-you-use-regularly-64003051211f)