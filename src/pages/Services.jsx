import React from "react";

function Services() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-10">
          <div className="card shadow-lg p-4">
            <div className="row align-items-center">
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src="/images/services.jpg"
                  alt="Our Services"
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: "250px" }}
                />
              </div>
              <div className="col-md-6">
                <h2 className="fw-bold mb-3">Our Services</h2>
                <p className="text-muted mb-2">
                  At <strong>CodeNext</strong>, we offer a wide range of
                  services to help you succeed in the digital world. Our team of
                  experts is dedicated to providing top-notch solutions tailored
                  to your needs.
                </p>
                <p className="text-muted mb-2">
                  Our services include web development, mobile app development,
                  digital marketing, and IT consulting. We use the latest
                  technologies and best practices to ensure your projects are
                  successful and deliver real value.
                </p>
                <p className="text-muted mb-3">
                  Whether you're a startup looking to establish your online
                  presence or an established business aiming to enhance your
                  digital strategy, we're here to help you every step of the
                  way.
                </p>
                <button className="btn btn-primary btn-lg fw-bold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
