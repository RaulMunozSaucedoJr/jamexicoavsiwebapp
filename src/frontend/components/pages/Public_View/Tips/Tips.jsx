import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../../Indexes/OrganismsIndex";
import { Button } from "../../../Indexes/AtomsIndexes";

import CV from "../../../../assets/images/jpg/cv.jpg";

const Tips = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 tips-left center">
          <h1>Tips de empleo</h1>
          <Link to="/">
            <Button
              id="button"
              text="Volver al inicio"
              className="btn btn-open"
              type="button"
            />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 tips-right"></div>
        <div className="col-sm-12 col-md-12 tips-bottom">
          <div className="row">
            <div className="col-sm-12 col-md-4 pt-2">
              <Card
                imageUrl={CV}
                alternativeTExt="Imagen de Card"
                title="TITULO DUMMY"
                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                maxime atque totam fugiat! Officiis eaque in distinctio totam beatae
                neque est corrupti repudiandae numquam sed, labore laboriosam nihil,
                nesciunt facilis. Incidunt iste animi dolores explicabo cumque
                repellat ex nostrum excepturi quia aliquam quam eveniet omnis quo
                nam expedita, recusandae impedit libero corporis ipsam voluptatem
                ad, velit, accusantium totam sequi? Dolore."
                secondarycardText="Segundo text dummy"
                smallText="Para mas detalles click aqui"
              />
            </div>
            <div className="col-sm-12 col-md-4 pt-2">
              <Card
                imageUrl={CV}
                alternativeTExt="Imagen de Card"
                title="TITULO DUMMY"
                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                maxime atque totam fugiat! Officiis eaque in distinctio totam beatae
                neque est corrupti repudiandae numquam sed, labore laboriosam nihil,
                nesciunt facilis. Incidunt iste animi dolores explicabo cumque
                repellat ex nostrum excepturi quia aliquam quam eveniet omnis quo
                nam expedita, recusandae impedit libero corporis ipsam voluptatem
                ad, velit, accusantium totam sequi? Dolore."
                secondarycardText="Segundo text dummy"
                smallText="Para mas detalles click aqui"
              />
            </div>
            <div className="col-sm-12 col-md-4 pt-2">
              <Card
                imageUrl={CV}
                alternativeTExt="Imagen de Card"
                title="TITULO DUMMY"
                cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                maxime atque totam fugiat! Officiis eaque in distinctio totam beatae
                neque est corrupti repudiandae numquam sed, labore laboriosam nihil,
                nesciunt facilis. Incidunt iste animi dolores explicabo cumque
                repellat ex nostrum excepturi quia aliquam quam eveniet omnis quo
                nam expedita, recusandae impedit libero corporis ipsam voluptatem
                ad, velit, accusantium totam sequi? Dolore."
                secondarycardText="Segundo text dummy"
                smallText="Para mas detalles click aqui"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
