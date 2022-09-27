import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../../Indexes/AtomsIndexes";
import { Tabs } from "../../../Indexes/OrganismsIndex";
import app from "../../../../../backend/Firebase/Firebase-config.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore(app);

const CMSResume = () => {
  /* A constant that is used to reset the form. */
  const initialValue = {
    professional_description: "",
    address: "",
    mobile_tel: "",
    email: "",
    linkedin_url: "",
    web_url: "",
    skills: "",
    actual_job: "",
    past_jobs: "",
    links_jobs: "",
    descriptions_jobs: "",
  };

  /* A hook that allows you to use state in functional components. */
  const [post, setPost] = useState(initialValue);
  const [lista, setList] = useState([]);
  const [subid, setSubid] = useState("");

  /**
   * The handleInputs function takes an event as an argument, and then sets the state of the post
   * object to the value of the event target.
   */
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  /**
   * If the subid is empty, then add a new document to the collection, otherwise update the document.
   */
  const savePosts = async (e) => {
    e.preventDefault();

    if (subid === "") {
      try {
        await addDoc(collection(db, "resumes"), {
          ...post,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      await setDoc(doc(db, "resumes", subid), {
        ...post,
      });
    }
    setPost({ ...initialValue });
    setSubid("");
  };

  /* A hook that allows you to use state in functional components. */
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

  /**
   * It deletes a document from the database.
   */

  const deletePost = async (id) => {
    await deleteDoc(doc(db, "resumes", id));
  };

  /**
   * It gets a document from the database and sets the state of the post to the data of the document.
   */
  const getOne = async (id) => {
    try {
      const docRef = doc(db, "resumes", id);
      const docSnap = await getDoc(docRef);
      setPost(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  /* A hook that allows you to use state in functional components. */
  useEffect(() => {
    if (subid !== "") {
      getOne(subid);
    }
  }, [subid]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 create-resume-left center">
          <h1>Creador de C.V.</h1>
          <Link to="/">
            <Button
              type="button"
              className="btn btn-submit"
              text="Regresar al inicio"
              id="button"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 create-resume-right"></div>
        <div className="col-sm-12 col-md-12 create-resume-bottom pt-2">
          <Tabs>
            <div label="Crear CV">
              <form onSubmit={savePosts}>
                <div className="row">
                  <div className="col-12">
                    <h1>Informacion personal & Skills</h1>
                  </div>
                  <div className="col-sm-12 col-md-12 pt-2">
                    <label htmlFor="profesional-profile">
                      Descripción profesional
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Perfil profesional"
                      id="professional_description"
                      name="professional_description"
                      value={post.professional_description}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="col-sm-12 col-md-4 pt-2">
                    <Input
                      titleLabel="form-label label-inmersive-blue"
                      label="Direccion"
                      placeholder="Direccion"
                      type="text"
                      inputMode="text"
                      className="form-control"
                      name="address"
                      id="address"
                      value={post.address}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="col-sm-12 col-md-4 pt-2">
                    <Input
                      titleLabel="form-label label-inmersive-blue"
                      label="Telefono Movil"
                      placeholder="Telefono Movil"
                      type="text"
                      inputMode="tel"
                      className="form-control"
                      name="mobile_tel"
                      id="mobile_tel"
                      value={post.mobile_tel}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="col-sm-12 col-md-4 pt-2">
                    <Input
                      titleLabel="form-label label-inmersive-blue"
                      label="Email"
                      placeholder="correo@live.com.mx"
                      type="text"
                      inputMode="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={post.email}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="col-sm-12 col-md-4 pt-2">
                    <Input
                      titleLabel="form-label label-inmersive-blue"
                      label="Perfil Linkedin"
                      placeholder="www.linkedin.com/in/usuario"
                      type="text"
                      inputMode="url"
                      className="form-control"
                      name="linkedin_url"
                      id="linkedin_url"
                      value={post.linkedin_url}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="col-sm-12 col-md-4 pt-2">
                    <Input
                      titleLabel="form-label label-inmersive-blue"
                      label="Sitio web"
                      placeholder="www.sitioweb.com"
                      type="text"
                      inputMode="url"
                      className="form-control"
                      name="web_url"
                      id="web_url"
                      value={post.web_url}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="col-sm-12 col-md-4 pt-2">
                    <label htmlFor="skills">Habilidades</label>
                    <textarea
                      className="form-control"
                      value={post.skills}
                      onChange={handleInputs}
                      name="skills"
                      id="skills"
                      placeholder="Habilidades"
                    />
                  </div>
                  <div className="col-12">
                    <hr />
                  </div>
                  <div className="col-12">
                    <h1>Experiencia(s) laboral(es)</h1>
                  </div>
                  <div className="col-sm-12 col-md-12 pt-2">
                    <Input
                      titleLabel="form-label label-inmersive-blue"
                      label="Empleo actual"
                      placeholder="Empleo actual"
                      type="text"
                      inputMode="text"
                      className="form-control"
                      name="actual_job"
                      id="actual_job"
                      value={post.actual_job}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 pt-2">
                    <label htmlFor="past_jobs">Empleos anteriores</label>
                    <textarea
                      className="form-control"
                      value={post.past_jobs}
                      onChange={handleInputs}
                      name="past_jobs"
                      id="past_jobs"
                      placeholder="Empleos pasados"
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 pt-2">
                    <label htmlFor="links_jobs">Links empleos</label>
                    <textarea
                      className="form-control"
                      value={post.links_jobs}
                      onChange={handleInputs}
                      name="links_jobs"
                      id="links_jobs"
                      placeholder="Link empleos"
                    />
                  </div>
                  <div className="col-sm-12 col-md-12 pt-2">
                    <label htmlFor="descriptions_jobs">
                      Descripciones empleos
                    </label>
                    <textarea
                      className="form-control"
                      value={post.descriptions_jobs}
                      onChange={handleInputs}
                      name="descriptions_jobs"
                      id="descriptions_jobs"
                      placeholder="Descripcion"
                    />
                  </div>
                  <div className="col-12 pt-5">
                    <button className="btn btn-submit">
                      {subid === "" ? "Registrar" : "Actualizar"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div label="C.V's">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Descripcion</th>
                      <th>Direccion</th>
                      <th>Movil</th>
                      <th>Email</th>
                      <th>Linkedin</th>
                      <th>Web</th>
                      <th>Habilidades</th>
                      <th>Empleo actual</th>
                      <th>Empleos anteriores</th>
                      <th>Links empleos</th>
                      <th>Descripciones empleos</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lista.map((list) => (
                      <tr>
                        <th scope="row" key={list.id}></th>
                        <td>{list.professional_description}</td>
                        <td>{list.address}</td>
                        <td>{list.mobile_tel}</td>
                        <td>{list.email}</td>
                        <td>{list.linkedin_url}</td>
                        <td>{list.web_url}</td>
                        <td>{list.skills}</td>
                        <td>{list.actual_job}</td>
                        <td>{list.past_jobs}</td>
                        <td>{list.links_jobs}</td>
                        <td>{list.descriptions_jobs}</td>
                        <td>
                          <Button
                            id="button"
                            text="Editar"
                            className="btn btn-edit"
                            type="button"
                            onClick={() => setSubid(list.id)}
                          />
                          <Button
                            id="button"
                            text="Borrar"
                            className="btn btn-delete"
                            type="button"
                            onClick={() => deletePost(list.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CMSResume;
