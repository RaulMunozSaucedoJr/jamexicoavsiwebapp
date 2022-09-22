import React, { useState, useEffect } from "react";
import Card from "../../../User_Interface/Organisms/Card/Card";
import Bottom_navbar from "../../../User_Interface/Organisms/Bottom_Navbar/Bottom_navbar";
import CV from "../../../../assets/images/jpg/cv.jpg";

import app from "../../../../../backend/Firebase/Firebase-config.js";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(app);

const Posts = () => {
  const [lista, setList] = useState([]);
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
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 posts-left center">
          <h1>BLOG</h1>
        </div>
        <div className="col-sm-12 col-md-6 posts-right"></div>
        <div className="col-md-12 center posts-bottom">
          {lista.map((list) => (
            <Card
              imageUrl={CV}
              alternativeTExt="Imagen de Card"
              title={list.title}
              cardText={list.category}
              secondarycardText={list.content}
              smallText="Para mas detalles click aqui"
            />
          ))}
        </div>
        <Bottom_navbar />
      </div>
    </div>
  );
};

export default Posts;
