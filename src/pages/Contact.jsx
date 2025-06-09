import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
      <div className="row">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
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
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4 p-md-5">
              <h2 className="mb-4">Office Information</h2>
              
              <div className="mb-4">
                <h3 className="h5 mb-3">Location</h3>
                <p className="mb-2">
                  <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                  123 Dental Street, Ottawa, ON K1A 0B2
                </p>
                <p className="text-muted">
                  Located in the heart of downtown, with easy access to public transportation.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="h5 mb-3">Hours</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-clock-fill text-primary me-2"></i>
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-clock-fill text-primary me-2"></i>
                    Saturday: 9:00 AM - 2:00 PM
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-clock-fill text-primary me-2"></i>
                    Sunday: Closed
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="h5 mb-3">Contact</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-telephone-fill text-primary me-2"></i>
                    (613) 555-0123
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-envelope-fill text-primary me-2"></i>
                    info@lungudentistry.com
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="h5 mb-3">Emergency Care</h3>
                <p className="mb-2">
                  <i className="bi bi-telephone-fill text-primary me-2"></i>
                  Emergency: (613) 555-0124
                </p>
                <p className="text-muted">
                  Available 24/7 for dental emergencies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
