import { html } from '@polymer/polymer/polymer-element.js';
import style from './style.js';

export default html`${style}
<div class="hello-element">
    <h1>
        Hello [[userName]]!
    </h1>
    <p>
        Thank You for using 
        <a href="https://github.com/mikoweb/polymer-boilerplate" target="_blank">Polymer Boilerplate</a>.
    </p>
</div>
`;
