import React, { useState, useEffect } from "react";
import AdminView from "../../AdminView";
import UserView from "../../UserView";
import Card from "../../../User_Interface/Organisms/Card/Card";
import Blog from "../../../../assets/images/jpg/Blog.jpg";
import Job from "../../../../assets/images/jpg/Job.jpg";
import Tips from "../../../../assets/images/jpg/Tips.jpg";
import Faq from "../../../../assets/images/jpg/Faqs.jpg";
import Live from "../../../../assets/images/jpg/live.jpg";
import CV from "../../../../assets/images/jpg/cv.jpg";

import app from "../../../../../backend/Firebase/Firebase-config.js";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(app);

const Home = ({ user }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="alert alert-success" role="alert">
            <button onClick={() => signOut(auth)}> Cerrar sesión</button>
            {user.rol === "admin" ? <AdminView /> : <UserView />}
          </div>
        </div>

        <div className="col-sm-12 col-md-6 about-us-left center">
          <h1>Juventudes</h1>
          <p>
            Somos una plataforma encargada de apoyar a los jovenes su primer
            empleo, ofreciendo los medios tecnologicos e información necesaria
            para que estos puedan obtener su primer empleo.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 about-us-right"></div>

        {/*************************************************/}
        <div className="col-sm-12 col-md-6 mision-right"></div>
        <div className="col-sm-12 col-md-6 mision-left center">
          <h1>Misión</h1>
          <p>
            Inspirar y preparar a la juventud para triunfar en la economia
            global.
          </p>
        </div>

        <div className="col-sm-12 col-md-6 tools-left center">
          <h1>Herramientas</h1>
          <p>
            Contamos con diferentes herramientas para que los jovenes puedan
            encontrar de manera mas eficiente y rapida su primer empleo.
          </p>
        </div>
        <div className="col-sm-12 col-md-6 tools-right">
          <div className="row">
            <div className="col-sm-12 col-md-6 pt-4">
              <Card
                imageUrl={Blog}
                lazy="loading"
                alternativeTExt="Imagen de Card"
                title="Blog"
                cardText="Contamos con un blog donde podras postear y ver información relevante para obtener tu primer empleo."
                smallText="Para mas detalles click aqui"
              />
            </div>
            <div className="col-sm-12 col-md-6 pt-4">
              <Card
                imageUrl={Tips}
                lazy="loading"
                alternativeTExt="Imagen de Card"
                title="Tips primer empleo"
                cardText="Contamos con una seccion en donde te daremos diferentes tips para que obtengas tu primer empleo de manera mas rapida y eficiente. Dentro de los tips se encuentran: Tips para un buen C.V. entre otros."
                smallText="Para mas detalles click aqui"
              />
            </div>
            <div className="col-sm-12 col-md-6 pt-4">
              <Card
                imageUrl={Job}
                lazy="loading"
                alternativeTExt="Imagen de Card"
                title="Bolsas de trabajo"
                cardText="Contamos con una seccion para que puedas visualizar las diferentes bolsas de trabajo que hay en internet, asi como las plataformas de empleo que hay dentro de tu comunidad/localidad/estado."
                smallText="Para mas detalles click aqui"
              />
            </div>
            <div className="col-sm-12 col-md-6 pt-4">
              <Card
                imageUrl={Faq}
                alternativeTExt="Imagen de Card"
                title="Preguntas frecuentes"
                cardText="Contamos con una seccion para responder TODAS tus dudas sobre la plataforma, las herramientas que la conforman y el uso de cada una de estas"
                smallText="Para mas detalles click aqui"
              />
            </div>
            <div className="col-sm-12 col-md-6 pt-4">
              <Card
                imageUrl={Live}
                alternativeTExt="Imagen de Card"
                title="Simulador de entrevistas"
                cardText="Contamos con una seccion para simular mediante una videollamada las tipicas entrevistas de trabajo actuales."
                smallText="Para mas detalles click aqui"
              />
            </div>
            <div className="col-sm-12 col-md-6 pt-4">
              <Card
                imageUrl={CV}
                alternativeTExt="Imagen de Card"
                title="Creador de C.V.'s"
                cardText="Contamos con una seccion para que puedas construir desde 0 tu C.V. o si asi lo deseas tenemos plantillas las cuales podras utilizar e imprimir para tu proximo trabajo."
                smallText="Para mas detalles click aqui"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
