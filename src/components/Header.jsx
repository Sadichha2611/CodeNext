import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // To highlight active link

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            CodeNext
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <Link
                    className={`nav-link ${
                      location.pathname === link.path
                        ? "active fw-bold text-primary"
                        : "text-white"
                    }`}
                    to={link.path}
                    style={{ transition: "0.3s" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-flex flex-column flex-lg-row mt-3 mt-lg-0">
              <Link
                to="/login"
                className="btn btn-outline-primary rounded-pill me-2 mb-2 mb-lg-0 shadow-sm"
                style={{ transition: "0.3s" }}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-outline-success rounded-pill shadow-sm"
                style={{ transition: "0.3s" }}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
