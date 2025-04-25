// Firebase configuration for NG Fleet website

// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCy-N3WwYTIvbUFGg1qhhb8S-3Eye5FQa0",
    authDomain: "ngfleet-d675c.firebaseapp.com",
    projectId: "ngfleet-d675c",
    storageBucket: "ngfleet-d675c.firebasestorage.app",
    messagingSenderId: "119274710610",
    appId: "1:119274710610:web:cba6c4e29628c4746d618b",
    measurementId: "G-FY161TT086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services and export them
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// For backward compatibility with non-module scripts
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseGoogleProvider = googleProvider; 