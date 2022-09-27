import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../../../Indexes/AtomsIndexes";
import { Tabs } from "../../../Indexes/OrganismsIndex";

import Delete from "../../../../assets/images/png/delete.png";
import Edit from "../../../../assets/images/png/edit.png";

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

const CMS_faqs = () => {
  const initialValue = {
    pregunta: "",
    respuesta: "",
  };

  //Variables de estado
  const [post, setPost] = useState(initialValue);
  const [lista, setList] = useState([]);
  const [subid, setSubid] = useState("");

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  //Function to save post and update
  const savePosts = async (e) => {
    e.preventDefault();

    if (subid === "") {
      try {
        await addDoc(collection(db, "preguntasyrespuestas"), {
          ...post,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      await setDoc(doc(db, "preguntasyrespuestas", subid), {
        ...post,
      });
    }
    setPost({ ...initialValue });
    setSubid("");
  };

  //Function to render posts list
  useEffect(() => {
    const getList = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "preguntasyrespuestas")
        );
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

  //Function to delete posts
  const deletePost = async (id) => {
    await deleteDoc(doc(db, "preguntasyrespuestas", id));
  };

  //Function to update posts
  const getOne = async (id) => {
    try {
      const docRef = doc(db, "preguntasyrespuestas", id);
      const docSnap = await getDoc(docRef);
      setPost(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (subid !== "") {
      getOne(subid);
    }
  }, [subid]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 faqs-left center">
          <h1>Manejador de FAQs</h1>
          <Link to="/">
            <Button
              id="button"
              text="Volver al inicio"
              className="btn btn-open"
              type="button"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 faqs-right"></div>
        <div className="col-sm-12 col-md-12 faqs-bottom">
          <div>
            <Tabs>
              <div label="Registrar Preguntas">
                <form onSubmit={savePosts}>
                  <div className="form-group">
                    <Input
                      titleLabel="form-label label-inmersive-blue"
                      label="Pregunta"
                      placeholder="Pregunta"
                      type="text"
                      className="form-control"
                      name="pregunta"
                      id="pregunta"
                      value={post.pregunta}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      titleLabel="form-label label-inmersive-blue"
                      label="Respuesta"
                      placeholder="Respuesta"
                      type="text"
                      className="form-control"
                      name="respuesta"
                      id="respuesta"
                      value={post.respuesta}
                      onChange={handleInputs}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-submit mt-4">
                      {subid === "" ? "Registrar" : "Actualizar"}
                    </button>
                  </div>
                </form>
              </div>
              <div label="Tabla de Preguntas">
                <div className="table-responsive-xxl">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Pregunta</th>
                        <th>Respuesta</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lista.map((list) => (
                        <tr>
                          <td key={list.id}></td>
                          <td>{list.pregunta}</td>
                          <td>{list.respuesta}</td>
                          <td>
                            <Button
                              id="button"
                              text=""
                              className="btn btn-edit"
                              type="button"
                              onClick={() => setSubid(list.id)}
                            >
                              <img
                                src={Edit}
                                className="img-fluid"
                                alt="Icono"
                              />
                            </Button>
                            <Button
                              id="button"
                              text=""
                              className="btn btn-delete"
                              type="button"
                              onClick={() => deletePost(list.id)}
                            >
                              <img src={Delete} class="img-fluid" alt="Icono" />
                            </Button>
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
    </div>
  );
};

export default CMS_faqs;
