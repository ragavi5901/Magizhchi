import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
// import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import * as yup from "yup";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import { registerUser} from "../features/user/userSlice";


const signUpSchema = yup.object({
  firstname:yup.string().required("First name is requied"),
  lastname:yup.string().required("Last name is requied"),
  email:yup.string().email("Email should be valid").required("Email Address is Required"),
  mobile:yup.string().required("Mobile name is requied"),
  password:yup.string().required("Password name is requied"),
});


const Signup = () => {
 

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      email:"",
      mobile:"",
      password:"",
    },
    validationSchema: signUpSchema,
    onSubmit:(values) => {
      dispatch(registerUser(values));
    },
  })
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container className="login-wrapper  py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                <CustomInput
                 type="text" 
                 name="firstname" 
                 placeholder="First Name"  
            
                 onChange={formik.handleChange("firstname")}
                 onBlur={formik.handleBlur("firstname")}
                 value={formik.values.firstname}/> 
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <CustomInput
                 type="text" 
                 name="lastname" 
                 placeholder="Last Name"  
                
                 onChange={formik.handleChange("lastname")}
                 onBlur={formik.handleBlur("lastname")}
                 value={formik.values.lastname}/>
                <div className="error">
                  {
                    formik.touched.lastname && formik.errors.lastname
                  }
                </div>
                <CustomInput type="email" name="email" placeholder="Email"   
                 onChange={formik.handleChange("email")}
                 onBlur={formik.handleBlur("email")}
                 value={formik.values.email}/>
                <div className="error">
                  {
                    formik.touched.email && formik.errors.email
                  }
                </div>
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                 
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                  value={formik.values.mobile}/>
                 <div className="error">
                   {
                     formik.touched.mobile && formik.errors.mobile
                   }
                 </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  
                 onChange={formik.handleChange("password")}
                 onBlur={formik.handleBlur("password")}
                 value={formik.values.password}/>
                <div className="error">
                  {
                    formik.touched.password && formik.errors.password
                  }
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
