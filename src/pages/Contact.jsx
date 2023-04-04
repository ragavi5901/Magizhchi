import React from 'react'
import Helmet from "../components/Helmet/Helmet";
import { Container,Row,Col } from 'reactstrap';
import '../styles/contact.css';
import { FaHome,FaPhone,FaMailBulk } from 'react-icons/fa';
import { BsFillGeoAltFill } from "react-icons/bs";

function Contact() {
  
  return (
	<Helmet title="Contact">
    <div>
        <Container fluid className='bg-dark p-5 '>
  <Row className='p-5 text-white contactus'>

      <Col  xs={12} md={6} >
	<form action="">
				<div class="flex-rev">
					<input type="text" placeholder="Name" name="name" id="name" />
					<label for="name">Full Name</label>
				</div>
				<div class="flex-rev">
					<input type="email" placeholder="Email" name="email" id="email" />
					<label for="email">Your Email</label>
				</div>

				<div class="flex-rev">
		<textarea placeholder="I have an idea for a project...." name="message" id="message" />
 
					<label for="message">Email Message</label>
				</div>
				<button>Submit</button>
			</form>
	</Col>
  <Col  xs={12} md={6} >
  <div class="other">
			<div class="info box-shadow-hover pointer">
				
				<h2>UNITED STATES</h2>
        <h3>Fresh Fish:</h3>
       
				<div class="svg-wrap">
        <a href="#" ><BsFillGeoAltFill/>Magizhchi Foods LLC<br/>
		&ensp;&ensp;&ensp;&ensp;10089 Boswell Drive,<br/>&ensp;&ensp;&ensp;&ensp;Frisco, TX 75035</a><br/>
					<a href="#"><FaPhone />+1 972-776-7783</a><br/>
					<a href="#"><FaPhone />972-547-9874</a><br/>          
					<a href="#"><FaMailBulk />info@magizhchi.com</a><br/>
				</div>
				
				
				
			</div>
		</div>
  </Col>
  </Row>
  </Container>
      
    </div>
	</Helmet>
  )
}

export default Contact