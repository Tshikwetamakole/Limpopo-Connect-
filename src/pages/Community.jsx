import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const BASE = import.meta.env.BASE_URL || '/';

const events = [
  {
    id: 1,
    name: 'Polokwane Tech Meetup',
    date: '2025-10-01',
    location: 'Polokwane',
    description: 'A monthly meetup for tech enthusiasts and professionals in Polokwane. Network with fellow developers, entrepreneurs, and tech leaders in Limpopo Province.',
  image: `${BASE}images/community-card.jpg`,
    attendees: 45,
    category: 'Technology'
  },
  {
    id: 2,
    name: 'Tzaneen Cultural Festival',
    date: '2025-10-15',
    location: 'Tzaneen',
    description: 'Celebrate the rich cultural heritage of the Tzaneen region with traditional music, dance, food, and art exhibitions showcasing local talent.',
  image: `${BASE}images/public-faces.jpg`,
    attendees: 120,
    category: 'Culture'
  },
  {
    id: 3,
    name: 'Mokopane Hiking Trip',
    date: '2025-11-05',
    location: 'Mokopane',
    description: 'A scenic hiking trip through the beautiful landscapes of Mokopane. Perfect for nature lovers and outdoor enthusiasts in Limpopo.',
  image: `${BASE}images/lady-azania.jpg`,
    attendees: 25,
    category: 'Outdoor'
  },
];

/**
 * Renders the Community Hub page, which displays a list of local events.
 * The event data is currently hardcoded. The component uses the ThemeContext to apply themes.
 *
 * @component
 * @returns {JSX.Element} The Community Hub page component.
 */
function Community() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <SEO
        title="Community Events - Limpopo Connect"
        description="Discover local events and community activities in Limpopo Province. Join tech meetups in Polokwane, cultural festivals in Tzaneen, and outdoor adventures in Mokopane."
        keywords="Limpopo events, Polokwane meetups, Tzaneen festivals, Mokopane activities, community events, local gatherings, South African events"
  image={`${BASE}images/community-card.jpg`}
      />

      <div className={`min-h-screen ${currentTheme.gradient} ${currentTheme.text}`}>
        <main className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Community Hub</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover and participate in exciting community events across Limpopo Province.
                From technology meetups in Polokwane to cultural celebrations in Tzaneen and outdoor
                adventures in Mokopane, our community hub connects you with meaningful experiences
                and like-minded people in your local area.
              </p>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Whether you&apos;re interested in professional networking, cultural exploration, or outdoor
                recreation, Limpopo Connect brings together the diverse interests and passions of our
                province&apos;s vibrant community. Join events that matter to you and help build stronger
                connections across our beautiful region.
              </p>
            </div>

            <div className="mb-12 text-center">
              <Link
                to="/create-post"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Create Your Own Event
              </Link>
            </div>

            <div className="mt-6 grid gap-8 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
              {events.map((event) => (
                <div key={event.id} className={`flex flex-col rounded-lg shadow-lg overflow-hidden ${currentTheme.cardBg} transform hover:scale-105 transition-transform duration-300`}>
                  <div className="flex-shrink-0">
                    <OptimizedImage
                      className="h-48 w-full object-cover"
                      src={event.image}
                      alt={`${event.name} - ${event.category} event in ${event.location}, Limpopo Province`}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-red-500">{event.location}</p>
                        <span className="inline-block bg-gray-700 text-xs px-2 py-1 rounded-full">{event.category}</span>
                      </div>
                      <Link to={`/event/${event.id}`} className="block mt-2">
                        <p className="text-xl font-semibold hover:text-blue-400 transition-colors">{event.name}</p>
                        <p className="mt-3 text-base text-gray-300">{event.description}</p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <span>{event.attendees} attending</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{new Date(event.date).toLocaleDateString('en-ZA')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Section */}
            <div className="mt-16 text-center bg-gray-800 bg-opacity-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Join the Community?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Don&apos;t see an event that interests you? Create your own! Share your passions,
                organize meetups, and bring people together in your local Limpopo community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/groups"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Explore Groups
                </Link>
                <Link
                  to="/create-post"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Create Event
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Community;
