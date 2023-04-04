import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";
import categoryImg05 from "../../../assets/images/category-05.png";
import categoryImg06 from "../../../assets/images/category-06.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Fish",
    imgUrl: categoryImg03,
    path:"/Fish",
  },
  {
    display: "Goat",
    imgUrl: categoryImg01,
    path:"/goat",
  },
  {
    display: "Chicken",
    imgUrl: categoryImg02,
    path:"/chicken",
  },
  {
    display: "Rice",
    imgUrl: categoryImg04,
    path:"/rice",
  },
  {
    display:"Oil",
    imgUrl: categoryImg05,
    path:"/oil",
  },
  {
    display:"Millets",
    imgUrl: categoryImg06,
    path:"/millets",
    
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="2" md="4" sm="6" xs="6" className="mb-4" key={index}>
           <Link  to={item.path}> <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6 className="categoryh1">{item.display}</h6>
            </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
