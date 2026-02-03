const VaultApp = {
    state: {
        vaultBalance: 0,
        usdtBalance: 0,
        stakedBalance: 0,
        totalEarned: 0,
        totalStakingRewards: 0,
        transactions: [],
        connectedWallets: {
            metamask: false,
            telegram: false
        },
        completedTasks: [],
        lastDailyClaim: 0,
        userEmail: "",
        userId: "",
        walletAddress: "",
        referralCode: "",
        rating: 5,
        tradeCount: 0
    },

    elements: {},

    async init() {
        this.cacheElements();
        QRScanner.init();
        await this.setupEventListeners();
        this.setupAuthStateListener();
        await loadDailyAirdropCount();
        await checkAndResetDailyAirdrop();
        console.log('Vault App initialized');
    },

    cacheElements() {
        this.elements = {
            screens: {
                auth: document.getElementById('auth'),
                wallet: document.getElementById('wallet-screen'),
                airdrop: document.getElementById('airdrop-screen'),
                staking: document.getElementById('staking-screen'),
                p2p: document.getElementById('p2p-screen'),
                profile: document.getElementById('profile-screen')
            },
            
            navButtons: document.querySelectorAll('.nav'),
            
            modals: {
                send: document.getElementById('sendModal'),
                receive: document.getElementById('receiveModal'),
                deposit: document.getElementById('depositModal'),
                usdtBalance: document.getElementById('usdtBalanceModal'),
                scan: document.getElementById('scanModal'),
                stake: document.getElementById('stakeModal'),
                unstake: document.getElementById('unstakeModal'),
                createOffer: document.getElementById('createOfferModal'),
                trade: document.getElementById('tradeModal')
            },
            
            overlay: document.getElementById('overlay'),
            
            toast: document.getElementById('toast'),
            toastMessage: document.getElementById('toastMessage'),
            
            transactionsList: document.getElementById('transactionsList'),
            emptyTransactions: document.getElementById('emptyTransactions'),
            clearTransactionsBtn: document.getElementById('clearTransactions')
        };