import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../../Indexes/Atoms_Indexes";
import { Tabs } from "../../../Indexes/Organisms_Index";
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

const Blog = () => {
  const initialValue = {
    title: "",
    category: "",
    content: "",
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
        await addDoc(collection(db, "blog"), {
          ...post,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      await setDoc(doc(db, "blog", subid), {
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
        const querySnapshot = await getDocs(collection(db, "blog"));
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
    await deleteDoc(doc(db, "blog", id));
  };

  //Function to update posts
  const getOne = async (id) => {
    try {
      const docRef = doc(db, "blog", id);
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
        <div className="col-sm-12 col-md-6 blog-left center">
          <h1>Manejador de post's</h1>
          <Link to="/">
            <Button
              id="button"
              text="Regresar al home"
              className="btn btn-open"
              type="button"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 blog-right"></div>
        <div className="col-sm-12 col-md-12 blog-bottom pt-5">
          <Tabs>
            <div label="Registrar posts">
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
                    label="Contenido"
                    placeholder="Contenido"
                    type="text"
                    className="form-control"
                    name="content"
                    id="content"
                    value={post.content}
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
            <div label="Tabla de posts">
              <div class="table-responsive-xxl">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col-12">#</th>
                      <th scope="col-12">Titulo</th>
                      <th scope="col-12">Categoria</th>
                      <th scope="col-12">Contenido</th>
                      <th scope="col-12">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lista.map((list) => (
                      <tr>
                        <th scope="row" key={list.id}></th>
                        <td>{list.title}</td>
                        <td>{list.category}</td>
                        <td>{list.content}</td>
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

export default Blog;
