---
Tags: [Tools, Primitives]
---
Related: [[Computer Science]] [[Devlopment]] [[DevOps]] [[Github]] 
# Git
Git is a form of graph based version control. Its used to keep track of state and changes within a digital project. 

- [Moving a root directory](https://stackoverflow.com/questions/1918111/my-git-repository-is-in-the-wrong-root-directory-can-i-move-it-instead-of/3247756#3247756)
- Commands
    - `git branch -a` - List all branches (cloned but invisible)
    - `git branch ###` - Add branch ### to list of available branches
    - `git checkout ###` - Move to branch ###
    - `git rebase` and `git pull.ff only`
    - `git add . ` add all files to staging
    - `git reset` remove all files from staging
    - `git status` show status of commits, untracked files, 

To remove all traces of Git files from a project: 
```
find . | grep "\.git/" | xargs rm -rf
```
^^ HOWEVER THIS MAY BE DANGEROUS. [Check this link for original disucssion](https://stackoverflow.com/questions/4754152/how-do-i-remove-version-tracking-from-a-project-cloned-from-git) 

- [Creating a .gitignore](https://www.atlassian.com/git/tutorials/saving-changes/gitignore)
- [Generate .gitignore from templates](https://docs.gitignore.io/)


#### Workflows
[Trunk based development](https://trunkbaseddevelopment.com/)
- [GitFlow is a bad idea](https://youtu.be/_w6TwnLCFwA)

#### Explanations
[Git username and email address](https://support.atlassian.com/bitbucket-cloud/docs/configure-your-dvcs-username-for-commits/)
[Setting your email address](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address)
[Merging vs Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing#the-golden-rule-of-rebasing)
[Merging vs Rebasing Hachernoon](https://hackernoon.com/git-merge-vs-rebase-whats-the-diff-76413c117333)
[Rebase vs fast forward only](https://blog.sffc.xyz/post/185195398930/why-you-should-use-git-pull-ff-only-git-is-a)

### Resources
- [Git cheat sheet](https://dev.to/doabledanny/git-cheat-sheet-50-commands-free-pdf-and-poster-4gcn)
	- ![](assets/Gitcheatsheet.webp)