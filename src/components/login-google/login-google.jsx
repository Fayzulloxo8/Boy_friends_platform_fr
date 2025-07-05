import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZeIHsEFE96P0LAKL3BqaciWfvHfPNY60",
  authDomain: "fir-ea705.firebaseapp.com",
  projectId: "fir-ea705",
  storageBucket: "fir-ea705.appspot.com",
  messagingSenderId: "554486269359",
  appId: "1:554486269359:web:YOUR_REAL_APP_ID_HERE"
  // 👆 mana shu `appId` ni olish uchun pastga qarang
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
