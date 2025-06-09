import { useState } from 'react';

function PatientPortal() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <h2 className="mb-3">
                  {isLogin ? 'Patient Portal Login' : 'Create Account'}
                </h2>
                <p className="text-muted">
                  {isLogin 
                    ? 'Access your appointments and digital receipts'
                    : 'Create an account to manage your dental care'}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {!isLogin && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    {isLogin ? 'Login' : 'Create Account'}
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <button
                  className="btn btn-link text-decoration-none"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin 
                    ? "Don't have an account? Create one"
                    : 'Already have an account? Login'}
                </button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="row mt-5 g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-primary mb-3">
                    <i className="bi bi-receipt display-4"></i>
                  </div>
                  <h3 className="h5 mb-3">Digital Receipts</h3>
                  <p className="text-muted mb-0">
                    Access all your dental receipts instantly for insurance claims and tax purposes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-primary mb-3">
                    <i className="bi bi-calendar-check display-4"></i>
                  </div>
                  <h3 className="h5 mb-3">Appointment History</h3>
                  <p className="text-muted mb-0">
                    View your past appointments and upcoming scheduled visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientPortal; 