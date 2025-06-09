import { useState } from 'react';

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [appointmentId, setAppointmentId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a random appointment ID
    const newAppointmentId = 'APT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setAppointmentId(newAppointmentId);
    setShowModal(true);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDownloadReceipt = () => {
    // Create receipt content
    const receiptContent = `
A&A Dentistry - Appointment Confirmation
----------------------------------------
Appointment ID: ${appointmentId}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Notes: ${formData.notes}
----------------------------------------
Thank you for choosing A&A Dentistry!
    `;

    // Create blob and download
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `appointment-${appointmentId}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center mb-4">Book Your Appointment</h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Full Name</label>
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
                  <div className="col-md-6">
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
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="service" className="form-label">Service</label>
                    <select
                      className="form-select"
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="cleaning">Routine Cleaning</option>
                      <option value="checkup">Dental Checkup</option>
                      <option value="whitening">Teeth Whitening</option>
                      <option value="wisdom">Wisdom Teeth Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="time" className="form-label">Time</label>
                    <select
                      className="form-select"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="9:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="notes" className="form-label">Additional Notes</label>
                    <textarea
                      className="form-control"
                      id="notes"
                      name="notes"
                      rows="3"
                      value={formData.notes}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-primary btn-lg px-5">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Appointment Confirmed!</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Your appointment has been successfully booked.</p>
                <p>Appointment ID: <strong>{appointmentId}</strong></p>
                <p>We've sent a confirmation email to {formData.email}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleDownloadReceipt}>
                  Download Receipt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default BookAppointment; 