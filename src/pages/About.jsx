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
                  alt="About CodeNext"
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: "250px" }}
                />
              </div>

              <div className="col-md-6">
                <h2 className="fw-bold mb-3">About CodeNext</h2>
                <p className="text-muted mb-2">
                  At <strong>CodeNext</strong>, we believe learning to code
                  should be simple, practical, and exciting. Our platform is
                  designed to help learners of all levels build strong
                  programming skills through structured courses, hands-on
                  projects, and real-world examples. Whether you’re just
                  starting with the basics or exploring advanced topics, we
                  guide you every step of the way with clear, beginner-friendly
                  content.
                </p>

                <p className="text-muted mb-2">
                  From mastering the basics of{" "}
                  <strong>Python, JavaScript, and Java</strong> to exploring
                  advanced topics like <strong>React, Node.js,</strong> and{" "}
                  <strong>data analysis</strong>, our curated courses are
                  designed to help learners at every level — whether you’re a
                  complete beginner or preparing for your career in tech.
                </p>

                <button className="btn btn-primary btn-lg fw-bold">
                  Explore Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision, Mission, and What We Provide Section */}
      <div className="row text-center mt-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm p-4 border-0">
            <h4 className="fw-bold mb-3">🎯 Our Vision</h4>
            <p className="text-muted">
              To become a trusted learning hub where anyone, from any
              background, can gain the skills needed to succeed in the digital
              world.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm p-4 border-0">
            <h4 className="fw-bold mb-3">🚀 Our Mission</h4>
            <p className="text-muted">
              To make coding education accessible, project-based, and
              career-oriented, helping learners transform knowledge into real
              opportunities.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm p-4 border-0">
            <h4 className="fw-bold mb-3">📚 What We Provide</h4>
            <ul className="text-muted list-unstyled">
              <li>✔️ Beginner to Advanced Coding Courses</li>
              <li>✔️ Hands-on Projects & Assignments</li>
              <li>✔️ Mentorship & Career Guidance</li>
              <li>✔️ Access to Learning Resources</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
