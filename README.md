# Polymer Boilerplate

Polymer Boilerplate provides everything, you need, to start a new website project in a minute.

Table of contents:

* [Features](https://github.com/mikoweb/polymer-boilerplate#features)
* [What's included by default](https://github.com/mikoweb/polymer-boilerplate#whats-included-by-default)
* [How to create a new project](https://github.com/mikoweb/polymer-boilerplate#how-to-create-a-new-project)
* [How to build my project](https://github.com/mikoweb/polymer-boilerplate#how-to-build-my-project)
* [Run and tests](https://github.com/mikoweb/polymer-boilerplate#run-and-tests)
* [Directory structure](https://github.com/mikoweb/polymer-boilerplate#directory-structure)
* [Custom libraries builders](https://github.com/mikoweb/polymer-boilerplate#custom-libraries-builders)
* [License](https://github.com/mikoweb/polymer-boilerplate/blob/master/LICENSE)

## Features

* Web Components ready. You can create custom reusable HTML elements with 
[Polymer Library](https://www.polymer-project.org/2.0/docs/devguide/feature-overview).
* Ready for writing code in ES6+ and ECMAScript modules.
* Provides tools to build scripts, styles and Web Components.
* [Tools to tests](https://www.polymer-project.org/2.0/docs/tools/tests) provided by Polymer.
* You can [runs a local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve).

## What's included by default

`fragments/app.html` as `build/bundled/fragments/app.html` it's size `167 kB` (45.9 gzipped).

Component | Description
:---: | :---:
 [Polymer Library](https://www.polymer-project.org/) | Unlock the Power of Web Components.
 [app-drawer](https://www.webcomponents.org/element/PolymerElements/app-layout/elements/app-drawer) | app-drawer is a navigation drawer that can slide in from the left or right.
 [paper-progress](https://www.webcomponents.org/element/PolymerElements/paper-progress) | A Material Design progress.
 [paper-icon-button](https://www.webcomponents.org/element/PolymerElements/paper-icon-button) | A Material Design icon button.

`bundle/core.min.js` it's size `50.6 kB` (13.9 gzipped).

Library | Description
:---: | :---: |
 [Babel helpers](https://www.npmjs.com/package/babel-helpers) | Collection of helper functions used by Babel transforms. 
 [WC es5-adapter](https://github.com/webcomponents/webcomponentsjs#custom-elements-es5-adapterjs) | According to the spec, Custom Elements must be ES6 classes. 
 [WCReady](https://github.com/mikoweb/wc-ready) | Simple function to listen to the `WebComponentsReady` event.
 [Model Persistence](https://github.com/mikoweb/model-persistence) | Library intended for data persistence using HTTP or Storage API.
 [Element View](https://github.com/mikoweb/element-view) | It's view layer to HTMLElement, that responsible for Event Handling.
 [ObjectModel](http://objectmodel.js.org/docs/v2/) | Object models validate nested object properties against a definition tree. You may consider them as definitions of classes with advanced validation options.
 [axios](https://github.com/axios/axios) | Promise based HTTP client for the browser and node.js 

`style/index.scss` as `bundle/style.css` it's size `23 kB` (4.7 gzipped).

Feature | Description
:---: | :---:
 [Material Design Color](https://github.com/mrmlnc/material-color) | The colour palette, based on [Google's Material Design](http://www.google.com/design/spec/style/color.html), for use in your project.
 Normalize and reset styles | Normalized stylesheets, which you can adjust with Sass variables and mixins.
 [Bootstrap 4 Grid](https://getbootstrap.com/docs/4.0/layout/grid/) | Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes. 

## How to create a new project

Install Polymer CLI.

    npm install -g bower
    npm install -g polymer-cli
    
Install gulp.

    npm install -g gulp-cli

Clone this repository.

    git clone https://github.com/mikoweb/polymer-boilerplate.git /path/to/your/project
    git remote remove origin

Install dependencies.

    npm install
    bower install

## How to build my project

Inside `gulpfile.js` placed all necessary tasks. 

To build full project run command:

    gulp dist

Below is a list with all available tasks.

![gulp tasks](https://github.com/mikoweb/polymer-boilerplate/raw/master/docs/tasks.png)

## Run and tests

All information is available in the Polymer Docs.

https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands

https://www.polymer-project.org/2.0/docs/tools/tests

Below is a three most used commands.

    polymer serve
    polymer test
    polymer test -p
    
## Directory structure

Path | Description
:---: | :---:
 bower_components | Packages used by Polymer and Web Components.
 build | Folder used by [Polymer Bundler](https://www.polymer-project.org/2.0/docs/tools/polymer-json), here you will find built file for HTML import. Always use it on production.
 bundle | Bundled scripts and stylesheets.
 fragments | Put files that will be importing by `link[rel=import]`.
 gulp | Gulp tasks source code.
 lib | Good place to insert external libraries.
 node_modules | Npm or Yarn packages.
 pages | Here put HTML files.
 src/elements | Here put your Web Components, reserved for [Custom Elements](https://www.polymer-project.org/2.0/docs/devguide/registering-elements).
 src/blocks | Similar to `src/elements` but it's for large/layout/nested elements like `<app-layout>`.
 src/app/index.js | Main file of your JavaScript application.
 src/app | Put scripts and use ECMAScript imports.
 static | Reserved for static files like images, fonts.
 style | Reserved for Sass/CSS source code.
 test | Reserved for test source code.
 globals.default.json | Contains a list of global variables included by `bundle/core.min.js`. Required by [rollup.js bundler](https://rollupjs.org/).

## License

Copyright (c) 2017, Rafał Mikołajun
All rights reserved.

This project is under the BSD 3-clause license. See the complete license in the file:

    LICENSE
