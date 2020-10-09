define(["exports","meta"],function(_exports,meta){/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/'use strict';Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$documentWaitDefault=documentWait;_exports.addListener=addListener;_exports.afterNextRender=afterNextRender;_exports.applyCss=applyCss;_exports.applyStyle=applyStyle;_exports.applyStylePlaceHolder=applyStylePlaceHolder;_exports.beforeNextRender=beforeNextRender;_exports.calculateSplices=calculateSplices;_exports.camelToDashCase=camelToDashCase;_exports.createScopeStyle=createScopeStyle;_exports.cssFromModule=cssFromModule;_exports.cssFromModuleImports=cssFromModuleImports;_exports.cssFromModules=cssFromModules;_exports.cssFromTemplate=cssFromTemplate;_exports.dashToCamelCase=dashToCamelCase;_exports.deepTargetFind=deepTargetFind;_exports.detectMixin=_detectMixin;_exports.dumpRegistrations=dumpRegistrations;_exports.elementHasBuiltCss=elementHasBuiltCss;_exports.elementsAreInvalid=elementsAreInvalid;_exports.findMatchingParen=findMatchingParen;_exports.flush$2=flush;_exports.forEachRule=forEachRule;_exports.gatherStyleText=gatherStyleText;_exports.get=_get;_exports.getBuildComment=getBuildComment;_exports.getComputedStyleValue=_getComputedStyleValue;_exports.getCssBuild=getCssBuild;_exports.getIsExtends=getIsExtends;_exports.hideElementsGlobally=hideElementsGlobally;_exports.incrementInstanceCount=incrementInstanceCount;_exports.invalidate=invalidate;_exports.invalidateTemplate=invalidateTemplate;_exports.isAncestor=isAncestor;_exports.isDescendant=isDescendant;_exports.isKeyframesSelector=isKeyframesSelector;_exports.isOptimalCssBuild=isOptimalCssBuild;_exports.isPath=isPath;_exports.isTargetedBuild=isTargetedBuild;_exports.isUnscopedStyle=isUnscopedStyle;_exports.isValid=isValid;_exports.isValidating=isValidating;_exports.matches=matches;_exports.mixinBehaviors=mixinBehaviors;_exports.modelForElement=_modelForElement;_exports.normalize=normalize;_exports.parse=parse;_exports.pathFromUrl=pathFromUrl;_exports.prevent=_prevent;_exports.processUnscopedStyle=processUnscopedStyle;_exports.processVariableAndFallback=processVariableAndFallback;_exports.register=register$1;_exports.register$1=register;_exports.removeCustomPropAssignment=removeCustomPropAssignment;_exports.removeListener=removeListener;_exports.resetMouseCanceller=resetMouseCanceller;_exports.resolveCss=resolveCss;_exports.resolveUrl=_resolveUrl;_exports.root=root;_exports.rulesForStyle=rulesForStyle;_exports.scopeSubtree=_scopeSubtree;_exports.set=_set;_exports.setElementClassRaw=setElementClassRaw;_exports.setTouchAction=setTouchAction;_exports.showHideChildren=showHideChildren;_exports.split=split;_exports.splitSelectorList=splitSelectorList;_exports.startValidating=startValidating;_exports.startValidatingTemplate=startValidatingTemplate;_exports.stringify=stringify;_exports.stylesFromModule=stylesFromModule;_exports.stylesFromModuleImports=stylesFromModuleImports;_exports.stylesFromModules=stylesFromModules;_exports.stylesFromTemplate=stylesFromTemplate;_exports.templateIsValid=templateIsValid;_exports.templateIsValidating=templateIsValidating;_exports.templatize=_templatize;_exports.toCssText=toCssText;_exports.translate=translate;_exports.updateNativeProperties=updateNativeProperties;_exports.IronRangeBehavior=_exports.IronMeta=_exports.IronControlState=_exports.IronButtonStateImpl=_exports.IronButtonState=_exports.IronA11yKeysBehavior=_exports.IS_VAR=_exports.HOST_SUFFIX=_exports.HOST_PREFIX=_exports.GestureEventListeners=_exports.FlattenedNodesObserver=_exports.EventApi=_exports.ElementMixin=_exports.DomRepeat=_exports.DomModule=_exports.DomIf=_exports.DomBind=_exports.DomApi=_exports.DisableUpgradeMixin=_exports.DirMixin=_exports.Debouncer=_exports.CustomStyleProvider=_exports.CustomStyleInterfaceInterface=_exports.CustomStyle=_exports.Class=_exports.Base=_exports.BRACKETED=_exports.ArraySelectorMixin=_exports.ArraySelector=_exports.ANIMATION_MATCH=_exports.$wrap=_exports.$unscopedStyleHandler=_exports.$templatizerBehavior=_exports.$templatize=_exports.$templateStamp=_exports.$templateMapDefault=_exports.$templateMap=_exports.$templateDefault=_exports.$template=_exports.$telemetry=_exports.$styleUtil=_exports.$styleSettings=_exports.$styleGather=_exports.$styleDefault=_exports.$style=_exports.$settings=_exports.$scopeSubtree=_exports.$resolveUrl=_exports.$renderStatus=_exports.$propertyEffects=_exports.$propertyAccessors=_exports.$propertiesMixin=_exports.$propertiesChanged=_exports.$polymerLegacy=_exports.$polymerFn=_exports.$polymerElement=_exports.$polymerDom=_exports.$path=_exports.$paperRippleBehavior=_exports.$paperInkyFocusBehavior=_exports.$mutableDataBehavior=_exports.$mutableData=_exports.$mixin=_exports.$legacyElementMixin=_exports.$ironRangeBehavior=_exports.$ironMeta=_exports.$ironControlState=_exports.$ironButtonState=_exports.$ironA11yKeysBehavior=_exports.$htmlTag=_exports.$hideTemplateControls=_exports.$gestures=_exports.$gestureEventListeners=_exports.$flush=_exports.$flattenedNodesObserver=_exports.$elementMixin=_exports.$domRepeat=_exports.$domModule=_exports.$domIf=_exports.$domBind=_exports.$documentWait=_exports.$disableUpgradeMixin=_exports.$dirMixin=_exports.$debounce=_exports.$customStyleInterfaceDefault=_exports.$customStyleInterface$1=_exports.$customStyle=_exports.$cssParse=_exports.$commonUtils=_exports.$commonRegex=_exports.$class=_exports.$caseMap=_exports.$async=_exports.$arraySplice=_exports.$arraySelector=_exports.$applyShimUtils=_exports.$applyShimDefault=_exports.$applyShim$1=_exports.$AbstractElementDefault=_exports.$AbstractElement=void 0;_exports.wrap$1=_exports.wrap=_exports.version$1=_exports.version=_exports.useShadow=_exports.useNativeCustomElements=_exports.useNativeCSSProperties=_exports.useAdoptedStyleSheetsWithBuiltCSS=_exports.updateStyles=_exports.types=_exports.timeOut=_exports.syncInitialRender=_exports.suppressTemplateNotifications=_exports.supportsAdoptingStyleSheets=_exports.strictTemplatePolicy=_exports.setUseAdoptedStyleSheetsWithBuiltCSS=_exports.setSyncInitialRender=_exports.setSuppressTemplateNotifications=_exports.setStrictTemplatePolicy=_exports.setSanitizeDOMValue=_exports.setRootPath=_exports.setRemoveNestedTemplates=_exports.setPassiveTouchGestures=_exports.setOrderedComputed=_exports.setLegacyWarnings=_exports.setLegacyUndefined=_exports.setLegacyOptimizations=_exports.setLegacyNoObservedAttributes=_exports.setFastDomIf=_exports.setCancelSyntheticClickEvents=_exports.setAllowTemplateFromDomModule=_exports.scopingAttribute=_exports.sanitizeDOMValue=_exports.rootPath=_exports.removeNestedTemplates=_exports.remove=_exports.registrations=_exports.recognizers=_exports.passiveTouchGestures=_exports.orderedComputed=_exports.nativeShadow=_exports.nativeCssVariables=_exports.microTask=_exports.matchesSelector=_exports.legacyWarnings=_exports.legacyUndefined=_exports.legacyOptimizations=_exports.legacyNoObservedAttributes=_exports.isDeep=_exports.instanceCount=_exports.idlePeriod=_exports.htmlLiteral=_exports.html$2=_exports.html$1=_exports.html=_exports.getSanitizeDOMValue=_exports.gestures=_exports.flushDebouncers=_exports.flush$1=_exports.flush=_exports.findOriginalTarget=_exports.findObservedAttributesGetter=_exports.fastDomIf=_exports.dom=_exports.disableRuntime=_exports.dedupingMixin=_exports.cssBuild=_exports.cancelSyntheticClickEvents=_exports.builtCSS=_exports.animationFrame=_exports.allowTemplateFromDomModule=_exports.enqueueDebouncer$1=_exports.enqueueDebouncer=_exports.addDebouncer=_exports.add=_exports.VAR_CONSUMED=_exports.VAR_ASSIGN=_exports.Templatizer=_exports.TemplateStamp=_exports.TemplateInstanceBase=_exports.StyleNode=_exports.PropertyEffects=_exports.PropertyAccessors=_exports.PropertiesMixin=_exports.PropertiesChanged=_exports.PolymerElement=_exports.Polymer$1=_exports.Polymer=_exports.PaperRippleBehavior=_exports.PaperInkyFocusBehaviorImpl=_exports.PaperInkyFocusBehavior=_exports.OptionalMutableDataBehavior=_exports.OptionalMutableData=_exports.MutableDataBehavior=_exports.MutableData=_exports.MIXIN_MATCH=_exports.MEDIA_MATCH=_exports.LegacyElementMixin=void 0;meta=babelHelpers.interopRequireWildcard(meta);function _templateObject11_8c4272f00a1811eb9426c94f859aee76(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /*\n          NOTE: Both values are needed, since some phones require the value to\n          be `transparent`.\n        */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id=\"icon\" src=\"[[src]]\" icon=\"[[icon]]\"\n               alt$=\"[[alt]]\"></iron-icon>\n  "],["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /*\n          NOTE: Both values are needed, since some phones require the value to\n          be \\`transparent\\`.\n        */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id=\"icon\" src=\"[[src]]\" icon=\"[[icon]]\"\n               alt$=\"[[alt]]\"></iron-icon>\n  "]);_templateObject11_8c4272f00a1811eb9426c94f859aee76=function _templateObject11_8c4272f00a1811eb9426c94f859aee76(){return data};return data}function _templateObject10_8c4272f00a1811eb9426c94f859aee76(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        border-radius: inherit;\n        overflow: hidden;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,\n         * creating a node (with a position:absolute) in the middle of an event\n         * handler \"interrupts\" that event handler (which happens when the\n         * ripple is created on demand) */\n        pointer-events: none;\n      }\n\n      :host([animating]) {\n        /* This resolves a rendering issue in Chrome (as of 40) where the\n           ripple is not properly clipped by its parent (which may have\n           rounded corners). See: http://jsbin.com/temexa/4\n\n           Note: We only apply this style conditionally. Otherwise, the browser\n           will create a new compositing layer for every ripple element on the\n           page, and that would be bad. */\n        -webkit-transform: translate(0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #background,\n      #waves,\n      .wave-container,\n      .wave {\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #background,\n      .wave {\n        opacity: 0;\n      }\n\n      #waves,\n      .wave {\n        overflow: hidden;\n      }\n\n      .wave-container,\n      .wave {\n        border-radius: 50%;\n      }\n\n      :host(.circle) #background,\n      :host(.circle) #waves {\n        border-radius: 50%;\n      }\n\n      :host(.circle) .wave-container {\n        overflow: hidden;\n      }\n    </style>\n\n    <div id=\"background\"></div>\n    <div id=\"waves\"></div>\n"]);_templateObject10_8c4272f00a1811eb9426c94f859aee76=function _templateObject10_8c4272f00a1811eb9426c94f859aee76(){return data};return data}function _templateObject9_8c4272f00a1811eb9426c94f859aee76(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use `--primary-text-color` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of `--primary-text-color` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>"],["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use \\`--primary-text-color\\` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of \\`--primary-text-color\\` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>"]);_templateObject9_8c4272f00a1811eb9426c94f859aee76=function _templateObject9_8c4272f00a1811eb9426c94f859aee76(){return data};return data}function _templateObject8_8c4272f00a1811eb9426c94f859aee76(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: var(--app-drawer-content-padding, 120px 0);\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened$=\"[[opened]]\" persistent$=\"[[persistent]]\" position$=\"[[position]]\" swipe-open$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"],["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: var(--app-drawer-content-padding, 120px 0);\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened\\$=\"[[opened]]\" persistent\\$=\"[[persistent]]\" position\\$=\"[[position]]\" swipe-open\\$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"]);_templateObject8_8c4272f00a1811eb9426c94f859aee76=function _templateObject8_8c4272f00a1811eb9426c94f859aee76(){return data};return data}function _templateObject7_8c4272f00a1811eb9426c94f859aee76(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        width: 200px;\n        position: relative;\n        overflow: hidden;\n      }\n\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      #progressContainer {\n        @apply --paper-progress-container;\n        position: relative;\n      }\n\n      #progressContainer,\n      /* the stripe for the indeterminate animation*/\n      .indeterminate::after {\n        height: var(--paper-progress-height, 4px);\n      }\n\n      #primaryProgress,\n      #secondaryProgress,\n      .indeterminate::after {\n        @apply --layout-fit;\n      }\n\n      #progressContainer,\n      .indeterminate::after {\n        background: var(--paper-progress-container-color, var(--google-grey-300));\n      }\n\n      :host(.transiting) #primaryProgress,\n      :host(.transiting) #secondaryProgress {\n        -webkit-transition-property: -webkit-transform;\n        transition-property: transform;\n\n        /* Duration */\n        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);\n        transition-duration: var(--paper-progress-transition-duration, 0.08s);\n\n        /* Timing function */\n        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n        transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n\n        /* Delay */\n        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);\n        transition-delay: var(--paper-progress-transition-delay, 0s);\n      }\n\n      #primaryProgress,\n      #secondaryProgress {\n        @apply --layout-fit;\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n        -webkit-transform: scaleX(0);\n        transform: scaleX(0);\n        will-change: transform;\n      }\n\n      #primaryProgress {\n        background: var(--paper-progress-active-color, var(--google-green-500));\n      }\n\n      #secondaryProgress {\n        background: var(--paper-progress-secondary-color, var(--google-green-100));\n      }\n\n      :host([disabled]) #primaryProgress {\n        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));\n      }\n\n      :host([disabled]) #secondaryProgress {\n        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate {\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate::after {\n        content: \"\";\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n\n        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      @-webkit-keyframes indeterminate-bar {\n        0% {\n          -webkit-transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          -webkit-transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          -webkit-transform: scaleX(1) translateX(0%);\n          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          -webkit-transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @-webkit-keyframes indeterminate-splitter {\n        0% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n      }\n\n      @keyframes indeterminate-bar {\n        0% {\n          transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          transform: scaleX(1) translateX(0%);\n          animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @keyframes indeterminate-splitter {\n        0% {\n          transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          transform: scaleX(.75) translateX(-125%);\n          animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          transform: scaleX(.75) translateX(125%);\n        }\n      }\n    </style>\n\n    <div id=\"progressContainer\">\n      <div id=\"secondaryProgress\" hidden$=\"[[_hideSecondaryProgress(secondaryRatio)]]\"></div>\n      <div id=\"primaryProgress\"></div>\n    </div>\n"],["\n    <style>\n      :host {\n        display: block;\n        width: 200px;\n        position: relative;\n        overflow: hidden;\n      }\n\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      #progressContainer {\n        @apply --paper-progress-container;\n        position: relative;\n      }\n\n      #progressContainer,\n      /* the stripe for the indeterminate animation*/\n      .indeterminate::after {\n        height: var(--paper-progress-height, 4px);\n      }\n\n      #primaryProgress,\n      #secondaryProgress,\n      .indeterminate::after {\n        @apply --layout-fit;\n      }\n\n      #progressContainer,\n      .indeterminate::after {\n        background: var(--paper-progress-container-color, var(--google-grey-300));\n      }\n\n      :host(.transiting) #primaryProgress,\n      :host(.transiting) #secondaryProgress {\n        -webkit-transition-property: -webkit-transform;\n        transition-property: transform;\n\n        /* Duration */\n        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);\n        transition-duration: var(--paper-progress-transition-duration, 0.08s);\n\n        /* Timing function */\n        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n        transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n\n        /* Delay */\n        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);\n        transition-delay: var(--paper-progress-transition-delay, 0s);\n      }\n\n      #primaryProgress,\n      #secondaryProgress {\n        @apply --layout-fit;\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n        -webkit-transform: scaleX(0);\n        transform: scaleX(0);\n        will-change: transform;\n      }\n\n      #primaryProgress {\n        background: var(--paper-progress-active-color, var(--google-green-500));\n      }\n\n      #secondaryProgress {\n        background: var(--paper-progress-secondary-color, var(--google-green-100));\n      }\n\n      :host([disabled]) #primaryProgress {\n        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));\n      }\n\n      :host([disabled]) #secondaryProgress {\n        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate {\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate::after {\n        content: \"\";\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n\n        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      @-webkit-keyframes indeterminate-bar {\n        0% {\n          -webkit-transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          -webkit-transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          -webkit-transform: scaleX(1) translateX(0%);\n          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          -webkit-transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @-webkit-keyframes indeterminate-splitter {\n        0% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n      }\n\n      @keyframes indeterminate-bar {\n        0% {\n          transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          transform: scaleX(1) translateX(0%);\n          animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @keyframes indeterminate-splitter {\n        0% {\n          transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          transform: scaleX(.75) translateX(-125%);\n          animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          transform: scaleX(.75) translateX(125%);\n        }\n      }\n    </style>\n\n    <div id=\"progressContainer\">\n      <div id=\"secondaryProgress\" hidden\\$=\"[[_hideSecondaryProgress(secondaryRatio)]]\"></div>\n      <div id=\"primaryProgress\"></div>\n    </div>\n"]);_templateObject7_8c4272f00a1811eb9426c94f859aee76=function _templateObject7_8c4272f00a1811eb9426c94f859aee76(){return data};return data}function _templateObject6_8c4272f00a1811eb9426c94f859aee76(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Material Design color palette for Google products */\n\n      --google-red-100: #f4c7c3;\n      --google-red-300: #e67c73;\n      --google-red-500: #db4437;\n      --google-red-700: #c53929;\n\n      --google-blue-100: #c6dafc;\n      --google-blue-300: #7baaf7;\n      --google-blue-500: #4285f4;\n      --google-blue-700: #3367d6;\n\n      --google-green-100: #b7e1cd;\n      --google-green-300: #57bb8a;\n      --google-green-500: #0f9d58;\n      --google-green-700: #0b8043;\n\n      --google-yellow-100: #fce8b2;\n      --google-yellow-300: #f7cb4d;\n      --google-yellow-500: #f4b400;\n      --google-yellow-700: #f09300;\n\n      --google-grey-100: #f5f5f5;\n      --google-grey-300: #e0e0e0;\n      --google-grey-500: #9e9e9e;\n      --google-grey-700: #616161;\n\n      /* Material Design color palette from online spec document */\n\n      --paper-red-50: #ffebee;\n      --paper-red-100: #ffcdd2;\n      --paper-red-200: #ef9a9a;\n      --paper-red-300: #e57373;\n      --paper-red-400: #ef5350;\n      --paper-red-500: #f44336;\n      --paper-red-600: #e53935;\n      --paper-red-700: #d32f2f;\n      --paper-red-800: #c62828;\n      --paper-red-900: #b71c1c;\n      --paper-red-a100: #ff8a80;\n      --paper-red-a200: #ff5252;\n      --paper-red-a400: #ff1744;\n      --paper-red-a700: #d50000;\n\n      --paper-pink-50: #fce4ec;\n      --paper-pink-100: #f8bbd0;\n      --paper-pink-200: #f48fb1;\n      --paper-pink-300: #f06292;\n      --paper-pink-400: #ec407a;\n      --paper-pink-500: #e91e63;\n      --paper-pink-600: #d81b60;\n      --paper-pink-700: #c2185b;\n      --paper-pink-800: #ad1457;\n      --paper-pink-900: #880e4f;\n      --paper-pink-a100: #ff80ab;\n      --paper-pink-a200: #ff4081;\n      --paper-pink-a400: #f50057;\n      --paper-pink-a700: #c51162;\n\n      --paper-purple-50: #f3e5f5;\n      --paper-purple-100: #e1bee7;\n      --paper-purple-200: #ce93d8;\n      --paper-purple-300: #ba68c8;\n      --paper-purple-400: #ab47bc;\n      --paper-purple-500: #9c27b0;\n      --paper-purple-600: #8e24aa;\n      --paper-purple-700: #7b1fa2;\n      --paper-purple-800: #6a1b9a;\n      --paper-purple-900: #4a148c;\n      --paper-purple-a100: #ea80fc;\n      --paper-purple-a200: #e040fb;\n      --paper-purple-a400: #d500f9;\n      --paper-purple-a700: #aa00ff;\n\n      --paper-deep-purple-50: #ede7f6;\n      --paper-deep-purple-100: #d1c4e9;\n      --paper-deep-purple-200: #b39ddb;\n      --paper-deep-purple-300: #9575cd;\n      --paper-deep-purple-400: #7e57c2;\n      --paper-deep-purple-500: #673ab7;\n      --paper-deep-purple-600: #5e35b1;\n      --paper-deep-purple-700: #512da8;\n      --paper-deep-purple-800: #4527a0;\n      --paper-deep-purple-900: #311b92;\n      --paper-deep-purple-a100: #b388ff;\n      --paper-deep-purple-a200: #7c4dff;\n      --paper-deep-purple-a400: #651fff;\n      --paper-deep-purple-a700: #6200ea;\n\n      --paper-indigo-50: #e8eaf6;\n      --paper-indigo-100: #c5cae9;\n      --paper-indigo-200: #9fa8da;\n      --paper-indigo-300: #7986cb;\n      --paper-indigo-400: #5c6bc0;\n      --paper-indigo-500: #3f51b5;\n      --paper-indigo-600: #3949ab;\n      --paper-indigo-700: #303f9f;\n      --paper-indigo-800: #283593;\n      --paper-indigo-900: #1a237e;\n      --paper-indigo-a100: #8c9eff;\n      --paper-indigo-a200: #536dfe;\n      --paper-indigo-a400: #3d5afe;\n      --paper-indigo-a700: #304ffe;\n\n      --paper-blue-50: #e3f2fd;\n      --paper-blue-100: #bbdefb;\n      --paper-blue-200: #90caf9;\n      --paper-blue-300: #64b5f6;\n      --paper-blue-400: #42a5f5;\n      --paper-blue-500: #2196f3;\n      --paper-blue-600: #1e88e5;\n      --paper-blue-700: #1976d2;\n      --paper-blue-800: #1565c0;\n      --paper-blue-900: #0d47a1;\n      --paper-blue-a100: #82b1ff;\n      --paper-blue-a200: #448aff;\n      --paper-blue-a400: #2979ff;\n      --paper-blue-a700: #2962ff;\n\n      --paper-light-blue-50: #e1f5fe;\n      --paper-light-blue-100: #b3e5fc;\n      --paper-light-blue-200: #81d4fa;\n      --paper-light-blue-300: #4fc3f7;\n      --paper-light-blue-400: #29b6f6;\n      --paper-light-blue-500: #03a9f4;\n      --paper-light-blue-600: #039be5;\n      --paper-light-blue-700: #0288d1;\n      --paper-light-blue-800: #0277bd;\n      --paper-light-blue-900: #01579b;\n      --paper-light-blue-a100: #80d8ff;\n      --paper-light-blue-a200: #40c4ff;\n      --paper-light-blue-a400: #00b0ff;\n      --paper-light-blue-a700: #0091ea;\n\n      --paper-cyan-50: #e0f7fa;\n      --paper-cyan-100: #b2ebf2;\n      --paper-cyan-200: #80deea;\n      --paper-cyan-300: #4dd0e1;\n      --paper-cyan-400: #26c6da;\n      --paper-cyan-500: #00bcd4;\n      --paper-cyan-600: #00acc1;\n      --paper-cyan-700: #0097a7;\n      --paper-cyan-800: #00838f;\n      --paper-cyan-900: #006064;\n      --paper-cyan-a100: #84ffff;\n      --paper-cyan-a200: #18ffff;\n      --paper-cyan-a400: #00e5ff;\n      --paper-cyan-a700: #00b8d4;\n\n      --paper-teal-50: #e0f2f1;\n      --paper-teal-100: #b2dfdb;\n      --paper-teal-200: #80cbc4;\n      --paper-teal-300: #4db6ac;\n      --paper-teal-400: #26a69a;\n      --paper-teal-500: #009688;\n      --paper-teal-600: #00897b;\n      --paper-teal-700: #00796b;\n      --paper-teal-800: #00695c;\n      --paper-teal-900: #004d40;\n      --paper-teal-a100: #a7ffeb;\n      --paper-teal-a200: #64ffda;\n      --paper-teal-a400: #1de9b6;\n      --paper-teal-a700: #00bfa5;\n\n      --paper-green-50: #e8f5e9;\n      --paper-green-100: #c8e6c9;\n      --paper-green-200: #a5d6a7;\n      --paper-green-300: #81c784;\n      --paper-green-400: #66bb6a;\n      --paper-green-500: #4caf50;\n      --paper-green-600: #43a047;\n      --paper-green-700: #388e3c;\n      --paper-green-800: #2e7d32;\n      --paper-green-900: #1b5e20;\n      --paper-green-a100: #b9f6ca;\n      --paper-green-a200: #69f0ae;\n      --paper-green-a400: #00e676;\n      --paper-green-a700: #00c853;\n\n      --paper-light-green-50: #f1f8e9;\n      --paper-light-green-100: #dcedc8;\n      --paper-light-green-200: #c5e1a5;\n      --paper-light-green-300: #aed581;\n      --paper-light-green-400: #9ccc65;\n      --paper-light-green-500: #8bc34a;\n      --paper-light-green-600: #7cb342;\n      --paper-light-green-700: #689f38;\n      --paper-light-green-800: #558b2f;\n      --paper-light-green-900: #33691e;\n      --paper-light-green-a100: #ccff90;\n      --paper-light-green-a200: #b2ff59;\n      --paper-light-green-a400: #76ff03;\n      --paper-light-green-a700: #64dd17;\n\n      --paper-lime-50: #f9fbe7;\n      --paper-lime-100: #f0f4c3;\n      --paper-lime-200: #e6ee9c;\n      --paper-lime-300: #dce775;\n      --paper-lime-400: #d4e157;\n      --paper-lime-500: #cddc39;\n      --paper-lime-600: #c0ca33;\n      --paper-lime-700: #afb42b;\n      --paper-lime-800: #9e9d24;\n      --paper-lime-900: #827717;\n      --paper-lime-a100: #f4ff81;\n      --paper-lime-a200: #eeff41;\n      --paper-lime-a400: #c6ff00;\n      --paper-lime-a700: #aeea00;\n\n      --paper-yellow-50: #fffde7;\n      --paper-yellow-100: #fff9c4;\n      --paper-yellow-200: #fff59d;\n      --paper-yellow-300: #fff176;\n      --paper-yellow-400: #ffee58;\n      --paper-yellow-500: #ffeb3b;\n      --paper-yellow-600: #fdd835;\n      --paper-yellow-700: #fbc02d;\n      --paper-yellow-800: #f9a825;\n      --paper-yellow-900: #f57f17;\n      --paper-yellow-a100: #ffff8d;\n      --paper-yellow-a200: #ffff00;\n      --paper-yellow-a400: #ffea00;\n      --paper-yellow-a700: #ffd600;\n\n      --paper-amber-50: #fff8e1;\n      --paper-amber-100: #ffecb3;\n      --paper-amber-200: #ffe082;\n      --paper-amber-300: #ffd54f;\n      --paper-amber-400: #ffca28;\n      --paper-amber-500: #ffc107;\n      --paper-amber-600: #ffb300;\n      --paper-amber-700: #ffa000;\n      --paper-amber-800: #ff8f00;\n      --paper-amber-900: #ff6f00;\n      --paper-amber-a100: #ffe57f;\n      --paper-amber-a200: #ffd740;\n      --paper-amber-a400: #ffc400;\n      --paper-amber-a700: #ffab00;\n\n      --paper-orange-50: #fff3e0;\n      --paper-orange-100: #ffe0b2;\n      --paper-orange-200: #ffcc80;\n      --paper-orange-300: #ffb74d;\n      --paper-orange-400: #ffa726;\n      --paper-orange-500: #ff9800;\n      --paper-orange-600: #fb8c00;\n      --paper-orange-700: #f57c00;\n      --paper-orange-800: #ef6c00;\n      --paper-orange-900: #e65100;\n      --paper-orange-a100: #ffd180;\n      --paper-orange-a200: #ffab40;\n      --paper-orange-a400: #ff9100;\n      --paper-orange-a700: #ff6500;\n\n      --paper-deep-orange-50: #fbe9e7;\n      --paper-deep-orange-100: #ffccbc;\n      --paper-deep-orange-200: #ffab91;\n      --paper-deep-orange-300: #ff8a65;\n      --paper-deep-orange-400: #ff7043;\n      --paper-deep-orange-500: #ff5722;\n      --paper-deep-orange-600: #f4511e;\n      --paper-deep-orange-700: #e64a19;\n      --paper-deep-orange-800: #d84315;\n      --paper-deep-orange-900: #bf360c;\n      --paper-deep-orange-a100: #ff9e80;\n      --paper-deep-orange-a200: #ff6e40;\n      --paper-deep-orange-a400: #ff3d00;\n      --paper-deep-orange-a700: #dd2c00;\n\n      --paper-brown-50: #efebe9;\n      --paper-brown-100: #d7ccc8;\n      --paper-brown-200: #bcaaa4;\n      --paper-brown-300: #a1887f;\n      --paper-brown-400: #8d6e63;\n      --paper-brown-500: #795548;\n      --paper-brown-600: #6d4c41;\n      --paper-brown-700: #5d4037;\n      --paper-brown-800: #4e342e;\n      --paper-brown-900: #3e2723;\n\n      --paper-grey-50: #fafafa;\n      --paper-grey-100: #f5f5f5;\n      --paper-grey-200: #eeeeee;\n      --paper-grey-300: #e0e0e0;\n      --paper-grey-400: #bdbdbd;\n      --paper-grey-500: #9e9e9e;\n      --paper-grey-600: #757575;\n      --paper-grey-700: #616161;\n      --paper-grey-800: #424242;\n      --paper-grey-900: #212121;\n\n      --paper-blue-grey-50: #eceff1;\n      --paper-blue-grey-100: #cfd8dc;\n      --paper-blue-grey-200: #b0bec5;\n      --paper-blue-grey-300: #90a4ae;\n      --paper-blue-grey-400: #78909c;\n      --paper-blue-grey-500: #607d8b;\n      --paper-blue-grey-600: #546e7a;\n      --paper-blue-grey-700: #455a64;\n      --paper-blue-grey-800: #37474f;\n      --paper-blue-grey-900: #263238;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n    }\n\n  </style>\n</custom-style>\n"]);_templateObject6_8c4272f00a1811eb9426c94f859aee76=function _templateObject6_8c4272f00a1811eb9426c94f859aee76(){return data};return data}function _templateObject5_8c4272f00a1811eb9426c94f859aee76(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"]);_templateObject5_8c4272f00a1811eb9426c94f859aee76=function _templateObject5_8c4272f00a1811eb9426c94f859aee76(){return data};return data}function _templateObject4_8c4272f00a1811eb9426c94f859aee76(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    [hidden] {\n      display: none !important;\n    }\n  </style>\n</custom-style>\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      --layout: {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      };\n\n      --layout-inline: {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      };\n\n      --layout-horizontal: {\n        @apply --layout;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      };\n\n      --layout-horizontal-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      };\n\n      --layout-vertical: {\n        @apply --layout;\n\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      };\n\n      --layout-vertical-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      };\n\n      --layout-wrap: {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      };\n\n      --layout-wrap-reverse: {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      };\n\n      --layout-flex-auto: {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      };\n\n      --layout-flex-none: {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      };\n\n      --layout-flex: {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      };\n\n      --layout-flex-2: {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      };\n\n      --layout-flex-3: {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      };\n\n      --layout-flex-4: {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      };\n\n      --layout-flex-5: {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      };\n\n      --layout-flex-6: {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      };\n\n      --layout-flex-7: {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      };\n\n      --layout-flex-8: {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      };\n\n      --layout-flex-9: {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      };\n\n      --layout-flex-10: {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      };\n\n      --layout-flex-11: {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      };\n\n      --layout-flex-12: {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      };\n\n      /* alignment in cross axis */\n\n      --layout-start: {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      };\n\n      --layout-center: {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      };\n\n      --layout-end: {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      };\n\n      --layout-baseline: {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      };\n\n      /* alignment in main axis */\n\n      --layout-start-justified: {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      };\n\n      --layout-center-justified: {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      };\n\n      --layout-end-justified: {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      };\n\n      --layout-around-justified: {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      };\n\n      --layout-justified: {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      };\n\n      --layout-center-center: {\n        @apply --layout-center;\n        @apply --layout-center-justified;\n      };\n\n      /* self alignment */\n\n      --layout-self-start: {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      };\n\n      --layout-self-center: {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      };\n\n      --layout-self-end: {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      };\n\n      --layout-self-stretch: {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      };\n\n      --layout-self-baseline: {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      };\n\n      /* multi-line alignment in main axis */\n\n      --layout-start-aligned: {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      };\n\n      --layout-end-aligned: {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      };\n\n      --layout-center-aligned: {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      };\n\n      --layout-between-aligned: {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      };\n\n      --layout-around-aligned: {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      };\n\n      /*******************************\n                Other Layout\n      *******************************/\n\n      --layout-block: {\n        display: block;\n      };\n\n      --layout-invisible: {\n        visibility: hidden !important;\n      };\n\n      --layout-relative: {\n        position: relative;\n      };\n\n      --layout-fit: {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-scroll: {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      };\n\n      --layout-fullbleed: {\n        margin: 0;\n        height: 100vh;\n      };\n\n      /* fixed position */\n\n      --layout-fixed-top: {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n      };\n\n      --layout-fixed-right: {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n      };\n\n      --layout-fixed-bottom: {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-fixed-left: {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n    }\n  </style>\n</custom-style>"]);_templateObject4_8c4272f00a1811eb9426c94f859aee76=function _templateObject4_8c4272f00a1811eb9426c94f859aee76(){return data};return data}function _templateObject3_8c4272f00a1811eb9426c94f859aee76(){var data=babelHelpers.taggedTemplateLiteral(["","\n<style include=\"shared-styles\"></style>\n<div class=\"hello-element\">\n    <h1>\n        Hello [[userName]]!\n    </h1>\n    <p>\n        Thank You for using \n        <a href=\"https://github.com/mikoweb/polymer-boilerplate\" target=\"_blank\">Polymer Boilerplate</a>.\n    </p>\n</div>\n"]);_templateObject3_8c4272f00a1811eb9426c94f859aee76=function _templateObject3_8c4272f00a1811eb9426c94f859aee76(){return data};return data}function _templateObject2_8c4272f00a1811eb9426c94f859aee76(){var data=babelHelpers.taggedTemplateLiteral(["<style>\n.hello-element{background:var(--paper-indigo-100);padding:20px}\n\n</style>"]);_templateObject2_8c4272f00a1811eb9426c94f859aee76=function _templateObject2_8c4272f00a1811eb9426c94f859aee76(){return data};return data}function _templateObject_8c4272f00a1811eb9426c94f859aee76(){var data=babelHelpers.taggedTemplateLiteral(["<iron-iconset-svg name=\"icons\" size=\"24\">\n    <svg>\n        <defs>\n            <g id=\"menu\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></g>\n        </defs>\n    </svg>\n</iron-iconset-svg>"]);_templateObject_8c4272f00a1811eb9426c94f859aee76=function _templateObject_8c4272f00a1811eb9426c94f859aee76(){return data};return data}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){keys.push.apply(keys,Object.getOwnPropertySymbols(object))}if(enumerableOnly)keys=keys.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(source,!0).forEach(function(key){babelHelpers.defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}var nativeShadow=!(window.ShadyDOM&&window.ShadyDOM.inUse);_exports.nativeShadow=nativeShadow;var nativeCssVariables_;/**
                          * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
                          */function calcCssVariables(settings){if(settings&&settings.shimcssproperties){nativeCssVariables_=!1}else{// chrome 49 has semi-working css vars, check if box-shadow works
// safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
// However, shim css custom properties are only supported with ShadyDOM enabled,
// so fall back on native if we do not detect ShadyDOM
// Edge 15: custom properties used in ::before and ::after will also be used in the parent element
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
nativeCssVariables_=nativeShadow||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}}/** @type {string | undefined} */var cssBuild;_exports.cssBuild=cssBuild;if(window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0){_exports.cssBuild=cssBuild=window.ShadyCSS.cssBuild}/** @type {boolean} */var disableRuntime=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);_exports.disableRuntime=disableRuntime;if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0){nativeCssVariables_=window.ShadyCSS.nativeCss}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);// reset window variable to let ShadyCSS API take its place
window.ShadyCSS=void 0}else{calcCssVariables(window.WebComponents&&window.WebComponents.flags)}// Hack for type error under new type inference which doesn't like that
// nativeCssVariables is updated in a function and assigns the type
// `function(): ?` instead of `boolean`.
var nativeCssVariables=/** @type {boolean} */nativeCssVariables_;_exports.nativeCssVariables=nativeCssVariables;var styleSettings={nativeShadow:nativeShadow,get cssBuild(){return cssBuild},disableRuntime:disableRuntime,nativeCssVariables:nativeCssVariables};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
      Extremely simple css parser. Intended to be not more than what we need
      and definitely not necessarily correct =).
      */_exports.$styleSettings=styleSettings;"use strict";/** @unrestricted */var StyleNode=function StyleNode(){babelHelpers.classCallCheck(this,StyleNode);/** @type {number} */this.start=0;/** @type {number} */this.end=0;/** @type {StyleNode} */this.previous=null;/** @type {StyleNode} */this.parent=null;/** @type {Array<StyleNode>} */this.rules=null;/** @type {string} */this.parsedCssText="";/** @type {string} */this.cssText="";/** @type {boolean} */this.atRule=!1;/** @type {number} */this.type=0;/** @type {string} */this.keyframesName="";/** @type {string} */this.selector="";/** @type {string} */this.parsedSelector=""};/**
   * @param {string} text
   * @return {StyleNode}
   */_exports.StyleNode=StyleNode;function parse(text){text=clean(text);return parseCss(lex(text),text)}// remove stuff we don't care about that may hinder parsing
/**
 * @param {string} cssText
 * @return {string}
 */function clean(cssText){return cssText.replace(RX.comments,"").replace(RX.port,"")}// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {!StyleNode}
 */function lex(text){var root=new StyleNode;root.start=0;root.end=text.length;for(var n=root,i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n.rules){n.rules=[]}var _p=n,previous=_p.rules[_p.rules.length-1]||null;n=new StyleNode;n.start=i+1;n.parent=_p;n.previous=previous;_p.rules.push(n)}else if(text[i]===CLOSE_BRACE){n.end=i+1;n=n.parent||root}}return root}// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {!StyleNode}
 */function parseCss(node,text){var t=text.substring(node.start,node.end-1);node.parsedCssText=node.cssText=t.trim();if(node.parent){var ss=node.previous?node.previous.end:node.parent.start;t=text.substring(ss,node.start-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces," ");// TODO(sorvell): ad hoc; make selector include only after last ;
// helps with mixin syntax
t=t.substring(t.lastIndexOf(";")+1);var s=node.parsedSelector=node.selector=t.trim();node.atRule=0===s.indexOf(AT_START);// note, support a subset of rule types...
if(node.atRule){if(0===s.indexOf(MEDIA_START)){node.type=types.MEDIA_RULE}else if(s.match(RX.keyframesRule)){node.type=types.KEYFRAMES_RULE;node.keyframesName=node.selector.split(RX.multipleSpaces).pop()}}else{if(0===s.indexOf(VAR_START)){node.type=types.MIXIN_RULE}else{node.type=types.STYLE_RULE}}}var r$=node.rules;if(r$){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text)}}return node}/**
   * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
   * expanded form that doesn't require trailing space `\000033`
   * @param {string} s
   * @return {string}
   */function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){var code=arguments[1],repeat=6-code.length;while(repeat--){code="0"+code}return"\\"+code})}/**
   * stringify parsed css.
   * @param {StyleNode} node
   * @param {boolean=} preserveProperties
   * @param {string=} text
   * @return {string}
   */function stringify(node,preserveProperties){var text=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"",cssText="";if(node.cssText||node.rules){var r$=node.rules;if(r$&&!_hasMixinRules(r$)){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText)}}else{cssText=preserveProperties?node.cssText:removeCustomProps(node.cssText);cssText=cssText.trim();if(cssText){cssText="  "+cssText+"\n"}}}// emit rule if there is cssText
if(cssText){if(node.selector){text+=node.selector+" "+OPEN_BRACE+"\n"}text+=cssText;if(node.selector){text+=CLOSE_BRACE+"\n\n"}}return text}/**
   * @param {Array<StyleNode>} rules
   * @return {boolean}
   */function _hasMixinRules(rules){var r=rules[0];return!!r&&!!r.selector&&0===r.selector.indexOf(VAR_START)}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText)}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,"").replace(RX.mixinProp,"")}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,"").replace(RX.varApply,"")}/** @enum {number} */var types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3};_exports.types=types;var OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@",cssParse={StyleNode:StyleNode,parse:parse,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};_exports.$cssParse=cssParse;/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */var VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;_exports.VAR_ASSIGN=VAR_ASSIGN;var MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;_exports.MIXIN_MATCH=MIXIN_MATCH;var VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi;_exports.VAR_CONSUMED=VAR_CONSUMED;var ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/;_exports.ANIMATION_MATCH=ANIMATION_MATCH;var MEDIA_MATCH=/@media\s(.*)/;_exports.MEDIA_MATCH=MEDIA_MATCH;var IS_VAR=/^--/;_exports.IS_VAR=IS_VAR;var BRACKETED=/\{[^}]*\}/g;_exports.BRACKETED=BRACKETED;var HOST_PREFIX="(?:^|[^.#[:])";_exports.HOST_PREFIX=HOST_PREFIX;var HOST_SUFFIX="($|[.:[\\s>+~])";_exports.HOST_SUFFIX=HOST_SUFFIX;var commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$commonRegex=commonRegex;"use strict";/** @type {!Set<string>} */var styleTextSet=new Set,scopingAttribute="shady-unscoped";_exports.scopingAttribute=scopingAttribute;/**
                                                   * Add a specifically-marked style to the document directly, and only one copy of that style.
                                                   *
                                                   * @param {!HTMLStyleElement} style
                                                   * @return {undefined}
                                                   */function processUnscopedStyle(style){var text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);var newStyle=document.createElement("style");newStyle.setAttribute("shady-unscoped","");newStyle.textContent=text;document.head.appendChild(newStyle)}}/**
   * Check if a style is supposed to be unscoped
   * @param {!HTMLStyleElement} style
   * @return {boolean} true if the style has the unscoping attribute
   */function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute)}var unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$unscopedStyleHandler=unscopedStyleHandler;"use strict";function toCssText(rules,callback){if(!rules){return""}if("string"===typeof rules){rules=parse(rules)}if(callback){forEachRule(rules,callback)}return stringify(rules,nativeCssVariables)}/**
   * @param {HTMLStyleElement} style
   * @return {StyleNode}
   */function rulesForStyle(style){if(!style.__cssRules&&style.textContent){style.__cssRules=parse(style.textContent)}return style.__cssRules||null}// Tests if a rule is a keyframes selector, which looks almost exactly
// like a normal selector but is not (it has nothing to do with scoping
// for example).
/**
 * @param {StyleNode} rule
 * @return {boolean}
 */function isKeyframesSelector(rule){return!!rule.parent&&rule.parent.type===types.KEYFRAMES_RULE}/**
   * @param {StyleNode} node
   * @param {Function=} styleRuleCallback
   * @param {Function=} keyframesRuleCallback
   * @param {boolean=} onlyActiveRules
   */function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return}var skipRules=!1,type=node.type;if(onlyActiveRules){if(type===types.MEDIA_RULE){var matchMedia=node.selector.match(MEDIA_MATCH);if(matchMedia){// if rule is a non matching @media rule, skip subrules
if(!window.matchMedia(matchMedia[1]).matches){skipRules=!0}}}}if(type===types.STYLE_RULE){styleRuleCallback(node)}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node)}else if(type===types.MIXIN_RULE){skipRules=!0}var r$=node.rules;if(r$&&!skipRules){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules)}}}// add a string of cssText to the document.
/**
 * @param {string} cssText
 * @param {string} moniker
 * @param {Node} target
 * @param {Node} contextNode
 * @return {HTMLStyleElement}
 */function applyCss(cssText,moniker,target,contextNode){var style=createScopeStyle(cssText,moniker);applyStyle(style,target,contextNode);return style}/**
   * @param {string} cssText
   * @param {string} moniker
   * @return {!HTMLStyleElement}
   */function createScopeStyle(cssText,moniker){var style=/** @type {HTMLStyleElement} */document.createElement("style");if(moniker){style.setAttribute("scope",moniker)}style.textContent=cssText;return style}/**
   * Track the position of the last added style for placing placeholders
   * @type {Node}
   */var lastHeadApplyNode=null;// insert a comment node as a styling position placeholder.
/**
 * @param {string} moniker
 * @return {!Comment}
 */function applyStylePlaceHolder(moniker){var placeHolder=document.createComment(" Shady DOM styles for "+moniker+" "),after=lastHeadApplyNode?lastHeadApplyNode.nextSibling:null,scope=document.head;scope.insertBefore(placeHolder,after||scope.firstChild);lastHeadApplyNode=placeHolder;return placeHolder}/**
   * @param {HTMLStyleElement} style
   * @param {?Node} target
   * @param {?Node} contextNode
   */function applyStyle(style,target,contextNode){target=target||document.head;var after=contextNode&&contextNode.nextSibling||target.firstChild;target.insertBefore(style,after);if(!lastHeadApplyNode){lastHeadApplyNode=style}else{// only update lastHeadApplyNode if the new style is inserted after the old lastHeadApplyNode
var position=style.compareDocumentPosition(lastHeadApplyNode);if(position===Node.DOCUMENT_POSITION_PRECEDING){lastHeadApplyNode=style}}}/**
   * @param {string} buildType
   * @return {boolean}
   */function isTargetedBuild(buildType){return nativeShadow?"shadow"===buildType:"shady"===buildType}/**
   * Walk from text[start] matching parens and
   * returns position of the outer end paren
   * @param {string} text
   * @param {number} start
   * @return {number}
   */function findMatchingParen(text,start){for(var level=0,i=start,l=text.length;i<l;i++){if("("===text[i]){level++}else if(")"===text[i]){if(0===--level){return i}}}return-1}/**
   * @param {string} str
   * @param {function(string, string, string, string)} callback
   */function processVariableAndFallback(str,callback){// find 'var('
var start=str.indexOf("var(");if(-1===start){// no var?, everything is prefix
return callback(str,"","","")}//${prefix}var(${inner})${suffix}
var end=findMatchingParen(str,start+3),inner=str.substring(start+4,end),prefix=str.substring(0,start),suffix=processVariableAndFallback(str.substring(end+1),callback),comma=inner.indexOf(",");// value and fallback args should be trimmed to match in property lookup
if(-1===comma){// variable, no fallback
return callback(prefix,inner.trim(),"",suffix)}// var(${value},${fallback})
var value=inner.substring(0,comma).trim(),fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix)}/**
   * @param {Element} element
   * @param {string} value
   */function setElementClassRaw(element,value){// use native setAttribute provided by ShadyDOM when setAttribute is patched
if(nativeShadow){element.setAttribute("class",value)}else{window.ShadyDOM.nativeMethods.setAttribute.call(element,"class",value)}}/**
   * @type {function(*):*}
   */var wrap=window.ShadyDOM&&window.ShadyDOM.wrap||function(node){return node};/**
                                                                                         * @param {Element | {is: string, extends: string}} element
                                                                                         * @return {{is: string, typeExtension: string}}
                                                                                         */_exports.wrap$1=wrap;function getIsExtends(element){var localName=element.localName,is="",typeExtension="";/*
                          NOTE: technically, this can be wrong for certain svg elements
                          with `-` in the name like `<font-face>`
                          */if(localName){if(-1<localName.indexOf("-")){is=localName}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute("is")||""}}else{is=/** @type {?} */element.is;typeExtension=/** @type {?} */element.extends}return{is:is,typeExtension:typeExtension}}/**
   * @param {Element|DocumentFragment} element
   * @return {string}
   */function gatherStyleText(element){/** @type {!Array<string>} */for(var styleTextParts=[],styles=/** @type {!NodeList<!HTMLStyleElement>} */element.querySelectorAll("style"),i=0,_style;i<styles.length;i++){_style=styles[i];if(isUnscopedStyle(_style)){if(!nativeShadow){processUnscopedStyle(_style);_style.parentNode.removeChild(_style)}}else{styleTextParts.push(_style.textContent);_style.parentNode.removeChild(_style)}}return styleTextParts.join("").trim()}/**
   * Split a selector separated by commas into an array in a smart way
   * @param {string} selector
   * @return {!Array<string>}
   */function splitSelectorList(selector){for(var parts=[],part="",i=0;0<=i&&i<selector.length;i++){// A selector with parentheses will be one complete part
if("("===selector[i]){// find the matching paren
var end=findMatchingParen(selector,i);// push the paren block into the part
part+=selector.slice(i,end+1);// move the index to after the paren block
i=end}else if(","===selector[i]){parts.push(part);part=""}else{part+=selector[i]}}// catch any pieces after the last comma
if(part){parts.push(part)}return parts}var CSS_BUILD_ATTR="css-build";/**
                                     * Return the polymer-css-build "build type" applied to this element
                                     *
                                     * @param {!HTMLElement} element
                                     * @return {string} Can be "", "shady", or "shadow"
                                     */function getCssBuild(element){if(cssBuild!==void 0){return(/** @type {string} */cssBuild)}if(element.__cssBuild===void 0){// try attribute first, as it is the common case
var attrValue=element.getAttribute(CSS_BUILD_ATTR);if(attrValue){element.__cssBuild=attrValue}else{var buildComment=getBuildComment(element);if(""!==buildComment){// remove build comment so it is not needlessly copied into every element instance
removeBuildComment(element)}element.__cssBuild=buildComment}}return element.__cssBuild||""}/**
   * Check if the given element, either a <template> or <style>, has been processed
   * by polymer-css-build.
   *
   * If so, then we can make a number of optimizations:
   * - polymer-css-build will decompose mixins into individual CSS Custom Properties,
   * so the ApplyShim can be skipped entirely.
   * - Under native ShadowDOM, the style text can just be copied into each instance
   * without modification
   * - If the build is "shady" and ShadyDOM is in use, the styling does not need
   * scoping beyond the shimming of CSS Custom Properties
   *
   * @param {!HTMLElement} element
   * @return {boolean}
   */function elementHasBuiltCss(element){return""!==getCssBuild(element)}/**
   * For templates made with tagged template literals, polymer-css-build will
   * insert a comment of the form `<!--css-build:shadow-->`
   *
   * @param {!HTMLElement} element
   * @return {string}
   */function getBuildComment(element){var buildComment="template"===element.localName?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;if(babelHelpers.instanceof(buildComment,Comment)){var commentParts=buildComment.textContent.trim().split(":");if(commentParts[0]===CSS_BUILD_ATTR){return commentParts[1]}}return""}/**
   * Check if the css build status is optimal, and do no unneeded work.
   *
   * @param {string=} cssBuild CSS build status
   * @return {boolean} css build is optimal or not
   */function isOptimalCssBuild(){var cssBuild=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"";// CSS custom property shim always requires work
if(""===cssBuild||!nativeCssVariables){return!1}return nativeShadow?"shadow"===cssBuild:"shady"===cssBuild}/**
   * @param {!HTMLElement} element
   */function removeBuildComment(element){var buildComment="template"===element.localName?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;buildComment.parentNode.removeChild(buildComment)}var styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,findMatchingParen:findMatchingParen,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,wrap:wrap,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText,splitSelectorList:splitSelectorList,getCssBuild:getCssBuild,elementHasBuiltCss:elementHasBuiltCss,getBuildComment:getBuildComment,isOptimalCssBuild:isOptimalCssBuild};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$styleUtil=styleUtil;"use strict";function updateNativeProperties(element,properties){// remove previous properties
for(var _p2 in properties){// NOTE: for bc with shim, don't apply null values.
if(null===_p2){element.style.removeProperty(_p2)}else{element.style.setProperty(_p2,properties[_p2])}}}/**
   * @param {Element} element
   * @param {string} property
   * @return {string}
   */function _getComputedStyleValue(element,property){/**
   * @const {string}
   */var value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return""}else{return value.trim()}}/**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */function _detectMixin(cssText){var has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);// reset state of the regexes
MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has}var commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:_getComputedStyleValue,detectMixin:_detectMixin};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
       * The apply shim simulates the behavior of `@apply` proposed at
       * https://tabatkins.github.io/specs/css-apply-rule/.
       * The approach is to convert a property like this:
       *
       *    --foo: {color: red; background: blue;}
       *
       * to this:
       *
       *    --foo_-_color: red;
       *    --foo_-_background: blue;
       *
       * Then where `@apply --foo` is used, that is converted to:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background);
       *
       * This approach generally works but there are some issues and limitations.
       * Consider, for example, that somewhere *between* where `--foo` is set and used,
       * another element sets it to:
       *
       *    --foo: { border: 2px solid red; }
       *
       * We must now ensure that the color and background from the previous setting
       * do not apply. This is accomplished by changing the property set to this:
       *
       *    --foo_-_border: 2px solid red;
       *    --foo_-_color: initial;
       *    --foo_-_background: initial;
       *
       * This works but introduces one new issue.
       * Consider this setup at the point where the `@apply` is used:
       *
       *    background: orange;
       *    `@apply` --foo;
       *
       * In this case the background will be unset (initial) rather than the desired
       * `orange`. We address this by altering the property set to use a fallback
       * value like this:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background, orange);
       *    border: var(--foo_-_border);
       *
       * Note that the default is retained in the property set and the `background` is
       * the desired `orange`. This leads us to a limitation.
       *
       * Limitation 1:
      
       * Only properties in the rule where the `@apply`
       * is used are considered as default values.
       * If another rule matches the element and sets `background` with
       * less specificity than the rule in which `@apply` appears,
       * the `background` will not be set.
       *
       * Limitation 2:
       *
       * When using Polymer's `updateStyles` api, new properties may not be set for
       * `@apply` properties.
      
      */_exports.$commonUtils=commonUtils;"use strict";var APPLY_NAME_CLEAN=/;\s*/m,INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/,IMPORTANT=/\s*!important/,MIXIN_VAR_SEP="_-_",PropertyEntry,DependantsEntry,MixinMapEntry,MixinMap=/*#__PURE__*/function(){function MixinMap(){babelHelpers.classCallCheck(this,MixinMap);/** @type {!Object<string, !MixinMapEntry>} */this._map={}}/**
     * @param {string} name
     * @param {!PropertyEntry} props
     */babelHelpers.createClass(MixinMap,[{key:"set",value:function set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}}}/**
     * @param {string} name
     * @return {MixinMapEntry}
     */},{key:"get",value:function get(name){name=name.trim();return this._map[name]||null}}]);return MixinMap}(),invalidCallback=null,ApplyShim=/*#__PURE__*/function(){function ApplyShim(){babelHelpers.classCallCheck(this,ApplyShim);/** @type {?string} */this._currentElement=null;/** @type {HTMLMetaElement} */this._measureElement=null;this._map=new MixinMap}/**
     * return true if `cssText` contains a mixin definition or consumption
     * @param {string} cssText
     * @return {boolean}
     */babelHelpers.createClass(ApplyShim,[{key:"detectMixin",value:function detectMixin(cssText){return _detectMixin(cssText)}/**
     * Gather styles into one style for easier processing
     * @param {!HTMLTemplateElement} template
     * @return {HTMLStyleElement}
     */},{key:"gatherStyles",value:function gatherStyles(template){var styleText=gatherStyleText(template.content);if(styleText){var _style2=/** @type {!HTMLStyleElement} */document.createElement("style");_style2.textContent=styleText;template.content.insertBefore(_style2,template.content.firstChild);return _style2}return null}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformTemplate",value:function transformTemplate(template,elementName){if(template._gatheredStyle===void 0){template._gatheredStyle=this.gatherStyles(template)}/** @type {HTMLStyleElement} */var style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null}/**
     * @param {!HTMLStyleElement} style
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformStyle",value:function transformStyle(style){var elementName=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"",ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast}/**
     * @param {!HTMLStyleElement} style
     * @return {StyleNode}
     */},{key:"transformCustomStyle",value:function transformCustomStyle(style){var _this=this,ast=rulesForStyle(style);forEachRule(ast,function(rule){if(":root"===rule.selector){rule.selector="html"}_this.transformRule(rule)});style.textContent=toCssText(ast);return ast}/**
     * @param {StyleNode} rules
     * @param {string} elementName
     */},{key:"transformRules",value:function transformRules(rules,elementName){var _this2=this;this._currentElement=elementName;forEachRule(rules,function(r){_this2.transformRule(r)});this._currentElement=null}/**
     * @param {!StyleNode} rule
     */},{key:"transformRule",value:function transformRule(rule){rule.cssText=this.transformCssText(rule.parsedCssText,rule);// :root was only used for variable assignment in property shim,
// but generates invalid selectors with real properties.
// replace with `:host > *`, which serves the same effect
if(":root"===rule.selector){rule.selector=":host > *"}}/**
     * @param {string} cssText
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"transformCssText",value:function transformCssText(cssText,rule){var _this3=this;// produce variables
cssText=cssText.replace(VAR_ASSIGN,function(matchText,propertyName,valueProperty,valueMixin){return _this3._produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule)});// consume mixins
return this._consumeCssProperties(cssText,rule)}/**
     * @param {string} property
     * @return {string}
     */},{key:"_getInitialValueForProperty",value:function _getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=/** @type {HTMLMetaElement} */document.createElement("meta");this._measureElement.setAttribute("apply-shim-measure","");this._measureElement.style.all="initial";document.head.appendChild(this._measureElement)}return window.getComputedStyle(this._measureElement).getPropertyValue(property)}/**
     * Walk over all rules before this rule to find fallbacks for mixins
     *
     * @param {!StyleNode} startRule
     * @return {!Object}
     */},{key:"_fallbacksFromPreviousRules",value:function _fallbacksFromPreviousRules(startRule){var _this4=this,topRule=startRule;while(topRule.parent){topRule=topRule.parent}var fallbacks={},seenStartRule=!1;forEachRule(topRule,function(r){// stop when we hit the input rule
seenStartRule=seenStartRule||r===startRule;if(seenStartRule){return}// NOTE: Only matching selectors are "safe" for this fallback processing
// It would be prohibitive to run `matchesSelector()` on each selector,
// so we cheat and only check if the same selector string is used, which
// guarantees things like specificity matching
if(r.selector===startRule.selector){Object.assign(fallbacks,_this4._cssTextToMap(r.parsedCssText))}});return fallbacks}/**
     * replace mixin consumption with variable consumption
     * @param {string} text
     * @param {!StyleNode=} rule
     * @return {string}
     */},{key:"_consumeCssProperties",value:function _consumeCssProperties(text,rule){/** @type {Array} */var m=null;// loop over text until all mixins with defintions have been applied
while(m=MIXIN_MATCH.exec(text)){var matchText=m[0],mixinName=m[1],idx=m.index,applyPos=idx+matchText.indexOf("@apply"),afterApplyPos=idx+matchText.length,textBeforeApply=text.slice(0,applyPos),textAfterApply=text.slice(afterApplyPos),defaults=rule?this._fallbacksFromPreviousRules(rule):{};Object.assign(defaults,this._cssTextToMap(textBeforeApply));var replacement=this._atApplyToCssProperties(mixinName,defaults);// use regex match position to replace mixin, keep linear processing time
text="".concat(textBeforeApply).concat(replacement).concat(textAfterApply);// move regex search to _after_ replacement
MIXIN_MATCH.lastIndex=idx+replacement.length}return text}/**
     * produce variable consumption at the site of mixin consumption
     * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
     * Example:
     *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
     *
     * @param {string} mixinName
     * @param {Object} fallbacks
     * @return {string}
     */},{key:"_atApplyToCssProperties",value:function _atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,"");var vars=[],mixinEntry=this._map.get(mixinName);// if we depend on a mixin before it is created
// make a sentinel entry in the map to add this element as a dependency for when it is defined.
if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName)}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=!0}var _p3,parts,f,properties=mixinEntry.properties;for(_p3 in properties){f=fallbacks&&fallbacks[_p3];parts=[_p3,": var(",mixinName,MIXIN_VAR_SEP,_p3];if(f){parts.push(",",f.replace(IMPORTANT,""))}parts.push(")");if(IMPORTANT.test(properties[_p3])){parts.push(" !important")}vars.push(parts.join(""))}}return vars.join("; ")}/**
     * @param {string} property
     * @param {string} value
     * @return {string}
     */},{key:"_replaceInitialOrInherit",value:function _replaceInitialOrInherit(property,value){var match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){// initial
// replace `initial` with the concrete initial value for this property
value=this._getInitialValueForProperty(property)}else{// inherit
// with this purposfully illegal value, the variable will be invalid at
// compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
// and for inheriting values, will behave similarly
// we cannot support the same behavior for non inheriting values like 'border'
value="apply-shim-inherit"}}return value}/**
     * "parse" a mixin definition into a map of properties and values
     * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
     * @param {string} text
     * @param {boolean=} replaceInitialOrInherit
     * @return {!Object<string, string>}
     */},{key:"_cssTextToMap",value:function _cssTextToMap(text){for(var replaceInitialOrInherit=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,props=text.split(";"),property,value,out={},i=0,_p4,sp;i<props.length;i++){_p4=props[i];if(_p4){sp=_p4.split(":");// ignore lines that aren't definitions like @media
if(1<sp.length){property=sp[0].trim();// some properties may have ':' in the value, like data urls
value=sp.slice(1).join(":");if(replaceInitialOrInherit){value=this._replaceInitialOrInherit(property,value)}out[property]=value}}}return out}/**
     * @param {MixinMapEntry} mixinEntry
     */},{key:"_invalidateMixinEntry",value:function _invalidateMixinEntry(mixinEntry){if(!invalidCallback){return}for(var elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName)}}}/**
     * @param {string} matchText
     * @param {string} propertyName
     * @param {?string} valueProperty
     * @param {?string} valueMixin
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"_produceCssProperties",value:function _produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule){var _this5=this;// handle case where property value is a mixin
if(valueProperty){// form: --mixin2: var(--mixin1), where --mixin1 is in the map
processVariableAndFallback(valueProperty,function(prefix,value){if(value&&_this5._map.get(value)){valueMixin="@apply ".concat(value,";")}})}if(!valueMixin){return matchText}var mixinAsProperties=this._consumeCssProperties(""+valueMixin,rule),prefix=matchText.slice(0,matchText.indexOf("--")),mixinValues=this._cssTextToMap(mixinAsProperties,!0),combinedProps=mixinValues,mixinEntry=this._map.get(propertyName),oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){// NOTE: since we use mixin, the map of properties is updated here
// and this is what we want.
combinedProps=Object.assign(Object.create(oldProps),mixinValues)}else{this._map.set(propertyName,combinedProps)}var out=[],p,v,needToInvalidate=!1;for(p in combinedProps){v=mixinValues[p];// if property not defined by current mixin, set initial
if(v===void 0){v="initial"}if(oldProps&&!(p in oldProps)){needToInvalidate=!0}out.push("".concat(propertyName).concat(MIXIN_VAR_SEP).concat(p,": ").concat(v))}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry)}if(mixinEntry){mixinEntry.properties=combinedProps}// because the mixinMap is global, the mixin might conflict with
// a different scope's simple variable definition:
// Example:
// some style somewhere:
// --mixin1:{ ... }
// --mixin2: var(--mixin1);
// some other element:
// --mixin1: 10px solid red;
// --foo: var(--mixin1);
// In this case, we leave the original variable definition in place.
if(valueProperty){prefix="".concat(matchText,";").concat(prefix)}return"".concat(prefix).concat(out.join("; "),";")}}]);return ApplyShim}();_exports.$applyShimDefault=ApplyShim;/* exports */ /* eslint-disable no-self-assign */ApplyShim.prototype.detectMixin=ApplyShim.prototype.detectMixin;ApplyShim.prototype.transformStyle=ApplyShim.prototype.transformStyle;ApplyShim.prototype.transformCustomStyle=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype.transformRules=ApplyShim.prototype.transformRules;ApplyShim.prototype.transformRule=ApplyShim.prototype.transformRule;ApplyShim.prototype.transformTemplate=ApplyShim.prototype.transformTemplate;ApplyShim.prototype._separator=MIXIN_VAR_SEP;/* eslint-enable no-self-assign */Object.defineProperty(ApplyShim.prototype,"invalidCallback",{/** @return {?function(string)} */get:function get(){return invalidCallback},/** @param {?function(string)} cb */set:function set(cb){invalidCallback=cb}});var applyShim={default:ApplyShim};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShim$1=applyShim;"use strict";/**
               * @const {!Object<string, !HTMLTemplateElement>}
               */var templateMap={};_exports.$templateMapDefault=templateMap;var templateMap$1={default:templateMap};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$templateMap=templateMap$1;"use strict";/*
               * Utilities for handling invalidating apply-shim mixins for a given template.
               *
               * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
               * The template
               */ /** @const {string} */var CURRENT_VERSION="_applyShimCurrentVersion",NEXT_VERSION="_applyShimNextVersion",VALIDATING_VERSION="_applyShimValidatingVersion",promise=Promise.resolve();/** @const {string} */ /**
                                    * @param {string} elementName
                                    */function invalidate(elementName){var template=templateMap[elementName];if(template){invalidateTemplate(template)}}/**
   * This function can be called multiple times to mark a template invalid
   * and signal that the style inside must be regenerated.
   *
   * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
   * During that cycle, call `templateIsValidating` to see if the template must
   * be revalidated
   * @param {HTMLTemplateElement} template
   */function invalidateTemplate(template){// default the current version to 0
template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;// ensure the "validating for" flag exists
template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;// increment the next version
template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValid(elementName){var template=templateMap[elementName];if(template){return templateIsValid(template)}return!0}/**
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION]}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValidating(elementName){var template=templateMap[elementName];if(template){return templateIsValidating(template)}return!1}/**
   * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
   * If false, the template must be validated.
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION]}/**
   * the template is marked as `validating` for one microtask so that all instances
   * found in the tree crawl of `applyStyle` will update themselves,
   * but the template will only be updated once.
   * @param {string} elementName
  */function startValidating(elementName){var template=templateMap[elementName];startValidatingTemplate(template)}/**
   * Begin an asynchronous invalidation cycle.
   * This should be called after every validation of a template
   *
   * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
   * @param {HTMLTemplateElement} template
   */function startValidatingTemplate(template){// remember that the current "next version" is the reason for this validation cycle
template[VALIDATING_VERSION]=template[NEXT_VERSION];// however, there only needs to be one async task to clear the counters
if(!template._validating){template._validating=!0;promise.then(function(){// sync the current version to let future invalidations cause a refresh cycle
template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=!1})}}/**
   * @return {boolean}
   */function elementsAreInvalid(){for(var elementName in templateMap){var _template=templateMap[elementName];if(!templateIsValid(_template)){return!0}}return!1}var applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShimUtils=applyShimUtils;"use strict";/** @type {Promise<void>} */var readyPromise=null,whenReady=window.HTMLImports&&window.HTMLImports.whenReady||null,resolveFn;/** @type {?function(?function())} */ /**
                * @param {?function()} callback
                */function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback)}else{if(!readyPromise){readyPromise=new Promise(function(resolve){resolveFn=resolve});if("complete"===document.readyState){resolveFn()}else{document.addEventListener("readystatechange",function(){if("complete"===document.readyState){resolveFn()}})}}readyPromise.then(function(){callback&&callback()})}})}var documentWait$1={default:documentWait};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$documentWait=documentWait$1;"use strict";var CustomStyleProvider;_exports.CustomStyleProvider=CustomStyleProvider;var SEEN_MARKER="__seenByShadyCSS",CACHED_STYLE="__shadyCSSCachedStyle",transformFn=null,validateFn=null,CustomStyleInterface=/*#__PURE__*/function(){function CustomStyleInterface(){babelHelpers.classCallCheck(this,CustomStyleInterface);/** @type {!Array<!CustomStyleProvider>} */this.customStyles=[];this.enqueued=!1;// NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;
documentWait(function(){if(window.ShadyCSS.flushCustomStyles){window.ShadyCSS.flushCustomStyles()}})}/**
     * Queue a validation for new custom styles to batch style recalculations
     */babelHelpers.createClass(CustomStyleInterface,[{key:"enqueueDocumentValidation",value:function enqueueDocumentValidation(){if(this.enqueued||!validateFn){return}this.enqueued=!0;documentWait(validateFn)}/**
     * @param {!HTMLStyleElement} style
     */},{key:"addCustomStyle",value:function addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=!0;this.customStyles.push(style);this.enqueueDocumentValidation()}}/**
     * @param {!CustomStyleProvider} customStyle
     * @return {HTMLStyleElement}
     */},{key:"getStyleForCustomStyle",value:function getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE]}var style;if(customStyle.getStyle){style=customStyle.getStyle()}else{style=customStyle}return style}/**
     * @return {!Array<!CustomStyleProvider>}
     */},{key:"processStyles",value:function processStyles(){for(var cs=this.customStyles,i=0,_customStyle;i<cs.length;i++){_customStyle=cs[i];if(_customStyle[CACHED_STYLE]){continue}var _style3=this.getStyleForCustomStyle(_customStyle);if(_style3){// HTMLImports polyfill may have cloned the style into the main document,
// which is referenced with __appliedElement.
var styleToTransform=/** @type {!HTMLStyleElement} */_style3.__appliedElement||_style3;if(transformFn){transformFn(styleToTransform)}_customStyle[CACHED_STYLE]=styleToTransform}}return cs}}]);return CustomStyleInterface}();_exports.$customStyleInterfaceDefault=CustomStyleInterface;/* eslint-disable no-self-assign */CustomStyleInterface.prototype.addCustomStyle=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype.getStyleForCustomStyle=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype.processStyles=CustomStyleInterface.prototype.processStyles;/* eslint-enable no-self-assign */Object.defineProperties(CustomStyleInterface.prototype,{transformCallback:{/** @return {?function(!HTMLStyleElement)} */get:function get(){return transformFn},/** @param {?function(!HTMLStyleElement)} fn */set:function set(fn){transformFn=fn}},validateCallback:{/** @return {?function()} */get:function get(){return validateFn},/**
     * @param {?function()} fn
     * @this {CustomStyleInterface}
     */set:function set(fn){var needsEnqueue=!1;if(!validateFn){needsEnqueue=!0}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation()}}}});/** @typedef {{
     * customStyles: !Array<!CustomStyleProvider>,
     * addCustomStyle: function(!CustomStyleProvider),
     * getStyleForCustomStyle: function(!CustomStyleProvider): HTMLStyleElement,
     * findStyles: function(),
     * transformCallback: ?function(!HTMLStyleElement),
     * validateCallback: ?function()
     * }}
     */var CustomStyleInterfaceInterface={};_exports.CustomStyleInterfaceInterface=CustomStyleInterfaceInterface;var customStyleInterface={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$customStyleInterface$1=customStyleInterface;"use strict";var applyShim$1=new ApplyShim,ApplyShimInterface=/*#__PURE__*/function(){function ApplyShimInterface(){babelHelpers.classCallCheck(this,ApplyShimInterface);/** @type {?CustomStyleInterfaceInterface} */this.customStyleInterface=null;applyShim$1.invalidCallback=invalidate}babelHelpers.createClass(ApplyShimInterface,[{key:"ensure",value:function ensure(){var _this6=this;if(this.customStyleInterface){return}if(window.ShadyCSS.CustomStyleInterface){this.customStyleInterface=/** @type {!CustomStyleInterfaceInterface} */window.ShadyCSS.CustomStyleInterface;this.customStyleInterface.transformCallback=function(style){applyShim$1.transformCustomStyle(style)};this.customStyleInterface.validateCallback=function(){requestAnimationFrame(function(){if(_this6.customStyleInterface.enqueued){_this6.flushCustomStyles()}})}}}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */},{key:"prepareTemplate",value:function prepareTemplate(template,elementName){this.ensure();if(elementHasBuiltCss(template)){return}templateMap[elementName]=template;var ast=applyShim$1.transformTemplate(template,elementName);// save original style ast to use for revalidating instances
template._styleAst=ast}},{key:"flushCustomStyles",value:function flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return}var styles=this.customStyleInterface.processStyles();if(!this.customStyleInterface.enqueued){return}for(var i=0;i<styles.length;i++){var cs=styles[i],_style4=this.customStyleInterface.getStyleForCustomStyle(cs);if(_style4){applyShim$1.transformCustomStyle(_style4)}}this.customStyleInterface.enqueued=!1}/**
     * @param {HTMLElement} element
     * @param {Object=} properties
     */},{key:"styleSubtree",value:function styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties)}if(element.shadowRoot){this.styleElement(element);for(var shadowChildren=/** @type {!ParentNode} */element.shadowRoot.children||element.shadowRoot.childNodes,i=0;i<shadowChildren.length;i++){this.styleSubtree(/** @type {HTMLElement} */shadowChildren[i])}}else{for(var children=element.children||element.childNodes,_i=0;_i<children.length;_i++){this.styleSubtree(/** @type {HTMLElement} */children[_i])}}}/**
     * @param {HTMLElement} element
     */},{key:"styleElement",value:function styleElement(element){this.ensure();var _getIsExtends=getIsExtends(element),is=_getIsExtends.is,template=templateMap[is];if(template&&elementHasBuiltCss(template)){return}if(template&&!templateIsValid(template)){// only revalidate template once
if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template)}// update this element instance
var _root=element.shadowRoot;if(_root){var _style5=/** @type {HTMLStyleElement} */_root.querySelector("style");if(_style5){// reuse the template's style ast, it has all the original css text
_style5.__cssRules=template._styleAst;_style5.textContent=toCssText(template._styleAst)}}}}/**
     * @param {Object=} properties
     */},{key:"styleDocument",value:function styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties)}}]);return ApplyShimInterface}();if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var applyShimInterface=new ApplyShimInterface,_CustomStyleInterface=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;/** @suppress {duplicate} */window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate:function prepareTemplate(template,elementName,elementExtends){// eslint-disable-line no-unused-vars
applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles:function prepareTemplateStyles(template,elementName,elementExtends){window.ShadyCSS.prepareTemplate(template,elementName,elementExtends)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom:function prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLElement} element
     * @param {Object=} properties
     */styleSubtree:function styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties)},/**
     * @param {!HTMLElement} element
     */styleElement:function styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element)},/**
     * @param {Object=} properties
     */styleDocument:function styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:function getComputedStyleValue(element,property){return _getComputedStyleValue(element,property)},flushCustomStyles:function flushCustomStyles(){applyShimInterface.flushCustomStyles()},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime};if(_CustomStyleInterface){window.ShadyCSS.CustomStyleInterface=_CustomStyleInterface}}window.ShadyCSS.ApplyShim=applyShim$1;/**
                                         @license
                                         Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                         This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                         The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                         The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                         Code distributed by Google as part of the polymer project is also
                                         subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                         */ /* eslint-disable no-unused-vars */ /**
                                                                                 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
                                                                                 * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
                                                                                 *
                                                                                 * @param {?} prop Property name
                                                                                 * @param {*} obj Reference object
                                                                                 * @return {string} Potentially renamed property name
                                                                                 */window.JSCompiler_renameProperty=function(prop,obj){return prop};/* eslint-enable */var CSS_URL_RX=/(url\()([^)]*)(\))/g,ABS_URL=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,workingURL,resolveDoc;/**
                 * Resolves the given URL against the provided `baseUri'.
                 *
                 * Note that this function performs no resolution for URLs that start
                 * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
                 * URL resolution, use `window.URL`.
                 *
                 * @param {string} url Input URL to resolve
                 * @param {?string=} baseURI Base URI to resolve the URL against
                 * @return {string} resolved URL
                 */function _resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url}if("//"===url){return url}// Lazy feature detection.
if(workingURL===void 0){workingURL=!1;try{var u=new URL("b","http://a");u.pathname="c%20d";workingURL="http://a/c%20d"===u.href}catch(e){// silently fail
}}if(!baseURI){baseURI=document.baseURI||window.location.href}if(workingURL){try{return new URL(url,baseURI).href}catch(e){// Bad url or baseURI structure. Do not attempt to resolve.
return url}}// Fallback to creating an anchor into a disconnected document.
if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument("temp");resolveDoc.base=resolveDoc.createElement("base");resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement("a");resolveDoc.body.appendChild(resolveDoc.anchor)}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url}/**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+"'"+_resolveUrl(url.replace(/["']/g,""),baseURI)+"'"+post})}/**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */function pathFromUrl(url){return url.substring(0,url.lastIndexOf("/")+1)}var resolveUrl$1={resolveUrl:_resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};_exports.$resolveUrl=resolveUrl$1;var useShadow=!window.ShadyDOM||!window.ShadyDOM.inUse;_exports.useShadow=useShadow;var useNativeCSSProperties=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss);_exports.useNativeCSSProperties=useNativeCSSProperties;var useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;_exports.useNativeCustomElements=useNativeCustomElements;var supportsAdoptingStyleSheets=useShadow&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&// Since spec may change, feature detect exact API we need
function(){try{var sheet=new CSSStyleSheet;sheet.replaceSync("");var host=document.createElement("div");host.attachShadow({mode:"open"});host.shadowRoot.adoptedStyleSheets=[sheet];return host.shadowRoot.adoptedStyleSheets[0]===sheet}catch(e){return!1}}();/**
       * Globally settable property that is automatically assigned to
       * `ElementMixin` instances, useful for binding in templates to
       * make URL's relative to an application's root.  Defaults to the main
       * document URL, but can be overridden by users.  It may be useful to set
       * `rootPath` to provide a stable application mount path when
       * using client side routing.
       */_exports.supportsAdoptingStyleSheets=supportsAdoptingStyleSheets;var rootPath=window.Polymer&&window.Polymer.rootPath||pathFromUrl(document.baseURI||window.location.href);/**
                                                                                                                           * Sets the global rootPath property used by `ElementMixin` and
                                                                                                                           * available via `rootPath`.
                                                                                                                           *
                                                                                                                           * @param {string} path The new root path
                                                                                                                           * @return {void}
                                                                                                                           */_exports.rootPath=rootPath;var setRootPath=function setRootPath(path){_exports.rootPath=rootPath=path};/**
    * A global callback used to sanitize any value before inserting it into the DOM.
    * The callback signature is:
    *
    *  function sanitizeDOMValue(value, name, type, node) { ... }
    *
    * Where:
    *
    * `value` is the value to sanitize.
    * `name` is the name of an attribute or property (for example, href).
    * `type` indicates where the value is being inserted: one of property, attribute, or text.
    * `node` is the node where the value is being inserted.
    *
    * @type {(function(*,string,string,?Node):*)|undefined}
    */_exports.setRootPath=setRootPath;var sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;/**
                                                                                               * Sets the global sanitizeDOMValue available via this module's exported
                                                                                               * `sanitizeDOMValue` variable.
                                                                                               *
                                                                                               * @param {(function(*,string,string,?Node):*)|undefined} newSanitizeDOMValue the global sanitizeDOMValue callback
                                                                                               * @return {void}
                                                                                               */_exports.sanitizeDOMValue=sanitizeDOMValue;var setSanitizeDOMValue=function setSanitizeDOMValue(newSanitizeDOMValue){_exports.sanitizeDOMValue=sanitizeDOMValue=newSanitizeDOMValue};/**
    * Gets sanitizeDOMValue, for environments that don't well support `export let`.
    *
    * @return {(function(*,string,string,?Node):*)|undefined} sanitizeDOMValue
    */_exports.setSanitizeDOMValue=setSanitizeDOMValue;var getSanitizeDOMValue=function getSanitizeDOMValue(){return sanitizeDOMValue};/**
    * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
    * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
    * scrolling performance.
    * Defaults to `false` for backwards compatibility.
    */_exports.getSanitizeDOMValue=getSanitizeDOMValue;var passiveTouchGestures=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;/**
                                                                                                      * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
                                                                                                      *
                                                                                                      * @param {boolean} usePassive enable or disable passive touch gestures globally
                                                                                                      * @return {void}
                                                                                                      */_exports.passiveTouchGestures=passiveTouchGestures;var setPassiveTouchGestures=function setPassiveTouchGestures(usePassive){_exports.passiveTouchGestures=passiveTouchGestures=usePassive};/**
    * Setting to ensure Polymer template evaluation only occurs based on tempates
    * defined in trusted script.  When true, `<dom-module>` re-registration is
    * disallowed, `<dom-bind>` is disabled, and `<dom-if>`/`<dom-repeat>`
    * templates will only evaluate in the context of a trusted element template.
    */_exports.setPassiveTouchGestures=setPassiveTouchGestures;var strictTemplatePolicy=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;/**
                                                                                                   * Sets `strictTemplatePolicy` globally for all elements
                                                                                                   *
                                                                                                   * @param {boolean} useStrictPolicy enable or disable strict template policy
                                                                                                   *   globally
                                                                                                   * @return {void}
                                                                                                   */_exports.strictTemplatePolicy=strictTemplatePolicy;var setStrictTemplatePolicy=function setStrictTemplatePolicy(useStrictPolicy){_exports.strictTemplatePolicy=strictTemplatePolicy=useStrictPolicy};/**
    * Setting to enable dom-module lookup from Polymer.Element.  By default,
    * templates must be defined in script using the `static get template()`
    * getter and the `html` tag function.  To enable legacy loading of templates
    * via dom-module, set this flag to true.
    */_exports.setStrictTemplatePolicy=setStrictTemplatePolicy;var allowTemplateFromDomModule=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;/**
                                                                                                               * Sets `lookupTemplateFromDomModule` globally for all elements
                                                                                                               *
                                                                                                               * @param {boolean} allowDomModule enable or disable template lookup
                                                                                                               *   globally
                                                                                                               * @return {void}
                                                                                                               */_exports.allowTemplateFromDomModule=allowTemplateFromDomModule;var setAllowTemplateFromDomModule=function setAllowTemplateFromDomModule(allowDomModule){_exports.allowTemplateFromDomModule=allowTemplateFromDomModule=allowDomModule};/**
    * Setting to skip processing style includes and re-writing urls in css styles.
    * Normally "included" styles are pulled into the element and all urls in styles
    * are re-written to be relative to the containing script url.
    * If no includes or relative urls are used in styles, these steps can be
    * skipped as an optimization.
    */_exports.setAllowTemplateFromDomModule=setAllowTemplateFromDomModule;var legacyOptimizations=window.Polymer&&window.Polymer.legacyOptimizations||!1;/**
                                                                                                 * Sets `legacyOptimizations` globally for all elements to enable optimizations
                                                                                                 * when only legacy based elements are used.
                                                                                                 *
                                                                                                 * @param {boolean} useLegacyOptimizations enable or disable legacy optimizations
                                                                                                 * includes and url rewriting
                                                                                                 * @return {void}
                                                                                                 */_exports.legacyOptimizations=legacyOptimizations;var setLegacyOptimizations=function setLegacyOptimizations(useLegacyOptimizations){_exports.legacyOptimizations=legacyOptimizations=useLegacyOptimizations};/**
    * Setting to add warnings useful when migrating from Polymer 1.x to 2.x.
    */_exports.setLegacyOptimizations=setLegacyOptimizations;var legacyWarnings=window.Polymer&&window.Polymer.legacyWarnings||!1;/**
                                                                                       * Sets `legacyWarnings` globally for all elements to migration warnings.
                                                                                       *
                                                                                       * @param {boolean} useLegacyWarnings enable or disable warnings
                                                                                       * @return {void}
                                                                                       */_exports.legacyWarnings=legacyWarnings;var setLegacyWarnings=function setLegacyWarnings(useLegacyWarnings){_exports.legacyWarnings=legacyWarnings=useLegacyWarnings};/**
    * Setting to perform initial rendering synchronously when running under ShadyDOM.
    * This matches the behavior of Polymer 1.
    */_exports.setLegacyWarnings=setLegacyWarnings;var syncInitialRender=window.Polymer&&window.Polymer.syncInitialRender||!1;/**
                                                                                             * Sets `syncInitialRender` globally for all elements to enable synchronous
                                                                                             * initial rendering.
                                                                                             *
                                                                                             * @param {boolean} useSyncInitialRender enable or disable synchronous initial
                                                                                             * rendering globally.
                                                                                             * @return {void}
                                                                                             */_exports.syncInitialRender=syncInitialRender;var setSyncInitialRender=function setSyncInitialRender(useSyncInitialRender){_exports.syncInitialRender=syncInitialRender=useSyncInitialRender};/**
    * Setting to retain the legacy Polymer 1 behavior for multi-property
    * observers around undefined values. Observers and computed property methods
    * are not called until no argument is undefined.
    */_exports.setSyncInitialRender=setSyncInitialRender;var legacyUndefined=window.Polymer&&window.Polymer.legacyUndefined||!1;/**
                                                                                         * Sets `legacyUndefined` globally for all elements to enable legacy
                                                                                         * multi-property behavior for undefined values.
                                                                                         *
                                                                                         * @param {boolean} useLegacyUndefined enable or disable legacy
                                                                                         * multi-property behavior for undefined.
                                                                                         * @return {void}
                                                                                         */_exports.legacyUndefined=legacyUndefined;var setLegacyUndefined=function setLegacyUndefined(useLegacyUndefined){_exports.legacyUndefined=legacyUndefined=useLegacyUndefined};/**
    * Setting to ensure computed properties are computed in order to ensure
    * re-computation never occurs in a given turn.
    */_exports.setLegacyUndefined=setLegacyUndefined;var orderedComputed=window.Polymer&&window.Polymer.orderedComputed||!1;/**
                                                                                         * Sets `orderedComputed` globally for all elements to enable ordered computed
                                                                                         * property computation.
                                                                                         *
                                                                                         * @param {boolean} useOrderedComputed enable or disable ordered computed effects
                                                                                         * @return {void}
                                                                                         */_exports.orderedComputed=orderedComputed;var setOrderedComputed=function setOrderedComputed(useOrderedComputed){_exports.orderedComputed=orderedComputed=useOrderedComputed};/**
    * Setting to cancel synthetic click events fired by older mobile browsers. Modern browsers
    * no longer fire synthetic click events, and the cancellation behavior can interfere
    * when programmatically clicking on elements.
    */_exports.setOrderedComputed=setOrderedComputed;var cancelSyntheticClickEvents=!0;/**
                                               * Sets `setCancelSyntheticEvents` globally for all elements to cancel synthetic click events.
                                               *
                                               * @param {boolean} useCancelSyntheticClickEvents enable or disable cancelling synthetic
                                               * events
                                               * @return {void}
                                               */_exports.cancelSyntheticClickEvents=cancelSyntheticClickEvents;var setCancelSyntheticClickEvents=function setCancelSyntheticClickEvents(useCancelSyntheticClickEvents){_exports.cancelSyntheticClickEvents=cancelSyntheticClickEvents=useCancelSyntheticClickEvents};/**
    * Setting to remove nested templates inside `dom-if` and `dom-repeat` as
    * part of element template parsing.  This is a performance optimization that
    * eliminates most of the tax of needing two elements due to the loss of
    * type-extended templates as a result of the V1 specification changes.
    */_exports.setCancelSyntheticClickEvents=setCancelSyntheticClickEvents;var removeNestedTemplates=window.Polymer&&window.Polymer.removeNestedTemplates||!1;/**
                                                                                                     * Sets `removeNestedTemplates` globally, to eliminate nested templates
                                                                                                     * inside `dom-if` and `dom-repeat` as part of template parsing.
                                                                                                     *
                                                                                                     * @param {boolean} useRemoveNestedTemplates enable or disable removing nested
                                                                                                     *   templates during parsing
                                                                                                     * @return {void}
                                                                                                     */_exports.removeNestedTemplates=removeNestedTemplates;var setRemoveNestedTemplates=function setRemoveNestedTemplates(useRemoveNestedTemplates){_exports.removeNestedTemplates=removeNestedTemplates=useRemoveNestedTemplates};/**
    * Setting to place `dom-if` elements in a performance-optimized mode that takes
    * advantage of lighter-weight host runtime template stamping to eliminate the
    * need for an intermediate Templatizer `TemplateInstance` to mange the nodes
    * stamped by `dom-if`.  Under this setting, any Templatizer-provided API's
    * such as `modelForElement` will not be available for nodes stamped by
    * `dom-if`.
    */_exports.setRemoveNestedTemplates=setRemoveNestedTemplates;var fastDomIf=window.Polymer&&window.Polymer.fastDomIf||!1;/**
                                                                             * Sets `fastDomIf` globally, to put `dom-if` in a performance-optimized mode.
                                                                             *
                                                                             * @param {boolean} useFastDomIf enable or disable `dom-if` fast-mode
                                                                             * @return {void}
                                                                             */_exports.fastDomIf=fastDomIf;var setFastDomIf=function setFastDomIf(useFastDomIf){_exports.fastDomIf=fastDomIf=useFastDomIf};/**
    * Setting to disable `dom-change` and `rendered-item-count` events from
    * `dom-if` and `dom-repeat`. Users can opt back into `dom-change` events by
    * setting the `notify-dom-change` attribute (`notifyDomChange: true` property)
    * to `dom-if`/`don-repeat` instances.
    */_exports.setFastDomIf=setFastDomIf;var suppressTemplateNotifications=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;/**
                                                                                                                     * Sets `suppressTemplateNotifications` globally, to disable `dom-change` and
                                                                                                                     * `rendered-item-count` events from `dom-if` and `dom-repeat`.
                                                                                                                     *
                                                                                                                     * @param {boolean} suppress enable or disable `suppressTemplateNotifications`
                                                                                                                     * @return {void}
                                                                                                                     */_exports.suppressTemplateNotifications=suppressTemplateNotifications;var setSuppressTemplateNotifications=function setSuppressTemplateNotifications(suppress){_exports.suppressTemplateNotifications=suppressTemplateNotifications=suppress};/**
    * Setting to disable use of dynamic attributes. This is an optimization
    * to avoid setting `observedAttributes`. Instead attributes are read
    * once at create time and set/removeAttribute are patched.
    */_exports.setSuppressTemplateNotifications=setSuppressTemplateNotifications;var legacyNoObservedAttributes=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;/**
                                                                                                               * Sets `legacyNoObservedAttributes` globally, to disable `observedAttributes`.
                                                                                                               *
                                                                                                               * @param {boolean} noObservedAttributes enable or disable `legacyNoObservedAttributes`
                                                                                                               * @return {void}
                                                                                                               */_exports.legacyNoObservedAttributes=legacyNoObservedAttributes;var setLegacyNoObservedAttributes=function setLegacyNoObservedAttributes(noObservedAttributes){_exports.legacyNoObservedAttributes=legacyNoObservedAttributes=noObservedAttributes};/**
    * Setting to enable use of `adoptedStyleSheets` for sharing style sheets
    * between component instances' shadow roots, if the app uses built Shady CSS
    * styles.
    */_exports.setLegacyNoObservedAttributes=setLegacyNoObservedAttributes;var useAdoptedStyleSheetsWithBuiltCSS=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
                                                                                                                             * Sets `useAdoptedStyleSheetsWithBuiltCSS` globally.
                                                                                                                             *
                                                                                                                             * @param {boolean} value enable or disable `useAdoptedStyleSheetsWithBuiltCSS`
                                                                                                                             * @return {void}
                                                                                                                             */_exports.useAdoptedStyleSheetsWithBuiltCSS=useAdoptedStyleSheetsWithBuiltCSS;var setUseAdoptedStyleSheetsWithBuiltCSS=function setUseAdoptedStyleSheetsWithBuiltCSS(value){_exports.useAdoptedStyleSheetsWithBuiltCSS=useAdoptedStyleSheetsWithBuiltCSS=value};_exports.setUseAdoptedStyleSheetsWithBuiltCSS=setUseAdoptedStyleSheetsWithBuiltCSS;var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,supportsAdoptingStyleSheets:supportsAdoptingStyleSheets,get rootPath(){return rootPath},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue},setSanitizeDOMValue:setSanitizeDOMValue,getSanitizeDOMValue:getSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures},setPassiveTouchGestures:setPassiveTouchGestures,get strictTemplatePolicy(){return strictTemplatePolicy},setStrictTemplatePolicy:setStrictTemplatePolicy,get allowTemplateFromDomModule(){return allowTemplateFromDomModule},setAllowTemplateFromDomModule:setAllowTemplateFromDomModule,get legacyOptimizations(){return legacyOptimizations},setLegacyOptimizations:setLegacyOptimizations,get legacyWarnings(){return legacyWarnings},setLegacyWarnings:setLegacyWarnings,get syncInitialRender(){return syncInitialRender},setSyncInitialRender:setSyncInitialRender,get legacyUndefined(){return legacyUndefined},setLegacyUndefined:setLegacyUndefined,get orderedComputed(){return orderedComputed},setOrderedComputed:setOrderedComputed,get cancelSyntheticClickEvents(){return cancelSyntheticClickEvents},setCancelSyntheticClickEvents:setCancelSyntheticClickEvents,get removeNestedTemplates(){return removeNestedTemplates},setRemoveNestedTemplates:setRemoveNestedTemplates,get fastDomIf(){return fastDomIf},setFastDomIf:setFastDomIf,get suppressTemplateNotifications(){return suppressTemplateNotifications},setSuppressTemplateNotifications:setSuppressTemplateNotifications,get legacyNoObservedAttributes(){return legacyNoObservedAttributes},setLegacyNoObservedAttributes:setLegacyNoObservedAttributes,get useAdoptedStyleSheetsWithBuiltCSS(){return useAdoptedStyleSheetsWithBuiltCSS},setUseAdoptedStyleSheetsWithBuiltCSS:setUseAdoptedStyleSheetsWithBuiltCSS};_exports.$settings=settings;var dedupeId=0;/**
                   * @constructor
                   * @extends {Function}
                   * @private
                   */function MixinFunction(){}/** @type {(WeakMap | undefined)} */MixinFunction.prototype.__mixinApplications;/** @type {(Object | undefined)} */MixinFunction.prototype.__mixinSet;/* eslint-disable valid-jsdoc */ /**
                                                                      * Wraps an ES6 class expression mixin such that the mixin is only applied
                                                                      * if it has not already been applied its base argument. Also memoizes mixin
                                                                      * applications.
                                                                      *
                                                                      * @template T
                                                                      * @param {T} mixin ES6 class expression mixin to wrap
                                                                      * @return {T}
                                                                      * @suppress {invalidCasts}
                                                                      */var dedupingMixin=function dedupingMixin(mixin){var mixinApplications=/** @type {!MixinFunction} */mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap;/** @type {!MixinFunction} */mixin.__mixinApplications=mixinApplications}// maintain a unique id for each mixin
var mixinDedupeId=dedupeId++;function dedupingMixin(base){var baseSet=/** @type {!MixinFunction} */base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base}var map=mixinApplications,extended=map.get(base);if(!extended){extended=/** @type {!Function} */mixin(base);map.set(base,extended);// copy inherited mixin set from the extended class, or the base class
// NOTE: we avoid use of Set here because some browser (IE11)
// cannot extend a base Set via the constructor.
var mixinSet=Object.create(/** @type {!MixinFunction} */extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=!0;/** @type {!MixinFunction} */extended.__mixinSet=mixinSet}return extended}return dedupingMixin};/* eslint-enable valid-jsdoc */_exports.dedupingMixin=dedupingMixin;var mixin={dedupingMixin:dedupingMixin};_exports.$mixin=mixin;var modules={},lcModules={};/**
                     * Sets a dom-module into the global registry by id.
                     *
                     * @param {string} id dom-module id
                     * @param {DomModule} module dom-module instance
                     * @return {void}
                     */function setModule(id,module){// store id separate from lowercased id so that
// in all cases mixedCase id will stored distinctly
// and lowercase version is a fallback
modules[id]=lcModules[id.toLowerCase()]=module}/**
   * Retrieves a dom-module from the global registry by id.
   *
   * @param {string} id dom-module id
   * @return {DomModule!} dom-module instance
   */function findModule(id){return modules[id]||lcModules[id.toLowerCase()]}function styleOutsideTemplateCheck(inst){if(inst.querySelector("style")){console.warn("dom-module %s has style outside template",inst.id)}}/**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */var DomModule=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(DomModule,_HTMLElement);function DomModule(){babelHelpers.classCallCheck(this,DomModule);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomModule).apply(this,arguments))}babelHelpers.createClass(DomModule,[{key:"attributeChangedCallback",/* eslint-disable no-unused-vars */ /**
                                         * @param {string} name Name of attribute.
                                         * @param {?string} old Old value of attribute.
                                         * @param {?string} value Current value of attribute.
                                         * @param {?string} namespace Attribute namespace.
                                         * @return {void}
                                         * @override
                                         */value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this.register()}}/* eslint-enable no-unused-args */ /**
                                        * The absolute URL of the original location of this `dom-module`.
                                        *
                                        * This value will differ from this element's `ownerDocument` in the
                                        * following ways:
                                        * - Takes into account any `assetpath` attribute added during bundling
                                        *   to indicate the original location relative to the bundled location
                                        * - Uses the HTMLImports polyfill's `importForElement` API to ensure
                                        *   the path is relative to the import document's location since
                                        *   `ownerDocument` is not currently polyfilled
                                        */},{key:"register",/**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     * @param {string=} id The id at which to register the dom-module.
     * @return {void}
     */value:function register(id){id=id||this.id;if(id){// Under strictTemplatePolicy, reject and null out any re-registered
// dom-module since it is ambiguous whether first-in or last-in is trusted
if(strictTemplatePolicy&&findModule(id)!==void 0){setModule(id,null);throw new Error("strictTemplatePolicy: dom-module ".concat(id," re-registered"))}this.id=id;setModule(id,this);styleOutsideTemplateCheck(this)}}},{key:"assetpath",get:function get(){// Don't override existing assetpath.
if(!this.__assetpath){// note: assetpath set via an attribute must be relative to this
// element's location; accomodate polyfilled HTMLImports
var owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,url=_resolveUrl(this.getAttribute("assetpath")||"",owner.baseURI);this.__assetpath=pathFromUrl(url)}return this.__assetpath}}],[{key:"import",/**
     * Retrieves the element specified by the css `selector` in the module
     * registered by `id`. For example, this.import('foo', 'img');
     * @param {string} id The id of the dom-module in which to search.
     * @param {string=} selector The css selector by which to find the element.
     * @return {Element} Returns the element which matches `selector` in the
     * module registered at the specified `id`.
     *
     * @export
     * @nocollapse Referred to indirectly in style-gather.js
     */value:function _import(id,selector){if(id){var m=findModule(id);if(m&&selector){return m.querySelector(selector)}return m}return null}},{key:"observedAttributes",/** @override */get:function get(){return["id"]}}]);return DomModule}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.DomModule=DomModule;DomModule.prototype.modules=modules;customElements.define("dom-module",DomModule);var domModule={DomModule:DomModule};_exports.$domModule=domModule;var MODULE_STYLE_LINK_SELECTOR="link[rel=import][type~=css]",INCLUDE_ATTR="include",SHADY_UNSCOPED_ATTR="shady-unscoped";/**
                                               * @param {string} moduleId .
                                               * @return {?DomModule} .
                                               */function importModule(moduleId){return(/** @type {?DomModule} */DomModule.import(moduleId))}function styleForImport(importDoc){// NOTE: polyfill affordance.
// under the HTMLImports polyfill, there will be no 'body',
// but the import pseudo-doc can be used directly.
var container=importDoc.body?importDoc.body:importDoc,importCss=resolveCss(container.textContent,importDoc.baseURI),style=document.createElement("style");style.textContent=importCss;return style}/** @typedef {{assetpath: string}} */var templateWithAssetPath;// eslint-disable-line no-unused-vars
/**
 * Returns a list of <style> elements in a space-separated list of `dom-module`s.
 *
 * @function
 * @param {string} moduleIds List of dom-module id's within which to
 * search for css.
 * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
 */function stylesFromModules(moduleIds){for(var modules=moduleIds.trim().split(/\s+/),styles=[],i=0;i<modules.length;i++){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromModule(modules[i])))}return styles}/**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModule(moduleId){var m=importModule(moduleId);if(!m){console.warn("Could not find style data in module named",moduleId);return[]}if(m._styles===void 0){var styles=[];// module imports: <link rel="import" type="css">
styles.push.apply(styles,babelHelpers.toConsumableArray(_stylesFromModuleImports(m)));// include css from the first template in the module
var _template2=/** @type {?HTMLTemplateElement} */m.querySelector("template");if(_template2){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromTemplate(_template2,/** @type {templateWithAssetPath} */m.assetpath)))}m._styles=styles}return m._styles}/**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string=} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   */function stylesFromTemplate(template,baseURI){if(!template._styles){for(var styles=[],e$=template.content.querySelectorAll("style"),i=0;i<e$.length;i++){var e=e$[i],include=e.getAttribute(INCLUDE_ATTR);// support style sharing by allowing styles to "include"
// other dom-modules that contain styling
if(include){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index})))}if(baseURI){e.textContent=resolveCss(e.textContent,/** @type {string} */baseURI)}styles.push(e)}template._styles=styles}return template._styles}/**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModuleImports(moduleId){var m=importModule(moduleId);return m?_stylesFromModuleImports(m):[]}/**
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */function _stylesFromModuleImports(module){for(var styles=[],p$=module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR),i=0,_p5;i<p$.length;i++){_p5=p$[i];if(_p5.import){var importDoc=_p5.import,unscoped=_p5.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){var _style6=styleForImport(importDoc);_style6.setAttribute(SHADY_UNSCOPED_ATTR,"");importDoc._unscopedStyle=_style6}else if(!importDoc._style){importDoc._style=styleForImport(importDoc)}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style)}}return styles}/**
   *
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @deprecated
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {string} Concatenated CSS content from specified `dom-module`s
   */function cssFromModules(moduleIds){for(var modules=moduleIds.trim().split(/\s+/),cssText="",i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i])}return cssText}/**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @deprecated
   * @param {string} moduleId dom-module id to gather styles from
   * @return {string} Concatenated CSS content from specified `dom-module`
   */function cssFromModule(moduleId){var m=importModule(moduleId);if(m&&m._cssText===void 0){// module imports: <link rel="import" type="css">
var cssText=_cssFromModuleImports(m),t=/** @type {?HTMLTemplateElement} */m.querySelector("template");// include css from the first template in the module
if(t){cssText+=cssFromTemplate(t,/** @type {templateWithAssetPath} */m.assetpath)}m._cssText=cssText||null}if(!m){console.warn("Could not find style data in module named",moduleId)}return m&&m._cssText||""}/**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @deprecated
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Concatenated CSS content from specified template
   */function cssFromTemplate(template,baseURI){// if element is a template, get content from its .content
for(var cssText="",e$=stylesFromTemplate(template,baseURI),i=0,e;i<e$.length;i++){e=e$[i];if(e.parentNode){e.parentNode.removeChild(e)}cssText+=e.textContent}return cssText}/**
   * Returns CSS text from stylesheets loaded via `<link rel="import" type="css">`
   * links within the specified `dom-module`.
   *
   * Note: This method is deprecated, use `stylesFromModuleImports` instead.
   *
   * @deprecated
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {string} Concatenated CSS content from links in specified `dom-module`
   */function cssFromModuleImports(moduleId){var m=importModule(moduleId);return m?_cssFromModuleImports(m):""}/**
   * @deprecated
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {string} Concatenated CSS content from links in the dom-module
   */function _cssFromModuleImports(module){for(var cssText="",styles=_stylesFromModuleImports(module),i=0;i<styles.length;i++){cssText+=styles[i].textContent}return cssText}var styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /* eslint-disable valid-jsdoc */ /**
                                        * Node wrapper to ensure ShadowDOM safe operation regardless of polyfill
                                        * presence or mode. Note that with the introduction of `ShadyDOM.noPatch`,
                                        * a node wrapper must be used to access ShadowDOM API.
                                        * This is similar to using `Polymer.dom` but relies exclusively
                                        * on the presence of the ShadyDOM polyfill rather than requiring the loading
                                        * of legacy (Polymer.dom) API.
                                        * @type {function(Node):Node}
                                        */_exports.$styleGather=styleGather;var wrap$1=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?function(n){return ShadyDOM.patch(n)}:function(n){return n};_exports.wrap=wrap$1;var wrap$2={wrap:wrap$1};_exports.$wrap=wrap$2;function isPath(path){return 0<=path.indexOf(".")}/**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */function root(path){var dotIndex=path.indexOf(".");if(-1===dotIndex){return path}return path.slice(0,dotIndex)}/**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */function isAncestor(base,path){//     base.startsWith(path + '.');
return 0===base.indexOf(path+".")}/**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */function isDescendant(base,path){//     path.startsWith(base + '.');
return 0===path.indexOf(base+".")}/**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */function translate(base,newBase,path){return newBase+path.slice(base.length)}/**
   * @param {string} base Path string to test against
   * @param {string} path Path string to test
   * @return {boolean} True if `path` is equal to `base`
   */function matches(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path)}/**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */function normalize(path){if(Array.isArray(path)){for(var parts=[],i=0,args;i<path.length;i++){args=path[i].toString().split(".");for(var j=0;j<args.length;j++){parts.push(args[j])}}return parts.join(".")}else{return path}}/**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @suppress {checkTypes}
   */function split(path){if(Array.isArray(path)){return normalize(path).split(".")}return path.toString().split(".")}/**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   */function _get(root,path,info){// Loop over path parts[0..n-1] and dereference
for(var prop=root,parts=split(path),i=0;i<parts.length;i++){if(!prop){return}var part=parts[i];prop=prop[part]}if(info){info.path=parts.join(".")}return prop}/**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   */function _set(root,path,value){var prop=root,parts=split(path),last=parts[parts.length-1];if(1<parts.length){// Loop over path parts[0..n-2] and dereference
for(var i=0,part;i<parts.length-1;i++){part=parts[i];prop=prop[part];if(!prop){return}}// Set value to object at end of path
prop[last]=value}else{// Simple property set
prop[path]=value}return parts.join(".")}/**
   * Returns true if the given string is a structured data path (has dots).
   *
   * This function is deprecated.  Use `isPath` instead.
   *
   * Example:
   *
   * ```
   * isDeep('foo.bar.baz') // true
   * isDeep('foo')         // false
   * ```
   *
   * @deprecated
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */var isDeep=isPath;_exports.isDeep=isDeep;var path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches,normalize:normalize,split:split,get:_get,set:_set,isDeep:isDeep};_exports.$path=path;var caseMap={},DASH_TO_CAMEL=/-[a-z]/g,CAMEL_TO_DASH=/([A-Z])/g;/**
                                   * @fileoverview Module with utilities for converting between "dash-case" and
                                   * "camelCase" identifiers.
                                   */ /**
                                       * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
                                       * (e.g. `fooBarBaz`).
                                       *
                                       * @param {string} dash Dash-case identifier
                                       * @return {string} Camel-case representation of the identifier
                                       */function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=0>dash.indexOf("-")?dash:dash.replace(DASH_TO_CAMEL,function(m){return m[1].toUpperCase()}))}/**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,"-$1").toLowerCase())}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};_exports.$caseMap=caseMap$1;var microtaskCurrHandle=0,microtaskLastHandle=0,microtaskCallbacks=[],microtaskNodeContent=0,microtaskScheduled=!1,microtaskNode=document.createTextNode("");new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:!0});function microtaskFlush(){microtaskScheduled=!1;for(var len=microtaskCallbacks.length,i=0,cb;i<len;i++){cb=microtaskCallbacks[i];if(cb){try{cb()}catch(e){setTimeout(function(){throw e})}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len}/**
   * Async interface wrapper around `setTimeout`.
   *
   * @namespace
   * @summary Async interface wrapper around `setTimeout`.
   */var timeOut={/**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */after:function after(delay){return{run:function run(fn){return window.setTimeout(fn,delay)},cancel:function cancel(handle){window.clearTimeout(handle)}}},/**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */run:function run(fn,delay){return window.setTimeout(fn,delay)},/**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.clearTimeout(handle)}};_exports.timeOut=timeOut;var animationFrame={/**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof animationFrame
   * @param {function(number):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(fn){return window.requestAnimationFrame(fn)},/**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof animationFrame
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.cancelAnimationFrame(handle)}};_exports.animationFrame=animationFrame;var idlePeriod={/**
   * Enqueues a function called at `requestIdleCallback` timing.
   *
   * @memberof idlePeriod
   * @param {function(!IdleDeadline):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16)},/**
   * Cancels a previously enqueued `idlePeriod` callback.
   *
   * @memberof idlePeriod
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle)}};_exports.idlePeriod=idlePeriod;var microTask={/**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(callback){if(!microtaskScheduled){microtaskScheduled=!0;microtaskNode.textContent=microtaskNodeContent++}microtaskCallbacks.push(callback);return microtaskCurrHandle++},/**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){var idx=handle-microtaskLastHandle;if(0<=idx){if(!microtaskCallbacks[idx]){throw new Error("invalid async handle: "+handle)}microtaskCallbacks[idx]=null}}};_exports.microTask=microTask;var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};_exports.$async=async;var microtask=microTask,PropertiesChanged=dedupingMixin(/**
                                                 * @template T
                                                 * @param {function(new:T)} superClass Class to apply mixin to.
                                                 * @return {function(new:T)} superClass with mixin applied.
                                                 */function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   */var PropertiesChanged=/*#__PURE__*/function(_superClass){babelHelpers.inherits(PropertiesChanged,_superClass);babelHelpers.createClass(PropertiesChanged,[{key:"_createPropertyAccessor",//eslint-disable-line no-unused-vars
/**
     * Creates a setter/getter pair for the named property with its own
     * local storage.  The getter returns the value in the local storage,
     * and the setter calls `_setProperty`, which updates the local storage
     * for the property and enqueues a `_propertiesChanged` callback.
     *
     * This method may be called on a prototype or an instance.  Calling
     * this method may overwrite a property value that already exists on
     * the prototype/instance by creating the accessor.
     *
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created; the
     *   protected `_setProperty` function must be used to set the property
     * @return {void}
     * @protected
     * @override
     */value:function _createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=!0;this._definePropertyAccessor(property,readOnly)}}/**
       * Adds the given `property` to a map matching attribute names
       * to property names, using `attributeNameForProperty`. This map is
       * used when deserializing attribute values to properties.
       *
       * @param {string} property Name of the property
       * @override
       */},{key:"_addPropertyToAttributeMap",value:function _addPropertyToAttributeMap(property){if(!this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))){this.__dataAttributes=Object.assign({},this.__dataAttributes)}// This check is technically not correct; it's an optimization that
// assumes that if a _property_ name is already in the map (note this is
// an attr->property map), the property mapped directly to the attribute
// and it has already been mapped.  This would fail if
// `attributeNameForProperty` were overridden such that this was not the
// case.
var attr=this.__dataAttributes[property];if(!attr){attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[attr]=property}return attr}/**
       * Defines a property accessor for the given property.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       * @return {void}
       * @override
       */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{/* eslint-disable valid-jsdoc */ /** @this {PropertiesChanged} */get:function get(){// Inline for perf instead of using `_getProperty`
return this.__data[property]},/** @this {PropertiesChanged} */set:readOnly?function(){}:function(value){// Inline for perf instead of using `_setProperty`
if(this._setPendingProperty(property,value,!0)){this._invalidateProperties()}}/* eslint-enable */})}}],[{key:"createProperties",/**
     * Creates property accessors for the given property names.
     * @param {!Object} props Object whose keys are names of accessors.
     * @return {void}
     * @protected
     * @nocollapse
     */value:function createProperties(props){var proto=this.prototype;for(var prop in props){// don't stomp an existing accessor
if(!(prop in proto)){proto._createPropertyAccessor(prop)}}}/**
       * Returns an attribute name that corresponds to the given property.
       * The attribute name is the lowercased property name. Override to
       * customize this mapping.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       * @nocollapse
       */},{key:"attributeNameForProperty",value:function attributeNameForProperty(property){return property.toLowerCase()}/**
       * Override point to provide a type to which to deserialize a value to
       * a given property.
       * @param {string} name Name of property
       *
       * @protected
       * @nocollapse
       */},{key:"typeForProperty",value:function typeForProperty(name){}}]);function PropertiesChanged(){var _this7;babelHelpers.classCallCheck(this,PropertiesChanged);_this7=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertiesChanged).call(this));/** @type {boolean} */_this7.__dataEnabled=!1;_this7.__dataReady=!1;_this7.__dataInvalid=!1;_this7.__data={};_this7.__dataPending=null;_this7.__dataOld=null;_this7.__dataInstanceProps=null;/** @type {number} */ // NOTE: used to track re-entrant calls to `_flushProperties`
_this7.__dataCounter=0;_this7.__serializing=!1;_this7._initializeProperties();return _this7}/**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */babelHelpers.createClass(PropertiesChanged,[{key:"ready",value:function ready(){this.__dataReady=!0;this._flushProperties()}/**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeProperties",value:function _initializeProperties(){// Capture instance properties; these will be set into accessors
// during first flush. Don't set them here, since we want
// these to overwrite defaults/constructor assignments
for(var _p6 in this.__dataHasAccessor){if(this.hasOwnProperty(_p6)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[_p6]=this[_p6];delete this[_p6]}}}/**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){Object.assign(this,props)}/**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       * @protected
       * @override
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties()}}/**
       * Returns the value for the given property.
       * @param {string} property Name of property
       * @return {*} Value for the given property
       * @protected
       * @override
       */},{key:"_getProperty",value:function _getProperty(property){return this.__data[property]}/* eslint-disable no-unused-vars */ /**
                                           * Updates the local storage for a property, records the previous value,
                                           * and adds it to the set of "pending changes" that will be passed to the
                                           * `_propertiesChanged` callback.  This method does not enqueue the
                                           * `_propertiesChanged` callback.
                                           *
                                           * @param {string} property Name of the property
                                           * @param {*} value Value to set
                                           * @param {boolean=} ext Not used here; affordance for closure
                                           * @return {boolean} Returns true if the property changed
                                           * @protected
                                           * @override
                                           */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,ext){var old=this.__data[property],changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}// Ensure old is captured from the last turn
if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old}this.__data[property]=value;this.__dataPending[property]=value}return changed}/* eslint-enable */ /**
                           * @param {string} property Name of the property
                           * @return {boolean} Returns true if the property is pending.
                           */},{key:"_isPropertyPending",value:function _isPropertyPending(property){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(property))}/**
       * Marks the properties as invalid, and enqueues an async
       * `_propertiesChanged` callback.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_invalidateProperties",value:function _invalidateProperties(){var _this8=this;if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=!0;microtask.run(function(){if(_this8.__dataInvalid){_this8.__dataInvalid=!1;_this8._flushProperties()}})}}/**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_enableProperties",value:function _enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=!0;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null}this.ready()}}/**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_flushProperties",value:function _flushProperties(){this.__dataCounter++;var props=this.__data,changedProps=this.__dataPending,old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old)}this.__dataCounter--}/**
       * Called in `_flushProperties` to determine if `_propertiesChanged`
       * should be called. The default implementation returns true if
       * properties are pending. Override to customize when
       * `_propertiesChanged` is called.
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {boolean} true if changedProps is truthy
       * @override
       */},{key:"_shouldPropertiesChange",value:function _shouldPropertiesChange(currentProps,changedProps,oldProps){// eslint-disable-line no-unused-vars
return!!changedProps}/**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       * @protected
       * @override
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){}// eslint-disable-line no-unused-vars
/**
     * Method called to determine whether a property value should be
     * considered as a change and cause the `_propertiesChanged` callback
     * to be enqueued.
     *
     * The default implementation returns `true` if a strict equality
     * check fails. The method always returns false for `NaN`.
     *
     * Override this method to e.g. provide stricter checking for
     * Objects/Arrays when using immutable patterns.
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     *   and enqueue a `_proeprtiesChanged` callback
     * @protected
     * @override
     */},{key:"_shouldPropertyChange",value:function _shouldPropertyChange(property,value,old){return(// Strict equality check
old!==value&&(// This ensures (old==NaN, value==NaN) always returns false
old===old||value===value))}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @suppress {missingProperties} Super may or may not implement the callback
       * @override
       */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value)}if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this).call(this,name,old,value,namespace)}}/**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to, defaults to the value
       * returned from `typeForProperty`
       * @return {void}
       * @override
       */},{key:"_attributeToProperty",value:function _attributeToProperty(attribute,value,type){if(!this.__serializing){var map=this.__dataAttributes,property=map&&map[attribute]||attribute;this[property]=this._deserializeValue(value,type||this.constructor.typeForProperty(property))}}/**
       * Serializes a property to its associated attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is an element.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect to.
       * @param {*=} value Property value to refect.
       * @return {void}
       * @override
       */},{key:"_propertyToAttribute",value:function _propertyToAttribute(property,attribute,value){this.__serializing=!0;value=3>arguments.length?this[property]:value;this._valueToNodeAttribute(/** @type {!HTMLElement} */this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=!1}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @return {void}
       * @override
       */},{key:"_valueToNodeAttribute",value:function _valueToNodeAttribute(node,value,attribute){var str=this._serializeValue(value);if("class"===attribute||"name"===attribute||"slot"===attribute){node=/** @type {?Element} */wrap$1(node)}if(str===void 0){node.removeAttribute(attribute)}else{node.setAttribute(attribute,str)}}/**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called when setting JS property values to
       * HTML attributes.  Users may override this method to provide
       * serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided
       * property  value.
       * @override
       */},{key:"_serializeValue",value:function _serializeValue(value){switch(babelHelpers.typeof(value)){case"boolean":return value?"":void 0;default:return null!=value?value.toString():void 0;}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called when reading HTML attribute values to
       * JS properties.  Users may override this method to provide
       * deserialization for custom `type`s. Types for `Boolean`, `String`,
       * and `Number` convert attributes to the expected types.
       *
       * @param {?string} value Value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){switch(type){case Boolean:return null!==value;case Number:return+value;default:return value;}}}]);return PropertiesChanged}(superClass);return PropertiesChanged});/**
                              * Element class mixin that provides basic meta-programming for creating one
                              * or more property accessors (getter/setter pair) that enqueue an async
                              * (batched) `_propertiesChanged` callback.
                              *
                              * For basic usage of this mixin, call `MyClass.createProperties(props)`
                              * once at class definition time to create property accessors for properties
                              * named in props, implement `_propertiesChanged` to react as desired to
                              * property changes, and implement `static get observedAttributes()` and
                              * include lowercase versions of any property names that should be set from
                              * attributes. Last, call `this._enableProperties()` in the element's
                              * `connectedCallback` to enable the accessors.
                              *
                              * @mixinFunction
                              * @polymer
                              * @summary Element class mixin for reacting to property changes from
                              *   generated property accessors.
                              * @template T
                              * @param {function(new:T)} superClass Class to apply mixin to.
                              * @return {function(new:T)} superClass with mixin applied.
                              */_exports.PropertiesChanged=PropertiesChanged;var propertiesChanged={PropertiesChanged:PropertiesChanged};// that won't have their values "saved" by `saveAccessorValue`, since
// reading from an HTMLElement accessor from the context of a prototype throws
_exports.$propertiesChanged=propertiesChanged;var nativeProperties={},proto=HTMLElement.prototype;while(proto){for(var props=Object.getOwnPropertyNames(proto),i=0;i<props.length;i++){nativeProperties[props[i]]=!0}proto=Object.getPrototypeOf(proto)}/**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */function saveAccessorValue(model,property){// Don't read/store value for any native properties since they could throw
if(!nativeProperties[property]){var value=model[property];if(value!==void 0){if(model.__data){// Adding accessor to instance; update the property
// It is the user's responsibility to call _flushProperties
model._setPendingProperty(property,value)}else{// Adding accessor to proto; save proto's value for instance-time use
if(!model.__dataProto){model.__dataProto={}}else if(!model.hasOwnProperty(JSCompiler_renameProperty("__dataProto",model))){model.__dataProto=Object.create(model.__dataProto)}model.__dataProto[property]=value}}}}/**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get
   *     observedAttributes()`. Use `dash-case` attribute names to represent
   *     `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to
   *     generate property accessors for each observed attribute. This must be
   *     called before the first instance is created, for example, by calling it
   *     before calling `customElements.define`. It can also be called lazily from
   *     the element's `constructor`, as long as it's guarded so that the call is
   *     only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to
   *     enable the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */var PropertyAccessors=dedupingMixin(function(superClass){/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   * @private
   */var base=PropertiesChanged(superClass),PropertyAccessors=/*#__PURE__*/function(_base){babelHelpers.inherits(PropertyAccessors,_base);function PropertyAccessors(){babelHelpers.classCallCheck(this,PropertyAccessors);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyAccessors).apply(this,arguments))}babelHelpers.createClass(PropertyAccessors,[{key:"_initializeProperties",/**
       * Overrides PropertiesChanged implementation to initialize values for
       * accessors created for values that already existed on the element
       * prototype.
       *
       * @return {void}
       * @protected
       * @override
       */value:function _initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null}babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_initializeProperties",this).call(this)}/**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){for(var _p7 in props){this._setProperty(_p7,props[_p7])}}/**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is infact an
       *     element
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       * @return {void}
       * @override
       */},{key:"_ensureAttribute",value:function _ensureAttribute(attribute,value){var el=/** @type {!HTMLElement} */this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute)}}/**
       * Overrides PropertiesChanged implemention to serialize objects as JSON.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property
       *     value.
       * @override
       */},{key:"_serializeValue",value:function _serializeValue(value){/* eslint-disable no-fallthrough */switch(babelHelpers.typeof(value)){case"object":if(babelHelpers.instanceof(value,Date)){return value.toString()}else if(value){try{return JSON.stringify(value)}catch(x){return""}}default:return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_serializeValue",this).call(this,value);}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       *
       * @param {?string} value Attribute value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){/**
       * @type {*}
       */var outValue;switch(type){case Object:try{outValue=JSON.parse(/** @type {string} */value)}catch(x){// allow non-JSON literals like Strings and Numbers
outValue=value}break;case Array:try{outValue=JSON.parse(/** @type {string} */value)}catch(x){outValue=null;console.warn("Polymer::Attributes: couldn't decode Array as JSON: ".concat(value))}break;case Date:outValue=isNaN(value)?value+"":+value;outValue=new Date(outValue);break;default:outValue=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_deserializeValue",this).call(this,value,type);break;}return outValue}/* eslint-enable no-fallthrough */ /**
                                          * Overrides PropertiesChanged implementation to save existing prototype
                                          * property value so that it can be reset.
                                          * @param {string} property Name of the property
                                          * @param {boolean=} readOnly When true, no setter is created
                                          *
                                          * When calling on a prototype, any overwritten values are saved in
                                          * `__dataProto`, and it is up to the subclasser to decide how/when
                                          * to set those properties back into the accessor.  When calling on an
                                          * instance, the overwritten value is set via `_setPendingProperty`,
                                          * and the user should call `_invalidateProperties` or `_flushProperties`
                                          * for the values to take effect.
                                          * @protected
                                          * @return {void}
                                          * @override
                                          */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_definePropertyAccessor",this).call(this,property,readOnly)}/**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       * @override
       */},{key:"_hasAccessor",value:function _hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property]}/**
       * Returns true if the specified property has a pending change.
       *
       * @param {string} prop Property name
       * @return {boolean} True if property has a pending change
       * @protected
       * @override
       */},{key:"_isPropertyPending",value:function _isPropertyPending(prop){return!!(this.__dataPending&&prop in this.__dataPending)}}],[{key:"createPropertiesForAttributes",/**
     * Generates property accessors for all attributes in the standard
     * static `observedAttributes` array.
     *
     * Attribute names are mapped to property names using the `dash-case` to
     * `camelCase` convention
     *
     * @return {void}
     * @nocollapse
     */value:function createPropertiesForAttributes(){for(var a$=/** @type {?} */this.observedAttributes,_i2=0;_i2<a$.length;_i2++){this.prototype._createPropertyAccessor(dashToCamelCase(a$[_i2]))}}/**
       * Returns an attribute name that corresponds to the given property.
       * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       * @nocollapse
       */},{key:"attributeNameForProperty",value:function attributeNameForProperty(property){return camelToDashCase(property)}}]);return PropertyAccessors}(base);/**
                                                  * @polymer
                                                  * @mixinClass
                                                  * @implements {Polymer_PropertyAccessors}
                                                  * @extends {base}
                                                  * @unrestricted
                                                  */return PropertyAccessors});_exports.PropertyAccessors=PropertyAccessors;var propertyAccessors={PropertyAccessors:PropertyAccessors};// This is a clear layering violation and gives favored-nation status to
// dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
// a.) to ease 1.x backwards-compatibility due to loss of `is`, and
// b.) to maintain if/repeat capability in parser-constrained elements
//     (e.g. table, select) in lieu of native CE type extensions without
//     massive new invention in this space (e.g. directive system)
_exports.$propertyAccessors=propertyAccessors;var templateExtensions={"dom-if":!0,"dom-repeat":!0},placeholderBugDetect=!1,placeholderBug=!1;function hasPlaceholderBug(){if(!placeholderBugDetect){placeholderBugDetect=!0;var t=document.createElement("textarea");t.placeholder="a";placeholderBug=t.placeholder===t.textContent}return placeholderBug}/**
   * Some browsers have a bug with textarea, where placeholder text is copied as
   * a textnode child of the textarea.
   *
   * If the placeholder is a binding, this can break template stamping in two
   * ways.
   *
   * One issue is that when the `placeholder` attribute is removed when the
   * binding is processed, the textnode child of the textarea is deleted, and the
   * template info tries to bind into that node.
   *
   * With `legacyOptimizations` in use, when the template is stamped and the
   * `textarea.textContent` binding is processed, no corresponding node is found
   * because it was removed during parsing. An exception is generated when this
   * binding is updated.
   *
   * With `legacyOptimizations` not in use, the template is cloned before
   * processing and this changes the above behavior. The cloned template also has
   * a value property set to the placeholder and textContent. This prevents the
   * removal of the textContent when the placeholder attribute is removed.
   * Therefore the exception does not occur. However, there is an extra
   * unnecessary binding.
   *
   * @param {!Node} node Check node for placeholder bug
   * @return {void}
   */function fixPlaceholder(node){if(hasPlaceholderBug()&&"textarea"===node.localName&&node.placeholder&&node.placeholder===node.textContent){node.textContent=null}}function wrapTemplateExtension(node){var is=node.getAttribute("is");if(is&&templateExtensions[is]){var t=node;t.removeAttribute("is");node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name)}}return node}function findTemplateNode(root,nodeInfo){// recursively ascend tree until we hit root
var parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);// unwind the stack, returning the indexed node at each level
if(parent){// note: marginally faster than indexing via childNodes
// (http://jsperf.com/childnodes-lookup)
for(var n=parent.firstChild,_i3=0;n;n=n.nextSibling){if(nodeInfo.parentIndex===_i3++){return n}}}else{return root}}// construct `$` map (from id annotations)
function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node}}// install event listeners (from event annotations)
function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(var j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst)}}}// push configuration references at configure time
function applyTemplateInfo(inst,node,nodeInfo,parentTemplateInfo){if(nodeInfo.templateInfo){// Give the node an instance of this templateInfo and set its parent
node._templateInfo=nodeInfo.templateInfo;node._parentTemplateInfo=parentTemplateInfo}}function createNodeEventHandler(context,eventName,methodName){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
context=context._methodHost||context;var handler=function handler(e){if(context[methodName]){context[methodName](e,e.detail)}else{console.warn("listener method `"+methodName+"` not defined")}};return handler}/**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */var TemplateStamp=dedupingMixin(/**
                                             * @template T
                                             * @param {function(new:T)} superClass Class to apply mixin to.
                                             * @return {function(new:T)} superClass with mixin applied.
                                             */function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_TemplateStamp}
   */var TemplateStamp=/*#__PURE__*/function(_superClass2){babelHelpers.inherits(TemplateStamp,_superClass2);function TemplateStamp(){babelHelpers.classCallCheck(this,TemplateStamp);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateStamp).apply(this,arguments))}babelHelpers.createClass(TemplateStamp,[{key:"_stampTemplate",/**
       * Clones the provided template content and returns a document fragment
       * containing the cloned dom.
       *
       * The template is parsed (once and memoized) using this library's
       * template parsing features, and provides the following value-added
       * features:
       * * Adds declarative event listeners for `on-event="handler"` attributes
       * * Generates an "id map" for all nodes with id's under `$` on returned
       *   document fragment
       * * Passes template info including `content` back to templates as
       *   `_templateInfo` (a performance optimization to avoid deep template
       *   cloning)
       *
       * Note that the memoized template parsing process is destructive to the
       * template: attributes for bindings and declarative event listeners are
       * removed after being noted in notes, and any nested `<template>.content`
       * is removed and stored in notes as well.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @param {TemplateInfo=} templateInfo Optional template info associated
       *   with the template to be stamped; if omitted the template will be
       *   automatically parsed.
       * @return {!StampedTemplate} Cloned template content
       * @override
       */value:function _stampTemplate(template,templateInfo){// Polyfill support: bootstrap the template if it has not already been
if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template)}// Accepting the `templateInfo` via an argument allows for creating
// instances of the `templateInfo` by the caller, useful for adding
// instance-time information to the prototypical data
templateInfo=templateInfo||this.constructor._parseTemplate(template);var nodeInfo=templateInfo.nodeInfoList,content=templateInfo.content||template.content,dom=/** @type {DocumentFragment} */document.importNode(content,!0);// NOTE: ShadyDom optimization indicating there is an insertion point
dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;var nodes=dom.nodeList=Array(nodeInfo.length);dom.$={};for(var _i4=0,l=nodeInfo.length,info,node;_i4<l&&(info=nodeInfo[_i4]);_i4++){node=nodes[_i4]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateInfo(this,node,info,templateInfo);applyEventListener(this,node,info)}dom=/** @type {!StampedTemplate} */dom;// eslint-disable-line no-self-assign
return dom}/**
       * Adds an event listener by method name for the event provided.
       *
       * This method generates a handler function that looks up the method
       * name at handling time.
       *
       * @param {!EventTarget} node Node to add listener on
       * @param {string} eventName Name of event
       * @param {string} methodName Name of method
       * @param {*=} context Context the method will be called on (defaults
       *   to `node`)
       * @return {Function} Generated handler function
       * @override
       */},{key:"_addMethodEventListenerToNode",value:function _addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;var handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       * @override
       */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler)}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */},{key:"_removeEventListenerFromNode",value:function _removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler)}}],[{key:"_parseTemplate",/**
     * Scans a template to produce template metadata.
     *
     * Template-specific metadata are stored in the object returned, and node-
     * specific metadata are stored in objects in its flattened `nodeInfoList`
     * array.  Only nodes in the template that were parsed as nodes of
     * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
     * contains an `index` (`childNodes` index in parent) and optionally
     * `parent`, which points to node info of its parent (including its index).
     *
     * The template metadata object returned from this method has the following
     * structure (many fields optional):
     *
     * ```js
     *   {
     *     // Flattened list of node metadata (for nodes that generated metadata)
     *     nodeInfoList: [
     *       {
     *         // `id` attribute for any nodes with id's for generating `$` map
     *         id: {string},
     *         // `on-event="handler"` metadata
     *         events: [
     *           {
     *             name: {string},   // event name
     *             value: {string},  // handler method name
     *           }, ...
     *         ],
     *         // Notes when the template contained a `<slot>` for shady DOM
     *         // optimization purposes
     *         hasInsertionPoint: {boolean},
     *         // For nested `<template>`` nodes, nested template metadata
     *         templateInfo: {object}, // nested template metadata
     *         // Metadata to allow efficient retrieval of instanced node
     *         // corresponding to this metadata
     *         parentInfo: {number},   // reference to parent nodeInfo>
     *         parentIndex: {number},  // index in parent's `childNodes` collection
     *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
     *       },
     *       ...
     *     ],
     *     // When true, the template had the `strip-whitespace` attribute
     *     // or was nested in a template with that setting
     *     stripWhitespace: {boolean},
     *     // For nested templates, nested template content is moved into
     *     // a document fragment stored here; this is an optimization to
     *     // avoid the cost of nested template cloning
     *     content: {DocumentFragment}
     *   }
     * ```
     *
     * This method kicks off a recursive treewalk as follows:
     *
     * ```
     *    _parseTemplate <---------------------+
     *      _parseTemplateContent              |
     *        _parseTemplateNode  <------------|--+
     *          _parseTemplateNestedTemplate --+  |
     *          _parseTemplateChildNodes ---------+
     *          _parseTemplateNodeAttributes
     *            _parseTemplateNodeAttribute
     *
     * ```
     *
     * These methods may be overridden to add custom metadata about templates
     * to either `templateInfo` or `nodeInfo`.
     *
     * Note that this method may be destructive to the template, in that
     * e.g. event annotations may be removed after being noted in the
     * template metadata.
     *
     * @param {!HTMLTemplateElement} template Template to parse
     * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
     *   template, for parsing nested templates
     * @return {!TemplateInfo} Parsed template metadata
     * @nocollapse
     */value:function _parseTemplate(template,outerTemplateInfo){// since a template may be re-used, memo-ize metadata
if(!template._templateInfo){// TODO(rictic): fix typing
var/** ? */templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.nestedTemplate=!!outerTemplateInfo;templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute("strip-whitespace");// TODO(rictic): fix typing
this._parseTemplateContent(template,templateInfo,/** @type {?} */{parent:null})}return template._templateInfo}/**
       * See docs for _parseTemplateNode.
       *
       * @param {!HTMLTemplateElement} template .
       * @param {!TemplateInfo} templateInfo .
       * @param {!NodeInfo} nodeInfo .
       * @return {boolean} .
       * @nocollapse
       */},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo)}/**
       * Parses template node and adds template and node metadata based on
       * the current node, and its `childNodes` and `attributes`.
       *
       * This method may be overridden to add custom node or template specific
       * metadata based on this node.
       *
       * @param {Node} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){var noted=!1,element=/** @type {!HTMLTemplateElement} */node;if("template"==element.localName&&!element.hasAttribute("preserve-content")){noted=this._parseTemplateNestedTemplate(element,templateInfo,nodeInfo)||noted}else if("slot"===element.localName){// For ShadyDom optimization, indicating there is an insertion point
templateInfo.hasInsertionPoint=!0}fixPlaceholder(element);if(element.firstChild){this._parseTemplateChildNodes(element,templateInfo,nodeInfo)}if(element.hasAttributes&&element.hasAttributes()){noted=this._parseTemplateNodeAttributes(element,templateInfo,nodeInfo)||noted}// Checking `nodeInfo.noted` allows a child node of this node (who gets
// access to `parentInfo`) to cause the parent to be noted, which
// otherwise has no return path via `_parseTemplateChildNodes` (used by
// some optimizations)
return noted||nodeInfo.noted}/**
       * Parses template child nodes for the given root node.
       *
       * This method also wraps whitelisted legacy template extensions
       * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
       * wrappers, collapses text nodes, and strips whitespace from the template
       * if the `templateInfo.stripWhitespace` setting was provided.
       *
       * @param {Node} root Root node whose `childNodes` will be parsed
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {void}
       */},{key:"_parseTemplateChildNodes",value:function _parseTemplateChildNodes(root,templateInfo,nodeInfo){if("script"===root.localName||"style"===root.localName){return}for(var node=root.firstChild,parentIndex=0,next;node;node=next){// Wrap templates
if("template"==node.localName){node=wrapTemplateExtension(node)}// collapse adjacent textNodes: fixes an IE issue that can cause
// text nodes to be inexplicably split =(
// note that root.normalize() should work but does not so we do this
// manually.
next=node.nextSibling;if(node.nodeType===Node.TEXT_NODE){var/** Node */n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=n.nextSibling;root.removeChild(n);n=next}// optionally strip whitespace
if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue}}var childInfo=/** @type {!NodeInfo} */{parentIndex:parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(childInfo)-1}// Increment if not removed
if(node.parentNode){parentIndex++}}}/**
       * Parses template content for the given nested `<template>`.
       *
       * Nested template info is stored as `templateInfo` in the current node's
       * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
       * It will then be the responsibility of the host to set it back to the
       * template and for users stamping nested templates to use the
       * `_contentForTemplate` method to retrieve the content for this template
       * (an optimization to avoid the cost of cloning nested template content).
       *
       * @param {HTMLTemplateElement} node Node to parse (a <template>)
       * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
       *   that includes the template `node`
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){// TODO(rictic): the type of node should be non-null
var element=/** @type {!HTMLTemplateElement} */node,templateInfo=this._parseTemplate(element,outerTemplateInfo),content=templateInfo.content=element.content.ownerDocument.createDocumentFragment();content.appendChild(element.content);nodeInfo.templateInfo=templateInfo;return!0}/**
       * Parses template node attributes and adds node metadata to `nodeInfo`
       * for nodes of interest.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current
       *     template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */},{key:"_parseTemplateNodeAttributes",value:function _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){// Make copy of original attribute list, since the order may change
// as attributes are added and removed
for(var noted=!1,attrs=Array.from(node.attributes),_i5=attrs.length-1,a;a=attrs[_i5];_i5--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted}return noted}/**
       * Parses a single template node attribute and adds node metadata to
       * `nodeInfo` for attributes of interest.
       *
       * This implementation adds metadata for `on-event="handler"` attributes
       * and `id` attributes.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){// events (on-*)
if("on-"===name.slice(0,3)){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value:value});return!0}// static id
else if("id"===name){nodeInfo.id=value;return!0}return!1}/**
       * Returns the `content` document fragment for a given template.
       *
       * For nested templates, Polymer performs an optimization to cache nested
       * template content to avoid the cost of cloning deeply nested templates.
       * This method retrieves the cached content for a given template.
       *
       * @param {HTMLTemplateElement} template Template to retrieve `content` for
       * @return {DocumentFragment} Content fragment
       * @nocollapse
       */},{key:"_contentForTemplate",value:function _contentForTemplate(template){var templateInfo=/** @type {HTMLTemplateElementWithInfo} */template._templateInfo;return templateInfo&&templateInfo.content||template.content}}]);return TemplateStamp}(superClass);return TemplateStamp});_exports.TemplateStamp=TemplateStamp;var templateStamp={TemplateStamp:TemplateStamp};// from multiple properties in the same turn
_exports.$templateStamp=templateStamp;var dedupeId$1=0,NOOP=[],TYPES={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},COMPUTE_INFO="__computeInfo",capitalAttributeRegex=/[A-Z]/,DataTrigger,DataEffect;//eslint-disable-line no-unused-vars
/**
 * Ensures that the model has an own-property map of effects for the given type.
 * The model may be a prototype or an instance.
 *
 * Property effects are stored as arrays of effects by property in a map,
 * by named type on the model. e.g.
 *
 *   __computeEffects: {
 *     foo: [ ... ],
 *     bar: [ ... ]
 *   }
 *
 * If the model does not yet have an effect map for the type, one is created
 * and returned.  If it does, but it is not an own property (i.e. the
 * prototype had effects), the the map is deeply cloned and the copy is
 * set on the model and returned, ready for new effects to be added.
 *
 * @param {Object} model Prototype or instance
 * @param {string} type Property effect type
 * @param {boolean=} cloneArrays Clone any arrays assigned to the map when
 *   extending a superclass map onto this subclass
 * @return {Object} The own-property map of effects for the given type
 * @private
 */function ensureOwnEffectMap(model,type,cloneArrays){var effects=model[type];if(!effects){effects=model[type]={}}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);if(cloneArrays){for(var _p8 in effects){for(var protoFx=effects[_p8],instFx=effects[_p8]=Array(protoFx.length),_i6=0;_i6<protoFx.length;_i6++){instFx[_i6]=protoFx[_i6]}}}}return effects}// -- effects ----------------------------------------------
/**
 * Runs all effects of a given type for the given set of property changes
 * on an instance.
 *
 * @param {!Polymer_PropertyEffects} inst The instance with effects to run
 * @param {?Object} effects Object map of property-to-Array of effects
 * @param {?Object} props Bag of current property changes
 * @param {?Object=} oldProps Bag of previous values for changed properties
 * @param {boolean=} hasPaths True with `props` contains one or more paths
 * @param {*=} extraArgs Additional metadata to pass to effect function
 * @return {boolean} True if an effect ran for this property
 * @private
 */function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){var ran=!1,id=dedupeId$1++;for(var prop in props){// Inline `runEffectsForProperty` for perf.
var rootProperty=hasPaths?root(prop):prop,fxs=effects[rootProperty];if(fxs){for(var _i7=0,l=fxs.length,fx;_i7<l&&(fx=fxs[_i7]);_i7++){if((!fx.info||fx.info.lastRun!==id)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=id}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=!0}}}}return ran}return!1}/**
   * Runs a list of effects for a given property.
   *
   * @param {!Polymer_PropertyEffects} inst The instance with effects to run
   * @param {!Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){var ran=!1,rootProperty=hasPaths?root(prop):prop,fxs=effects[rootProperty];if(fxs){for(var _i8=0,l=fxs.length,fx;_i8<l&&(fx=fxs[_i8]);_i8++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=!0}}}return ran}/**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {?DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */function pathMatchesTrigger(path,trigger){if(trigger){var triggerPath=/** @type {string} */trigger.name;return triggerPath==path||!!(trigger.structured&&isAncestor(triggerPath,path))||!!(trigger.wildcard&&isDescendant(triggerPath,path))}else{return!0}}/**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runObserverEffect(inst,property,props,oldProps,info){var fn="string"===typeof info.method?inst[info.method]:info.method,changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp])}else if(!info.dynamicFn){console.warn("observer method `"+info.method+"` not defined")}}/**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!Polymer_PropertyEffects} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){// Notify
var fxs=inst[TYPES.NOTIFY],notified,id=dedupeId$1++;// Try normal notify effects; if none, fall back to try path notification
for(var prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=!0}else if(hasPaths&&notifyPath(inst,prop,props)){notified=!0}}}// Flush host if we actually notified and host was batching
// And the host has already initialized clients; this prevents
// an issue with a host observing data changes before clients are ready.
var host;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties()}}/**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!Polymer_PropertyEffects} inst The element from which to fire the
   *     event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */function notifyPath(inst,path,props){var rootProperty=root(path);if(rootProperty!==path){var eventName=camelToDashCase(rootProperty)+"-changed";dispatchNotifyEvent(inst,eventName,props[path],path);return!0}return!1}/**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!Polymer_PropertyEffects} inst The element from which to fire the
   *     event
   * @param {string} eventName The name of the event to send
   *     ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property
   *     changed, the path that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */function dispatchNotifyEvent(inst,eventName,value,path){var detail={value:value,queueProperty:!0};if(path){detail.path=path}// As a performance optimization, we could elide the wrap here since notifying
// events are non-bubbling and shouldn't need retargeting. However, a very
// small number of internal tests failed in obscure ways, which may indicate
// user code relied on timing differences resulting from ShadyDOM flushing
// as a result of the wrapped `dispatchEvent`.
wrap$1(/** @type {!HTMLElement} */inst).dispatchEvent(new CustomEvent(eventName,{detail:detail}))}/**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){var rootProperty=hasPaths?root(property):property,path=rootProperty!=property?property:null,value=path?_get(inst,path):inst.__data[property];if(path&&value===void 0){value=props[property];// specifically for .splices
}dispatchNotifyEvent(inst,info.eventName,value,path)}/**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!Polymer_PropertyEffects} inst Host element instance handling the
   *     notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */function handleNotification(event,inst,fromProp,toPath,negate){var value,detail=/** @type {Object} */event.detail,fromPath=detail&&detail.path;if(fromPath){toPath=translate(fromProp,toPath,fromPath);value=detail&&detail.value}else{value=event.currentTarget[fromProp]}value=negate?!value:value;if(!inst[TYPES.READ_ONLY]||!inst[TYPES.READ_ONLY][toPath]){if(inst._setPendingPropertyOrPath(toPath,value,!0,!!fromPath)&&(!detail||!detail.queueProperty)){inst._invalidateProperties()}}}/**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runReflectEffect(inst,property,props,oldProps,info){var value=inst.__data[property];if(sanitizeDOMValue){value=sanitizeDOMValue(value,info.attrName,"attribute",/** @type {Node} */inst)}inst._propertyToAttribute(property,info.attrName,value)}/**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {?Object} changedProps Bag of changed properties
   * @param {?Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runComputedEffects(inst,changedProps,oldProps,hasPaths){var computeEffects=inst[TYPES.COMPUTE];if(computeEffects){if(orderedComputed){// Runs computed effects in efficient order by keeping a topologically-
// sorted queue of compute effects to run, and inserting subsequently
// invalidated effects as they are run
dedupeId$1++;var order=getComputedOrder(inst),queue=[];for(var _p9 in changedProps){enqueueEffectsFor(_p9,computeEffects,queue,order,hasPaths)}var info;while(info=queue.shift()){if(runComputedEffect(inst,"",changedProps,oldProps,info)){enqueueEffectsFor(info.methodInfo,computeEffects,queue,order,hasPaths)}}Object.assign(/** @type {!Object} */oldProps,inst.__dataOld);Object.assign(/** @type {!Object} */changedProps,inst.__dataPending);inst.__dataPending=null}else{// Original Polymer 2.x computed effects order, which continues running
// effects until no further computed properties have been invalidated
var inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(/** @type {!Object} */oldProps,inst.__dataOld);Object.assign(/** @type {!Object} */changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null}}}}/**
   * Inserts a computed effect into a queue, given the specified order. Performs
   * the insert using a binary search.
   *
   * Used by `orderedComputed: true` computed property algorithm.
   *
   * @param {Object} info Property effects metadata
   * @param {Array<Object>} queue Ordered queue of effects
   * @param {Map<string,number>} order Map of computed property name->topological
   *   sort order
   */var insertEffect=function insertEffect(info,queue,order){var start=0,end=queue.length-1,idx=-1;while(start<=end){var mid=start+end>>1,cmp=order.get(queue[mid].methodInfo)-order.get(info.methodInfo);// Note `methodInfo` is where the computed property name is stored in
// the effect metadata
if(0>cmp){start=mid+1}else if(0<cmp){end=mid-1}else{idx=mid;break}}if(0>idx){idx=end+1}queue.splice(idx,0,info)},enqueueEffectsFor=function enqueueEffectsFor(prop,computeEffects,queue,order,hasPaths){var rootProperty=hasPaths?root(prop):prop,fxs=computeEffects[rootProperty];if(fxs){for(var _i9=0,fx;_i9<fxs.length;_i9++){fx=fxs[_i9];if(fx.info.lastRun!==dedupeId$1&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){fx.info.lastRun=dedupeId$1;insertEffect(fx.info,queue,order)}}}};/**
    * Inserts all downstream computed effects invalidated by the specified property
    * into the topologically-sorted queue of effects to be run.
    *
    * Used by `orderedComputed: true` computed property algorithm.
    *
    * @param {string} prop Property name
    * @param {Object} computeEffects Computed effects for this element
    * @param {Array<Object>} queue Topologically-sorted queue of computed effects
    *   to be run
    * @param {Map<string,number>} order Map of computed property name->topological
    *   sort order
    * @param {boolean} hasPaths True with `changedProps` contains one or more paths
    */ /**
    * Generates and retrieves a memoized map of computed property name to its
    * topologically-sorted order.
    *
    * The map is generated by first assigning a "dependency count" to each property
    * (defined as number properties it depends on, including its method for
    * "dynamic functions"). Any properties that have no dependencies are added to
    * the `ready` queue, which are properties whose order can be added to the final
    * order map. Properties are popped off the `ready` queue one by one and a.) added as
    * the next property in the order map, and b.) each property that it is a
    * dependency for has its dep count decremented (and if that property's dep
    * count goes to zero, it is added to the `ready` queue), until all properties
    * have been visited and ordered.
    *
    * Used by `orderedComputed: true` computed property algorithm.
    *
    * @param {!Polymer_PropertyEffects} inst The instance to retrieve the computed
    *   effect order for.
    * @return {Map<string,number>} Map of computed property name->topological sort
    *   order
    */function getComputedOrder(inst){var ordered=inst.constructor.__orderedComputedDeps;if(!ordered){(function(){ordered=new Map;var effects=inst[TYPES.COMPUTE],_dependencyCounts=dependencyCounts(inst),counts=_dependencyCounts.counts,ready=_dependencyCounts.ready,total=_dependencyCounts.total,curr;while(curr=ready.shift()){ordered.set(curr,ordered.size);var computedByCurr=effects[curr];if(computedByCurr){computedByCurr.forEach(function(fx){// Note `methodInfo` is where the computed property name is stored
var computedProp=fx.info.methodInfo;--total;if(0===--counts[computedProp]){ready.push(computedProp)}})}}if(0!==total){var el=/** @type {HTMLElement} */inst;console.warn("Computed graph for ".concat(el.localName," incomplete; circular?"))}inst.constructor.__orderedComputedDeps=ordered})()}return ordered}/**
   * Generates a map of property-to-dependency count (`counts`, where "dependency
   * count" is the number of dependencies a given property has assuming it is a
   * computed property, otherwise 0).  It also returns a pre-populated list of
   * `ready` properties that have no dependencies and a `total` count, which is
   * used for error-checking the graph.
   *
   * Used by `orderedComputed: true` computed property algorithm.
   *
   * @param {!Polymer_PropertyEffects} inst The instance to generate dependency
   *   counts for.
   * @return {!Object} Object containing `counts` map (property-to-dependency
   *   count) and pre-populated `ready` array of properties that had zero
   *   dependencies.
   */function dependencyCounts(inst){var infoForComputed=inst[COMPUTE_INFO],counts={},computedDeps=inst[TYPES.COMPUTE],ready=[],total=0;// Count dependencies for each computed property
for(var _p10 in infoForComputed){var info=infoForComputed[_p10];// Be sure to add the method name itself in case of "dynamic functions"
total+=counts[_p10]=info.args.filter(function(a){return!a.literal}).length+(info.dynamicFn?1:0)}// Build list of ready properties (that aren't themselves computed)
for(var _p11 in computedDeps){if(!infoForComputed[_p11]){ready.push(_p11)}}return{counts:counts,ready:ready,total:total}}/**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {?Object} changedProps Bag of current property changes
   * @param {?Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {boolean} True when the property being computed changed
   * @private
   */function runComputedEffect(inst,property,changedProps,oldProps,info){// Dirty check dependencies and run if any invalid
var result=runMethodEffect(inst,property,changedProps,oldProps,info);// Abort if method returns a no-op result
if(result===NOOP){return!1}var computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){return inst._setPendingProperty(computedProp,result,!0)}else{inst[computedProp]=result;return!1}}/**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!Polymer_PropertyEffects} inst The instance whose props are changing
   * @param {string} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */function computeLinkedPaths(inst,path,value){var links=inst.__dataLinkedPaths;if(links){var link;for(var a in links){var b=links[a];if(isDescendant(a,path)){link=translate(a,b,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}else if(isDescendant(b,path)){link=translate(b,a,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}}}}// -- bindings ----------------------------------------------
/**
 * Adds binding metadata to the current `nodeInfo`, and binding effects
 * for all part dependencies to `templateInfo`.
 *
 * @param {Function} constructor Class that `_parseTemplate` is currently
 *   running on
 * @param {TemplateInfo} templateInfo Template metadata for current template
 * @param {NodeInfo} nodeInfo Node metadata for current template node
 * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
 * @param {string} target Target property name
 * @param {!Array<!BindingPart>} parts Array of binding part metadata
 * @param {string=} literal Literal text surrounding binding parts (specified
 *   only for 'property' bindings, since these must be initialized as part
 *   of boot-up)
 * @return {void}
 * @private
 */function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){// Create binding metadata and add to nodeInfo
nodeInfo.bindings=nodeInfo.bindings||[];var/** Binding */binding={kind:kind,target:target,parts:parts,literal:literal,isCompound:1!==parts.length};nodeInfo.bindings.push(binding);// Add listener info to binding metadata
if(shouldAddListener(binding)){var _binding$parts$=binding.parts[0],event=_binding$parts$.event,negate=_binding$parts$.negate;binding.listenerEvent=event||camelToDashCase(target)+"-changed";binding.listenerNegate=negate}// Add "propagate" property effects to templateInfo
for(var index=templateInfo.nodeInfoList.length,_i10=0,part;_i10<binding.parts.length;_i10++){part=binding.parts[_i10];part.compoundIndex=_i10;addEffectForBindingPart(constructor,templateInfo,binding,part,index)}}/**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if("attribute"===binding.kind&&"-"===binding.target[0]){console.warn("Cannot set attribute "+binding.target+" because \"-\" is not a valid attribute starting character")}else{for(var dependencies=part.dependencies,info={index:index,binding:binding,part:part,evaluator:constructor},j=0,trigger;j<dependencies.length;j++){trigger=dependencies[j];if("string"==typeof trigger){trigger=parseArg(trigger);trigger.wildcard=!0}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info:info,trigger:trigger})}}}}/**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){var node=nodeList[info.index],binding=info.binding,part=info.part;// Subpath notification: transform path and set to client
// e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
if(hasPaths&&part.source&&path.length>part.source.length&&"property"==binding.kind&&!binding.isCompound&&node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){var value=props[path];path=translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,!1,!0)){inst._enqueueClient(node)}}else{var _value=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);// Propagate value to child
// Abort if value is a no-op result
if(_value!==NOOP){applyBindingValue(inst,node,binding,part,_value)}}}/**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!Polymer_PropertyEffects} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(sanitizeDOMValue){value=sanitizeDOMValue(value,binding.target,binding.kind,node)}if("attribute"==binding.kind){// Attribute binding
inst._valueToNodeAttribute(/** @type {Element} */node,value,binding.target)}else{// Property binding
var prop=binding.target;if(node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node[TYPES.READ_ONLY]||!node[TYPES.READ_ONLY][prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node)}}}else{// In legacy no-batching mode, bindings applied before dataReady are
// equivalent to the "apply config" phase, which only set managed props
inst._setUnmanagedPropertyToNode(node,prop,value)}}}/**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */function computeBindingValue(node,value,binding,part){if(binding.isCompound){var storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join("")}if("attribute"!==binding.kind){// Some browsers serialize `undefined` to `"undefined"`
if("textContent"===binding.target||"value"===binding.target&&("input"===node.localName||"textarea"===node.localName)){value=value==void 0?"":value}}return value}/**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */function shouldAddListener(binding){return!!binding.target&&"attribute"!=binding.kind&&"text"!=binding.kind&&!binding.isCompound&&"{"===binding.parts[0].mode}/**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!Polymer_PropertyEffects} inst Instance that bas been previously
   *     bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */function setupBindings(inst,templateInfo){// Setup compound storage, dataHost, and notify listeners
var nodeList=templateInfo.nodeList,nodeInfoList=templateInfo.nodeInfoList;if(nodeInfoList.length){for(var _i11=0;_i11<nodeInfoList.length;_i11++){var info=nodeInfoList[_i11],node=nodeList[_i11],bindings=info.bindings;if(bindings){for(var _i12=0,binding;_i12<bindings.length;_i12++){binding=bindings[_i12];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding)}}// This ensures all bound elements have a host set, regardless
// of whether they upgrade synchronous to creation
node.__dataHost=inst}}}/**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function setupCompoundStorage(node,binding){if(binding.isCompound){// Create compound storage map
for(var storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={}),parts=binding.parts,literals=Array(parts.length),j=0;j<parts.length;j++){literals[j]=parts[j].literal}var target=binding.target;storage[target]=literals;// Configure properties with their literal parts
if(binding.literal&&"property"==binding.kind){// Note, className needs style scoping so this needs wrapping.
// We may also want to consider doing this for `textContent` and
// `innerHTML`.
if("className"===target){node=wrap$1(node)}node[target]=binding.literal}}}/**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!Polymer_PropertyEffects} inst Host element instance to handle
   *     notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function addNotifyListener(node,inst,binding){if(binding.listenerEvent){var part=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,part.source,part.negate)})}}// -- for method-based effects (complexObserver & computed) --------------
/**
 * Adds property effects for each argument in the method signature (and
 * optionally, for the method name if `dynamic` is true) that calls the
 * provided effect function.
 *
 * @param {Element | Object} model Prototype or instance
 * @param {!MethodSignature} sig Method signature metadata
 * @param {string} type Type of property effect to add
 * @param {Function} effectFn Function to run when arguments change
 * @param {*=} methodInfo Effect-specific information to be included in
 *   method effect metadata
 * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
 *   method names should be included as a dependency to the effect. Note,
 *   defaults to true if the signature is static (sig.static is true).
 * @return {!Object} Effect metadata for this method effect
 * @private
 */function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&("object"!==babelHelpers.typeof(dynamicFn)||dynamicFn[sig.methodName]);for(var info={methodName:sig.methodName,args:sig.args,methodInfo:methodInfo,dynamicFn:dynamicFn},_i13=0,arg;_i13<sig.args.length&&(arg=sig.args[_i13]);_i13++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg})}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info})}return info}/**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */function runMethodEffect(inst,property,props,oldProps,info){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
var context=inst._methodHost||inst,fn=context[info.methodName];if(fn){var args=inst._marshalArgs(info.args,property,props);return args===NOOP?NOOP:fn.apply(context,args)}else if(!info.dynamicFn){console.warn("method `"+info.methodName+"` not defined")}}var emptyArray=[],IDENT="(?:"+"[a-zA-Z_$][\\w.:$\\-*]*"+")",NUMBER="(?:"+"[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?"+")",SQUOTE_STRING="(?:"+"'(?:[^'\\\\]|\\\\.)*'"+")",DQUOTE_STRING="(?:"+"\"(?:[^\"\\\\]|\\\\.)*\""+")",STRING="(?:"+SQUOTE_STRING+"|"+DQUOTE_STRING+")",ARGUMENT="(?:("+IDENT+"|"+NUMBER+"|"+STRING+")\\s*"+")",ARGUMENTS="(?:"+ARGUMENT+"(?:,\\s*"+ARGUMENT+")*"+")",ARGUMENT_LIST="(?:"+"\\(\\s*"+"(?:"+ARGUMENTS+"?"+")"+"\\)\\s*"+")",BINDING="("+IDENT+"\\s*"+ARGUMENT_LIST+"?"+")",OPEN_BRACKET="(\\[\\[|{{)"+"\\s*",CLOSE_BRACKET="(?:]]|}})",NEGATE="(?:(!)\\s*)?",EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET,bindingRegex=new RegExp(EXPRESSION,"g");// Regular expressions used for binding
/**
                                                   * Create a string from binding parts of all the literal parts
                                                   *
                                                   * @param {!Array<BindingPart>} parts All parts to stringify
                                                   * @return {string} String made from the literal parts
                                                   */function literalFromParts(parts){for(var s="",_i14=0,literal;_i14<parts.length;_i14++){literal=parts[_i14].literal;s+=literal||""}return s}/**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */function parseMethod(expression){// tries to match valid javascript property names
var m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){var methodName=m[1],sig={methodName:methodName,static:!0,args:emptyArray};if(m[2].trim()){// replace escaped commas with comma entity, split on un-escaped commas
var args=m[2].replace(/\\,/g,"&comma;").split(",");return parseArgs(args,sig)}else{return sig}}return null}/**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){var arg=parseArg(rawArg);if(!arg.literal){sig.static=!1}return arg},this);return sig}/**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */function parseArg(rawArg){// clean up whitespace
var arg=rawArg.trim()// replace comma entity with comma
.replace(/&comma;/g,",")// repair extra escape sequences; note only commas strictly need
// escaping, but we allow any other char to be escaped since its
// likely users will do this
.replace(/\\(.)/g,"$1"),a={name:arg,value:"",literal:!1},fc=arg[0];// basic argument descriptor
if("-"===fc){fc=arg[1]}if("0"<=fc&&"9">=fc){fc="#"}switch(fc){case"'":case"\"":a.value=arg.slice(1,-1);a.literal=!0;break;case"#":a.value=+arg;a.literal=!0;break;}// if not literal, look for structured path
if(!a.literal){a.rootProperty=root(arg);// detect structured path (has dots)
a.structured=isPath(arg);if(a.structured){a.wildcard=".*"==arg.slice(-2);if(a.wildcard){a.name=arg.slice(0,-2)}}}return a}function getArgValue(data,props,path){var value=_get(data,path);// when data is not stored e.g. `splices`, get the value from changedProps
// TODO(kschaaf): Note, this can cause a rare issue where the wildcard
// info.value could pull a stale value out of changedProps during a reentrant
// change that sets the value back to undefined.
// https://github.com/Polymer/polymer/issues/5479
if(value===void 0){value=props[path]}return value}// data api
/**
 * Sends array splice notifications (`.splices` and `.length`)
 *
 * Note: this implementation only accepts normalized paths
 *
 * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
 * @param {Array} array The array the mutations occurred on
 * @param {string} path The path to the array that was mutated
 * @param {Array} splices Array of splice records
 * @return {void}
 * @private
 */function _notifySplices(inst,array,path,splices){var splicesData={indexSplices:splices};// Legacy behavior stored splices in `__data__` so it was *not* ephemeral.
// To match this behavior, we store splices directly on the array.
if(legacyUndefined&&!inst._overrideLegacyUndefined){array.splices=splicesData}inst.notifyPath(path+".splices",splicesData);inst.notifyPath(path+".length",array.length);// Clear splice data only when it's stored on the array.
if(legacyUndefined&&!inst._overrideLegacyUndefined){splicesData.indexSplices=[]}}/**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */function notifySplice(inst,array,path,index,addedCount,removed){_notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:"splice"}])}/**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */function upper(name){return name[0].toUpperCase()+name.substring(1)}/**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin TemplateStamp
   * @appliesMixin PropertyAccessors
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */var PropertyEffects=dedupingMixin(function(superClass){/**
   * @constructor
   * @implements {Polymer_PropertyAccessors}
   * @implements {Polymer_TemplateStamp}
   * @unrestricted
   * @private
   */var propertyEffectsBase=TemplateStamp(PropertyAccessors(superClass)),PropertyEffects=/*#__PURE__*/function(_propertyEffectsBase){babelHelpers.inherits(PropertyEffects,_propertyEffectsBase);function PropertyEffects(){var _this9;babelHelpers.classCallCheck(this,PropertyEffects);_this9=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyEffects).call(this));/** @type {boolean} */ // Used to identify users of this mixin, ala instanceof
_this9.__isPropertyEffectsClient=!0;/** @type {boolean} */_this9.__dataClientsReady;/** @type {Array} */_this9.__dataPendingClients;/** @type {Object} */_this9.__dataToNotify;/** @type {Object} */_this9.__dataLinkedPaths;/** @type {boolean} */_this9.__dataHasPaths;/** @type {Object} */_this9.__dataCompoundStorage;/** @type {Polymer_PropertyEffects} */_this9.__dataHost;/** @type {!Object} */_this9.__dataTemp;/** @type {boolean} */_this9.__dataClientsInitialized;/** @type {!Object} */_this9.__data;/** @type {!Object|null} */_this9.__dataPending;/** @type {!Object} */_this9.__dataOld;/** @type {Object} */_this9.__computeEffects;/** @type {Object} */_this9.__computeInfo;/** @type {Object} */_this9.__reflectEffects;/** @type {Object} */_this9.__notifyEffects;/** @type {Object} */_this9.__propagateEffects;/** @type {Object} */_this9.__observeEffects;/** @type {Object} */_this9.__readOnly;/** @type {!TemplateInfo} */_this9.__templateInfo;/** @type {boolean} */_this9._overrideLegacyUndefined;return _this9}babelHelpers.createClass(PropertyEffects,[{key:"_initializeProperties",/**
       * @override
       * @return {void}
       */value:function _initializeProperties(){babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_initializeProperties",this).call(this);this._registerHost();this.__dataClientsReady=!1;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=!1;// May be set on instance prior to upgrade
this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=!1}},{key:"_registerHost",value:function _registerHost(){if(hostStack.length){var host=hostStack[hostStack.length-1];host._enqueueClient(this);// This ensures even non-bound elements have a host set, as
// long as they upgrade synchronously
this.__dataHost=host}}/**
       * Overrides `PropertyAccessors` implementation to provide a
       * more efficient implementation of initializing properties from
       * the prototype on the instance.
       *
       * @override
       * @param {Object} props Properties to initialize on the prototype
       * @return {void}
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={}}/**
       * Overrides `PropertyAccessors` implementation to avoid setting
       * `_setProperty`'s `shouldNotify: true`.
       *
       * @override
       * @param {Object} props Properties to initialize on the instance
       * @return {void}
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){var readOnly=this[TYPES.READ_ONLY];for(var prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop]}}}// Prototype setup ----------------------------------------
/**
     * Equivalent to static `addPropertyEffect` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     */},{key:"_addPropertyEffect",value:function _addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);// effects are accumulated into arrays per property based on type
var effects=ensureOwnEffectMap(this,type,!0)[property];if(!effects){effects=this[type][property]=[]}effects.push(effect)}/**
       * Removes the given property effect.
       *
       * @override
       * @param {string} property Property the effect was associated with
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object to remove
       * @return {void}
       */},{key:"_removePropertyEffect",value:function _removePropertyEffect(property,type,effect){var effects=ensureOwnEffectMap(this,type,!0)[property],idx=effects.indexOf(effect);if(0<=idx){effects.splice(idx,1)}}/**
       * Returns whether the current prototype/instance has a property effect
       * of a certain type.
       *
       * @override
       * @param {string} property Property name
       * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */},{key:"_hasPropertyEffect",value:function _hasPropertyEffect(property,type){var effects=this[type];return!!(effects&&effects[property])}/**
       * Returns whether the current prototype/instance has a "read only"
       * accessor for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */},{key:"_hasReadOnlyEffect",value:function _hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY)}/**
       * Returns whether the current prototype/instance has a "notify"
       * property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */},{key:"_hasNotifyEffect",value:function _hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY)}/**
       * Returns whether the current prototype/instance has a "reflect to
       * attribute" property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */},{key:"_hasReflectEffect",value:function _hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT)}/**
       * Returns whether the current prototype/instance has a "computed"
       * property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */},{key:"_hasComputedEffect",value:function _hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE)}// Runtime ----------------------------------------
/**
     * Sets a pending property or path.  If the root property of the path in
     * question had no accessor, the path is set, otherwise it is enqueued
     * via `_setPendingProperty`.
     *
     * This function isolates relatively expensive functionality necessary
     * for the public API (`set`, `setProperties`, `notifyPath`, and property
     * change listeners via {{...}} bindings), such that it is only done
     * when paths enter the system, and not at every propagation step.  It
     * also sets a `__dataHasPaths` flag on the instance which is used to
     * fast-path slower path-matching code in the property effects host paths.
     *
     * `path` can be a path string or array of path parts as accepted by the
     * public API.
     *
     * @override
     * @param {string | !Array<number|string>} path Path to set
     * @param {*} value Value to set
     * @param {boolean=} shouldNotify Set to true if this change should
     *  cause a property notification event dispatch
     * @param {boolean=} isPathNotification If the path being set is a path
     *   notification of an already changed value, as opposed to a request
     *   to set and notify the change.  In the latter `false` case, a dirty
     *   check is performed and then the value is set to the path before
     *   enqueuing the pending property change.
     * @return {boolean} Returns true if the property/path was enqueued in
     *   the pending changes bag.
     * @protected
     */},{key:"_setPendingPropertyOrPath",value:function _setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||root(Array.isArray(path)?path[0]:path)!==path){// Dirty check changes being set to a path against the actual object,
// since this is the entry point for paths into the system; from here
// the only dirty checks are against the `__dataTemp` cache to prevent
// duplicate work in the same turn only. Note, if this was a notification
// of a change already set to a path (isPathNotification: true),
// we always let the change through and skip the `set` since it was
// already dirty checked at the point of entry and the underlying
// object has already been updated
if(!isPathNotification){var old=_get(this,path);path=/** @type {string} */_set(this,path,value);// Use property-accessor's simpler dirty check
if(!path||!babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_shouldPropertyChange",this).call(this,path,value,old)){return!1}}this.__dataHasPaths=!0;if(this._setPendingProperty(/**@type{string}*/path,value,shouldNotify)){computeLinkedPaths(this,/**@type{string}*/path,value);return!0}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(/**@type{string}*/path,value,shouldNotify)}else{this[path]=value}}return!1}/**
       * Applies a value to a non-Polymer element/node's property.
       *
       * The implementation makes a best-effort at binding interop:
       * Some native element properties have side-effects when
       * re-setting the same value (e.g. setting `<input>.value` resets the
       * cursor position), so we do a dirty-check before setting the value.
       * However, for better interop with non-Polymer custom elements that
       * accept objects, we explicitly re-set object changes coming from the
       * Polymer world (which may include deep object changes without the
       * top reference changing), erring on the side of providing more
       * information.
       *
       * Users may override this method to provide alternate approaches.
       *
       * @override
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){// It is a judgment call that resetting primitives is
// "bad" and resettings objects is also "good"; alternatively we could
// implement a whitelist of tag & property values that should never
// be reset (e.g. <input>.value && <select>.value)
if(value!==node[prop]||"object"==babelHelpers.typeof(value)){// Note, className needs style scoping so this needs wrapping.
if("className"===prop){node=/** @type {!Node} */wrap$1(node)}node[prop]=value}}/**
       * Overrides the `PropertiesChanged` implementation to introduce special
       * dirty check logic depending on the property & value being set:
       *
       * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
       *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
       * 2. Object set to simple property (e.g. 'prop': {...})
       *    Stored in `__dataTemp` and `__data`, dirty checked against
       *    `__dataTemp` by default implementation of `_shouldPropertyChange`
       * 3. Primitive value set to simple property (e.g. 'prop': 42)
       *    Stored in `__data`, dirty checked against `__data`
       *
       * The dirty-check is important to prevent cycles due to two-way
       * notification, but paths and objects are only dirty checked against any
       * previous value set during this turn via a "temporary cache" that is
       * cleared when the last `_propertiesChanged` exits. This is so:
       * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
       *    due to array mutations like shift/unshift/splice; this is fine
       *    since path changes are dirty-checked at user entry points like `set`
       * b. dirty-checking for objects only lasts one turn to allow the user
       *    to mutate the object in-place and re-set it with the same identity
       *    and have all sub-properties re-propagated in a subsequent turn.
       *
       * The temp cache is not necessarily sufficient to prevent invalid array
       * paths, since a splice can happen during the same turn (with pathological
       * user code); we could introduce a "fixup" for temporarily cached array
       * paths if needed: https://github.com/Polymer/polymer/issues/4227
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify True if property should fire notification
       *   event (applies only for `notify: true` properties)
       * @return {boolean} Returns true if the property changed
       */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,shouldNotify){var propIsPath=this.__dataHasPaths&&isPath(property),prevProps=propIsPath?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}// Ensure old is captured from the last turn
if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property]}// Paths are stored in temporary cache (cleared at end of turn),
// which is used for dirty-checking, all others stored in __data
if(propIsPath){this.__dataTemp[property]=value}else{this.__data[property]=value}// All changes go into pending property bag, passed to _propertiesChanged
this.__dataPending[property]=value;// Track properties that should notify separately
if(propIsPath||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify}return!0}return!1}/**
       * Overrides base implementation to ensure all accessors set `shouldNotify`
       * to true, for per-property notification tracking.
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value,!0)){this._invalidateProperties()}}/**
       * Overrides `PropertyAccessor`'s default async queuing of
       * `_propertiesChanged`: if `__dataReady` is false (has not yet been
       * manually flushed), the function no-ops; otherwise flushes
       * `_propertiesChanged` synchronously.
       *
       * @override
       * @return {void}
       */},{key:"_invalidateProperties",value:function _invalidateProperties(){if(this.__dataReady){this._flushProperties()}}/**
       * Enqueues the given client on a list of pending clients, whose
       * pending property changes can later be flushed via a call to
       * `_flushClients`.
       *
       * @override
       * @param {Object} client PropertyEffects client to enqueue
       * @return {void}
       * @protected
       */},{key:"_enqueueClient",value:function _enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client)}}/**
       * Flushes any clients previously enqueued via `_enqueueClient`, causing
       * their `_flushProperties` method to run.
       *
       * @override
       * @return {void}
       * @protected
       */},{key:"_flushClients",value:function _flushClients(){if(!this.__dataClientsReady){this.__dataClientsReady=!0;this._readyClients();// Override point where accessors are turned on; importantly,
// this is after clients have fully readied, providing a guarantee
// that any property effects occur only after all clients are ready.
this.__dataReady=!0}else{this.__enableOrFlushClients()}}// NOTE: We ensure clients either enable or flush as appropriate. This
// handles two corner cases:
// (1) clients flush properly when connected/enabled before the host
// enables; e.g.
//   (a) Templatize stamps with no properties and does not flush and
//   (b) the instance is inserted into dom and
//   (c) then the instance flushes.
// (2) clients enable properly when not connected/enabled when the host
// flushes; e.g.
//   (a) a template is runtime stamped and not yet connected/enabled
//   (b) a host sets a property, causing stamped dom to flush
//   (c) the stamped dom enables.
},{key:"__enableOrFlushClients",value:function __enableOrFlushClients(){var clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(var _i15=0,client;_i15<clients.length;_i15++){client=clients[_i15];if(!client.__dataEnabled){client._enableProperties()}else if(client.__dataPending){client._flushProperties()}}}}/**
       * Perform any initial setup on client dom. Called before the first
       * `_flushProperties` call on client dom and before any element
       * observers are called.
       *
       * @override
       * @return {void}
       * @protected
       */},{key:"_readyClients",value:function _readyClients(){this.__enableOrFlushClients()}/**
       * Sets a bag of property changes to this instance, and
       * synchronously processes all effects of the properties as a batch.
       *
       * Property names must be simple properties, not paths.  Batched
       * path propagation is not supported.
       *
       * @override
       * @param {Object} props Bag of one or more key-value pairs whose key is
       *   a property and value is the new value to set for that property.
       * @param {boolean=} setReadOnly When true, any private values set in
       *   `props` will be set. By default, `setProperties` will not set
       *   `readOnly: true` root properties.
       * @return {void}
       * @public
       */},{key:"setProperties",value:function setProperties(props,setReadOnly){for(var _path in props){if(setReadOnly||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][_path]){//TODO(kschaaf): explicitly disallow paths in setProperty?
// wildcard observers currently only pass the first changed path
// in the `info` object, and you could do some odd things batching
// paths, e.g. {'foo.bar': {...}, 'foo': null}
this._setPendingPropertyOrPath(_path,props[_path],!0)}}this._invalidateProperties()}/**
       * Overrides `PropertyAccessors` so that property accessor
       * side effects are not enabled until after client dom is fully ready.
       * Also calls `_flushClients` callback to ensure client dom is enabled
       * that was not enabled as a result of flushing properties.
       *
       * @override
       * @return {void}
       */},{key:"ready",value:function ready(){// It is important that `super.ready()` is not called here as it
// immediately turns on accessors. Instead, we wait until `readyClients`
// to enable accessors to provide a guarantee that clients are ready
// before processing any accessors side effects.
this._flushProperties();// If no data was pending, `_flushProperties` will not `flushClients`
// so ensure this is done.
if(!this.__dataClientsReady){this._flushClients()}// Before ready, client notifications do not trigger _flushProperties.
// Therefore a flush is necessary here if data has been set.
if(this.__dataPending){this._flushProperties()}}/**
       * Implements `PropertyAccessors`'s properties changed callback.
       *
       * Runs each class of effects for the batch of changed properties in
       * a specific order (compute, propagate, reflect, observe, notify).
       *
       * @override
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){// ----------------------------
// let c = Object.getOwnPropertyNames(changedProps || {});
// window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
// if (window.debug) { debugger; }
// ----------------------------
var hasPaths=this.__dataHasPaths;this.__dataHasPaths=!1;var notifyProps;// Compute properties
runComputedEffects(this,changedProps,oldProps,hasPaths);// Clear notify properties prior to possible reentry (propagate, observe),
// but after computing effects have a chance to add to them
notifyProps=this.__dataToNotify;this.__dataToNotify=null;// Propagate properties to clients
this._propagatePropertyChanges(changedProps,oldProps,hasPaths);// Flush clients
this._flushClients();// Reflect properties
runEffects(this,this[TYPES.REFLECT],changedProps,oldProps,hasPaths);// Observe properties
runEffects(this,this[TYPES.OBSERVE],changedProps,oldProps,hasPaths);// Notify properties to host
if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths)}// Clear temporary cache at end of turn
if(1==this.__dataCounter){this.__dataTemp={}}// ----------------------------
// window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
// ----------------------------
}/**
       * Called to propagate any property changes to stamped template nodes
       * managed by this element.
       *
       * @override
       * @param {Object} changedProps Bag of changed properties
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {void}
       * @protected
       */},{key:"_propagatePropertyChanges",value:function _propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this[TYPES.PROPAGATE]){runEffects(this,this[TYPES.PROPAGATE],changedProps,oldProps,hasPaths)}if(this.__templateInfo){this._runEffectsForTemplate(this.__templateInfo,changedProps,oldProps,hasPaths)}}},{key:"_runEffectsForTemplate",value:function _runEffectsForTemplate(templateInfo,changedProps,oldProps,hasPaths){var _this10=this,baseRunEffects=function baseRunEffects(changedProps,hasPaths){runEffects(_this10,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);for(var info=templateInfo.firstChild;info;info=info.nextSibling){_this10._runEffectsForTemplate(info,changedProps,oldProps,hasPaths)}};if(templateInfo.runEffects){templateInfo.runEffects(baseRunEffects,changedProps,hasPaths)}else{baseRunEffects(changedProps,hasPaths)}}/**
       * Aliases one data path as another, such that path notifications from one
       * are routed to the other.
       *
       * @override
       * @param {string | !Array<string|number>} to Target path to link.
       * @param {string | !Array<string|number>} from Source path to link.
       * @return {void}
       * @public
       */},{key:"linkPaths",value:function linkPaths(to,from){to=normalize(to);from=normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from}/**
       * Removes a data path alias previously established with `_linkPaths`.
       *
       * Note, the path to unlink should be the target (`to`) used when
       * linking the paths.
       *
       * @override
       * @param {string | !Array<string|number>} path Target path to unlink.
       * @return {void}
       * @public
       */},{key:"unlinkPaths",value:function unlinkPaths(path){path=normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path]}}/**
       * Notify that an array has changed.
       *
       * Example:
       *
       *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
       *     ...
       *     this.items.splice(1, 1, {name: 'Sam'});
       *     this.items.push({name: 'Bob'});
       *     this.notifySplices('items', [
       *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1,
       *         object: this.items, type: 'splice' },
       *       { index: 3, removed: [], addedCount: 1,
       *         object: this.items, type: 'splice'}
       *     ]);
       *
       * @param {string} path Path that should be notified.
       * @param {Array} splices Array of splice records indicating ordered
       *   changes that occurred to the array. Each record should have the
       *   following fields:
       *    * index: index at which the change occurred
       *    * removed: array of items that were removed from this index
       *    * addedCount: number of new items added at this index
       *    * object: a reference to the array in question
       *    * type: the string literal 'splice'
       *
       *   Note that splice records _must_ be normalized such that they are
       *   reported in index order (raw results from `Object.observe` are not
       *   ordered and must be normalized/merged before notifying).
       *
       * @override
       * @return {void}
       * @public
       */},{key:"notifySplices",value:function notifySplices(path,splices){var info={path:""},array=/** @type {Array} */_get(this,path,info);_notifySplices(this,array,info.path,splices)}/**
       * Convenience method for reading a value from a path.
       *
       * Note, if any part in the path is undefined, this method returns
       * `undefined` (this method does not throw when dereferencing undefined
       * paths).
       *
       * @override
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `users.12.name` or `['users', 12, 'name']`).
       * @param {Object=} root Root object from which the path is evaluated.
       * @return {*} Value at the path, or `undefined` if any part of the path
       *   is undefined.
       * @public
       */},{key:"get",value:function get(path,root){return _get(root||this,path)}/**
       * Convenience method for setting a value to a path and notifying any
       * elements bound to the same path.
       *
       * Note, if any part in the path except for the last is undefined,
       * this method does nothing (this method does not throw when
       * dereferencing undefined paths).
       *
       * @override
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
       * @param {*} value Value to set at the specified path.
       * @param {Object=} root Root object from which the path is evaluated.
       *   When specified, no notification will occur.
       * @return {void}
       * @public
       */},{key:"set",value:function set(path,value,root){if(root){_set(root,path,value)}else{if(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][/** @type {string} */path]){if(this._setPendingPropertyOrPath(path,value,!0)){this._invalidateProperties()}}}}/**
       * Adds items onto the end of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to push onto array
       * @return {number} New length of the array.
       * @public
       */},{key:"push",value:function push(path){for(var info={path:""},array=/** @type {Array}*/_get(this,path,info),len=array.length,_len=arguments.length,items=Array(1<_len?_len-1:0),_key=1;_key<_len;_key++){items[_key-1]=arguments[_key]}var ret=array.push.apply(array,items);if(items.length){notifySplice(this,array,info.path,len,items.length,[])}return ret}/**
       * Removes an item from the end of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"pop",value:function pop(path){var info={path:""},array=/** @type {Array} */_get(this,path,info),hadLength=!!array.length,ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret])}return ret}/**
       * Starting from the start index specified, removes 0 or more items
       * from the array and inserts 0 or more new items in their place.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.splice`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {number} start Index from which to start removing/inserting.
       * @param {number=} deleteCount Number of items to remove.
       * @param {...*} items Items to insert into array.
       * @return {!Array} Array of removed items.
       * @public
       */},{key:"splice",value:function splice(path,start,deleteCount){for(var _len2=arguments.length,items=Array(3<_len2?_len2-3:0),_key2=3;_key2<_len2;_key2++){items[_key2-3]=arguments[_key2]}var info={path:""},array=/** @type {Array} */_get(this,path,info);// Normalize fancy native splice handling of crazy start values
if(0>start){start=array.length-Math.floor(-start)}else if(start){start=Math.floor(start)}// array.splice does different things based on the number of arguments
// you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
// do different things. In the former, the whole array is cleared. In the
// latter, no items are removed.
// This means that we need to detect whether 1. one of the arguments
// is actually passed in and then 2. determine how many arguments
// we should pass on to the native array.splice
//
var ret;// Omit any additional arguments if they were not passed in
if(2===arguments.length){ret=array.splice(start);// Either start was undefined and the others were defined, but in this
// case we can safely pass on all arguments
//
// Note: this includes the case where none of the arguments were passed in,
// e.g. this.splice('array'). However, if both start and deleteCount
// are undefined, array.splice will not modify the array (as expected)
}else{ret=array.splice.apply(array,[start,deleteCount].concat(items))}// At the end, check whether any items were passed in (e.g. insertions)
// or if the return array contains items (e.g. deletions).
// Only notify if items were added or deleted.
if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret)}return ret}/**
       * Removes an item from the beginning of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"shift",value:function shift(path){var info={path:""},array=/** @type {Array} */_get(this,path,info),hadLength=!!array.length,ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret])}return ret}/**
       * Adds items onto the beginning of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to insert info array
       * @return {number} New length of the array.
       * @public
       */},{key:"unshift",value:function unshift(path){for(var info={path:""},array=/** @type {Array} */_get(this,path,info),_len3=arguments.length,items=Array(1<_len3?_len3-1:0),_key3=1;_key3<_len3;_key3++){items[_key3-1]=arguments[_key3]}var ret=array.unshift.apply(array,items);if(items.length){notifySplice(this,array,info.path,0,items.length,[])}return ret}/**
       * Notify that a path has changed.
       *
       * Example:
       *
       *     this.item.user.name = 'Bob';
       *     this.notifyPath('item.user.name');
       *
       * @override
       * @param {string} path Path that should be notified.
       * @param {*=} value Value at the path (optional).
       * @return {void}
       * @public
       */},{key:"notifyPath",value:function notifyPath(path,value){/** @type {string} */var propPath;if(1==arguments.length){// Get value if not supplied
var info={path:""};value=_get(this,path,info);propPath=info.path}else if(Array.isArray(path)){// Normalize path if needed
propPath=normalize(path)}else{propPath=/** @type{string} */path}if(this._setPendingPropertyOrPath(propPath,value,!0,!0)){this._invalidateProperties()}}/**
       * Equivalent to static `createReadOnlyProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */},{key:"_createReadOnlyProperty",value:function _createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this["_set"+upper(property)]=/** @this {PropertyEffects} */function(value){this._setProperty(property,value)}}}/**
       * Equivalent to static `createPropertyObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method
       *     to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createPropertyObserver",value:function _createPropertyObserver(property,method,dynamicFn){var info={property:property,method:method,dynamicFn:!!dynamicFn};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(/** @type {string} */method,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:method}})}}/**
       * Equivalent to static `createMethodObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createMethodObserver",value:function _createMethodObserver(expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn)}/**
       * Equivalent to static `createNotifyingProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"_createNotifyingProperty",value:function _createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(property)+"-changed",property:property}})}/**
       * Equivalent to static `createReflectedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @suppress {missingProperties} go/missingfnprops
       */},{key:"_createReflectedProperty",value:function _createReflectedProperty(property){var attr=this.constructor.attributeNameForProperty(property);if("-"===attr[0]){console.warn("Property "+property+" cannot be reflected to attribute "+attr+" because \"-\" is not a valid starting attribute name. Use a lowercase first letter for the property instead.")}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}})}}/**
       * Equivalent to static `createComputedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createComputedProperty",value:function _createComputedProperty(property,expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'")}var info=createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn);// Effects are normally stored as map of dependency->effect, but for
// ordered computation, we also need tree of computedProp->dependencies
ensureOwnEffectMap(this,COMPUTE_INFO)[property]=info}/**
       * Gather the argument values for a method specified in the provided array
       * of argument metadata.
       *
       * The `path` and `value` arguments are used to fill in wildcard descriptor
       * when the method is being called as a result of a path notification.
       *
       * @param {!Array<!MethodArg>} args Array of argument metadata
       * @param {string} path Property/path name that triggered the method effect
       * @param {Object} props Bag of current property changes
       * @return {!Array<*>} Array of argument values
       * @private
       */},{key:"_marshalArgs",value:function _marshalArgs(args,path,props){for(var data=this.__data,values=[],_i16=0,l=args.length;_i16<l;_i16++){var _args$_i=args[_i16],name=_args$_i.name,structured=_args$_i.structured,wildcard=_args$_i.wildcard,value=_args$_i.value,literal=_args$_i.literal;if(!literal){if(wildcard){var _matches=isDescendant(name,path),pathValue=getArgValue(data,props,_matches?path:name);value={path:_matches?path:name,value:pathValue,base:_matches?_get(data,name):pathValue}}else{value=structured?getArgValue(data,props,name):data[name]}}// When the `legacyUndefined` flag is enabled, pass a no-op value
// so that the observer, computed property, or compound binding is aborted.
if(legacyUndefined&&!this._overrideLegacyUndefined&&value===void 0&&1<args.length){return NOOP}values[_i16]=value}return values}// -- static class methods ------------
/**
     * Ensures an accessor exists for the specified property, and adds
     * to a list of "property effects" that will run when the accessor for
     * the specified property is set.  Effects are grouped by "type", which
     * roughly corresponds to a phase in effect processing.  The effect
     * metadata should be in the following form:
     *
     *     {
     *       fn: effectFunction, // Reference to function to call to perform effect
     *       info: { ... }       // Effect metadata passed to function
     *       trigger: {          // Optional triggering metadata; if not provided
     *         name: string      // the property is treated as a wildcard
     *         structured: boolean
     *         wildcard: boolean
     *       }
     *     }
     *
     * Effects are called from `_propertiesChanged` in the following order by
     * type:
     *
     * 1. COMPUTE
     * 2. PROPAGATE
     * 3. REFLECT
     * 4. OBSERVE
     * 5. NOTIFY
     *
     * Effect functions are called with the following signature:
     *
     *     effectFunction(inst, path, props, oldProps, info, hasPaths)
     *
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     * @nocollapse
     */},{key:"_bindTemplate",// -- binding ----------------------------------------------
/*
     * Overview of binding flow:
     *
     * During finalization (`instanceBinding==false`, `wasPreBound==false`):
     *  `_bindTemplate(t, false)` called directly during finalization - parses
     *  the template (for the first time), and then assigns that _prototypical_
     *  template info to `__preboundTemplateInfo` _on the prototype_; note in
     *  this case `wasPreBound` is false; this is the first time we're binding
     *  it, thus we create accessors.
     *
     * During first stamping (`instanceBinding==true`, `wasPreBound==true`):
     *   `_stampTemplate` calls `_bindTemplate(t, true)`: the `templateInfo`
     *   returned matches the prebound one, and so this is `wasPreBound == true`
     *   state; thus we _skip_ creating accessors, but _do_ create an instance
     *   of the template info to serve as the start of our linked list (needs to
     *   be an instance, not the prototypical one, so that we can add `nodeList`
     *   to it to contain the `nodeInfo`-ordered list of instance nodes for
     *   bindings, and so we can chain runtime-stamped template infos off of
     *   it). At this point, the call to `_stampTemplate` calls
     *   `applyTemplateInfo` for each nested `<template>` found during parsing
     *   to hand prototypical `_templateInfo` to them; we also pass the _parent_
     *   `templateInfo` to the `<template>` so that we have the instance-time
     *   parent to link the `templateInfo` under in the case it was
     *   runtime-stamped.
     *
     * During subsequent runtime stamping (`instanceBinding==true`,
     *   `wasPreBound==false`): `_stampTemplate` calls `_bindTemplate(t, true)`
     *   - here `templateInfo` is guaranteed to _not_ match the prebound one,
     *   because it was either a different template altogether, or even if it
     *   was the same template, the step above created a instance of the info;
     *   in this case `wasPreBound == false`, so we _do_ create accessors, _and_
     *   link a instance into the linked list.
     */ /**
         * Equivalent to static `bindTemplate` API but can be called on an instance
         * to add effects at runtime.  See that method for full API docs.
         *
         * This method may be called on the prototype (for prototypical template
         * binding, to avoid creating accessors every instance) once per prototype,
         * and will be called with `runtimeBinding: true` by `_stampTemplate` to
         * create and link an instance of the template metadata associated with a
         * particular stamping.
         *
         * @override
         * @param {!HTMLTemplateElement} template Template containing binding
         * bindings
         * @param {boolean=} instanceBinding When false (default), performs
         * "prototypical" binding of the template and overwrites any previously
         * bound template for the class. When true (as passed from
         * `_stampTemplate`), the template info is instanced and linked into the
         * list of bound templates.
         * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
         * this is an instance of the prototypical template info
         * @protected
         * @suppress {missingProperties} go/missingfnprops
         */value:function _bindTemplate(template,instanceBinding){var templateInfo=this.constructor._parseTemplate(template),wasPreBound=this.__preBoundTemplateInfo==templateInfo;// Optimization: since this is called twice for proto-bound templates,
// don't attempt to recreate accessors if this template was pre-bound
if(!wasPreBound){for(var prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop)}}if(instanceBinding){// For instance-time binding, create instance of template metadata
// and link into tree of templates if necessary
templateInfo=/** @type {!TemplateInfo} */Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!this.__templateInfo){// Set the info to the root of the tree
this.__templateInfo=templateInfo}else{// Append this template info onto the end of its parent template's
// list, which will determine the tree structure via which property
// effects are run; if this template was not nested in another
// template, use the root template (the first stamped one) as the
// parent. Note, `parent` is the `templateInfo` instance for this
// template's parent (containing) template, which was set up in
// `applyTemplateInfo`.  While a given template's `parent` is set
// apriori, it is only added to the parent's child list at the point
// that it is being bound, since a template may or may not ever be
// stamped, and may be stamped more than once (in which case instances
// of the template info will be in the tree under its parent more than
// once).
var parent=template._parentTemplateInfo||this.__templateInfo,previous=parent.lastChild;templateInfo.parent=parent;parent.lastChild=templateInfo;templateInfo.previousSibling=previous;if(previous){previous.nextSibling=templateInfo}else{parent.firstChild=templateInfo}}}else{this.__preBoundTemplateInfo=templateInfo}return templateInfo}/**
       * Adds a property effect to the given template metadata, which is run
       * at the "propagate" stage of `_propertiesChanged` when the template
       * has been bound to the element via `_bindTemplate`.
       *
       * The `effect` object should match the format in `_addPropertyEffect`.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"_stampTemplate",/**
       * Stamps the provided template and performs instance-time setup for
       * Polymer template features, including data bindings, declarative event
       * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
       * is returned containing the stamped DOM, ready for insertion into the
       * DOM.
       *
       * This method may be called more than once; however note that due to
       * `shadycss` polyfill limitations, only styles from templates prepared
       * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
       * to the shadow root and support CSS custom properties), and note that
       * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
       * any styles required by in runtime-stamped templates must be included
       * in the main element template.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @param {TemplateInfo=} templateInfo Optional bound template info associated
       *   with the template to be stamped; if omitted the template will be
       *   automatically bound.
       * @return {!StampedTemplate} Cloned template content
       * @override
       * @protected
       */value:function _stampTemplate(template,templateInfo){templateInfo=templateInfo||/** @type {!TemplateInfo} */this._bindTemplate(template,!0);// Ensures that created dom is `_enqueueClient`'d to this element so
// that it can be flushed on next call to `_flushProperties`
hostStack.push(this);var dom=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_stampTemplate",this).call(this,template,templateInfo);hostStack.pop();// Add template-instance-specific data to instanced templateInfo
templateInfo.nodeList=dom.nodeList;// Capture child nodes to allow unstamping of non-prototypical templates
if(!templateInfo.wasPreBound){for(var nodes=templateInfo.childNodes=[],n=dom.firstChild;n;n=n.nextSibling){nodes.push(n)}}dom.templateInfo=templateInfo;// Setup compound storage, 2-way listeners, and dataHost for bindings
setupBindings(this,templateInfo);// Flush properties into template nodes; the check on `__dataClientsReady`
// ensures we don't needlessly run effects for an element's initial
// prototypical template stamping since they will happen as a part of the
// first call to `_propertiesChanged`. This flag is set to true
// after running the initial propagate effects, and immediately before
// flushing clients. Since downstream clients could cause stamping on
// this host (e.g. a fastDomIf `dom-if` being forced to render
// synchronously), this flag ensures effects for runtime-stamped templates
// are run at this point during the initial element boot-up.
if(this.__dataClientsReady){this._runEffectsForTemplate(templateInfo,this.__data,null,!1);this._flushClients()}return dom}/**
       * Removes and unbinds the nodes previously contained in the provided
       * DocumentFragment returned from `_stampTemplate`.
       *
       * @override
       * @param {!StampedTemplate} dom DocumentFragment previously returned
       *   from `_stampTemplate` associated with the nodes to be removed
       * @return {void}
       * @protected
       */},{key:"_removeBoundDom",value:function _removeBoundDom(dom){// Unlink template info; Note that while the child is unlinked from its
// parent list, a template's `parent` reference is never removed, since
// this is is determined by the tree structure and applied at
// `applyTemplateInfo` time.
var templateInfo=dom.templateInfo,previousSibling=templateInfo.previousSibling,nextSibling=templateInfo.nextSibling,parent=templateInfo.parent;if(previousSibling){previousSibling.nextSibling=nextSibling}else if(parent){parent.firstChild=nextSibling}if(nextSibling){nextSibling.previousSibling=previousSibling}else if(parent){parent.lastChild=previousSibling}templateInfo.nextSibling=templateInfo.previousSibling=null;// Remove stamped nodes
for(var nodes=templateInfo.childNodes,_i17=0,node;_i17<nodes.length;_i17++){node=nodes[_i17];wrap$1(wrap$1(node).parentNode).removeChild(node)}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */},{key:"PROPERTY_EFFECT_TYPES",get:function get(){return TYPES}}],[{key:"addPropertyEffect",value:function addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect)}/**
       * Creates a single-property observer for the given property.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createPropertyObserver",value:function createPropertyObserver(property,method,dynamicFn){this.prototype._createPropertyObserver(property,method,dynamicFn)}/**
       * Creates a multi-property "method observer" based on the provided
       * expression, which should be a string in the form of a normal JavaScript
       * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
       * should correspond to a property or path in the context of this
       * prototype (or instance), or may be a literal string or number.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       * @return {void}
       *   whether method names should be included as a dependency to the effect.
       * @protected
       * @nocollapse
       */},{key:"createMethodObserver",value:function createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn)}/**
       * Causes the setter for the given property to dispatch `<property>-changed`
       * events to notify of changes to the property.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createNotifyingProperty",value:function createNotifyingProperty(property){this.prototype._createNotifyingProperty(property)}/**
       * Creates a read-only accessor for the given property.
       *
       * To set the property, use the protected `_setProperty` API.
       * To create a custom protected setter (e.g. `_setMyProp()` for
       * property `myProp`), pass `true` for `protectedSetter`.
       *
       * Note, if the property will have other property effects, this method
       * should be called first, before adding other effects.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createReadOnlyProperty",value:function createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter)}/**
       * Causes the setter for the given property to reflect the property value
       * to a (dash-cased) attribute of the same name.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createReflectedProperty",value:function createReflectedProperty(property){this.prototype._createReflectedProperty(property)}/**
       * Creates a computed property whose value is set to the result of the
       * method described by the given `expression` each time one or more
       * arguments to the method changes.  The expression should be a string
       * in the form of a normal JavaScript function signature:
       * `'methodName(arg1, [..., argn])'`
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
       *   method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createComputedProperty",value:function createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn)}/**
       * Parses the provided template to ensure binding effects are created
       * for them, and then ensures property accessors are created for any
       * dependent properties in the template.  Binding effects for bound
       * templates are stored in a linked list on the instance so that
       * templates can be efficiently stamped and unstamped.
       *
       * @param {!HTMLTemplateElement} template Template containing binding
       *   bindings
       * @return {!TemplateInfo} Template metadata object
       * @protected
       * @nocollapse
       */},{key:"bindTemplate",value:function bindTemplate(template){return this.prototype._bindTemplate(template)}},{key:"_addTemplatePropertyEffect",value:function _addTemplatePropertyEffect(templateInfo,prop,effect){var hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=!0;var effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{},propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect)}},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
var noted=propertyEffectsBase._parseTemplateNode.call(this,node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){var parts=this._parseBindings(node.textContent,templateInfo);if(parts){// Initialize the textContent with any literal parts
// NOTE: default to a space here so the textNode remains; some browsers
// (IE) omit an empty textNode following cloneNode/importNode.
node.textContent=literalFromParts(parts)||" ";addBinding(this,templateInfo,nodeInfo,"text","textContent",parts);noted=!0}}return noted}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from attributes.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){var parts=this._parseBindings(value,templateInfo);if(parts){// Attribute or property
var origName=name,kind="property";// The only way we see a capital letter here is if the attr has
// a capital letter in it per spec. In this case, to make sure
// this binding works, we go ahead and make the binding to the attribute.
if(capitalAttributeRegex.test(name)){kind="attribute"}else if("$"==name[name.length-1]){name=name.slice(0,-1);kind="attribute"}// Initialize attribute bindings with any literal parts
var literal=literalFromParts(parts);if(literal&&"attribute"==kind){// Ensure a ShadyCSS template scoped style is not removed
// when a class$ binding's initial literal value is set.
if("class"==name&&node.hasAttribute("class")){literal+=" "+node.getAttribute(name)}node.setAttribute(name,literal)}// support disable-upgrade
if("attribute"==kind&&"disable-upgrade$"==origName){node.setAttribute(name,"")}// Clear attribute before removing, since IE won't allow removing
// `value` attribute if it previously had a value (can't
// unconditionally set '' before removing since attributes with `$`
// can't be set using setAttribute)
if("input"===node.localName&&"value"===origName){node.setAttribute(origName,"")}// Remove annotation
node.removeAttribute(origName);// Case hackery: attributes are lower-case, but bind targets
// (properties) are case sensitive. Gambit is to map dash-case to
// camel-case: `foo-bar` becomes `fooBar`.
// Attribute bindings are excepted.
if("property"===kind){name=dashToCamelCase(name)}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return!0}else{// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return propertyEffectsBase._parseTemplateNodeAttribute.call(this,node,templateInfo,nodeInfo,name,value)}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * binding the properties that a nested template depends on to the template
       * as `_host_<property>`.
       *
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
var noted=propertyEffectsBase._parseTemplateNestedTemplate.call(this,node,templateInfo,nodeInfo),parent=node.parentNode,nestedTemplateInfo=nodeInfo.templateInfo,isDomIf="dom-if"===parent.localName,isDomRepeat="dom-repeat"===parent.localName;// Remove nested template and redirect its host bindings & templateInfo
// onto the parent (dom-if/repeat element)'s nodeInfo
if(removeNestedTemplates&&(isDomIf||isDomRepeat)){parent.removeChild(node);// Use the parent's nodeInfo (for the dom-if/repeat) to record the
// templateInfo, and use that for any host property bindings below
nodeInfo=nodeInfo.parentInfo;nodeInfo.templateInfo=nestedTemplateInfo;// Ensure the parent dom-if/repeat is noted since it now may have host
// bindings; it may not have been if it did not have its own bindings
nodeInfo.noted=!0;noted=!1}// Merge host props into outer template and add bindings
var hostProps=nestedTemplateInfo.hostProps;if(fastDomIf&&isDomIf){// `fastDomIf` mode uses runtime-template stamping to add accessors/
// effects to properties used in its template; as such we don't need to
// tax the host element with `_host_` bindings for the `dom-if`.
// However, in the event it is nested in a `dom-repeat`, it is still
// important that its host properties are added to the
// TemplateInstance's `hostProps` so that they are forwarded to the
// TemplateInstance.
if(hostProps){templateInfo.hostProps=Object.assign(templateInfo.hostProps||{},hostProps);// Ensure the dom-if is noted so that it has a __dataHost, since
// `fastDomIf` uses the host for runtime template stamping; note this
// was already ensured above in the `removeNestedTemplates` case
if(!removeNestedTemplates){nodeInfo.parentInfo.noted=!0}}}else{var mode="{";for(var source in hostProps){var parts=[{mode:mode,source:source,dependencies:[source],hostProp:!0}];addBinding(this,templateInfo,nodeInfo,"property","_host_"+source,parts)}}return noted}/**
       * Called to parse text in a template (either attribute values or
       * textContent) into binding metadata.
       *
       * Any overrides of this method should return an array of binding part
       * metadata  representing one or more bindings found in the provided text
       * and any "literal" text in between.  Any non-literal parts will be passed
       * to `_evaluateBinding` when any dependencies change.  The only required
       * fields of each "part" in the returned array are as follows:
       *
       * - `dependencies` - Array containing trigger metadata for each property
       *   that should trigger the binding to update
       * - `literal` - String containing text if the part represents a literal;
       *   in this case no `dependencies` are needed
       *
       * Additional metadata for use by `_evaluateBinding` may be provided in
       * each part object as needed.
       *
       * The default implementation handles the following types of bindings
       * (one or more may be intermixed with literal strings):
       * - Property binding: `[[prop]]`
       * - Path binding: `[[object.prop]]`
       * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
       * - Two-way property or path bindings (supports negation):
       *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
       * - Inline computed method (supports negation):
       *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
       *
       * The default implementation uses a regular expression for best
       * performance. However, the regular expression uses a white-list of
       * allowed characters in a data-binding, which causes problems for
       * data-bindings that do use characters not in this white-list.
       *
       * Instead of updating the white-list with all allowed characters,
       * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
       * that uses a state machine instead. This state machine is able to handle
       * all characters. However, it is slightly less performant, therefore we
       * extracted it into a separate optional mixin.
       *
       * @param {string} text Text to parse from attribute or textContent
       * @param {Object} templateInfo Current template metadata
       * @return {Array<!BindingPart>} Array of binding part metadata
       * @protected
       * @nocollapse
       */},{key:"_parseBindings",value:function _parseBindings(text,templateInfo){var parts=[],lastIndex=0,m;// Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
// Regex matches:
//        Iteration 1:  Iteration 2:
// m[1]: '{{'          '[['
// m[2]: ''            '!'
// m[3]: 'prop'        'compute(foo,bar)'
while(null!==(m=bindingRegex.exec(text))){// Add literal part
if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)})}// Add binding part
var mode=m[1][0],negate=!!m[2],source=m[3].trim(),customEvent=!1,notifyEvent="",colon=-1;if("{"==mode&&0<(colon=source.indexOf("::"))){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=!0}var signature=parseMethod(source),dependencies=[];if(signature){// Inline computed function
for(var args=signature.args,methodName=signature.methodName,_i18=0,arg;_i18<args.length;_i18++){arg=args[_i18];if(!arg.literal){dependencies.push(arg)}}var dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=!0}}else{// Property or path
dependencies.push(source)}parts.push({source:source,mode:mode,negate:negate,customEvent:customEvent,signature:signature,dependencies:dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex}// Add a final literal part
if(lastIndex&&lastIndex<text.length){var literal=text.substring(lastIndex);if(literal){parts.push({literal:literal})}}if(parts.length){return parts}else{return null}}/**
       * Called to evaluate a previously parsed binding part based on a set of
       * one or more changed dependencies.
       *
       * @param {!Polymer_PropertyEffects} inst Element that should be used as
       *     scope for binding dependencies
       * @param {BindingPart} part Binding part metadata
       * @param {string} path Property/path that triggered this effect
       * @param {Object} props Bag of current property changes
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {*} Value the binding part evaluated to
       * @protected
       * @nocollapse
       */},{key:"_evaluateBinding",value:function _evaluateBinding(inst,part,path,props,oldProps,hasPaths){var value;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature)}else if(path!=part.source){value=_get(inst,part.source)}else{if(hasPaths&&isPath(path)){value=_get(inst,path)}else{value=inst.__data[path]}}if(part.negate){value=!value}return value}}]);return PropertyEffects}(propertyEffectsBase);/**
                                                                                * @polymer
                                                                                * @mixinClass
                                                                                * @implements {Polymer_PropertyEffects}
                                                                                * @extends {propertyEffectsBase}
                                                                                * @unrestricted
                                                                                */return PropertyEffects});/**
     * Stack for enqueuing client dom created by a host element.
     *
     * By default elements are flushed via `_flushProperties` when
     * `connectedCallback` is called. Elements attach their client dom to
     * themselves at `ready` time which results from this first flush.
     * This provides an ordering guarantee that the client dom an element
     * creates is flushed before the element itself (i.e. client `ready`
     * fires before host `ready`).
     *
     * However, if `_flushProperties` is called *before* an element is connected,
     * as for example `Templatize` does, this ordering guarantee cannot be
     * satisfied because no elements are connected. (Note: Bound elements that
     * receive data do become enqueued clients and are properly ordered but
     * unbound elements are not.)
     *
     * To maintain the desired "client before host" ordering guarantee for this
     * case we rely on the "host stack. Client nodes registers themselves with
     * the creating host element when created. This ensures that all client dom
     * is readied in the proper order, maintaining the desired guarantee.
     *
     * @private
     */_exports.PropertyEffects=PropertyEffects;var hostStack=[],propertyEffects={PropertyEffects:PropertyEffects};_exports.$propertyEffects=propertyEffects;/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
       * Total number of Polymer element instances created.
       * @type {number}
       */var instanceCount=0;_exports.instanceCount=instanceCount;function incrementInstanceCount(){_exports.instanceCount=instanceCount=instanceCount+1}/**
   * Array of Polymer element classes that have been finalized.
   * @type {!Array<!PolymerElementConstructor>}
   */var registrations=[];/**
                                  * @param {!PolymerElementConstructor} prototype Element prototype to log
                                  * @private
                                  */_exports.registrations=registrations;function _regLog(prototype){console.log("["+/** @type {?} */prototype.is+"]: registered")}/**
   * Registers a class prototype for telemetry purposes.
   * @param {!PolymerElementConstructor} prototype Element prototype to register
   * @protected
   */function register(prototype){registrations.push(prototype)}/**
   * Logs all elements registered with an `is` to the console.
   * @public
   */function dumpRegistrations(){registrations.forEach(_regLog)}var telemetry={get instanceCount(){return instanceCount},incrementInstanceCount:incrementInstanceCount,registrations:registrations,register:register,dumpRegistrations:dumpRegistrations};_exports.$telemetry=telemetry;function normalizeProperties(props){var output={};for(var _p12 in props){var o=props[_p12];output[_p12]="function"===typeof o?{type:o}:o}return output}/**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */var PropertiesMixin=dedupingMixin(function(superClass){/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @private
   */var base=PropertiesChanged(superClass);/**
                                                  * Returns the super class constructor for the given class, if it is an
                                                  * instance of the PropertiesMixin.
                                                  *
                                                  * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
                                                  * @return {?PropertiesMixinConstructor} Super class constructor
                                                  */function superPropertiesClass(constructor){var superCtor=Object.getPrototypeOf(constructor);// Note, the `PropertiesMixin` class below only refers to the class
// generated by this call to the mixin; the instanceof test only works
// because the mixin is deduped and guaranteed only to apply once, hence
// all constructors in a proto chain will see the same `PropertiesMixin`
return babelHelpers.instanceof(superCtor.prototype,PropertiesMixin)?/** @type {!PropertiesMixinConstructor} */superCtor:null}/**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */function ownProperties(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",constructor))){var _props=null;if(constructor.hasOwnProperty(JSCompiler_renameProperty("properties",constructor))){var properties=constructor.properties;if(properties){_props=normalizeProperties(properties)}}constructor.__ownProperties=_props}return constructor.__ownProperties}/**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */var PropertiesMixin=/*#__PURE__*/function(_base2){babelHelpers.inherits(PropertiesMixin,_base2);function PropertiesMixin(){babelHelpers.classCallCheck(this,PropertiesMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertiesMixin).apply(this,arguments))}babelHelpers.createClass(PropertiesMixin,[{key:"_initializeProperties",/**
       * Overrides `PropertiesChanged` method and adds a call to
       * `finalize` which lazily configures the element's property accessors.
       * @override
       * @return {void}
       */value:function _initializeProperties(){incrementInstanceCount();this.constructor.finalize();babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"_initializeProperties",this).call(this)}/**
       * Called when the element is added to a document.
       * Calls `_enableProperties` to turn on property system from
       * `PropertiesChanged`.
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */},{key:"connectedCallback",value:function connectedCallback(){if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"connectedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"connectedCallback",this).call(this)}this._enableProperties()}/**
       * Called when the element is removed from a document
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"disconnectedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"disconnectedCallback",this).call(this)}}}],[{key:"finalize",/**
       * Finalizes an element definition, including ensuring any super classes
       * are also finalized. This includes ensuring property
       * accessors exist on the element prototype. This method calls
       * `_finalizeClass` to finalize each constructor in the prototype chain.
       * @return {void}
       * @nocollapse
       */value:function finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){var superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);if(superCtor){superCtor.finalize()}this.__finalized=!0;this._finalizeClass()}}/**
       * Finalize an element class. This includes ensuring property
       * accessors exist on the element prototype. This method is called by
       * `finalize` and finalizes the class constructor.
       *
       * @protected
       * @nocollapse
       */},{key:"_finalizeClass",value:function _finalizeClass(){var props=ownProperties(/** @type {!PropertiesMixinConstructor} */this);if(props){/** @type {?} */this.createProperties(props)}}/**
       * Returns a memoized version of all properties, including those inherited
       * from super classes. Properties not in object format are converted to
       * at least {type}.
       *
       * @return {Object} Object containing properties for this class
       * @protected
       * @nocollapse
       */},{key:"typeForProperty",/**
       * Overrides `PropertiesChanged` method to return type specified in the
       * static `properties` object for the given property.
       * @param {string} name Name of property
       * @return {*} Type to which to deserialize attribute
       *
       * @protected
       * @nocollapse
       */value:function typeForProperty(name){var info=this._properties[name];return info&&info.type}},{key:"observedAttributes",/**
     * Implements standard custom elements getter to observes the attributes
     * listed in `properties`.
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */get:function get(){var _this11=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){register(this.prototype);var _props2=this._properties;this.__observedAttributes=_props2?Object.keys(_props2).map(function(p){return _this11.prototype._addPropertyToAttributeMap(p)}):[]}return this.__observedAttributes}},{key:"_properties",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){var superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);this.__properties=Object.assign({},superCtor&&superCtor._properties,ownProperties(/** @type {PropertiesMixinConstructor} */this))}return this.__properties}}]);return PropertiesMixin}(base);return PropertiesMixin});_exports.PropertiesMixin=PropertiesMixin;var propertiesMixin={PropertiesMixin:PropertiesMixin};_exports.$propertiesMixin=propertiesMixin;var bundledImportMeta=_objectSpread({},meta,{url:new URL("../node_modules/%40polymer/polymer/lib/mixins/element-mixin.js",meta.url).href}),version="3.4.1";_exports.version$1=_exports.version=version;var builtCSS=window.ShadyCSS&&window.ShadyCSS.cssBuild;/**
                                                                         * Element class mixin that provides the core API for Polymer's meta-programming
                                                                         * features including template stamping, data-binding, attribute deserialization,
                                                                         * and property change observation.
                                                                         *
                                                                         * Subclassers may provide the following static getters to return metadata
                                                                         * used to configure Polymer's features for the class:
                                                                         *
                                                                         * - `static get is()`: When the template is provided via a `dom-module`,
                                                                         *   users should return the `dom-module` id from a static `is` getter.  If
                                                                         *   no template is needed or the template is provided directly via the
                                                                         *   `template` getter, there is no need to define `is` for the element.
                                                                         *
                                                                         * - `static get template()`: Users may provide the template directly (as
                                                                         *   opposed to via `dom-module`) by implementing a static `template` getter.
                                                                         *   The getter must return an `HTMLTemplateElement`.
                                                                         *
                                                                         * - `static get properties()`: Should return an object describing
                                                                         *   property-related metadata used by Polymer features (key: property name
                                                                         *   value: object containing property metadata). Valid keys in per-property
                                                                         *   metadata include:
                                                                         *   - `type` (String|Number|Object|Array|...): Used by
                                                                         *     `attributeChangedCallback` to determine how string-based attributes
                                                                         *     are deserialized to JavaScript property values.
                                                                         *   - `notify` (boolean): Causes a change in the property to fire a
                                                                         *     non-bubbling event called `<property>-changed`. Elements that have
                                                                         *     enabled two-way binding to the property use this event to observe changes.
                                                                         *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
                                                                         *     To set a read-only property, use the private setter method
                                                                         *     `_setProperty(property, value)`.
                                                                         *   - `observer` (string): Observer method name that will be called when
                                                                         *     the property changes. The arguments of the method are
                                                                         *     `(value, previousValue)`.
                                                                         *   - `computed` (string): String describing method and dependent properties
                                                                         *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
                                                                         *     Computed properties are read-only by default and can only be changed
                                                                         *     via the return value of the computing method.
                                                                         *
                                                                         * - `static get observers()`: Array of strings describing multi-property
                                                                         *   observer methods and their dependent properties (e.g.
                                                                         *   `'observeABC(a, b, c)'`).
                                                                         *
                                                                         * The base class provides default implementations for the following standard
                                                                         * custom element lifecycle callbacks; users may override these, but should
                                                                         * call the super method to ensure
                                                                         * - `constructor`: Run when the element is created or upgraded
                                                                         * - `connectedCallback`: Run each time the element is connected to the
                                                                         *   document
                                                                         * - `disconnectedCallback`: Run each time the element is disconnected from
                                                                         *   the document
                                                                         * - `attributeChangedCallback`: Run each time an attribute in
                                                                         *   `observedAttributes` is set or removed (note: this element's default
                                                                         *   `observedAttributes` implementation will automatically return an array
                                                                         *   of dash-cased attributes based on `properties`)
                                                                         *
                                                                         * @mixinFunction
                                                                         * @polymer
                                                                         * @appliesMixin PropertyEffects
                                                                         * @appliesMixin PropertiesMixin
                                                                         * @property rootPath {string} Set to the value of `rootPath`,
                                                                         *   which defaults to the main document path
                                                                         * @property importPath {string} Set to the value of the class's static
                                                                         *   `importPath` property, which defaults to the path of this element's
                                                                         *   `dom-module` (when `is` is used), but can be overridden for other
                                                                         *   import strategies.
                                                                         * @summary Element class mixin that provides the core API for Polymer's
                                                                         * meta-programming features.
                                                                         * @template T
                                                                         * @param {function(new:T)} superClass Class to apply mixin to.
                                                                         * @return {function(new:T)} superClass with mixin applied.
                                                                         */_exports.builtCSS=builtCSS;var ElementMixin=dedupingMixin(function(base){/**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_PropertiesMixin}
   * @extends {HTMLElement}
   * @private
   */var polymerElementBase=PropertiesMixin(PropertyEffects(base));/**
                                                                         * Returns a list of properties with default values.
                                                                         * This list is created as an optimization since it is a subset of
                                                                         * the list returned from `_properties`.
                                                                         * This list is used in `_initializeProperties` to set property defaults.
                                                                         *
                                                                         * @param {PolymerElementConstructor} constructor Element class
                                                                         * @return {PolymerElementProperties} Flattened properties for this class
                                                                         *   that have default values
                                                                         * @private
                                                                         */function propertyDefaults(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",constructor))){constructor.__propertyDefaults=null;var _props3=constructor._properties;for(var _p13 in _props3){var info=_props3[_p13];if("value"in info){constructor.__propertyDefaults=constructor.__propertyDefaults||{};constructor.__propertyDefaults[_p13]=info}}}return constructor.__propertyDefaults}/**
     * Returns a memoized version of the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */function ownObservers(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",constructor))){constructor.__ownObservers=constructor.hasOwnProperty(JSCompiler_renameProperty("observers",constructor))?/** @type {PolymerElementConstructor} */constructor.observers:null}return constructor.__ownObservers}/**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * is also automatically set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */function createPropertyFromConfig(proto,name,info,allProps){// computed forces readOnly...
if(info.computed){info.readOnly=!0}// Note, since all computed properties are readOnly, this prevents
// adding additional computed property effects (which leads to a confusing
// setup where multiple triggers for setting a property)
// While we do have `hasComputedEffect` this is set on the property's
// dependencies rather than itself.
if(info.computed){if(proto._hasReadOnlyEffect(name)){console.warn("Cannot redefine computed property '".concat(name,"'."))}else{proto._createComputedProperty(name,info.computed,allProps)}}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed)}else if(!1===info.readOnly&&proto._hasReadOnlyEffect(name)){console.warn("Cannot make readOnly property '".concat(name,"' non-readOnly."))}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name)}else if(!1===info.reflectToAttribute&&proto._hasReflectEffect(name)){console.warn("Cannot make reflected property '".concat(name,"' non-reflected."))}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name)}else if(!1===info.notify&&proto._hasNotifyEffect(name)){console.warn("Cannot make notify property '".concat(name,"' non-notify."))}// always add observer
if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer])}// always create the mapping from attribute back to property for deserialization.
proto._addPropertyToAttributeMap(name)}/**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */function processElementStyles(klass,template,is,baseURI){if(!builtCSS){for(var templateStyles=template.content.querySelectorAll("style"),stylesWithImports=stylesFromTemplate(template),linkedStyles=stylesFromModuleImports(is),firstTemplateChild=template.content.firstElementChild,idx=0,s;idx<linkedStyles.length;idx++){s=linkedStyles[idx];s.textContent=klass._processStyleText(s.textContent,baseURI);template.content.insertBefore(s,firstTemplateChild)}// keep track of the last "concrete" style in the template we have encountered
// ensure all gathered styles are actually in this template.
for(var templateStyleIndex=0,_i19=0;_i19<stylesWithImports.length;_i19++){var _s=stylesWithImports[_i19],templateStyle=templateStyles[templateStyleIndex];// if the style is not in this template, it's been "included" and
// we put a clone of it in the template before the style that included it
if(templateStyle!==_s){_s=_s.cloneNode(!0);templateStyle.parentNode.insertBefore(_s,templateStyle)}else{templateStyleIndex++}_s.textContent=klass._processStyleText(_s.textContent,baseURI)}}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is)}// Support for `adoptedStylesheets` relies on using native Shadow DOM
// and built CSS. Built CSS is required because runtime transformation of
// `@apply` is not supported. This is because ShadyCSS relies on being able
// to update a `style` element in the element template and this is
// removed when using `adoptedStyleSheets`.
// Note, it would be more efficient to allow style includes to become
// separate stylesheets; however, because of `@apply` these are
// potentially not shareable and sharing the ones that could be shared
// would require some coordination. To keep it simple, all the includes
// and styles are collapsed into a single shareable stylesheet.
if(useAdoptedStyleSheetsWithBuiltCSS&&builtCSS&&supportsAdoptingStyleSheets){// Remove styles in template and make a shareable stylesheet
var styles=template.content.querySelectorAll("style");if(styles){var css="";Array.from(styles).forEach(function(s){css+=s.textContent;s.parentNode.removeChild(s)});klass._styleSheet=new CSSStyleSheet;klass._styleSheet.replaceSync(css)}}}/**
     * Look up template from dom-module for element
     *
     * @param {string} is Element name to look up
     * @return {?HTMLTemplateElement|undefined} Template found in dom module, or
     *   undefined if not found
     * @protected
     */function getTemplateFromDomModule(is){var template=null;// Under strictTemplatePolicy in 3.x+, dom-module lookup is only allowed
// when opted-in via allowTemplateFromDomModule
if(is&&(!strictTemplatePolicy||allowTemplateFromDomModule)){template=/** @type {?HTMLTemplateElement} */DomModule.import(is,"template");// Under strictTemplatePolicy, require any element with an `is`
// specified to have a dom-module
if(strictTemplatePolicy&&!template){throw new Error("strictTemplatePolicy: expecting dom-module or null template for ".concat(is))}}return template}/**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     * @extends {polymerElementBase}
     */var PolymerElement=/*#__PURE__*/function(_polymerElementBase){babelHelpers.inherits(PolymerElement,_polymerElementBase);babelHelpers.createClass(PolymerElement,null,[{key:"_finalizeClass",/**
       * Override of PropertiesMixin _finalizeClass to create observers and
       * find the template.
       * @return {void}
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */value:function _finalizeClass(){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
polymerElementBase._finalizeClass.call(this);var observers=ownObservers(this);if(observers){this.createObservers(observers,this._properties)}this._prepareTemplate()}/** @nocollapse */},{key:"_prepareTemplate",value:function _prepareTemplate(){// note: create "working" template that is finalized at instance time
var template=/** @type {PolymerElementConstructor} */this.template;if(template){if("string"===typeof template){console.error("template getter must return HTMLTemplateElement");template=null}else if(!legacyOptimizations){template=template.cloneNode(!0)}}/** @override */this.prototype._template=template}/**
       * Override of PropertiesChanged createProperties to create accessors
       * and property effects for all of the properties.
       * @param {!Object} props .
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createProperties",value:function createProperties(props){for(var _p14 in props){createPropertyFromConfig(/** @type {?} */this.prototype,_p14,props[_p14],props)}}/**
       * Creates observers for the given `observers` array.
       * Leverages `PropertyEffects` to create observers.
       * @param {Object} observers Array of observer descriptors for
       *   this class
       * @param {Object} dynamicFns Object containing keys for any properties
       *   that are functions and should trigger the effect when the function
       *   reference is changed
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createObservers",value:function createObservers(observers,dynamicFns){for(var proto=this.prototype,_i20=0;_i20<observers.length;_i20++){proto._createMethodObserver(observers[_i20],dynamicFns)}}/**
       * Returns the template that will be stamped into this element's shadow root.
       *
       * If a `static get is()` getter is defined, the default implementation will
       * return the first `<template>` in a `dom-module` whose `id` matches this
       * element's `is` (note that a `_template` property on the class prototype
       * takes precedence over the `dom-module` template, to maintain legacy
       * element semantics; a subclass will subsequently fall back to its super
       * class template if neither a `prototype._template` or a `dom-module` for
       * the class's `is` was found).
       *
       * Users may override this getter to return an arbitrary template
       * (in which case the `is` getter is unnecessary). The template returned
       * must be an `HTMLTemplateElement`.
       *
       * Note that when subclassing, if the super class overrode the default
       * implementation and the subclass would like to provide an alternate
       * template via a `dom-module`, it should override this getter and
       * return `DomModule.import(this.is, 'template')`.
       *
       * If a subclass would like to modify the super class template, it should
       * clone it rather than modify it in place.  If the getter does expensive
       * work such as cloning/modifying a template, it should memoize the
       * template for maximum performance:
       *
       *   let memoizedTemplate;
       *   class MySubClass extends MySuperClass {
       *     static get template() {
       *       if (!memoizedTemplate) {
       *         memoizedTemplate = super.template.cloneNode(true);
       *         let subContent = document.createElement('div');
       *         subContent.textContent = 'This came from MySubClass';
       *         memoizedTemplate.content.appendChild(subContent);
       *       }
       *       return memoizedTemplate;
       *     }
       *   }
       *
       * @return {!HTMLTemplateElement|string} Template to be stamped
       * @nocollapse
       */},{key:"polymerElementVersion",/**
     * Current Polymer version in Semver notation.
     * @type {string} Semver notation of the current version of Polymer.
     * @nocollapse
     */get:function get(){return version}},{key:"template",get:function get(){// Explanation of template-related properties:
// - constructor.template (this getter): the template for the class.
//     This can come from the prototype (for legacy elements), from a
//     dom-module, or from the super class's template (or can be overridden
//     altogether by the user)
// - constructor._template: memoized version of constructor.template
// - prototype._template: working template for the element, which will be
//     parsed and modified in place. It is a cloned version of
//     constructor.template, saved in _finalizeClass(). Note that before
//     this getter is called, for legacy elements this could be from a
//     _template field on the info object passed to Polymer(), a behavior,
//     or set in registered(); once the static getter runs, a clone of it
//     will overwrite it on the prototype as the working template.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){var protoTemplate=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=// If user has put template on prototype (e.g. in legacy via registered
// callback or info object), prefer that first. Note that `null` is
// used as a sentinel to indicate "no template" and can be used to
// override a super template, whereas `undefined` is used as a
// sentinel to mean "fall-back to default template lookup" via
// dom-module and/or super.template.
protoTemplate!==void 0?protoTemplate:// Look in dom-module associated with this element's is
this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&getTemplateFromDomModule(/** @type {PolymerElementConstructor}*/this.is)||// Next look for superclass template (call the super impl this
// way so that `this` points to the superclass)
Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.template}return this._template}/**
       * Set the template.
       *
       * @param {!HTMLTemplateElement|string} value Template to set.
       * @nocollapse
       */,set:function set(value){this._template=value}/**
       * Path matching the url from which the element was imported.
       *
       * This path is used to resolve url's in template style cssText.
       * The `importPath` property is also set on element instances and can be
       * used to create bindings relative to the import path.
       *
       * For elements defined in ES modules, users should implement
       * `static get importMeta() { return import.meta; }`, and the default
       * implementation of `importPath` will  return `import.meta.url`'s path.
       * For elements defined in HTML imports, this getter will return the path
       * to the document containing a `dom-module` element matching this
       * element's static `is` property.
       *
       * Note, this path should contain a trailing `/`.
       *
       * @return {string} The import path for this element class
       * @suppress {missingProperties}
       * @nocollapse
       */},{key:"importPath",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){var meta=this.importMeta;if(meta){this._importPath=pathFromUrl(meta.url)}else{var module=DomModule.import(/** @type {PolymerElementConstructor} */this.is);this._importPath=module&&module.assetpath||Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.importPath}}return this._importPath}}]);function PolymerElement(){var _this12;babelHelpers.classCallCheck(this,PolymerElement);_this12=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PolymerElement).call(this));/** @type {HTMLTemplateElement} */_this12._template;/** @type {string} */_this12._importPath;/** @type {string} */_this12.rootPath;/** @type {string} */_this12.importPath;/** @type {StampedTemplate | HTMLElement | ShadowRoot} */_this12.root;/** @type {!Object<string, !Element>} */_this12.$;return _this12}/**
       * Overrides the default `PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts,missingProperties} go/missingfnprops
       */babelHelpers.createClass(PolymerElement,[{key:"_initializeProperties",value:function _initializeProperties(){this.constructor.finalize();// note: finalize template when we have access to `localName` to
// avoid dependence on `is` for polyfilling styling.
this.constructor._finalizeTemplate(/** @type {!HTMLElement} */this.localName);babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"_initializeProperties",this).call(this);// set path defaults
this.rootPath=rootPath;this.importPath=this.constructor.importPath;// apply property defaults...
var p$=propertyDefaults(this.constructor);if(!p$){return}for(var _p15 in p$){var info=p$[_p15];if(this._canApplyPropertyDefault(_p15)){var value="function"==typeof info.value?info.value.call(this):info.value;// Set via `_setProperty` if there is an accessor, to enable
// initializing readOnly property defaults
if(this._hasAccessor(_p15)){this._setPendingProperty(_p15,value,!0)}else{this[_p15]=value}}}}/**
       * Determines if a property dfeault can be applied. For example, this
       * prevents a default from being applied when a property that has no
       * accessor is overridden by its host before upgrade (e.g. via a binding).
       * @override
       * @param {string} property Name of the property
       * @return {boolean} Returns true if the property default can be applied.
       */},{key:"_canApplyPropertyDefault",value:function _canApplyPropertyDefault(property){return!this.hasOwnProperty(property)}/**
       * Gather style text for a style element in the template.
       *
       * @param {string} cssText Text containing styling to process
       * @param {string} baseURI Base URI to rebase CSS paths against
       * @return {string} The processed CSS text
       * @protected
       * @nocollapse
       */},{key:"connectedCallback",/**
       * Provides a default implementation of the standard Custom Elements
       * `connectedCallback`.
       *
       * The default implementation enables the property effects system and
       * flushes any pending properties, and updates shimmed CSS properties
       * when using the ShadyCSS scoping/custom properties polyfill.
       *
       * @override
       * @suppress {missingProperties, invalidCasts} Super may or may not
       *     implement the callback
       * @return {void}
       */value:function connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(/** @type {!HTMLElement} */this)}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"connectedCallback",this).call(this)}/**
       * Stamps the element template.
       *
       * @return {void}
       * @override
       */},{key:"ready",value:function ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"ready",this).call(this)}/**
       * Implements `PropertyEffects`'s `_readyClients` call. Attaches
       * element dom by calling `_attachDom` with the dom stamped from the
       * element's template via `_stampTemplate`. Note that this allows
       * client dom to be attached to the element prior to any observers
       * running.
       *
       * @return {void}
       * @override
       */},{key:"_readyClients",value:function _readyClients(){if(this._template){this.root=this._attachDom(/** @type {StampedTemplate} */this.root)}// The super._readyClients here sets the clients initialized flag.
// We must wait to do this until after client dom is created/attached
// so that this flag can be checked to prevent notifications fired
// during this process from being handled before clients are ready.
babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"_readyClients",this).call(this)}/**
       * Attaches an element's stamped dom to itself. By default,
       * this method creates a `shadowRoot` and adds the dom to it.
       * However, this method may be overridden to allow an element
       * to put its dom in another location.
       *
       * @override
       * @throws {Error}
       * @suppress {missingReturn}
       * @param {StampedTemplate} dom to attach to the element.
       * @return {ShadowRoot} node to which the dom has been attached.
       */},{key:"_attachDom",value:function _attachDom(dom){var n=wrap$1(this);if(n.attachShadow){if(dom){if(!n.shadowRoot){n.attachShadow({mode:"open",shadyUpgradeFragment:dom});n.shadowRoot.appendChild(dom);// When `adoptedStyleSheets` is supported a stylesheet is made
// available on the element constructor.
if(this.constructor._styleSheet){n.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet]}}if(syncInitialRender&&window.ShadyDOM){window.ShadyDOM.flushInitial(n.shadowRoot)}return n.shadowRoot}return null}else{throw new Error("ShadowDOM not available. "+// TODO(sorvell): move to compile-time conditional when supported
"PolymerElement can create dom as children instead of in "+"ShadowDOM by setting `this.root = this;` before `ready`.")}}/**
       * When using the ShadyCSS scoping and custom property shim, causes all
       * shimmed styles in this element (and its subtree) to be updated
       * based on current custom property values.
       *
       * The optional parameter overrides inline custom property styles with an
       * object of properties where the keys are CSS properties, and the values
       * are strings.
       *
       * Example: `this.updateStyles({'--color': 'blue'})`
       *
       * These properties are retained unless a value of `null` is set.
       *
       * Note: This function does not support updating CSS mixins.
       * You can not dynamically change the value of an `@apply`.
       *
       * @override
       * @param {Object=} properties Bag of custom property key/values to
       *   apply to this element.
       * @return {void}
       * @suppress {invalidCasts}
       */},{key:"updateStyles",value:function updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(/** @type {!HTMLElement} */this,properties)}}/**
       * Rewrites a given URL relative to a base URL. The base URL defaults to
       * the original location of the document containing the `dom-module` for
       * this element. This method will return the same URL before and after
       * bundling.
       *
       * Note that this function performs no resolution for URLs that start
       * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
       * URL resolution, use `window.URL`.
       *
       * @override
       * @param {string} url URL to resolve.
       * @param {string=} base Optional base URL to resolve against, defaults
       * to the element's `importPath`
       * @return {string} Rewritten URL relative to base
       */},{key:"resolveUrl",value:function resolveUrl(url,base){if(!base&&this.importPath){base=_resolveUrl(this.importPath)}return _resolveUrl(url,base)}/**
       * Overrides `PropertyEffects` to add map of dynamic functions on
       * template info, for consumption by `PropertyEffects` template binding
       * code. This map determines which method templates should have accessors
       * created for them.
       *
       * @param {!HTMLTemplateElement} template Template
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} .
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */}],[{key:"_processStyleText",value:function _processStyleText(cssText,baseURI){return resolveCss(cssText,baseURI)}/**
      * Configures an element `proto` to function with a given `template`.
      * The element name `is` and extends `ext` must be specified for ShadyCSS
      * style scoping.
      *
      * @param {string} is Tag name (or type extension name) for this element
      * @return {void}
      * @protected
      * @nocollapse
      */},{key:"_finalizeTemplate",value:function _finalizeTemplate(is){/** @const {HTMLTemplateElement} */var template=this.prototype._template;if(template&&!template.__polymerFinalized){template.__polymerFinalized=!0;var importPath=this.importPath,baseURI=importPath?_resolveUrl(importPath):"";// e.g. support `include="module-name"`, and ShadyCSS
processElementStyles(this,template,is,baseURI);this.prototype._bindTemplate(template)}}},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||this._properties;// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return polymerElementBase._parseTemplateContent.call(this,template,templateInfo,nodeInfo)}/**
       * Overrides `PropertyEffects` to warn on use of undeclared properties in
       * template.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */},{key:"_addTemplatePropertyEffect",value:function _addTemplatePropertyEffect(templateInfo,prop,effect){// Warn if properties are used in template without being declared.
// Properties must be listed in `properties` to be included in
// `observedAttributes` since CE V1 reads that at registration time, and
// since we want to keep template parsing lazy, we can't automatically
// add undeclared properties used in templates to `observedAttributes`.
// The warning is only enabled in `legacyOptimizations` mode, since
// we don't want to spam existing users who might have adopted the
// shorthand when attribute deserialization is not important.
if(legacyWarnings&&!(prop in this._properties)&&// Methods used in templates with no dependencies (or only literal
// dependencies) become accessors with template effects; ignore these
!(effect.info.part.signature&&effect.info.part.signature.static)&&// Warnings for bindings added to nested templates are handled by
// templatizer so ignore both the host-to-template bindings
// (`hostProp`) and TemplateInstance-to-child bindings
// (`nestedTemplate`)
!effect.info.part.hostProp&&!templateInfo.nestedTemplate){console.warn("Property '".concat(prop,"' used in template but not declared in 'properties'; ")+"attribute will not be observed.")}// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return polymerElementBase._addTemplatePropertyEffect.call(this,templateInfo,prop,effect)}}]);return PolymerElement}(polymerElementBase);return PolymerElement});/**
     * When using the ShadyCSS scoping and custom property shim, causes all
     * shimmed `styles` (via `custom-style`) in the document (and its subtree)
     * to be updated based on current custom property values.
     *
     * The optional parameter overrides inline custom property styles with an
     * object of properties where the keys are CSS properties, and the values
     * are strings.
     *
     * Example: `updateStyles({'--color': 'blue'})`
     *
     * These properties are retained unless a value of `null` is set.
     *
     * @param {Object=} props Bag of custom property key/values to
     *   apply to the document.
     * @return {void}
     */_exports.ElementMixin=ElementMixin;var updateStyles=function updateStyles(props){if(window.ShadyCSS){window.ShadyCSS.styleDocument(props)}};_exports.updateStyles=updateStyles;var elementMixin={version:version,builtCSS:builtCSS,ElementMixin:ElementMixin,updateStyles:updateStyles};_exports.$elementMixin=elementMixin;var Debouncer=/*#__PURE__*/function(){function Debouncer(){babelHelpers.classCallCheck(this,Debouncer);this._asyncModule=null;this._callback=null;this._timer=null}/**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */babelHelpers.createClass(Debouncer,[{key:"setConfig",value:function setConfig(asyncModule,callback){var _this13=this;this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(function(){_this13._timer=null;debouncerQueue.delete(_this13);_this13._callback()})}/**
     * Cancels an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */},{key:"cancel",value:function cancel(){if(this.isActive()){this._cancelAsync();// Canceling a debouncer removes its spot from the flush queue,
// so if a debouncer is manually canceled and re-debounced, it
// will reset its flush order (this is a very minor difference from 1.x)
// Re-debouncing via the `debounce` API retains the 1.x FIFO flush order
debouncerQueue.delete(this)}}/**
     * Cancels a debouncer's async callback.
     *
     * @return {void}
     */},{key:"_cancelAsync",value:function _cancelAsync(){if(this.isActive()){this._asyncModule.cancel(/** @type {number} */this._timer);this._timer=null}}/**
     * Flushes an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */},{key:"flush",value:function flush(){if(this.isActive()){this.cancel();this._callback()}}/**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */},{key:"isActive",value:function isActive(){return null!=this._timer}/**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * ```js
     * import {microTask} from '@polymer/polymer/lib/utils/async.js';
     * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
     * // ...
     *
     * _debounceWork() {
     *   this._debounceJob = Debouncer.debounce(this._debounceJob,
     *       microTask, () => this._doWork());
     * }
     * ```
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `enqueueDebouncer` and
     * `flush`. For example, extend the above example by adding
     * `enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncInterface} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */}],[{key:"debounce",value:function debounce(debouncer,asyncModule,callback){if(babelHelpers.instanceof(debouncer,Debouncer)){// Cancel the async callback, but leave in debouncerQueue if it was
// enqueued, to maintain 1.x flush order
debouncer._cancelAsync()}else{debouncer=new Debouncer}debouncer.setConfig(asyncModule,callback);return debouncer}}]);return Debouncer}();_exports.Debouncer=Debouncer;var debouncerQueue=new Set,enqueueDebouncer=function enqueueDebouncer(debouncer){debouncerQueue.add(debouncer)};/**
                                 * Adds a `Debouncer` to a list of globally flushable tasks.
                                 *
                                 * @param {!Debouncer} debouncer Debouncer to enqueue
                                 * @return {void}
                                 */_exports.enqueueDebouncer$1=_exports.enqueueDebouncer=_exports.addDebouncer=enqueueDebouncer;/**
    * Flushes any enqueued debouncers
    *
    * @return {boolean} Returns whether any debouncers were flushed
    */var flushDebouncers=function flushDebouncers(){var didFlush=!!debouncerQueue.size;// If new debouncers are added while flushing, Set.forEach will ensure
// newly added ones are also flushed
debouncerQueue.forEach(function(debouncer){try{debouncer.flush()}catch(e){setTimeout(function(){throw e})}});return didFlush};_exports.flushDebouncers=flushDebouncers;var debounce={Debouncer:Debouncer,enqueueDebouncer:enqueueDebouncer,flushDebouncers:flushDebouncers};_exports.$debounce=debounce;var HAS_NATIVE_TA="string"===typeof document.head.style.touchAction,GESTURE_KEY="__polymerGestures",HANDLED_OBJ="__polymerGesturesHandled",TOUCH_ACTION="__polymerGesturesTouchAction",TAP_DISTANCE=25,TRACK_DISTANCE=5,TRACK_LENGTH=2,MOUSE_TIMEOUT=2500,MOUSE_EVENTS=["mousedown","mousemove","mouseup","click"],MOUSE_WHICH_TO_BUTTONS=[0,1,4,2],MOUSE_HAS_BUTTONS=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();/**
      * @param {string} name Possible mouse event name
      * @return {boolean} true if mouse event, false if not
      */function isMouseEvent(name){return-1<MOUSE_EVENTS.indexOf(name)}/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */ // check for passive event listeners
var supportsPassive=!1;(function(){try{var opts=Object.defineProperty({},"passive",{get:function get(){supportsPassive=!0}});window.addEventListener("test",null,opts);window.removeEventListener("test",null,opts)}catch(e){}})();/**
       * Generate settings for event listeners, dependant on `passiveTouchGestures`
       *
       * @param {string} eventName Event name to determine if `{passive}` option is
       *   needed
       * @return {{passive: boolean} | undefined} Options to use for addEventListener
       *   and removeEventListener
       */function PASSIVE_TOUCH(eventName){if(isMouseEvent(eventName)||"touchend"===eventName){return}if(HAS_NATIVE_TA&&supportsPassive&&passiveTouchGestures){return{passive:!0}}else{return}}// Check for touch-only devices
var IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),clickedLabels=[],labellable={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},canBeDisabled={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};// keep track of any labels hit by the mouseCanceller
/** @type {!Array<!HTMLLabelElement>} */ /**
    * @param {HTMLElement} el Element to check labelling status
    * @return {boolean} element can have labels
    */function canBeLabelled(el){return labellable[el.localName]||!1}/**
   * @param {HTMLElement} el Element that may be labelled.
   * @return {!Array<!HTMLLabelElement>} Relevant label for `el`
   */function matchingLabels(el){var labels=Array.prototype.slice.call(/** @type {HTMLInputElement} */el.labels||[]);// IE doesn't have `labels` and Safari doesn't populate `labels`
// if element is in a shadowroot.
// In this instance, finding the non-ancestor labels is enough,
// as the mouseCancellor code will handle ancstor labels
if(!labels.length){labels=[];var _root2=el.getRootNode();// if there is an id on `el`, check for all labels with a matching `for` attribute
if(el.id){for(var matching=_root2.querySelectorAll("label[for = ".concat(el.id,"]")),_i21=0;_i21<matching.length;_i21++){labels.push(/** @type {!HTMLLabelElement} */matching[_i21])}}}return labels}// touch will make synthetic mouse events
// `preventDefault` on touchend will cancel them,
// but this breaks `<input>` focus and link clicks
// disable mouse handlers for MOUSE_TIMEOUT ms after
// a touchend to ignore synthetic mouse events
var mouseCanceller=function mouseCanceller(mouseEvent){// Check for sourceCapabilities, used to distinguish synthetic events
// if mouseEvent did not come from a device that fires touch events,
// it was made by a real mouse and should be counted
// http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
var sc=mouseEvent.sourceCapabilities;if(sc&&!sc.firesTouchEvents){return}// skip synthetic mouse events
mouseEvent[HANDLED_OBJ]={skip:!0};// disable "ghost clicks"
if("click"===mouseEvent.type){for(var clickFromLabel=!1,_path2=getComposedPath(mouseEvent),_i22=0;_i22<_path2.length;_i22++){if(_path2[_i22].nodeType===Node.ELEMENT_NODE){if("label"===_path2[_i22].localName){clickedLabels.push(/** @type {!HTMLLabelElement} */_path2[_i22])}else if(canBeLabelled(/** @type {!HTMLElement} */_path2[_i22])){// check if one of the clicked labels is labelling this element
for(var ownerLabels=matchingLabels(/** @type {!HTMLElement} */_path2[_i22]),j=0;j<ownerLabels.length;j++){clickFromLabel=clickFromLabel||-1<clickedLabels.indexOf(ownerLabels[j])}}}if(_path2[_i22]===POINTERSTATE.mouse.target){return}}// if one of the clicked labels was labelling the target element,
// this is not a ghost click
if(clickFromLabel){return}mouseEvent.preventDefault();mouseEvent.stopPropagation()}};/**
    * @param {boolean=} setup True to add, false to remove.
    * @return {void}
    */function setupTeardownMouseCanceller(setup){for(var events=IS_TOUCH_ONLY?["click"]:MOUSE_EVENTS,_i23=0,en;_i23<events.length;_i23++){en=events[_i23];if(setup){// reset clickLabels array
clickedLabels.length=0;document.addEventListener(en,mouseCanceller,!0)}else{document.removeEventListener(en,mouseCanceller,!0)}}}function ignoreMouse(e){if(!cancelSyntheticClickEvents){return}if(!POINTERSTATE.mouse.mouseIgnoreJob){setupTeardownMouseCanceller(!0)}var unset=function unset(){setupTeardownMouseCanceller();POINTERSTATE.mouse.target=null;POINTERSTATE.mouse.mouseIgnoreJob=null};POINTERSTATE.mouse.target=getComposedPath(e)[0];POINTERSTATE.mouse.mouseIgnoreJob=Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob,timeOut.after(MOUSE_TIMEOUT),unset)}/**
   * @param {MouseEvent} ev event to test for left mouse button down
   * @return {boolean} has left mouse button down
   */function hasLeftMouseButton(ev){var type=ev.type;// exit early if the event is not a mouse event
if(!isMouseEvent(type)){return!1}// ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
// instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
if("mousemove"===type){// allow undefined for testing events
var buttons=ev.buttons===void 0?1:ev.buttons;if(babelHelpers.instanceof(ev,window.MouseEvent)&&!MOUSE_HAS_BUTTONS){buttons=MOUSE_WHICH_TO_BUTTONS[ev.which]||0}// buttons is a bitmask, check that the left button bit is set (1)
return!!(1&buttons)}else{// allow undefined for testing events
var button=ev.button===void 0?0:ev.button;// ev.button is 0 in mousedown/mouseup/click for left button activation
return 0===button}}function isSyntheticClick(ev){if("click"===ev.type){// ev.detail is 0 for HTMLElement.click in most browsers
if(0===ev.detail){return!0}// in the worst case, check that the x/y position of the click is within
// the bounding box of the target of the event
// Thanks IE 10 >:(
var t=_findOriginalTarget(ev);// make sure the target of the event is an element so we can use getBoundingClientRect,
// if not, just assume it is a synthetic click
if(!t.nodeType||/** @type {Element} */t.nodeType!==Node.ELEMENT_NODE){return!0}var bcr=/** @type {Element} */t.getBoundingClientRect(),x=ev.pageX,y=ev.pageY;// use page x/y to account for scrolling
// ev is a synthetic click if the position is outside the bounding box of the target
return!(x>=bcr.left&&x<=bcr.right&&y>=bcr.top&&y<=bcr.bottom)}return!1}var POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function firstTouchAction(ev){for(var ta="auto",path=getComposedPath(ev),_i24=0,n;_i24<path.length;_i24++){n=path[_i24];if(n[TOUCH_ACTION]){ta=n[TOUCH_ACTION];break}}return ta}function trackDocument(stateObj,movefn,upfn){stateObj.movefn=movefn;stateObj.upfn=upfn;document.addEventListener("mousemove",movefn);document.addEventListener("mouseup",upfn)}function untrackDocument(stateObj){document.removeEventListener("mousemove",stateObj.movefn);document.removeEventListener("mouseup",stateObj.upfn);stateObj.movefn=null;stateObj.upfn=null}if(cancelSyntheticClickEvents){// use a document-wide touchend listener to start the ghost-click prevention mechanism
// Use passive event listeners, if supported, to not affect scrolling performance
document.addEventListener("touchend",ignoreMouse,supportsPassive?{passive:!0}:!1)}/**
   * Returns the composedPath for the given event.
   * @param {Event} event to process
   * @return {!Array<!EventTarget>} Path of the event
   */var getComposedPath=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:function(event){return event.composedPath&&event.composedPath()||[]},gestures={};/** @type {!Object<string, !GestureRecognizer>} */_exports.gestures=gestures;/** @type {!Array<!GestureRecognizer>} */var recognizers=[];/**
                                * Finds the element rendered on the screen at the provided coordinates.
                                *
                                * Similar to `document.elementFromPoint`, but pierces through
                                * shadow roots.
                                *
                                * @param {number} x Horizontal pixel coordinate
                                * @param {number} y Vertical pixel coordinate
                                * @return {Element} Returns the deepest shadowRoot inclusive element
                                * found at the screen position given.
                                */_exports.recognizers=recognizers;function deepTargetFind(x,y){var node=document.elementFromPoint(x,y),next=node;// this code path is only taken when native ShadowDOM is used
// if there is a shadowroot, it may have a node at x/y
// if there is not a shadowroot, exit the loop
while(next&&next.shadowRoot&&!window.ShadyDOM){// if there is a node at x/y in the shadowroot, look deeper
var oldNext=next;next=next.shadowRoot.elementFromPoint(x,y);// on Safari, elementFromPoint may return the shadowRoot host
if(oldNext===next){break}if(next){node=next}}return node}/**
   * a cheaper check than ev.composedPath()[0];
   *
   * @private
   * @param {Event|Touch} ev Event.
   * @return {EventTarget} Returns the event target.
   */function _findOriginalTarget(ev){var path=getComposedPath(/** @type {?Event} */ev);// It shouldn't be, but sometimes path is empty (window on Safari).
return 0<path.length?path[0]:ev.target}/**
   * @private
   * @param {Event} ev Event.
   * @return {void}
   */function _handleNative(ev){var handled,type=ev.type,node=ev.currentTarget,gobj=node[GESTURE_KEY];if(!gobj){return}var gs=gobj[type];if(!gs){return}if(!ev[HANDLED_OBJ]){ev[HANDLED_OBJ]={};if("touch"===type.slice(0,5)){ev=/** @type {TouchEvent} */ev;// eslint-disable-line no-self-assign
var t=ev.changedTouches[0];if("touchstart"===type){// only handle the first finger
if(1===ev.touches.length){POINTERSTATE.touch.id=t.identifier}}if(POINTERSTATE.touch.id!==t.identifier){return}if(!HAS_NATIVE_TA){if("touchstart"===type||"touchmove"===type){_handleTouchAction(ev)}}}}handled=ev[HANDLED_OBJ];// used to ignore synthetic mouse events
if(handled.skip){return}// reset recognizer state
for(var _i25=0,r;_i25<recognizers.length;_i25++){r=recognizers[_i25];if(gs[r.name]&&!handled[r.name]){if(r.flow&&-1<r.flow.start.indexOf(ev.type)&&r.reset){r.reset()}}}// enforce gesture recognizer order
for(var _i26=0,_r;_i26<recognizers.length;_i26++){_r=recognizers[_i26];if(gs[_r.name]&&!handled[_r.name]){handled[_r.name]=!0;_r[type](ev)}}}/**
   * @private
   * @param {TouchEvent} ev Event.
   * @return {void}
   */function _handleTouchAction(ev){var t=ev.changedTouches[0],type=ev.type;if("touchstart"===type){POINTERSTATE.touch.x=t.clientX;POINTERSTATE.touch.y=t.clientY;POINTERSTATE.touch.scrollDecided=!1}else if("touchmove"===type){if(POINTERSTATE.touch.scrollDecided){return}POINTERSTATE.touch.scrollDecided=!0;var ta=firstTouchAction(ev),shouldPrevent=!1,dx=Math.abs(POINTERSTATE.touch.x-t.clientX),dy=Math.abs(POINTERSTATE.touch.y-t.clientY);if(!ev.cancelable){// scrolling is happening
}else if("none"===ta){shouldPrevent=!0}else if("pan-x"===ta){shouldPrevent=dy>dx}else if("pan-y"===ta){shouldPrevent=dx>dy}if(shouldPrevent){ev.preventDefault()}else{_prevent("track")}}}/**
   * Adds an event listener to a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to add listener on
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function to call
   * @return {boolean} Returns true if a gesture event listener was added.
   */function addListener(node,evType,handler){if(gestures[evType]){_add(node,evType,handler);return!0}return!1}/**
   * Removes an event listener from a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to remove listener from
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function previously passed to
   *  `addListener`.
   * @return {boolean} Returns true if a gesture event listener was removed.
   */function removeListener(node,evType,handler){if(gestures[evType]){_remove(node,evType,handler);return!0}return!1}/**
   * automate the event listeners for the native events
   *
   * @private
   * @param {!EventTarget} node Node on which to add the event.
   * @param {string} evType Event type to add.
   * @param {function(!Event)} handler Event handler function.
   * @return {void}
   */function _add(node,evType,handler){var recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(!gobj){node[GESTURE_KEY]=gobj={}}for(var _i27=0,dep,gd;_i27<deps.length;_i27++){dep=deps[_i27];// don't add mouse handlers on iOS because they cause gray selection overlays
if(IS_TOUCH_ONLY&&isMouseEvent(dep)&&"click"!==dep){continue}gd=gobj[dep];if(!gd){gobj[dep]=gd={_count:0}}if(0===gd._count){node.addEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}gd[name]=(gd[name]||0)+1;gd._count=(gd._count||0)+1}node.addEventListener(evType,handler);if(recognizer.touchAction){setTouchAction(node,recognizer.touchAction)}}/**
   * automate event listener removal for native events
   *
   * @private
   * @param {!EventTarget} node Node on which to remove the event.
   * @param {string} evType Event type to remove.
   * @param {function(!Event): void} handler Event handler function.
   * @return {void}
   */function _remove(node,evType,handler){var recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(gobj){for(var _i28=0,dep,gd;_i28<deps.length;_i28++){dep=deps[_i28];gd=gobj[dep];if(gd&&gd[name]){gd[name]=(gd[name]||1)-1;gd._count=(gd._count||1)-1;if(0===gd._count){node.removeEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}}}}node.removeEventListener(evType,handler)}/**
   * Registers a new gesture event recognizer for adding new custom
   * gesture event types.
   *
   * @param {!GestureRecognizer} recog Gesture recognizer descriptor
   * @return {void}
   */function register$1(recog){recognizers.push(recog);for(var _i29=0;_i29<recog.emits.length;_i29++){gestures[recog.emits[_i29]]=recog}}/**
   * @private
   * @param {string} evName Event name.
   * @return {Object} Returns the gesture for the given event name.
   */function _findRecognizerByEvent(evName){for(var _i30=0,r;_i30<recognizers.length;_i30++){r=recognizers[_i30];for(var j=0,n;j<r.emits.length;j++){n=r.emits[j];if(n===evName){return r}}}return null}/**
   * Sets scrolling direction on node.
   *
   * This value is checked on first move, thus it should be called prior to
   * adding event listeners.
   *
   * @param {!EventTarget} node Node to set touch action setting on
   * @param {string} value Touch action value
   * @return {void}
   */function setTouchAction(node,value){if(HAS_NATIVE_TA&&babelHelpers.instanceof(node,HTMLElement)){// NOTE: add touchAction async so that events can be added in
// custom element constructors. Otherwise we run afoul of custom
// elements restriction against settings attributes (style) in the
// constructor.
microTask.run(function(){node.style.touchAction=value})}node[TOUCH_ACTION]=value}/**
   * Dispatches an event on the `target` element of `type` with the given
   * `detail`.
   * @private
   * @param {!EventTarget} target The element on which to fire an event.
   * @param {string} type The type of event to fire.
   * @param {!Object=} detail The detail object to populate on the event.
   * @return {void}
   */function _fire(target,type,detail){var ev=new Event(type,{bubbles:!0,cancelable:!0,composed:!0});ev.detail=detail;wrap$1(/** @type {!Node} */target).dispatchEvent(ev);// forward `preventDefault` in a clean way
if(ev.defaultPrevented){var preventer=detail.preventer||detail.sourceEvent;if(preventer&&preventer.preventDefault){preventer.preventDefault()}}}/**
   * Prevents the dispatch and default action of the given event name.
   *
   * @param {string} evName Event name.
   * @return {void}
   */function _prevent(evName){var recognizer=_findRecognizerByEvent(evName);if(recognizer.info){recognizer.info.prevent=!0}}/**
   * Reset the 2500ms timeout on processing mouse input after detecting touch input.
   *
   * Touch inputs create synthesized mouse inputs anywhere from 0 to 2000ms after the touch.
   * This method should only be called during testing with simulated touch inputs.
   * Calling this method in production may cause duplicate taps or other Gestures.
   *
   * @return {void}
   */function resetMouseCanceller(){if(POINTERSTATE.mouse.mouseIgnoreJob){POINTERSTATE.mouse.mouseIgnoreJob.flush()}}/* eslint-disable valid-jsdoc */register$1({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){untrackDocument(this.info)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(!hasLeftMouseButton(e)){return}var t=_findOriginalTarget(e),self=this,movefn=function movefn(e){if(!hasLeftMouseButton(e)){downupFire("up",t,e);untrackDocument(self.info)}},upfn=function upfn(e){if(hasLeftMouseButton(e)){downupFire("up",t,e)}untrackDocument(self.info)};trackDocument(this.info,movefn,upfn);downupFire("down",t,e)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){downupFire("down",_findOriginalTarget(e),e.changedTouches[0],e)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){downupFire("up",_findOriginalTarget(e),e.changedTouches[0],e)}});/**
     * @param {string} type
     * @param {EventTarget} target
     * @param {Event|Touch} event
     * @param {Event=} preventer
     * @return {void}
     */function downupFire(type,target,event,preventer){if(!target){return}_fire(target,type,{x:event.clientX,y:event.clientY,sourceEvent:event,preventer:preventer,prevent:function prevent(e){return _prevent(e)}})}register$1({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],/** @this {GestureInfo} */addMove:function addMove(move){if(this.moves.length>TRACK_LENGTH){this.moves.shift()}this.moves.push(move)},movefn:null,upfn:null,prevent:!1},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){this.info.state="start";this.info.started=!1;this.info.moves=[];this.info.x=0;this.info.y=0;this.info.prevent=!1;untrackDocument(this.info)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(!hasLeftMouseButton(e)){return}var t=_findOriginalTarget(e),self=this,movefn=function movefn(e){var x=e.clientX,y=e.clientY;if(trackHasMovedEnough(self.info,x,y)){// first move is 'start', subsequent moves are 'move', mouseup is 'end'
self.info.state=self.info.started?"mouseup"===e.type?"end":"track":"start";if("start"===self.info.state){// if and only if tracking, always prevent tap
_prevent("tap")}self.info.addMove({x:x,y:y});if(!hasLeftMouseButton(e)){// always fire "end"
self.info.state="end";untrackDocument(self.info)}if(t){trackFire(self.info,t,e)}self.info.started=!0}},upfn=function upfn(e){if(self.info.started){movefn(e)}// remove the temporary listeners
untrackDocument(self.info)};// add temporary document listeners as mouse retargets
trackDocument(this.info,movefn,upfn);this.info.x=e.clientX;this.info.y=e.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){var ct=e.changedTouches[0];this.info.x=ct.clientX;this.info.y=ct.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchmove:function touchmove(e){var t=_findOriginalTarget(e),ct=e.changedTouches[0],x=ct.clientX,y=ct.clientY;if(trackHasMovedEnough(this.info,x,y)){if("start"===this.info.state){// if and only if tracking, always prevent tap
_prevent("tap")}this.info.addMove({x:x,y:y});trackFire(this.info,t,ct);this.info.state="track";this.info.started=!0}},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){var t=_findOriginalTarget(e),ct=e.changedTouches[0];// only trackend if track was started and not aborted
if(this.info.started){// reset started state on up
this.info.state="end";this.info.addMove({x:ct.clientX,y:ct.clientY});trackFire(this.info,t,ct)}}});/**
     * @param {!GestureInfo} info
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */function trackHasMovedEnough(info,x,y){if(info.prevent){return!1}if(info.started){return!0}var dx=Math.abs(info.x-x),dy=Math.abs(info.y-y);return dx>=TRACK_DISTANCE||dy>=TRACK_DISTANCE}/**
   * @param {!GestureInfo} info
   * @param {?EventTarget} target
   * @param {Touch} touch
   * @return {void}
   */function trackFire(info,target,touch){if(!target){return}var secondlast=info.moves[info.moves.length-2],lastmove=info.moves[info.moves.length-1],dx=lastmove.x-info.x,dy=lastmove.y-info.y,ddx,ddy=0;if(secondlast){ddx=lastmove.x-secondlast.x;ddy=lastmove.y-secondlast.y}_fire(target,"track",{state:info.state,x:touch.clientX,y:touch.clientY,dx:dx,dy:dy,ddx:ddx,ddy:ddy,sourceEvent:touch,hover:function hover(){return deepTargetFind(touch.clientX,touch.clientY)}})}register$1({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=!1},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(hasLeftMouseButton(e)){this.info.x=e.clientX;this.info.y=e.clientY}},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */click:function click(e){if(hasLeftMouseButton(e)){trackForward(this.info,e)}},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){var touch=e.changedTouches[0];this.info.x=touch.clientX;this.info.y=touch.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){trackForward(this.info,e.changedTouches[0],e)}});/**
     * @param {!GestureInfo} info
     * @param {Event | Touch} e
     * @param {Event=} preventer
     * @return {void}
     */function trackForward(info,e,preventer){var dx=Math.abs(e.clientX-info.x),dy=Math.abs(e.clientY-info.y),t=_findOriginalTarget(preventer||e);if(!t||canBeDisabled[/** @type {!HTMLElement} */t.localName]&&t.hasAttribute("disabled")){return}// dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`
if(isNaN(dx)||isNaN(dy)||dx<=TAP_DISTANCE&&dy<=TAP_DISTANCE||isSyntheticClick(e)){// prevent taps from being generated if an event has canceled them
if(!info.prevent){_fire(t,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:preventer})}}}/* eslint-enable valid-jsdoc */ /** @deprecated */var findOriginalTarget=_findOriginalTarget;/** @deprecated */_exports.findOriginalTarget=findOriginalTarget;var add=addListener;/** @deprecated */_exports.add=add;var remove=removeListener;_exports.remove=remove;var gestures$1={gestures:gestures,recognizers:recognizers,deepTargetFind:deepTargetFind,addListener:addListener,removeListener:removeListener,register:register$1,setTouchAction:setTouchAction,prevent:_prevent,resetMouseCanceller:resetMouseCanceller,findOriginalTarget:findOriginalTarget,add:add,remove:remove};_exports.$gestures=gestures$1;var GestureEventListeners=dedupingMixin(function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_GestureEventListeners}
   */var GestureEventListeners=/*#__PURE__*/function(_superClass3){babelHelpers.inherits(GestureEventListeners,_superClass3);function GestureEventListeners(){babelHelpers.classCallCheck(this,GestureEventListeners);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GestureEventListeners).apply(this,arguments))}babelHelpers.createClass(GestureEventListeners,[{key:"_addEventListenerToNode",/**
     * Add the event listener to the node if it is a gestures event.
     *
     * @param {!EventTarget} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     * @override
     */value:function _addEventListenerToNode(node,eventName,handler){if(!addListener(node,eventName,handler)){babelHelpers.get(babelHelpers.getPrototypeOf(GestureEventListeners.prototype),"_addEventListenerToNode",this).call(this,node,eventName,handler)}}/**
       * Remove the event listener to the node if it is a gestures event.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */},{key:"_removeEventListenerFromNode",value:function _removeEventListenerFromNode(node,eventName,handler){if(!removeListener(node,eventName,handler)){babelHelpers.get(babelHelpers.getPrototypeOf(GestureEventListeners.prototype),"_removeEventListenerFromNode",this).call(this,node,eventName,handler)}}}]);return GestureEventListeners}(superClass);return GestureEventListeners});_exports.GestureEventListeners=GestureEventListeners;var gestureEventListeners={GestureEventListeners:GestureEventListeners};_exports.$gestureEventListeners=gestureEventListeners;var HOST_DIR=/:host\(:dir\((ltr|rtl)\)\)/g,HOST_DIR_REPLACMENT=":host([dir=\"$1\"])",EL_DIR=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,EL_DIR_REPLACMENT=":host([dir=\"$2\"]) $1",DIR_CHECK=/:dir\((?:ltr|rtl)\)/,SHIM_SHADOW=!!(window.ShadyDOM&&window.ShadyDOM.inUse),DIR_INSTANCES=[],observer=null,documentDir="";function getRTL(){documentDir=document.documentElement.getAttribute("dir")}/**
   * @param {!Polymer_DirMixin} instance Instance to set RTL status on
   */function setRTL(instance){if(!instance.__autoDirOptOut){var el=/** @type {!HTMLElement} */instance;el.setAttribute("dir",documentDir)}}function updateDirection(){getRTL();documentDir=document.documentElement.getAttribute("dir");for(var _i31=0;_i31<DIR_INSTANCES.length;_i31++){setRTL(DIR_INSTANCES[_i31])}}function takeRecords(){if(observer&&observer.takeRecords().length){updateDirection()}}/**
   * Element class mixin that allows elements to use the `:dir` CSS Selector to
   * have text direction specific styling.
   *
   * With this mixin, any stylesheet provided in the template will transform
   * `:dir` into `:host([dir])` and sync direction with the page via the
   * element's `dir` attribute.
   *
   * Elements can opt out of the global page text direction by setting the `dir`
   * attribute directly in `ready()` or in HTML.
   *
   * Caveats:
   * - Applications must set `<html dir="ltr">` or `<html dir="rtl">` to sync
   *   direction
   * - Automatic left-to-right or right-to-left styling is sync'd with the
   *   `<html>` element only.
   * - Changing `dir` at runtime is supported.
   * - Opting out of the global direction styling is permanent
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyAccessors
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */var DirMixin=dedupingMixin(function(base){if(!SHIM_SHADOW){if(!observer){getRTL();observer=new MutationObserver(updateDirection);observer.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}}/**
     * @constructor
     * @implements {Polymer_PropertyAccessors}
     * @private
     */var elementBase=PropertyAccessors(base),Dir=/*#__PURE__*/function(_elementBase){babelHelpers.inherits(Dir,_elementBase);babelHelpers.createClass(Dir,null,[{key:"_processStyleText",/**
     * @param {string} cssText .
     * @param {string} baseURI .
     * @return {string} .
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */value:function _processStyleText(cssText,baseURI){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
cssText=elementBase._processStyleText.call(this,cssText,baseURI);if(!SHIM_SHADOW&&DIR_CHECK.test(cssText)){cssText=this._replaceDirInCssText(cssText);this.__activateDir=!0}return cssText}/**
       * Replace `:dir` in the given CSS text
       *
       * @param {string} text CSS text to replace DIR
       * @return {string} Modified CSS
       * @nocollapse
       */},{key:"_replaceDirInCssText",value:function _replaceDirInCssText(text){var replacedText=text;replacedText=replacedText.replace(HOST_DIR,HOST_DIR_REPLACMENT);replacedText=replacedText.replace(EL_DIR,EL_DIR_REPLACMENT);return replacedText}}]);function Dir(){var _this14;babelHelpers.classCallCheck(this,Dir);_this14=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Dir).call(this));/** @type {boolean} */_this14.__autoDirOptOut=!1;return _this14}/**
       * @override
       * @suppress {invalidCasts} Closure doesn't understand that `this` is an
       *     HTMLElement
       * @return {void}
       */babelHelpers.createClass(Dir,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"ready",this).call(this);this.__autoDirOptOut=/** @type {!HTMLElement} */this.hasAttribute("dir")}/**
       * @override
       * @suppress {missingProperties} If it exists on elementBase, it can be
       *   super'd
       * @return {void}
       */},{key:"connectedCallback",value:function connectedCallback(){if(elementBase.prototype.connectedCallback){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"connectedCallback",this).call(this)}if(this.constructor.__activateDir){takeRecords();DIR_INSTANCES.push(this);setRTL(this)}}/**
       * @override
       * @suppress {missingProperties} If it exists on elementBase, it can be
       *   super'd
       * @return {void}
       */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(elementBase.prototype.disconnectedCallback){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"disconnectedCallback",this).call(this)}if(this.constructor.__activateDir){var idx=DIR_INSTANCES.indexOf(this);if(-1<idx){DIR_INSTANCES.splice(idx,1)}}}}]);return Dir}(elementBase);/**
                                                * @polymer
                                                * @mixinClass
                                                * @implements {Polymer_DirMixin}
                                                */Dir.__activateDir=!1;return Dir});_exports.DirMixin=DirMixin;var dirMixin={DirMixin:DirMixin};_exports.$dirMixin=dirMixin;var scheduled=!1,beforeRenderQueue=[],afterRenderQueue=[];function schedule(){scheduled=!0;// before next render
requestAnimationFrame(function(){scheduled=!1;flushQueue(beforeRenderQueue);// after the render
setTimeout(function(){runQueue(afterRenderQueue)})})}function flushQueue(queue){while(queue.length){callMethod(queue.shift())}}function runQueue(queue){for(var _i32=0,l=queue.length;_i32<l;_i32++){callMethod(queue.shift())}}function callMethod(info){var context=info[0],callback=info[1],args=info[2];try{callback.apply(context,args)}catch(e){setTimeout(function(){throw e})}}/**
   * Flushes all `beforeNextRender` tasks, followed by all `afterNextRender`
   * tasks.
   *
   * @return {void}
   */function flush(){while(beforeRenderQueue.length||afterRenderQueue.length){flushQueue(beforeRenderQueue);flushQueue(afterRenderQueue)}scheduled=!1}/**
   * Enqueues a callback which will be run before the next render, at
   * `requestAnimationFrame` timing.
   *
   * This method is useful for enqueuing work that requires DOM measurement,
   * since measurement may not be reliable in custom element callbacks before
   * the first render, as well as for batching measurement tasks in general.
   *
   * Tasks in this queue may be flushed by calling `flush()`.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */function beforeNextRender(context,callback,args){if(!scheduled){schedule()}beforeRenderQueue.push([context,callback,args])}/**
   * Enqueues a callback which will be run after the next render, equivalent
   * to one task (`setTimeout`) after the next `requestAnimationFrame`.
   *
   * This method is useful for tuning the first-render performance of an
   * element or application by deferring non-critical work until after the
   * first paint.  Typical non-render-critical work may include adding UI
   * event listeners and aria attributes.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */function afterNextRender(context,callback,args){if(!scheduled){schedule()}afterRenderQueue.push([context,callback,args])}var renderStatus={flush:flush,beforeNextRender:beforeNextRender,afterNextRender:afterNextRender};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$renderStatus=renderStatus;function resolve(){document.body.removeAttribute("unresolved")}if("interactive"===document.readyState||"complete"===document.readyState){resolve()}else{window.addEventListener("DOMContentLoaded",resolve)}function newSplice(index,removed,addedCount){return{index:index,removed:removed,addedCount:addedCount}}var EDIT_LEAVE=0,EDIT_UPDATE=1,EDIT_ADD=2,EDIT_DELETE=3;// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' -> '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd){// "Deletion" columns
// "Addition" rows. Initialize null column.
for(var rowCount=oldEnd-oldStart+1,columnCount=currentEnd-currentStart+1,distances=Array(rowCount),_i33=0;_i33<rowCount;_i33++){distances[_i33]=Array(columnCount);distances[_i33][0]=_i33}// Initialize null row
for(var j=0;j<columnCount;j++){distances[0][j]=j}for(var _i34=1;_i34<rowCount;_i34++){for(var _j=1;_j<columnCount;_j++){if(equals(current[currentStart+_j-1],old[oldStart+_i34-1]))distances[_i34][_j]=distances[_i34-1][_j-1];else{var north=distances[_i34-1][_j]+1,west=distances[_i34][_j-1]+1;distances[_i34][_j]=north<west?north:west}}}return distances}// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances){var i=distances.length-1,j=distances[0].length-1,current=distances[i][j],edits=[];while(0<i||0<j){if(0==i){edits.push(EDIT_ADD);j--;continue}if(0==j){edits.push(EDIT_DELETE);i--;continue}var northWest=distances[i-1][j-1],west=distances[i-1][j],north=distances[i][j-1],min=void 0;if(west<north)min=west<northWest?west:northWest;else min=north<northWest?north:northWest;if(min==northWest){if(northWest==current){edits.push(EDIT_LEAVE)}else{edits.push(EDIT_UPDATE);current=northWest}i--;j--}else if(min==west){edits.push(EDIT_DELETE);i--;current=west}else{edits.push(EDIT_ADD);j--;current=north}}edits.reverse();return edits}/**
   * Splice Projection functions:
   *
   * A splice map is a representation of how a previous array of items
   * was transformed into a new array of items. Conceptually it is a list of
   * tuples of
   *
   *   <index, removed, addedCount>
   *
   * which are kept in ascending index order of. The tuple represents that at
   * the |index|, |removed| sequence of items were removed, and counting forward
   * from |index|, |addedCount| items were added.
   */ /**
       * Lacking individual splice mutation information, the minimal set of
       * splices can be synthesized given the previous state and final state of an
       * array. The basic approach is to calculate the edit distance matrix and
       * choose the shortest path through it.
       *
       * Complexity: O(l * p)
       *   l: The length of the current array
       *   p: The length of the old array
       *
       * @param {!Array} current The current "changed" array for which to
       * calculate splices.
       * @param {number} currentStart Starting index in the `current` array for
       * which splices are calculated.
       * @param {number} currentEnd Ending index in the `current` array for
       * which splices are calculated.
       * @param {!Array} old The original "unchanged" array to compare `current`
       * against to determine splices.
       * @param {number} oldStart Starting index in the `old` array for
       * which splices are calculated.
       * @param {number} oldEnd Ending index in the `old` array for
       * which splices are calculated.
       * @return {!Array} Returns an array of splice record objects. Each of these
       * contains: `index` the location where the splice occurred; `removed`
       * the array of removed items from this location; `addedCount` the number
       * of items added at this location.
       */function calcSplices(current,currentStart,currentEnd,old,oldStart,oldEnd){var prefixCount=0,suffixCount=0,splice,minLength=Math.min(currentEnd-currentStart,oldEnd-oldStart);if(0==currentStart&&0==oldStart)prefixCount=sharedPrefix(current,old,minLength);if(currentEnd==current.length&&oldEnd==old.length)suffixCount=sharedSuffix(current,old,minLength-prefixCount);currentStart+=prefixCount;oldStart+=prefixCount;currentEnd-=suffixCount;oldEnd-=suffixCount;if(0==currentEnd-currentStart&&0==oldEnd-oldStart)return[];if(currentStart==currentEnd){splice=newSplice(currentStart,[],0);while(oldStart<oldEnd){splice.removed.push(old[oldStart++])}return[splice]}else if(oldStart==oldEnd)return[newSplice(currentStart,[],currentEnd-currentStart)];var ops=spliceOperationsFromEditDistances(calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd));splice=void 0;for(var splices=[],index=currentStart,oldIndex=oldStart,_i35=0;_i35<ops.length;_i35++){switch(ops[_i35]){case EDIT_LEAVE:if(splice){splices.push(splice);splice=void 0}index++;oldIndex++;break;case EDIT_UPDATE:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;splice.removed.push(old[oldIndex]);oldIndex++;break;case EDIT_ADD:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;break;case EDIT_DELETE:if(!splice)splice=newSplice(index,[],0);splice.removed.push(old[oldIndex]);oldIndex++;break;}}if(splice){splices.push(splice)}return splices}function sharedPrefix(current,old,searchLength){for(var _i36=0;_i36<searchLength;_i36++){if(!equals(current[_i36],old[_i36]))return _i36}return searchLength}function sharedSuffix(current,old,searchLength){var index1=current.length,index2=old.length,count=0;while(count<searchLength&&equals(current[--index1],old[--index2])){count++}return count}/**
   * Returns an array of splice records indicating the minimum edits required
   * to transform the `previous` array into the `current` array.
   *
   * Splice records are ordered by index and contain the following fields:
   * - `index`: index where edit started
   * - `removed`: array of removed items from this index
   * - `addedCount`: number of items added at this index
   *
   * This function is based on the Levenshtein "minimum edit distance"
   * algorithm. Note that updates are treated as removal followed by addition.
   *
   * The worst-case time complexity of this algorithm is `O(l * p)`
   *   l: The length of the current array
   *   p: The length of the previous array
   *
   * However, the worst-case complexity is reduced by an `O(n)` optimization
   * to detect any shared prefix & suffix between the two arrays and only
   * perform the more expensive minimum edit distance calculation over the
   * non-shared portions of the arrays.
   *
   * @function
   * @param {!Array} current The "changed" array for which splices will be
   * calculated.
   * @param {!Array} previous The "unchanged" original array to compare
   * `current` against to determine the splices.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */function calculateSplices(current,previous){return calcSplices(current,0,current.length,previous,0,previous.length)}function equals(currentValue,previousValue){return currentValue===previousValue}var arraySplice={calculateSplices:calculateSplices};_exports.$arraySplice=arraySplice;function isSlot(node){return"slot"===node.localName}/**
   * Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`. The list of flattened nodes consists
   * of a node's children and, for any children that are `<slot>` elements,
   * the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * The provided `callback` is called whenever any change to this list
   * of flattened nodes occurs, where an addition or removal of a node is
   * considered a change. The `callback` is called with one argument, an object
   * containing an array of any `addedNodes` and `removedNodes`.
   *
   * Note: the callback is called asynchronous to any changes
   * at a microtask checkpoint. This is because observation is performed using
   * `MutationObserver` and the `<slot>` element's `slotchange` event which
   * are asynchronous.
   *
   * An example:
   * ```js
   * class TestSelfObserve extends PolymerElement {
   *   static get is() { return 'test-self-observe';}
   *   connectedCallback() {
   *     super.connectedCallback();
   *     this._observer = new FlattenedNodesObserver(this, (info) => {
   *       this.info = info;
   *     });
   *   }
   *   disconnectedCallback() {
   *     super.disconnectedCallback();
   *     this._observer.disconnect();
   *   }
   * }
   * customElements.define(TestSelfObserve.is, TestSelfObserve);
   * ```
   *
   * @summary Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`.
   * @implements {PolymerDomApi.ObserveHandle}
   */var FlattenedNodesObserver=/*#__PURE__*/function(){babelHelpers.createClass(FlattenedNodesObserver,null,[{key:"getFlattenedNodes",/**
   * Returns the list of flattened nodes for the given `node`.
   * This list consists of a node's children and, for any children
   * that are `<slot>` elements, the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * @param {!HTMLElement|!HTMLSlotElement} node The node for which to
   *      return the list of flattened nodes.
   * @return {!Array<!Node>} The list of flattened nodes for the given `node`.
   * @nocollapse See https://github.com/google/closure-compiler/issues/2763
   */ // eslint-disable-next-line
value:function getFlattenedNodes(node){var wrapped=wrap$1(node);if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return wrapped.assignedNodes({flatten:!0})}else{return Array.from(wrapped.childNodes).map(function(node){if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return wrap$1(node).assignedNodes({flatten:!0})}else{return[node]}}).reduce(function(a,b){return a.concat(b)},[])}}/**
     * @param {!HTMLElement} target Node on which to listen for changes.
     * @param {?function(this: Element, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Function called when there are additions
     * or removals from the target's list of flattened nodes.
     */ // eslint-disable-next-line
}]);function FlattenedNodesObserver(target,callback){var _this15=this;babelHelpers.classCallCheck(this,FlattenedNodesObserver);/**
     * @type {MutationObserver}
     * @private
     */this._shadyChildrenObserver=null;/**
                                            * @type {MutationObserver}
                                            * @private
                                            */this._nativeChildrenObserver=null;this._connected=!1;/**
                              * @type {!HTMLElement}
                              * @private
                              */this._target=target;this.callback=callback;this._effectiveNodes=[];this._observer=null;this._scheduled=!1;/**
                              * @type {function()}
                              * @private
                              */this._boundSchedule=function(){_this15._schedule()};this.connect();this._schedule()}/**
     * Activates an observer. This method is automatically called when
     * a `FlattenedNodesObserver` is created. It should only be called to
     * re-activate an observer that has been deactivated via the `disconnect` method.
     *
     * @return {void}
     */babelHelpers.createClass(FlattenedNodesObserver,[{key:"connect",value:function connect(){var _this16=this;if(isSlot(this._target)){this._listenSlots([this._target])}else if(wrap$1(this._target).children){this._listenSlots(/** @type {!NodeList<!Node>} */wrap$1(this._target).children);if(window.ShadyDOM){this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,function(mutations){_this16._processMutations(mutations)})}else{this._nativeChildrenObserver=new MutationObserver(function(mutations){_this16._processMutations(mutations)});this._nativeChildrenObserver.observe(this._target,{childList:!0})}}this._connected=!0}/**
     * Deactivates the flattened nodes observer. After calling this method
     * the observer callback will not be called when changes to flattened nodes
     * occur. The `connect` method may be subsequently called to reactivate
     * the observer.
     *
     * @return {void}
     * @override
     */},{key:"disconnect",value:function disconnect(){if(isSlot(this._target)){this._unlistenSlots([this._target])}else if(wrap$1(this._target).children){this._unlistenSlots(/** @type {!NodeList<!Node>} */wrap$1(this._target).children);if(window.ShadyDOM&&this._shadyChildrenObserver){window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver);this._shadyChildrenObserver=null}else if(this._nativeChildrenObserver){this._nativeChildrenObserver.disconnect();this._nativeChildrenObserver=null}}this._connected=!1}/**
     * @return {void}
     * @private
     */},{key:"_schedule",value:function _schedule(){var _this17=this;if(!this._scheduled){this._scheduled=!0;microTask.run(function(){return _this17.flush()})}}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */},{key:"_processMutations",value:function _processMutations(mutations){this._processSlotMutations(mutations);this.flush()}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */},{key:"_processSlotMutations",value:function _processSlotMutations(mutations){if(mutations){for(var _i37=0,mutation;_i37<mutations.length;_i37++){mutation=mutations[_i37];if(mutation.addedNodes){this._listenSlots(mutation.addedNodes)}if(mutation.removedNodes){this._unlistenSlots(mutation.removedNodes)}}}}/**
     * Flushes the observer causing any pending changes to be immediately
     * delivered the observer callback. By default these changes are delivered
     * asynchronously at the next microtask checkpoint.
     *
     * @return {boolean} Returns true if any pending changes caused the observer
     * callback to run.
     */},{key:"flush",value:function flush(){if(!this._connected){return!1}if(window.ShadyDOM){ShadyDOM.flush()}if(this._nativeChildrenObserver){this._processSlotMutations(this._nativeChildrenObserver.takeRecords())}else if(this._shadyChildrenObserver){this._processSlotMutations(this._shadyChildrenObserver.takeRecords())}this._scheduled=!1;// process removals
for(var info={target:this._target,addedNodes:[],removedNodes:[]},newNodes=this.constructor.getFlattenedNodes(this._target),splices=calculateSplices(newNodes,this._effectiveNodes),_i38=0,s;_i38<splices.length&&(s=splices[_i38]);_i38++){for(var j=0,n;j<s.removed.length&&(n=s.removed[j]);j++){info.removedNodes.push(n)}}// process adds
for(var _i39=0,_s2;_i39<splices.length&&(_s2=splices[_i39]);_i39++){for(var _j2=_s2.index;_j2<_s2.index+_s2.addedCount;_j2++){info.addedNodes.push(newNodes[_j2])}}// update cache
this._effectiveNodes=newNodes;var didFlush=!1;if(info.addedNodes.length||info.removedNodes.length){didFlush=!0;this.callback.call(this._target,info)}return didFlush}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */},{key:"_listenSlots",value:function _listenSlots(nodeList){for(var _i40=0,n;_i40<nodeList.length;_i40++){n=nodeList[_i40];if(isSlot(n)){n.addEventListener("slotchange",this._boundSchedule)}}}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */},{key:"_unlistenSlots",value:function _unlistenSlots(nodeList){for(var _i41=0,n;_i41<nodeList.length;_i41++){n=nodeList[_i41];if(isSlot(n)){n.removeEventListener("slotchange",this._boundSchedule)}}}}]);return FlattenedNodesObserver}();_exports.FlattenedNodesObserver=FlattenedNodesObserver;var flattenedNodesObserver={FlattenedNodesObserver:FlattenedNodesObserver};_exports.$flattenedNodesObserver=flattenedNodesObserver;var flush$1=function flush$1(){var shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush()}debouncers=flushDebouncers()}while(shadyDOM||debouncers)};_exports.flush$1=_exports.flush=flush$1;var flush$2={enqueueDebouncer:enqueueDebouncer,flush:flush$1};/* eslint-enable no-unused-vars */_exports.$flush=flush$2;var p=Element.prototype,normalizedMatchesSelector=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,matchesSelector=function matchesSelector(node,selector){return normalizedMatchesSelector.call(node,selector)};/**
                              * @const {function(this:Node, string): boolean}
                              */_exports.matchesSelector=matchesSelector;/**
    * Node API wrapper class returned from `Polymer.dom.(target)` when
    * `target` is a `Node`.
    * @implements {PolymerDomApi}
    * @unrestricted
    */var DomApiNative=/*#__PURE__*/function(){/**
   * @param {!Node} node Node for which to create a Polymer.dom helper object.
   */function DomApiNative(node){babelHelpers.classCallCheck(this,DomApiNative);if(window.ShadyDOM&&window.ShadyDOM.inUse){window.ShadyDOM.patch(node)}this.node=node}/**
     * Returns an instance of `FlattenedNodesObserver` that
     * listens for node changes on this element.
     *
     * @param {function(this:HTMLElement, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
     *   of this element changes
     * @return {!PolymerDomApi.ObserveHandle} Observer instance
     * @override
     */babelHelpers.createClass(DomApiNative,[{key:"observeNodes",value:function observeNodes(callback){return new FlattenedNodesObserver(/** @type {!HTMLElement} */this.node,callback)}/**
     * Disconnects an observer previously created via `observeNodes`
     *
     * @param {!PolymerDomApi.ObserveHandle} observerHandle Observer instance
     *   to disconnect.
     * @return {void}
     * @override
     */},{key:"unobserveNodes",value:function unobserveNodes(observerHandle){observerHandle.disconnect()}/**
     * Provided as a backwards-compatible API only.  This method does nothing.
     * @return {void}
     */},{key:"notifyObserver",value:function notifyObserver(){}/**
                       * Returns true if the provided node is contained with this element's
                       * light-DOM children or shadow root, including any nested shadow roots
                       * of children therein.
                       *
                       * @param {Node} node Node to test
                       * @return {boolean} Returns true if the given `node` is contained within
                       *   this element's light or shadow DOM.
                       * @override
                       */},{key:"deepContains",value:function deepContains(node){if(wrap$1(this.node).contains(node)){return!0}var n=node,doc=node.ownerDocument;// walk from node to `this` or `document`
while(n&&n!==doc&&n!==this.node){// use logical parentnode, or native ShadowRoot host
n=wrap$1(n).parentNode||wrap$1(n).host}return n===this.node}/**
     * Returns the root node of this node.  Equivalent to `getRootNode()`.
     *
     * @return {!Node} Top most element in the dom tree in which the node
     * exists. If the node is connected to a document this is either a
     * shadowRoot or the document; otherwise, it may be the node
     * itself or a node or document fragment containing it.
     * @override
     */},{key:"getOwnerRoot",value:function getOwnerRoot(){return wrap$1(this.node).getRootNode()}/**
     * For slot elements, returns the nodes assigned to the slot; otherwise
     * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
     *
     * @return {!Array<!Node>} Array of assigned nodes
     * @override
     */},{key:"getDistributedNodes",value:function getDistributedNodes(){return"slot"===this.node.localName?wrap$1(this.node).assignedNodes({flatten:!0}):[]}/**
     * Returns an array of all slots this element was distributed to.
     *
     * @return {!Array<!HTMLSlotElement>} Description
     * @override
     */},{key:"getDestinationInsertionPoints",value:function getDestinationInsertionPoints(){var ip$=[],n=wrap$1(this.node).assignedSlot;while(n){ip$.push(n);n=wrap$1(n).assignedSlot}return ip$}/**
     * Calls `importNode` on the `ownerDocument` for this node.
     *
     * @param {!Node} node Node to import
     * @param {boolean} deep True if the node should be cloned deeply during
     *   import
     * @return {Node} Clone of given node imported to this owner document
     */},{key:"importNode",value:function importNode(node,deep){var doc=babelHelpers.instanceof(this.node,Document)?this.node:this.node.ownerDocument;return wrap$1(doc).importNode(node,deep)}/**
     * @return {!Array<!Node>} Returns a flattened list of all child nodes and
     * nodes assigned to child slots.
     * @override
     */},{key:"getEffectiveChildNodes",value:function getEffectiveChildNodes(){return FlattenedNodesObserver.getFlattenedNodes(/** @type {!HTMLElement} */this.node)}/**
     * Returns a filtered list of flattened child elements for this element based
     * on the given selector.
     *
     * @param {string} selector Selector to filter nodes against
     * @return {!Array<!HTMLElement>} List of flattened child elements
     * @override
     */},{key:"queryDistributedElements",value:function queryDistributedElements(selector){for(var c$=this.getEffectiveChildNodes(),list=[],_i42=0,l=c$.length,c;_i42<l&&(c=c$[_i42]);_i42++){if(c.nodeType===Node.ELEMENT_NODE&&matchesSelector(c,selector)){list.push(c)}}return list}/**
     * For shadow roots, returns the currently focused element within this
     * shadow root.
     *
     * return {Node|undefined} Currently focused element
     * @override
     */},{key:"activeElement",get:function get(){var node=this.node;return node._activeElement!==void 0?node._activeElement:node.activeElement}}]);return DomApiNative}();function forwardMethods(proto,methods){for(var _loop=function _loop(_i43){var method=methods[_i43];/* eslint-disable valid-jsdoc */proto[method]=/** @this {DomApiNative} */function(){return this.node[method].apply(this.node,arguments)};/* eslint-enable */},_i43=0;_i43<methods.length;_i43++){_loop(_i43)}}function forwardReadOnlyProperties(proto,properties){for(var _loop2=function _loop2(_i44){var name=properties[_i44];Object.defineProperty(proto,name,{get:function get(){var domApi=/** @type {DomApiNative} */this;return domApi.node[name]},configurable:!0})},_i44=0;_i44<properties.length;_i44++){_loop2(_i44)}}function forwardProperties(proto,properties){for(var _loop3=function _loop3(_i45){var name=properties[_i45];Object.defineProperty(proto,name,{/**
       * @this {DomApiNative}
       * @return {*} .
       */get:function get(){return this.node[name]},/**
       * @this {DomApiNative}
       * @param {*} value .
       */set:function set(value){this.node[name]=value},configurable:!0})},_i45=0;_i45<properties.length;_i45++){_loop3(_i45)}}/**
   * Event API wrapper class returned from `dom.(target)` when
   * `target` is an `Event`.
   */var EventApi=/*#__PURE__*/function(){function EventApi(event){babelHelpers.classCallCheck(this,EventApi);this.event=event}/**
     * Returns the first node on the `composedPath` of this event.
     *
     * @return {!EventTarget} The node this event was dispatched to
     */babelHelpers.createClass(EventApi,[{key:"rootTarget",get:function get(){return this.path[0]}/**
     * Returns the local (re-targeted) target for this event.
     *
     * @return {!EventTarget} The local (re-targeted) target for this event.
     */},{key:"localTarget",get:function get(){return this.event.target}/**
     * Returns the `composedPath` for this event.
     * @return {!Array<!EventTarget>} The nodes this event propagated through
     */},{key:"path",get:function get(){return this.event.composedPath()}}]);return EventApi}();/**
   * @function
   * @param {boolean=} deep
   * @return {!Node}
   */_exports.EventApi=EventApi;DomApiNative.prototype.cloneNode;/**
                                   * @function
                                   * @param {!Node} node
                                   * @return {!Node}
                                   */DomApiNative.prototype.appendChild;/**
                                     * @function
                                     * @param {!Node} newChild
                                     * @param {Node} refChild
                                     * @return {!Node}
                                     */DomApiNative.prototype.insertBefore;/**
                                      * @function
                                      * @param {!Node} node
                                      * @return {!Node}
                                      */DomApiNative.prototype.removeChild;/**
                                     * @function
                                     * @param {!Node} oldChild
                                     * @param {!Node} newChild
                                     * @return {!Node}
                                     */DomApiNative.prototype.replaceChild;/**
                                      * @function
                                      * @param {string} name
                                      * @param {string} value
                                      * @return {void}
                                      */DomApiNative.prototype.setAttribute;/**
                                      * @function
                                      * @param {string} name
                                      * @return {void}
                                      */DomApiNative.prototype.removeAttribute;/**
                                         * @function
                                         * @param {string} selector
                                         * @return {?Element}
                                         */DomApiNative.prototype.querySelector;/**
                                       * @function
                                       * @param {string} selector
                                       * @return {!NodeList<!Element>}
                                       */DomApiNative.prototype.querySelectorAll;/** @type {?Node} */DomApiNative.prototype.parentNode;/** @type {?Node} */DomApiNative.prototype.firstChild;/** @type {?Node} */DomApiNative.prototype.lastChild;/** @type {?Node} */DomApiNative.prototype.nextSibling;/** @type {?Node} */DomApiNative.prototype.previousSibling;/** @type {?HTMLElement} */DomApiNative.prototype.firstElementChild;/** @type {?HTMLElement} */DomApiNative.prototype.lastElementChild;/** @type {?HTMLElement} */DomApiNative.prototype.nextElementSibling;/** @type {?HTMLElement} */DomApiNative.prototype.previousElementSibling;/** @type {!Array<!Node>} */DomApiNative.prototype.childNodes;/** @type {!Array<!HTMLElement>} */DomApiNative.prototype.children;/** @type {?DOMTokenList} */DomApiNative.prototype.classList;/** @type {string} */DomApiNative.prototype.textContent;/** @type {string} */DomApiNative.prototype.innerHTML;var DomApiImpl=DomApiNative;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){/**
   * @private
   * @extends {HTMLElement}
   */var Wrapper=/*#__PURE__*/function(_window$ShadyDOM$Wrap){babelHelpers.inherits(Wrapper,_window$ShadyDOM$Wrap);function Wrapper(){babelHelpers.classCallCheck(this,Wrapper);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Wrapper).apply(this,arguments))}return Wrapper}(window.ShadyDOM.Wrapper);// copy bespoke API onto wrapper
Object.getOwnPropertyNames(DomApiNative.prototype).forEach(function(prop){if("activeElement"!=prop){Wrapper.prototype[prop]=DomApiNative.prototype[prop]}});// Note, `classList` is here only for legacy compatibility since it does not
// trigger distribution in v1 Shadow DOM.
forwardReadOnlyProperties(Wrapper.prototype,["classList"]);DomApiImpl=Wrapper;Object.defineProperties(EventApi.prototype,{// Returns the "lowest" node in the same root as the event's currentTarget.
// When in `noPatch` mode, this must be calculated by walking the event's
// path.
localTarget:{get:function get(){for(var current=this.event.currentTarget,currentRoot=current&&dom(current).getOwnerRoot(),p$=this.path,_i46=0,e;_i46<p$.length;_i46++){e=p$[_i46];if(dom(e).getOwnerRoot()===currentRoot){return e}}},configurable:!0},path:{get:function get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else{// Methods that can provoke distribution or must return the logical, not
// composed tree.
forwardMethods(DomApiNative.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]);// Properties that should return the logical, not composed tree. Note, `classList`
// is here only for legacy compatibility since it does not trigger distribution
// in v1 Shadow DOM.
forwardReadOnlyProperties(DomApiNative.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]);forwardProperties(DomApiNative.prototype,["textContent","innerHTML","className"])}var DomApi=DomApiImpl;/**
                                   * Legacy DOM and Event manipulation API wrapper factory used to abstract
                                   * differences between native Shadow DOM and "Shady DOM" when polyfilling on
                                   * older browsers.
                                   *
                                   * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
                                   * in the majority of cases simply facades directly to the standard native
                                   * API.
                                   *
                                   * @summary Legacy DOM and Event manipulation API wrapper factory used to
                                   * abstract differences between native Shadow DOM and "Shady DOM."
                                   * @param {(Node|Event|DomApiNative|EventApi)=} obj Node or event to operate on
                                   * @return {!DomApiNative|!EventApi} Wrapper providing either node API or event API
                                   */_exports.DomApi=DomApi;var dom=function dom(obj){obj=obj||document;if(babelHelpers.instanceof(obj,DomApiImpl)){return(/** @type {!DomApi} */obj)}if(babelHelpers.instanceof(obj,EventApi)){return(/** @type {!EventApi} */obj)}var helper=obj.__domApi;if(!helper){if(babelHelpers.instanceof(obj,Event)){helper=new EventApi(obj)}else{helper=new DomApiImpl(/** @type {Node} */obj)}obj.__domApi=helper}return helper};_exports.dom=dom;var polymer_dom={matchesSelector:matchesSelector,EventApi:EventApi,DomApi:DomApi,dom:dom,flush:flush$1,addDebouncer:enqueueDebouncer};_exports.$polymerDom=polymer_dom;var ShadyDOM$1=window.ShadyDOM,ShadyCSS=window.ShadyCSS;/**
                                   * Return true if node scope is correct.
                                   *
                                   * @param {!Element} node Node to check scope
                                   * @param {!Node} scope Scope reference
                                   * @return {boolean} True if node is in scope
                                   */function sameScope(node,scope){return wrap$1(node).getRootNode()===scope}/**
   * Ensure that elements in a ShadowDOM container are scoped correctly.
   * This function is only needed when ShadyDOM is used and unpatched DOM APIs are used in third party code.
   * This can happen in noPatch mode or when specialized APIs like ranges or tables are used to mutate DOM.
   *
   * @param  {!Element} container Container element to scope
   * @param  {boolean=} shouldObserve if true, start a mutation observer for added nodes to the container
   * @return {?MutationObserver} Returns a new MutationObserver on `container` if `shouldObserve` is true.
   */function _scopeSubtree(container){var shouldObserve=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1;// If using native ShadowDOM, abort
if(!ShadyDOM$1||!ShadyCSS){return null}// ShadyCSS handles DOM mutations when ShadyDOM does not handle scoping itself
if(!ShadyDOM$1.handlesDynamicScoping){return null}var ScopingShim=ShadyCSS.ScopingShim;// if ScopingShim is not available, abort
if(!ScopingShim){return null}// capture correct scope for container
var containerScope=ScopingShim.scopeForNode(container),root=wrap$1(container).getRootNode(),scopify=function scopify(node){if(!sameScope(node,root)){return}// NOTE: native qSA does not honor scoped DOM, but it is faster, and the same behavior as Polymer v1
var elements=Array.from(ShadyDOM$1.nativeMethods.querySelectorAll.call(node,"*"));elements.push(node);for(var _i47=0,el;_i47<elements.length;_i47++){el=elements[_i47];if(!sameScope(el,root)){continue}var currentScope=ScopingShim.currentScopeForNode(el);if(currentScope!==containerScope){if(""!==currentScope){ScopingShim.unscopeNode(el,currentScope)}ScopingShim.scopeNode(el,containerScope)}}};// scope everything in container
scopify(container);if(shouldObserve){var mo=new MutationObserver(function(mxns){for(var _i48=0,mxn;_i48<mxns.length;_i48++){mxn=mxns[_i48];for(var j=0,addedNode;j<mxn.addedNodes.length;j++){addedNode=mxn.addedNodes[j];if(addedNode.nodeType===Node.ELEMENT_NODE){scopify(addedNode)}}}});mo.observe(container,{childList:!0,subtree:!0});return mo}else{return null}}var scopeSubtree$1={scopeSubtree:_scopeSubtree};_exports.$scopeSubtree=scopeSubtree$1;var DISABLED_ATTR="disable-upgrade",findObservedAttributesGetter=function findObservedAttributesGetter(ctor){while(ctor){var desc=Object.getOwnPropertyDescriptor(ctor,"observedAttributes");if(desc){return desc.get}ctor=Object.getPrototypeOf(ctor.prototype).constructor}return function(){return[]}};_exports.findObservedAttributesGetter=findObservedAttributesGetter;/**
    * Element class mixin that allows the element to boot up in a non-enabled
    * state when the `disable-upgrade` attribute is present. This mixin is
    * designed to be used with element classes like PolymerElement that perform
    * initial startup work when they are first connected. When the
    * `disable-upgrade` attribute is removed, if the element is connected, it
    * boots up and "enables" as it otherwise would; if it is not connected, the
    * element boots up when it is next connected.
    *
    * Using `disable-upgrade` with PolymerElement prevents any data propagation
    * to the element, any element DOM from stamping, or any work done in
    * connected/disconnctedCallback from occuring, but it does not prevent work
    * done in the element constructor.
    *
    * Note, this mixin must be applied on top of any element class that
    * itself implements a `connectedCallback` so that it can control the work
    * done in `connectedCallback`. For example,
    *
    *     MyClass = DisableUpgradeMixin(class extends BaseClass {...});
    *
    * @mixinFunction
    * @polymer
    * @appliesMixin ElementMixin
    * @template T
    * @param {function(new:T)} superClass Class to apply mixin to.
    * @return {function(new:T)} superClass with mixin applied.
    */var DisableUpgradeMixin=dedupingMixin(function(base){/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends {HTMLElement}
   * @private
   */var superClass=ElementMixin(base),observedAttributesGetter=findObservedAttributesGetter(superClass),DisableUpgradeClass=/*#__PURE__*/function(_superClass4){babelHelpers.inherits(DisableUpgradeClass,_superClass4);function DisableUpgradeClass(){var _this18;babelHelpers.classCallCheck(this,DisableUpgradeClass);_this18=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DisableUpgradeClass).call(this));/** @type {boolean|undefined} */_this18.__isUpgradeDisabled;return _this18}babelHelpers.createClass(DisableUpgradeClass,[{key:"_initializeProperties",// Prevent element from initializing properties when it's upgrade disabled.
/** @override */value:function _initializeProperties(){if(this.hasAttribute(DISABLED_ATTR)){this.__isUpgradeDisabled=!0}else{babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"_initializeProperties",this).call(this)}}// Prevent element from enabling properties when it's upgrade disabled.
// Normally overriding connectedCallback would be enough, but dom-* elements
/** @override */},{key:"_enableProperties",value:function _enableProperties(){if(!this.__isUpgradeDisabled){babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"_enableProperties",this).call(this)}}// If the element starts upgrade-disabled and a property is set for
// which an accessor exists, the default should not be applied.
// This additional check is needed because defaults are applied via
// `_initializeProperties` which is called after initial properties
// have been set when the element starts upgrade-disabled.
/** @override */},{key:"_canApplyPropertyDefault",value:function _canApplyPropertyDefault(property){return babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"_canApplyPropertyDefault",this).call(this,property)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(property))}/**
       * @override
       * @param {string} name Attribute name.
       * @param {?string} old The previous value for the attribute.
       * @param {?string} value The new value for the attribute.
       * @param {?string} namespace The XML namespace for the attribute.
       * @return {void}
       */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(name==DISABLED_ATTR){// When disable-upgrade is removed, intialize properties and
// provoke connectedCallback if the element is already connected.
if(this.__isUpgradeDisabled&&null==value){babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"_initializeProperties",this).call(this);this.__isUpgradeDisabled=!1;if(wrap$1(this).isConnected){babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"connectedCallback",this).call(this)}}}else{babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"attributeChangedCallback",this).call(this,name,old,value,/** @type {null|string} */namespace)}}// Prevent element from connecting when it's upgrade disabled.
// This prevents user code in `attached` from being called.
/** @override */},{key:"connectedCallback",value:function connectedCallback(){if(!this.__isUpgradeDisabled){babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"connectedCallback",this).call(this)}}// Prevent element from disconnecting when it's upgrade disabled.
// This avoids allowing user code `detached` from being called without a
// paired call to `attached`.
/** @override */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(!this.__isUpgradeDisabled){babelHelpers.get(babelHelpers.getPrototypeOf(DisableUpgradeClass.prototype),"disconnectedCallback",this).call(this)}}}],[{key:"observedAttributes",get:function get(){return observedAttributesGetter.call(this).concat(DISABLED_ATTR)}}]);return DisableUpgradeClass}(superClass);// Work around for closure bug #126934458. Using `super` in a property
// getter does not work so instead we search the Base prototype for an
// implementation of observedAttributes so that we can override and call
// the `super` getter. Note, this is done one time ever because we assume
// that `Base` is always comes from `Polymer.LegacyElementMixn`.
return DisableUpgradeClass});_exports.DisableUpgradeMixin=DisableUpgradeMixin;var disableUpgradeMixin={findObservedAttributesGetter:findObservedAttributesGetter,DisableUpgradeMixin:DisableUpgradeMixin};_exports.$disableUpgradeMixin=disableUpgradeMixin;var bundledImportMeta$1=_objectSpread({},meta,{url:new URL("../node_modules/%40polymer/polymer/lib/legacy/legacy-element-mixin.js",meta.url).href}),DISABLED_ATTR$1="disable-upgrade",styleInterface=window.ShadyCSS,LegacyElementMixin=dedupingMixin(function(base){// TODO(kschaaf): Note, the `@implements {Polymer_DirMixin}` is required here
// (rather than on legacyElementBase) for unknown reasons.
/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @implements {Polymer_GestureEventListeners}
   * @implements {Polymer_DirMixin}
   * @extends {HTMLElement}
   * @private
   */var GesturesElement=GestureEventListeners(ElementMixin(base)),legacyElementBase=builtCSS?GesturesElement:DirMixin(GesturesElement),observedAttributesGetter=findObservedAttributesGetter(legacyElementBase),DIRECTION_MAP={x:"pan-x",y:"pan-y",none:"none",all:"auto"},LegacyElement=/*#__PURE__*/function(_legacyElementBase){babelHelpers.inherits(LegacyElement,_legacyElementBase);function LegacyElement(){var _this19;babelHelpers.classCallCheck(this,LegacyElement);_this19=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LegacyElement).call(this));/** @type {boolean} */_this19.isAttached;/** @type {?WeakMap<!Element, !Object<string, !Function>>} */_this19.__boundListeners;/** @type {?Object<string, ?Function>} */_this19._debouncers;// NOTE: Inlined for perf from version of DisableUpgradeMixin.
/** @type {boolean|undefined} */_this19.__isUpgradeDisabled;/** @type {boolean|undefined} */_this19.__needsAttributesAtConnected;/** @type {boolean|undefined} */_this19._legacyForceObservedAttributes;return _this19}/**
       * Forwards `importMeta` from the prototype (i.e. from the info object
       * passed to `Polymer({...})`) to the static API.
       *
       * @return {!Object} The `import.meta` object set on the prototype
       * @suppress {missingProperties} `this` is always in the instance in
       *  closure for some reason even in a static method, rather than the class
       * @nocollapse
       */babelHelpers.createClass(LegacyElement,[{key:"created",/**
       * Legacy callback called during the `constructor`, for overriding
       * by the user.
       * @override
       * @return {void}
       */value:function created(){}/**
                  * Processes an attribute reaction when the `legacyNoObservedAttributes`
                  * setting is in use.
                  * @param {string} name Name of attribute that changed
                  * @param {?string} old Old attribute value
                  * @param {?string} value New attribute value
                  * @return {void}
                  */},{key:"__attributeReaction",value:function __attributeReaction(name,old,value){if(this.__dataAttributes&&this.__dataAttributes[name]||name===DISABLED_ATTR$1){this.attributeChangedCallback(name,old,value,null)}}/**
       * Sets the value of an attribute.
       * @override
       * @param {string} name The name of the attribute to change.
       * @param {string|number|boolean|!TrustedHTML|!TrustedScriptURL|!TrustedURL} value The new attribute value.
       */},{key:"setAttribute",value:function setAttribute(name,value){if(legacyNoObservedAttributes&&!this._legacyForceObservedAttributes){var oldValue=this.getAttribute(name);babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"setAttribute",this).call(this,name,value);// value coerced to String for closure's benefit
this.__attributeReaction(name,oldValue,value+"")}else{babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"setAttribute",this).call(this,name,value)}}/**
       * Removes an attribute.
       * @override
       * @param {string} name The name of the attribute to remove.
       */},{key:"removeAttribute",value:function removeAttribute(name){if(legacyNoObservedAttributes&&!this._legacyForceObservedAttributes){var oldValue=this.getAttribute(name);babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"removeAttribute",this).call(this,name);this.__attributeReaction(name,oldValue,null)}else{babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"removeAttribute",this).call(this,name)}}// NOTE: Inlined for perf from version of DisableUpgradeMixin.
},{key:"_enableProperties",// NOTE: Inlined for perf from version of DisableUpgradeMixin.
// Prevent element from enabling properties when it's upgrade disabled.
// Normally overriding connectedCallback would be enough, but dom-* elements
/** @override */value:function _enableProperties(){if(!this.__isUpgradeDisabled){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"_enableProperties",this).call(this)}}// NOTE: Inlined for perf from version of DisableUpgradeMixin.
// If the element starts upgrade-disabled and a property is set for
// which an accessor exists, the default should not be applied.
// This additional check is needed because defaults are applied via
// `_initializeProperties` which is called after initial properties
// have been set when the element starts upgrade-disabled.
/** @override */},{key:"_canApplyPropertyDefault",value:function _canApplyPropertyDefault(property){return babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"_canApplyPropertyDefault",this).call(this,property)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(property))}/**
       * Provides an implementation of `connectedCallback`
       * which adds Polymer legacy API's `attached` method.
       * @return {void}
       * @override
       */},{key:"connectedCallback",value:function connectedCallback(){if(this.__needsAttributesAtConnected){this._takeAttributes()}// NOTE: Inlined for perf from version of DisableUpgradeMixin.
if(!this.__isUpgradeDisabled){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"connectedCallback",this).call(this);this.isAttached=!0;this.attached()}}/**
       * Legacy callback called during `connectedCallback`, for overriding
       * by the user.
       * @override
       * @return {void}
       */},{key:"attached",value:function attached(){}/**
                   * Provides an implementation of `disconnectedCallback`
                   * which adds Polymer legacy API's `detached` method.
                   * @return {void}
                   * @override
                   */},{key:"disconnectedCallback",value:function disconnectedCallback(){// NOTE: Inlined for perf from version of DisableUpgradeMixin.
if(!this.__isUpgradeDisabled){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"disconnectedCallback",this).call(this);this.isAttached=!1;this.detached()}}/**
       * Legacy callback called during `disconnectedCallback`, for overriding
       * by the user.
       * @override
       * @return {void}
       */},{key:"detached",value:function detached(){}/**
                   * Provides an override implementation of `attributeChangedCallback`
                   * which adds the Polymer legacy API's `attributeChanged` method.
                   * @param {string} name Name of attribute.
                   * @param {?string} old Old value of attribute.
                   * @param {?string} value Current value of attribute.
                   * @param {?string} namespace Attribute namespace.
                   * @return {void}
                   * @override
                   */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){// NOTE: Inlined for perf from version of DisableUpgradeMixin.
if(name==DISABLED_ATTR$1){// When disable-upgrade is removed, intialize properties and
// provoke connectedCallback if the element is already connected.
if(this.__isUpgradeDisabled&&null==value){this._initializeProperties();this.__isUpgradeDisabled=!1;if(wrap$1(this).isConnected){this.connectedCallback()}}}else{babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"attributeChangedCallback",this).call(this,name,old,value,namespace);this.attributeChanged(name,old,value)}}}/**
       * Legacy callback called during `attributeChangedChallback`, for overriding
       * by the user.
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @return {void}
       * @override
       */},{key:"attributeChanged",value:function attributeChanged(name,old,value){}// eslint-disable-line no-unused-vars
/**
     * Overrides the default `Polymer.PropertyEffects` implementation to
     * add support for class initialization via the `_registered` callback.
     * This is called only when the first instance of the element is created.
     *
     * @return {void}
     * @override
     * @suppress {invalidCasts}
     */},{key:"_initializeProperties",value:function _initializeProperties(){// NOTE: Inlined for perf from version of DisableUpgradeMixin.
// Only auto-use disable-upgrade if legacyOptimizations is set.
if(legacyOptimizations&&this.hasAttribute(DISABLED_ATTR$1)){this.__isUpgradeDisabled=!0}else{var _proto=Object.getPrototypeOf(this);if(!_proto.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",_proto))){this._registered();// backstop in case the `_registered` implementation does not set this
_proto.__hasRegisterFinished=!0}babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"_initializeProperties",this).call(this);this.root=/** @type {HTMLElement} */this;this.created();// Pull all attribute values 1x if `legacyNoObservedAttributes` is set.
if(legacyNoObservedAttributes&&!this._legacyForceObservedAttributes){if(this.hasAttributes()){this._takeAttributes();// Element created from scratch or parser generated
}else if(!this.parentNode){this.__needsAttributesAtConnected=!0}}// Ensure listeners are applied immediately so that they are
// added before declarative event listeners. This allows an element to
// decorate itself via an event prior to any declarative listeners
// seeing the event. Note, this ensures compatibility with 1.x ordering.
this._applyListeners()}}},{key:"_takeAttributes",value:function _takeAttributes(){for(var a=this.attributes,_i49=0,l=a.length,_attr;_i49<l;_i49++){_attr=a[_i49];this.__attributeReaction(_attr.name,null,_attr.value)}}/**
       * Called automatically when an element is initializing.
       * Users may override this method to perform class registration time
       * work. The implementation should ensure the work is performed
       * only once for the class.
       * @protected
       * @return {void}
       * @override
       */},{key:"_registered",value:function _registered(){}/**
                      * Overrides the default `Polymer.PropertyEffects` implementation to
                      * add support for installing `hostAttributes` and `listeners`.
                      *
                      * @return {void}
                      * @override
                      */},{key:"ready",value:function ready(){this._ensureAttributes();babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"ready",this).call(this)}/**
       * Ensures an element has required attributes. Called when the element
       * is being readied via `ready`. Users should override to set the
       * element's required attributes. The implementation should be sure
       * to check and not override existing attributes added by
       * the user of the element. Typically, setting attributes should be left
       * to the element user and not done here; reasonable exceptions include
       * setting aria roles and focusability.
       * @protected
       * @return {void}
       * @override
       */},{key:"_ensureAttributes",value:function _ensureAttributes(){}/**
                            * Adds element event listeners. Called when the element
                            * is being readied via `ready`. Users should override to
                            * add any required element event listeners.
                            * In performance critical elements, the work done here should be kept
                            * to a minimum since it is done before the element is rendered. In
                            * these elements, consider adding listeners asynchronously so as not to
                            * block render.
                            * @protected
                            * @return {void}
                            * @override
                            */},{key:"_applyListeners",value:function _applyListeners(){}/**
                          * Converts a typed JavaScript value to a string.
                          *
                          * Note this method is provided as backward-compatible legacy API
                          * only.  It is not directly called by any Polymer features. To customize
                          * how properties are serialized to attributes for attribute bindings and
                          * `reflectToAttribute: true` properties as well as this method, override
                          * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
                          *
                          * @param {*} value Value to deserialize
                          * @return {string | undefined} Serialized value
                          * @override
                          */},{key:"serialize",value:function serialize(value){return this._serializeValue(value)}/**
       * Converts a string to a typed JavaScript value.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.  To customize
       * how attributes are deserialized to properties for in
       * `attributeChangedCallback`, override `_deserializeValue` method
       * provided by `Polymer.PropertyAccessors`.
       *
       * @param {string} value String to deserialize
       * @param {*} type Type to deserialize the string to
       * @return {*} Returns the deserialized value in the `type` given.
       * @override
       */},{key:"deserialize",value:function deserialize(value,type){return this._deserializeValue(value,type)}/**
       * Serializes a property to its associated attribute.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect.
       * @param {*=} value Property value to reflect.
       * @return {void}
       * @override
       */},{key:"reflectPropertyToAttribute",value:function reflectPropertyToAttribute(property,attribute,value){this._propertyToAttribute(property,attribute,value)}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @param {Element} node Element to set attribute to.
       * @return {void}
       * @override
       */},{key:"serializeValueToAttribute",value:function serializeValueToAttribute(value,attribute,node){this._valueToNodeAttribute(/** @type {Element} */node||this,value,attribute)}/**
       * Copies own properties (including accessor descriptors) from a source
       * object to a target object.
       *
       * @param {Object} prototype Target object to copy properties to.
       * @param {Object} api Source object to copy properties from.
       * @return {Object} prototype object that was passed as first argument.
       * @override
       */},{key:"extend",value:function extend(prototype,api){if(!(prototype&&api)){return prototype||api}for(var n$=Object.getOwnPropertyNames(api),_i50=0,n,pd;_i50<n$.length&&(n=n$[_i50]);_i50++){pd=Object.getOwnPropertyDescriptor(api,n);if(pd){Object.defineProperty(prototype,n,pd)}}return prototype}/**
       * Copies props from a source object to a target object.
       *
       * Note, this method uses a simple `for...in` strategy for enumerating
       * properties.  To ensure only `ownProperties` are copied from source
       * to target and that accessor implementations are copied, use `extend`.
       *
       * @param {!Object} target Target object to copy properties to.
       * @param {!Object} source Source object to copy properties from.
       * @return {!Object} Target object that was passed as first argument.
       * @override
       */},{key:"mixin",value:function mixin(target,source){for(var _i51 in source){target[_i51]=source[_i51]}return target}/**
       * Sets the prototype of an object.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       * @param {Object} object The object on which to set the prototype.
       * @param {Object} prototype The prototype that will be set on the given
       * `object`.
       * @return {Object} Returns the given `object` with its prototype set
       * to the given `prototype` object.
       * @override
       */},{key:"chainObject",value:function chainObject(object,prototype){if(object&&prototype&&object!==prototype){object.__proto__=prototype}return object}/* **** Begin Template **** */ /**
                                      * Calls `importNode` on the `content` of the `template` specified and
                                      * returns a document fragment containing the imported content.
                                      *
                                      * @param {HTMLTemplateElement} template HTML template element to instance.
                                      * @return {!DocumentFragment} Document fragment containing the imported
                                      *   template content.
                                      * @override
                                      * @suppress {missingProperties} go/missingfnprops
                                      */},{key:"instanceTemplate",value:function instanceTemplate(template){var content=this.constructor._contentForTemplate(template),dom=/** @type {!DocumentFragment} */document.importNode(content,!0);return dom}/* **** Begin Events **** */ /**
                                    * Dispatches a custom event with an optional detail value.
                                    *
                                    * @param {string} type Name of event type.
                                    * @param {*=} detail Detail value containing event-specific
                                    *   payload.
                                    * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined),
                                    *     composed: (boolean|undefined) }=}
                                    *  options Object specifying options.  These may include:
                                    *  `bubbles` (boolean, defaults to `true`),
                                    *  `cancelable` (boolean, defaults to false), and
                                    *  `node` on which to fire the event (HTMLElement, defaults to `this`).
                                    * @return {!Event} The new event that was fired.
                                    * @override
                                    */},{key:"fire",value:function fire(type,detail,options){options=options||{};detail=null===detail||detail===void 0?{}:detail;var event=new Event(type,{bubbles:options.bubbles===void 0?!0:options.bubbles,cancelable:!!options.cancelable,composed:options.composed===void 0?!0:options.composed});event.detail=detail;var node=options.node||this;wrap$1(node).dispatchEvent(event);return event}/**
       * Convenience method to add an event listener on a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to add event listener to.
       * @param {string} eventName Name of event to listen for.
       * @param {string} methodName Name of handler method on `this` to call.
       * @return {void}
       * @override
       */},{key:"listen",value:function listen(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;var hbl=this.__boundListeners||(this.__boundListeners=new WeakMap),bl=hbl.get(node);if(!bl){bl={};hbl.set(node,bl)}var key=eventName+methodName;if(!bl[key]){bl[key]=this._addMethodEventListenerToNode(/** @type {!Node} */node,eventName,methodName,this)}}/**
       * Convenience method to remove an event listener from a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to remove event listener from.
       * @param {string} eventName Name of event to stop listening to.
       * @param {string} methodName Name of handler method on `this` to not call
       anymore.
       * @return {void}
       * @override
       */},{key:"unlisten",value:function unlisten(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;var bl=this.__boundListeners&&this.__boundListeners.get(/** @type {!Element} */node),key=eventName+methodName,handler=bl&&bl[key];if(handler){this._removeEventListenerFromNode(/** @type {!Node} */node,eventName,handler);bl[key]=/** @type {?} */null}}/**
       * Override scrolling behavior to all direction, one direction, or none.
       *
       * Valid scroll directions:
       *   - 'all': scroll in any direction
       *   - 'x': scroll only in the 'x' direction
       *   - 'y': scroll only in the 'y' direction
       *   - 'none': disable scrolling for this node
       *
       * @param {string=} direction Direction to allow scrolling
       * Defaults to `all`.
       * @param {Element=} node Element to apply scroll direction setting.
       * Defaults to `this`.
       * @return {void}
       * @override
       */},{key:"setScrollDirection",value:function setScrollDirection(direction,node){setTouchAction(/** @type {!Element} */node||this,DIRECTION_MAP[direction]||"auto")}/* **** End Events **** */ /**
                                  * Convenience method to run `querySelector` on this local DOM scope.
                                  *
                                  * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
                                  *
                                  * @param {string} slctr Selector to run on this local DOM scope
                                  * @return {Element} Element found by the selector, or null if not found.
                                  * @override
                                  */},{key:"$$",value:function $$(slctr){// Note, no need to `wrap` this because root is always patched
return this.root.querySelector(slctr)}/**
       * Return the element whose local dom within which this element
       * is contained. This is a shorthand for
       * `this.getRootNode().host`.
       * @this {Element}
       * @return {?Node} The element whose local dom within which this element is
       * contained.
       * @override
       */},{key:"distributeContent",/**
       * Force this element to distribute its children to its local dom.
       * This should not be necessary as of Polymer 2.0.2 and is provided only
       * for backwards compatibility.
       * @return {void}
       * @override
       */value:function distributeContent(){var thisEl=/** @type {Element} */this,domApi=/** @type {PolymerDomApi} */dom(thisEl);if(window.ShadyDOM&&domApi.shadowRoot){ShadyDOM.flush()}}/**
       * Returns a list of nodes that are the effective childNodes. The effective
       * childNodes list is the same as the element's childNodes except that
       * any `<content>` elements are replaced with the list of nodes distributed
       * to the `<content>`, the result of its `getDistributedNodes` method.
       * @return {!Array<!Node>} List of effective child nodes.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an
       *     HTMLElement
       * @override
       */},{key:"getEffectiveChildNodes",value:function getEffectiveChildNodes(){var thisEl=/** @type {Element} */this,domApi=/** @type {PolymerDomApi} */dom(thisEl);return domApi.getEffectiveChildNodes()}/**
       * Returns a list of nodes distributed within this element that match
       * `selector`. These can be dom children or elements distributed to
       * children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of distributed elements that match selector.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an
       * HTMLElement
       * @override
       */},{key:"queryDistributedElements",value:function queryDistributedElements(selector){var thisEl=/** @type {Element} */this,domApi=/** @type {PolymerDomApi} */dom(thisEl);return domApi.queryDistributedElements(selector)}/**
       * Returns a list of elements that are the effective children. The effective
       * children list is the same as the element's children except that
       * any `<content>` elements are replaced with the list of elements
       * distributed to the `<content>`.
       *
       * @return {!Array<!Node>} List of effective children.
       * @override
       */},{key:"getEffectiveChildren",value:function getEffectiveChildren(){var list=this.getEffectiveChildNodes();return list.filter(function(/** @type {!Node} */n){return n.nodeType===Node.ELEMENT_NODE})}/**
       * Returns a string of text content that is the concatenation of the
       * text content's of the element's effective childNodes (the elements
       * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
       *
       * @return {string} List of effective children.
       * @override
       */},{key:"getEffectiveTextContent",value:function getEffectiveTextContent(){for(var cn=this.getEffectiveChildNodes(),tc=[],_i52=0,c;c=cn[_i52];_i52++){if(c.nodeType!==Node.COMMENT_NODE){tc.push(c.textContent)}}return tc.join("")}/**
       * Returns the first effective childNode within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {Node} First effective child node that matches selector.
       * @override
       */},{key:"queryEffectiveChildren",value:function queryEffectiveChildren(selector){var e$=this.queryDistributedElements(selector);return e$&&e$[0]}/**
       * Returns a list of effective childNodes within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of effective child nodes that match
       *     selector.
       * @override
       */},{key:"queryAllEffectiveChildren",value:function queryAllEffectiveChildren(selector){return this.queryDistributedElements(selector)}/**
       * Returns a list of nodes distributed to this element's `<slot>`.
       *
       * If this element contains more than one `<slot>` in its local DOM,
       * an optional selector may be passed to choose the desired content.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<slot>`.  Defaults to `content`.
       * @return {!Array<!Node>} List of distributed nodes for the `<slot>`.
       * @override
       */},{key:"getContentChildNodes",value:function getContentChildNodes(slctr){// Note, no need to `wrap` this because root is always
var content=this.root.querySelector(slctr||"slot");return content?/** @type {PolymerDomApi} */dom(content).getDistributedNodes():[]}/**
       * Returns a list of element children distributed to this element's
       * `<slot>`.
       *
       * If this element contains more than one `<slot>` in its
       * local DOM, an optional selector may be passed to choose the desired
       * content.  This method differs from `getContentChildNodes` in that only
       * elements are returned.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<content>`.  Defaults to `content`.
       * @return {!Array<!HTMLElement>} List of distributed nodes for the
       *   `<slot>`.
       * @suppress {invalidCasts}
       * @override
       */},{key:"getContentChildren",value:function getContentChildren(slctr){var children=/** @type {!Array<!HTMLElement>} */this.getContentChildNodes(slctr).filter(function(n){return n.nodeType===Node.ELEMENT_NODE});return children}/**
       * Checks whether an element is in this element's light DOM tree.
       *
       * @param {?Node} node The element to be checked.
       * @return {boolean} true if node is in this element's light DOM tree.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an
       * HTMLElement
       * @override
       */},{key:"isLightDescendant",value:function isLightDescendant(node){var thisNode=/** @type {Node} */this;return thisNode!==node&&wrap$1(thisNode).contains(node)&&wrap$1(thisNode).getRootNode()===wrap$1(node).getRootNode()}/**
       * Checks whether an element is in this element's local DOM tree.
       *
       * @param {!Element} node The element to be checked.
       * @return {boolean} true if node is in this element's local DOM tree.
       * @override
       */},{key:"isLocalDescendant",value:function isLocalDescendant(node){return this.root===wrap$1(node).getRootNode()}/**
       * No-op for backwards compatibility. This should now be handled by
       * ShadyCss library.
       * @param  {!Element} container Container element to scope
       * @param  {boolean=} shouldObserve if true, start a mutation observer for added nodes to the container
       * @return {?MutationObserver} Returns a new MutationObserver on `container` if `shouldObserve` is true.
       * @override
       */},{key:"scopeSubtree",value:function scopeSubtree(container){var shouldObserve=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1;return _scopeSubtree(container,shouldObserve)}/**
       * Returns the computed style value for the given property.
       * @param {string} property The css property name.
       * @return {string} Returns the computed css property value for the given
       * `property`.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an
       *     HTMLElement
       * @override
       */},{key:"getComputedStyleValue",value:function getComputedStyleValue(property){return styleInterface.getComputedStyleValue(/** @type {!Element} */this,property)}// debounce
/**
     * Call `debounce` to collapse multiple requests for a named task into
     * one invocation which is made after the wait time has elapsed with
     * no new request.  If no wait time is given, the callback will be called
     * at microtask timing (guaranteed before paint).
     *
     *     debouncedClickAction(e) {
     *       // will not call `processClick` more than once per 100ms
     *       this.debounce('click', function() {
     *        this.processClick();
     *       } 100);
     *     }
     *
     * @param {string} jobName String to identify the debounce job.
     * @param {function():void} callback Function that is called (with `this`
     *   context) when the wait time elapses.
     * @param {number=} wait Optional wait time in milliseconds (ms) after the
     *   last signal that must elapse before invoking `callback`
     * @return {!Object} Returns a debouncer object on which exists the
     * following methods: `isActive()` returns true if the debouncer is
     * active; `cancel()` cancels the debouncer if it is active;
     * `flush()` immediately invokes the debounced callback if the debouncer
     * is active.
     * @override
     */},{key:"debounce",value:function debounce(jobName,callback,wait){this._debouncers=this._debouncers||{};return this._debouncers[jobName]=Debouncer.debounce(this._debouncers[jobName],0<wait?timeOut.after(wait):microTask,callback.bind(this))}/**
       * Returns whether a named debouncer is active.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {boolean} Whether the debouncer is active (has not yet fired).
       * @override
       */},{key:"isDebouncerActive",value:function isDebouncerActive(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];return!!(debouncer&&debouncer.isActive())}/**
       * Immediately calls the debouncer `callback` and inactivates it.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       * @override
       */},{key:"flushDebouncer",value:function flushDebouncer(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];if(debouncer){debouncer.flush()}}/**
       * Cancels an active debouncer.  The `callback` will not be called.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       * @override
       */},{key:"cancelDebouncer",value:function cancelDebouncer(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];if(debouncer){debouncer.cancel()}}/**
       * Runs a callback function asynchronously.
       *
       * By default (if no waitTime is specified), async callbacks are run at
       * microtask timing, which will occur before paint.
       *
       * @param {!Function} callback The callback function to run, bound to
       *     `this`.
       * @param {number=} waitTime Time to wait before calling the
       *   `callback`.  If unspecified or 0, the callback will be run at microtask
       *   timing (before paint).
       * @return {number} Handle that may be used to cancel the async job.
       * @override
       */},{key:"async",value:function async(callback,waitTime){return 0<waitTime?timeOut.run(callback.bind(this),waitTime):~microTask.run(callback.bind(this))}/**
       * Cancels an async operation started with `async`.
       *
       * @param {number} handle Handle returned from original `async` call to
       *   cancel.
       * @return {void}
       * @override
       */},{key:"cancelAsync",value:function cancelAsync(handle){0>handle?microTask.cancel(~handle):timeOut.cancel(handle)}// other
/**
     * Convenience method for creating an element and configuring it.
     *
     * @param {string} tag HTML element tag to create.
     * @param {Object=} props Object of properties to configure on the
     *    instance.
     * @return {!Element} Newly created and configured element.
     * @override
     */},{key:"create",value:function create(tag,props){var elt=document.createElement(tag);if(props){if(elt.setProperties){elt.setProperties(props)}else{for(var n in props){elt[n]=props[n]}}}return elt}/**
       * Polyfill for Element.prototype.matches, which is sometimes still
       * prefixed.
       *
       * @param {string} selector Selector to test.
       * @param {!Element=} node Element to test the selector against.
       * @return {boolean} Whether the element matches the selector.
       * @override
       */},{key:"elementMatches",value:function elementMatches(selector,node){return matchesSelector(node||this,selector)}/**
       * Toggles an HTML attribute on or off.
       *
       * @param {string} name HTML attribute name
       * @param {boolean=} bool Boolean to force the attribute on or off.
       *    When unspecified, the state of the attribute will be reversed.
       * @return {boolean} true if the attribute now exists
       * @override
       */},{key:"toggleAttribute",value:function toggleAttribute(name,bool){var node=/** @type {Element} */this;if(3===arguments.length){node=/** @type {Element} */arguments[2]}if(1==arguments.length){bool=!node.hasAttribute(name)}if(bool){wrap$1(node).setAttribute(name,"");return!0}else{wrap$1(node).removeAttribute(name);return!1}}/**
       * Toggles a CSS class on or off.
       *
       * @param {string} name CSS class name
       * @param {boolean=} bool Boolean to force the class on or off.
       *    When unspecified, the state of the class will be reversed.
       * @param {Element=} node Node to target.  Defaults to `this`.
       * @return {void}
       * @override
       */},{key:"toggleClass",value:function toggleClass(name,bool,node){node=/** @type {Element} */node||this;if(1==arguments.length){bool=!node.classList.contains(name)}if(bool){node.classList.add(name)}else{node.classList.remove(name)}}/**
       * Cross-platform helper for setting an element's CSS `transform` property.
       *
       * @param {string} transformText Transform setting.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`
       * @return {void}
       * @override
       */},{key:"transform",value:function transform(transformText,node){node=/** @type {Element} */node||this;node.style.webkitTransform=transformText;node.style.transform=transformText}/**
       * Cross-platform helper for setting an element's CSS `translate3d`
       * property.
       *
       * @param {number|string} x X offset.
       * @param {number|string} y Y offset.
       * @param {number|string} z Z offset.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`.
       * @return {void}
       * @override
       */},{key:"translate3d",value:function translate3d(x,y,z,node){node=/** @type {Element} */node||this;this.transform("translate3d("+x+","+y+","+z+")",node)}/**
       * Removes an item from an array, if it exists.
       *
       * If the array is specified by path, a change notification is
       * generated, so that observers, data bindings and computed
       * properties watching that path can update.
       *
       * If the array is passed directly, **no change
       * notification is generated**.
       *
       * @param {string | !Array<number|string>} arrayOrPath Path to array from
       *     which to remove the item
       *   (or the array itself).
       * @param {*} item Item to remove.
       * @return {Array} Array containing item removed.
       * @override
       */},{key:"arrayDelete",value:function arrayDelete(arrayOrPath,item){var index;if(Array.isArray(arrayOrPath)){index=arrayOrPath.indexOf(item);if(0<=index){return arrayOrPath.splice(index,1)}}else{var arr=_get(this,arrayOrPath);index=arr.indexOf(item);if(0<=index){return this.splice(arrayOrPath,index,1)}}return null}// logging
/**
     * Facades `console.log`/`warn`/`error` as override point.
     *
     * @param {string} level One of 'log', 'warn', 'error'
     * @param {Array} args Array of strings or objects to log
     * @return {void}
     * @override
     */},{key:"_logger",value:function _logger(level,args){var _console;// accept ['foo', 'bar'] and [['foo', 'bar']]
if(Array.isArray(args)&&1===args.length&&Array.isArray(args[0])){args=args[0]}switch(level){case"log":case"warn":case"error":(_console=console)[level].apply(_console,babelHelpers.toConsumableArray(args));}}/**
       * Facades `console.log` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       * @override
       */},{key:"_log",value:function _log(){for(var _len4=arguments.length,args=Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4]}this._logger("log",args)}/**
       * Facades `console.warn` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       * @override
       */},{key:"_warn",value:function _warn(){for(var _len5=arguments.length,args=Array(_len5),_key5=0;_key5<_len5;_key5++){args[_key5]=arguments[_key5]}this._logger("warn",args)}/**
       * Facades `console.error` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       * @override
       */},{key:"_error",value:function _error(){for(var _len6=arguments.length,args=Array(_len6),_key6=0;_key6<_len6;_key6++){args[_key6]=arguments[_key6]}this._logger("error",args)}/**
       * Formats a message using the element type an a method name.
       *
       * @param {string} methodName Method name to associate with message
       * @param {...*} args Array of strings or objects to log
       * @return {!Array} Array with formatting information for `console`
       *   logging.
       * @override
       */},{key:"_logf",value:function _logf(methodName){for(var _len7=arguments.length,args=Array(1<_len7?_len7-1:0),_key7=1;_key7<_len7;_key7++){args[_key7-1]=arguments[_key7]}return["[%s::%s]",this.is,methodName].concat(args)}},{key:"domHost",get:function get(){var root=wrap$1(this).getRootNode();return babelHelpers.instanceof(root,DocumentFragment)?/** @type {ShadowRoot} */root.host:root}}],[{key:"importMeta",get:function get(){return this.prototype.importMeta}},{key:"observedAttributes",get:function get(){if(legacyNoObservedAttributes&&!this.prototype._legacyForceObservedAttributes){// Ensure this element is property registered with the telemetry system.
if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.__observedAttributes=[];register(this.prototype)}return this.__observedAttributes}else{return observedAttributesGetter.call(this).concat(DISABLED_ATTR$1)}}}]);return LegacyElement}(legacyElementBase);// Note, the DirMixin does nothing if css is built so avoid including it
// in that case.
/**
   * @constructor
   * @extends {GesturesElement}
   * @private
   */LegacyElement.prototype.is="";return LegacyElement});_exports.LegacyElementMixin=LegacyElementMixin;var legacyElementMixin={LegacyElementMixin:LegacyElementMixin};_exports.$legacyElementMixin=legacyElementMixin;var lifecycleProps={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},excludeOnInfo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},excludeOnBehaviors=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},excludeOnInfo);function copyProperties(source,target,excludeProps){for(var noAccessors=source._noAccessors,propertyNames=Object.getOwnPropertyNames(source),_i53=0,_p16;_i53<propertyNames.length;_i53++){_p16=propertyNames[_i53];if(_p16 in excludeProps){continue}if(noAccessors){target[_p16]=source[_p16]}else{var pd=Object.getOwnPropertyDescriptor(source,_p16);if(pd){// ensure property is configurable so that a later behavior can
// re-configure it.
pd.configurable=!0;Object.defineProperty(target,_p16,pd)}}}}/**
   * Applies a "legacy" behavior or array of behaviors to the provided class.
   *
   * Note: this method will automatically also apply the `LegacyElementMixin`
   * to ensure that any legacy behaviors can rely on legacy Polymer API on
   * the underlying element.
   *
   * @function
   * @template T
   * @param {!Object|!Array<!Object>} behaviors Behavior object or array of behaviors.
   * @param {function(new:T)} klass Element class.
   * @return {?} Returns a new Element class extended by the
   * passed in `behaviors` and also by `LegacyElementMixin`.
   * @suppress {invalidCasts, checkTypes}
   */function mixinBehaviors(behaviors,klass){return GenerateClassFromInfo({},LegacyElementMixin(klass),behaviors)}// NOTE:
// 1.x
// Behaviors were mixed in *in reverse order* and de-duped on the fly.
// The rule was that behavior properties were copied onto the element
// prototype if and only if the property did not already exist.
// Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
// (1), B, (2), A, (3) C. This means prototype properties win over
// B properties win over A win over C. This mirrors what would happen
// with inheritance if element extended B extended A extended C.
//
// Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
// `behaviors` array was [C, A, B].
// Behavior lifecycle methods were called in behavior array order
// followed by the element, e.g. (1) C.created, (2) A.created,
// (3) B.created, (4) element.created. There was no support for
// super, and "super-behavior" methods were callable only by name).
//
// 2.x
// Behaviors are made into proper mixins which live in the
// element's prototype chain. Behaviors are placed in the element prototype
// eldest to youngest and de-duped youngest to oldest:
// So, first [A, B, C, A, B] becomes [C, A, B] then,
// the element prototype becomes (oldest) (1) PolymerElement, (2) class(C),
// (3) class(A), (4) class(B), (5) class(Polymer({...})).
// Result:
// This means element properties win over B properties win over A win
// over C. (same as 1.x)
// If lifecycle is called (super then me), order is
// (1) C.created, (2) A.created, (3) B.created, (4) element.created
// (again same as 1.x)
function applyBehaviors(proto,behaviors,lifecycle){for(var _i54=0;_i54<behaviors.length;_i54++){applyInfo(proto,behaviors[_i54],lifecycle,excludeOnBehaviors)}}function applyInfo(proto,info,lifecycle,excludeProps){copyProperties(info,proto,excludeProps);for(var _p17 in lifecycleProps){if(info[_p17]){lifecycle[_p17]=lifecycle[_p17]||[];lifecycle[_p17].push(info[_p17])}}}/**
   * @param {Array} behaviors List of behaviors to flatten.
   * @param {Array=} list Target list to flatten behaviors into.
   * @param {Array=} exclude List of behaviors to exclude from the list.
   * @return {!Array} Returns the list of flattened behaviors.
   */function flattenBehaviors(behaviors,list,exclude){list=list||[];for(var _i55=behaviors.length-1,b;0<=_i55;_i55--){b=behaviors[_i55];if(b){if(Array.isArray(b)){flattenBehaviors(b,list)}else{// dedup
if(0>list.indexOf(b)&&(!exclude||0>exclude.indexOf(b))){list.unshift(b)}}}else{console.warn("behavior is null, check for missing or 404 import")}}return list}/**
   * Copies property descriptors from source to target, overwriting all fields
   * of any previous descriptor for a property *except* for `value`, which is
   * merged in from the target if it does not exist on the source.
   *
   * @param {*} target Target properties object
   * @param {*} source Source properties object
   */function mergeProperties(target,source){for(var _p18 in source){var targetInfo=target[_p18],sourceInfo=source[_p18];if(!("value"in sourceInfo)&&targetInfo&&"value"in targetInfo){target[_p18]=Object.assign({value:targetInfo.value},sourceInfo)}else{target[_p18]=sourceInfo}}}var LegacyElement=LegacyElementMixin(HTMLElement);/* Note about construction and extension of legacy classes.
                                                         [Changed in Q4 2018 to optimize performance.]
                                                       
                                                         When calling `Polymer` or `mixinBehaviors`, the generated class below is
                                                         made. The list of behaviors was previously made into one generated class per
                                                         behavior, but this is no longer the case as behaviors are now called
                                                         manually. Note, there may *still* be multiple generated classes in the
                                                         element's prototype chain if extension is used with `mixinBehaviors`.
                                                       
                                                         The generated class is directly tied to the info object and behaviors
                                                         used to create it. That list of behaviors is filtered so it's only the
                                                         behaviors not active on the superclass. In order to call through to the
                                                         entire list of lifecycle methods, it's important to call `super`.
                                                       
                                                         The element's `properties` and `observers` are controlled via the finalization
                                                         mechanism provided by `PropertiesMixin`. `Properties` and `observers` are
                                                         collected by manually traversing the prototype chain and merging.
                                                       
                                                         To limit changes, the `_registered` method is called via `_initializeProperties`
                                                         and not `_finalizeClass`.
                                                       
                                                       */ /**
                                                           * @param {!PolymerInit} info Polymer info object
                                                           * @param {function(new:HTMLElement)} Base base class to extend with info object
                                                           * @param {Object=} behaviors behaviors to copy into the element
                                                           * @return {function(new:HTMLElement)} Generated class
                                                           * @suppress {checkTypes}
                                                           * @private
                                                           */function GenerateClassFromInfo(info,Base,behaviors){// manages behavior and lifecycle processing (filled in after class definition)
var behaviorList,lifecycle={},PolymerGenerated=/*#__PURE__*/function(_Base){babelHelpers.inherits(PolymerGenerated,_Base);function PolymerGenerated(){babelHelpers.classCallCheck(this,PolymerGenerated);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PolymerGenerated).apply(this,arguments))}babelHelpers.createClass(PolymerGenerated,[{key:"created",/**
       * @return {void}
       */value:function created(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"created",this).call(this);var list=lifecycle.created;if(list){for(var _i56=0;_i56<list.length;_i56++){list[_i56].call(this)}}}/**
       * @return {void}
       */},{key:"_registered",value:function _registered(){/* NOTE: `beforeRegister` is called here for bc, but the behavior
        is different than in 1.x. In 1.0, the method was called *after*
        mixing prototypes together but *before* processing of meta-objects.
        However, dynamic effects can still be set here and can be done either
        in `beforeRegister` or `registered`. It is no longer possible to set
        `is` in `beforeRegister` as you could in 1.x.
      */ // only proceed if the generated class' prototype has not been registered.
var generatedProto=PolymerGenerated.prototype;if(!generatedProto.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",generatedProto))){generatedProto.__hasRegisterFinished=!0;// ensure superclass is registered first.
babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_registered",this).call(this);// copy properties onto the generated class lazily if we're optimizing,
if(legacyOptimizations){copyPropertiesToProto(generatedProto)}// make sure legacy lifecycle is called on the *element*'s prototype
// and not the generated class prototype; if the element has been
// extended, these are *not* the same.
var _proto2=Object.getPrototypeOf(this),list=lifecycle.beforeRegister;if(list){for(var _i57=0;_i57<list.length;_i57++){list[_i57].call(_proto2)}}list=lifecycle.registered;if(list){for(var _i58=0;_i58<list.length;_i58++){list[_i58].call(_proto2)}}}}/**
       * @return {void}
       */},{key:"_applyListeners",value:function _applyListeners(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_applyListeners",this).call(this);var list=lifecycle.listeners;if(list){for(var _i59=0,listeners;_i59<list.length;_i59++){listeners=list[_i59];if(listeners){for(var l in listeners){this._addMethodEventListenerToNode(this,l,listeners[l])}}}}}// note: exception to "super then me" rule;
// do work before calling super so that super attributes
// only apply if not already set.
/**
     * @return {void}
     */},{key:"_ensureAttributes",value:function _ensureAttributes(){var list=lifecycle.hostAttributes;if(list){for(var _i60=list.length-1,hostAttributes;0<=_i60;_i60--){hostAttributes=list[_i60];for(var a in hostAttributes){this._ensureAttribute(a,hostAttributes[a])}}}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_ensureAttributes",this).call(this)}/**
       * @return {void}
       */},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"ready",this).call(this);var list=lifecycle.ready;if(list){for(var _i61=0;_i61<list.length;_i61++){list[_i61].call(this)}}}/**
       * @return {void}
       */},{key:"attached",value:function attached(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"attached",this).call(this);var list=lifecycle.attached;if(list){for(var _i62=0;_i62<list.length;_i62++){list[_i62].call(this)}}}/**
       * @return {void}
       */},{key:"detached",value:function detached(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"detached",this).call(this);var list=lifecycle.detached;if(list){for(var _i63=0;_i63<list.length;_i63++){list[_i63].call(this)}}}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @return {void}
       */},{key:"attributeChanged",value:function attributeChanged(name,old,value){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"attributeChanged",this).call(this);var list=lifecycle.attributeChanged;if(list){for(var _i64=0;_i64<list.length;_i64++){list[_i64].call(this,name,old,value)}}}}],[{key:"_finalizeClass",// explicitly not calling super._finalizeClass
/** @nocollapse */value:function _finalizeClass(){// if calling via a subclass that hasn't been generated, pass through to super
if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
Base._finalizeClass.call(this)}else{// interleave properties and observers per behavior and `info`
if(behaviorList){for(var _i65=0,b;_i65<behaviorList.length;_i65++){b=behaviorList[_i65];if(b.properties){this.createProperties(b.properties)}if(b.observers){this.createObservers(b.observers,b.properties)}}}if(info.properties){this.createProperties(info.properties)}if(info.observers){this.createObservers(info.observers,info.properties)}// make sure to prepare the element template
this._prepareTemplate()}}/** @nocollapse */},{key:"properties",get:function get(){var properties={};if(behaviorList){for(var _i66=0;_i66<behaviorList.length;_i66++){mergeProperties(properties,behaviorList[_i66].properties)}}mergeProperties(properties,info.properties);return properties}/** @nocollapse */},{key:"observers",get:function get(){var observers=[];if(behaviorList){for(var _i67=0,b;_i67<behaviorList.length;_i67++){b=behaviorList[_i67];if(b.observers){observers=observers.concat(b.observers)}}}if(info.observers){observers=observers.concat(info.observers)}return observers}}]);return PolymerGenerated}(Base);// apply behaviors, note actual copying is done lazily at first instance creation
if(behaviors){// NOTE: ensure the behavior is extending a class with
// legacy element api. This is necessary since behaviors expect to be able
// to access 1.x legacy api.
if(!Array.isArray(behaviors)){behaviors=[behaviors]}var superBehaviors=Base.prototype.behaviors;// get flattened, deduped list of behaviors *not* already on super class
behaviorList=flattenBehaviors(behaviors,null,superBehaviors);PolymerGenerated.prototype.behaviors=superBehaviors?superBehaviors.concat(behaviors):behaviorList}var copyPropertiesToProto=function copyPropertiesToProto(proto){if(behaviorList){applyBehaviors(proto,behaviorList,lifecycle)}applyInfo(proto,info,lifecycle,excludeOnInfo)};// copy properties if we're not optimizing
if(!legacyOptimizations){copyPropertiesToProto(PolymerGenerated.prototype)}PolymerGenerated.generatedFrom=info;return PolymerGenerated}/**
   * Generates a class that extends `LegacyElement` based on the
   * provided info object.  Metadata objects on the `info` object
   * (`properties`, `observers`, `listeners`, `behaviors`, `is`) are used
   * for Polymer's meta-programming systems, and any functions are copied
   * to the generated class.
   *
   * Valid "metadata" values are as follows:
   *
   * `is`: String providing the tag name to register the element under. In
   * addition, if a `dom-module` with the same id exists, the first template
   * in that `dom-module` will be stamped into the shadow root of this element,
   * with support for declarative event listeners (`on-...`), Polymer data
   * bindings (`[[...]]` and `{{...}}`), and id-based node finding into
   * `this.$`.
   *
   * `properties`: Object describing property-related metadata used by Polymer
   * features (key: property names, value: object containing property metadata).
   * Valid keys in per-property metadata include:
   * - `type` (String|Number|Object|Array|...): Used by
   *   `attributeChangedCallback` to determine how string-based attributes
   *   are deserialized to JavaScript property values.
   * - `notify` (boolean): Causes a change in the property to fire a
   *   non-bubbling event called `<property>-changed`. Elements that have
   *   enabled two-way binding to the property use this event to observe changes.
   * - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *   To set a read-only property, use the private setter method
   *   `_setProperty(property, value)`.
   * - `observer` (string): Observer method name that will be called when
   *   the property changes. The arguments of the method are
   *   `(value, previousValue)`.
   * - `computed` (string): String describing method and dependent properties
   *   for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *   Computed properties are read-only by default and can only be changed
   *   via the return value of the computing method.
   *
   * `observers`: Array of strings describing multi-property observer methods
   *  and their dependent properties (e.g. `'observeABC(a, b, c)'`).
   *
   * `listeners`: Object describing event listeners to be added to each
   *  instance of this element (key: event name, value: method name).
   *
   * `behaviors`: Array of additional `info` objects containing metadata
   * and callbacks in the same format as the `info` object here which are
   * merged into this element.
   *
   * `hostAttributes`: Object listing attributes to be applied to the host
   *  once created (key: attribute name, value: attribute value).  Values
   *  are serialized based on the type of the value.  Host attributes should
   *  generally be limited to attributes such as `tabIndex` and `aria-...`.
   *  Attributes in `hostAttributes` are only applied if a user-supplied
   *  attribute is not already present (attributes in markup override
   *  `hostAttributes`).
   *
   * In addition, the following Polymer-specific callbacks may be provided:
   * - `registered`: called after first instance of this element,
   * - `created`: called during `constructor`
   * - `attached`: called during `connectedCallback`
   * - `detached`: called during `disconnectedCallback`
   * - `ready`: called before first `attached`, after all properties of
   *   this element have been propagated to its template and all observers
   *   have run
   *
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @template T
   * @param {function(T):T} mixin Optional mixin to apply to legacy base class
   *   before extending with Polymer metaprogramming.
   * @return {function(new:HTMLElement)} Generated class
   */var Class=function Class(info,mixin){if(!info){console.warn("Polymer.Class requires `info` argument")}var klass=mixin?mixin(LegacyElement):LegacyElement;klass=GenerateClassFromInfo(info,klass,info.behaviors);// decorate klass with registration info
klass.is=klass.prototype.is=info.is;return klass};_exports.Class=Class;var _class={mixinBehaviors:mixinBehaviors,Class:Class};_exports.$class=_class;var Polymer=function Polymer(info){// if input is a `class` (aka a function with a prototype), use the prototype
// remember that the `constructor` will never be called
var klass;if("function"===typeof info){klass=info}else{klass=Polymer.Class(info)}// Copy opt out for `legacyNoObservedAttributes` from info object to class.
if(info._legacyForceObservedAttributes){klass.prototype._legacyForceObservedAttributes=info._legacyForceObservedAttributes}customElements.define(klass.is,/** @type {!HTMLElement} */klass);return klass};_exports.Polymer$1=_exports.Polymer=Polymer;Polymer.Class=Class;var polymerFn={Polymer:Polymer};_exports.$polymerFn=polymerFn;function mutablePropertyChange(inst,property,value,old,mutableData){var isObject;if(mutableData){isObject="object"===babelHelpers.typeof(value)&&null!==value;// Pull `old` for Objects from temp cache, but treat `null` as a primitive
if(isObject){old=inst.__dataTemp[property]}}// Strict equality check, but return false for NaN===NaN
var shouldChange=old!==value&&(old===old||value===value);// Objects are stored in temporary cache (cleared at end of
// turn), which is used for dirty-checking
if(isObject&&shouldChange){inst.__dataTemp[property]=value}return shouldChange}/**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `PropertyEffects`
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this mixin or enable the
   * `OptionalMutableData` mixin.
   *
   * In order to make the dirty check strategy configurable, see
   * `OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */var MutableData=dedupingMixin(function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_MutableData}
   */var MutableData=/*#__PURE__*/function(_superClass5){babelHelpers.inherits(MutableData,_superClass5);function MutableData(){babelHelpers.classCallCheck(this,MutableData);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MutableData).apply(this,arguments))}babelHelpers.createClass(MutableData,[{key:"_shouldPropertyChange",/**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,!0)}}]);return MutableData}(superClass);return MutableData});/**
     * Element class mixin to add the optional ability to skip strict
     * dirty-checking for objects and arrays (always consider them to be
     * "dirty") by setting a `mutable-data` attribute on an element instance.
     *
     * By default, `PropertyEffects` performs strict dirty checking on
     * objects, which means that any deep modifications to an object or array will
     * not be propagated unless "immutable" data patterns are used (i.e. all object
     * references from the root to the mutation were changed).
     *
     * Polymer also provides a proprietary data mutation and path notification API
     * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
     * mutation and notification of deep changes in an object graph to all elements
     * bound to the same object graph.
     *
     * In cases where neither immutable patterns nor the data mutation API can be
     * used, applying this mixin will allow Polymer to skip dirty checking for
     * objects and arrays (always consider them to be "dirty").  This allows a
     * user to make a deep modification to a bound object graph, and then either
     * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
     * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
     * elements that wish to be updated based on deep mutations must apply this
     * mixin or otherwise skip strict dirty checking for objects/arrays.
     * Specifically, any elements in the binding tree between the source of a
     * mutation and the consumption of it must enable this mixin or apply the
     * `MutableData` mixin.
     *
     * While this mixin adds the ability to forgo Object/Array dirty checking,
     * the `mutableData` flag defaults to false and must be set on the instance.
     *
     * Note, the performance characteristics of propagating large object graphs
     * will be worse by relying on `mutableData: true` as opposed to using
     * strict dirty checking with immutable patterns or Polymer's path notification
     * API.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin to optionally skip strict dirty-checking
     *   for objects and arrays
     */_exports.MutableData=MutableData;var OptionalMutableData=dedupingMixin(function(superClass){/**
   * @mixinClass
   * @polymer
   * @implements {Polymer_OptionalMutableData}
   */var OptionalMutableData=/*#__PURE__*/function(_superClass6){babelHelpers.inherits(OptionalMutableData,_superClass6);function OptionalMutableData(){babelHelpers.classCallCheck(this,OptionalMutableData);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(OptionalMutableData).apply(this,arguments))}babelHelpers.createClass(OptionalMutableData,[{key:"_shouldPropertyChange",/**
       * Overrides `PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * When `this.mutableData` is true on this instance, this method
       * pulls the value to dirty check against from the `__dataTemp` cache
       * (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData)}}],[{key:"properties",/** @nocollapse */get:function get(){return{/**
         * Instance-level flag for configuring the dirty-checking strategy
         * for this element.  When true, Objects and Arrays will skip dirty
         * checking, otherwise strict equality checking will be used.
         */mutableData:Boolean}}}]);return OptionalMutableData}(superClass);return OptionalMutableData});// Export for use by legacy behavior
_exports.OptionalMutableData=OptionalMutableData;MutableData._mutablePropertyChange=mutablePropertyChange;var mutableData={MutableData:MutableData,OptionalMutableData:OptionalMutableData};// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
_exports.$mutableData=mutableData;var newInstance=null;/**
                         * @constructor
                         * @extends {HTMLTemplateElement}
                         * @private
                         */function HTMLTemplateElementExtension(){return newInstance}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:!0}});/**
     * @constructor
     * @implements {Polymer_PropertyEffects}
     * @extends {HTMLTemplateElementExtension}
     * @private
     */var DataTemplate=PropertyEffects(HTMLTemplateElementExtension),MutableDataTemplate=MutableData(DataTemplate);/**
                                                                     * @constructor
                                                                     * @implements {Polymer_MutableData}
                                                                     * @extends {DataTemplate}
                                                                     * @private
                                                                     */ // Applies a DataTemplate subclass to a <template> instance
function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor;newInstance=null}/**
   * Base class for TemplateInstance.
   * @constructor
   * @extends {HTMLElement}
   * @implements {Polymer_PropertyEffects}
   * @private
   */var templateInstanceBase=PropertyEffects(/*#__PURE__*/function(){function _class2(){babelHelpers.classCallCheck(this,_class2)}return _class2}());function showHideChildren(hide,children){for(var _i68=0,n;_i68<children.length;_i68++){n=children[_i68];// Ignore non-changes
if(!!hide!=!!n.__hideTemplateChildren__){// clear and restore text
if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent=""}else{n.textContent=n.__polymerTextContent__}// remove and replace slot
}else if("slot"===n.localName){if(hide){n.__polymerReplaced__=document.createComment("hidden-slot");wrap$1(wrap$1(n).parentNode).replaceChild(n.__polymerReplaced__,n)}else{var replace=n.__polymerReplaced__;if(replace){wrap$1(wrap$1(replace).parentNode).replaceChild(n,replace)}}}// hide and show nodes
else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display="none"}else{n.style.display=n.__polymerDisplay__}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide)}}}/**
   * @polymer
   * @customElement
   * @appliesMixin PropertyEffects
   * @unrestricted
   */var TemplateInstanceBase=/*#__PURE__*/function(_templateInstanceBase){babelHelpers.inherits(TemplateInstanceBase,_templateInstanceBase);function TemplateInstanceBase(props){var _this20;babelHelpers.classCallCheck(this,TemplateInstanceBase);_this20=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateInstanceBase).call(this));_this20._configureProperties(props);/** @type {!StampedTemplate} */_this20.root=_this20._stampTemplate(_this20.__dataHost);// Save list of stamped children
var children=[];/** @suppress {invalidCasts} */_this20.children=/** @type {!NodeList} */children;// Polymer 1.x did not use `Polymer.dom` here so not bothering.
for(var n=_this20.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=babelHelpers.assertThisInitialized(_this20)}if(_this20.__templatizeOwner&&_this20.__templatizeOwner.__hideTemplateChildren__){_this20._showHideChildren(!0)}// Flush props only when props are passed if instance props exist
// or when there isn't instance props.
var options=_this20.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){_this20._enableProperties()}return _this20}/**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     * @return {void}
     */babelHelpers.createClass(TemplateInstanceBase,[{key:"_configureProperties",value:function _configureProperties(props){var options=this.__templatizeOptions;if(options.forwardHostProp){for(var hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost["_host_"+hprop])}}// Any instance props passed in the constructor will overwrite host props;
// normally this would be a user error but we don't specifically filter them
for(var iprop in props){this._setPendingProperty(iprop,props[iprop])}}/**
     * Forwards a host property to this instance.  This method should be
     * called on instances from the `options.forwardHostProp` callback
     * to propagate changes of host properties to each instance.
     *
     * Note this method enqueues the change, which are flushed as a batch.
     *
     * @param {string} prop Property or path name
     * @param {*} value Value of the property to forward
     * @return {void}
     */},{key:"forwardHostProp",value:function forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,!1,!0)){this.__dataHost._enqueueClient(this)}}/**
     * Override point for adding custom or simulated event handling.
     *
     * @override
     * @param {!Node} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){var _this21=this;if(this._methodHost&&this.__templatizeOptions.parentModel){// If this instance should be considered a parent model, decorate
// events this template instance as `model`
this._methodHost._addEventListenerToNode(node,eventName,function(e){e.model=_this21;handler(e)})}else{// Otherwise delegate to the template's host (which could be)
// another template instance
var templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler)}}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @param {boolean} hide Set to true to hide the children;
     * set to false to show them.
     * @return {void}
     * @protected
     */},{key:"_showHideChildren",value:function _showHideChildren(hide){showHideChildren(hide,this.children)}/**
     * Overrides default property-effects implementation to intercept
     * textContent bindings while children are "hidden" and cache in
     * private storage for later retrieval.
     *
     * @override
     * @param {!Node} node The node to set a property on
     * @param {string} prop The property to set
     * @param {*} value The value to set
     * @return {void}
     * @protected
     */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&"textContent"==prop){node.__polymerTextContent__=value}else{babelHelpers.get(babelHelpers.getPrototypeOf(TemplateInstanceBase.prototype),"_setUnmanagedPropertyToNode",this).call(this,node,prop,value)}}/**
     * Find the parent model of this template instance.  The parent model
     * is either another templatize instance that had option `parentModel: true`,
     * or else the host element.
     *
     * @return {!Polymer_PropertyEffects} The parent model of this instance
     */},{key:"dispatchEvent",/**
     * Stub of HTMLElement's `dispatchEvent`, so that effects that may
     * dispatch events safely no-op.
     *
     * @param {Event} event Event to dispatch
     * @return {boolean} Always true.
     * @override
     */value:function dispatchEvent(event){// eslint-disable-line no-unused-vars
return!0}},{key:"parentModel",get:function get(){var model=this.__parentModel;if(!model){var options;model=this;do{// A template instance's `__dataHost` is a <template>
// `model.__dataHost.__dataHost` is the template's host
model=model.__dataHost.__dataHost}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model}return model}}]);return TemplateInstanceBase}(templateInstanceBase);/** @type {!DataTemplate} */_exports.TemplateInstanceBase=TemplateInstanceBase;TemplateInstanceBase.prototype.__dataHost;/** @type {!TemplatizeOptions} */TemplateInstanceBase.prototype.__templatizeOptions;/** @type {!Polymer_PropertyEffects} */TemplateInstanceBase.prototype._methodHost;/** @type {!Object} */TemplateInstanceBase.prototype.__templatizeOwner;/** @type {!Object} */TemplateInstanceBase.prototype.__hostProps;/**
                                             * @constructor
                                             * @extends {TemplateInstanceBase}
                                             * @implements {Polymer_MutableData}
                                             * @private
                                             */var MutableTemplateInstanceBase=MutableData(// This cast shouldn't be neccessary, but Closure doesn't understand that
// TemplateInstanceBase is a constructor function.
/** @type {function(new:TemplateInstanceBase)} */TemplateInstanceBase);function findMethodHost(template){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
var templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost}/* eslint-disable valid-jsdoc */ /**
                                    * @suppress {missingProperties} class.prototype is not defined for some reason
                                    */function createTemplatizerClass(template,templateInfo,options){/**
   * @constructor
   * @extends {TemplateInstanceBase}
   */var templatizerBase=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;// Affordance for global mixins onto TemplatizeInstance
if(_templatize.mixin){templatizerBase=_templatize.mixin(templatizerBase)}/**
     * Anonymous class created by the templatize
     * @constructor
     * @private
     */var klass=/*#__PURE__*/function(_templatizerBase){babelHelpers.inherits(klass,_templatizerBase);function klass(){babelHelpers.classCallCheck(this,klass);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(klass).apply(this,arguments))}return klass}(templatizerBase);/** @override */klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass}/**
   * Adds propagate effects from the template to the template instance for
   * properties that the host binds to the template using the `_host_` prefix.
   *
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */function addPropagateEffects(target,templateInfo,options,methodHost){var userForwardHostProp=options.forwardHostProp;if(userForwardHostProp&&templateInfo.hasHostProps){// Under the `removeNestedTemplates` optimization, a custom element like
// `dom-if` or `dom-repeat` can itself be treated as the "template"; this
// flag is used to switch between upgrading a `<template>` to be a property
// effects client vs. adding the effects directly to the custom element
var isTemplate="template"==target.localName,klass=templateInfo.templatizeTemplateClass;// Provide data API and property effects on memoized template class
if(!klass){if(isTemplate){/**
         * @constructor
         * @extends {DataTemplate}
         */var templatizedBase=options.mutableData?MutableDataTemplate:DataTemplate,TemplatizedTemplate=/*#__PURE__*/function(_templatizedBase){babelHelpers.inherits(TemplatizedTemplate,_templatizedBase);function TemplatizedTemplate(){babelHelpers.classCallCheck(this,TemplatizedTemplate);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplatizedTemplate).apply(this,arguments))}return TemplatizedTemplate}(templatizedBase);// NOTE: due to https://github.com/google/closure-compiler/issues/2928,
// combining the next two lines into one assignment causes a spurious
// type error.
/** @private */klass=templateInfo.templatizeTemplateClass=TemplatizedTemplate}else{/**
         * @constructor
         * @extends {PolymerElement}
         */var _templatizedBase2=target.constructor,TemplatizedTemplateExtension=/*#__PURE__*/function(_templatizedBase3){babelHelpers.inherits(TemplatizedTemplateExtension,_templatizedBase3);function TemplatizedTemplateExtension(){babelHelpers.classCallCheck(this,TemplatizedTemplateExtension);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplatizedTemplateExtension).apply(this,arguments))}return TemplatizedTemplateExtension}(_templatizedBase2);// Create a cached subclass of the base custom element class onto which
// to put the template-specific propagate effects
// NOTE: due to https://github.com/google/closure-compiler/issues/2928,
// combining the next two lines into one assignment causes a spurious
// type error.
/** @private */klass=templateInfo.templatizeTemplateClass=TemplatizedTemplateExtension}// Add template - >instances effects
// and host <- template effects
var hostProps=templateInfo.hostProps;for(var prop in hostProps){klass.prototype._addPropertyEffect("_host_"+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty("_host_"+prop)}if(legacyWarnings&&methodHost){warnOnUndeclaredProperties(templateInfo,options,methodHost)}}// Mix any pre-bound data into __data; no need to flush this to
// instances since they pull from the template at instance-time
if(target.__dataProto){// Note, generally `__dataProto` could be chained, but it's guaranteed
// to not be since this is a vanilla template we just added effects to
Object.assign(target.__data,target.__dataProto)}if(isTemplate){upgradeTemplate(target,klass);// Clear any pending data for performance
target.__dataTemp={};target.__dataPending=null;target.__dataOld=null;target._enableProperties()}else{// Swizzle the cached subclass prototype onto the custom element
Object.setPrototypeOf(target,klass.prototype);// Check for any pre-bound instance host properties, and do the
// instance property delete/assign dance for those (directly into data;
// not need to go through accessor since they are pulled at instance time)
var _hostProps=templateInfo.hostProps;for(var _prop in _hostProps){_prop="_host_"+_prop;if(_prop in target){var val=target[_prop];delete target[_prop];target.__data[_prop]=val}}}}}/* eslint-enable valid-jsdoc */function createForwardHostPropEffect(hostProp,userForwardHostProp){return function forwardHostProp(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring("_host_".length),props[prop])}}function addNotifyEffects(klass,template,templateInfo,options){var hostProps=templateInfo.hostProps||{};for(var iprop in options.instanceProps){delete hostProps[iprop];var userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)})}}if(options.forwardHostProp&&template.__dataHost){for(var hprop in hostProps){// As we're iterating hostProps in this function, note whether
// there were any, for an optimization in addPropagateEffects
if(!templateInfo.hasHostProps){templateInfo.hasHostProps=!0}klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()})}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function notifyInstanceProp(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop])}}function createNotifyHostPropEffect(){return function notifyHostProp(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath("_host_"+prop,props[prop],!0,!0)}}/**
   * Returns an anonymous `PropertyEffects` class bound to the
   * `<template>` provided.  Instancing the class will result in the
   * template being stamped into a document fragment stored as the instance's
   * `root` property, after which it can be appended to the DOM.
   *
   * Templates may utilize all Polymer data-binding features as well as
   * declarative event listeners.  Event listeners and inline computing
   * functions in the template will be called on the host of the template.
   *
   * The constructor returned takes a single argument dictionary of initial
   * property values to propagate into template bindings.  Additionally
   * host properties can be forwarded in, and instance properties can be
   * notified out by providing optional callbacks in the `options` dictionary.
   *
   * Valid configuration in `options` are as follows:
   *
   * - `forwardHostProp(property, value)`: Called when a property referenced
   *   in the template changed on the template's host. As this library does
   *   not retain references to templates instanced by the user, it is the
   *   templatize owner's responsibility to forward host property changes into
   *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
   *    method on the generated class should be called to forward host
   *   properties into the template to prevent unnecessary property-changed
   *   notifications. Any properties referenced in the template that are not
   *   defined in `instanceProps` will be notified up to the template's host
   *   automatically.
   * - `instanceProps`: Dictionary of property names that will be added
   *   to the instance by the templatize owner.  These properties shadow any
   *   host properties, and changes within the template to these properties
   *   will result in `notifyInstanceProp` being called.
   * - `mutableData`: When `true`, the generated class will skip strict
   *   dirty-checking for objects and arrays (always consider them to be
   *   "dirty").
   * - `notifyInstanceProp(instance, property, value)`: Called when
   *   an instance property changes.  Users may choose to call `notifyPath`
   *   on e.g. the owner to notify the change.
   * - `parentModel`: When `true`, events handled by declarative event listeners
   *   (`on-event="handler"`) will be decorated with a `model` property pointing
   *   to the template instance that stamped it.  It will also be returned
   *   from `instance.parentModel` in cases where template instance nesting
   *   causes an inner model to shadow an outer model.
   *
   * All callbacks are called bound to the `owner`. Any context
   * needed for the callbacks (such as references to `instances` stamped)
   * should be stored on the `owner` such that they can be retrieved via
   * `this`.
   *
   * When `options.forwardHostProp` is declared as an option, any properties
   * referenced in the template will be automatically forwarded from the host of
   * the `<template>` to instances, with the exception of any properties listed in
   * the `options.instanceProps` object.  `instanceProps` are assumed to be
   * managed by the owner of the instances, either passed into the constructor
   * or set after the fact.  Note, any properties passed into the constructor will
   * always be set to the instance (regardless of whether they would normally
   * be forwarded from the host).
   *
   * Note that `templatize()` can be run only once for a given `<template>`.
   * Further calls will result in an error. Also, there is a special
   * behavior if the template was duplicated through a mechanism such as
   * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
   * `templatize()` return the same class for all duplicates of a template.
   * The class returned from `templatize()` is generated only once using
   * the `options` from the first call. This means that any `options`
   * provided to subsequent calls will be ignored. Therefore, it is very
   * important not to close over any variables inside the callbacks. Also,
   * arrow functions must be avoided because they bind the outer `this`.
   * Inside the callbacks, any contextual information can be accessed
   * through `this`, which points to the `owner`.
   *
   * @param {!HTMLTemplateElement} template Template to templatize
   * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
   *   any optional callbacks will be bound to this owner.
   * @param {Object=} options Options dictionary (see summary for details)
   * @return {function(new:TemplateInstanceBase, Object=)} Generated class bound
   *   to the template provided
   * @suppress {invalidCasts}
   */function _templatize(template,owner,options){// Under strictTemplatePolicy, the templatized element must be owned
// by a (trusted) Polymer element, indicated by existence of _methodHost;
// e.g. for dom-if & dom-repeat in main document, _methodHost is null
if(strictTemplatePolicy&&!findMethodHost(template)){throw new Error("strictTemplatePolicy: template owner not trusted")}options=/** @type {!TemplatizeOptions} */options||{};if(template.__templatizeOwner){throw new Error("A <template> can only be templatized once")}template.__templatizeOwner=owner;var ctor=owner?owner.constructor:TemplateInstanceBase,templateInfo=ctor._parseTemplate(template),baseClass=templateInfo.templatizeInstanceClass;if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass}var methodHost=findMethodHost(template);// Host property forwarding must be installed onto template instance
addPropagateEffects(template,templateInfo,options,methodHost);// Subclass base class and add reference for this specific template
/** @private */var klass=/*#__PURE__*/function(_baseClass){babelHelpers.inherits(TemplateInstance,_baseClass);function TemplateInstance(){babelHelpers.classCallCheck(this,TemplateInstance);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateInstance).apply(this,arguments))}return TemplateInstance}(baseClass);/** @override */klass.prototype._methodHost=methodHost;/** @override */klass.prototype.__dataHost=/** @type {!DataTemplate} */template;/** @override */klass.prototype.__templatizeOwner=/** @type {!Object} */owner;/** @override */klass.prototype.__hostProps=templateInfo.hostProps;klass=/** @type {function(new:TemplateInstanceBase)} */klass;//eslint-disable-line no-self-assign
return klass}function warnOnUndeclaredProperties(templateInfo,options,methodHost){var declaredProps=methodHost.constructor._properties,propertyEffects=templateInfo.propertyEffects,instanceProps=options.instanceProps;for(var prop in propertyEffects){// Ensure properties with template effects are declared on the outermost
// host (`methodHost`), unless they are instance props or static functions
if(!declaredProps[prop]&&!(instanceProps&&instanceProps[prop])){for(var effects=propertyEffects[prop],_i69=0,part;_i69<effects.length;_i69++){part=effects[_i69].info.part;if(!(part.signature&&part.signature.static)){console.warn("Property '".concat(prop,"' used in template but not ")+"declared in 'properties'; attribute will not be observed.");break}}}}}/**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model is an instance of
   * `TemplateInstanceBase`, and should be used to manipulate data
   * associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {HTMLElement} template The model will be returned for
   *   elements stamped from this template (accepts either an HTMLTemplateElement)
   *   or a `<dom-if>`/`<dom-repeat>` element when using `removeNestedTemplates`
   *   optimization.
   * @param {Node=} node Node for which to return a template model.
   * @return {TemplateInstanceBase} Template instance representing the
   *   binding scope for the element
   */function _modelForElement(template,node){var model;while(node){// An element with a __templatizeInstance marks the top boundary
// of a scope; walk up until we find one, and then ensure that
// its __dataHost matches `this`, meaning this dom-repeat stamped it
if(model=node.__dataHost?node:node.__templatizeInstance){// Found an element stamped by another template; keep walking up
// from its __dataHost
if(model.__dataHost!=template){node=model.__dataHost}else{return model}}else{// Still in a template scope, keep going up until
// a __templatizeInstance is found
node=wrap$1(node).parentNode}}return null}var templatize$1={showHideChildren:showHideChildren,templatize:_templatize,modelForElement:_modelForElement,TemplateInstanceBase:TemplateInstanceBase};/**
    * @typedef {{
    *   _templatizerTemplate: HTMLTemplateElement,
    *   _parentModel: boolean,
    *   _instanceProps: Object,
    *   _forwardHostPropV2: Function,
    *   _notifyInstancePropV2: Function,
    *   ctor: function(new:TemplateInstanceBase, Object=)
    * }}
    */_exports.$templatize=templatize$1;var TemplatizerUser,Templatizer={/**
   * Generates an anonymous `TemplateInstance` class (stored as `this.ctor`)
   * for the provided template.  This method should be called once per
   * template to prepare an element for stamping the template, followed
   * by `stamp` to create new instances of the template.
   *
   * @param {!HTMLTemplateElement} template Template to prepare
   * @param {boolean=} mutableData When `true`, the generated class will skip
   *   strict dirty-checking for objects and arrays (always consider them to
   *   be "dirty"). Defaults to false.
   * @return {void}
   * @this {TemplatizerUser}
   */templatize:function templatize(template,mutableData){this._templatizerTemplate=template;this.ctor=_templatize(template,/** @type {!Polymer_PropertyEffects} */this,{mutableData:!!mutableData,parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},/**
   * Creates an instance of the template prepared by `templatize`.  The object
   * returned is an instance of the anonymous class generated by `templatize`
   * whose `root` property is a document fragment containing newly cloned
   * template content, and which has property accessors corresponding to
   * properties referenced in template bindings.
   *
   * @param {Object=} model Object containing initial property values to
   *   populate into the template bindings.
   * @return {TemplateInstanceBase} Returns the created instance of
   * the template prepared by `templatize`.
   * @this {TemplatizerUser}
   */stamp:function stamp(model){return new this.ctor(model)},/**
   * Returns the template "model" (`TemplateInstance`) associated with
   * a given element, which serves as the binding scope for the template
   * instance the element is contained in.  A template model should be used
   * to manipulate data associated with this template instance.
   *
   * @param {HTMLElement} el Element for which to return a template model.
   * @return {TemplateInstanceBase} Model representing the binding scope for
   *   the element.
   * @this {TemplatizerUser}
   */modelForElement:function modelForElement(el){return _modelForElement(this._templatizerTemplate,el)}};// eslint-disable-line
/**
 * The `Templatizer` behavior adds methods to generate instances of
 * templates that are each managed by an anonymous `PropertyEffects`
 * instance where data-bindings in the stamped template content are bound to
 * accessors on itself.
 *
 * This behavior is provided in Polymer 2.x-3.x as a hybrid-element convenience
 * only.  For non-hybrid usage, the `Templatize` library
 * should be used instead.
 *
 * Example:
 *
 *     import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';
 *     // Get a template from somewhere, e.g. light DOM
 *     let template = this.querySelector('template');
 *     // Prepare the template
 *     this.templatize(template);
 *     // Instance the template with an initial data model
 *     let instance = this.stamp({myProp: 'initial'});
 *     // Insert the instance's DOM somewhere, e.g. light DOM
 *     dom(this).appendChild(instance.root);
 *     // Changing a property on the instance will propagate to bindings
 *     // in the template
 *     instance.myProp = 'new value';
 *
 * Users of `Templatizer` may need to implement the following abstract
 * API's to determine how properties and paths from the host should be
 * forwarded into to instances:
 *
 *     _forwardHostPropV2: function(prop, value)
 *
 * Likewise, users may implement these additional abstract API's to determine
 * how instance-specific properties that change on the instance should be
 * forwarded out to the host, if necessary.
 *
 *     _notifyInstancePropV2: function(inst, prop, value)
 *
 * In order to determine which properties are instance-specific and require
 * custom notification via `_notifyInstanceProp`, define an `_instanceProps`
 * object containing keys for each instance prop, for example:
 *
 *     _instanceProps: {
 *       item: true,
 *       index: true
 *     }
 *
 * Any properties used in the template that are not defined in _instanceProp
 * will be forwarded out to the Templatize `owner` automatically.
 *
 * Users may also implement the following abstract function to show or
 * hide any DOM generated using `stamp`:
 *
 *     _showHideChildren: function(shouldHide)
 *
 * Note that some callbacks are suffixed with `V2` in the Polymer 2.x behavior
 * as the implementations will need to differ from the callbacks required
 * by the 1.x Templatizer API due to changes in the `TemplateInstance` API
 * between versions 1.x and 2.x.
 *
 * @polymerBehavior
 */_exports.Templatizer=Templatizer;var templatizerBehavior={Templatizer:Templatizer};_exports.$templatizerBehavior=templatizerBehavior;var elementsHidden=!1;/**
                             * @return {boolean} True if elements will be hidden globally
                             */function hideElementsGlobally(){if(legacyOptimizations&&!useShadow){if(!elementsHidden){elementsHidden=!0;var _style7=document.createElement("style");_style7.textContent="dom-bind,dom-if,dom-repeat{display:none;}";document.head.appendChild(_style7)}return!0}return!1}var hideTemplateControls={hideElementsGlobally:hideElementsGlobally};_exports.$hideTemplateControls=hideTemplateControls;var domBindBase=GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement))),DomBind=/*#__PURE__*/function(_domBindBase){babelHelpers.inherits(DomBind,_domBindBase);babelHelpers.createClass(DomBind,null,[{key:"observedAttributes",get:function get(){return["mutable-data"]}}]);function DomBind(){var _this22;babelHelpers.classCallCheck(this,DomBind);_this22=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomBind).call(this));if(strictTemplatePolicy){throw new Error("strictTemplatePolicy: dom-bind not allowed")}_this22.root=null;_this22.$=null;_this22.__children=null;return _this22}/* eslint-disable no-unused-vars */ /**
                                         * @override
                                         * @param {string} name Name of attribute that changed
                                         * @param {?string} old Old attribute value
                                         * @param {?string} value New attribute value
                                         * @param {?string} namespace Attribute namespace.
                                         * @return {void}
                                         */babelHelpers.createClass(DomBind,[{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){// assumes only one observed attribute
this.mutableData=!0}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){if(!hideElementsGlobally()){this.style.display="none"}this.render()}/**
     * @override
     * @return {void}
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){this.__removeChildren()}},{key:"__insertChildren",value:function __insertChildren(){wrap$1(wrap$1(this).parentNode).insertBefore(this.root,this)}},{key:"__removeChildren",value:function __removeChildren(){if(this.__children){for(var _i70=0;_i70<this.__children.length;_i70++){this.root.appendChild(this.__children[_i70])}}}/**
     * Forces the element to render its content. This is typically only
     * necessary to call if HTMLImports with the async attribute are used.
     * @return {void}
     */},{key:"render",value:function render(){var _this23=this,template;if(!this.__children){template=/** @type {?HTMLTemplateElement} */template||this.querySelector("template");if(!template){// Wait until childList changes and template should be there by then
var _observer=new MutationObserver(function(){template=/** @type {HTMLTemplateElement} */_this23.querySelector("template");if(template){_observer.disconnect();_this23.render()}else{throw new Error("dom-bind requires a <template> child")}});_observer.observe(this,{childList:!0});return}this.root=this._stampTemplate(/** @type {!HTMLTemplateElement} */template);this.$=this.root.$;this.__children=[];for(var n=this.root.firstChild;n;n=n.nextSibling){this.__children[this.__children.length]=n}this._enableProperties()}this.__insertChildren();this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}]);return DomBind}(domBindBase);/**
                                                                                               * Custom element to allow using Polymer's template features (data binding,
                                                                                               * declarative event listeners, etc.) in the main document without defining
                                                                                               * a new custom element.
                                                                                               *
                                                                                               * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
                                                                                               * element, which will immediately stamp the wrapped template into the main
                                                                                               * document and bind elements to the `dom-bind` element itself as the
                                                                                               * binding scope.
                                                                                               *
                                                                                               * @polymer
                                                                                               * @customElement
                                                                                               * @appliesMixin PropertyEffects
                                                                                               * @appliesMixin OptionalMutableData
                                                                                               * @appliesMixin GestureEventListeners
                                                                                               * @extends {domBindBase}
                                                                                               * @summary Custom element to allow using Polymer's template features (data
                                                                                               *   binding, declarative event listeners, etc.) in the main document.
                                                                                               */_exports.DomBind=DomBind;customElements.define("dom-bind",DomBind);var domBind={DomBind:DomBind};_exports.$domBind=domBind;var LiteralString=/*#__PURE__*/function(){function LiteralString(string){babelHelpers.classCallCheck(this,LiteralString);/** @type {string} */this.value=string.toString()}/**
     * @return {string} LiteralString string value
     * @override
     */babelHelpers.createClass(LiteralString,[{key:"toString",value:function toString(){return this.value}}]);return LiteralString}();/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function literalValue(value){if(babelHelpers.instanceof(value,LiteralString)){return(/** @type {!LiteralString} */value.value)}else{throw new Error("non-literal value passed to Polymer's htmlLiteral function: ".concat(value))}}/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function htmlValue(value){if(babelHelpers.instanceof(value,HTMLTemplateElement)){return(/** @type {!HTMLTemplateElement } */value.innerHTML)}else if(babelHelpers.instanceof(value,LiteralString)){return literalValue(value)}else{throw new Error("non-template value passed to Polymer's html function: ".concat(value))}}/**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>:host{ content:"..." }</style>
   *         <div class="shadowed">${this.partialTemplate}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get partialTemplate() { return html`<span>Partial!</span>`; }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */var html=function html(strings){for(var template=/** @type {!HTMLTemplateElement} */document.createElement("template"),_len8=arguments.length,values=Array(1<_len8?_len8-1:0),_key8=1;_key8<_len8;_key8++){values[_key8-1]=arguments[_key8]}template.innerHTML=values.reduce(function(acc,v,idx){return acc+htmlValue(v)+strings[idx+1]},strings[0]);return template};/**
    * An html literal tag that can be used with `html` to compose.
    * a literal string.
    *
    * Example:
    *
    *     static get template() {
    *       return html`
    *         <style>
    *           :host { display: block; }
    *           ${this.styleTemplate()}
    *         </style>
    *         <div class="shadowed">${staticValue}</div>
    *         ${super.template}
    *       `;
    *     }
    *     static get styleTemplate() {
    *        return htmlLiteral`.shadowed { background: gray; }`;
    *     }
    *
    * @param {!ITemplateArray} strings Constant parts of tagged template literal
    * @param {...*} values Variable parts of tagged template literal
    * @return {!LiteralString} Constructed literal string
    */_exports.html$2=_exports.html$1=_exports.html=html;var htmlLiteral=function htmlLiteral(strings){for(var _len9=arguments.length,values=Array(1<_len9?_len9-1:0),_key9=1;_key9<_len9;_key9++){values[_key9-1]=arguments[_key9]}return new LiteralString(values.reduce(function(acc,v,idx){return acc+literalValue(v)+strings[idx+1]},strings[0]))};_exports.htmlLiteral=htmlLiteral;var htmlTag={html:html,htmlLiteral:htmlLiteral};_exports.$htmlTag=htmlTag;var PolymerElement=ElementMixin(HTMLElement);_exports.PolymerElement=PolymerElement;var polymerElement={version:version,PolymerElement:PolymerElement,html:html};_exports.$polymerElement=polymerElement;var domRepeatBase=OptionalMutableData(PolymerElement),DomRepeat=/*#__PURE__*/function(_domRepeatBase){babelHelpers.inherits(DomRepeat,_domRepeatBase);babelHelpers.createClass(DomRepeat,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return"dom-repeat"}},{key:"template",get:function get(){return null}},{key:"properties",get:function get(){/**
     * Fired whenever DOM is added or removed by this template (by
     * default, rendering occurs lazily).  To force immediate rendering, call
     * `render`.
     *
     * @event dom-change
     */return{/**
       * An array containing items determining how many instances of the template
       * to stamp and that that each template instance should bind to.
       */items:{type:Array},/**
       * The name of the variable to add to the binding scope for the array
       * element associated with a given template instance.
       */as:{type:String,value:"item"},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the sorted and filtered list of rendered items.
       * Note, for the index in the `this.items` array, use the value of the
       * `itemsIndexAs` property.
       */indexAs:{type:String,value:"index"},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the `this.items` array. Note, for the index of
       * this instance in the sorted and filtered list of rendered items,
       * use the value of the `indexAs` property.
       */itemsIndexAs:{type:String,value:"itemsIndex"},/**
       * A function that should determine the sort order of the items.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.sort`.
       * Using a sort function has no effect on the underlying `items` array.
       */sort:{type:Function,observer:"__sortChanged"},/**
       * A function that can be used to filter items out of the view.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.filter`.
       * Using a filter function has no effect on the underlying `items` array.
       */filter:{type:Function,observer:"__filterChanged"},/**
       * When using a `filter` or `sort` function, the `observe` property
       * should be set to a space-separated list of the names of item
       * sub-fields that should trigger a re-sort or re-filter when changed.
       * These should generally be fields of `item` that the sort or filter
       * function depends on.
       */observe:{type:String,observer:"__observeChanged"},/**
       * When using a `filter` or `sort` function, the `delay` property
       * determines a debounce time in ms after a change to observed item
       * properties that must pass before the filter or sort is re-run.
       * This is useful in rate-limiting shuffling of the view when
       * item changes may be frequent.
       */delay:Number,/**
       * Count of currently rendered items after `filter` (if any) has been applied.
       * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
       * set of template instances is rendered.
       *
       */renderedItemCount:{type:Number,notify:!suppressTemplateNotifications,readOnly:!0},/**
       * When greater than zero, defines an initial count of template instances
       * to render after setting the `items` array, before the next paint, and
       * puts the `dom-repeat` into "chunking mode".  The remaining items (and
       * any future items as a result of pushing onto the array) will be created
       * and rendered incrementally at each animation frame thereof until all
       * instances have been rendered.
       */initialCount:{type:Number},/**
       * When `initialCount` is used, this property defines a frame rate (in
       * fps) to target by throttling the number of instances rendered each
       * frame to not exceed the budget for the target frame rate.  The
       * framerate is effectively the number of `requestAnimationFrame`s that
       * it tries to allow to actually fire in a given second. It does this
       * by measuring the time between `rAF`s and continuously adjusting the
       * number of items created each `rAF` to maintain the target framerate.
       * Setting this to a higher number allows lower latency and higher
       * throughput for event handlers and other tasks, but results in a
       * longer time for the remaining items to complete rendering.
       */targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},/**
       * When the global `suppressTemplateNotifications` setting is used, setting
       * `notifyDomChange: true` will enable firing `dom-change` events on this
       * element.
       */notifyDomChange:{type:Boolean},/**
       * When chunking is enabled via `initialCount` and the `items` array is
       * set to a new array, this flag controls whether the previously rendered
       * instances are reused or not.
       *
       * When `true`, any previously rendered template instances are updated in
       * place to their new item values synchronously in one shot, and then any
       * further items (if any) are chunked out.  When `false`, the list is
       * returned back to its `initialCount` (any instances over the initial
       * count are discarded) and the remainder of the list is chunked back in.
       * Set this to `true` to avoid re-creating the list and losing scroll
       * position, although note that when changing the list to completely
       * different data the render thread will be blocked until all existing
       * instances are updated to their new data.
       */reuseChunkedInstances:{type:Boolean}}}},{key:"observers",get:function get(){return["__itemsChanged(items.*)"]}}]);function DomRepeat(){var _this24;babelHelpers.classCallCheck(this,DomRepeat);_this24=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomRepeat).call(this));_this24.__instances=[];_this24.__renderDebouncer=null;_this24.__itemsIdxToInstIdx={};_this24.__chunkCount=null;_this24.__renderStartTime=null;_this24.__itemsArrayChanged=!1;_this24.__shouldMeasureChunk=!1;_this24.__shouldContinueChunking=!1;_this24.__chunkingId=0;_this24.__sortFn=null;_this24.__filterFn=null;_this24.__observePaths=null;/** @type {?function(new:TemplateInstanceBase, Object=)} */_this24.__ctor=null;_this24.__isDetached=!0;_this24.template=null;/** @type {TemplateInfo} */_this24._templateInfo;return _this24}/**
     * @override
     * @return {void}
     */babelHelpers.createClass(DomRepeat,[{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomRepeat.prototype),"disconnectedCallback",this).call(this);this.__isDetached=!0;for(var _i71=0;_i71<this.__instances.length;_i71++){this.__detachInstance(_i71)}}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomRepeat.prototype),"connectedCallback",this).call(this);if(!hideElementsGlobally()){this.style.display="none"}// only perform attachment if the element was previously detached.
if(this.__isDetached){this.__isDetached=!1;for(var wrappedParent=wrap$1(wrap$1(this).parentNode),_i72=0;_i72<this.__instances.length;_i72++){this.__attachInstance(_i72,wrappedParent)}}}},{key:"__ensureTemplatized",value:function __ensureTemplatized(){var _this25=this;// Templatizing (generating the instance constructor) needs to wait
// until ready, since won't have its template content handed back to
// it until then
if(!this.__ctor){// When `removeNestedTemplates` is true, the "template" is the element
// itself, which has been given a `_templateInfo` property
var thisAsTemplate=/** @type {!HTMLTemplateElement} */ /** @type {!HTMLElement} */this,_template3=this.template=thisAsTemplate._templateInfo?thisAsTemplate:/** @type {!HTMLTemplateElement} */this.querySelector("template");if(!_template3){// Wait until childList changes and template should be there by then
var _observer2=new MutationObserver(function(){if(_this25.querySelector("template")){_observer2.disconnect();_this25.__render()}else{throw new Error("dom-repeat requires a <template> child")}});_observer2.observe(this,{childList:!0});return!1}// Template instance props that should be excluded from forwarding
var instanceProps={};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.itemsIndexAs]=!0;this.__ctor=_templatize(_template3,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:instanceProps,/**
         * @this {DomRepeat}
         * @param {string} prop Property to set
         * @param {*} value Value to set property to
         */forwardHostProp:function forwardHostProp(prop,value){for(var i$=this.__instances,_i73=0,inst;_i73<i$.length&&(inst=i$[_i73]);_i73++){inst.forwardHostProp(prop,value)}},/**
         * @this {DomRepeat}
         * @param {Object} inst Instance to notify
         * @param {string} prop Property to notify
         * @param {*} value Value to notify
         */notifyInstanceProp:function notifyInstanceProp(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value}var _path3=translate(this.as,"".concat(JSCompiler_renameProperty("items",this),".").concat(idx),prop);this.notifyPath(_path3,value)}}})}return!0}},{key:"__getMethodHost",value:function __getMethodHost(){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
return this.__dataHost._methodHost||this.__dataHost}},{key:"__functionFromPropertyValue",value:function __functionFromPropertyValue(functionOrMethodName){if("string"===typeof functionOrMethodName){var methodName=functionOrMethodName,obj=this.__getMethodHost();return function(){return obj[methodName].apply(obj,arguments)}}return functionOrMethodName}},{key:"__sortChanged",value:function __sortChanged(sort){this.__sortFn=this.__functionFromPropertyValue(sort);if(this.items){this.__debounceRender(this.__render)}}},{key:"__filterChanged",value:function __filterChanged(filter){this.__filterFn=this.__functionFromPropertyValue(filter);if(this.items){this.__debounceRender(this.__render)}}},{key:"__computeFrameTime",value:function __computeFrameTime(rate){return Math.ceil(1e3/rate)}},{key:"__observeChanged",value:function __observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}},{key:"__handleObservedPaths",value:function __handleObservedPaths(path){// Handle cases where path changes should cause a re-sort/filter
if(this.__sortFn||this.__filterFn){if(!path){// Always re-render if the item itself changed
this.__debounceRender(this.__render,this.delay)}else if(this.__observePaths){// Otherwise, re-render if the path changed matches an observed path
for(var paths=this.__observePaths,_i74=0;_i74<paths.length;_i74++){if(0===path.indexOf(paths[_i74])){this.__debounceRender(this.__render,this.delay)}}}}}},{key:"__itemsChanged",value:function __itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn("dom-repeat expected array for `items`, found",this.items)}// If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
// path to that instance synchronously (returns false for non-item paths)
if(!this.__handleItemPath(change.path,change.value)){// Otherwise, the array was reset ('items') or spliced ('items.splices'),
// so queue a render.  Restart chunking when the items changed (for
// backward compatibility), unless `reuseChunkedInstances` option is set
if("items"===change.path){this.__itemsArrayChanged=!0}this.__debounceRender(this.__render)}}/**
     * @param {function(this:DomRepeat)} fn Function to debounce.
     * @param {number=} delay Delay in ms to debounce by.
     */},{key:"__debounceRender",value:function __debounceRender(fn){var delay=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,0<delay?timeOut.after(delay):microTask,fn.bind(this));enqueueDebouncer(this.__renderDebouncer)}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */},{key:"render",value:function render(){// Queue this repeater, then flush all in order
this.__debounceRender(this.__render);flush$1()}},{key:"__render",value:function __render(){var _this26=this;if(!this.__ensureTemplatized()){// No template found yet
return}var items=this.items||[],isntIdxToItemsIdx=this.__sortAndFilterItems(items),limit=this.__calculateLimit(isntIdxToItemsIdx.length);// Sort and filter the items into a mapping array from instance->item
// Create, update, and/or remove instances
this.__updateInstances(items,limit,isntIdxToItemsIdx);// If we're chunking, schedule a rAF task to measure/continue chunking.     
// Do this before any notifying events (renderedItemCount & dom-change)
// since those could modify items and enqueue a new full render which will
// pre-empt this measurement.
if(this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)){cancelAnimationFrame(this.__chunkingId);this.__chunkingId=requestAnimationFrame(function(){return _this26.__continueChunking()})}// Set rendered item count
this._setRenderedItemCount(this.__instances.length);// Notify users
if(!suppressTemplateNotifications||this.notifyDomChange){this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}},{key:"__sortAndFilterItems",value:function __sortAndFilterItems(items){for(var _this27=this,isntIdxToItemsIdx=Array(items.length),_i75=0;_i75<items.length;_i75++){isntIdxToItemsIdx[_i75]=_i75}// Apply user filter
if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter(function(i,idx,array){return _this27.__filterFn(items[i],idx,array)})}// Apply user sort
if(this.__sortFn){isntIdxToItemsIdx.sort(function(a,b){return _this27.__sortFn(items[a],items[b])})}return isntIdxToItemsIdx}},{key:"__calculateLimit",value:function __calculateLimit(filteredItemCount){var limit=filteredItemCount,currentCount=this.__instances.length;// When chunking, we increase the limit from the currently rendered count
// by the chunk count that is re-calculated after each rAF (with special
// cases for reseting the limit to initialCount after changing items)
if(this.initialCount){var newCount;if(!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances){// Limit next render to the initial count
limit=Math.min(filteredItemCount,this.initialCount);// Subtract off any existing instances to determine the number of
// instances that will be created
newCount=Math.max(limit-currentCount,0);// Initialize the chunk size with how many items we're creating
this.__chunkCount=newCount||1}else{// The number of new instances that will be created is based on the
// existing instances, the new list size, and the chunk size
newCount=Math.min(Math.max(filteredItemCount-currentCount,0),this.__chunkCount);// Update the limit based on how many new items we're making, limited
// buy the total size of the list
limit=Math.min(currentCount+newCount,filteredItemCount)}// Record some state about chunking for use in `__continueChunking`
this.__shouldMeasureChunk=newCount===this.__chunkCount;this.__shouldContinueChunking=limit<filteredItemCount;this.__renderStartTime=performance.now()}this.__itemsArrayChanged=!1;return limit}},{key:"__continueChunking",value:function __continueChunking(){// Simple auto chunkSize throttling algorithm based on feedback loop:
// measure actual time between frames and scale chunk count by ratio of
// target/actual frame time.  Only modify chunk size if our measurement
// reflects the cost of a creating a full chunk's worth of instances; this
// avoids scaling up the chunk size if we e.g. quickly re-rendered instances
// in place
if(this.__shouldMeasureChunk){var renderTime=performance.now()-this.__renderStartTime,ratio=this._targetFrameTime/renderTime;this.__chunkCount=Math.round(this.__chunkCount*ratio)||1}// Enqueue a new render if we haven't reached the full size of the list
if(this.__shouldContinueChunking){this.__debounceRender(this.__render)}}},{key:"__updateInstances",value:function __updateInstances(items,limit,isntIdxToItemsIdx){// items->inst map kept for item path forwarding
var itemsIdxToInstIdx=this.__itemsIdxToInstIdx={},instIdx;// Generate instances and assign items
for(instIdx=0;instIdx<limit;instIdx++){var inst=this.__instances[instIdx],itemIdx=isntIdxToItemsIdx[instIdx],item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{this.__insertInstance(item,instIdx,itemIdx)}}// Remove any extra instances from previous state
for(var _i76=this.__instances.length-1;_i76>=instIdx;_i76--){this.__detachAndRemoveInstance(_i76)}}},{key:"__detachInstance",value:function __detachInstance(idx){for(var inst=this.__instances[idx],wrappedRoot=wrap$1(inst.root),_i77=0,el;_i77<inst.children.length;_i77++){el=inst.children[_i77];wrappedRoot.appendChild(el)}return inst}},{key:"__attachInstance",value:function __attachInstance(idx,parent){var inst=this.__instances[idx];// Note, this is pre-wrapped as an optimization
parent.insertBefore(inst.root,this)}},{key:"__detachAndRemoveInstance",value:function __detachAndRemoveInstance(idx){this.__detachInstance(idx);this.__instances.splice(idx,1)}},{key:"__stampInstance",value:function __stampInstance(item,instIdx,itemIdx){var model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model)}},{key:"__insertInstance",value:function __insertInstance(item,instIdx,itemIdx){var inst=this.__stampInstance(item,instIdx,itemIdx),beforeRow=this.__instances[instIdx+1],beforeNode=beforeRow?beforeRow.children[0]:this;wrap$1(wrap$1(this).parentNode).insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst}// Implements extension point from Templatize mixin
/**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hidden Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */},{key:"_showHideChildren",value:function _showHideChildren(hidden){for(var _i78=0;_i78<this.__instances.length;_i78++){this.__instances[_i78]._showHideChildren(hidden)}}// Called as a side effect of a host items.<key>.<path> path change,
// responsible for notifying item.<path> changes to inst for key
},{key:"__handleItemPath",value:function __handleItemPath(path,value){var itemsPath=path.slice(6),dot=itemsPath.indexOf("."),itemsIdx=0>dot?itemsPath:itemsPath.substring(0,dot);// 'items.'.length == 6
// If path was index into array...
if(itemsIdx==parseInt(itemsIdx,10)){var itemSubPath=0>dot?"":itemsPath.substring(dot+1);// If the path is observed, it will trigger a full refresh
this.__handleObservedPaths(itemSubPath);// Note, even if a rull refresh is triggered, always do the path
// notification because unless mutableData is used for dom-repeat
// and all elements in the instance subtree, a full refresh may
// not trigger the proper update.
var instIdx=this.__itemsIdxToInstIdx[itemsIdx],inst=this.__instances[instIdx];if(inst){var itemPath=this.as+(itemSubPath?"."+itemSubPath:"");// This is effectively `notifyPath`, but avoids some of the overhead
// of the public API
inst._setPendingPropertyOrPath(itemPath,value,!1,!0);inst._flushProperties()}return!0}}/**
     * Returns the item associated with a given element stamped by
     * this `dom-repeat`.
     *
     * Note, to modify sub-properties of the item,
     * `modelForElement(el).set('item.<sub-prop>', value)`
     * should be used.
     *
     * @param {!HTMLElement} el Element for which to return the item.
     * @return {*} Item associated with the element.
     */},{key:"itemForElement",value:function itemForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.as]}/**
     * Returns the inst index for a given element stamped by this `dom-repeat`.
     * If `sort` is provided, the index will reflect the sorted order (rather
     * than the original array order).
     *
     * @param {!HTMLElement} el Element for which to return the index.
     * @return {?number} Row index associated with the element (note this may
     *   not correspond to the array index if a user `sort` is applied).
     */},{key:"indexForElement",value:function indexForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.indexAs]}/**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model
     * should be used to manipulate data associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @param {!HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     */},{key:"modelForElement",value:function modelForElement(el){return _modelForElement(this.template,el)}}]);return DomRepeat}(domRepeatBase);/**
                                                            * The `<dom-repeat>` element will automatically stamp and binds one instance
                                                            * of template content to each object in a user-provided array.
                                                            * `dom-repeat` accepts an `items` property, and one instance of the template
                                                            * is stamped for each item into the DOM at the location of the `dom-repeat`
                                                            * element.  The `item` property will be set on each instance's binding
                                                            * scope, thus templates should bind to sub-properties of `item`.
                                                            *
                                                            * Example:
                                                            *
                                                            * ```html
                                                            * <dom-module id="employee-list">
                                                            *
                                                            *   <template>
                                                            *
                                                            *     <div> Employee list: </div>
                                                            *     <dom-repeat items="{{employees}}">
                                                            *       <template>
                                                            *         <div>First name: <span>{{item.first}}</span></div>
                                                            *         <div>Last name: <span>{{item.last}}</span></div>
                                                            *       </template>
                                                            *     </dom-repeat>
                                                            *
                                                            *   </template>
                                                            *
                                                            * </dom-module>
                                                            * ```
                                                            *
                                                            * With the following custom element definition:
                                                            *
                                                            * ```js
                                                            * class EmployeeList extends PolymerElement {
                                                            *   static get is() { return 'employee-list'; }
                                                            *   static get properties() {
                                                            *     return {
                                                            *       employees: {
                                                            *         value() {
                                                            *           return [
                                                            *             {first: 'Bob', last: 'Smith'},
                                                            *             {first: 'Sally', last: 'Johnson'},
                                                            *             ...
                                                            *           ];
                                                            *         }
                                                            *       }
                                                            *     };
                                                            *   }
                                                            * }
                                                            * ```
                                                            *
                                                            * Notifications for changes to items sub-properties will be forwarded to template
                                                            * instances, which will update via the normal structured data notification system.
                                                            *
                                                            * Mutations to the `items` array itself should be made using the Array
                                                            * mutation API's on the PropertyEffects mixin (`push`, `pop`, `splice`,
                                                            * `shift`, `unshift`), and template instances will be kept in sync with the
                                                            * data in the array.
                                                            *
                                                            * Events caught by event handlers within the `dom-repeat` template will be
                                                            * decorated with a `model` property, which represents the binding scope for
                                                            * each template instance.  The model should be used to manipulate data on the
                                                            * instance, for example `event.model.set('item.checked', true);`.
                                                            *
                                                            * Alternatively, the model for a template instance for an element stamped by
                                                            * a `dom-repeat` can be obtained using the `modelForElement` API on the
                                                            * `dom-repeat` that stamped it, for example
                                                            * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
                                                            * This may be useful for manipulating instance data of event targets obtained
                                                            * by event handlers on parents of the `dom-repeat` (event delegation).
                                                            *
                                                            * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
                                                            * `filter` and/or `sort` property.  This may be a string that names a function on
                                                            * the host, or a function may be assigned to the property directly.  The functions
                                                            * should implemented following the standard `Array` filter/sort API.
                                                            *
                                                            * In order to re-run the filter or sort functions based on changes to sub-fields
                                                            * of `items`, the `observe` property may be set as a space-separated list of
                                                            * `item` sub-fields that should cause a re-filter/sort when modified.  If
                                                            * the filter or sort function depends on properties not contained in `items`,
                                                            * the user should observe changes to those properties and call `render` to update
                                                            * the view based on the dependency change.
                                                            *
                                                            * For example, for an `dom-repeat` with a filter of the following:
                                                            *
                                                            * ```js
                                                            * isEngineer(item) {
                                                            *   return item.type == 'engineer' || item.manager.type == 'engineer';
                                                            * }
                                                            * ```
                                                            *
                                                            * Then the `observe` property should be configured as follows:
                                                            *
                                                            * ```html
                                                            * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
                                                            * ```
                                                            *
                                                            * @customElement
                                                            * @polymer
                                                            * @extends {domRepeatBase}
                                                            * @appliesMixin OptionalMutableData
                                                            * @summary Custom element for stamping instance of a template bound to
                                                            *   items in an array.
                                                            */_exports.DomRepeat=DomRepeat;customElements.define(DomRepeat.is,DomRepeat);var domRepeat={DomRepeat:DomRepeat};_exports.$domRepeat=domRepeat;var DomIfBase=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(DomIfBase,_PolymerElement);babelHelpers.createClass(DomIfBase,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return"dom-if"}},{key:"template",get:function get(){return null}},{key:"properties",get:function get(){return{/**
       * Fired whenever DOM is added or removed/hidden by this template (by
       * default, rendering occurs lazily).  To force immediate rendering, call
       * `render`.
       *
       * @event dom-change
       */ /**
           * A boolean indicating whether this template should stamp.
           */if:{type:Boolean,observer:"__debounceRender"},/**
       * When true, elements will be removed from DOM and discarded when `if`
       * becomes false and re-created and added back to the DOM when `if`
       * becomes true.  By default, stamped elements will be hidden but left
       * in the DOM when `if` becomes false, which is generally results
       * in better performance.
       */restamp:{type:Boolean,observer:"__debounceRender"},/**
       * When the global `suppressTemplateNotifications` setting is used, setting
       * `notifyDomChange: true` will enable firing `dom-change` events on this
       * element.
       */notifyDomChange:{type:Boolean}}}}]);function DomIfBase(){var _this28;babelHelpers.classCallCheck(this,DomIfBase);_this28=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomIfBase).call(this));_this28.__renderDebouncer=null;_this28._lastIf=!1;_this28.__hideTemplateChildren__=!1;/** @type {!HTMLTemplateElement|undefined} */_this28.__template;/** @type {!TemplateInfo|undefined} */_this28._templateInfo;return _this28}babelHelpers.createClass(DomIfBase,[{key:"__debounceRender",value:function __debounceRender(){var _this29=this;// Render is async for 2 reasons:
// 1. To eliminate dom creation trashing if user code thrashes `if` in the
//    same turn. This was more common in 1.x where a compound computed
//    property could result in the result changing multiple times, but is
//    mitigated to a large extent by batched property processing in 2.x.
// 2. To avoid double object propagation when a bag including values bound
//    to the `if` property as well as one or more hostProps could enqueue
//    the <dom-if> to flush before the <template>'s host property
//    forwarding. In that scenario creating an instance would result in
//    the host props being set once, and then the enqueued changes on the
//    template would set properties a second time, potentially causing an
//    object to be set to an instance more than once.  Creating the
//    instance async from flushing data ensures this doesn't happen. If
//    we wanted a sync option in the future, simply having <dom-if> flush
//    (or clear) its template's pending host properties before creating
//    the instance would also avoid the problem.
this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,microTask,function(){return _this29.__render()});enqueueDebouncer(this.__renderDebouncer)}/**
     * @override
     * @return {void}
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomIfBase.prototype),"disconnectedCallback",this).call(this);var parent=wrap$1(this).parentNode;if(!parent||parent.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!wrap$1(parent).host){this.__teardownInstance()}}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomIfBase.prototype),"connectedCallback",this).call(this);if(!hideElementsGlobally()){this.style.display="none"}if(this.if){this.__debounceRender()}}/**
     * Ensures a template has been assigned to `this.__template`.  If it has not
     * yet been, it querySelectors for it in its children and if it does not yet
     * exist (e.g. in parser-generated case), opens a mutation observer and
     * waits for it to appear (returns false if it has not yet been found,
     * otherwise true).  In the `removeNestedTemplates` case, the "template" will
     * be the `dom-if` element itself.
     *
     * @return {boolean} True when a template has been found, false otherwise
     */},{key:"__ensureTemplate",value:function __ensureTemplate(){var _this30=this;if(!this.__template){// When `removeNestedTemplates` is true, the "template" is the element
// itself, which has been given a `_templateInfo` property
var thisAsTemplate=/** @type {!HTMLTemplateElement} */ /** @type {!HTMLElement} */this,_template4=thisAsTemplate._templateInfo?thisAsTemplate:/** @type {!HTMLTemplateElement} */wrap$1(thisAsTemplate).querySelector("template");if(!_template4){// Wait until childList changes and template should be there by then
var _observer3=new MutationObserver(function(){if(wrap$1(_this30).querySelector("template")){_observer3.disconnect();_this30.__render()}else{throw new Error("dom-if requires a <template> child")}});_observer3.observe(this,{childList:!0});return!1}this.__template=_template4}return!0}/**
     * Ensures a an instance of the template has been created and inserted. This
     * method may return false if the template has not yet been found or if
     * there is no `parentNode` to insert the template into (in either case,
     * connection or the template-finding mutation observer firing will queue
     * another render, causing this method to be called again at a more
     * appropriate time).
     *
     * Subclasses should implement the following methods called here:
     * - `__hasInstance`
     * - `__createAndInsertInstance`
     * - `__getInstanceNodes`
     *
     * @return {boolean} True if the instance was created, false otherwise.
     */},{key:"__ensureInstance",value:function __ensureInstance(){var parentNode=wrap$1(this).parentNode;if(!this.__hasInstance()){// Guard against element being detached while render was queued
if(!parentNode){return!1}// Find the template (when false, there was no template yet)
if(!this.__ensureTemplate()){return!1}this.__createAndInsertInstance(parentNode)}else{// Move instance children if necessary
var _children=this.__getInstanceNodes();if(_children&&_children.length){// Detect case where dom-if was re-attached in new position
var lastChild=wrap$1(this).previousSibling;if(lastChild!==_children[_children.length-1]){for(var _i79=0,n;_i79<_children.length&&(n=_children[_i79]);_i79++){wrap$1(parentNode).insertBefore(n,this)}}}}return!0}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     *
     * @return {void}
     */},{key:"render",value:function render(){flush$1()}/**
     * Performs the key rendering steps:
     * 1. Ensure a template instance has been stamped (when true)
     * 2. Remove the template instance (when false and restamp:true)
     * 3. Sync the hidden state of the instance nodes with the if/restamp state
     * 4. Fires the `dom-change` event when necessary
     *
     * @return {void}
     */},{key:"__render",value:function __render(){if(this.if){if(!this.__ensureInstance()){// No template found yet
return}}else if(this.restamp){this.__teardownInstance()}this._showHideChildren();if((!suppressTemplateNotifications||this.notifyDomChange)&&this.if!=this._lastIf){this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));this._lastIf=this.if}}// Ideally these would be annotated as abstract methods in an abstract class,
// but closure compiler is finnicky
/* eslint-disable valid-jsdoc */ /**
                                    * Abstract API to be implemented by subclass: Returns true if a template
                                    * instance has been created and inserted.
                                    *
                                    * @protected
                                    * @return {boolean} True when an instance has been created.
                                    */},{key:"__hasInstance",value:function __hasInstance(){}/**
                      * Abstract API to be implemented by subclass: Returns the child nodes stamped
                      * from a template instance.
                      *
                      * @protected
                      * @return {Array<Node>} Array of child nodes stamped from the template
                      * instance.
                      */},{key:"__getInstanceNodes",value:function __getInstanceNodes(){}/**
                           * Abstract API to be implemented by subclass: Creates an instance of the
                           * template and inserts it into the given parent node.
                           *
                           * @protected
                           * @param {Node} parentNode The parent node to insert the instance into
                           * @return {void}
                           */},{key:"__createAndInsertInstance",value:function __createAndInsertInstance(parentNode){}// eslint-disable-line no-unused-vars
/**
   * Abstract API to be implemented by subclass: Removes nodes created by an
   * instance of a template and any associated cleanup.
   *
   * @protected
   * @return {void}
   */},{key:"__teardownInstance",value:function __teardownInstance(){}/**
                           * Abstract API to be implemented by subclass: Shows or hides any template
                           * instance childNodes based on the `if` state of the element and its
                           * `__hideTemplateChildren__` property.
                           *
                           * @protected
                           * @return {void}
                           */},{key:"_showHideChildren",value:function _showHideChildren(){}/* eslint-enable valid-jsdoc */}]);return DomIfBase}(PolymerElement),DomIfFast=/*#__PURE__*/function(_DomIfBase){babelHelpers.inherits(DomIfFast,_DomIfBase);function DomIfFast(){var _this31;babelHelpers.classCallCheck(this,DomIfFast);_this31=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomIfFast).call(this));_this31.__instance=null;_this31.__syncInfo=null;return _this31}/**
     * Implementation of abstract API needed by DomIfBase.
     *
     * @override
     * @return {boolean} True when an instance has been created.
     */babelHelpers.createClass(DomIfFast,[{key:"__hasInstance",value:function __hasInstance(){return!!this.__instance}/**
     * Implementation of abstract API needed by DomIfBase.
     *
     * @override
     * @return {Array<Node>} Array of child nodes stamped from the template
     * instance.
     */},{key:"__getInstanceNodes",value:function __getInstanceNodes(){return this.__instance.templateInfo.childNodes}/**
     * Implementation of abstract API needed by DomIfBase.
     *
     * Stamps the template by calling `_stampTemplate` on the `__dataHost` of this
     * element and then inserts the resulting nodes into the given `parentNode`.
     *
     * @override
     * @param {Node} parentNode The parent node to insert the instance into
     * @return {void}
     */},{key:"__createAndInsertInstance",value:function __createAndInsertInstance(parentNode){var _this32=this,host=this.__dataHost||this;if(strictTemplatePolicy){if(!this.__dataHost){throw new Error("strictTemplatePolicy: template owner not trusted")}}// Pre-bind and link the template into the effects system
var templateInfo=host._bindTemplate(/** @type {!HTMLTemplateElement} */this.__template,!0);// Install runEffects hook that prevents running property effects
// (and any nested template effects) when the `if` is false
templateInfo.runEffects=function(runEffects,changedProps,hasPaths){var syncInfo=_this32.__syncInfo;if(_this32.if){// Mix any props that changed while the `if` was false into `changedProps`
if(syncInfo){// If there were properties received while the `if` was false, it is
// important to sync the hidden state with the element _first_, so that
// new bindings to e.g. `textContent` do not get stomped on by
// pre-hidden values if `_showHideChildren` were to be called later at
// the next render. Clearing `__invalidProps` here ensures
// `_showHideChildren`'s call to `__syncHostProperties` no-ops, so
// that we don't call `runEffects` more often than necessary.
_this32.__syncInfo=null;_this32._showHideChildren();changedProps=Object.assign(syncInfo.changedProps,changedProps)}runEffects(changedProps,hasPaths)}else{// Accumulate any values changed while `if` was false, along with the
// runEffects method to sync them, so that we can replay them once `if`
// becomes true
if(_this32.__instance){if(!syncInfo){syncInfo=_this32.__syncInfo={runEffects:runEffects,changedProps:{}}}if(hasPaths){// Store root object of any paths; this will ensure direct bindings
// like [[obj.foo]] bindings run after a `set('obj.foo', v)`, but
// note that path notifications like `set('obj.foo.bar', v)` will
// not propagate. Since batched path notifications are not
// supported, we cannot simply accumulate path notifications. This
// is equivalent to the non-fastDomIf case, which stores root(p) in
// __invalidProps.
for(var _p19 in changedProps){var rootProp=root(_p19);syncInfo.changedProps[rootProp]=_this32.__dataHost[rootProp]}}else{Object.assign(syncInfo.changedProps,changedProps)}}}};// Stamp the template, and set its DocumentFragment to the "instance"
this.__instance=host._stampTemplate(/** @type {!HTMLTemplateElement} */this.__template,templateInfo);wrap$1(parentNode).insertBefore(this.__instance,this)}/**
     * Run effects for any properties that changed while the `if` was false.
     *
     * @return {void}
     */},{key:"__syncHostProperties",value:function __syncHostProperties(){var syncInfo=this.__syncInfo;if(syncInfo){this.__syncInfo=null;syncInfo.runEffects(syncInfo.changedProps,!1)}}/**
     * Implementation of abstract API needed by DomIfBase.
     *
     * Remove the instance and any nodes it created.  Uses the `__dataHost`'s
     * runtime `_removeBoundDom` method.
     *
     * @override
     * @return {void}
     */},{key:"__teardownInstance",value:function __teardownInstance(){var host=this.__dataHost||this;if(this.__instance){host._removeBoundDom(this.__instance);this.__instance=null;this.__syncInfo=null}}/**
     * Implementation of abstract API needed by DomIfBase.
     *
     * Shows or hides the template instance top level child nodes. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     *
     * @override
     * @return {void}
     * @protected
     * @suppress {visibility}
     */},{key:"_showHideChildren",value:function _showHideChildren(){var hidden=this.__hideTemplateChildren__||!this.if;if(this.__instance&&!!this.__instance.__hidden!==hidden){this.__instance.__hidden=hidden;showHideChildren(hidden,this.__instance.templateInfo.childNodes)}if(!hidden){this.__syncHostProperties()}}}]);return DomIfFast}(DomIfBase),DomIfLegacy=/*#__PURE__*/function(_DomIfBase2){babelHelpers.inherits(DomIfLegacy,_DomIfBase2);function DomIfLegacy(){var _this33;babelHelpers.classCallCheck(this,DomIfLegacy);_this33=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomIfLegacy).call(this));_this33.__ctor=null;_this33.__instance=null;_this33.__invalidProps=null;return _this33}/**
     * Implementation of abstract API needed by DomIfBase.
     *
     * @override
     * @return {boolean} True when an instance has been created.
     */babelHelpers.createClass(DomIfLegacy,[{key:"__hasInstance",value:function __hasInstance(){return!!this.__instance}/**
     * Implementation of abstract API needed by DomIfBase.
     *
     * @override
     * @return {Array<Node>} Array of child nodes stamped from the template
     * instance.
     */},{key:"__getInstanceNodes",value:function __getInstanceNodes(){return this.__instance.children}/**
     * Implementation of abstract API needed by DomIfBase.
     *
     * Stamps the template by creating a new instance of the templatized
     * constructor (which is created lazily if it does not yet exist), and then
     * inserts its resulting `root` doc fragment into the given `parentNode`.
     *
     * @override
     * @param {Node} parentNode The parent node to insert the instance into
     * @return {void}
     */},{key:"__createAndInsertInstance",value:function __createAndInsertInstance(parentNode){// Ensure we have an instance constructor
if(!this.__ctor){this.__ctor=_templatize(/** @type {!HTMLTemplateElement} */this.__template,this,{// dom-if templatizer instances require `mutable: true`, as
// `__syncHostProperties` relies on that behavior to sync objects
mutableData:!0,/**
         * @param {string} prop Property to forward
         * @param {*} value Value of property
         * @this {DomIfLegacy}
         */forwardHostProp:function forwardHostProp(prop,value){if(this.__instance){if(this.if){this.__instance.forwardHostProp(prop,value)}else{// If we have an instance but are squelching host property
// forwarding due to if being false, note the invalidated
// properties so `__syncHostProperties` can sync them the next
// time `if` becomes true
this.__invalidProps=this.__invalidProps||Object.create(null);this.__invalidProps[root(prop)]=!0}}}})}// Create and insert the instance
this.__instance=new this.__ctor;wrap$1(parentNode).insertBefore(this.__instance.root,this)}/**
     * Implementation of abstract API needed by DomIfBase.
     *
     * Removes the instance and any nodes it created.
     *
     * @override
     * @return {void}
     */},{key:"__teardownInstance",value:function __teardownInstance(){if(this.__instance){var c$=this.__instance.children;if(c$&&c$.length){// use first child parent, for case when dom-if may have been detached
var parent=wrap$1(c$[0]).parentNode;// Instance children may be disconnected from parents when dom-if
// detaches if a tree was innerHTML'ed
if(parent){parent=wrap$1(parent);for(var _i80=0,n;_i80<c$.length&&(n=c$[_i80]);_i80++){parent.removeChild(n)}}}this.__invalidProps=null;this.__instance=null}}/**
     * Forwards any properties that changed while the `if` was false into the
     * template instance and flushes it.
     *
     * @return {void}
     */},{key:"__syncHostProperties",value:function __syncHostProperties(){var props=this.__invalidProps;if(props){this.__invalidProps=null;for(var prop in props){this.__instance._setPendingProperty(prop,this.__dataHost[prop])}this.__instance._flushProperties()}}/**
     * Implementation of abstract API needed by DomIfBase.
     *
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     *
     * @override
     * @protected
     * @return {void}
     * @suppress {visibility}
     */},{key:"_showHideChildren",value:function _showHideChildren(){var hidden=this.__hideTemplateChildren__||!this.if;if(this.__instance&&!!this.__instance.__hidden!==hidden){this.__instance.__hidden=hidden;this.__instance._showHideChildren(hidden)}if(!hidden){this.__syncHostProperties()}}}]);return DomIfLegacy}(DomIfBase),DomIf=fastDomIf?DomIfFast:DomIfLegacy;/**
   * The version of DomIf used when `fastDomIf` setting is in use, which is
   * optimized for first-render (but adds a tax to all subsequent property updates
   * on the host, whether they were used in a given `dom-if` or not).
   *
   * This implementation avoids use of `Templatizer`, which introduces a new scope
   * (a non-element PropertyEffects instance), which is not strictly necessary
   * since `dom-if` never introduces new properties to its scope (unlike
   * `dom-repeat`). Taking advantage of this fact, the `dom-if` reaches up to its
   * `__dataHost` and stamps the template directly from the host using the host's
   * runtime `_stampTemplate` API, which binds the property effects of the
   * template directly to the host. This both avoids the intermediary
   * `Templatizer` instance, but also avoids the need to bind host properties to
   * the `<template>` element and forward those into the template instance.
   *
   * In this version of `dom-if`, the `this.__instance` method is the
   * `DocumentFragment` returned from `_stampTemplate`, which also serves as the
   * handle for later removing it using the `_removeBoundDom` method.
   */_exports.DomIf=DomIf;customElements.define(DomIf.is,DomIf);var domIf={DomIf:DomIf};_exports.$domIf=domIf;var ArraySelectorMixin=dedupingMixin(function(superClass){/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @private
   */var elementBase=ElementMixin(superClass),ArraySelectorMixin=/*#__PURE__*/function(_elementBase2){babelHelpers.inherits(ArraySelectorMixin,_elementBase2);babelHelpers.createClass(ArraySelectorMixin,null,[{key:"properties",get:function get(){return{/**
         * An array containing items from which selection will be made.
         */items:{type:Array},/**
         * When `true`, multiple items may be selected at once (in this case,
         * `selected` is an array of currently selected items).  When `false`,
         * only one item may be selected at a time.
         */multi:{type:Boolean,value:!1},/**
         * When `multi` is true, this is an array that contains any selected.
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?Object|?Array<!Object>}
         */selected:{type:Object,notify:!0},/**
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?Object}
         */selectedItem:{type:Object,notify:!0},/**
         * When `true`, calling `select` on an item that is already selected
         * will deselect the item.
         */toggle:{type:Boolean,value:!1}}}},{key:"observers",get:function get(){return["__updateSelection(multi, items.*)"]}}]);function ArraySelectorMixin(){var _this34;babelHelpers.classCallCheck(this,ArraySelectorMixin);_this34=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ArraySelectorMixin).call(this));_this34.__lastItems=null;_this34.__lastMulti=null;_this34.__selectedMap=null;return _this34}babelHelpers.createClass(ArraySelectorMixin,[{key:"__updateSelection",value:function __updateSelection(multi,itemsInfo){var path=itemsInfo.path;if(path==JSCompiler_renameProperty("items",this)){// Case 1 - items array changed, so diff against previous array and
// deselect any removed items and adjust selected indices
var newItems=itemsInfo.base||[],lastItems=this.__lastItems,lastMulti=this.__lastMulti;if(multi!==lastMulti){this.clearSelection()}if(lastItems){var splices=calculateSplices(newItems,lastItems);this.__applySplices(splices)}this.__lastItems=newItems;this.__lastMulti=multi}else if(itemsInfo.path=="".concat(JSCompiler_renameProperty("items",this),".splices")){// Case 2 - got specific splice information describing the array mutation:
// deselect any removed items and adjust selected indices
this.__applySplices(itemsInfo.value.indexSplices)}else{// Case 3 - an array element was changed, so deselect the previous
// item for that index if it was previously selected
var part=path.slice("".concat(JSCompiler_renameProperty("items",this),".").length),idx=parseInt(part,10);if(0>part.indexOf(".")&&part==idx){this.__deselectChangedIdx(idx)}}}},{key:"__applySplices",value:function __applySplices(splices){// Adjust selected indices and mark removals
for(var _this35=this,selected=this.__selectedMap,_loop4=function _loop4(_i81){var s=splices[_i81];selected.forEach(function(idx,item){if(idx<s.index){// no change
}else if(idx>=s.index+s.removed.length){// adjust index
selected.set(item,idx+s.addedCount-s.removed.length)}else{// remove index
selected.set(item,-1)}});for(var j=0,idx;j<s.addedCount;j++){idx=s.index+j;if(selected.has(_this35.items[idx])){selected.set(_this35.items[idx],idx)}}},_i81=0;_i81<splices.length;_i81++){_loop4(_i81)}// Update linked paths
this.__updateLinks();// Remove selected items that were removed from the items array
var sidx=0;selected.forEach(function(idx,item){if(0>idx){if(_this35.multi){_this35.splice(JSCompiler_renameProperty("selected",_this35),sidx,1)}else{_this35.selected=_this35.selectedItem=null}selected.delete(item)}else{sidx++}})}},{key:"__updateLinks",value:function __updateLinks(){var _this36=this;this.__dataLinkedPaths={};if(this.multi){var sidx=0;this.__selectedMap.forEach(function(idx){if(0<=idx){_this36.linkPaths("".concat(JSCompiler_renameProperty("items",_this36),".").concat(idx),"".concat(JSCompiler_renameProperty("selected",_this36),".").concat(sidx++))}})}else{this.__selectedMap.forEach(function(idx){_this36.linkPaths(JSCompiler_renameProperty("selected",_this36),"".concat(JSCompiler_renameProperty("items",_this36),".").concat(idx));_this36.linkPaths(JSCompiler_renameProperty("selectedItem",_this36),"".concat(JSCompiler_renameProperty("items",_this36),".").concat(idx))})}}/**
       * Clears the selection state.
       * @override
       * @return {void}
       */},{key:"clearSelection",value:function clearSelection(){// Unbind previous selection
this.__dataLinkedPaths={};// The selected map stores 3 pieces of information:
// key: items array object
// value: items array index
// order: selected array index
this.__selectedMap=new Map;// Initialize selection
this.selected=this.multi?[]:null;this.selectedItem=null}/**
       * Returns whether the item is currently selected.
       *
       * @override
       * @param {*} item Item from `items` array to test
       * @return {boolean} Whether the item is selected
       */},{key:"isSelected",value:function isSelected(item){return this.__selectedMap.has(item)}/**
       * Returns whether the item is currently selected.
       *
       * @override
       * @param {number} idx Index from `items` array to test
       * @return {boolean} Whether the item is selected
       */},{key:"isIndexSelected",value:function isIndexSelected(idx){return this.isSelected(this.items[idx])}},{key:"__deselectChangedIdx",value:function __deselectChangedIdx(idx){var _this37=this,sidx=this.__selectedIndexForItemIndex(idx);if(0<=sidx){var _i82=0;this.__selectedMap.forEach(function(idx,item){if(sidx==_i82++){_this37.deselect(item)}})}}},{key:"__selectedIndexForItemIndex",value:function __selectedIndexForItemIndex(idx){var selected=this.__dataLinkedPaths["".concat(JSCompiler_renameProperty("items",this),".").concat(idx)];if(selected){return parseInt(selected.slice("".concat(JSCompiler_renameProperty("selected",this),".").length),10)}}/**
       * Deselects the given item if it is already selected.
       *
       * @override
       * @param {*} item Item from `items` array to deselect
       * @return {void}
       */},{key:"deselect",value:function deselect(item){var idx=this.__selectedMap.get(item);if(0<=idx){this.__selectedMap.delete(item);var sidx;if(this.multi){sidx=this.__selectedIndexForItemIndex(idx)}this.__updateLinks();if(this.multi){this.splice(JSCompiler_renameProperty("selected",this),sidx,1)}else{this.selected=this.selectedItem=null}}}/**
       * Deselects the given index if it is already selected.
       *
       * @override
       * @param {number} idx Index from `items` array to deselect
       * @return {void}
       */},{key:"deselectIndex",value:function deselectIndex(idx){this.deselect(this.items[idx])}/**
       * Selects the given item.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @override
       * @param {*} item Item from `items` array to select
       * @return {void}
       */},{key:"select",value:function select(item){this.selectIndex(this.items.indexOf(item))}/**
       * Selects the given index.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @override
       * @param {number} idx Index from `items` array to select
       * @return {void}
       */},{key:"selectIndex",value:function selectIndex(idx){var item=this.items[idx];if(!this.isSelected(item)){if(!this.multi){this.__selectedMap.clear()}this.__selectedMap.set(item,idx);this.__updateLinks();if(this.multi){this.push(JSCompiler_renameProperty("selected",this),item)}else{this.selected=this.selectedItem=item}}else if(this.toggle){this.deselectIndex(idx)}}}]);return ArraySelectorMixin}(elementBase);/**
                                                  * @polymer
                                                  * @mixinClass
                                                  * @implements {Polymer_ArraySelectorMixin}
                                                  * @unrestricted
                                                  */return ArraySelectorMixin});// export mixin
_exports.ArraySelectorMixin=ArraySelectorMixin;var baseArraySelector=ArraySelectorMixin(PolymerElement),ArraySelector=/*#__PURE__*/function(_baseArraySelector){babelHelpers.inherits(ArraySelector,_baseArraySelector);function ArraySelector(){babelHelpers.classCallCheck(this,ArraySelector);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ArraySelector).apply(this,arguments))}babelHelpers.createClass(ArraySelector,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return"array-selector"}},{key:"template",get:function get(){return null}}]);return ArraySelector}(baseArraySelector);/**
                                                             * Element implementing the `ArraySelector` mixin, which records
                                                             * dynamic associations between item paths in a master `items` array and a
                                                             * `selected` array such that path changes to the master array (at the host)
                                                             * element or elsewhere via data-binding) are correctly propagated to items
                                                             * in the selected array and vice-versa.
                                                             *
                                                             * The `items` property accepts an array of user data, and via the
                                                             * `select(item)` and `deselect(item)` API, updates the `selected` property
                                                             * which may be bound to other parts of the application, and any changes to
                                                             * sub-fields of `selected` item(s) will be kept in sync with items in the
                                                             * `items` array.  When `multi` is false, `selected` is a property
                                                             * representing the last selected item.  When `multi` is true, `selected`
                                                             * is an array of multiply selected items.
                                                             *
                                                             * Example:
                                                             *
                                                             * ```js
                                                             * import {PolymerElement} from '@polymer/polymer';
                                                             * import '@polymer/polymer/lib/elements/array-selector.js';
                                                             *
                                                             * class EmployeeList extends PolymerElement {
                                                             *   static get _template() {
                                                             *     return html`
                                                             *         <div> Employee list: </div>
                                                             *         <dom-repeat id="employeeList" items="{{employees}}">
                                                             *           <template>
                                                             *             <div>First name: <span>{{item.first}}</span></div>
                                                             *               <div>Last name: <span>{{item.last}}</span></div>
                                                             *               <button on-click="toggleSelection">Select</button>
                                                             *           </template>
                                                             *         </dom-repeat>
                                                             *
                                                             *         <array-selector id="selector"
                                                             *                         items="{{employees}}"
                                                             *                         selected="{{selected}}"
                                                             *                         multi toggle></array-selector>
                                                             *
                                                             *         <div> Selected employees: </div>
                                                             *         <dom-repeat items="{{selected}}">
                                                             *           <template>
                                                             *             <div>First name: <span>{{item.first}}</span></div>
                                                             *             <div>Last name: <span>{{item.last}}</span></div>
                                                             *           </template>
                                                             *         </dom-repeat>`;
                                                             *   }
                                                             *   static get is() { return 'employee-list'; }
                                                             *   static get properties() {
                                                             *     return {
                                                             *       employees: {
                                                             *         value() {
                                                             *           return [
                                                             *             {first: 'Bob', last: 'Smith'},
                                                             *             {first: 'Sally', last: 'Johnson'},
                                                             *             ...
                                                             *           ];
                                                             *         }
                                                             *       }
                                                             *     };
                                                             *   }
                                                             *   toggleSelection(e) {
                                                             *     const item = this.$.employeeList.itemForElement(e.target);
                                                             *     this.$.selector.select(item);
                                                             *   }
                                                             * }
                                                             * ```
                                                             *
                                                             * @polymer
                                                             * @customElement
                                                             * @extends {baseArraySelector}
                                                             * @appliesMixin ArraySelectorMixin
                                                             * @summary Custom element that links paths between an input `items` array and
                                                             *   an output `selected` item or array based on calls to its selection API.
                                                             */_exports.ArraySelector=ArraySelector;customElements.define(ArraySelector.is,ArraySelector);var arraySelector={ArraySelectorMixin:ArraySelectorMixin,ArraySelector:ArraySelector};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$arraySelector=arraySelector;"use strict";var customStyleInterface$1=new CustomStyleInterface;if(!window.ShadyCSS){window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate:function prepareTemplate(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom:function prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles:function prepareTemplateStyles(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
     * @param {Element} element
     * @param {Object=} properties
     */styleSubtree:function styleSubtree(element,properties){customStyleInterface$1.processStyles();updateNativeProperties(element,properties)},/**
     * @param {Element} element
     */styleElement:function styleElement(element){// eslint-disable-line no-unused-vars
customStyleInterface$1.processStyles()},/**
     * @param {Object=} properties
     */styleDocument:function styleDocument(properties){customStyleInterface$1.processStyles();updateNativeProperties(document.body,properties)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:function getComputedStyleValue(element,property){return _getComputedStyleValue(element,property)},flushCustomStyles:function flushCustomStyles(){},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime}}window.ShadyCSS.CustomStyleInterface=customStyleInterface$1;var attr="include",CustomStyleInterface$1=window.ShadyCSS.CustomStyleInterface,CustomStyle=/*#__PURE__*/function(_HTMLElement2){babelHelpers.inherits(CustomStyle,_HTMLElement2);function CustomStyle(){var _this38;babelHelpers.classCallCheck(this,CustomStyle);_this38=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(CustomStyle).call(this));_this38._style=null;CustomStyleInterface$1.addCustomStyle(babelHelpers.assertThisInitialized(_this38));return _this38}/**
     * Returns the light-DOM `<style>` child this element wraps.  Upon first
     * call any style modules referenced via the `include` attribute will be
     * concatenated to this element's `<style>`.
     *
     * @export
     * @return {HTMLStyleElement} This element's light-DOM `<style>`
     */babelHelpers.createClass(CustomStyle,[{key:"getStyle",value:function getStyle(){if(this._style){return this._style}var style=/** @type {HTMLStyleElement} */this.querySelector("style");if(!style){return null}this._style=style;var include=style.getAttribute(attr);if(include){style.removeAttribute(attr);/** @suppress {deprecated} */style.textContent=cssFromModules(include)+style.textContent}/*
      HTML Imports styling the main document are deprecated in Chrome
      https://crbug.com/523952
       If this element is not in the main document, then it must be in an HTML Import document.
      In that case, move the custom style to the main document.
       The ordering of `<custom-style>` should stay the same as when loaded by HTML Imports, but there may be odd
      cases of ordering w.r.t the main document styles.
      */if(this.ownerDocument!==window.document){window.document.head.appendChild(this)}return this._style}}]);return CustomStyle}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.CustomStyle=CustomStyle;window.customElements.define("custom-style",CustomStyle);var customStyle={CustomStyle:CustomStyle};_exports.$customStyle=customStyle;var mutablePropertyChange$1;/** @suppress {missingProperties} */(function(){mutablePropertyChange$1=MutableData._mutablePropertyChange})();/**
       * Legacy element behavior to skip strict dirty-checking for objects and arrays,
       * (always consider them to be "dirty") for use on legacy API Polymer elements.
       *
       * By default, `Polymer.PropertyEffects` performs strict dirty checking on
       * objects, which means that any deep modifications to an object or array will
       * not be propagated unless "immutable" data patterns are used (i.e. all object
       * references from the root to the mutation were changed).
       *
       * Polymer also provides a proprietary data mutation and path notification API
       * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
       * mutation and notification of deep changes in an object graph to all elements
       * bound to the same object graph.
       *
       * In cases where neither immutable patterns nor the data mutation API can be
       * used, applying this mixin will cause Polymer to skip dirty checking for
       * objects and arrays (always consider them to be "dirty").  This allows a
       * user to make a deep modification to a bound object graph, and then either
       * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
       * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
       * elements that wish to be updated based on deep mutations must apply this
       * mixin or otherwise skip strict dirty checking for objects/arrays.
       * Specifically, any elements in the binding tree between the source of a
       * mutation and the consumption of it must apply this behavior or enable the
       * `Polymer.OptionalMutableDataBehavior`.
       *
       * In order to make the dirty check strategy configurable, see
       * `Polymer.OptionalMutableDataBehavior`.
       *
       * Note, the performance characteristics of propagating large object graphs
       * will be worse as opposed to using strict dirty checking with immutable
       * patterns or Polymer's path notification API.
       *
       * @polymerBehavior
       * @summary Behavior to skip strict dirty-checking for objects and
       *   arrays
       */var MutableDataBehavior={/**
   * Overrides `Polymer.PropertyEffects` to provide option for skipping
   * strict equality checking for Objects and Arrays.
   *
   * This method pulls the value to dirty check against from the `__dataTemp`
   * cache (rather than the normal `__data` cache) for Objects.  Since the temp
   * cache is cleared at the end of a turn, this implementation allows
   * side-effects of deep object changes to be processed by re-setting the
   * same object (using the temp cache as an in-turn backstop to prevent
   * cycles due to 2-way notification).
   *
   * @param {string} property Property name
   * @param {*} value New property value
   * @param {*} old Previous property value
   * @return {boolean} Whether the property should be considered a change
   * @protected
   * @override
   */_shouldPropertyChange:function _shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,!0)}};/**
    * Legacy element behavior to add the optional ability to skip strict
    * dirty-checking for objects and arrays (always consider them to be
    * "dirty") by setting a `mutable-data` attribute on an element instance.
    *
    * By default, `Polymer.PropertyEffects` performs strict dirty checking on
    * objects, which means that any deep modifications to an object or array will
    * not be propagated unless "immutable" data patterns are used (i.e. all object
    * references from the root to the mutation were changed).
    *
    * Polymer also provides a proprietary data mutation and path notification API
    * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
    * mutation and notification of deep changes in an object graph to all elements
    * bound to the same object graph.
    *
    * In cases where neither immutable patterns nor the data mutation API can be
    * used, applying this mixin will allow Polymer to skip dirty checking for
    * objects and arrays (always consider them to be "dirty").  This allows a
    * user to make a deep modification to a bound object graph, and then either
    * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
    * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
    * elements that wish to be updated based on deep mutations must apply this
    * mixin or otherwise skip strict dirty checking for objects/arrays.
    * Specifically, any elements in the binding tree between the source of a
    * mutation and the consumption of it must enable this behavior or apply the
    * `Polymer.OptionalMutableDataBehavior`.
    *
    * While this behavior adds the ability to forgo Object/Array dirty checking,
    * the `mutableData` flag defaults to false and must be set on the instance.
    *
    * Note, the performance characteristics of propagating large object graphs
    * will be worse by relying on `mutableData: true` as opposed to using
    * strict dirty checking with immutable patterns or Polymer's path notification
    * API.
    *
    * @polymerBehavior
    * @summary Behavior to optionally skip strict dirty-checking for objects and
    *   arrays
    */_exports.MutableDataBehavior=MutableDataBehavior;var OptionalMutableDataBehavior={properties:{/**
     * Instance-level flag for configuring the dirty-checking strategy
     * for this element.  When true, Objects and Arrays will skip dirty
     * checking, otherwise strict equality checking will be used.
     */mutableData:Boolean},/**
   * Overrides `Polymer.PropertyEffects` to skip strict equality checking
   * for Objects and Arrays.
   *
   * Pulls the value to dirty check against from the `__dataTemp` cache
   * (rather than the normal `__data` cache) for Objects.  Since the temp
   * cache is cleared at the end of a turn, this implementation allows
   * side-effects of deep object changes to be processed by re-setting the
   * same object (using the temp cache as an in-turn backstop to prevent
   * cycles due to 2-way notification).
   *
   * @param {string} property Property name
   * @param {*} value New property value
   * @param {*} old Previous property value
   * @return {boolean} Whether the property should be considered a change
   * @protected
   * @override
   */_shouldPropertyChange:function _shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,this.mutableData)}};_exports.OptionalMutableDataBehavior=OptionalMutableDataBehavior;var mutableDataBehavior={MutableDataBehavior:MutableDataBehavior,OptionalMutableDataBehavior:OptionalMutableDataBehavior};_exports.$mutableDataBehavior=mutableDataBehavior;var Base=LegacyElementMixin(HTMLElement).prototype;_exports.Base=Base;var polymerLegacy={Base:Base,Polymer:Polymer,html:html};_exports.$polymerLegacy=polymerLegacy;var IronMeta=/*#__PURE__*/function(){/**
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */function IronMeta(options){babelHelpers.classCallCheck(this,IronMeta);IronMeta[" "](options);/** @type {string} */this.type=options&&options.type||"default";/** @type {string|null|undefined} */this.key=options&&options.key;if(options&&"value"in options){/** @type {*} */this.value=options.value}}/** @return {*} */babelHelpers.createClass(IronMeta,[{key:"byKey",/**
     * @param {string} key
     * @return {*}
     */value:function byKey(key){this.key=key;return this.value}},{key:"value",get:function get(){var type=this.type,key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}/** @param {*} value */,set:function set(value){var type=this.type,key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(null==value){delete type[key]}else{type[key]=value}}}/** @return {!Array<*>} */},{key:"list",get:function get(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map(function(key){return metaDatas[this.type][key]},this)}}}]);return IronMeta}();_exports.IronMeta=IronMeta;;// This function is used to convince Closure not to remove constructor calls
// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;/**
                                `iron-meta` is a generic element you can use for sharing information across the
                                DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
                                such that any instance of iron-meta has access to the shared information. You
                                can use `iron-meta` to share whatever you want (or create an extension [like
                                x-meta] for enhancements).
                                
                                The `iron-meta` instances containing your actual data can be loaded in an
                                import, or constructed in any way you see fit. The only requirement is that you
                                create them before you try to access them.
                                
                                Examples:
                                
                                If I create an instance like this:
                                
                                    <iron-meta key="info" value="foo/bar"></iron-meta>
                                
                                Note that value="foo/bar" is the metadata I've defined. I could define more
                                attributes or use child nodes to define additional metadata.
                                
                                Now I can access that element (and it's metadata) from any iron-meta instance
                                via the byKey method, e.g.
                                
                                    meta.byKey('info');
                                
                                Pure imperative form would be like:
                                
                                    document.createElement('iron-meta').byKey('info');
                                
                                Or, in a Polymer element, you can include a meta in your template:
                                
                                    <iron-meta id="meta"></iron-meta>
                                    ...
                                    this.$.meta.byKey('info');
                                
                                @group Iron Elements
                                @demo demo/index.html
                                @element iron-meta
                                */Polymer({is:"iron-meta",properties:{/**
     * The type of meta-data.  All meta-data of the same type is stored
     * together.
     * @type {string}
     */type:{type:String,value:"default"},/**
     * The key used to store `value` under the `type` namespace.
     * @type {?string}
     */key:{type:String},/**
     * The meta-data to store or retrieve.
     * @type {*}
     */value:{type:String,notify:!0},/**
     * If true, `value` is set to the iron-meta instance itself.
     */self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function __computeMeta(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==void 0&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function _selfChanged(self){if(self){this.value=this}},/**
   * Retrieves meta data value by key.
   *
   * @method byKey
   * @param {string} key The key of the meta-data to be returned.
   * @return {*}
   */byKey:function byKey(key){return new IronMeta({type:this.type,key:key}).value}});var ironMeta={IronMeta:IronMeta};_exports.$ironMeta=ironMeta;Polymer({is:"iron-iconset-svg",properties:{/**
     * The name of the iconset.
     */name:{type:String,observer:"_nameChanged"},/**
     * The size of an individual icon. Note that icons must be square.
     */size:{type:Number,value:24},/**
     * Set to true to enable mirroring of icons where specified when they are
     * stamped. Icons that should be mirrored should be decorated with a
     * `mirror-in-rtl` attribute.
     *
     * NOTE: For performance reasons, direction will be resolved once per
     * document per iconset, so moving icons in and out of RTL subtrees will
     * not cause their mirrored state to change.
     */rtlMirroring:{type:Boolean,value:!1},/**
     * Set to true to measure RTL based on the dir attribute on the body or
     * html elements (measured on document.body or document.documentElement as
     * available).
     */useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function created(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function attached(){this.style.display="none"},/**
   * Construct an array of all icon names in this iconset.
   *
   * @return {!Array} Array of icon names.
   */getIconNames:function getIconNames(){this._icons=this._createIconMap();return Object.keys(this._icons).map(function(n){return this.name+":"+n},this)},/**
   * Applies an icon to the given element.
   *
   * An svg icon is prepended to the element's shadowRoot if it exists,
   * otherwise to the element itself.
   *
   * If RTL mirroring is enabled, and the icon is marked to be mirrored in
   * RTL, the element will be tested (once and only once ever for each
   * iconset) to determine the direction of the subtree the element is in.
   * This direction will apply to all future icon applications, although only
   * icons marked to be mirrored will be affected.
   *
   * @method applyIcon
   * @param {Element} element Element to which the icon is applied.
   * @param {string} iconName Name of the icon to apply.
   * @return {?Element} The svg element which renders the icon.
   */applyIcon:function applyIcon(element,iconName){// Remove old svg element
this.removeIcon(element);// install new svg element
var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){// insert svg element into shadow root, if it exists
var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},/**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param {Element} element The element from which the icon is removed.
   */removeIcon:function removeIcon(element){// Remove old svg element
if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},/**
   * Measures and memoizes the direction of the element. Note that this
   * measurement is only done once and the result is memoized for future
   * invocations.
   */_targetIsRTL:function _targetIsRTL(target){if(null==this.__targetIsRTL){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===globalElement.getAttribute("dir")}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&"rtl"===window.getComputedStyle(target).direction}}return this.__targetIsRTL},/**
   *
   * When name is changed, register iconset metadata
   *
   */_nameChanged:function _nameChanged(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},/**
   * Create a map of child SVG elements by id.
   *
   * @return {!Object} Map of id's to SVG elements.
   */_createIconMap:function _createIconMap(){// Objects chained to Object.prototype (`{}`) have members. Specifically,
// on FF there is a `watch` method that confuses the icon map, so we
// need to use a null-based object here.
var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach(function(icon){icons[icon.id]=icon});return icons},/**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   *
   * @return {Element} Returns an installable clone of the SVG element
   * matching `id`.
   */_cloneIcon:function _cloneIcon(id,mirrorAllowed){// create the icon map on-demand, since the iconset itself has no discrete
// signal to know when it's children are fully parsed
this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},/**
   * @param {Element} sourceSvg
   * @param {number} size
   * @param {Boolean} mirrorAllowed
   * @return {Element}
   */_prepareSvgClone:function _prepareSvgClone(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(!0),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");// TODO(dfreedm): `pointer-events: none` works around
// https://crbug.com/370136
// TODO(sjmiles): inline style may not be ideal, but avoids requiring a
// shadow-root
svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});var template=html(_templateObject_8c4272f00a1811eb9426c94f859aee76());document.head.appendChild(template.content);var sharedStyles=document.createElement("dom-module");sharedStyles.setAttribute("id","shared-styles");sharedStyles.innerHTML="<template><style>/*!\n * Bootstrap Grid v4.5.2 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */html{box-sizing:border-box;-ms-overflow-style:scrollbar}*,*::before,*::after{box-sizing:inherit}.container,.container-fluid,.container-sm,.container-md,.container-lg,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container,.container-sm{max-width:540px}}@media (min-width: 768px){.container,.container-sm,.container-md{max-width:720px}}@media (min-width: 992px){.container,.container-sm,.container-md,.container-lg{max-width:960px}}@media (min-width: 1200px){.container,.container-sm,.container-md,.container-lg,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=\"col-\"]{padding-right:0;padding-left:0}.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col,.col-auto,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm,.col-sm-auto,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md,.col-md-auto,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg,.col-lg-auto,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.33333%;max-width:8.33333%}.col-2{flex:0 0 16.66667%;max-width:16.66667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.33333%;max-width:33.33333%}.col-5{flex:0 0 41.66667%;max-width:41.66667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.33333%;max-width:58.33333%}.col-8{flex:0 0 66.66667%;max-width:66.66667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.33333%;max-width:83.33333%}.col-11{flex:0 0 91.66667%;max-width:91.66667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.66667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333%}.offset-5{margin-left:41.66667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333%}.offset-8{margin-left:66.66667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333%}.offset-11{margin-left:91.66667%}@media (min-width: 576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.33333%;max-width:8.33333%}.col-sm-2{flex:0 0 16.66667%;max-width:16.66667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.33333%;max-width:33.33333%}.col-sm-5{flex:0 0 41.66667%;max-width:41.66667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.33333%;max-width:58.33333%}.col-sm-8{flex:0 0 66.66667%;max-width:66.66667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.33333%;max-width:83.33333%}.col-sm-11{flex:0 0 91.66667%;max-width:91.66667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.66667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333%}.offset-sm-5{margin-left:41.66667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333%}.offset-sm-8{margin-left:66.66667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333%}.offset-sm-11{margin-left:91.66667%}}@media (min-width: 768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.33333%;max-width:8.33333%}.col-md-2{flex:0 0 16.66667%;max-width:16.66667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.33333%;max-width:33.33333%}.col-md-5{flex:0 0 41.66667%;max-width:41.66667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.33333%;max-width:58.33333%}.col-md-8{flex:0 0 66.66667%;max-width:66.66667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.33333%;max-width:83.33333%}.col-md-11{flex:0 0 91.66667%;max-width:91.66667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.66667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333%}.offset-md-5{margin-left:41.66667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333%}.offset-md-8{margin-left:66.66667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333%}.offset-md-11{margin-left:91.66667%}}@media (min-width: 992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.33333%;max-width:8.33333%}.col-lg-2{flex:0 0 16.66667%;max-width:16.66667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.33333%;max-width:33.33333%}.col-lg-5{flex:0 0 41.66667%;max-width:41.66667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.33333%;max-width:58.33333%}.col-lg-8{flex:0 0 66.66667%;max-width:66.66667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.33333%;max-width:83.33333%}.col-lg-11{flex:0 0 91.66667%;max-width:91.66667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.66667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333%}.offset-lg-5{margin-left:41.66667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333%}.offset-lg-8{margin-left:66.66667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333%}.offset-lg-11{margin-left:91.66667%}}@media (min-width: 1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.33333%;max-width:8.33333%}.col-xl-2{flex:0 0 16.66667%;max-width:16.66667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.33333%;max-width:33.33333%}.col-xl-5{flex:0 0 41.66667%;max-width:41.66667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.33333%;max-width:58.33333%}.col-xl-8{flex:0 0 66.66667%;max-width:66.66667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.33333%;max-width:83.33333%}.col-xl-11{flex:0 0 91.66667%;max-width:91.66667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.66667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333%}.offset-xl-5{margin-left:41.66667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333%}.offset-xl-8{margin-left:66.66667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333%}.offset-xl-11{margin-left:91.66667%}}.d-none{display:none !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}@media (min-width: 576px){.d-sm-none{display:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}}@media (min-width: 768px){.d-md-none{display:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}}@media (min-width: 992px){.d-lg-none{display:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}}@media (min-width: 1200px){.d-xl-none{display:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}}@media print{.d-print-none{display:none !important}.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-fill{flex:1 1 auto !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}@media (min-width: 576px){.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}}@media (min-width: 768px){.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}}@media (min-width: 992px){.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}}@media (min-width: 1200px){.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}}.m-0{margin:0 !important}.mt-0,.my-0{margin-top:0 !important}.mr-0,.mx-0{margin-right:0 !important}.mb-0,.my-0{margin-bottom:0 !important}.ml-0,.mx-0{margin-left:0 !important}.m-1{margin:.25rem !important}.mt-1,.my-1{margin-top:.25rem !important}.mr-1,.mx-1{margin-right:.25rem !important}.mb-1,.my-1{margin-bottom:.25rem !important}.ml-1,.mx-1{margin-left:.25rem !important}.m-2{margin:.5rem !important}.mt-2,.my-2{margin-top:.5rem !important}.mr-2,.mx-2{margin-right:.5rem !important}.mb-2,.my-2{margin-bottom:.5rem !important}.ml-2,.mx-2{margin-left:.5rem !important}.m-3{margin:1rem !important}.mt-3,.my-3{margin-top:1rem !important}.mr-3,.mx-3{margin-right:1rem !important}.mb-3,.my-3{margin-bottom:1rem !important}.ml-3,.mx-3{margin-left:1rem !important}.m-4{margin:1.5rem !important}.mt-4,.my-4{margin-top:1.5rem !important}.mr-4,.mx-4{margin-right:1.5rem !important}.mb-4,.my-4{margin-bottom:1.5rem !important}.ml-4,.mx-4{margin-left:1.5rem !important}.m-5{margin:3rem !important}.mt-5,.my-5{margin-top:3rem !important}.mr-5,.mx-5{margin-right:3rem !important}.mb-5,.my-5{margin-bottom:3rem !important}.ml-5,.mx-5{margin-left:3rem !important}.p-0{padding:0 !important}.pt-0,.py-0{padding-top:0 !important}.pr-0,.px-0{padding-right:0 !important}.pb-0,.py-0{padding-bottom:0 !important}.pl-0,.px-0{padding-left:0 !important}.p-1{padding:.25rem !important}.pt-1,.py-1{padding-top:.25rem !important}.pr-1,.px-1{padding-right:.25rem !important}.pb-1,.py-1{padding-bottom:.25rem !important}.pl-1,.px-1{padding-left:.25rem !important}.p-2{padding:.5rem !important}.pt-2,.py-2{padding-top:.5rem !important}.pr-2,.px-2{padding-right:.5rem !important}.pb-2,.py-2{padding-bottom:.5rem !important}.pl-2,.px-2{padding-left:.5rem !important}.p-3{padding:1rem !important}.pt-3,.py-3{padding-top:1rem !important}.pr-3,.px-3{padding-right:1rem !important}.pb-3,.py-3{padding-bottom:1rem !important}.pl-3,.px-3{padding-left:1rem !important}.p-4{padding:1.5rem !important}.pt-4,.py-4{padding-top:1.5rem !important}.pr-4,.px-4{padding-right:1.5rem !important}.pb-4,.py-4{padding-bottom:1.5rem !important}.pl-4,.px-4{padding-left:1.5rem !important}.p-5{padding:3rem !important}.pt-5,.py-5{padding-top:3rem !important}.pr-5,.px-5{padding-right:3rem !important}.pb-5,.py-5{padding-bottom:3rem !important}.pl-5,.px-5{padding-left:3rem !important}.m-n1{margin:-.25rem !important}.mt-n1,.my-n1{margin-top:-.25rem !important}.mr-n1,.mx-n1{margin-right:-.25rem !important}.mb-n1,.my-n1{margin-bottom:-.25rem !important}.ml-n1,.mx-n1{margin-left:-.25rem !important}.m-n2{margin:-.5rem !important}.mt-n2,.my-n2{margin-top:-.5rem !important}.mr-n2,.mx-n2{margin-right:-.5rem !important}.mb-n2,.my-n2{margin-bottom:-.5rem !important}.ml-n2,.mx-n2{margin-left:-.5rem !important}.m-n3{margin:-1rem !important}.mt-n3,.my-n3{margin-top:-1rem !important}.mr-n3,.mx-n3{margin-right:-1rem !important}.mb-n3,.my-n3{margin-bottom:-1rem !important}.ml-n3,.mx-n3{margin-left:-1rem !important}.m-n4{margin:-1.5rem !important}.mt-n4,.my-n4{margin-top:-1.5rem !important}.mr-n4,.mx-n4{margin-right:-1.5rem !important}.mb-n4,.my-n4{margin-bottom:-1.5rem !important}.ml-n4,.mx-n4{margin-left:-1.5rem !important}.m-n5{margin:-3rem !important}.mt-n5,.my-n5{margin-top:-3rem !important}.mr-n5,.mx-n5{margin-right:-3rem !important}.mb-n5,.my-n5{margin-bottom:-3rem !important}.ml-n5,.mx-n5{margin-left:-3rem !important}.m-auto{margin:auto !important}.mt-auto,.my-auto{margin-top:auto !important}.mr-auto,.mx-auto{margin-right:auto !important}.mb-auto,.my-auto{margin-bottom:auto !important}.ml-auto,.mx-auto{margin-left:auto !important}@media (min-width: 576px){.m-sm-0{margin:0 !important}.mt-sm-0,.my-sm-0{margin-top:0 !important}.mr-sm-0,.mx-sm-0{margin-right:0 !important}.mb-sm-0,.my-sm-0{margin-bottom:0 !important}.ml-sm-0,.mx-sm-0{margin-left:0 !important}.m-sm-1{margin:.25rem !important}.mt-sm-1,.my-sm-1{margin-top:.25rem !important}.mr-sm-1,.mx-sm-1{margin-right:.25rem !important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem !important}.ml-sm-1,.mx-sm-1{margin-left:.25rem !important}.m-sm-2{margin:.5rem !important}.mt-sm-2,.my-sm-2{margin-top:.5rem !important}.mr-sm-2,.mx-sm-2{margin-right:.5rem !important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem !important}.ml-sm-2,.mx-sm-2{margin-left:.5rem !important}.m-sm-3{margin:1rem !important}.mt-sm-3,.my-sm-3{margin-top:1rem !important}.mr-sm-3,.mx-sm-3{margin-right:1rem !important}.mb-sm-3,.my-sm-3{margin-bottom:1rem !important}.ml-sm-3,.mx-sm-3{margin-left:1rem !important}.m-sm-4{margin:1.5rem !important}.mt-sm-4,.my-sm-4{margin-top:1.5rem !important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem !important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem !important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem !important}.m-sm-5{margin:3rem !important}.mt-sm-5,.my-sm-5{margin-top:3rem !important}.mr-sm-5,.mx-sm-5{margin-right:3rem !important}.mb-sm-5,.my-sm-5{margin-bottom:3rem !important}.ml-sm-5,.mx-sm-5{margin-left:3rem !important}.p-sm-0{padding:0 !important}.pt-sm-0,.py-sm-0{padding-top:0 !important}.pr-sm-0,.px-sm-0{padding-right:0 !important}.pb-sm-0,.py-sm-0{padding-bottom:0 !important}.pl-sm-0,.px-sm-0{padding-left:0 !important}.p-sm-1{padding:.25rem !important}.pt-sm-1,.py-sm-1{padding-top:.25rem !important}.pr-sm-1,.px-sm-1{padding-right:.25rem !important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem !important}.pl-sm-1,.px-sm-1{padding-left:.25rem !important}.p-sm-2{padding:.5rem !important}.pt-sm-2,.py-sm-2{padding-top:.5rem !important}.pr-sm-2,.px-sm-2{padding-right:.5rem !important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem !important}.pl-sm-2,.px-sm-2{padding-left:.5rem !important}.p-sm-3{padding:1rem !important}.pt-sm-3,.py-sm-3{padding-top:1rem !important}.pr-sm-3,.px-sm-3{padding-right:1rem !important}.pb-sm-3,.py-sm-3{padding-bottom:1rem !important}.pl-sm-3,.px-sm-3{padding-left:1rem !important}.p-sm-4{padding:1.5rem !important}.pt-sm-4,.py-sm-4{padding-top:1.5rem !important}.pr-sm-4,.px-sm-4{padding-right:1.5rem !important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem !important}.pl-sm-4,.px-sm-4{padding-left:1.5rem !important}.p-sm-5{padding:3rem !important}.pt-sm-5,.py-sm-5{padding-top:3rem !important}.pr-sm-5,.px-sm-5{padding-right:3rem !important}.pb-sm-5,.py-sm-5{padding-bottom:3rem !important}.pl-sm-5,.px-sm-5{padding-left:3rem !important}.m-sm-n1{margin:-.25rem !important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem !important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem !important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem !important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem !important}.m-sm-n2{margin:-.5rem !important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem !important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem !important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem !important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem !important}.m-sm-n3{margin:-1rem !important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem !important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem !important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem !important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem !important}.m-sm-n4{margin:-1.5rem !important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem !important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem !important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem !important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem !important}.m-sm-n5{margin:-3rem !important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem !important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem !important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem !important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem !important}.m-sm-auto{margin:auto !important}.mt-sm-auto,.my-sm-auto{margin-top:auto !important}.mr-sm-auto,.mx-sm-auto{margin-right:auto !important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto !important}.ml-sm-auto,.mx-sm-auto{margin-left:auto !important}}@media (min-width: 768px){.m-md-0{margin:0 !important}.mt-md-0,.my-md-0{margin-top:0 !important}.mr-md-0,.mx-md-0{margin-right:0 !important}.mb-md-0,.my-md-0{margin-bottom:0 !important}.ml-md-0,.mx-md-0{margin-left:0 !important}.m-md-1{margin:.25rem !important}.mt-md-1,.my-md-1{margin-top:.25rem !important}.mr-md-1,.mx-md-1{margin-right:.25rem !important}.mb-md-1,.my-md-1{margin-bottom:.25rem !important}.ml-md-1,.mx-md-1{margin-left:.25rem !important}.m-md-2{margin:.5rem !important}.mt-md-2,.my-md-2{margin-top:.5rem !important}.mr-md-2,.mx-md-2{margin-right:.5rem !important}.mb-md-2,.my-md-2{margin-bottom:.5rem !important}.ml-md-2,.mx-md-2{margin-left:.5rem !important}.m-md-3{margin:1rem !important}.mt-md-3,.my-md-3{margin-top:1rem !important}.mr-md-3,.mx-md-3{margin-right:1rem !important}.mb-md-3,.my-md-3{margin-bottom:1rem !important}.ml-md-3,.mx-md-3{margin-left:1rem !important}.m-md-4{margin:1.5rem !important}.mt-md-4,.my-md-4{margin-top:1.5rem !important}.mr-md-4,.mx-md-4{margin-right:1.5rem !important}.mb-md-4,.my-md-4{margin-bottom:1.5rem !important}.ml-md-4,.mx-md-4{margin-left:1.5rem !important}.m-md-5{margin:3rem !important}.mt-md-5,.my-md-5{margin-top:3rem !important}.mr-md-5,.mx-md-5{margin-right:3rem !important}.mb-md-5,.my-md-5{margin-bottom:3rem !important}.ml-md-5,.mx-md-5{margin-left:3rem !important}.p-md-0{padding:0 !important}.pt-md-0,.py-md-0{padding-top:0 !important}.pr-md-0,.px-md-0{padding-right:0 !important}.pb-md-0,.py-md-0{padding-bottom:0 !important}.pl-md-0,.px-md-0{padding-left:0 !important}.p-md-1{padding:.25rem !important}.pt-md-1,.py-md-1{padding-top:.25rem !important}.pr-md-1,.px-md-1{padding-right:.25rem !important}.pb-md-1,.py-md-1{padding-bottom:.25rem !important}.pl-md-1,.px-md-1{padding-left:.25rem !important}.p-md-2{padding:.5rem !important}.pt-md-2,.py-md-2{padding-top:.5rem !important}.pr-md-2,.px-md-2{padding-right:.5rem !important}.pb-md-2,.py-md-2{padding-bottom:.5rem !important}.pl-md-2,.px-md-2{padding-left:.5rem !important}.p-md-3{padding:1rem !important}.pt-md-3,.py-md-3{padding-top:1rem !important}.pr-md-3,.px-md-3{padding-right:1rem !important}.pb-md-3,.py-md-3{padding-bottom:1rem !important}.pl-md-3,.px-md-3{padding-left:1rem !important}.p-md-4{padding:1.5rem !important}.pt-md-4,.py-md-4{padding-top:1.5rem !important}.pr-md-4,.px-md-4{padding-right:1.5rem !important}.pb-md-4,.py-md-4{padding-bottom:1.5rem !important}.pl-md-4,.px-md-4{padding-left:1.5rem !important}.p-md-5{padding:3rem !important}.pt-md-5,.py-md-5{padding-top:3rem !important}.pr-md-5,.px-md-5{padding-right:3rem !important}.pb-md-5,.py-md-5{padding-bottom:3rem !important}.pl-md-5,.px-md-5{padding-left:3rem !important}.m-md-n1{margin:-.25rem !important}.mt-md-n1,.my-md-n1{margin-top:-.25rem !important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem !important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem !important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem !important}.m-md-n2{margin:-.5rem !important}.mt-md-n2,.my-md-n2{margin-top:-.5rem !important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem !important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem !important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem !important}.m-md-n3{margin:-1rem !important}.mt-md-n3,.my-md-n3{margin-top:-1rem !important}.mr-md-n3,.mx-md-n3{margin-right:-1rem !important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem !important}.ml-md-n3,.mx-md-n3{margin-left:-1rem !important}.m-md-n4{margin:-1.5rem !important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem !important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem !important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem !important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem !important}.m-md-n5{margin:-3rem !important}.mt-md-n5,.my-md-n5{margin-top:-3rem !important}.mr-md-n5,.mx-md-n5{margin-right:-3rem !important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem !important}.ml-md-n5,.mx-md-n5{margin-left:-3rem !important}.m-md-auto{margin:auto !important}.mt-md-auto,.my-md-auto{margin-top:auto !important}.mr-md-auto,.mx-md-auto{margin-right:auto !important}.mb-md-auto,.my-md-auto{margin-bottom:auto !important}.ml-md-auto,.mx-md-auto{margin-left:auto !important}}@media (min-width: 992px){.m-lg-0{margin:0 !important}.mt-lg-0,.my-lg-0{margin-top:0 !important}.mr-lg-0,.mx-lg-0{margin-right:0 !important}.mb-lg-0,.my-lg-0{margin-bottom:0 !important}.ml-lg-0,.mx-lg-0{margin-left:0 !important}.m-lg-1{margin:.25rem !important}.mt-lg-1,.my-lg-1{margin-top:.25rem !important}.mr-lg-1,.mx-lg-1{margin-right:.25rem !important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem !important}.ml-lg-1,.mx-lg-1{margin-left:.25rem !important}.m-lg-2{margin:.5rem !important}.mt-lg-2,.my-lg-2{margin-top:.5rem !important}.mr-lg-2,.mx-lg-2{margin-right:.5rem !important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem !important}.ml-lg-2,.mx-lg-2{margin-left:.5rem !important}.m-lg-3{margin:1rem !important}.mt-lg-3,.my-lg-3{margin-top:1rem !important}.mr-lg-3,.mx-lg-3{margin-right:1rem !important}.mb-lg-3,.my-lg-3{margin-bottom:1rem !important}.ml-lg-3,.mx-lg-3{margin-left:1rem !important}.m-lg-4{margin:1.5rem !important}.mt-lg-4,.my-lg-4{margin-top:1.5rem !important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem !important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem !important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem !important}.m-lg-5{margin:3rem !important}.mt-lg-5,.my-lg-5{margin-top:3rem !important}.mr-lg-5,.mx-lg-5{margin-right:3rem !important}.mb-lg-5,.my-lg-5{margin-bottom:3rem !important}.ml-lg-5,.mx-lg-5{margin-left:3rem !important}.p-lg-0{padding:0 !important}.pt-lg-0,.py-lg-0{padding-top:0 !important}.pr-lg-0,.px-lg-0{padding-right:0 !important}.pb-lg-0,.py-lg-0{padding-bottom:0 !important}.pl-lg-0,.px-lg-0{padding-left:0 !important}.p-lg-1{padding:.25rem !important}.pt-lg-1,.py-lg-1{padding-top:.25rem !important}.pr-lg-1,.px-lg-1{padding-right:.25rem !important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem !important}.pl-lg-1,.px-lg-1{padding-left:.25rem !important}.p-lg-2{padding:.5rem !important}.pt-lg-2,.py-lg-2{padding-top:.5rem !important}.pr-lg-2,.px-lg-2{padding-right:.5rem !important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem !important}.pl-lg-2,.px-lg-2{padding-left:.5rem !important}.p-lg-3{padding:1rem !important}.pt-lg-3,.py-lg-3{padding-top:1rem !important}.pr-lg-3,.px-lg-3{padding-right:1rem !important}.pb-lg-3,.py-lg-3{padding-bottom:1rem !important}.pl-lg-3,.px-lg-3{padding-left:1rem !important}.p-lg-4{padding:1.5rem !important}.pt-lg-4,.py-lg-4{padding-top:1.5rem !important}.pr-lg-4,.px-lg-4{padding-right:1.5rem !important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem !important}.pl-lg-4,.px-lg-4{padding-left:1.5rem !important}.p-lg-5{padding:3rem !important}.pt-lg-5,.py-lg-5{padding-top:3rem !important}.pr-lg-5,.px-lg-5{padding-right:3rem !important}.pb-lg-5,.py-lg-5{padding-bottom:3rem !important}.pl-lg-5,.px-lg-5{padding-left:3rem !important}.m-lg-n1{margin:-.25rem !important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem !important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem !important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem !important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem !important}.m-lg-n2{margin:-.5rem !important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem !important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem !important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem !important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem !important}.m-lg-n3{margin:-1rem !important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem !important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem !important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem !important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem !important}.m-lg-n4{margin:-1.5rem !important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem !important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem !important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem !important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem !important}.m-lg-n5{margin:-3rem !important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem !important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem !important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem !important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem !important}.m-lg-auto{margin:auto !important}.mt-lg-auto,.my-lg-auto{margin-top:auto !important}.mr-lg-auto,.mx-lg-auto{margin-right:auto !important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto !important}.ml-lg-auto,.mx-lg-auto{margin-left:auto !important}}@media (min-width: 1200px){.m-xl-0{margin:0 !important}.mt-xl-0,.my-xl-0{margin-top:0 !important}.mr-xl-0,.mx-xl-0{margin-right:0 !important}.mb-xl-0,.my-xl-0{margin-bottom:0 !important}.ml-xl-0,.mx-xl-0{margin-left:0 !important}.m-xl-1{margin:.25rem !important}.mt-xl-1,.my-xl-1{margin-top:.25rem !important}.mr-xl-1,.mx-xl-1{margin-right:.25rem !important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem !important}.ml-xl-1,.mx-xl-1{margin-left:.25rem !important}.m-xl-2{margin:.5rem !important}.mt-xl-2,.my-xl-2{margin-top:.5rem !important}.mr-xl-2,.mx-xl-2{margin-right:.5rem !important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem !important}.ml-xl-2,.mx-xl-2{margin-left:.5rem !important}.m-xl-3{margin:1rem !important}.mt-xl-3,.my-xl-3{margin-top:1rem !important}.mr-xl-3,.mx-xl-3{margin-right:1rem !important}.mb-xl-3,.my-xl-3{margin-bottom:1rem !important}.ml-xl-3,.mx-xl-3{margin-left:1rem !important}.m-xl-4{margin:1.5rem !important}.mt-xl-4,.my-xl-4{margin-top:1.5rem !important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem !important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem !important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem !important}.m-xl-5{margin:3rem !important}.mt-xl-5,.my-xl-5{margin-top:3rem !important}.mr-xl-5,.mx-xl-5{margin-right:3rem !important}.mb-xl-5,.my-xl-5{margin-bottom:3rem !important}.ml-xl-5,.mx-xl-5{margin-left:3rem !important}.p-xl-0{padding:0 !important}.pt-xl-0,.py-xl-0{padding-top:0 !important}.pr-xl-0,.px-xl-0{padding-right:0 !important}.pb-xl-0,.py-xl-0{padding-bottom:0 !important}.pl-xl-0,.px-xl-0{padding-left:0 !important}.p-xl-1{padding:.25rem !important}.pt-xl-1,.py-xl-1{padding-top:.25rem !important}.pr-xl-1,.px-xl-1{padding-right:.25rem !important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem !important}.pl-xl-1,.px-xl-1{padding-left:.25rem !important}.p-xl-2{padding:.5rem !important}.pt-xl-2,.py-xl-2{padding-top:.5rem !important}.pr-xl-2,.px-xl-2{padding-right:.5rem !important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem !important}.pl-xl-2,.px-xl-2{padding-left:.5rem !important}.p-xl-3{padding:1rem !important}.pt-xl-3,.py-xl-3{padding-top:1rem !important}.pr-xl-3,.px-xl-3{padding-right:1rem !important}.pb-xl-3,.py-xl-3{padding-bottom:1rem !important}.pl-xl-3,.px-xl-3{padding-left:1rem !important}.p-xl-4{padding:1.5rem !important}.pt-xl-4,.py-xl-4{padding-top:1.5rem !important}.pr-xl-4,.px-xl-4{padding-right:1.5rem !important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem !important}.pl-xl-4,.px-xl-4{padding-left:1.5rem !important}.p-xl-5{padding:3rem !important}.pt-xl-5,.py-xl-5{padding-top:3rem !important}.pr-xl-5,.px-xl-5{padding-right:3rem !important}.pb-xl-5,.py-xl-5{padding-bottom:3rem !important}.pl-xl-5,.px-xl-5{padding-left:3rem !important}.m-xl-n1{margin:-.25rem !important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem !important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem !important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem !important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem !important}.m-xl-n2{margin:-.5rem !important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem !important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem !important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem !important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem !important}.m-xl-n3{margin:-1rem !important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem !important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem !important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem !important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem !important}.m-xl-n4{margin:-1.5rem !important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem !important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem !important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem !important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem !important}.m-xl-n5{margin:-3rem !important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem !important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem !important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem !important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem !important}.m-xl-auto{margin:auto !important}.mt-xl-auto,.my-xl-auto{margin-top:auto !important}.mr-xl-auto,.mx-xl-auto{margin-right:auto !important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto !important}.ml-xl-auto,.mx-xl-auto{margin-left:auto !important}}/*!\n * Bootstrap Reboot v4.5.2 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n */*,*::before,*::after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0 !important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[title],abbr[data-original-title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#d50000;text-decoration:none;background-color:transparent}a:hover{color:#890000;text-decoration:underline}a:not([href]):not([class]){color:inherit;text-decoration:none}a:not([href]):not([class]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=\"button\"]{cursor:pointer}select{word-wrap:normal}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button:not(:disabled),[type=\"button\"]:not(:disabled),[type=\"reset\"]:not(:disabled),[type=\"submit\"]:not(:disabled){cursor:pointer}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{padding:0;border-style:none}input[type=\"radio\"],input[type=\"checkbox\"]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{outline-offset:-2px;-webkit-appearance:none}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none !important}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:2.5rem}h2,.h2{font-size:2rem}h3,.h3{font-size:1.75rem}h4,.h4{font-size:1.5rem}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,0.1)}small,.small{font-size:80%;font-weight:400}mark,.mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:\"\\2014\\00A0\"}.clearfix::after{display:block;clear:both;content:\"\"}paper-icon-button{display:inline-block;width:1em;height:1em;padding:0;font-size:1.4em;line-height:.8}paper-progress{--paper-progress-active-color: $clr-blue-500;--paper-progress-secondary-color: $clr-blue-100}html{--paper-font-common-base_-_font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji !important}*[type=\"submit\"]{-webkit-appearance:none !important}\n\n/*# sourceMappingURL=shared-styles.css.map */\n</style></template>";document.head.appendChild(sharedStyles);var cssMixins=document.createElement("custom-style");cssMixins.setAttribute("id","app-css-mixins");cssMixins.innerHTML="<style is=\"custom-style\">\n/*# sourceMappingURL=css-mixins.css.map */\n</style>";document.head.appendChild(cssMixins);var AbstractElement=/*#__PURE__*/function(_PolymerElement2){babelHelpers.inherits(AbstractElement,_PolymerElement2);function AbstractElement(){babelHelpers.classCallCheck(this,AbstractElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(AbstractElement).apply(this,arguments))}return AbstractElement}(PolymerElement);_exports.$AbstractElementDefault=AbstractElement;var AbstractElement$1={default:AbstractElement};_exports.$AbstractElement=AbstractElement$1;var style=html(_templateObject2_8c4272f00a1811eb9426c94f859aee76());_exports.$styleDefault=style;var style$1={default:style};_exports.$style=style$1;var template$1=html(_templateObject3_8c4272f00a1811eb9426c94f859aee76(),style);_exports.$templateDefault=template$1;var template$2={default:template$1};_exports.$template=template$2;var HelloElement=/*#__PURE__*/function(_AbstractElement){babelHelpers.inherits(HelloElement,_AbstractElement);function HelloElement(){babelHelpers.classCallCheck(this,HelloElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(HelloElement).apply(this,arguments))}babelHelpers.createClass(HelloElement,null,[{key:"properties",get:function get(){return{userName:{type:String,reflectToAttribute:!0}}}},{key:"template",get:function get(){return template$1}}]);return HelloElement}(AbstractElement);window.customElements.define("hello-element",HelloElement);var template$3=html(_templateObject4_8c4272f00a1811eb9426c94f859aee76());template$3.setAttribute("style","display: none;");document.head.appendChild(template$3.content);var style$2=document.createElement("style");style$2.textContent="[hidden] { display: none !important; }";document.head.appendChild(style$2);Polymer({_template:html(_templateObject5_8c4272f00a1811eb9426c94f859aee76()),is:"iron-icon",properties:{/**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */icon:{type:String},/**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */theme:{type:String},/**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */src:{type:String},/**
     * @type {!IronMeta}
     */_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function _iconChanged(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function _srcChanged(src){this._updateIcon()},_usesIconset:function _usesIconset(){return this.icon||!this.src},/** @suppress {visibility} */_updateIcon:function _updateIcon(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(""===this._iconName){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=/** @type {?Polymer.Iconset} */this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=!1}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});var template$4=html(_templateObject6_8c4272f00a1811eb9426c94f859aee76());template$4.setAttribute("style","display: none;");document.head.appendChild(template$4.content);var IronRangeBehavior={properties:{/**
     * The number that represents the current value.
     */value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},/**
     * The number that indicates the minimum value of the range.
     */min:{type:Number,value:0,notify:!0},/**
     * The number that indicates the maximum value of the range.
     */max:{type:Number,value:100,notify:!0},/**
     * Specifies the value granularity of the range's value.
     */step:{type:Number,value:1,notify:!0},/**
     * Returns the ratio of the value.
     */ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function _calcRatio(value){return(this._clampValue(value)-this.min)/(this.max-this.min)},_clampValue:function _clampValue(value){return Math.min(this.max,Math.max(this.min,this._calcStep(value)))},_calcStep:function _calcStep(value){// polymer/issues/2493
value=parseFloat(value);if(!this.step){return value}var numSteps=Math.round((value-this.min)/this.step);if(1>this.step){/**
       * For small values of this.step, if we calculate the step using
       * `Math.round(value / step) * step` we may hit a precision point issue
       * eg. 0.1 * 0.2 =  0.020000000000000004
       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
       *
       * as a work around we can divide by the reciprocal of `step`
       */return numSteps/(1/this.step)+this.min}else{return numSteps*this.step+this.min}},_validateValue:function _validateValue(){var v=this._clampValue(this.value);this.value=this.oldValue=isNaN(v)?this.oldValue:v;return this.value!==v},_update:function _update(){this._validateValue();this._setRatio(100*this._calcRatio(this.value))}};_exports.IronRangeBehavior=IronRangeBehavior;var ironRangeBehavior={IronRangeBehavior:IronRangeBehavior};_exports.$ironRangeBehavior=ironRangeBehavior;Polymer({_template:html(_templateObject7_8c4272f00a1811eb9426c94f859aee76()),is:"paper-progress",behaviors:[IronRangeBehavior],properties:{/**
     * The number that represents the current secondary progress.
     */secondaryProgress:{type:Number,value:0},/**
     * The secondary ratio
     */secondaryRatio:{type:Number,value:0,readOnly:!0},/**
     * Use an indeterminate progress indicator.
     */indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},/**
     * True if the progress is disabled.
     */disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function _toggleIndeterminate(indeterminate){// If we use attribute/class binding, the animation sometimes doesn't
// translate properly on Safari 7.1. So instead, we toggle the class here in
// the update method.
this.toggleClass("indeterminate",indeterminate,this.$.primaryProgress)},_transformProgress:function _transformProgress(progress,ratio){var transform="scaleX("+ratio/100+")";progress.style.transform=progress.style.webkitTransform=transform},_mainRatioChanged:function _mainRatioChanged(ratio){this._transformProgress(this.$.primaryProgress,ratio)},_progressChanged:function _progressChanged(secondaryProgress,value,min,max,indeterminate){secondaryProgress=this._clampValue(secondaryProgress);value=this._clampValue(value);var secondaryRatio=100*this._calcRatio(secondaryProgress),mainRatio=100*this._calcRatio(value);this._setSecondaryRatio(secondaryRatio);this._transformProgress(this.$.secondaryProgress,secondaryRatio);this._transformProgress(this.$.primaryProgress,mainRatio);this.secondaryProgress=secondaryProgress;if(indeterminate){this.removeAttribute("aria-valuenow")}else{this.setAttribute("aria-valuenow",value)}this.setAttribute("aria-valuemin",min);this.setAttribute("aria-valuemax",max)},_disabledChanged:function _disabledChanged(disabled){this.setAttribute("aria-disabled",disabled?"true":"false")},_hideSecondaryProgress:function _hideSecondaryProgress(secondaryRatio){return 0===secondaryRatio}});Polymer({/** @override */_template:html(_templateObject8_8c4272f00a1811eb9426c94f859aee76()),is:"app-drawer",properties:{/**
     * The opened state of the drawer.
     */opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},/**
     * The drawer does not have a scrim and cannot be swiped close.
     */persistent:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * The transition duration of the drawer in milliseconds.
     */transitionDuration:{type:Number,value:200},/**
     * The alignment of the drawer on the screen ('left', 'right', 'start' or
     * 'end'). 'start' computes to left and 'end' to right in LTR layout and
     * vice versa in RTL layout.
     */align:{type:String,value:"left"},/**
     * The computed, read-only position of the drawer on the screen ('left' or
     * 'right').
     */position:{type:String,readOnly:!0,reflectToAttribute:!0},/**
     * Create an area at the edge of the screen to swipe open the drawer.
     */swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * Trap keyboard focus when the drawer is opened and not persistent.
     */noFocusTrap:{type:Boolean,value:!1},/**
     * Disables swiping on the drawer.
     */disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,/** @override */attached:function attached(){afterNextRender(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this);this.addEventListener("keydown",this._tabKeydownHandler.bind(this));// Only listen for horizontal track so you can vertically scroll
// inside the drawer.
this.listen(this,"track","_track");this.setScrollDirection("y")});this.fire("app-reset-layout")},/** @override */detached:function detached(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},/**
   * Opens the drawer.
   */open:function open(){this.opened=!0},/**
   * Closes the drawer.
   */close:function close(){this.opened=!1},/**
   * Toggles the drawer open and close.
   */toggle:function toggle(){this.opened=!this.opened},/**
   * Gets the width of the drawer.
   *
   * @return {number} The width of the drawer in pixels.
   */getWidth:function getWidth(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function _resetPosition(){switch(this.align){case"start":this._setPosition(this._isRTL()?"right":"left");return;case"end":this._setPosition(this._isRTL()?"left":"right");return;}this._setPosition(this.align)},_escKeydownHandler:function _escKeydownHandler(event){var ESC_KEYCODE=27;if(event.keyCode===ESC_KEYCODE){// Prevent any side effects if app-drawer closes.
event.preventDefault();this.close()}},_track:function _track(event){if(this.persistent||this.disableSwipe){return}// Disable user selection on desktop.
event.preventDefault();switch(event.detail.state){case"start":this._trackStart(event);break;case"track":this._trackMove(event);break;case"end":this._trackEnd(event);break;}},_trackStart:function _trackStart(event){this._drawerState=this._DRAWER_STATE.TRACKING;var rect=this.$.contentContainer.getBoundingClientRect();this._savedWidth=rect.width;if("left"===this.position){this._translateOffset=rect.left}else{this._translateOffset=rect.right-window.innerWidth}this._trackDetails=[];// Disable transitions since style attributes will reflect user track
// events.
this._styleTransitionDuration(0);this.style.visibility="visible"},_trackMove:function _trackMove(event){this._translateDrawer(event.detail.dx+this._translateOffset);// Use Date.now() since event.timeStamp is inconsistent across browsers
// (e.g. most browsers use milliseconds but FF 44 uses microseconds).
this._trackDetails.push({dx:event.detail.dx,timeStamp:Date.now()})},_trackEnd:function _trackEnd(event){var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isInEndState=isPositionLeft?0<=x||x<=-drawerWidth:0>=x||x>=drawerWidth;if(!isInEndState){// No longer need the track events after this method returns - allow them
// to be GC'd.
var trackDetails=this._trackDetails;this._trackDetails=null;this._flingDrawer(event,trackDetails);if(this._drawerState===this._DRAWER_STATE.FLINGING){return}}// If the drawer is not flinging, toggle the opened state based on the
// position of the drawer.
var halfWidth=drawerWidth/2;if(event.detail.dx<-halfWidth){this.opened="right"===this.position}else if(event.detail.dx>halfWidth){this.opened="left"===this.position}if(isInEndState){this.debounce("_resetDrawerState",this._resetDrawerState)}else{this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)}this._styleTransitionDuration(this.transitionDuration);this._resetDrawerTranslate();this.style.visibility=""},_calculateVelocity:function _calculateVelocity(event,trackDetails){// Find the oldest track event that is within 100ms using binary search.
var now=Date.now(),timeLowerBound=now-100,trackDetail,min=0,max=trackDetails.length-1;while(min<=max){// Floor of average of min and max.
var mid=min+max>>1,d=trackDetails[mid];if(d.timeStamp>=timeLowerBound){trackDetail=d;max=mid-1}else{min=mid+1}}if(trackDetail){var dx=event.detail.dx-trackDetail.dx,dt=now-trackDetail.timeStamp||1;return dx/dt}return 0},_flingDrawer:function _flingDrawer(event,trackDetails){var velocity=this._calculateVelocity(event,trackDetails);// Do not fling if velocity is not above a threshold.
if(Math.abs(velocity)<this._MIN_FLING_THRESHOLD){return}this._drawerState=this._DRAWER_STATE.FLINGING;var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isVelocityPositive=0<velocity,isClosingLeft=!isVelocityPositive&&isPositionLeft,isClosingRight=isVelocityPositive&&!isPositionLeft,dx;if(isClosingLeft){dx=-(x+drawerWidth)}else if(isClosingRight){dx=drawerWidth-x}else{dx=-x}// Enforce a minimum transition velocity to make the drawer feel snappy.
if(isVelocityPositive){velocity=Math.max(velocity,this._MIN_TRANSITION_VELOCITY);this.opened="left"===this.position}else{velocity=Math.min(velocity,-this._MIN_TRANSITION_VELOCITY);this.opened="right"===this.position}// Calculate the amount of time needed to finish the transition based on the
// initial slope of the timing function.
var t=this._FLING_INITIAL_SLOPE*dx/velocity;this._styleTransitionDuration(t);this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION);this._resetDrawerTranslate();this.debounce("_resetDrawerState",this._resetDrawerState,t)},_styleTransitionDuration:function _styleTransitionDuration(duration){this.style.transitionDuration=duration+"ms";this.$.contentContainer.style.transitionDuration=duration+"ms";this.$.scrim.style.transitionDuration=duration+"ms"},_styleTransitionTimingFunction:function _styleTransitionTimingFunction(timingFunction){this.$.contentContainer.style.transitionTimingFunction=timingFunction;this.$.scrim.style.transitionTimingFunction=timingFunction},_translateDrawer:function _translateDrawer(x){var drawerWidth=this.getWidth();if("left"===this.position){x=Math.max(-drawerWidth,Math.min(x,0));this.$.scrim.style.opacity=1+x/drawerWidth}else{x=Math.max(0,Math.min(x,drawerWidth));this.$.scrim.style.opacity=1-x/drawerWidth}this.translate3d(x+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function _resetDrawerTranslate(){this.$.scrim.style.opacity="";this.transform("",this.$.contentContainer)},_resetDrawerState:function _resetDrawerState(){var oldState=this._drawerState;// If the drawer was flinging, we need to reset the style attributes.
if(oldState===this._DRAWER_STATE.FLINGING){this._styleTransitionDuration(this.transitionDuration);this._styleTransitionTimingFunction("");this.style.visibility=""}this._savedWidth=null;if(this.opened){this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED}else{this._drawerState=this._DRAWER_STATE.CLOSED}if(oldState!==this._drawerState){if(this._drawerState===this._DRAWER_STATE.OPENED){this._setKeyboardFocusTrap();document.addEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow="hidden"}else{document.removeEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow=""}// Don't fire the event on initial load.
if(oldState!==this._DRAWER_STATE.INIT){this.fire("app-drawer-transitioned")}}},/**
   * Resets the layout.
   *
   * @method resetLayout
   */resetLayout:function resetLayout(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function _setKeyboardFocusTrap(){if(this.noFocusTrap){return}// NOTE: Unless we use /deep/ (which we shouldn't since it's deprecated),
// this will not select focusable elements inside shadow roots.
var focusableElementsSelector=["a[href]:not([tabindex=\"-1\"])","area[href]:not([tabindex=\"-1\"])","input:not([disabled]):not([tabindex=\"-1\"])","select:not([disabled]):not([tabindex=\"-1\"])","textarea:not([disabled]):not([tabindex=\"-1\"])","button:not([disabled]):not([tabindex=\"-1\"])","iframe:not([tabindex=\"-1\"])","[tabindex]:not([tabindex=\"-1\"])","[contentEditable=true]:not([tabindex=\"-1\"])"].join(","),focusableElements=dom(this).querySelectorAll(focusableElementsSelector);if(0<focusableElements.length){this._firstTabStop=focusableElements[0];this._lastTabStop=focusableElements[focusableElements.length-1]}else{// Reset saved tab stops when there are no focusable elements in the
// drawer.
this._firstTabStop=null;this._lastTabStop=null}// Focus on app-drawer if it has non-zero tabindex. Otherwise, focus the
// first focusable element in the drawer, if it exists. Use the tabindex
// attribute since the this.tabIndex property in IE/Edge returns 0 (instead
// of -1) when the attribute is not set.
var tabindex=this.getAttribute("tabindex");if(tabindex&&-1<parseInt(tabindex,10)){this.focus()}else if(this._firstTabStop){this._firstTabStop.focus()}},_tabKeydownHandler:function _tabKeydownHandler(event){if(this.noFocusTrap){return}var TAB_KEYCODE=9;if(this._drawerState===this._DRAWER_STATE.OPENED&&event.keyCode===TAB_KEYCODE){if(event.shiftKey){if(this._firstTabStop&&dom(event).localTarget===this._firstTabStop){event.preventDefault();this._lastTabStop.focus()}}else{if(this._lastTabStop&&dom(event).localTarget===this._lastTabStop){event.preventDefault();this._firstTabStop.focus()}}}},_openedPersistentChanged:function _openedPersistentChanged(opened,persistent){this.toggleClass("visible",opened&&!persistent,this.$.scrim);// Use a debounce timer instead of transitionend since transitionend won't
// fire when app-drawer is display: none.
this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5/**
                 * Fired when the layout of app-drawer has changed.
                 *
                 * @event app-reset-layout
                 */ /**
                     * Fired when app-drawer has finished transitioning.
                     *
                     * @event app-drawer-transitioned
                     */}});var template$5=html(_templateObject9_8c4272f00a1811eb9426c94f859aee76());template$5.setAttribute("style","display: none;");document.head.appendChild(template$5.content);var IronControlState={properties:{/**
     * If true, the element currently has focus.
     */focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},/**
     * If true, the user cannot interact with this element.
     */disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},/**
     * Value of the `tabindex` attribute before `disabled` was activated.
     * `null` means the attribute was not present.
     * @type {?string|undefined}
     */_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function value(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],/**
   * @return {void}
   */ready:function ready(){this.addEventListener("focus",this._boundFocusBlurHandler,!0);this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function _focusBlurHandler(event){// Polymer takes care of retargeting events.
this._setFocused("focus"===event.type);return},_disabledChanged:function _disabledChanged(disabled,old){this.setAttribute("aria-disabled",disabled?"true":"false");this.style.pointerEvents=disabled?"none":"";if(disabled){// Read the `tabindex` attribute instead of the `tabIndex` property.
// The property returns `-1` if there is no `tabindex` attribute.
// This distinction is important when restoring the value because
// leaving `-1` hides shadow root children from the tab order.
this._oldTabIndex=this.getAttribute("tabindex");this._setFocused(!1);this.tabIndex=-1;this.blur()}else if(this._oldTabIndex!==void 0){if(null===this._oldTabIndex){this.removeAttribute("tabindex")}else{this.setAttribute("tabindex",this._oldTabIndex)}}},_changedControlState:function _changedControlState(){// _controlStateChanged is abstract, follow-on behaviors may implement it
if(this._controlStateChanged){this._controlStateChanged()}}};_exports.IronControlState=IronControlState;var ironControlState={IronControlState:IronControlState};_exports.$ironControlState=ironControlState;var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},KEY_CHAR=/[a-z0-9*]/,IDENT_CHAR=/U\+/,ARROW_KEY=/^arrow/,SPACE_KEY=/^space(bar)?/,ESC_KEY=/^escape$/;/**
    * Special table for KeyboardEvent.keyCode.
    * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
    * than that.
    *
    * Values from:
    * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
    */ /**
                           * Transforms the key.
                           * @param {string} key The KeyBoardEvent.key
                           * @param {Boolean} [noSpecialChars] Limits the transformation to
                           * alpha-numeric characters.
                           */function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(" "===lKey||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(1==lKey.length){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if("multiply"==lKey){// numpad '*' can map to Multiply on IE/Windows
validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=String.fromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(+keyCode){if(65<=keyCode&&90>=keyCode){// ascii a-z
// lowercase is 32 offset from uppercase
validKey=String.fromCharCode(32+keyCode)}else if(112<=keyCode&&123>=keyCode){// function keys f1-f12
validKey="f"+(keyCode-112+1)}else if(48<=keyCode&&57>=keyCode){// top 0-9 keys
validKey=keyCode-48+""}else if(96<=keyCode&&105>=keyCode){// num pad 0-9
validKey=keyCode-96+""}else{validKey=KEY_CODE[keyCode]}}return validKey}/**
   * Calculates the normalized key for a KeyboardEvent.
   * @param {KeyboardEvent} keyEvent
   * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
   * transformation to alpha-numeric chars. This is useful with key
   * combinations like shift + 2, which on FF for MacOS produces
   * keyEvent.key = @
   * To get 2 returned, set noSpecialChars = true
   * To get @ returned, set noSpecialChars = false
   */function normalizedKeyForEvent(keyEvent,noSpecialChars){// Fall back from .key, to .detail.key for artifical keyboard events,
// and then to deprecated .keyIdentifier and .keyCode.
if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){// For combos with modifiers we support only alpha-numeric keys
var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(1===keyComboString.length){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce(function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":"),keyName=eventParts[0],event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=!0;parsedKeyCombo.hasModifiers=!0}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo},{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map(function(keyComboString){return parseKeyComboString(keyComboString)})}/**
   * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
   * keyboard commands that pertain to [WAI-ARIA best
   * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
   * element takes care of browser differences with respect to Keyboard events and
   * uses an expressive syntax to filter key presses.
   *
   * Use the `keyBindings` prototype property to express what combination of keys
   * will trigger the callback. A key binding has the format
   * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
   * `"KEY:EVENT": "callback"` are valid as well). Some examples:
   *
   *      keyBindings: {
   *        'space': '_onKeydown', // same as 'space:keydown'
   *        'shift+tab': '_onKeydown',
   *        'enter:keypress': '_onKeypress',
   *        'esc:keyup': '_onKeyup'
   *      }
   *
   * The callback will receive with an event containing the following information
   * in `event.detail`:
   *
   *      _onKeydown: function(event) {
   *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
   *        console.log(event.detail.key); // KEY only, e.g. "tab"
   *        console.log(event.detail.event); // EVENT, e.g. "keydown"
   *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
   *      }
   *
   * Use the `keyEventTarget` attribute to set up event handlers on a specific
   * node.
   *
   * See the [demo source
   * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
   * for an example.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */var IronA11yKeysBehavior={properties:{/**
     * The EventTarget that will be firing relevant KeyboardEvents. Set it to
     * `null` to disable the listeners.
     * @type {?EventTarget}
     */keyEventTarget:{type:Object,value:function value(){return this}},/**
     * If true, this property will cause the implementing element to
     * automatically stop propagation on any handled KeyboardEvents.
     */stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function value(){return[]}},// We use this due to a limitation in IE10 where instances will have
// own properties of everything on the "prototype".
_imperativeKeyBindings:{type:Object,value:function value(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],/**
   * To be used to express what combination of keys  will trigger the relative
   * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
   * @type {!Object}
   */keyBindings:{},registered:function registered(){this._prepKeyBindings()},attached:function attached(){this._listenKeyEventListeners()},detached:function detached(){this._unlistenKeyEventListeners()},/**
   * Can be used to imperatively add a key binding to the implementing
   * element. This is the imperative equivalent of declaring a keybinding
   * in the `keyBindings` prototype property.
   *
   * @param {string} eventString
   * @param {string} handlerName
   */addOwnKeyBinding:function addOwnKeyBinding(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},/**
   * When called, will remove all imperatively-added key bindings.
   */removeOwnKeyBindings:function removeOwnKeyBindings(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},/**
   * Returns true if a keyboard event matches `eventString`.
   *
   * @param {KeyboardEvent} event
   * @param {string} eventString
   * @return {boolean}
   */keyboardEventMatchesKeys:function keyboardEventMatchesKeys(event,eventString){for(var keyCombos=parseEventString(eventString),i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return!0}}return!1},_collectKeyBindings:function _collectKeyBindings(){var keyBindings=this.behaviors.map(function(behavior){return behavior.keyBindings});if(-1===keyBindings.indexOf(this.keyBindings)){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function _prepKeyBindings(){this._keyBindings={};this._collectKeyBindings().forEach(function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}},this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}// Give precedence to combos with modifiers to be checked first.
for(var eventName in this._keyBindings){this._keyBindings[eventName].sort(function(kb1,kb2){var b1=kb1[0].hasModifiers,b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1})}},_addKeyBinding:function _addKeyBinding(eventString,handlerName){parseEventString(eventString).forEach(function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])},this)},_resetKeyEventListeners:function _resetKeyEventListeners(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function _listenKeyEventListeners(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach(function(eventName){var keyBindings=this._keyBindings[eventName],boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)},this)},_unlistenKeyEventListeners:function _unlistenKeyEventListeners(){var keyHandlerTuple,keyEventTarget,eventName,boundKeyHandler;while(this._boundKeyHandlers.length){// My kingdom for block-scope binding and destructuring assignment..
keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function _onKeyBindingEvent(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}// if event has been already prevented, don't do anything
if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0],handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);// exit the loop if eventDefault was prevented
if(event.defaultPrevented){return}}}},_triggerKeyHandler:function _triggerKeyHandler(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:!0});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};_exports.IronA11yKeysBehavior=IronA11yKeysBehavior;var ironA11yKeysBehavior={IronA11yKeysBehavior:IronA11yKeysBehavior};_exports.$ironA11yKeysBehavior=ironA11yKeysBehavior;var IronButtonStateImpl={properties:{/**
     * If true, the user is currently holding down the button.
     */pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},/**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */toggles:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * If true, the button is a toggle and is currently in the active state.
     */active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},/**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */pointerDown:{type:Boolean,readOnly:!0,value:!1},/**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},/**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],/**
   * @type {!Object}
   */keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function _tapHandler(){if(this.toggles){// a tap is needed to toggle the active state
this._userActivate(!this.active)}else{this.active=!1}},_focusChanged:function _focusChanged(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(!1)}},_detectKeyboardFocus:function _detectKeyboardFocus(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},// to emulate native checkbox, (de-)activations from a user interaction fire
// 'change' events
_userActivate:function _userActivate(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function _downHandler(event){this._setPointerDown(!0);this._setPressed(!0);this._setReceivedFocusFromKeyboard(!1)},_upHandler:function _upHandler(){this._setPointerDown(!1);this._setPressed(!1)},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyDownHandler:function _spaceKeyDownHandler(event){var keyboardEvent=event.detail.keyboardEvent,target=dom(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(!0)},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyUpHandler:function _spaceKeyUpHandler(event){var keyboardEvent=event.detail.keyboardEvent,target=dom(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;if(this.pressed){this._asyncClick()}this._setPressed(!1)},// trigger click asynchronously, the asynchrony is useful to allow one
// event handler to unwind before triggering another event
_asyncClick:function _asyncClick(){this.async(function(){this.click()},1)},// any of these changes are considered a change to button state
_pressedChanged:function _pressedChanged(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function _ariaActiveAttributeChanged(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function _activeChanged(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function _controlStateChanged(){if(this.disabled){this._setPressed(!1)}else{this._changedButtonState()}},// provide hook for follow-on behaviors to react to button-state
_changedButtonState:function _changedButtonState(){if(this._buttonStateChanged){this._buttonStateChanged();// abstract
}}};/** @polymerBehavior */_exports.IronButtonStateImpl=IronButtonStateImpl;var IronButtonState=[IronA11yKeysBehavior,IronButtonStateImpl];_exports.IronButtonState=IronButtonState;var ironButtonState={IronButtonStateImpl:IronButtonStateImpl,IronButtonState:IronButtonState};_exports.$ironButtonState=ironButtonState;var Utility={distance:function distance(x1,y1,x2,y2){var xDelta=x1-x2,yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};/**
    * @param {HTMLElement} element
    * @constructor
    */function ElementMetrics(element){this.element=element;this.width=this.boundingRect.width;this.height=this.boundingRect.height;this.size=Math.max(this.width,this.height)}ElementMetrics.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function furthestCornerDistanceFrom(x,y){var topLeft=Utility.distance(x,y,0,0),topRight=Utility.distance(x,y,this.width,0),bottomLeft=Utility.distance(x,y,0,this.height),bottomRight=Utility.distance(x,y,this.width,this.height);return Math.max(topLeft,topRight,bottomLeft,bottomRight)}};/**
    * @param {HTMLElement} element
    * @constructor
    */function Ripple(element){this.element=element;this.color=window.getComputedStyle(element).color;this.wave=document.createElement("div");this.waveContainer=document.createElement("div");this.wave.style.backgroundColor=this.color;this.wave.classList.add("wave");this.waveContainer.classList.add("wave-container");dom(this.waveContainer).appendChild(this.wave);this.resetInteractionState()}Ripple.MAX_RADIUS=300;Ripple.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var elapsed;if(!this.mouseDownStart){return 0}elapsed=Utility.now()-this.mouseDownStart;if(this.mouseUpStart){elapsed-=this.mouseUpElapsed}return elapsed},get mouseUpElapsed(){return this.mouseUpStart?Utility.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var width2=this.containerMetrics.width*this.containerMetrics.width,height2=this.containerMetrics.height*this.containerMetrics.height,waveRadius=1.1*Math.min(Math.sqrt(width2+height2),Ripple.MAX_RADIUS)+5,duration=1.1-.2*(waveRadius/Ripple.MAX_RADIUS),timeNow=this.mouseInteractionSeconds/duration,size=waveRadius*(1-Math.pow(80,-timeNow));return Math.abs(size)},get opacity(){if(!this.mouseUpStart){return this.initialOpacity}return Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity)},get outerOpacity(){// Linear increase in background opacity, capped at the opacity
// of the wavefront (waveOpacity).
var outerOpacity=.3*this.mouseUpElapsedSeconds,waveOpacity=this.opacity;return Math.max(0,Math.min(outerOpacity,waveOpacity))},get isOpacityFullyDecayed(){return .01>this.opacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,2*(this.radius/this.containerMetrics.size)/Math.sqrt(2))},get xNow(){if(this.xEnd){return this.xStart+this.translationFraction*(this.xEnd-this.xStart)}return this.xStart},get yNow(){if(this.yEnd){return this.yStart+this.translationFraction*(this.yEnd-this.yStart)}return this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function resetInteractionState(){this.maxRadius=0;this.mouseDownStart=0;this.mouseUpStart=0;this.xStart=0;this.yStart=0;this.xEnd=0;this.yEnd=0;this.slideDistance=0;this.containerMetrics=new ElementMetrics(this.element)},draw:function draw(){var scale,dx,dy;this.wave.style.opacity=this.opacity;scale=this.radius/(this.containerMetrics.size/2);dx=this.xNow-this.containerMetrics.width/2;dy=this.yNow-this.containerMetrics.height/2;// 2d transform for safari because of border-radius and overflow:hidden
// clipping bug. https://bugs.webkit.org/show_bug.cgi?id=98538
this.waveContainer.style.webkitTransform="translate("+dx+"px, "+dy+"px)";this.waveContainer.style.transform="translate3d("+dx+"px, "+dy+"px, 0)";this.wave.style.webkitTransform="scale("+scale+","+scale+")";this.wave.style.transform="scale3d("+scale+","+scale+",1)"},/** @param {Event=} event */downAction:function downAction(event){var xCenter=this.containerMetrics.width/2,yCenter=this.containerMetrics.height/2;this.resetInteractionState();this.mouseDownStart=Utility.now();if(this.center){this.xStart=xCenter;this.yStart=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}else{this.xStart=event?event.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2;this.yStart=event?event.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2}if(this.recenters){this.xEnd=xCenter;this.yEnd=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart);this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px";this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px";this.waveContainer.style.width=this.containerMetrics.size+"px";this.waveContainer.style.height=this.containerMetrics.size+"px"},/** @param {Event=} event */upAction:function upAction(event){if(!this.isMouseDown){return}this.mouseUpStart=Utility.now()},remove:function remove(){dom(this.waveContainer.parentNode).removeChild(this.waveContainer)}};/**
   Material design: [Surface
   reaction](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction)
   
   `paper-ripple` provides a visual effect that other paper elements can
   use to simulate a rippling effect emanating from the point of contact.  The
   effect can be visualized as a concentric circle with motion.
   
   Example:
   
       <div style="position:relative">
         <paper-ripple></paper-ripple>
       </div>
   
   Note, it's important that the parent container of the ripple be relative
   position, otherwise the ripple will emanate outside of the desired container.
   
   `paper-ripple` listens to "mousedown" and "mouseup" events so it would display
   ripple effect when touches on it.  You can also defeat the default behavior and
   manually route the down and up actions to the ripple element.  Note that it is
   important if you call `downAction()` you will have to make sure to call
   `upAction()` so that `paper-ripple` would end the animation loop.
   
   Example:
   
       <paper-ripple id="ripple" style="pointer-events: none;"></paper-ripple>
       ...
       downAction: function(e) {
         this.$.ripple.downAction(e.detail);
       },
       upAction: function(e) {
         this.$.ripple.upAction();
       }
   
   Styling ripple effect:
   
     Use CSS color property to style the ripple:
   
       paper-ripple {
         color: #4285f4;
       }
   
     Note that CSS color property is inherited so it is not required to set it on
     the `paper-ripple` element directly.
   
   By default, the ripple is centered on the point of contact.  Apply the
   `recenters` attribute to have the ripple grow toward the center of its
   container.
   
       <paper-ripple recenters></paper-ripple>
   
   You can also  center the ripple inside its container from the start.
   
       <paper-ripple center></paper-ripple>
   
   Apply `circle` class to make the rippling effect within a circle.
   
       <paper-ripple class="circle"></paper-ripple>
   
   @group Paper Elements
   @element paper-ripple
   @hero hero.svg
   @demo demo/index.html
   */Polymer({_template:html(_templateObject10_8c4272f00a1811eb9426c94f859aee76()),is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{/**
     * The initial opacity set on the wave.
     *
     * @attribute initialOpacity
     * @type number
     * @default 0.25
     */initialOpacity:{type:Number,value:.25},/**
     * How fast (opacity per second) the wave fades out.
     *
     * @attribute opacityDecayVelocity
     * @type number
     * @default 0.8
     */opacityDecayVelocity:{type:Number,value:.8},/**
     * If true, ripples will exhibit a gravitational pull towards
     * the center of their container as they fade away.
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */recenters:{type:Boolean,value:!1},/**
     * If true, ripples will center inside its container
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */center:{type:Boolean,value:!1},/**
     * A list of the visual ripples.
     *
     * @attribute ripples
     * @type Array
     * @default []
     */ripples:{type:Array,value:function value(){return[]}},/**
     * True when there are visible ripples animating within the
     * element.
     */animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},/**
     * If true, the ripple will remain in the "down" state until `holdDown`
     * is set to false again.
     */holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},/**
     * If true, the ripple will not generate a ripple effect
     * via pointer interaction.
     * Calling ripple's imperative api like `simulatedRipple` will
     * still generate the ripple effect.
     */noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function value(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},/**
   * @type {!Object}
   */keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function attached(){// Set up a11yKeysBehavior to listen to key events on the target,
// so that space and enter activate the ripple even if the target doesn't
// handle key events. The key handlers deal with `noink` themselves.
if(11==this.parentNode.nodeType){// DOCUMENT_FRAGMENT_NODE
this.keyEventTarget=dom(this).getOwnerRoot().host}else{this.keyEventTarget=this.parentNode}var keyEventTarget=/** @type {!EventTarget} */this.keyEventTarget;this.listen(keyEventTarget,"up","uiUpAction");this.listen(keyEventTarget,"down","uiDownAction")},detached:function detached(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},get shouldKeepAnimating(){for(var index=0;index<this.ripples.length;++index){if(!this.ripples[index].isAnimationComplete){return!0}}return!1},simulatedRipple:function simulatedRipple(){this.downAction(null);// Please see polymer/polymer#1305
this.async(function(){this.upAction()},1)},/**
   * Provokes a ripple down effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiDownAction:function uiDownAction(event){if(!this.noink){this.downAction(event)}},/**
   * Provokes a ripple down effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */downAction:function downAction(event){if(this.holdDown&&0<this.ripples.length){return}var ripple=this.addRipple();ripple.downAction(event);if(!this._animating){this._animating=!0;this.animate()}},/**
   * Provokes a ripple up effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiUpAction:function uiUpAction(event){if(!this.noink){this.upAction(event)}},/**
   * Provokes a ripple up effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */upAction:function upAction(event){if(this.holdDown){return}this.ripples.forEach(function(ripple){ripple.upAction(event)});this._animating=!0;this.animate()},onAnimationComplete:function onAnimationComplete(){this._animating=!1;this.$.background.style.backgroundColor=null;this.fire("transitionend")},addRipple:function addRipple(){var ripple=new Ripple(this);dom(this.$.waves).appendChild(ripple.waveContainer);this.$.background.style.backgroundColor=ripple.color;this.ripples.push(ripple);this._setAnimating(!0);return ripple},removeRipple:function removeRipple(ripple){var rippleIndex=this.ripples.indexOf(ripple);if(0>rippleIndex){return}this.ripples.splice(rippleIndex,1);ripple.remove();if(!this.ripples.length){this._setAnimating(!1)}},/**
   * Deprecated. Please use animateRipple() instead.
   *
   * This method name conflicts with Element#animate().
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/animate.
   *
   * @suppress {checkTypes}
   */animate:function animate(){if(!this._animating){return}var index,ripple;for(index=0;index<this.ripples.length;++index){ripple=this.ripples[index];ripple.draw();this.$.background.style.opacity=ripple.outerOpacity;if(ripple.isOpacityFullyDecayed&&!ripple.isRestingAtMaxRadius){this.removeRipple(ripple)}}if(!this.shouldKeepAnimating&&0===this.ripples.length){this.onAnimationComplete()}else{window.requestAnimationFrame(this._boundAnimate)}},/**
   * An alias for animate() whose name does not conflict with the platform
   * Element.animate() method.
   */animateRipple:function animateRipple(){return this.animate()},_onEnterKeydown:function _onEnterKeydown(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function _onSpaceKeydown(){this.uiDownAction()},_onSpaceKeyup:function _onSpaceKeyup(){this.uiUpAction()},// note: holdDown does not respect noink since it can be a focus based
// effect.
_holdDownChanged:function _holdDownChanged(newVal,oldVal){if(oldVal===void 0){return}if(newVal){this.downAction()}else{this.upAction()}}/**
    Fired when the animation finishes.
    This is useful if you want to wait until
    the ripple animation finishes to perform some action.
     @event transitionend
    @param {{node: Object}} detail Contains the animated node.
    */});var PaperRippleBehavior={properties:{/**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */noink:{type:Boolean,observer:"_noinkChanged"},/**
     * @type {Element|undefined}
     */_rippleContainer:{type:Object}},/**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */_buttonStateChanged:function _buttonStateChanged(){if(this.focused){this.ensureRipple()}},/**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */_downHandler:function _downHandler(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},/**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */ensureRipple:function ensureRipple(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){// Check if the event happened inside of the ripple container
// Fall back to host instead of the root because distributed text
// nodes are not valid event targets
var domContainer=dom(this._rippleContainer||this),target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(/** @type {Node} */target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},/**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */getRipple:function getRipple(){this.ensureRipple();return this._ripple},/**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */hasRipple:function hasRipple(){return!!this._ripple},/**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */_createRipple:function _createRipple(){var element=/** @type {!PaperRippleElement} */document.createElement("paper-ripple");return element},_noinkChanged:function _noinkChanged(noink){if(this.hasRipple()){this._ripple.noink=noink}}};_exports.PaperRippleBehavior=PaperRippleBehavior;var paperRippleBehavior={PaperRippleBehavior:PaperRippleBehavior};_exports.$paperRippleBehavior=paperRippleBehavior;var PaperInkyFocusBehaviorImpl={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function _focusedChanged(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple()}if(this.hasRipple()){this._ripple.holdDown=receivedFocusFromKeyboard}},_createRipple:function _createRipple(){var ripple=PaperRippleBehavior._createRipple();ripple.id="ink";ripple.setAttribute("center","");ripple.classList.add("circle");return ripple}};/** @polymerBehavior */_exports.PaperInkyFocusBehaviorImpl=PaperInkyFocusBehaviorImpl;var PaperInkyFocusBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperInkyFocusBehaviorImpl];_exports.PaperInkyFocusBehavior=PaperInkyFocusBehavior;var paperInkyFocusBehavior={PaperInkyFocusBehaviorImpl:PaperInkyFocusBehaviorImpl,PaperInkyFocusBehavior:PaperInkyFocusBehavior};_exports.$paperInkyFocusBehavior=paperInkyFocusBehavior;Polymer({is:"paper-icon-button",_template:html(_templateObject11_8c4272f00a1811eb9426c94f859aee76()),hostAttributes:{role:"button",tabindex:"0"},behaviors:[PaperInkyFocusBehavior],registered:function registered(){this._template.setAttribute("strip-whitespace","")},properties:{/**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */src:{type:String},/**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */icon:{type:String},/**
     * Specifies the alternate text for the button, for accessibility.
     */alt:{type:String,observer:"_altChanged"}},_altChanged:function _altChanged(newValue,oldValue){var label=this.getAttribute("aria-label");// Don't stomp over a user-set aria-label.
if(!label||oldValue==label){this.setAttribute("aria-label",newValue)}}});// icons
});