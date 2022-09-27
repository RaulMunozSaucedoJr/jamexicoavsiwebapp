import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../Indexes/AtomsIndexes";
import app from "../../../../../backend/Firebase/Firebase-config";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(app);

const Profile = () => {
  const [lista, setList] = useState([]);
  useEffect(() => {
    const getList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "resumes"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setList(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, [lista]);



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
        <div className="col-sm-12 col-md-12 profiles-bottom pt-5">
          <div className="row">
            {lista.map((list) => (
              <div className="col-sm-12 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h1>Perfil del usuario</h1>
                    </div>
                    <div className="card-text">
                      <ul>
                        <li><strong>Descripcion profesional:</strong><br/>{list.professional_description}</li>
                        <li><strong>Direccion:</strong><br/>{list.address}</li>
                        <li><strong>Telefono movil:</strong><br/>{list.mobile_tel}</li>
                        <li><strong>Correo:</strong><br/>{list.email}</li>
                        <li><strong>Linkedin:</strong><br/>{list.linkedin_url}</li>
                        <li><strong>Sitio web:</strong><br/>{list.web_url}</li>
                        <li><strong>Habilidades:</strong><br/>{list.skills}</li>
                        <li><strong>Trabajo actual:</strong><br/>{list.actual_job}</li>
                        <li><strong>Trabajos pasados:</strong><br/>{list.past_jobs}</li>
                        <li><strong>Link de empleos:</strong><br/>{list.links_jobs}</li>
                        <li><strong>Descripciones:</strong><br/>{list.descriptions_jobs}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-footer">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
