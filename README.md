# [Growth.Dev] How to transform Linkedin into an address book using Puppeteer!

## Prerequisites 🛠

- *A command line terminal*, if you're not familiar with it you can read [this post](https://macpaw.com/how-to/use-terminal-on-mac) explaining the basics. For the best experience, we recommend you [iTerm2](https://www.iterm2.com/) an alternative to the pre-install macOS terminal.

- The JavaScript runtime *Node.js*. If you're a [brew](https://brew.sh/) user you can simply `brew install node`, otherwise you can download it [here](https://nodejs.org/). Moreover [here's an article](https://codeburst.io/getting-started-with-node-js-a-beginners-guide-b03e25bca71b) where you can find more information about how to install it and use it. 

- The distributed version control system *Git*. If you're a brew user you can simply `brew install git`. Git'll be necessary to clone this repository on your computer

To be sure both of these tools are OK, open a terminal and run:

```bash
▶ node -v
v10.7.0
```

```bash
▶ npm -v
6.2.0
```

```bash
▶ git --version
git version 2.17.2 (Apple Git-113)
```

And check the version of _node_ installed is upper or equal to 8.

## Install repository

1. Clone this repository

```bash 
▶ git clone https://github.com/aureeaubert/linkedin-workshop-template.git
```

2. Open the repository

```bash
▶ mkdir linkedin-workshop-template
```

And open this folder with the editor of your choice


4. Intall dependencies

```bash
▶ npm install
```

3. Execute it:

```bash
▶ node ./scrape-profile-usernames.js <linkedin search url> <session cookie>
▶ node ./scrape-profiles.js <session cookie>
```

Note: `session cookie` corresponds to the LinkedIn authentication cookie named `li_at`
