import Footer from "../Footer/Footer";
import "./loginConverted.css";

function LoginConverted() {
  return (
    <>
      <div className="background-radial-gradient overflow-auto">
        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-md-6 position-relative  ">
              <div id="radius-shape-1" />
              <div id="radius-shape-2" />
              <div className="card my-5 bg-glass" style={{ borderRadius: 20 }}>
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col-md mb-4">
                      <label htmlFor="form1" className="form-label">
                        Username:
                      </label>
                      <input type="text" className="form-control" id="form1" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="form4" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="form4"
                    />
                  </div>
                  <div className="d-flex justify-content-center mb-4">
                    {/*
                                                      <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                              Subscribe to our newsletter
                          </label>
                      </div>
                      */}
                    <div>
                      <p>
                        Dont have account?
                        <a href="#" style={{ textDecoration: "none" }}>
                          {" "}
                          Sign up here!
                        </a>
                      </p>
                    </div>
                  </div>
                  <button className="btn btn-primary w-100 mb-4" size="md">
                    login
                  </button>
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <a
                      href="#"
                      className="btn btn-link mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <i className="fa-brands fa-facebook" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-link mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-link mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <i className="fab fa-google" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-link mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <i className="fab fa-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center">
              <h1
                className="my-5 display-3 fw-bold ls-tight px-3"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>
          </div>
        </div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </div>
      <Footer></Footer>
    </>
  );
}

export default LoginConverted;
