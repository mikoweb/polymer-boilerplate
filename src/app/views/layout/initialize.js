import layoutReady from "../../layoutReady";
import DrawerToggle from "./DrawerToggle";
import PageProgress from "./PageProgress";
import FormBehavior from "../FormBehavior";

const initialize = () => {
    layoutReady(() => {
        const progress = document.querySelector('#page-progress');

        if (progress !== null) {
            new PageProgress(progress);
        }

        for (const el of document.querySelectorAll('*[wc-hidden], *[wc-lazy], *[wc-ready]')) {
            el.classList.add('ready');
        }

        for (const el of document.querySelectorAll('.drawer-toggle')) {
            new DrawerToggle(el);
        }

        for (const el of document.querySelectorAll('.form-behavior')) {
            new FormBehavior(el);
        }
    });
};

export default initialize;
