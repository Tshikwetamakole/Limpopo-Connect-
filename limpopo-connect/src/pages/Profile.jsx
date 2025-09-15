import React from 'react';
import { Link } from 'react-router-dom';

const user = {
  name: 'Jules',
  email: 'jules@example.com',

  avatar: '/images/Randy.jpg',

  avatar: 'https://via.placeholder.com/150',

  bio: 'Just a developer trying to make the world a better place.',
  activity: [
    { type: 'event', name: 'Polokwane Tech Meetup', date: '2025-10-01' },
    { type: 'post', title: 'Looking for a fun night out', date: '2025-09-15' },
  ],
};

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center">
              <img src={user.avatar} alt="avatar" className="w-24 h-24 rounded-full" />
              <div className="ml-6">
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <div className="ml-auto flex items-center space-x-4">
                <Link to="/settings" className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-sm font-medium py-2 px-4 rounded-lg">
                  Settings
                </Link>
                <button className="bg-red-600 text-white hover:bg-red-700 text-sm font-medium py-2 px-4 rounded-lg">
                  Block
                </button>
                <button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 text-sm font-medium py-2 px-4 rounded-lg">
                  Report
                </button>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold">Bio</h2>
              <p className="mt-2">{user.bio}</p>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Recent Activity</h2>
                <Link to="/badges" className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 text-sm font-medium py-2 px-4 rounded-lg">
                  View Badges
                </Link>
              </div>
              <ul className="mt-2">
                {user.activity.map((item, index) => (
                  <li key={index} className="border-t border-gray-200 py-4">
                    <p className="font-bold">{item.type === 'event' ? 'Attending:' : 'Posted:'} {item.name || item.title}</p>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
