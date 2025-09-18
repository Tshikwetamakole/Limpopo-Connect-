import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import OptimizedImage from '../components/OptimizedImage';

const events = [
    {
      id: 1,
      name: 'Polokwane Tech Meetup',
      date: '2025-10-01',
      location: 'Polokwane',
      description: 'A monthly meetup for tech enthusiasts and professionals.',
      image: '/images/community-card.jpg',
    },
    {
      id: 2,
      name: 'Tzaneen Cultural Festival',
      date: '2025-10-15',
      location: 'Tzaneen',
      description: 'Celebrate the rich cultural heritage of the Tzaneen region.',
      image: '/images/public-faces.jpg',
    },
    {
      id: 3,
      name: 'Mokopane Hiking Trip',
      date: '2025-11-05',
      location: 'Mokopane',
      description: 'A scenic hiking trip through the beautiful landscapes of Mokopane.',
      image: '/images/lady-azania.jpg',
    },
  ];

/**
 * Renders the Event Detail page, which displays information about a specific event.
 * It retrieves the event ID from the URL and displays the corresponding event details.
 * The event data is currently hardcoded. The component uses the ThemeContext to apply themes.
 *
 * @component
 * @returns {JSX.Element} The Event Detail page component.
 */
function EventDetail() {
  const { id } = useParams();
  const { currentTheme } = useContext(ThemeContext);
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <div className={`min-h-screen ${currentTheme.gradient} ${currentTheme.text} flex items-center justify-center`}>Event not found</div>;
  }

  return (
    <div className={`min-h-screen ${currentTheme.gradient} ${currentTheme.text}`}>
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-2">
              <div className="aspect-w-16 aspect-h-9">
                <OptimizedImage className="w-full object-cover rounded-lg shadow-lg" src={event.image} alt={`${event.name} event details`} sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:col-span-1">
              <h1 className="text-3xl font-bold">{event.name}</h1>
              <p className="mt-2 text-lg text-gray-300">{event.location}</p>
              <p className="mt-2 text-lg text-gray-300">{event.date}</p>
              <p className="mt-4 text-base text-gray-200">{event.description}</p>
              <button className={`mt-6 w-full ${currentTheme.button} ${currentTheme.buttonText} py-2 px-4 rounded-md`}>
                RSVP
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EventDetail;
