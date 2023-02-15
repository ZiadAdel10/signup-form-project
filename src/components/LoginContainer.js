import { Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./Login.css";

const LoginContainer = () => {
  return (
    <div className="wrapper  d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Sign In</h2>
        <form className="needs-validation">
          <div className="form-group was-validated mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" required></input>
            <div className="invalid-feedback">
              Please Enter your Email Address
            </div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" required></input>
            <div className="invalid-feedback">Please Enter your Password</div>
          </div>
          <div className="form-group form-check mb-2">
            <input type="checkbox" className="form-check-input"></input>
            <label htmlFor="checkbox" className="form-check-label">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;
