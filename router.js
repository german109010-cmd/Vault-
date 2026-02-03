const Router = {
    async load(page) {
        const res = await fetch(page + '.html');
        const html = await res.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        document.querySelector('#app').innerHTML =
            doc.querySelector('#page').innerHTML;

        window.scrollTo(0, 0);

        if (typeof bindActions === 'function') {
            bindActions();
        }
    },

    go(page) {
        history.pushState({}, '', page + '.html');
        Router.load(page);
    }
};

window.onpopstate = () => {
    const page = location.pathname.replace('.html','').replace('/','') || 'auth';
    Router.load(page);
};
