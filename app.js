function bindActions() {

    // LOGIN
    const loginBtn = document.querySelector('[data-action="login"]');
    if (loginBtn) {
        loginBtn.onclick = () => Auth.login();
    }

    // REGISTER
    const registerBtn = document.querySelector('[data-action="register"]');
    if (registerBtn) {
        registerBtn.onclick = () => Auth.register();
    }

    // SEND
    const sendBtn = document.querySelector('[data-action="open-send"]');
    if (sendBtn) {
        sendBtn.onclick = () => VaultApp.openSend();
    }

    // И т.д. по такому же принципу
}

document.addEventListener('click', e => {
    const link = e.target.closest('[data-nav]');
    if(link){
        e.preventDefault();
        Router.go(link.dataset.nav);
    }
});
