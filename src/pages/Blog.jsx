import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { IoCalendarOutline, IoPersonOutline, IoTimeOutline } from 'react-icons/io5';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Hidden Gems in Polokwane: Local Secrets Revealed',
    excerpt: 'Discover the best-kept secrets of Polokwane that only locals know about. From authentic restaurants to scenic viewpoints, explore what makes this city special.',
    content: 'Polokwane, formerly known as Pietersburg, is a vibrant city with a rich history and culture. In this comprehensive guide, we reveal the top 10 hidden gems that make Polokwane truly special...',
    author: 'Sarah Nkosi',
    date: '2025-09-15',
    readTime: '5 min read',
    category: 'Local Guide',
    image: '/images/community-card.jpg',
    tags: ['Polokwane', 'Local Guide', 'Hidden Gems', 'Culture']
  },
  {
    id: 2,
    title: 'Community Events Calendar: September Highlights in Limpopo',
    excerpt: 'Stay updated with the most exciting community events happening across Limpopo Province this month. From cultural festivals to networking events.',
    content: 'September brings a wealth of exciting events to Limpopo Province. Here\'s your complete guide to the must-attend community events this month...',
    author: 'Mike van der Merwe',
    date: '2025-09-10',
    readTime: '3 min read',
    category: 'Events',
    image: '/images/public-faces.jpg',
    tags: ['Events', 'Community', 'Calendar', 'Limpopo']
  },
  {
    id: 3,
    title: 'Building Meaningful Connections: Dating Tips for Limpopo Residents',
    excerpt: 'Expert advice on finding genuine connections in the digital age. Learn how to navigate online dating safely and effectively in our local community.',
    content: 'In today\'s digital world, finding meaningful connections can be both exciting and challenging. Here are some expert tips tailored for Limpopo residents...',
    author: 'Dr. Thandi Mthembu',
    date: '2025-09-05',
    readTime: '7 min read',
    category: 'Relationships',
    image: '/images/lady-azania.jpg',
    tags: ['Dating', 'Relationships', 'Advice', 'Safety']
  },
  {
    id: 4,
    title: 'The Rise of Tech Startups in Tzaneen: Innovation in Action',
    excerpt: 'Explore how Tzaneen is becoming a hub for technology innovation. Meet the entrepreneurs driving change and creating opportunities in our province.',
    content: 'Tzaneen is quietly becoming a powerhouse for technology innovation in Limpopo Province. Discover the startups and entrepreneurs making waves...',
    author: 'James Khumalo',
    date: '2025-08-28',
    readTime: '6 min read',
    category: 'Business',
    image: '/images/hookups-card.png',
    tags: ['Technology', 'Startups', 'Innovation', 'Tzaneen']
  }
];

/**
 * Blog/News page component displaying latest articles and community content
 * @component
 * @returns {JSX.Element} The Blog page component
 */
function Blog() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <SEO
        title="Blog & News - Latest Updates from Limpopo Connect"
        description="Stay informed with the latest news, events, and insights from the Limpopo Province community. Read articles about local culture, events, and community connections."
        keywords="Limpopo news, community blog, local events, Polokwane updates, Tzaneen news, Mokopane articles, South African community"
        image="/images/community-card.jpg"
      />

      <div className={`min-h-screen ${currentTheme.gradient} ${currentTheme.text}`}>
        <main className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Limpopo Connect Blog</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay connected with the latest news, insights, and stories from our vibrant
                Limpopo Province community. Discover local events, cultural highlights, and
                meaningful connections happening across Polokwane, Tzaneen, and Mokopane.
              </p>
            </div>

            {/* Featured Post */}
            <div className="mb-12">
              <div className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <OptimizedImage
                      src={blogPosts[0].image}
                      alt={`Featured article: ${blogPosts[0].title}`}
                      className="h-48 w-full md:w-48 object-cover"
                      sizes="(max-width: 768px) 100vw, 192px"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs mr-2">
                        Featured
                      </span>
                      <span>{blogPosts[0].category}</span>
                    </div>
                    <Link to={`/blog/${blogPosts[0].id}`}>
                      <h2 className="text-2xl font-bold hover:text-blue-400 transition-colors mb-3">
                        {blogPosts[0].title}
                      </h2>
                    </Link>
                    <p className="text-gray-300 mb-4">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <IoPersonOutline className="mr-1" />
                      <span className="mr-4">{blogPosts[0].author}</span>
                      <IoCalendarOutline className="mr-1" />
                      <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString('en-ZA')}</span>
                      <IoTimeOutline className="mr-1" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg hover:bg-opacity-70 transition-all duration-300">
                  <OptimizedImage
                    src={post.image}
                    alt={`Blog post: ${post.title}`}
                    className="h-48 w-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-xl font-bold hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center">
                        <IoPersonOutline className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <IoCalendarOutline className="mr-1" />
                        <span>{new Date(post.date).toLocaleDateString('en-ZA')}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss important community updates,
                local events, and exclusive content from Limpopo Connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Email address for newsletter"
                />
                <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Explore by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Local Guide', 'Events', 'Relationships', 'Business'].map((category) => (
                  <Link
                    key={category}
                    to={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                    className="bg-gray-800 bg-opacity-50 hover:bg-opacity-70 p-4 rounded-lg text-center transition-all duration-300"
                  >
                    <h3 className="font-semibold">{category}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {blogPosts.filter(post => post.category === category).length} articles
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Blog;