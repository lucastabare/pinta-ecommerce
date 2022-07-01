import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDP_TwQrTB_vcyD6dwteMJuwy3YTdfxzck",
    authDomain: "productcoder-469b8.firebaseapp.com",
    databaseURL: "https://productcoder-469b8-default-rtdb.firebaseio.com",
    projectId: "productcoder-469b8",
    storageBucket: "productcoder-469b8.appspot.com",
    messagingSenderId: "628871648708",
    appId: "1:628871648708:web:9a106feca122cb2b25c091",
    measurementId: "G-VVYT6S9RQH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
