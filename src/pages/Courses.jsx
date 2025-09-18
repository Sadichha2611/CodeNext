import React from "react";

const coursesData = [
  {
    id: 1,
    title: "HTML & CSS Basics",
    description:
      "Learn the foundation of web development with structured lessons and hands-on practice.",
    image: "/images/hc.jpg",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    description:
      "Master core JavaScript concepts to bring interactivity to your websites and apps.",
    image: "/images/js.jpg",
  },
  {
    id: 3,
    title: "React Fundamentals",
    description:
      "Dive into modern React to build powerful, scalable, and responsive web apps.",
    image: "/images/rea.jpg",
  },
  {
    id: 4,
    title: "Python for Beginners",
    description:
      "Learn Python from scratch and start building programs quickly.",
    image: "/images/py.jpg",
  },
  {
    id: 5,
    title: "Node.js Basics",
    description: "Understand backend development and build APIs with Node.js.",
    image: "/images/no.jpg",
  },
  {
    id: 6,
    title: "Data Structures & Algorithms",
    description: "Strengthen problem-solving skills for coding interviews.",
    image: "/images/d.jpg",
  },
  {
    id: 7,
    title: "Database Management",
    description: "Learn SQL and NoSQL databases for real-world applications.",
    image: "/images/dbms.jpg",
  },
  {
    id: 8,
    title: "Git & GitHub Essentials",
    description: "Master version control and collaborative workflows.",
    image: "/images/git.jpg",
  },
];

const headingColor = "#FF6B6B";
const buttonColor = "#4CAF50";

function Courses() {
  return (
    <div className="container my-5">
      <h1 className="fw-bold mb-3 text-center" style={{ color: headingColor }}>
        Our Courses
      </h1>
      <p className="text-muted text-center mb-5">
        Explore our range of programming courses designed for beginners and
        advanced learners. Build real-world skills step by step.
      </p>

      <div className="row g-4">
        {coursesData.slice(0, 8).map((course) => (
          <div key={course.id} className="col-md-4">
            <div
              className="card h-100 border-0 shadow-sm course-card"
              style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5
                  className="card-title fw-bold"
                  style={{ color: headingColor }}
                >
                  {course.title}
                </h5>
                <p className="card-text text-muted flex-grow-1">
                  {course.description}
                </p>
                <button
                  className="btn"
                  style={{
                    backgroundColor: buttonColor,
                    color: "#fff",
                    borderRadius: "25px",
                  }}
                >
                  View Course
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Last card for 'More Courses' */}
        <div className="col-md-4">
          <div
            className="card h-100 border-0 shadow-sm d-flex justify-content-center align-items-center text-center p-3 course-card"
            style={{
              transition: "transform 0.3s, box-shadow 0.3s",
              backgroundColor: "#f8f9fa",
            }}
          >
            <h5 className="fw-bold" style={{ color: headingColor }}>
              More Courses
            </h5>
            <p className="text-muted">
              Check out our full list of courses and resources to continue
              learning.
            </p>
            <button
              className="btn"
              style={{
                backgroundColor: buttonColor,
                color: "#fff",
                borderRadius: "25px",
              }}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
}

export default Courses;
