!function(){"use strict";window.WebComponents=window.WebComponents||{};var e="webcomponents-loader.js",t=[];if("import"in document.createElement("link")||t.push("hi"),(!("attachShadow"in Element.prototype&&"getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&t.push("sd"),window.customElements&&!window.customElements.forcePolyfill||t.push("ce"),"content"in document.createElement("template")&&window.Promise&&Array.from&&document.createDocumentFragment().cloneNode()instanceof DocumentFragment||(t=["lite"]),t.length){var n=document.querySelector('script[src*="'+e+'"]'),o=document.createElement("script"),c="webcomponents-"+t.join("-")+".js",d=n.src.replace(e,c);o.src=d,"loading"===document.readyState&&"import"in document.createElement("link")?document.write(o.outerHTML):document.head.appendChild(o)}else{var m=function(){requestAnimationFrame(function(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})};"loading"!==document.readyState?m():document.addEventListener("readystatechange",function e(){m(),document.removeEventListener("readystatechange",e)})}}();