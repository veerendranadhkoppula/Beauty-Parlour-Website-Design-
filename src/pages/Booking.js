import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [form, setForm] = useState({ name: '', email: '', service: '', date: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="booking">
      <h2>Book an Appointment</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Service:
          <select name="service" value={form.service} onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="hair">Hair Styling</option>
            <option value="makeup">Makeup</option>
            <option value="facial">Facial Treatments</option>
          </select>
        </label>
        <label>
          Date:
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Booking;
