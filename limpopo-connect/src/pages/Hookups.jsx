import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    author: 'Anonymous',
    title: 'M4F - Looking for a fun night out',
    body: 'In town for a few days and looking for someone to show me around. Open to seeing where the night takes us.',

    avatar: '/images/Randy.jpg',

    avatar: 'https://via.placeholder.com/150',

  },
  {
    id: 2,
    author: 'JohnDoe',
    title: 'F4M - Dinner and a movie?',
    body: 'Tired of the usual scene. Looking for a genuine connection, even if it\'s just for one night.',

    avatar: '/images/lady azania.jpg',

    avatar: 'https://via.placeholder.com/150',

  },
  {
    id: 3,
    author: 'Anonymous',
    title: 'M4M - Gym buddy and more?',
    body: 'Looking for someone to work out with and maybe grab a drink afterwards. Let\'s see what happens.',

    avatar: '/images/Randy.jpg',

    avatar: 'https://via.placeholder.com/150',

  },
];

function Hookups() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Hookups Forum</h1>
            <Link to="/create-post" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Create Post
            </Link>
          </div>
          <div className="mt-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-lg shadow-md p-6 mb-6 flex">
                <img src={post.avatar} alt="avatar" className="w-16 h-16 rounded-full mr-6" />
                <div>
                  <Link to={`/post/${post.id}`}>
                    <h2 className="text-2xl font-bold">{post.title}</h2>
                  </Link>
                  <p className="text-sm text-gray-400">by {post.author}</p>
                  <p className="mt-4">{post.body}</p>
                  <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hookups;
