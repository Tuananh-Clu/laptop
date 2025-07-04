// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD7-gppcZwZlYpPHjPCyzoQYpIh0hqHQC0",
  authDomain: "asus-eba9c.firebaseapp.com",
  projectId: "asus-eba9c",
  storageBucket: "asus-eba9c.appspot.com",
  messagingSenderId: "422853349201",
  appId: "1:422853349201:web:61c56202009a548160cd70",
  measurementId: "G-KX28E5FMJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); 


const login = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful");
  } catch (error) {
    console.error("Login error:", error.message);
  }
};

// Signup function
const signin = async ({ name, email, password }) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await updateProfile(user, { displayName: name });

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local",
    });

    console.log("Sign up successful");
  } catch (error) {
    console.error("Signup error:", error.message);
  }
};

// Logout function
const logout = async () => {
  await signOut(auth);
  console.log("Logged out");
};

export { login, signin, logout, db, auth };
