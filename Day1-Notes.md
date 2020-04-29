Orientation
- Wednesdays and Fridays- 5-6pm Office Hours
- Challenges and questions in Slack and GitHub
- LEARN is very community based.  Operates on brave space system, embrace being bad, embrace everyone who wants to learn.
- 11 people in BRAVO Cohort
- CODING IS HARD - Have grace with yourself and others
- Brave Space API - Assume Positive Intent, especially when reading in to text because it's hard to tell what the person meant.
- Extra compassionate - over communicate
- Make the internet a better place, make sure to practice ethics.

Terminal
- Command Line- text-based commands to tell computer what to do.
- GUIs (pronounced gooies)- Make computers what they look like visuall (so with app icons, nested files all nice, point and click).  Make things the terminal can do look prettie and more user friendly.
- The terminal allows you to communicate between you and your computer.
- Allows a lot more control and you can do a lot with it like using git and github.
- Terminal is a VPS - or a Virtual Private Server

Terminal commands intro
- pwd - "present working directory"- tells you what folder you are in currently
- ls - "list storage"- tells what is in the directory you are in.  
- ls -l - more detailed list
- cd - "change directory" - .. is one level back, so if you're in a directory that's on your desktop labeled "folder", if you did cd .. , it would take you back to your "desktop" directory.
- mkdir - "make directory"- allows you to create a new directory
- touch - "create file"- can create a new file.  Filenames must be no spaces, lowercase or camelCase
- open "filename"- to open a file
- open . - opens file as if it was double clicked
- atom . opens file in atom, code . opens file in visual studio code
- rmdir - removes directory, if it's full, rmdir -r allows you to delete it.
- ; - allows multiple commands in sequence
- history - see all commands used
- clear - clear the terminal

Terminal Tips and Shortcuts
- command t - opens a new tab in Terminal
- command k - clears the terminal
- command d - makes a split pane, command shift d gets rid of it.
- tab - will autocomplete the directory or filename
- command +/- - increase or decrease font size
- up arrow - prints the last command entered, use the up/down arrows to scroll through commands history

Tech Stack
MVC
 - Model - PostgreSQL, persistence storage, database
 - View - HTML, CSS, JavaScript, React - "Frontend" the aspet of code that you see click, and navigate about 20% of the code
- Controller - Ruby, Ruby on Rails- "Backend" the logic, functions, algorithms "under the hood

git and GitHub
They are two different things:
  - git "the command line tool"- manage version control LOCALLY- a VCS, better known as a Version Control System that allows you to track changes in your project and allows you to see the history of a project or versions that can be recalled.  It is used in the command line.
  - GitHub "the online hosting service"- share and collaborate on code using version control REMOTELY (on the web)- allows collaboration with integrated version control. Allows version control through graphical user interface.
      - Allows collaboration
      - Showing your code
      - FORKING- Copying other developers code
      - Static pages like websites
      - Project management

Most Common Git Commands
- git add (ex. git add . ) - used to 'stage' or 'track' changes
- git commit -m "comments here" (ex. git commit -m "first commit")- used to save changes on staged files
- git pull (ex git pull origin master)- get remote changes to local copy
- git push (ex. git push origin master) - get local changes to remote copy
- git init - makes the current folder into a git repository (only needs to be run once)
- git status (super useful!)- logs the current status of a branch
- git log (also super useful!) - lists all commits (saves)
- git clone (ex. git clone <copy git repo url>)- crates a copy of the repo at the url locally
- git checkout (ex. git checkout master) - creates/moves between branches (the 'cd' of git)
- Useful In Class
  - git config user.name  - logs/sets the name associated with commits
  - git config user.email - logs/sets email associated with commits
  - git remote - logs/set/removes the remote address for a repo
- Useful tip, a period after git add . means to add all the files from that repository.  Can be replaced by an actual file name to help with confusion.

  Atom - text editor
   - Developed by GitHub
   - Shortcuts:
    - shift tab - out-dent
    - command / - comments out code
    - command l - selects the current line, holding 'command' and hitting l will add subsequent lines to the selected block.
    - command d - will find every instance of a word
    - shift command d - duplicates the line
    - command control up/down arrow - moves the line of code up or down
