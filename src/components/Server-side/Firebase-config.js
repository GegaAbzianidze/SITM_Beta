import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHzBfMbpcnRPeu_gxj9kEPj1wjlviLsAc",
  authDomain: "sitm-nft.firebaseapp.com",
  projectId: "sitm-nft",
  storageBucket: "sitm-nft.appspot.com",
  messagingSenderId: "1003284734241",
  appId: "1:1003284734241:web:1e66f1217e5a8551b95e60",
  measurementId: "G-P4319HPGMQ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
