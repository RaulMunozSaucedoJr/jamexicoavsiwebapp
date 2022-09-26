import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../../Indexes/OrganismsIndex";
import { Button } from "../../../Indexes/AtomsIndexes";

import Blog from "../../../../assets/images/jpg/Blog.jpg";

const Jobs = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 jobs-left center">
          <h1>Bolsas de empleo</h1>
          <Link to="/">
            <Button
              id="button"
              text="Volver al inicio"
              className="btn btn-open"
              type="button"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 jobs-right"></div>
        <div className="col-sm-12 col-md-12 jobs-bottom pt-5">
          <div className="row">
            <div className="col-sm-12 col-md-4 pt-2">
              <Card
                imageUrl={Blog}
                lazy="loading"
                alternativeTExt="Imagen de Card"
                title="Titulo DUMMY"
                cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi
            voluptatum suscipit voluptatibus accusantium blanditiis amet nihil laborum,
            delectus voluptate ipsam vitae dolorum officiis temporibus. Vero commodi dolor
            mollitia excepturi. Corrupti totam libero ipsum provident deleniti inventore,
            omnis deserunt. Recusandae aliquam temporibus tempore deleniti voluptatibus!
            Corporis id odio explicabo velit unde iusto non, ex officia iste neque itaque
            provident quidem! Ad minima veritatis facere quaerat debitis natus, beatae,
            amet ipsam cupiditate soluta dolorem aut praesentium aliquam, repudiandae
            accusantium vitae nulla eaque sed neque fugiat. Quo molestiae quam dicta vel
            error!"
                smallText="Para mas detalles click aqui"
              />
            </div>
            <div className="col-sm-12 col-md-4 pt-2">
              <Card
                imageUrl={Blog}
                lazy="loading"
                alternativeTExt="Imagen de Card"
                title="Titulo DUMMY"
                cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi
            voluptatum suscipit voluptatibus accusantium blanditiis amet nihil laborum,
            delectus voluptate ipsam vitae dolorum officiis temporibus. Vero commodi dolor
            mollitia excepturi. Corrupti totam libero ipsum provident deleniti inventore,
            omnis deserunt. Recusandae aliquam temporibus tempore deleniti voluptatibus!
            Corporis id odio explicabo velit unde iusto non, ex officia iste neque itaque
            provident quidem! Ad minima veritatis facere quaerat debitis natus, beatae,
            amet ipsam cupiditate soluta dolorem aut praesentium aliquam, repudiandae
            accusantium vitae nulla eaque sed neque fugiat. Quo molestiae quam dicta vel
            error!"
                smallText="Para mas detalles click aqui"
              />
            </div>
            <div className="col-sm-12 col-md-4 pt-2">
              <Card
                imageUrl={Blog}
                lazy="loading"
                alternativeTExt="Imagen de Card"
                title="Titulo DUMMY"
                cardText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi
            voluptatum suscipit voluptatibus accusantium blanditiis amet nihil laborum,
            delectus voluptate ipsam vitae dolorum officiis temporibus. Vero commodi dolor
            mollitia excepturi. Corrupti totam libero ipsum provident deleniti inventore,
            omnis deserunt. Recusandae aliquam temporibus tempore deleniti voluptatibus!
            Corporis id odio explicabo velit unde iusto non, ex officia iste neque itaque
            provident quidem! Ad minima veritatis facere quaerat debitis natus, beatae,
            amet ipsam cupiditate soluta dolorem aut praesentium aliquam, repudiandae
            accusantium vitae nulla eaque sed neque fugiat. Quo molestiae quam dicta vel
            error!"
                smallText="Para mas detalles click aqui"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
