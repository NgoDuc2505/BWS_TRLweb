import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../Footer/Footer";
import "./loginConverted.css";
import swal from "sweetalert";

function LoginConverted() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required your email !"),
      password: Yup.string()
        .required("Password can not be empty !")
        .max(8, "Max password character is 8"),
    }),
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      swal("Done!", "You have been login!", "success");
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="background-radial-gradient overflow-auto">
        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-md-6 position-relative  ">
              <div id="radius-shape-1" />
              <div
                className="card bg-glass"
                style={{ borderRadius: 20, marginTop: "5rem" }}
              >
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col-md mb-4">
                      <label htmlFor="form1" className="form-label">
                        Email:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="form1"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                      ) : null}
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
                      {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-danger">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div className="d-flex justify-content-center mb-4">
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
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mb-4"
                    size="md"
                  >
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
    </form>
  );
}

export default LoginConverted;
