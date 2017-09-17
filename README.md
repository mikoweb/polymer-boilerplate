# TODO

readme under construction

## Features

* Web Components ready. You can create custom reusable HTML elements with 
[Polymer Library](https://www.polymer-project.org/2.0/docs/devguide/feature-overview).
* Ready for writing code in ES6+ and ECMAScript modules.
* Contains some Marionette.js features such as [Marionette.View](https://marionettejs.com/docs/master/marionette.view.html).
    It's reduced size library version.
* Contains [Backbone](http://backbonejs.org) library. It's small library that provides [Model](http://backbonejs.org/#Model) 
    and a few others features for your application. 
* TODO (directory structure, tools, custom jquery, underscore)

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
