import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDQs9SOmJaajlxHKGUMWPA0Y-nOSkwk-BY",
    authDomain: "quickjobdb.firebaseapp.com",
    projectId: "quickjobdb",
    storageBucket: "quickjobdb.firebasestorage.app",
    messagingSenderId: "322145649249",
    appId: "1:322145649249:web:d767423462a06162ba6020"
};

const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);

export default app;
