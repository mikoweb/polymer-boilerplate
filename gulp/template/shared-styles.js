const sharedStyles = document.createElement('dom-module');
sharedStyles.setAttribute('id', 'shared-styles');
sharedStyles.innerHTML = `<template><style><%= css %></style></template>`;
document.head.appendChild(sharedStyles);
