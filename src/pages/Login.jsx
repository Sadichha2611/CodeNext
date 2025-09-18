import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Forgot password states
  const [showForgot, setShowForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetErrors, setResetErrors] = useState({});
  const [resetSuccess, setResetSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Please enter a valid email (e.g., name@example.com)";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 900));
      console.log({ email, password, remember });
      setEmail("");
      setPassword("");
      setErrors({});

      // Navigate to Courses page instead of Dashboard
      navigate("/courses");
    } catch (err) {
      setErrors({ form: "Login failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const validateReset = () => {
    const newErrors = {};
    if (!resetEmail.trim()) {
      newErrors.resetEmail = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(resetEmail)) {
      newErrors.resetEmail = "Please enter a valid email (e.g., name@example.com)";
    }
    setResetErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    setResetSuccess("");
    if (validateReset()) {
      console.log("Request password reset for:", resetEmail);
      setResetSuccess(
        "If an account with that email exists, we’ve sent a password reset link."
      );
      setResetEmail("");
      setResetErrors({});
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
              <p className="text-muted">Login to access available courses</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="email" className="visually-hidden">Email</label>
              <div className="mb-3">
                <input
                  id="email"
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <label htmlFor="password" className="visually-hidden">Password</label>
              <div className="mb-2 position-relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={!!errors.password}
                />
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary position-absolute"
                  style={{ right: 8, top: 6 }}
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    id="remember"
                    className="form-check-input"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="remember">Remember me</label>
                </div>
                <button type="button" className="btn btn-link text-decoration-none p-0" onClick={handleToggleForgot}>Forgot Password?</button>
              </div>

              {errors.form && <div className="alert alert-danger">{errors.form}</div>}

              <button type="submit" className="btn btn-primary w-100 fw-bold" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="d-flex justify-content-center mt-3">
              <p className="mb-0 text-muted">Don't have an account? <Link to="/register" className="text-decoration-none">Register here</Link></p>
            </div>

            {showForgot && (
              <div id="forgotPasswordForm" className="mt-3 border rounded p-3 bg-light">
                <h6 className="mb-2">Reset your password</h6>
                <form onSubmit={handleResetSubmit} noValidate>
                  <label htmlFor="resetEmail" className="visually-hidden">Reset Email</label>
                  <div className="mb-2">
                    <input
                      id="resetEmail"
                      type="email"
                      className={`form-control ${resetErrors.resetEmail ? "is-invalid" : ""}`}
                      placeholder="Enter your email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      aria-invalid={!!resetErrors.resetEmail}
                    />
                    {resetErrors.resetEmail && <div className="invalid-feedback">{resetErrors.resetEmail}</div>}
                  </div>
                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary btn-sm">Send Reset Link</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={handleToggleForgot}>Cancel</button>
                  </div>
                  {resetSuccess && <div className="alert alert-info mt-3 mb-0" role="alert">{resetSuccess}</div>}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;