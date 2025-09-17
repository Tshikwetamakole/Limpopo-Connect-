import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Events = () => {
  const { isAuthenticated, user } = useAuth();
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Community Market Day',
      date: '2025-09-20',
      time: '09:00',
      location: 'Polokwane Central Market',
      description: 'Join us for a vibrant community market featuring local artisans, food vendors, and entertainment.',
      organizer: 'Polokwane Community Council'
    },
    {
      id: 2,
      title: 'Youth Networking Mixer',
      date: '2025-09-25',
      time: '18:00',
      location: 'Tzaneen Community Center',
      description: 'A networking event for young professionals to connect, share ideas, and build lasting relationships.',
      organizer: 'Limpopo Youth Network'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    organizer: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: events.length + 1,
      ...formData,
      organizer: user.name
    };
    setEvents(prev => [...prev, newEvent]);
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      organizer: ''
    });
    setShowForm(false);
  };

  return (
    <div>
      <div className="page-container">
        <h1 className="page-title">Community Events</h1>
        <p className="page-subtitle">
          Discover and create events in your community. Connect with fellow residents and build lasting relationships.
        </p>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {isAuthenticated ? (
            <button
              className="btn"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancel' : 'Create New Event'}
            </button>
          ) : (
            <div style={{
              background: '#fff3cd',
              color: '#856404',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #ffeaa7'
            }}>
              <strong>Login Required:</strong> Please login to create community events and connect with others.
            </div>
          )}
        </div>

        {showForm && isAuthenticated && (
          <form className="event-form" onSubmit={handleSubmit}>
            <h3>Create New Event</h3>

            <div className="form-group">
              <label className="form-label">Event Title</label>
              <input
                type="text"
                name="title"
                className="form-input"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-input"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Time</label>
                <input
                  type="time"
                  name="time"
                  className="form-input"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="location"
                className="form-input"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Organizer</label>
              <input
                type="text"
                name="organizer"
                className="form-input"
                value={formData.organizer}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-textarea"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="btn">Create Event</button>
          </form>
        )}

        <div className="event-list">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <div className="event-date">
                📅 {new Date(event.date).toLocaleDateString()} at {event.time}
              </div>
              <div className="event-location">
                📍 {event.location}
              </div>
              <p>{event.description}</p>
              <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                Organized by: {event.organizer}
              </div>
              <button className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Attend Event
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;