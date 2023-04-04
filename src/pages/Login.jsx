import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
const history =useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const getuserArr =localStorage.getItem("userstore");
    console.log(getuserArr);

    const { email, password } = inpval;

    if (email === "") {
      alert("email field is required")
    } else if (!email.includes("@")) {
      alert("please enter valid email address")
    } else if (password === "") {
      alert("password field is required")
    } else if (password === "") {
      alert("password field is required")
    } else if (password.length < 5) {
      alert("password length greater five")
    }
    else {
      if(getuserArr && getuserArr.length){
          const userdata =JSON.parse(getuserArr);
          const userlogin =userdata.filter((el,k)=>{
            return el.email === email && el.password === password
          });
         if(userlogin.length === 0){
            alert("invalid Details")
         }else{
          console.log("success");
          localStorage.setItem("user_login",JSON.stringify(getuserArr))
          history("/details") 
         }
      }

    }

  };



  const [inpval, setInpval] = useState({
    email: "",
    password: ""


  })
  const [data, setData] = useState([]);
  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value 
      }
    })

  }

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"

                    ref={loginNameRef}
                    onChange={getdata}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"

                    ref={loginPasswordRef}
                    onChange={getdata}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              Don't have an account?
              <Link to="/register">
                <span style={{ color: "blue" }}> Create an account</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
