import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

const template = html`<iron-iconset-svg name="icons" size="24">
    <svg>
        <defs>
            <g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></g>
        </defs>
    </svg>
</iron-iconset-svg>`;

document.head.appendChild(template.content);
