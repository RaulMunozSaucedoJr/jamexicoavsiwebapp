import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./frontend/assets/Scss/Styles.css";
import {
  Jobs,
  Posts,
  Profile,
  Tips,
  Error404,
  Home,
  Login,
  Register,
  CmsBlog,
  CmsEmployments,
  CmsFaqs,
  CmsUserProfile,
  CmsTips,
  Recover,
} from "./frontend/components/Indexes/PagesIndex";
import { BottomNavbar } from "./frontend/components/Indexes/OrganismsIndex";
import { AuthContextProvider } from "./frontend/context/AuthContext.js";
import Protected from "./frontend/components/Protected.js";
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

  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData fianl", userData);
    });
  }

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
        {user ? <Home user={user} /> : <Login />}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Recover" element={<Recover />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Tips" element={<Tips />} />
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
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
