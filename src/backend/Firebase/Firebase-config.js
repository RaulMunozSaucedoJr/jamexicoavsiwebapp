import {
  initializeApp
} from "firebase/app";
import {
  getAuth
} from "firebase/auth";
import {
  getFirestore
} from "firebase/firestore";
/* Initializing the firebase app. */
const firebaseConfig = {
  apiKey: "AIzaSyAP6_nN7qVTWZwHr_CBF9_L3-N22se2KvE",
  authDomain: "webappjuventudes.firebaseapp.com",
  projectId: "webappjuventudes",
  storageBucket: "webappjuventudes.appspot.com",
  messagingSenderId: "581276820275",
  appId: "1:581276820275:web:0a93d7992c783b62bc1446"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;