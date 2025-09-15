import React from 'react';
import { useParams } from 'react-router-dom';

const events = [
    {
      id: 1,
      name: 'Polokwane Tech Meetup',
      date: '2025-10-01',
      location: 'Polokwane',
      description: 'A monthly meetup for tech enthusiasts and professionals.',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 2,
      name: 'Tzaneen Cultural Festival',
      date: '2025-10-15',
      location: 'Tzaneen',
      description: 'Celebrate the rich cultural heritage of the Tzaneen region.',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 3,
      name: 'Mokopane Hiking Trip',
      date: '2025-11-05',
      location: 'Mokopane',
      description: 'A scenic hiking trip through the beautiful landscapes of Mokopane.',
      image: 'https://via.placeholder.com/800x400',
    },
  ];

function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-2">
              <div className="aspect-w-16 aspect-h-9">
                <img className="w-full object-cover rounded-lg" src={event.image} alt={event.name} />
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:col-span-1">
              <h1 className="text-3xl font-bold text-gray-900">{event.name}</h1>
              <p className="mt-2 text-lg text-gray-500">{event.location}</p>
              <p className="mt-2 text-lg text-gray-500">{event.date}</p>
              <p className="mt-4 text-base text-gray-700">{event.description}</p>
              <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
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
