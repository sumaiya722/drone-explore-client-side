import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="py-4 gradient">
        <Container>
          <Row>
            <Col md={6}>
              <ul className="list-unstyled">
                <li>
                  <span className="ms-1 fs-5"><i className="fas fa-map-marker-alt"></i> Dhaka,Bangladesh</span>
                </li>
                <li>
                  {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                  <span className="ms-1 fs-5">
                  <i className="fas fa-envelope"></i>  Official: drone12explore.com
                  </span>
                </li>
                <li>
                  {/* <FontAwesomeIcon icon={faPhone} /> */}
                  <span className="ms-1 fs-5">
                   <i className="fas fa-phone"></i>  Helpline: 017987533679(Available:10:00AM to 10.00PM)
                  </span>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/explore">Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/policy">Policy</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              {/* <div className="">
                <img
                  className="img-fluid"
                  src={payment}
                  alt="payment methods"
                />
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Reserved by Drone Explore company in
        2021
      </p>
    </div>
  );
};

export default Footer;