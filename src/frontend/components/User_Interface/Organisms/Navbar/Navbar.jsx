import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../../../context/AuthContext.js";
import { Button } from "../../../Indexes/AtomsIndexes";

export const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-xl sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="col-sm-12 col-md-2 col-xl-2 center">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Blog">Añadir post</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-2 col-xl-2 center">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Faqs
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Faqs">Añadir preguntas</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-2 col-xl-2 center">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tips
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Tips">Añadir tips</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-2 col-xl-2 center">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Empleos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Employments">Añadir empleos</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-2 col-xl-2 center">
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
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
