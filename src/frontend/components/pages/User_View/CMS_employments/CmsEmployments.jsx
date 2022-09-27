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

const Employments = () => {
 /* A constant that is used to reset the form. */
  const initialValue = {
    title: "",
    category: "",
    descripcion: "",
  };

  /* A hook that is used to update the state of the component. */
  
  const [post, setPost] = useState(initialValue);
  const [lista, setList] = useState([]);
  const [subid, setSubid] = useState("");

/**
 * The handleInputs function takes an event as an argument, and then sets the state of the post object
 * to the value of the event target.
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
        await addDoc(collection(db, "trabajos"), {
          ...post,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      await setDoc(doc(db, "trabajos", subid), {
        ...post,
      });
    }
    setPost({ ...initialValue });
    setSubid("");
  };


/* A hook that is used to update the state of the component. */
  useEffect(() => {
    const getList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "trabajos"));
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
 * DeletePost is a function that takes an id as an argument and deletes a document from the trabajos
 * collection in the database.
 */
  const deletePost = async (id) => {
    await deleteDoc(doc(db, "trabajos", id));
  };

  
/**
 * It gets a document from a collection in a Firestore database.
 */
  const getOne = async (id) => {
    try {
      const docRef = doc(db, "trabajos", id);
      const docSnap = await getDoc(docRef);
      setPost(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

/* A hook that is used to update the state of the component. */
  useEffect(() => {
    if (subid !== "") {
      getOne(subid);
    }
  }, [subid]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 employments-left center">
          <h1>Manejador de empleos</h1>
          <Link to="/">
            <Button
              id="button"
              text="Volver al inicio"
              className="btn btn-open"
              type="button"
            />
          </Link>
        </div>

        <div className="col-sm-12 col-md-6 employments-right"></div>

        <div className="col-sm-12 col-md-12 employments-bottom pt-5">
          <Tabs>
            <div label="Registrar trabajos">
              <form onSubmit={savePosts}>
                <div className="form-group pt-3">
                  <Input
                    titleLabel="form-label label-inmersive-blue"
                    label="Titulo"
                    placeholder="Titulo"
                    type="text"
                    className="form-control"
                    name="title"
                    id="title"
                    value={post.title}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="form-group pt-3">
                  <Input
                    titleLabel="form-label label-inmersive-blue"
                    label="Categoria"
                    placeholder="Categoria"
                    type="text"
                    className="form-control"
                    name="category"
                    id="category"
                    value={post.category}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="form-group pt-3">
                  <Input
                    titleLabel="form-label label-inmersive-blue"
                    label="Descripcion"
                    placeholder="Descripcion"
                    type="text"
                    className="form-control"
                    name="descripcion"
                    id="descripcion"
                    value={post.descripcion}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="form-group pt-3">
                  <button className="btn btn-submit">
                    {subid === "" ? "Registrar" : "Actualizar"}
                  </button>
                </div>
              </form>
            </div>
            <div label="Tabla de trabajos">
              <div className="table-responsive-xxl">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Titulo</th>
                      <th scope="col">Categoria</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lista.map((list) => (
                      <tr>
                        <th scope="row" key={list.id}></th>
                        <td>{list.title}</td>
                        <td>{list.category}</td>
                        <td>{list.descripcion}</td>
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

export default Employments;
