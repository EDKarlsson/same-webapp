# Learning Git

    by

    Anthony Ramirez
    Austin  Vaday
    Shawn   Azar
    Erik    Karlsson


Last Modified: 12/16/2015


About:

    This is reference manual, git tutorials, and git documentation made for beginners and soon enough advanced
    topics will be covered. My name Erik, I am a student who intends on majoring in both Computer Science and
    Mathematics. The purpose for this text is to help students at my school but I am becoming a strong and stronger
    proponent of open source software and wanting to share everything I learn for free.

    My good friends and fellow students have kindly agreed to contribute their free time to this project.
    We all believe in educating others to educate ourselves.

    We will be trying to make other kinds of tutorials (documentation and videos) as well, to be supplement for
    learning how to program. This will be an ongoing and very slow process. Updates for the time being will be when
    we can find time and clearly explain what I want to add.

### CONSTRUCTIVE SUGGESTIONS APPRECIATED!
> Disclaimer:
> I don't know everything, nor will I claim to know everything. If there is an error or something that I have missed.
PLEASE LET ME KNOW.
      CONTACT ME AT :   spikeyblondehaircomputerguy@gmail.com

## TABLE OF CONTENTS
Title Page
COPYRIGHT

#### Copyright (C)  2015

    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3
    or any later version published by the Free Software Foundation;
    with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
    A copy of the license is included in the section entitled "GNU
    Free Documentation License".

---
## First time use:

1) go to folder ( Make Folder You want to clone into)
2) git init
3) git clone "url"


> This is recommended but become comfortable with git before blindly following
these directions.


4) git checkout -b "Name your branch"
    a.

## Basic Use:

> Git will only be able to add or commit the project if a file or element has
been modified inside the local git repository.

When in project folder - MASTER BRANCH:
1) <code>git status</code>
    * Check for anything that is out of the ordinary such as files that should
        not be commited.
2) <code>git fetch origin</code>
    * This will download the most recent project commit to be compared against
        the user's current project.
3) <code>git status</code>
    * If there are changes, type git add "File Name" to stage the file to be
        committed.
    * If it states that there are no changes compared to the master branch, then
        the online repository was update to most recent commit without actually
        having any commits published. Solutions to this may vary and best to
        consult for help. Easiest way to fix this however would be to go to the
        files that have been modified and add NON-DETRIMENTAL WHITE SPACES and
        save file. This will force the file to appear as modified. Be careful
        not to accidently override code by forcing a push or merge.

>EVERYTHING IS COMPARED TO THE BRANCH ORIGIN (IN THIS CASE THE REPOSITORY MASTER
BRANCH) IF A FILE HAS NOT BEEN MODIFIED IT WILL NOT APPEAR WHEN ASKED TO STAGE
FILES!
4) Use:
    a. git add "File name" to stage a single file
    b. git add --all to stage all modified files.

    >CAREFUL BECAUSE YOU MIGHT NOT WANT TO UPLOAD ECLIPSE META DATA IT CAN CAUSE
    PROBLEMS WHEN CHANGING COMPUTERS. PC <=> MAC AND DIFFERENT VERSIONS ECLIPSE.
    YOU CAN RESEARCH gitignore TO LEARN HOW TO WORK AROUND THIS.
    I WILL COVER THIS TOPIC LATER ON [Stated: (2015/2/23)]

>http://git-scm.com/docs/gitignore

5) Use:
    **************** THERE HAS TO BE A COMMIT MESSAGE!!!!****************
    a. git commit -m "message" <- Allows message to be entered at the same time

    IF -m is left out, the user will enter the shell text editor called ViM

    ----
    #### Navigating ViM:

        h - left
        j - up
        k - down
        l - right
        i - insert (TYPE TEXT)
        a - append
        ESC - Exit current mode to ViM command line

    The user will start out in the command line of ViM,

    TO EXIT ViM:
    1. Press <code>ESC</code>
    2. <code>Shift + :</code>
    3. type in the letter <code>q</code>
        1. If something has been modified, or it will not let you quit
            - add <code>!</code> to the end of the letter q then press enter


        Ex ViM interface:
        ~
        ~                  VIM - Vi IMproved
        ~
        ~                     version 7.3
        ~              by Bram Moolenaar et al.
        ~     Vim is open source and freely distributable
        ~
        ~            Help poor children in Uganda!
        ~   type  :help iccf<Enter>       for information
        ~
        ~   type  :q<Enter>               to exit
        ~   type  :help<Enter>  or  <F1>  for on-line help
        ~   type  :help version7<Enter>   for version info
   Command to quit after pressing <code>shift + :</code>

        :q!

Use <code>ESC</code> key to exit out of any mode that may have been entered if these commands do not work.

6) Once the project has been committed, just as a safety precaution
    1. <code>git status</code>

    2. <code>git fetch</code>

    3. If everything is good

        * <code>git push origin</code>



## Basic Git Commands Cheat Sheet
---------------------------------

#### Contribution by Anthony Ramirez (aramirez7412) - aramirez7412@gmail.com


    Hello all,

    Below are some useful Git commands to use as areference. I am not stating that all commands below
    are all of the commands you need to be succesful in Git. Also, the descriptions I provide are fairly
    brief so the utility of certain commands exceed the scope of this reference sheet. Feel free to contact
    me if there are any additions you may want to add or corrections that you find.

> I will be updating this cheet as time goes on. I am actively attempting to expand my knowledge of Git
so as I learn, I will update this sheet with new commands and modify the documentation


**Constructive criticism and contributions are welcomed!**
If you ever feel lost in the command line,
enter 'git help', utilize Google, stackoverflow.com (really any programming forum) or feel free to email me.
Include Git Command Cheat Sheet in subject heading of email.

Remember to have fun and embrace the learning experience.
Git may be intimidating, but you can do it! Be patient and diligent and you will be succesful!

Cheers,
Anthony R.


aramirez7412@gmail.com

_______________________________________________________________________________________________
Key
----------------------------------------------------------------------------------------------
Cheat Sheet format
git 'someCommand' -> "Explanation and commenting on the command"

Please note that the ' ' and -> are NOT to be included in the command line entry


#### Basic Commands in the Git command line
_______

How do I traverse through my file directories?

    cd .. 	           -> takes you back one directory/folder
    ls                 -> allows you to view what is inside the folder you are in
    cd someFolderName  -> changes the directory to the folder you choose


Help
_____

    git help    -> view commonly used git commands if you ever forget ;)

    lists avaliable subcommands and some concept guides.

    git help -a
    git help -g

>***If you are stuck in the VIM - press 'q' and enter***

Also see the learning Git

See 'git help <someCommand> e.g 'git help add' or
    'git help <concept>' to read about a specific subcommand or concept



    git init
Initializes a folder to a brand new git repository.
Initializing the new folder will allow you to begin tracking files using git


    git remote add origin "url" (No quotes & include https://)
To push our local repository (the one you created with git init) we'll need to add a remote repository.

1. In the command line you will no be able to right click->paste
2. Right click the window title (bar with the minimize maximize X option)
3. Right click-> Edit -> paste


    git fetch origin
-> Similar to git pull (but not the same!), you can fetch the latest
version of the repository by using git fetch. I recommend using
"git status" frequently  to see the conflicts and differences. Git provides
descriptive information on on what the differences are between your local repo
and your remote

    git pull origin master
After you pull the remote repository, you must pull any folders.
even when the folder is empty, it may still have a READme.txt file and
git will not allow you perform any operations (such as pushing) until you
pull the latest version of the repository.

    git status
Extremely useful to check the current status of the project utilize this command frequently to be sure project is not
unpredictable git add file.txt -> Before using add, you must add a new file to the folder you have
initilized. (See git init) This command will tell git to start tracking changes made to "file.txt"
We first need to add it to the staging area by using git add


    git add fileName

    git add --all
Similar to git add, this command will add all new files you included in the folder to the
staging area. Remember, all files must be staged before they can be tracked and pushed to your
respective repository.
>Note: Yeah, that's right, TWO dashes

    git commit -m "Commit Message"
Utilize the git commit after you stage (aka. add)
files to your local repository or whenever you
feel it is necessary to keep a paper trail of all
of your actions in the git command line. Especially include a commit message before
pushing. Git commit "message" will create a logged entry of your activity.
This will be convenient for your collaborators so they can view your
progress, additions, and contributions to the repositoty at a glance.


    git push -u origin master
Wohooo! Name our our remote is origin and the default
branch name is master. The -u tells git to remember the
parameters, so next time we can simply use
<code>git push origin</code>

    git diff HEAD
-> Useful to view difference of branches in the repository. To see the
difference of the most recent commit we can refer to using the
HEAD pointer.    git diff also works fine

>Note* Another great use for diff is looking at changes within files
that have already been staged. Remember, staged files are
files we have told git that are ready to be committed and
pushed

    git diff --staged
See changes you have staged! ^^


    git reset fileName.txt
You can UNSTAGE tiles by using the git reset command



    git checkout --fileName.txt

git reset does a great job unstaging fileName.txt
it'll still be there, just not staged anymore. Files
can be changed back to how they were at the last
commit by using the command git checkout -- <target>

    git branch branch_Name
Create a new local branch.


    git checkout branch_Name
This is different than git checkout --<target>. This
command will set you on the branch of your choosing
You can switch between master, newBranch,oldBranch etc

    git rm '*txt'
rm removes files, and '*.txt' acts as a "wild card" and removes all files that are of type .txt


    git merge some_Branch
Allows a merge to happen between the current branch and some_Branch

    git push
allows you to push. Remember to commit -m "message" first!!


    git log
Acts as a journal for all pushes and activity on the repository
