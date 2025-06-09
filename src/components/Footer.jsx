import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mb-0">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h3 className="h5 mb-3">
              <span className="text-primary">A&A</span>
              <span> Dentistry</span>
            </h3>
            <p className="text-muted">
              Providing exceptional dental care with a focus on patient comfort and satisfaction.
            </p>
            <div className="social-links">
              <a href="#" className="text-light">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2">
            <h4 className="h6 mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-muted">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted">Services</Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-muted">Book Appointment</Link>
              </li>
              <li>
                <Link to="/patient-portal" className="text-muted">Patient Portal</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h4 className="h6 mb-3">Services</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/services" className="text-muted">Routine Cleaning</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted">Wisdom Teeth Removal</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted">Dental Implants</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted">Emergency Care</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h4 className="h6 mb-3">Contact Info</h4>
            <ul className="list-unstyled text-muted">
              <li>
                <i className="bi bi-geo-alt-fill me-2"></i>
                123 Dental Street, Ottawa, ON
              </li>
              <li>
                <i className="bi bi-telephone-fill me-2"></i>
                (613) 555-0123
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i>
                info@aadentistry.com
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row">
          <div className="col-md-4 text-center text-md-start">
            <p className="text-muted mb-0">
              © {new Date().getFullYear()} A&A Dentistry. All rights reserved.
            </p>
          </div>
          <div className="col-md-4 text-center d-flex align-items-center justify-content-center">
            <p className="text-muted mb-0" style={{ fontSize: '0.95em' }}>
              Website designed by Alexander Lungu and Asw Falah
            </p>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-muted">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <span className="text-muted">•</span>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-muted">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
