import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery-1.jpg',
      alt: 'Modern Dental Office',
      title: 'State-of-the-Art Facility',
      description: 'Equipped with the latest technology, our office ensures optimal care for our patients.'
    },
    {
      id: 2,
      src: '/images/gallery-2.jpg',
      alt: 'Dental Equipment',
      title: 'Advanced Technology',
      description: 'We use cutting-edge dental equipment to provide precise and comfortable treatments.'
    },
    {
      id: 3,
      src: '/images/gallery-3.jpg',
      alt: 'Dental Team',
      title: 'Expert Dental Team',
      description: 'Our experienced team of dental professionals is dedicated to providing exceptional care.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Regular Patient',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      text: 'The wisdom teeth removal process was smooth and painless. The team was incredibly professional and made me feel comfortable throughout the entire procedure.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'New Patient',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      text: 'I love how easy it is to access my digital receipts for insurance claims. The patient portal is user-friendly and saves me so much time.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Long-term Patient',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'The routine cleaning service is exceptional. The staff is friendly, and they always make sure I\'m comfortable during my visits.',
      rating: 4.5
    }
  ];

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to A&A Dentistry</h1>
            <p className="lead mb-4">
              Experience exceptional dental care in a modern, comfortable environment.
              Our team of professionals is dedicated to your oral health.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/book-appointment" className="btn btn-primary">
                Book Now
              </Link>
              <Link to="/services" className="btn btn-outline-light">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-5 bg-light w-100">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="text-primary mb-3">
                    <i className="bi bi-calendar-check display-4"></i>
                  </div>
                  <h3 className="h5 mb-3">Quick Booking</h3>
                  <p className="text-muted mb-4">
                    Book your routine cleaning appointment in minutes. 
                    Perfect for busy professionals during lunch breaks.
                  </p>
                  <Link to="/book-appointment" className="btn btn-outline-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="text-primary mb-3">
                    <i className="bi bi-file-earmark-text display-4"></i>
                  </div>
                  <h3 className="h5 mb-3">Digital Receipts</h3>
                  <p className="text-muted mb-4">
                    Access your digital receipts instantly for insurance claims. 
                    No more paper receipts to keep track of.
                  </p>
                  <Link to="/patient-portal" className="btn btn-outline-primary">
                    View Receipts
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="text-primary mb-3">
                    <i className="bi bi-chat-square-text display-4"></i>
                  </div>
                  <h3 className="h5 mb-3">Free Consultation</h3>
                  <p className="text-muted mb-4">
                    Get a detailed consultation for procedures like wisdom teeth removal. 
                    Understand your options and costs upfront.
                  </p>
                  <Link to="/services" className="btn btn-outline-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5 w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold mb-4">Our Modern Facility</h2>
              <p className="lead text-muted mb-4">
                Take a look at our state-of-the-art dental facility, designed with your comfort and care in mind.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <button 
                  className="btn btn-outline-primary rounded-circle"
                  onClick={() => setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button 
                  className="btn btn-outline-primary rounded-circle"
                  onClick={() => setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="position-relative">
                <div className="card border-0 shadow-lg">
                  <img
                    src={galleryImages[currentImage].src}
                    alt={galleryImages[currentImage].alt}
                    className="card-img-top rounded-3"
                    style={{ height: '400px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/placeholder.jpg';
                    }}
                  />
                  <div className="card-body bg-white p-4">
                    <h5 className="card-title mb-2">{galleryImages[currentImage].title}</h5>
                    <p className="card-text text-muted mb-0">{galleryImages[currentImage].description}</p>
                  </div>
                </div>
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                  <div className="d-flex gap-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        className={`btn btn-sm rounded-circle ${
                          currentImage === index ? 'btn-primary' : 'btn-outline-primary'
                        }`}
                        onClick={() => setCurrentImage(index)}
                        style={{ width: '10px', height: '10px', padding: 0 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light w-100">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose A&A Dentistry?</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="text-center">
                <i className="bi bi-clock display-4 text-primary mb-3"></i>
                <h4 className="h5">Flexible Hours</h4>
                <p className="text-muted">Early morning and evening appointments available</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <i className="bi bi-shield-check display-4 text-primary mb-3"></i>
                <h4 className="h5">Modern Technology</h4>
                <p className="text-muted">State-of-the-art equipment and techniques</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <i className="bi bi-people display-4 text-primary mb-3"></i>
                <h4 className="h5">Expert Team</h4>
                <p className="text-muted">Highly qualified and experienced professionals</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <i className="bi bi-heart display-4 text-primary mb-3"></i>
                <h4 className="h5">Patient-Focused</h4>
                <p className="text-muted">Personalized care and attention to detail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pt-3 pb-5 bg-light w-100">
        <div className="container">
          <h2 className="text-center mb-5">What Our Patients Say</h2>
          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <div>
                        <h5 className="card-title mb-1">{testimonial.name}</h5>
                        <p className="text-muted small mb-0">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="card-text">{testimonial.text}</p>
                    <div className="text-warning mt-3">
                      {[...Array(5)].map((_, index) => (
                        <i 
                          key={index} 
                          className={`bi ${index < Math.floor(testimonial.rating) ? 'bi-star-fill' : 
                            index < testimonial.rating ? 'bi-star-half' : 'bi-star'}`}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-6 fw-bold mb-4">Ready to Transform Your Smile?</h2>
              <p className="lead text-muted mb-4">
                Book your appointment today and experience the difference of modern dental care.
              </p>
              <Link to="/book-appointment" className="btn btn-primary btn-lg px-5">
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
