import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    // Fetch appointments from the smart contract
    // Example: const appointments = await LawyerAppointment.methods.getAllAppointments().call();
    // setAppointments(appointments);
  };

  const bookAppointment = async (e) => {
    e.preventDefault();
    // Call the smart contract function to book an appointment
    // Example: await LawyerAppointment.methods.bookappointment(firstName, lastName, age, gender, date).send({from: accounts[0]});
    // Reload appointments after booking
    // loadAppointments();
  };

  return (
    <div className="container">
      <h1>Lawyer Appointment</h1>
      <form onSubmit={bookAppointment}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required /><br />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required /><br />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(parseInt(e.target.value))} required /><br />
        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required /><br />
        <label htmlFor="date">Appointment Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required /><br />
        <button type="submit">Book Appointment</button>
      </form>
      <div id="appointments">
        <h2>Appointments</h2>
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-item">
            <p>Client ID: {appointment.client_id}</p>
            <p>Date: {new Date(appointment.appointmentDate * 1000).toLocaleDateString()}</p>
            <p>Cancelled: {appointment.isCancelled ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
