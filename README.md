# grunt-init-textgen

> Create a Wordnik-based text generator/sharer with [grunt-init][].

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone git@github.com:dariusk/grunt-init-textgen.git ~/.grunt-init/textgen
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Wordnik API key

Sign up for a free account at https://www.wordnik.com/signup and then request a developer key at https://developer.wordnik.com/

Edit ```permissions.js``` and add the API key in.

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init textgen
npm install
grunt watch
[edit some files, like js/app.js]
[open index.html in your browser, served through a local web server]
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._
