// DO NOT MODIFY THIS FILE BECAUSE IT WAS GENERATED AUTOMATICALLY

import Backbone from 'backbone';
import {version} from '../package.json';

import proxy from './utils/proxy';
import extend from './utils/extend';
import deprecate from './utils/deprecate';

import isNodeAttached from './common/is-node-attached';
import mergeOptions from './common/merge-options';
import getOption from './common/get-option';
import normalizeMethods from './common/normalize-methods';
import monitorViewEvents from './common/monitor-view-events';

import {
  bindEvents,
  unbindEvents
} from './common/bind-events';

import {
  bindRequests,
  unbindRequests
} from './common/bind-requests';

import {
  triggerMethod,
  triggerMethodOn
} from './common/trigger-method';


import MarionetteObject from './object';
import TemplateCache from './template-cache';
import View from './view';
// DISABLED[CollectionView]
//import CollectionView from './collection-view';
// EXPERIMENTAL[NextCollectionView]
//import NextCollectionView from './next-collection-view';
// DEPRECATED[CompositeView]
//import CompositeView from './composite-view';
import Behavior from './behavior';
import Region from './region';
// DISABLED[Application]
//import Application from './application';
// DISABLED[AppRouter]
//import AppRouter from './app-router';
import MarionetteError from './error';

import behaviorsLookup from './config/behaviors-lookup';
import DomApi from './config/dom';
import Renderer from './config/renderer';

import {
  FEATURES,
  isEnabled,
  setEnabled
} from './config/features';

const previousMarionette = Backbone.Marionette;
const Marionette = Backbone.Marionette = {};

// This allows you to run multiple instances of Marionette on the same
// webapp. After loading the new version, call `noConflict()` to
// get a reference to it. At the same time the old version will be
// returned to Backbone.Marionette.
Marionette.noConflict = function() {
  Backbone.Marionette = previousMarionette;
  return this;
};

// Utilities
Marionette.bindEvents = proxy(bindEvents);
Marionette.unbindEvents = proxy(unbindEvents);
Marionette.bindRequests = proxy(bindRequests);
Marionette.unbindRequests = proxy(unbindRequests);
Marionette.mergeOptions = proxy(mergeOptions);
Marionette.getOption = proxy(getOption);
Marionette.normalizeMethods = proxy(normalizeMethods);
Marionette.extend = extend;
Marionette.isNodeAttached = isNodeAttached;
Marionette.deprecate = deprecate;
Marionette.triggerMethod = proxy(triggerMethod);
Marionette.triggerMethodOn = triggerMethodOn;
Marionette.isEnabled = isEnabled;
Marionette.setEnabled = setEnabled;
Marionette.monitorViewEvents = monitorViewEvents;

Marionette.Behaviors = {};
Marionette.Behaviors.behaviorsLookup = behaviorsLookup;

// Classes
// DISABLED[Application]
//Marionette.Application = Application;
// DISABLED[AppRouter]
//Marionette.AppRouter = AppRouter;
Marionette.Renderer = Renderer;
Marionette.TemplateCache = TemplateCache;
Marionette.View = View;
// DISABLED[CollectionView]
//Marionette.CollectionView = CollectionView;
// EXPERIMENTAL[NextCollectionView]
//Marionette.NextCollectionView = NextCollectionView;
// DEPRECATED[CompositeView]
//Marionette.CompositeView = CompositeView;
Marionette.Behavior = Behavior;
Marionette.Region = Region;
Marionette.Error = MarionetteError;
Marionette.Object = MarionetteObject;

// Configuration
Marionette.DEV_MODE = false;
Marionette.FEATURES = FEATURES;
Marionette.VERSION = version;
Marionette.DomApi = DomApi;
Marionette.setDomApi = function(mixin) {
 // DISABLED[CollectionView]
// CollectionView.setDomApi(mixin);
 // DEPRECATED[CompositeView]
// CompositeView.setDomApi(mixin);
 // EXPERIMENTAL[NextCollectionView]
// NextCollectionView.setDomApi(mixin);
  Region.setDomApi(mixin);
  View.setDomApi(mixin);
};

export default Marionette;
