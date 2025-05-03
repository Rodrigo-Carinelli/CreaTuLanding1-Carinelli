import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAn4j6Fq4kCew3uxBlD5_yuQG544MBKmnQ",
    authDomain: "creatulanding1-carinelli.firebaseapp.com",
    projectId: "creatulanding1-carinelli",
    storageBucket: "creatulanding1-carinelli.firebasestorage.app",
    messagingSenderId: "199175049516",
    appId: "1:199175049516:web:5e3e2f7edd0d7e019edc89",
    measurementId: "G-T9Z57EW3GW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

