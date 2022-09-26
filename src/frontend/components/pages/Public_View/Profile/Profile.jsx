import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../../Indexes/AtomsIndexes";
const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 profiles-left center">
          <h1>Perfiles</h1>
          <Link to="/">
            <Button
              type="button"
              id="button"
              text="Volver al inicio"
              className="btn btn-open"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 profiles-right"></div>
        <div className="col-sm-12 col-md-12 profiles-bottom">

        </div>
      </div>
    </div>
  );
};

export default Profile;
