<meta name='viewport' content='width=device-width, initial-scale=1'/><script>function initPageScripts(page){
    // вызывается после подгрузки страницы
    if (typeof VaultApp !== 'undefined') {
        VaultApp.init();
    }
}

document.addEventListener('click', e => {
    const link = e.target.closest('[data-nav]');
    if(link){
        e.preventDefault();
        Router.go(link.dataset.nav);
    }
});
</script>