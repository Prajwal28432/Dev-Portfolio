import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Coding() {
  return (
    <div className="bg-gray-900 text-gray-100 p-10 ">
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              {/* <h1 className="text-4xl font-bold leading-tight mb-3">
                LET ME{" "}
                <span className="text-purple-600"> INTRODUCE </span> MYSELF
              </h1> */}
              <p className=" sm:text-xs   text-gray-100">
                🌟 Imagine a world where ideas come to life with just a few
                lines of code. That's my playground, and I'm here to bring
                innovation to reality.
                
                
                🔮 Together, we can turn ideas into reality, create user
                experiences that delight, and build applications that change
                the game.
              </p>
            </Col>
            {/* <Col md={4} className="myAvtar">
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid rounded-full"
                  alt="avatar"
                />
              </Tilt>
            </Col> */}
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              {/* <h1>FIND ME ON</h1> */}
              <br />
              <br />
              <i>
                ✨ Let's collaborate and transform your vision into a digital
                masterpiece. Connect with me, and let's embark on this coding
                adventure together!
              </i>
              <br />
              <br />

              <p>Feel free to <span className="text-purple-600">connect </span>with me</p>
              
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Coding;
