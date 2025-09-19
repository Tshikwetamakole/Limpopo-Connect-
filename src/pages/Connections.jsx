import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { IoHeartOutline, IoChatbubbleOutline, IoPersonOutline } from 'react-icons/io5';

const posts = [
  {
    id: 1,
    author: 'Anonymous',
    title: 'M4F - Looking for a fun night out in Polokwane',
    body: 'Visiting Polokwane for business and looking for someone local to show me the best spots. Open to dinner, drinks, and seeing where the evening takes us. Must be respectful and genuine.',
    avatar: 'https://via.placeholder.com/150/4A5568/FFFFFF?text=A',
    location: 'Polokwane',
    age: 32,
    interests: ['Dining', 'Nightlife', 'Local Culture'],
    postedDate: '2025-09-15'
  },
  {
    id: 2,
    author: 'JohnDoe',
    title: 'F4M - Dinner and meaningful conversation in Tzaneen',
    body: 'Seeking someone for a genuine connection. Tired of superficial interactions. Looking for dinner, deep conversation, and possibly more. Value honesty, respect, and shared interests.',
    avatar: 'https://via.placeholder.com/150/2D3748/FFFFFF?text=J',
    location: 'Tzaneen',
    age: 28,
    interests: ['Fine Dining', 'Intellectual Conversations', 'Nature'],
    postedDate: '2025-09-14'
  },
  {
    id: 3,
    author: 'Anonymous',
    title: 'M4M - Fitness enthusiast seeking workout partner in Mokopane',
    body: 'Looking for a like-minded individual to hit the gym with and maybe grab healthy post-workout meals. Open to seeing if there\'s chemistry beyond fitness. Health-conscious and active lifestyle preferred.',
    avatar: 'https://via.placeholder.com/150/1A202C/FFFFFF?text=M',
    location: 'Mokopane',
    age: 30,
    interests: ['Fitness', 'Healthy Eating', 'Outdoor Activities'],
    postedDate: '2025-09-13'
  },
];

/**
 * Renders the Connections page, which displays a forum-style list of personal ads.
 * The post data is currently hardcoded.
 *
 * @component
 * @returns {JSX.Element} The Connections page component.
 */
function Connections() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <SEO
        title="Connections - Meaningful Relationships & Friendships | Limpopo Connect"
        description="Find meaningful connections and build lasting relationships in Limpopo Province. Browse personal ads from Polokwane, Tzaneen, and Mokopane residents seeking genuine connections."
        keywords="Limpopo connections, Polokwane relationships, Tzaneen friendships, Mokopane relationships, meaningful connections, South African dating, local singles"
  image={`${import.meta.env.BASE_URL}images/hookups-card.png`}
      />

      <div className={`min-h-screen ${currentTheme.gradient} ${currentTheme.text}`}>
        <main className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Connections Forum</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with like-minded individuals across Limpopo Province. Our platform
                facilitates genuine connections between respectful people seeking meaningful relationships,
                whether for friendship, romance, or shared interests.
              </p>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Browse personal ads from Polokwane, Tzaneen, and Mokopane. All interactions are
                conducted with respect for privacy and consent. Find your perfect connection in our
                vibrant community.
              </p>
            </div>

            <div className="mb-8 text-center">
              <Link
                to="/create-post"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Create Your Profile
              </Link>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {posts.map((post) => (
                <article key={post.id} className={`bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6 hover:bg-opacity-70 transition-all duration-300`}>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                      <OptimizedImage
                        src={post.avatar}
                        alt={`Profile avatar for ${post.author} - ${post.age} years old from ${post.location}`}
                        className="w-20 h-20 rounded-full border-2 border-red-500"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1">
                      <header>
                        <Link to={`/post/${post.id}`} className="block">
                          <h2 className="text-2xl font-bold hover:text-red-400 transition-colors mb-2">
                            {post.title}
                          </h2>
                        </Link>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center">
                            <IoPersonOutline className="mr-1" />
                            {post.author}
                          </span>
                          <span>{post.age} years old</span>
                          <span>{post.location}</span>
                          <span>Posted {new Date(post.postedDate).toLocaleDateString('en-ZA')}</span>
                        </div>
                      </header>

                      <p className="text-gray-300 mb-4 leading-relaxed">{post.body}</p>

                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Interests:</h3>
                        <div className="flex flex-wrap gap-2">
                          {post.interests.map((interest, index) => (
                            <span
                              key={index}
                              className="bg-red-600 bg-opacity-20 text-red-300 px-3 py-1 rounded-full text-xs"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button
                          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 flex items-center"
                          aria-label={`Send message to ${post.author}`}
                        >
                          <IoChatbubbleOutline className="mr-2" />
                          Message
                        </button>
                        <button
                          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 flex items-center"
                          aria-label={`Like post by ${post.author}`}
                        >
                          <IoHeartOutline className="mr-2" />
                          Like
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Safety Notice */}
            <div className="mt-12 bg-yellow-900 bg-opacity-20 border border-yellow-600 rounded-lg p-6">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Safety & Respect Guidelines</h2>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Always meet in public places for first meetings</li>
                <li>• Respect boundaries and obtain clear consent</li>
                <li>• Be honest about your intentions and situation</li>
                <li>• Report any suspicious or inappropriate behavior</li>
                <li>• Your privacy and safety are our top priorities</li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center bg-gray-800 bg-opacity-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Find Your Connection?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of Limpopo residents who have found meaningful connections through our platform.
                Create your profile today and start exploring compatible matches in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/create-post"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Create Profile
                </Link>
                <Link
                  to="/profile"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  View My Profile
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Connections;