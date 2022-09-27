import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Atoms/Button/Button";

import { UserAuth } from "../../../../context/AuthContext.js";

import Profile from "../../../../assets/images/png/profile.png";
import Tips from "../../../../assets/images/png/tips.png";
import Jobs from "../../../../assets/images/png/job.png";
import Blog from "../../../../assets/images/png/blog.png";
import Menu from "../../../../assets/images/png/Menu.png";

const BottomNavbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mobile-nav fixed-bottom">
      <div className="bloc-icon">
        <Link to="/Tips">
          <img src={Tips} className="img-fluid" alt="Logo" />
          <small>Tips</small>
        </Link>
      </div>
      <div className="bloc-icon">
        <Link to="/Jobs">
          <img src={Jobs} className="img-fluid" alt="Logo" />
          <small>Empleo</small>
        </Link>
      </div>
      <div className="bloc-icon">
        <Link to="/Posts">
          <img src={Blog} className="img-fluid" alt=""/>
          <small>Blog</small>
        </Link>
      </div>
      <div className="bloc-icon">
        <Link to="/Profile">
          <img src={Profile} className="img-fluid" alt="Logo" />
          <small>Perfil</small>
        </Link>
      </div>
      <div className="dropup">
        <button className="dropbtn">
          <img src={Menu} className="img-fluid" alt="Icono Menu" />
          Menu
        </button>
        <div className="dropup-content">
          <Link to="/PantallaChat"/>
          <Link to="/CMSResume"/>
          <Link to="/CmsBlog"/>
          <Link to="/CmsEmployments"/>
          <Link to="/CmsFaqs"/>
          <Link to="/CmsUserProfile"/>
          <Link to="/CmsTips"/>
        </div>
      </div>
      <div className="bloc-icon">
        {user?.displayName ? (
          <Link to="/Login">
            <Button
              type="button"
              text="Logout"
              className="btn btn-transparent"
              onClick={handleSignOut}
            />
          </Link>
        ) : (
          <Link to="/Login">
            <Button type="button" className="btn btn-transparent" text="Login"/>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BottomNavbar;