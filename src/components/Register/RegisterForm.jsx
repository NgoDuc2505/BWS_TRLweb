import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../Footer/Footer";
import "./register.css";
import swal from "sweetalert";
function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPass: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required your first name!"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required your last name!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required your email !"),
      password: Yup.string()
        .required("Password can not be empty !")
        .max(8, "Max password character is 8"),
      confirmPass: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      swal("Done!", "You have been registered!", "success");
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="background-radial-gradient overflow-auto">
        <div className="container-fluid p-4">
          <div className="row">
            <div
              className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center"
              style={{ zIndex: 2 }}
            >
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
            <div className="col-md-6 position-relative">
              <div id="radius-shape-1" />
              <div className="card bg-glass" style={{ borderRadius: 20, marginTop:"5rem" }}>
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="form1" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="form1"
                        {...formik.getFieldProps("firstName")}
                      />
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="text-danger">
                          {formik.errors.firstName}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="form2" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="form2"
                        {...formik.getFieldProps("lastName")}
                      />
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="text-danger">
                          {formik.errors.lastName}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="form3" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="form3"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
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
                  <div className="mb-4">
                    <label htmlFor="form5" className="form-label">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="form5"
                      {...formik.getFieldProps("confirmPass")}
                    />
                    {formik.touched.confirmPass && formik.errors.confirmPass ? (
                      <div className="text-danger">
                        {formik.errors.confirmPass}
                      </div>
                    ) : null}
                  </div>
                  <div className="d-flex justify-content-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mb-4"
                    size="md"
                  >
                    Sign up
                  </button>
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <a
                      href="#"
                      className="btn btn-link mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <i className="fab fa-facebook-f" />
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
          </div>
        </div>
      </div>
      <Footer></Footer>
    </form>
  );
}

export default RegisterForm;
