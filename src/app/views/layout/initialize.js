import DrawerToggle from './DrawerToggle';
import PageProgress from './PageProgress';

const initialize = () => {
    WCReady(() => {
        const progress = document.querySelector('#page-progress');

        if (progress !== null) {
            new PageProgress(progress);
        }

        for (const el of document.querySelectorAll('*[wc-hidden], *[wc-lazy]')) {
            el.classList.add('ready');
        }

        for (const el of document.querySelectorAll('.drawer-toggle')) {
            new DrawerToggle(el);
        }
    });
};

export default initialize;
