const firebaseConfig = {
    apiKey: "AIzaSyDCSqn85pRxwe-kbwTwA7q6a2NUHVEqQ6Q",
    authDomain: "minimal-ac52f.firebaseapp.com",
    projectId: "minimal-ac52f",
    storageBucket: "minimal-ac52f.firebasestorage.app",
    messagingSenderId: "201795287217",
    appId: "1:201795287217:web:6f68df903011312e834a90"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ФИКСИРОВАННЫЕ АДРЕСА ДЛЯ ТЕСТИРОВАНИЯ
const TEST_WALLET_ADDRESSES = {
    'test1@vault.com': '0x8a2f5c9b3d4e6f7a8b9c0d1e2f3a4b5c6d7e8f9a1',
    'test2@vault.com': '0x9b3c5d7e9f1a2b4c6d8e0f2a3b5c7d9e1f3a4b6c8',
    'admin@vault.com': '0x7c6d8e0f2a3b5c7d9e1f3a4b6c8d0e2a4b6c8d0e2'
};