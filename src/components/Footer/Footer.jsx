import React from "react";
import "animate.css"
function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 wow animate__animated animate__pulse">
      <div className="container text-center text-md-left">
        {/*Đây là một chỗ*/}
        <div className="row text-center text-md-left">
          <div className="col-sm-3 col-lg-3 mx-auto mt-3">
            {" "}
            {/* chinh day ne*/}
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              about this web
            </h5>
            <p>
              {/*This website is built for learning and practise how to code from basic to complex.*/}
              This web is for who are new to programming and the same time is
              also a place to review knowledge for those who have learned
              through programming.
            </p>
          </div>
          <div className="col-sm-2 col-lg-2  mx-auto mt-3">
            {/* chinh day ne*/}
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                HTML Bootstrap 5
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                CSS Introduction
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                JavaScript Examples
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                C++ for beginner
              </a>
            </p>
          </div>
          <div className="col-sm-3 col-lg-2 mx-auto mt-3">
            {" "}
            {/* chinh day ne*/}
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Useful Example
            </h5>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                HTML Examples
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                CSS Examples
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                JavaScript Examples
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                C++ Examples
              </a>
            </p>
          </div>
          <div className="col-sm-4 col-lg-3 mx-auto mt-3">
            {" "}
            {/* chinh day ne*/}
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact
            </h5>
            {/*
              <p>
              <i class="fa-solid fa-house mr-3"></i> Viet Nam,Da Nang,VKU
          </p>
          <p>
              <i class="fa-solid fa-envelope mr-3"></i> quandeptry@gmail.com
          </p>
          <p>
              <i class="fa-solid fa-phone mr-3"></i> 0123456789
          </p>
          <p>
              <i class="fa-solid fa-print mr-3"></i> +83 456789
          </p>
          */}
            <p>Viet Nam,Da Nang, VKU</p>
            <p>ahihi@gmail.com</p>
            <p>0123111111</p>
          </div>
          <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-sm-7 col-lg-5">
              {" "}
              {/* chinh day ne*/}
              <p>
                Copyright ©2024 All right reserved by:
                <a href="#" style={{ textDecoration: "none" }}>
                  <strong className="text-warning">IT Nexus</strong>
                  {/*===============================================*/}
                </a>
              </p>
            </div>
            <div className="col-sm-5 col-lg-7 ">
              {" "}
              {/* chinh day ne*/}
              <div className="text-center text-md-end">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: 23 }}
                    >
                      <i className="fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: 23 }}
                    >
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: 23 }}
                    >
                      <i className="fa-brands fa-google-plus-g" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: 23 }}
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="btn-floating btn-sm text-white"
                      style={{ fontSize: 23 }}
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
