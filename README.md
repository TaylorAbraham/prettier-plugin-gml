<p align="center">
  &nbsp;&nbsp;<img alt="Prettier Logo"
  src="https://cdn.rawgit.com/prettier/prettier-logo/master/images/prettier-icon-light.svg">&nbsp;&nbsp;
  &nbsp;&nbsp;<img alt="Game Maker Logo"
  height="210"
  src="https://cdn.iconscout.com/icon/free/png-512/game-maker-2-569485.png">&nbsp;&nbsp;
</p>
<p align="center">
  <a href="https://github.com/TaylorAbraham/prettier-plugin-gml/blob/master/LICENSE">
    <img alt="AGPL 3.0" src="https://img.shields.io/github/license/taylorabraham/prettier-plugin-gml">
  </a>
  <a href="https://www.npmjs.com/package/prettier-plugin-gml">
    <img alt="Version on NPM" src="https://img.shields.io/npm/v/prettier-plugin-gml">
  </a>
  <a href="https://github.com/TaylorAbraham/prettier-plugin-gml/issues">
    <img alt="Github Issues" src="https://img.shields.io/github/issues/taylorabraham/prettier-plugin-gml">
  </a>
</p>

# Prettier GML Plugin
- [Overview](#overview)
  * [Example](#example)
- [Installation](#installation)
  * [Prerequisites](#prerequisites)
  * [Global Install](#global-install)
  * [Local Install](#local-install)
- [Usage](#usage)
  * [⚠️IMPORTANT NOTICE⚠️](#important-notice)
  * [VS Code](#vs-code)
  * [Command Line](#command-line)
- [Troubleshooting](#troubleshooting)

# Overview
This plugin enhances Prettier, a tool for automatically formatting your code in an opinionated way. This adds Game Maker Language (.gml file) support in the context of Game Maker Studio 2.

## Example

### Before
```
var enemy = argument0; var damage = argument1

with(enemy)
{

	  self.hp-=damage
	if(self.hp<=0){instance_destroy(self)}
}
```

### After
```
var enemy = argument0;
var damage = argument1;

with (enemy) {
  self.hp -= damage;
  if (self.hp <= 0) {
    instance_destroy(self);
  }
}
```

Beautiful! 🌼

# Installation
Install the prequisites, then follow either the global or local install below.

## Prerequisites
Node and npm must be installed. They can be installed together from here: https://nodejs.org/

You can then verify that Node and npm have been installed correctly by entering the following commands into any terminal such as Powershell:
```
node -v
npm -v
```

If you see a version number for each of them, success! Otherwise, try uninstalling your current version of Node and reinstall it.

## Global Install
This will install Prettier and the Prettier GML plugin globally on your machine, meaning it can be used for all of your projects.
```
npm install -g --save-exact prettier prettier-plugin-gml
```

## Local Install
This will install Prettier and the Prettier GML plugin ONLY for a single Game Maker project. Open up a terminal in the directory of your Game Maker project and run the following commands:
```
npm init
npm install --save-dev --save-exact prettier prettier-plugin-gml
```

# Usage
## ⚠️IMPORTANT NOTICE⚠️
This extension is still experimental, please be sure to commit your code into version control or have a backup before using this! There may be uncaught bugs that have the potential to delete code. If using VS Code, this is fixable with an "undo" command after saving.

## VS Code
Prettier integrates directly into VS Code! Once you have done the above setup, just install the "Prettier" and "GML Support" VS Code extensions. You may need to enable "editor.formatOnSave" in your VS Code preferences, and now when you save a GML file it should automatically format itself!

**WARNING**: If you followed the global install, this will cause Prettier to start formatting all files you open with VS Code that are supported with Prettier (such as HTML, JS, and CSS files).

## Command Line
To use without VS Code, simply follow the installation above and open up a terminal in the directory of your Game Maker project. Then just run 
```
prettier --write .
```

For more advanced configurations, the Prettier docs have fantastic explanations of the command line options: https://prettier.io/docs/en/cli.html

# Troubleshooting
* One of the most common fixes may be to simply reinstall Node and npm from https://nodejs.org/
* If your Node and/or npm versions are very old (<12 or <6.14 respectively), uninstall and reinstall them with more up to date versions
* If you cannot find an answer to your issue after carefully reading through the installation and usage instructions, file an issue [right here!](https://github.com/TaylorAbraham/prettier-plugin-gml/issues)
