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
                  alt="Our Courses"
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: "250px" }}
                />
              </div>
              <div className="col-md-6">
                <h2 className="fw-bold mb-3">What We Provide</h2>
                <p className="text-muted mb-2">
                  At <strong>CodeNext</strong>, we focus on making programming
                  simple, structured, and hands-on. Our learning resources are
                  designed to help students and professionals master coding step
                  by step.
                </p>
                <p className="text-muted mb-2">
                  We offer beginner to advanced courses in languages like{" "}
                  <strong>Python, Java, JavaScript, C++, and more</strong>. Each
                  course includes projects, quizzes, and real-world examples to
                  strengthen practical skills.
                </p>
                <p className="text-muted mb-3">
                  Whether you're preparing for your first coding job, building
                  your portfolio, or sharpening your programming knowledge,
                  CodeNext provides everything you need to grow confidently.
                </p>
                <button className="btn btn-primary btn-lg fw-bold">
                  Explore Courses
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
