# Corvus
An AIO (all-in-one) project creator!

The Common Offline Real Time Virtual User Shell
<!-- TOC -->

- [Corvus](#corvus)
  - [Scaffolding](#scaffolding)
    - [Commands](#commands)
    - [Electron](#electron)
    - [Website](#website)
    - [Ionic](#ionic)
  - [All Commands](#all-commands)

<!-- /TOC -->
## Scaffolding
The following can be created depending on your project by telling Corvus to generate them via `corvus g` keep in mind many of these scaffolds are not compatible with each other.

### Commands
|Type|Usage|Attributes|Description|
|----|-----|----------|-----------|
|[Electron](#electron)|corvus **g** *electron*|*Tray*, \< js & css frameworks \>|Tell Corvus to `generate` an Electron based structure|
|[Website](#website)|corvus **g** *website*|\< js & css frameworks \>|Tell Corvus to `generate` a website based structure|
|[Ionic](#ionic)|corvus **g** *ionic*|\< ionic CLI commands \>|Tell Corvus to `generate` an Ionic based structure|

### Electron
Being the primary inspiration behind bringing Corvus to life, Electron is the main **scaffold** we focus on. It supports a large number of frameworks and we don't plan on stopping. Frameworks include javascript frameworks sush as react, or styling frameworks such as Bootstrap. As new frameworks emerge, and as you ask us to add more, support will be added. Below are the various supported frameworks. Of course, others may be personally added as well.

- Fonts
  - Coming Soon
- Style
  - Bootstrap
  - Material UI
  - Materialize
  - Semantic UI
  - Skeleton
  - UIKit
  - Milligram
  - Susy
  - Foundation
- Javascript
  - React
  - Express
  - Angular
  - Vue
  - Ember
  - Meteor

### Website
It seems completely obvious to add a nice HTML5 **scaffold**, with framework support of course! Below are the frameworks we've added support for *so far*.

- Fonts
  - Coming Soon
- Style
  - Bootstrap
  - Materialize
  - Pure
  - Material UI
  - Semantic UI
  - Skeleton
  - UIKit
  - Milligram
  - Susy
  - Foundation
- Javascript
  - Bootstrap
  - Ember
  - Meteor
  - Angular
  - React
  - Express
  - Vue
  - p5

### Ionic


## All Commands
|Concept|Usage|Description|
|-------|-----|-----------|
|Create a new project|corvus **new \| n** *name*|Create a new project. This will prompt you for information to add to the `package.json` file.|
|Check dependencies|corvus **check \| c**|See currently installed modules and list those that are dependendencies but are not installed|
|Install dependencies|corvus **install \| i**|Install any listed yet missing dependencies|
|Scaffolding|corvus **generate \| g** *type attribute*|Generate a variety of project types that will be later created. Ex: `corvus generate|g electron tray`|
|Revert to initial creation|corvus **revert \| r**|Delete all files and folders that were created after the initial creation of the new project|
|Git functionality|corvus **\<command\>**|Git control within Corvus to keep the user in the flow. If *Corvus* doesn't support the command yet, it can be run via `git`|
|Add a new field|corvus **add \| a** *\<name\> \<type\> \<val\>*|Adds a new field to `package.json`.  Ex: corvus **a** *productName str Corvus* where `str` stands for string. This would add `"productName":"Corvus"`|
