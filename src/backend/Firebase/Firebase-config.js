import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTOu2p-8ki693Y4VObUkDunZs36lAhtGg",
  authDomain: "juventudes-8becb.firebaseapp.com",
  projectId: "juventudes-8becb",
  storageBucket: "juventudes-8becb.appspot.com",
  messagingSenderId: "121232322413",
  appId: "1:121232322413:web:3b9865322717a732c13464"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;

/*
 apiKey: "AIzaSyBTOu2p-8ki693Y4VObUkDunZs36lAhtGg",
  authDomain: "juventudes-8becb.firebaseapp.com",
  projectId: "juventudes-8becb",
  storageBucket: "juventudes-8becb.appspot.com",
  messagingSenderId: "121232322413",
  appId: "1:121232322413:web:3b9865322717a732c13464"
*/