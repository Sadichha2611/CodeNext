import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email (e.g., name@example.com)";
    }

    // Mobile validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Contact form data:", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <div className="text-center mb-4">
              <img
                src="/images/contact.jpg"
                alt="Contact Us"
                className="img-fluid rounded mb-3"
                style={{ maxHeight: "150px" }}
              />
              <h2 className="fw-bold">Contact Us</h2>
              <p className="text-muted">We would love to hear from you!</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <input
                  type="text"
                  id="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  id="mobile"
                  className={`form-control ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.mobile && (
                  <div className="invalid-feedback">{errors.mobile}</div>
                )}
              </div>

              <div className="mb-4">
                <textarea
                  id="message"
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary fw-bold">
                  Send Message
                </button>
                <button
                  type="button"
                  className="btn btn-secondary fw-bold"
                  onClick={() => {
                    setFormData({
                      name: "",
                      email: "",
                      mobile: "",
                      message: "",
                    });
                    setErrors({});
                  }}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
