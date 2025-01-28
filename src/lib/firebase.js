import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-e2e54.firebaseapp.com",
  projectId: "chat-app-e2e54",
  storageBucket: "chat-app-e2e54.firebasestorage.app",
  messagingSenderId: "760156031204",
  appId: "1:760156031204:web:a6ec94b1f86052e0ca84f1",
  measurementId: "G-RM3J5CP0EX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();