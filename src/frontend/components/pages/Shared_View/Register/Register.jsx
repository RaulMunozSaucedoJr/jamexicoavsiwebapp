import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../../../Indexes/Atoms_Indexes";

const Register = () => {
  return (
    <div className="container-fluid first-register-user">
      <div className="row">
        <div className="col-sm-12 col-md-6 first-register-user-left">
          <h1>Registro</h1>
          <form>
            <div className="form-group pt-3">
              <Input
                titleLabel="form-label label-white"
                label="Usuario"
                placeholder="Usuario"
                type="text"
                className="form-control"
                name="user"
                id="user"
                value=""
                required
              />
            </div>
            <div className="form-group pt-3">
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
            </div>
            <div className="form-group pt-3">
              <Input
                titleLabel="form-label label-white"
                label="Confirmar contraseña"
                placeholder="Confirmar contraseña"
                type="text"
                className="form-control"
                name="confirm_password"
                id="confirm_password"
                value=""
                required
              />
            </div>
            <div className="form-group pt-3">
              <Input
                titleLabel="form-label label-white"
                label="Nombre completo"
                placeholder="Nombre completo"
                type="text"
                className="form-control"
                name="complete_name"
                id="complete_name"
                value=""
                required
              />
            </div>
            <div className="form-group pt-3">
              <Input
                titleLabel="form-label label-white"
                label="Correo electronico"
                placeholder="Correo electronico"
                type="text"
                className="form-control"
                name=""
                id=""
                value=""
                required
              />
            </div>
            <div className="form-group pt-3">
              <Button
                text="Registrar"
                className="btn btn-submit"
                type="button"
                id="register"
                name="register"
              />
            </div>
          </form>
          <div className="row">
            <div className="col-12 center pt-5">
              <Link to="/">Regresar al Home</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 first-register-user-right"></div>
      </div>
    </div>
  );
};

export default Register;
