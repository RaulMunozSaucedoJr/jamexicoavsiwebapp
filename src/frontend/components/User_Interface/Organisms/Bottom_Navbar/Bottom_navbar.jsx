import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Atoms/Button/Button";

import { UserAuth } from "../../../../context/AuthContext.js";

import Faqs from "../../../../assets/images/png/faqs.png";
import Tips from "../../../../assets/images/png/tips.png";
import Jobs from "../../../../assets/images/png/job.png";
import Blog from "../../../../assets/images/png/blog.png";

//import Protected from "../../../../../frontend/components/Protected.js";
//import { UserAuth } from "../../../../context/AuthContext";

const Bottom_navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mobile-nav mt-5">
      <a href="#" className="bloc-icon">
        <Link to="/CMS_faqs">
          <img src={Faqs} className="img-fluid" alt="Logo navbar movil" />
        </Link>
      </a>

      <a href="#" className="bloc-icon">
        <Link to="/Tips">
          <img src={Tips} className="img-fluid" alt="Logo navbar movil" />
        </Link>
      </a>

      <a href="#" className="bloc-icon">
        <Link to="/Employments">
          <img src={Jobs} className="img-fluid" alt="Logo navbar movil" />
        </Link>
      </a>

      <a href="#" className="bloc-icon">
        <Link to="/Posts">
          <img src={Blog} className="img-fluid" alt="Logo navbar movil" />
        </Link>
      </a>

      <a href="#" className="bloc-icon">
        <Link className="btn btn-login text-black" to="/Login">
          {user?.displayName ? (
            <Button
              text="Salir"
              type="button"
              className="btn btn-open"
              onClick={handleSignOut}
            />
          ) : (
            <Link className="btn btn-login text-black" to="/Login">
              Ingresar
            </Link>
          )}
        </Link>
      </a>
    </div>
  );
};

export default Bottom_navbar;
