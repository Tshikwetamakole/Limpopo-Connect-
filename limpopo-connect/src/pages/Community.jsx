import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    name: 'Polokwane Tech Meetup',
    date: '2025-10-01',
    location: 'Polokwane',
    description: 'A monthly meetup for tech enthusiasts and professionals.',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    id: 2,
    name: 'Tzaneen Cultural Festival',
    date: '2025-10-15',
    location: 'Tzaneen',
    description: 'Celebrate the rich cultural heritage of the Tzaneen region.',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    id: 3,
    name: 'Mokopane Hiking Trip',
    date: '2025-11-05',
    location: 'Mokopane',
    description: 'A scenic hiking trip through the beautiful landscapes of Mokopane.',
    image: 'https://via.placeholder.com/400x200',
  },
];

function Community() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Community Hub</h1>
          <div className="mt-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {events.map((event) => (
              <div key={event.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={event.image} alt={event.name} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">{event.location}</p>
                    <Link to={`/event/${event.id}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{event.name}</p>
                      <p className="mt-3 text-base text-gray-500">{event.description}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{event.date}</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{event.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Community;
