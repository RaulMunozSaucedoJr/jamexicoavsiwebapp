import {
  initializeApp
} from "firebase/app";
import {
  getAuth
} from "firebase/auth";
/* Initializing the firebase app. */
const firebaseConfig = {
  apiKey: "AIzaSyDR4FnikrKnuzIK3hdrRUb4JlCTFLTKjoU",
  authDomain: "rolesauth-5a1ba.firebaseapp.com",
  projectId: "rolesauth-5a1ba",
  storageBucket: "rolesauth-5a1ba.appspot.com",
  messagingSenderId: "292643430696",
  appId: "1:292643430696:web:b5bd323dcfccae7766b01d"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;