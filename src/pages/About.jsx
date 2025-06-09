import React from 'react';

function About() {
  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center">
          <h1 className="display-5 fw-bold mb-4">About Us</h1>
          <p className="lead text-muted">
            At A&A Dentistry, we are dedicated to providing exceptional dental care in a welcoming and modern environment. Our team of experienced professionals is committed to your comfort, health, and satisfaction.
          </p>
        </div>
      </div>
      {/* Full-width grey background for Meet Our Team */}
      <div className="bg-light" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: 0 }}>
        <div className="container py-5 px-4">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img src="/images/gallery-3.jpg" alt="Our Team" className="img-fluid rounded shadow" onError={e => { e.target.src = '/images/placeholder.jpg'; }} />
            </div>
            <div className="col-md-6">
              <h2 className="h4 mb-3">Meet Our Team</h2>
              <p className="text-muted">
                Our dentists, hygienists, and support staff are passionate about helping you achieve your best smile. We combine years of expertise with a gentle approach, ensuring every visit is as comfortable as possible.
              </p>
              <ul className="list-unstyled">
                <li><strong>Dr. Emily Carter</strong> – Lead Dentist</li>
                <li><strong>Dr. Michael Patel</strong> – Associate Dentist</li>
                <li><strong>Sarah Kim</strong> – Dental Hygienist</li>
                <li><strong>Michael Tran</strong> – Office Manager</li>
                <li><strong>Alexander Lungu</strong> – Website Designer</li>
                <li><strong>Aws Falah</strong> – Website Designer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-10">
          <div className="card border-0 shadow-sm p-4">
            <h2 className="h4 mb-3">Our Mission & Values</h2>
            <p className="text-muted mb-4">
              Our mission is to deliver high-quality, patient-centered dental care using the latest technology and techniques. We believe in building lasting relationships with our patients based on trust, transparency, and respect.
            </p>
            <div className="row g-3">
              <div className="col-md-6 col-lg-6">
                <div className="card h-100 border-0 shadow-sm p-3 d-flex flex-row align-items-center gap-3">
                  <i className="bi bi-heart-fill text-primary fs-3"></i>
                  <span className="fw-semibold">Compassionate, personalized care for every patient</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="card h-100 border-0 shadow-sm p-3 d-flex flex-row align-items-center gap-3">
                  <i className="bi bi-lightbulb-fill text-warning fs-3"></i>
                  <span className="fw-semibold">Commitment to ongoing education and innovation</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="card h-100 border-0 shadow-sm p-3 d-flex flex-row align-items-center gap-3">
                  <i className="bi bi-shield-check text-success fs-3"></i>
                  <span className="fw-semibold">Focus on prevention and long-term oral health</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="card h-100 border-0 shadow-sm p-3 d-flex flex-row align-items-center gap-3">
                  <i className="bi bi-people-fill text-info fs-3"></i>
                  <span className="fw-semibold">Creating a safe, inclusive, and welcoming environment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
