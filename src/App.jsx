import React from "react";
import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./frontend/context/AuthContext.js";
import Protected from "./frontend/components/Protected.js"

import Home from "./frontend/components/pages/Shared_View/Home/Home";
import Login from "./frontend/components/pages/Shared_View/Login/Login";
import Register from "./frontend/components/pages/Shared_View/Register/Register";
import Error_404 from "./frontend/components/pages/Shared_View/Error_404/Error_404";

import Posts from "./frontend/components/pages/Public_View/Posts/Posts";
import Jobs from "./frontend/components/pages/Public_View/Jobs/Jobs";
import Tips from "./frontend/components/pages/Public_View/Tips/Tips";
import Profile from "./frontend/components/pages/Public_View/Profile/Profile";

import CMS_blog from "./frontend/components/pages/User_View/CMS_blog/CMS_blog";
import CMS_faqs from "./frontend/components/pages/User_View/CMS_faqs/CMS_faqs";
import CMS_employments from "./frontend/components/pages/User_View/CMS_employments/CMS_employments";
import CMS_tips from "./frontend/components/pages/User_View/CMS_tips/CMS_tips";
import CMS_user_profile from "./frontend/components/pages/User_View/CMS_profile_user/CMS_user_profile";

import "./frontend/assets/Scss/Styles.css";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          {/*Ruta principal*/}
          <Route path="/" element={<Home />} />
          {/*Ruta error*/}
          <Route path="*" element={<Error_404 />} />
          {/*Ruta login y registro de usuario comun*/}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/*Rutas publicas de blog, faqs, employments, tips, user-profile*/}
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Tips" element={<Tips />} />
          {/*Manejadores de contenido*/}
          <Route path="/CMS_blog" element={<Protected><CMS_blog /></Protected>} />
          <Route path="/CMS_employments" element={<Protected><CMS_employments /></Protected>} />
          <Route path="/CMS_user_profile" element={<CMS_user_profile />} />
          <Route path="/CMS_tips" element={<Protected><CMS_tips /></Protected>} />
          <Route path="/CMS_Faqs" element={<Protected><CMS_faqs /></Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
