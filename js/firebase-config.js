// Firebase Configuration for GrammarCraft Pro
// Paste your Firebase Web App credentials below:
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID_HERE",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID_HERE"
};

// Auto-check if Firebase credentials are provided
const isFirebaseReady = FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY_HERE";

if (isFirebaseReady) {
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
    window.db = firebase.firestore();
    console.log("Firebase Firestore connected successfully! 🔥");
  } catch (e) {
    console.warn("Firebase initialization skipped:", e);
  }
} else {
  console.log("ℹ️ Firebase is in Offline / Local Mode. To connect Firebase, paste keys in js/firebase-config.js");
}
