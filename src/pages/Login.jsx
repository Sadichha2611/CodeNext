import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Forgot password states
  const [showForgot, setShowForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetErrors, setResetErrors] = useState({});
  const [resetSuccess, setResetSuccess] = useState("");

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Please enter a valid email (e.g., name@example.com)";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ email, password });
      alert("Logged in!");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  // Forgot password validation
  const validateReset = () => {
    const newErrors = {};
    if (!resetEmail.trim()) {
      newErrors.resetEmail = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(resetEmail)) {
      newErrors.resetEmail =
        "Please enter a valid email (e.g., name@example.com)";
    }
    setResetErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    setResetSuccess("");
    if (validateReset()) {
      // Simulate sending reset link
      console.log("Request password reset for:", resetEmail);
      setResetSuccess(
        "If an account with that email exists, a password reset link has been sent."
      );
      setResetEmail("");
      setResetErrors({});
      // keep the forgot form visible so user sees the success message
    }
  };

  const handleToggleForgot = () => {
    setShowForgot((s) => !s);
    setResetSuccess("");
    setResetErrors({});
    setResetEmail("");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <div className="text-center mb-4">
              <img
                src="/images/login.jpg"
                alt="Login"
                className="img-fluid rounded mb-3"
                style={{ maxHeight: "150px" }}
              />
              <h2 className="fw-bold">Welcome Back</h2>
              <p className="text-muted">Login to continue to your account</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Login
              </button>
            </form>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <p className="mb-0 text-muted">
                Don't have an account?{" "}
                <Link to="/register" className="text-decoration-none">
                  Register here
                </Link>
              </p>

              {/* Forgot password toggle */}
              <button
                type="button"
                className="btn btn-link text-decoration-none"
                onClick={handleToggleForgot}
                aria-expanded={showForgot}
                aria-controls="forgotPasswordForm"
              >
                Forgot Password?
              </button>
            </div>

            {/* Inline Forgot Password form */}
            {showForgot && (
              <div
                id="forgotPasswordForm"
                className="mt-3 border rounded p-3 bg-light"
              >
                <h6 className="mb-2">Reset your password</h6>
                <form onSubmit={handleResetSubmit} noValidate>
                  <div className="mb-2">
                    <input
                      type="email"
                      className={`form-control ${
                        resetErrors.resetEmail ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                    />
                    {resetErrors.resetEmail && (
                      <div className="invalid-feedback">
                        {resetErrors.resetEmail}
                      </div>
                    )}
                  </div>

                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary btn-sm">
                      Send Reset Link
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={handleToggleForgot}
                    >
                      Cancel
                    </button>
                  </div>

                  {resetSuccess && (
                    <div className="alert alert-info mt-3 mb-0" role="alert">
                      {resetSuccess}
                    </div>
                  )}
                </form>
              </div>
            )}

            <p className="text-center text-muted mt-3"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
