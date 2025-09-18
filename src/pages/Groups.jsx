import { useState } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const groups = [
  {
    id: 1,
    name: 'Polokwane Programmers',
    members: 128,
    image: 'https://via.placeholder.com/400x200/4A5568/FFFFFF?text=Polokwane+Programmers',
    description: 'Monthly meetups for developers, learning sessions, and networking opportunities.',
    category: 'Technology',
    location: 'Polokwane',
    isJoined: false,
  },
  {
    id: 2,
    name: 'Tzaneen Book Club',
    members: 42,
    image: 'https://via.placeholder.com/400x200/2D3748/FFFFFF?text=Tzaneen+Book+Club',
    description: 'Discussing literature, sharing recommendations, and building a reading community.',
    category: 'Education',
    location: 'Tzaneen',
    isJoined: true,
  },
  {
    id: 3,
    name: 'Mokopane Artists Collective',
    members: 78,
    image: 'https://via.placeholder.com/400x200/1A202C/FFFFFF?text=Mokopane+Artists',
    description: 'Creative minds coming together to share art, collaborate, and inspire each other.',
    category: 'Arts',
    location: 'Mokopane',
    isJoined: false,
  },
];

/**
 * Renders the Groups page, which displays a list of available groups.
 * The group data is currently hardcoded.
 *
 * @component
 * @returns {JSX.Element} The Groups page component.
 */
function Groups() {
  const [filteredGroups, setFilteredGroups] = useState(groups);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Technology', 'Education', 'Arts', 'Sports', 'Business'];

  const handleJoinGroup = (groupId) => {
    // In a real app, this would make an API call
    console.log(`Joining group ${groupId}`);
    // For demo purposes, we'll just show an alert
    alert('Group joined successfully! (This is a demo)');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    let filtered = groups;

    if (query) {
      filtered = filtered.filter(group =>
        group.name.toLowerCase().includes(query.toLowerCase()) ||
        group.description.toLowerCase().includes(query.toLowerCase()) ||
        group.location.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(group => group.category === selectedCategory);
    }

    setFilteredGroups(filtered);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    let filtered = groups;

    if (category !== 'All') {
      filtered = filtered.filter(group => group.category === category);
    }

    if (searchQuery) {
      filtered = filtered.filter(group =>
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredGroups(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Groups</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join local groups, connect with like-minded people, and build meaningful relationships
            in your Limpopo community.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search groups..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Groups Grid */}
        {filteredGroups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredGroups.map((group) => (
              <article
                key={group.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                role="group"
                aria-labelledby={`group-${group.id}-title`}
              >
                <div className="relative">
                  <OptimizedImage
                    className="w-full h-48 object-cover"
                    src={group.image}
                    alt={`${group.name} group photo - ${group.description}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {group.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      id={`group-${group.id}-title`}
                      className="text-xl font-bold text-gray-900 hover:text-red-600 transition-colors"
                    >
                      <Link to={`/groups/${group.id}`} className="hover:underline">
                        {group.name}
                      </Link>
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{group.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      👥 {group.members} members
                    </span>
                    <span className="flex items-center">
                      📍 {group.location}
                    </span>
                  </div>

                  <button
                    onClick={() => handleJoinGroup(group.id)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                      group.isJoined
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                    aria-label={group.isJoined ? `Leave ${group.name}` : `Join ${group.name}`}
                  >
                    {group.isJoined ? '✓ Joined' : 'Join Group'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No groups found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {searchQuery || selectedCategory !== 'All'
                  ? "Try adjusting your search or filter criteria."
                  : "No groups are available right now."
                }
              </p>
            </div>
            <Link
              to="/create-group"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Create New Group
            </Link>
          </div>
        )}

        {/* Create Group CTA */}
        <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Start Your Own Group</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Have a passion or interest you&apos;d like to share? Create a group and bring together
            like-minded people from across Limpopo.
          </p>
          <Link
            to="/create-group"
            className="bg-white text-red-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Create Group
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Groups;
