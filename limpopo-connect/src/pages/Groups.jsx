import React from 'react';

const groups = [
  {
    id: 1,
    name: 'Polokwane Programmers',
    members: 128,

    image: '/images/public faces.jpg',

    image: 'https://via.placeholder.com/400x200',

  },
  {
    id: 2,
    name: 'Tzaneen Book Club',
    members: 42,

    image: '/images/public faces.jpg',

    image: 'https://via.placeholder.com/400x200',

  },
  {
    id: 3,
    name: 'Mokopane Artists Collective',
    members: 78,

    image: '/images/public faces.jpg',

    image: 'https://via.placeholder.com/400x200',

  },
];

function Groups() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Groups</h1>
          <div className="mt-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {groups.map((group) => (
              <div key={group.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={group.image} alt={group.name} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{group.name}</p>
                      <p className="mt-3 text-base text-gray-500">{group.members} members</p>
                    </a>
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

export default Groups;
