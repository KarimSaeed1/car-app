import { initializeApp } from "firebase/app";
import { getFirestore , doc, setDoc , addDoc ,collection } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCGXLdAZap5s0NWFSD0J55bVA0T8nBGWfg",
    authDomain: "auto-highline-53ba2.firebaseapp.com",
    projectId: "auto-highline-53ba2",
    storageBucket: "auto-highline-53ba2.appspot.com",
    messagingSenderId: "184398060177",
    appId: "1:184398060177:web:863e3b002918f15d0fbd30",
    measurementId: "G-WQ4JE695RY"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export function addCar () {
        
    addDoc(doc(db, "Cars"), {
        name: carName,
        type:carType,
        color: carColor,
        price:carPrice,
        details: carDetails,
        
    });

}