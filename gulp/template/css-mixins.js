const cssMixins = document.createElement('custom-style');
cssMixins.setAttribute('id', 'app-css-mixins');
cssMixins.innerHTML = `<style is="custom-style"><%= css %></style>`;
document.head.appendChild(cssMixins);
