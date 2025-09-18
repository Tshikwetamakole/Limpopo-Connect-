import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import OptimizedImage from '../components/OptimizedImage';

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
      organizer: 'Polokwane Community Council',
      category: 'Community',
      attendees: 45,
      maxAttendees: 100,
      image: 'https://via.placeholder.com/400x250/4A5568/FFFFFF?text=Market+Day',
      tags: ['Market', 'Food', 'Artisans']
    },
    {
      id: 2,
      title: 'Youth Networking Mixer',
      date: '2025-09-25',
      time: '18:00',
      location: 'Tzaneen Community Center',
      description: 'A networking event for young professionals to connect, share ideas, and build lasting relationships.',
      organizer: 'Limpopo Youth Network',
      category: 'Networking',
      attendees: 28,
      maxAttendees: 50,
      image: 'https://via.placeholder.com/400x250/2D3748/FFFFFF?text=Youth+Mixer',
      tags: ['Networking', 'Youth', 'Professional']
    },
    {
      id: 3,
      title: 'Cultural Festival',
      date: '2025-10-05',
      time: '14:00',
      location: 'Mokopane Town Square',
      description: 'Celebrate Limpopo\'s rich cultural heritage with traditional music, dance, and cuisine.',
      organizer: 'Mokopane Cultural Society',
      category: 'Culture',
      attendees: 120,
      maxAttendees: 200,
      image: 'https://via.placeholder.com/400x250/1A202C/FFFFFF?text=Cultural+Festival',
      tags: ['Culture', 'Music', 'Dance', 'Food']
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    organizer: '',
    category: 'Community'
  });

  const categories = ['All', 'Community', 'Networking', 'Culture', 'Education', 'Sports'];

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
      organizer: user?.name || formData.organizer,
      attendees: 0,
      maxAttendees: 50,
      image: 'https://via.placeholder.com/400x250/4A5568/FFFFFF?text=New+Event',
      tags: [formData.category]
    };
    setEvents(prev => [...prev, newEvent]);
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      organizer: '',
      category: 'Community'
    });
    setShowForm(false);
  };

  const handleAttendEvent = (eventId) => {
    // In a real app, this would make an API call
    alert(`Event attendance confirmed for event ${eventId}! (This is a demo)`);
  };

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = !searchQuery ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Generate JSON-LD structured data for events
  const generateEventStructuredData = (event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "startDate": `${event.date}T${event.time}`,
    "location": {
      "@type": "Place",
      "name": event.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": event.location.split(',')[0].trim(),
        "addressRegion": "Limpopo",
        "addressCountry": "ZA"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": event.organizer
    },
    "description": event.description,
    "image": event.image,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled"
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(events.map(generateEventStructuredData))
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover and create events in your community. Connect with fellow residents and build lasting relationships.
          </p>
        </div>

        {/* Create Event CTA */}
        <div className="text-center mb-8">
          {isAuthenticated ? (
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancel' : '+ Create New Event'}
            </button>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
              <p className="text-yellow-800 mb-2">🔒 Login Required</p>
              <p className="text-yellow-700">Please login to create community events and connect with others.</p>
            </div>
          )}
        </div>

        {/* Create Event Form */}
        {showForm && isAuthenticated && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Event</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
                  <input
                    type="text"
                    name="title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    name="category"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    {categories.slice(1).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    name="description"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Create Event
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                role="article"
                aria-labelledby={`event-${event.id}-title`}
              >
                <div className="relative">
                  <OptimizedImage
                    src={event.image}
                    alt={`${event.title} event - ${event.description}`}
                    className="w-full h-48 object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {event.attendees}/{event.maxAttendees} attending
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    id={`event-${event.id}-title`}
                    className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors"
                  >
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">📅</span>
                      {new Date(event.date).toLocaleDateString('en-ZA')} at {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">📍</span>
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">👤</span>
                      Organized by {event.organizer}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">{event.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleAttendEvent(event.id)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                    aria-label={`Attend ${event.title}`}
                  >
                    Attend Event
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {searchQuery || selectedCategory !== 'All'
                  ? "Try adjusting your search or filter criteria."
                  : "No events are available right now."
                }
              </p>
            </div>
            {isAuthenticated && (
              <button
                onClick={() => setShowForm(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Create First Event
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;