import React, { useRef, useEffect } from "react";

import { Container,Row,Col } from "reactstrap";
// import logo from "../../assets/images/res-logo.png";
import logo from "../../assets/images/magizhchi_logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Fish",
    path: "/Fish",
  },
  {
    display: "Goat",
    path: "/goat",
  },
  {
    display: "Chicken",
    path: "/chicken",
  },
  {
    display:"Rice",
    path:"/rice"
  },
  {
    display:"Oil",
    path:"/Oil"
  },
  {
    display:"Millets",
    path:"/millets"
  },
  {
    display: "Cart",
    path: "/Cart",
  },
  {
    display: "Contact",
    path: "/Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const toggleMenuclose = () => menuRef.current.classList.toggle("close_menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <Container fluid>
    <header className="header" ref={headerRef}>
     
        <div className="nav__wrapper d-flex align-items-center ">
        <div className="logo  ">
            <img src={logo} alt="logo"   />
           
          </div>  
          <Row>
     <Col>
       {/* ======= menu ======= */}
       <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
            <span className="mobile__menu" onClick={toggleMenuclose}>
            <i class="ri-close-fill end=0"></i>
            </span>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
      </Col>
      <Col></Col>
     </Row> 
         

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge ">
                {totalQuantity}
                </span>
            </span>
            
            <span className="user">
              <Link to="/">
              <i class="ri-heart-2-line"></i>
              </Link>
            </span>
            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>


            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
         
          </div>
        </div>
     
    </header>
    </Container>
  );
};

export default Header;