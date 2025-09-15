import React from 'react';

const leaderboard = [
  { id: 1, name: 'Jules', score: 1250, avatar: '/images/Randy.jpg' },
  { id: 2, name: 'JaneSmith', score: 1100, avatar: '/images/lady azania.jpg' },
  { id: 3, name: 'JohnDoe', score: 950, avatar: '/images/public faces.jpg' },
  { id: 4, name: 'Anonymous', score: 800, avatar: '/images/hookups-card.png' },
];

function Leaderboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Leaderboard</h1>
          <div className="mt-6 bg-white shadow-md rounded-lg">
            <ul>
              {leaderboard.map((user, index) => (
                <li key={user.id} className="flex items-center justify-between p-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold mr-4">{index + 1}</span>
                    <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                    <p className="ml-4 font-bold">{user.name}</p>
                  </div>
                  <p className="text-xl font-bold">{user.score} points</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Leaderboard;
