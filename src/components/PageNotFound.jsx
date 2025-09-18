import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center min-vh-70">
        <div className="col-md-8 text-center">
          <img
            src="/images/pnf2.jpg"
            alt="Page Not Found"
            className="img-fluid rounded shadow-lg mb-4"
            style={{ maxHeight: "300px" }}
          />

          <h1 className="display-4 fw-bold mb-3">404 - Page Not Found</h1>

          <p className="lead mb-4 text-secondary">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="btn btn-primary btn-lg rounded-pill shadow"
            style={{ transition: "0.3s" }}
          >
            ← Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
