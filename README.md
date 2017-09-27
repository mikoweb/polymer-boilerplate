# Polymer Boilerplate

Polymer Boilerplate provides everything, you need, to start a new website project in a minute.

## Features

* Web Components ready. You can create custom reusable HTML elements with 
[Polymer Library](https://www.polymer-project.org/2.0/docs/devguide/feature-overview).
* Ready for writing code in ES6+ and ECMAScript modules.
* Provides tools to build scripts, styles, custom jQuery and others libraries.
* [Tools to tests](https://www.polymer-project.org/2.0/docs/tools/tests) provided by Polymer.
* You can [runs a local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve).
* Contains some Marionette.js features such as [Marionette.View](https://marionettejs.com/docs/master/marionette.view.html).
    It's reduced size library version.
* Contains [Backbone](http://backbonejs.org) library. It's small library that provides [Model](http://backbonejs.org/#Model) 
    and a few others features for your application.
* Contains custom smaller jQuery library.

## What's included by default

`fragments/app.html` as `build/bundled/fragments/app.html` its size `163 kB` (44.8 gzipped).

Component | Description
:---: | :---:
 [Polymer Library](https://www.polymer-project.org/) | Unlock the Power of Web Components.
 [app-drawer](https://www.webcomponents.org/element/PolymerElements/app-layout/elements/app-drawer) | app-drawer is a navigation drawer that can slide in from the left or right.
 [paper-progress](https://www.webcomponents.org/element/PolymerElements/paper-progress) | A Material Design progress.
 [paper-icon-button](https://www.webcomponents.org/element/PolymerElements/paper-icon-button) | A Material Design icon button.

`bundle/core.min.js`

Library | Description | Size [kB] | Gzip [kB]
:---: | :---: | :---: | :---:
 [Babel helpers](https://www.npmjs.com/package/babel-helpers) | Collection of helper functions used by Babel transforms. | 6.8 | 2.4 
 [WC es5-adapter](https://github.com/webcomponents/webcomponentsjs#custom-elements-es5-adapterjs) | According to the spec, Custom Elements must be ES6 classes. | 1.6 | 0.7
 [WCReady](https://github.com/mikoweb/wc-ready) | Simple function to listen to the `WebComponentsReady` event. | 0.24 | 0.19 
 [jQuery](https://github.com/jquery/jquery#how-to-build-your-own-jquery) | Without -deprecated,-queue,-serialize,-sizzle | 66 | 23.3 
 [Underscore](http://underscorejs.org/) | Provides a whole mess of useful functional programming helpers. | 16.4 | 5.9 
 [Backbone](http://backbonejs.org/) | Providing models with key-value binding, custom events and other features. | 23.4 | 7.6 
 [Marionette View](https://marionettejs.com/docs/master/marionette.view.html) | Only View from Marionette framework. | 26 | 7.5
 [Polymer Backbone bridge](https://github.com/mikoweb/polymer-backbone) | Provides Backbone Model for Polymer Custom Elements. | 0.95 | 0.45

`style/index.scss` as `bundle/style.css` its size `20.4 kB` (4.2 gzipped).

Feature | Description
:---: | :---:
 [Material Design Color](https://github.com/mrmlnc/material-color) | The colour palette, based on [Google's Material Design](http://www.google.com/design/spec/style/color.html), for use in your project.
 Normalize and reset styles | Normalized stylesheets, which you can adjust with Sass variables and mixins.
 [Bootstrap 4 Grid](https://getbootstrap.com/docs/4.0/layout/grid/) | Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes. 

##  Custom libraries builders

You can build custom libraries versions, building tools are located in `builders` directory. Settings may be changed 
in `config.default.json` file or may be overwritten by `config.custom.json`.

For build custom jQuery:
```
npm run build-custom-jquery
```

For build custom Lodash:
```
npm run build-custom-lodash
```

For build custom Marionette:
```
npm run build-custom-marionette
```
