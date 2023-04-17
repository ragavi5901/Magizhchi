import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/all-data/products.js";


import foodCategoryImg01 from "../assets/images/category-01.png";
import foodCategoryImg02 from "../assets/images/category-02.png";
import foodCategoryImg03 from "../assets/images/category-03.png";
import foodCategoryImg04 from "../assets/images/category-04.png";
import foodCategoryImg05 from "../assets/images/category-05.png";
import foodCategoryImg06 from "../assets/images/category-06.png";
import fish_banner from "../assets/images/fish_banner.jpg";
import second_banner from "../assets/images/meat_banner.jpg";
import third_banner from "../assets/images/third_banner.jpg";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
// import Fish from "./Fish.jsx";

const featureData = [
  {
    title: "Quick Action",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Prompt Delivery",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Happy Kitchen Delicious Taste ",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
 

  const [hotchicken, setHotchicken] = useState([]);

  useEffect(() => {
    const filteredchicken = products.filter((item) => item.category === "chicken");
    const slicechicken = filteredchicken.slice(0, 4);
    setHotchicken(slicechicken);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "Fish") {
      const filteredProducts = products.filter(
        (item) => item.category === "Fish"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "Goat") {
      const filteredProducts = products.filter(
        (item) => item.category === "Goat"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "chicken") {
      const filteredProducts = products.filter(
        (item) => item.category === "chicken"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Rice") {
      const filteredProducts = products.filter(
        (item) => item.category === "Rice"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "Oil") {
      const filteredProducts = products.filter(
        (item) => item.category === "Oil"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "Millets") {
      const filteredProducts = products.filter(
        (item) => item.category === "Millets"
      );

      setAllProducts(filteredProducts);
    }
   
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
      <Carousel>
      <Carousel.Item>
        
        <img
          className="d-block w-100 "
          src={fish_banner}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={second_banner}
          alt="Second slide"
        />

   
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={third_banner}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
      </section>
      <section className="pt-0 pb-0">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy Order! Frustration-Free Collaboration! Only Farmers Brand!</h5>
                <h1 className="mb-4 hero__title">
                  <span>Fresh Fish </span> at your door <br /> 
                  
                </h1>

                <h5>
                Cold Pressed Oil to Cook Fresh Fish 
                </h5>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="/Cart">Order now </Link><i class="ri-arrow-right-s-line"></i>
                  </button>

                 
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    Free Delivery over $25
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0 pb-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center pt-3">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Please be relaxed</h2>
              <h2 className="feature__title">
                we <span>work for you </span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              Perfect Quality & Accurate Quantity 
              </p>
              {/* <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.
              </p> */}
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="ordernowall" className="pt-0">
        <Container >
          <Row>
            <Col lg="12" className="text-center p-0">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12" >
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Fish" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Fish")}
                >
                  <img src={foodCategoryImg03} alt="" />
                 Fish
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Goat" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Goat")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  GOAT
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "chicken" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("chicken")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  CHICKEN
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Rice" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Rice")}
                >
                  <img src={foodCategoryImg04} alt="" />
                 Rice
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Oil" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Oil")}
                >
                  <img src={foodCategoryImg05} alt="" />
                 Oil
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Millets" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Millets")}
                >
                  <img src={foodCategoryImg06} alt="" />
                  Millets
                </button>
              
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4 pt-3">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Deals</h2>
            </Col>

            {hotchicken.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4 pt-5">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
