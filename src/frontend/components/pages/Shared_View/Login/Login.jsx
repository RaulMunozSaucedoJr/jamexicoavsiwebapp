import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../../../Indexes/AtomsIndexes";
import app from "../../../../../backend/Firebase/Firebase-config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { UserAuth } from "../../../../context/AuthContext.js";
//import { auth } from "../../../../../backend/Firebase/Firebase-config.js";
const auth = getAuth(app);

const Login = () => {
  const firestore = getFirestore(app);
  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email, rol: rol });
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    console.log("submit", email, password, rol);

    if (isRegistrando) {
      registrarUsuario(email, password, rol);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  }

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 login-left">
            <div className="row">
              <div className="col-12 center pt-5">
                <h1>{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
              </div>
            </div>
            <form onSubmit={submitHandler}>
              <div className="row">
                <div className="col-12 pt-5">
                  <div className="form-group">
                    <input
                      placeholder="Correo electronico"
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 pt-5">
                  <div className="form-group">
                    <input
                      placeholder="Contraseña"
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 pt-5">
                  <div className="form-group">
                    <label htmlFor="rol" className="text-white">
                      Seleccione su rol
                    </label>
                    <select className="form-control" id="rol">
                      <option value="admin">Administrador</option>
                      <option value="user">Usuario</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12 pt-5">
                  <Button
                    type="submit"
                    className="btn btn-submit"
                    value={isRegistrando ? "Registrar" : "Iniciar sesión"}
                    text={isRegistrando ? "Registrar" : "Iniciar sesión"}
                  />
                </div>
              </div>
            </form>
            <div className="col-sm-12 col-md-6 pt-3">
              <Button
                id="modal"
                text="Google"
                className="btn btn-google mt-2"
                type="button"
                onClick={handleGoogleSignIn}
              />
            </div>
            <div className="col-sm-12 col-md-6 pt-3">
              <Button
                id="modal"
                text="Facebook"
                className="btn btn-facebook mt-2"
                type="button"
                onClick={signInWithFacebook}
              />
            </div>
            <div className="col-sm-12 col-md-6 pt-3">
              <button
                className="btn btn-submit"
                onClick={() => setIsRegistrando(!isRegistrando)}
              >
                {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 login-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
