import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const Profile = () => {
  const { isAuthenticated, user } = useAuth();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    location: '',
    bio: '',
    interests: [],
    avatar: null,
    badges: ['Community Member', 'Event Attendee'],
    joinDate: '2025-01-15',
    connections: 24,
    eventsAttended: 8,
    groupsJoined: 3,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newInterest, setNewInterest] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(null);

  // Initialize profile with authenticated user data
  useEffect(() => {
    if (isAuthenticated && user) {
      setProfile(prev => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email,
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

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target.result);
        setProfile(prev => ({
          ...prev,
          avatar: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isAuthenticated ? (
          isEditing ? (
            /* Edit Profile Form */
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Profile</h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Avatar Section */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      {avatarPreview || profile.avatar ? (
                        <OptimizedImage
                          src={avatarPreview || profile.avatar}
                          alt="Profile avatar for user"
                          className="w-full h-full rounded-full object-cover"
                          sizes="128px"
                        />
                      ) : (
                        getInitials(profile.name)
                      )}
                    </div>
                    <label
                      htmlFor="avatar-upload"
                      className="absolute bottom-0 right-0 bg-red-600 text-white p-2 rounded-full cursor-pointer hover:bg-red-700 transition-colors"
                    >
                      📷
                    </label>
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Click the camera icon to upload a new avatar</p>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      value={profile.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      value={profile.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select
                      name="location"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
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

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      name="bio"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      value={profile.bio}
                      onChange={handleInputChange}
                      placeholder="Tell us about yourself..."
                      rows="4"
                    />
                  </div>
                </div>

                {/* Interests Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Add an interest"
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                    />
                    <button
                      type="button"
                      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                      onClick={handleAddInterest}
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {interest}
                        <button
                          type="button"
                          onClick={() => handleRemoveInterest(interest)}
                          className="text-red-600 hover:text-red-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Save Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* View Profile */
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      {profile.avatar ? (
                        <OptimizedImage
                          src={profile.avatar}
                          alt={`${profile.name}'s profile avatar`}
                          className="w-full h-full rounded-full object-cover"
                          sizes="128px"
                        />
                      ) : (
                        getInitials(profile.name)
                      )}
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.name || 'Your Name'}</h1>
                    <p className="text-gray-600 mb-2">{profile.location}</p>
                    <p className="text-sm text-gray-500 mb-4">Member since {new Date(profile.joinDate).toLocaleDateString('en-ZA')}</p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
                        onClick={handleEdit}
                      >
                        Edit Profile
                      </button>
                      <Link
                        to="/badges"
                        className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors text-center"
                      >
                        View Badges
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">{profile.eventsAttended}</div>
                  <div className="text-sm text-gray-600">Events Attended</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{profile.connections}</div>
                  <div className="text-sm text-gray-600">Connections</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{profile.groupsJoined}</div>
                  <div className="text-sm text-gray-600">Groups Joined</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{profile.badges.length}</div>
                  <div className="text-sm text-gray-600">Badges Earned</div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
                  <p className="text-gray-700">{profile.bio || 'No bio added yet. Tell others about yourself!'}</p>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Contact</h3>
                  <p className="text-gray-700">{profile.email}</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Interests</h2>
                  {profile.interests.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No interests added yet. Add some to connect with like-minded people!</p>
                  )}

                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        🏆 {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          /* Login Required */
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-yellow-800 mb-2">Login Required</h3>
            <p className="text-yellow-700 mb-4">Please login to view and edit your profile.</p>
            <Link
              to="/login"
              className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition-colors"
            >
              Login Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;