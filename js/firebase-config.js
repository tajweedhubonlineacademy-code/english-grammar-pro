// Firebase Configuration for GrammarCraft Pro
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBjQIVwFcs_IUFCJ7OER47Dsyt_cHa89nI",
  authDomain: "english-grammar-pro-490e5.firebaseapp.com",
  projectId: "english-grammar-pro-490e5",
  storageBucket: "english-grammar-pro-490e5.firebasestorage.app",
  messagingSenderId: "82523669782",
  appId: "1:82523669782:web:099c89b1fb1d47ca8cfc37"
};

// Initialize Firebase Cloud Database
try {
  if (typeof firebase !== "undefined") {
    firebase.initializeApp(FIREBASE_CONFIG);
    window.db = firebase.firestore();
    console.log("🔥 Firebase Cloud Database (Firestore) Connected Successfully!");
    
    // Optional: Log connection state on page
    window.addEventListener("DOMContentLoaded", () => {
      const badge = document.querySelector(".vip-tag");
      if (badge) {
        badge.innerHTML = 'VIP PRO <i class="fa-solid fa-cloud-check" style="margin-left:4px; font-size:0.75rem;"></i>';
        badge.title = "Firebase Cloud Connected";
      }
    });
  }
} catch (e) {
  console.warn("Firebase initialization error:", e);
}
