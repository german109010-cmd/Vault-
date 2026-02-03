function bindActions() {

    const map = {
        "login": () => Auth.login(),
        "register": () => Auth.register(),
        "open-send": () => VaultApp.openSend(),
        "open-receive": () => VaultApp.openReceive(),
        "claim-airdrop": () => claimDailyAirdrop(),
    };

    Object.keys(map).forEach(action => {
        const el = document.querySelector(`[data-action="${action}"]`);
        if (el) el.onclick = map[action];
    });
}

document.addEventListener('click', e => {
    const link = e.target.closest('[data-nav]');
    if(link){
        e.preventDefault();
        Router.go(link.dataset.nav);
    }
});
