import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../../../Indexes/AtomsIndexes";

const RecoverPassword = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 recover-left center">
          <h1>Recuperar contraseña</h1>
          <Link to="/">
            <Button
              id="button"
              text="Regresar al inicio"
              className="btn btn-open"
              type="button"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 recover-right"></div>
        <div className="col-sm-12 col-md-12 recover-bottom pt-3">
          <form>
            <div className="row">
              <div className="col-sm-12 col-md-6 pt-2">
                <div className="form-group">
                  <Input
                    titleLabel="form-label label-inmersive-blue"
                    label="Correo electrónico"
                    placeholder="Correo electrónico"
                    type="text"
                    className="form-control"
                    name="recover-email"
                    id="recover-email"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 pt-2">
                <div className="form-group">
                  <Input
                    titleLabel="form-label label-inmersive-blue"
                    label="Contraseña"
                    placeholder="Contraseña"
                    type="text"
                    className="form-control"
                    name="recover-password"
                    id="recover-password"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-12 pt-2">
                <div className="form-group">
                  <Input
                    titleLabel="form-label label-inmersive-blue"
                    label="Nueva contraseña"
                    placeholder="Nueva contraseña"
                    type="passwrod"
                    className="form-control"
                    name="new-recover-password"
                    id="new-recover-password"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-12 pt-3">
                <Button
                  text="Recuperar contraseña"
                  className="btn btn-submit"
                  type="button"
                  id="recover-password"
                  name="recover-password"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
