import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      id: 1,
      title: "Routine Cleaning",
      description: "Professional cleaning and examination to maintain your oral health.",
      duration: "45-60 minutes",
      price: "Starting at $150",
      icon: "bi-calendar-check",
      image: "/images/cleaning.jpg"
    },
    {
      id: 2,
      title: "Wisdom Teeth Removal",
      description: "Expert extraction of wisdom teeth with minimal discomfort.",
      duration: "1-2 hours",
      price: "Starting at $800",
      icon: "bi-heart-pulse",
      image: "/images/wisdom-teeth.jpg"
    },
    {
      id: 3,
      title: "Dental Checkup",
      description: "Comprehensive examination of your oral health.",
      duration: "30-45 minutes",
      price: "Starting at $100",
      icon: "bi-clipboard2-pulse",
      image: "/images/checkup.jpg"
    },
    {
      id: 4,
      title: "Teeth Whitening",
      description: "Professional whitening for a brighter smile.",
      duration: "1 hour",
      price: "Starting at $300",
      icon: "bi-stars",
      image: "/images/whitening.jpg"
    },
    {
      id: 5,
      title: "Dental Implants",
      description: "Permanent solution for missing teeth.",
      duration: "2-3 hours",
      price: "Starting at $2,500",
      icon: "bi-arrow-repeat",
      image: "/images/implants.jpg"
    },
    {
      id: 6,
      title: "Emergency Care",
      description: "Immediate attention for dental emergencies.",
      duration: "Varies",
      price: "Starting at $200",
      icon: "bi-phone-vibrate",
      image: "/images/emergency.jpg"
    }
  ];

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">Our Services</h1>
        <p className="lead text-muted">
          Comprehensive dental care for you and your family
        </p>
      </div>

      <div className="row g-4">
        {services.map((service) => (
          <div key={service.id} className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm service-card">
              <img 
                src={service.image} 
                className="card-img-top" 
                alt={service.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/placeholder.jpg';
                }}
              />
              <div className="card-body p-4">
                <div className="text-primary mb-3">
                  <i className={`bi ${service.icon} display-4`}></i>
                </div>
                <h3 className="h4 mb-3">{service.title}</h3>
                <p className="text-muted mb-3">{service.description}</p>
                <div className="d-flex justify-content-between text-muted mb-3">
                  <small><i className="bi bi-clock me-1"></i> {service.duration}</small>
                  <small><i className="bi bi-currency-dollar me-1"></i> {service.price}</small>
                </div>
                <Link to="/book-appointment" className="btn btn-outline-primary w-100">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Service Section */}
      <div className="bg-light py-5 mt-5" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', marginBottom: '-3rem' }}>
        <div className="container">
          {/* Featured Service Header */}
          <div className="row">
            <div className="col-12 text-center mb-0">
              <h2 className="display-6 fw-bold">Featured Service</h2>
              <p className="lead text-muted">Experience our most popular dental procedure</p>
            </div>
          </div>

          {/* Wisdom Teeth Section */}
          <div className="row mt-4">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img 
                      src="/images/wisdom-teeth-consultation.jpg" 
                      className="img-fluid h-100 object-fit-cover" 
                      alt="Wisdom Teeth Consultation"
                      onError={(e) => {
                        e.target.src = '/images/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body p-4 p-md-5">
                      <h2 className="text-center mb-4">Wisdom Teeth Removal</h2>
                      <div className="row g-4">
                        <div className="col-md-6">
                          <h4 className="h5 mb-3">What to Expect</h4>
                          <ul className="list-unstyled">
                            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Initial consultation and X-rays</li>
                            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Detailed treatment plan</li>
                            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Sedation options available</li>
                            <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Post-operative care instructions</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <h4 className="h5 mb-3">Cost Breakdown</h4>
                          <ul className="list-unstyled">
                            <li className="mb-2"><i className="bi bi-currency-dollar text-primary me-2"></i>Consultation: $100</li>
                            <li className="mb-2"><i className="bi bi-currency-dollar text-primary me-2"></i>X-rays: $150</li>
                            <li className="mb-2"><i className="bi bi-currency-dollar text-primary me-2"></i>Extraction: $800-1,200</li>
                            <li className="mb-2"><i className="bi bi-currency-dollar text-primary me-2"></i>Insurance coverage available</li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <Link to="/book-appointment" className="btn btn-primary btn-lg px-5">
                          Schedule Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services; 