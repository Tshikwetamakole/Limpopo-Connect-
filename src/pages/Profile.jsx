import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { isAuthenticated, user } = useAuth();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    location: '',
    bio: '',
    interests: [],
    avatar: null
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newInterest, setNewInterest] = useState('');

  // Initialize profile with authenticated user data
  useEffect(() => {
    if (isAuthenticated && user) {
      setProfile(prev => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email
      }));
    }
  }, [isAuthenticated, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddInterest = () => {
    if (newInterest.trim() && !profile.interests.includes(newInterest.trim())) {
      setProfile(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }));
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (interest) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically save to a backend
    alert('Profile saved successfully!');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase() || '?';
  };

  return (
    <div>
      <div className="page-container">
        <h1 className="page-title">Your Profile</h1>
        <p className="page-subtitle">
          Create and manage your community profile. Share your interests and connect with others.
        </p>

        {isAuthenticated ? (
          isEditing ? (
            <form className="card" onSubmit={handleSubmit}>
              <h3>Edit Profile</h3>

              <div className="profile-header">
                <div
                  className="profile-avatar"
                  style={{
                    width: '100px',
                    height: '100px',
                    fontSize: '2rem',
                    margin: '0 auto 1rem'
                  }}
                >
                  {getInitials(profile.name)}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  value={profile.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={profile.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Location</label>
                <select
                  name="location"
                  className="form-input"
                  value={profile.location}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your location</option>
                  <option value="Polokwane">Polokwane</option>
                  <option value="Tzaneen">Tzaneen</option>
                  <option value="Mokopane">Mokopane</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Bio</label>
                <textarea
                  name="bio"
                  className="form-textarea"
                  value={profile.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself..."
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Interests</label>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Add an interest"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    style={{ margin: 0 }}
                  />
                  <button type="button" className="btn btn-secondary" onClick={handleAddInterest}>
                    Add
                  </button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      style={{
                        background: '#ff6b6b',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      {interest}
                      <button
                        type="button"
                        onClick={() => handleRemoveInterest(interest)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'white',
                          cursor: 'pointer',
                          fontSize: '1.2rem',
                          lineHeight: 1,
                          padding: 0
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn">Save Profile</button>
            </form>
          ) : (
            <div>
              <div className="card">
                <div className="profile-header">
                  <div
                    className="profile-avatar"
                    style={{
                      width: '120px',
                      height: '120px',
                      fontSize: '3rem'
                    }}
                  >
                    {getInitials(profile.name)}
                  </div>
                  <h2>{profile.name || 'Your Name'}</h2>
                  <p style={{ color: '#666', margin: '0.5rem 0' }}>{profile.location}</p>
                  <button className="btn btn-secondary" onClick={handleEdit}>
                    Edit Profile
                  </button>
                </div>

                <div className="profile-info">
                  <h3>About</h3>
                  <p>{profile.bio || 'No bio added yet.'}</p>

                  <h3>Contact</h3>
                  <p>{profile.email}</p>

                  <h3>Interests</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {profile.interests.length > 0 ? (
                      profile.interests.map((interest, index) => (
                        <span
                          key={index}
                          style={{
                            background: '#f0f0f0',
                            color: '#333',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '15px',
                            fontSize: '0.9rem'
                          }}
                        >
                          {interest}
                        </span>
                      ))
                    ) : (
                      <p style={{ color: '#666', fontStyle: 'italic' }}>No interests added yet.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat-card">
                  <div className="stat-number">0</div>
                  <div className="stat-label">Events Attended</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">0</div>
                  <div className="stat-label">Connections</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">0</div>
                  <div className="stat-label">Posts</div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            background: '#fff3cd',
            color: '#856404',
            borderRadius: '8px',
            border: '1px solid #ffeaa7'
          }}>
            <h3>Login Required</h3>
            <p>Please login to view and edit your profile.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;