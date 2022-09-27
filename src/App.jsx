import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BottomNavbar } from "./frontend/components/Indexes/OrganismsIndex";
import {
  Jobs,
  Posts,
  Profile,
  Tips,
  Error404,
  Home,
  Login,
  CmsBlog,
  CmsEmployments,
  CmsFaqs,
  CmsUserProfile,
  CmsTips,
  Recover,
} from "./frontend/components/Indexes/PagesIndex";
import CMSResume from "./frontend/components/pages/User_View/CMS_Resumes/CMSResume";
import PantallaChat from "./frontend/components/pages/User_View/Chat/PantallaChat";
import "./frontend/assets/Scss/Styles.css";
import Protected from "./frontend/components/Protected.js";
import { AuthContextProvider } from "./frontend/context/AuthContext.js";
import app from "./backend/Firebase/Firebase-config.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const auth = getAuth(app);
const firestore = getFirestore(app);

const App = () => {
  const [user, setUser] = useState(null);
  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  const setUserWithFirebaseAndRol = (usuarioFirebase) => {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData fianl", userData);
    });
  };

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //funcion final

      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });

  return (
    <div>
      <AuthContextProvider>
        <BottomNavbar />
        <Routes>
          <Route path="*" element={<Error404 />} />
          {user ? <Route path="/" element={<Home user={user} />} /> : <Route path="/Login" element={<Login />} />}
          {user ? <Route path="/" element={<Home user={user} />} /> : <Route path="/Recover" element={<Recover />} />}
          {user ? <Route path="/" element={<Home user={user} />} /> : <Route path="/Posts" element={<Posts />} />}
          {user ? <Route path="/" element={<Home user={user} />} /> : <Route path="/Jobs" element={<Jobs />} />}
          {user ? <Route path="/" element={<Home user={user} />} /> : <Route path="/Profile" element={<Profile />} />}
          {user ? <Route path="/" element={<Home user={user} />} /> : <Route path="/Tips" element={<Tips />} />}
          <Route
            path="/CmsBlog"
            element={
              <Protected>
                <CmsBlog />
              </Protected>
            }
          />
          <Route
            path="/CmsEmployments"
            element={
              <Protected>
                <CmsEmployments />
              </Protected>
            }
          />
          <Route path="/CmsUserProfile" element={<CmsUserProfile />} />
          <Route
            path="/CmsTips"
            element={
              <Protected>
                <CmsTips />
              </Protected>
            }
          />
          <Route
            path="/CmsFaqs"
            element={
              <Protected>
                <CmsFaqs />
              </Protected>
            }
          />
          <Route
            path="/CmsResume"
            element={
              <Protected>
                <CMSResume />
              </Protected>
            }
          />
          <Route
            path="/PantallaChat"
            element={
              <Protected>
                <PantallaChat />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
