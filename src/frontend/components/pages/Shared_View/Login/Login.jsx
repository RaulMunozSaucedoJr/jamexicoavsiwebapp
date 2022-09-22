import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../../context/AuthContext.js";
import { auth } from "../../../../../backend/Firebase/Firebase-config.js";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

import { Input, Button } from "../../../Indexes/Atoms_Indexes";
import { Navbar } from "../../../Indexes/Organisms_Index";

import JA from "../../../../assets/images/jpg/JAMEXICO.jpg";

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then(
        (re) => {
          if (user != null) {
            navigate("/");
          }
          console.log(re);
        },
        [user]
      )
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid login">
        <div className="row">
          <div className="col-sm-12 col-md-6 login-left">
            <div className="row">
              <div className="col-12 center">
                <img src={JA} className="img-thumbnail" alt="Logo JA MEXICO" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 pt-3">
                <div className="form-group">
                  <Input
                    titleLabel="form-label label-white"
                    label="Usuario"
                    placeholder="Usuario"
                    type="text"
                    className="form-control"
                    name="text"
                    id="text"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="col-12 pt-3">
                <div className="form-group">
                  <Input
                    titleLabel="form-label label-white"
                    label="Contraseña"
                    placeholder="Contraseña"
                    type="text"
                    className="form-control"
                    name="password"
                    id="password"
                    value=""
                    required
                  />
                  <Link to="/Recover">
                    ¿Olvidaste tu contraseña?. ¡Click aquí!.
                  </Link>
                </div>
              </div>
              <div className="col-md-12 pt-3">
                <button className="btn btn-submit" type="submit">
                  Ingresar
                </button>
              </div>
              <div className="col-sm-12 col-md-12">
                <Button
                  id="modal"
                  text="Google"
                  className="btn btn-google mt-2"
                  type="button"
                  onClick={handleGoogleSignIn}
                />
                <Button
                  id="modal"
                  text="Facebook"
                  className="btn btn-facebook mt-2"
                  type="button"
                  onClick={signInWithFacebook}
                />
              </div>
              <div className="col-md-12 center pt-4">
                <Link to="/Register">
                  ¿No tienes cuenta?. <br />
                  Registrate con nosotros
                </Link>
              </div>
              <div className="col-md-12 center pt-4">
                <Link to="/">Regresar al Home</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 login-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
