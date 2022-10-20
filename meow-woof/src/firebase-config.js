
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJbacg3dpEMzKrIl-Nd3C9g4ihw9YW58k",
  authDomain: "csds395-70432.firebaseapp.com",
  projectId: "csds395-70432",
  storageBucket: "csds395-70432.appspot.com",
  messagingSenderId: "408901344461",
  appId: "1:408901344461:web:c004bb27272fb6f22bdd84",
  measurementId: "G-VG4DH31Y4E"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
      .then((result) =>{
          const name = result.user.displayName;
          const email = result.user.email;
          const profilePic = result.user.photoURL;

          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("profilePic", profilePic);
  }).catch((error) => {
    console.log(error);
  });
}