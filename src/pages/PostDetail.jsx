import React from 'react';
import { useParams } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const posts = [
    {
      id: 1,
      author: 'Anonymous',
      title: 'M4F - Looking for a fun night out',
      body: 'In town for a few days and looking for someone to show me around. Open to seeing where the night takes us.',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      author: 'JohnDoe',
      title: 'F4M - Dinner and a movie?',
      body: 'Tired of the usual scene. Looking for a genuine connection, even if it\'s just for one night.',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      author: 'Anonymous',
      title: 'M4M - Gym buddy and more?',
      body: 'Looking for someone to work out with and maybe grab a drink afterwards. Let\'s see what happens.',
      avatar: 'https://via.placeholder.com/150',
    },
  ];

/**
 * Renders the Post Detail page, which displays the full content of a single post.
 * It retrieves the post ID from the URL and displays the corresponding post details.
 * The post data is currently hardcoded.
 *
 * @component
 * @returns {JSX.Element} The Post Detail page component.
 */
function PostDetail() {
    const { id } = useParams();
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <main className="py-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-800 rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-6">
                            <OptimizedImage src={post.avatar} alt={`${post.author}'s profile avatar`} className="w-16 h-16 rounded-full mr-6" sizes="64px" />
                            <div>
                                <h1 className="text-3xl font-bold">{post.title}</h1>
                                <p className="text-sm text-gray-400">by {post.author}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-lg">{post.body}</p>
                        <div className="mt-6 flex space-x-4">
                            <button className="flex-grow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Message
                            </button>
                            <button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-bold py-2 px-4 rounded">
                                Report
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default PostDetail;
