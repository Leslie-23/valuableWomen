import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailLink,
  sendSignInLinkToEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
// Firebase config for Project 1
const firebaseConfig1 = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY_1,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN_1,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID_1,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET_1,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID_1,
  appId: import.meta.env.VITE_FIREBASE_APP_ID_1,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID_1,
};

// Firebase config for Project 2
const firebaseConfig2 = {
  apiKey: "AIzaSyAXTwaNdiRblPeimFQOOizpPiWNF65Fdas",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN_2,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID_2,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET_2,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID_2,
  appId: import.meta.env.VITE_FIREBASE_APP_ID_2,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID_2,
};

// Initialize both Firebase apps
const app = initializeApp(firebaseConfig, "App");
const app1 = initializeApp(firebaseConfig1, "App1");
const app2 = initializeApp(firebaseConfig2, "App2");

// Get authentication instances for both projects
const auth = getAuth(app);
const auth1 = getAuth(app1);
const auth2 = getAuth(app2);

export { auth, auth1, auth2, sendSignInLinkToEmail, signInWithEmailLink };

// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithEmailLink,
//   sendSignInLinkToEmail,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth, sendSignInLinkToEmail, signInWithEmailLink };
