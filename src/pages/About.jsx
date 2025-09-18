import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg p-4">
            <div className="row align-items-center">
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src="/images/about.jpg"
                  alt="About Us"
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: "250px" }}
                />
              </div>

              <div className="col-md-6">
                <h2 className="fw-bold mb-3">About Us</h2>
                <p className="text-muted mb-2">
                  At <strong>CodeNext</strong>, our journey started with a
                  simple idea — to make technology easy and meaningful for
                  everyone. We’re not just about writing code, but about
                  creating experiences that leave a lasting impact.
                </p>

                <p className="text-muted mb-2">
                  Whether it’s building a website, an app, or a complete digital
                  solution, we put our heart into every project. We focus on
                  understanding what truly matters to you and turn those ideas
                  into reality with creativity and precision.
                </p>

                <p className="text-muted mb-3">
                  For us, success isn’t just about delivering projects — it’s
                  about building trust, growing together, and making technology
                  work for people.
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

export default About;
