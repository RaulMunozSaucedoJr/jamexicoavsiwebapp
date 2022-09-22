import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../../../Indexes/Atoms_Indexes";
import { Tabs } from "../../../Indexes/Organisms_Index";

import Delete from "../../../../assets/images/png/delete.png";
import Edit from "../../../../assets/images/png/edit.png";

import Bottom_navbar from "../../../User_Interface/Organisms/Bottom_Navbar/Bottom_navbar";
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
    <div className="container-fluCMS_fd faqs">
      <div className="row">
        <div className="col-sm-12 col-md-6 center faqs-left">
          <h1>Manejador de preguntas frecuentes</h1>
          <Link to="/">
            <Button
              id="button"
              text="Volver al inicio"
              className="btn btn-open mt-4"
              type="button"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 center faqs-right"></div>
        <div className="col-sm-12 col-md-12 faqs-bottom pt-5">
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
                <div class="table-responsive-xxl">
                  <table class="table table-hover">
                    <thead>
                      <th scope="col">#</th>
                      <th scope="col">Pregunta</th>
                      <th scope="col">Respuesta</th>
                      <th scope="col">Acciones</th>
                    </thead>
                    <tbody>
                      {lista.map((list) => (
                        <tr>
                          <th scope="row" key={list.id}></th>
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
      <Bottom_navbar />
    </div>
  );
};

export default CMS_faqs;
