import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">About CodeNext</h5>
            <p className="text-muted">
              We create modern digital solutions with creativity and precision.
              Building trust, growing together, and delivering value is our
              goal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className="text-white text-decoration-none footer-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white text-decoration-none footer-link"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-white text-decoration-none footer-link"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white text-decoration-none footer-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Extra Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="#!"
                  className="text-white text-decoration-none footer-link"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  className="text-white text-decoration-none footer-link"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  className="text-white text-decoration-none footer-link"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  className="text-white text-decoration-none footer-link"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-lg-4 col-md-6 mb-4 text-center text-md-start">
            <h5 className="text-uppercase fw-bold mb-3">Subscribe</h5>
            <p className="text-muted mb-2">
              Register for free and get updates.
            </p>
            <button className="btn btn-outline-light btn-sm rounded-pill shadow-sm footer-btn">
              Sign Up
            </button>
          </div>
        </div>

        <hr className="my-4" />

        {/* Social Icons */}
        <div className="text-center mb-3">
          {[
            "facebook-f",
            "twitter",
            "google",
            "instagram",
            "linkedin-in",
            "github",
          ].map((icon) => (
            <a
              href="#!"
              key={icon}
              className="btn btn-outline-light btn-floating m-1 rounded-circle shadow-sm social-icon"
            >
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>

        <div
          className="text-center py-3"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          © 2025 CodeNext. All rights reserved.
        </div>
      </div>

      {/* Inline CSS for hover effects */}
      <style>{`
        .footer-link:hover {
          color: #0d6efd;
          text-decoration: underline;
          transition: 0.3s;
        }
        .footer-btn:hover {
          background-color: #0d6efd;
          color: #fff;
          transition: 0.3s;
        }
        .social-icon:hover {
          background-color: #0d6efd;
          color: #fff;
          transform: translateY(-3px);
          transition: 0.3s;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
