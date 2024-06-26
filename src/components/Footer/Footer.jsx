import "animate.css";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer_cs bg-dark text-white pt-5 pb-4 wow animate__animated animate__fadeIn">
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
              Tutorial
            </h5>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Web Building
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Mobile Building
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Data Analytics
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Bankend
              </a>
            </p>
          </div>
          <div className="col-sm-3 col-lg-2 mx-auto mt-3">
            {" "}
            {/* chinh day ne*/}
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
            Popular Courses 
            </h5>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                HTML/CSS
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                JavaScript
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Java
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                C++
              </a>
            </p>
          </div>
          <div className="col-sm-4 col-lg-3 mx-auto mt-3">
            {" "}
            {/* chinh day ne*/}
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact
            </h5>
        
            <p>Address: Viet Nam,Da Nang, VKU</p>
            <p>Gmail: ahihi@gmail.com</p>
            <p>Phone: 0123111111</p>
          </div>
          <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-sm-7 col-lg-5">
              {" "}
              {/* chinh day ne*/}
              <p>
                Copyright ©2024 All right reserved by
                <a href="#" style={{ textDecoration: "none" }}>
                  <strong className="text-warning"> IT Nexus</strong>
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
