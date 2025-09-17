import React from 'react';

const badges = [
  { id: 1, name: 'First Post', description: 'You made your first post!', icon: '🏆' },
  { id: 2, name: 'Social Butterfly', description: 'You attended 5 events!', icon: '🦋' },
  { id: 3, name: 'Community Leader', description: 'You created a group with over 50 members!', icon: '👑' },
];

/**
 * Renders the Badges page, which displays a list of achievements or badges.
 * The badge data is currently hardcoded.
 *
 * @component
 * @returns {JSX.Element} The Badges page component.
 */
function Badges() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Badges</h1>
          <div className="mt-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {badges.map((badge) => (
              <div key={badge.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden items-center p-6 bg-white">
                <div className="text-6xl">{badge.icon}</div>
                <h2 className="mt-4 text-2xl font-bold">{badge.name}</h2>
                <p className="mt-2 text-center">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Badges;
