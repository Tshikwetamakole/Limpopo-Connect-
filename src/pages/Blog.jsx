import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Blog = () => {
  const { isAuthenticated, user } = useAuth();
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Welcome to Limpopo Connect',
      author: 'Community Team',
      date: '2025-09-15',
      content: 'We\'re excited to launch Limpopo Connect, a platform dedicated to bringing our community together. Through this platform, residents of Polokwane, Tzaneen, Mokopane, and surrounding areas can connect, share ideas, and build stronger relationships.',
      category: 'Announcements'
    },
    {
      id: 2,
      title: 'Upcoming Community Events',
      author: 'Events Coordinator',
      date: '2025-09-16',
      content: 'Mark your calendars! We have an exciting lineup of community events coming up. From farmers\' markets to cultural festivals, there\'s something for everyone. Stay tuned for more details and registration information.',
      category: 'Events'
    },
    {
      id: 3,
      title: 'Local Business Spotlight: Traditional Crafts',
      author: 'Business Development',
      date: '2025-09-14',
      content: 'This month, we\'re highlighting the incredible traditional crafts from our local artisans. From handwoven baskets to intricate beadwork, our community is rich with talented creators preserving our cultural heritage.',
      category: 'Business'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'General'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      ...formData,
      author: user.name,
      date: new Date().toISOString().split('T')[0]
    };
    setPosts(prev => [newPost, ...prev]);
    setFormData({
      title: '',
      content: '',
      category: 'General'
    });
    setShowForm(false);
  };

  const categories = ['All', 'Announcements', 'Events', 'Business', 'General'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div>
      <div className="page-container">
        <h1 className="page-title">Community Blog</h1>
        <p className="page-subtitle">
          Stay updated with the latest news, announcements, and stories from our community.
        </p>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {isAuthenticated ? (
            <button
              className="btn"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancel' : 'Write New Post'}
            </button>
          ) : (
            <div style={{
              background: '#fff3cd',
              color: '#856404',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #ffeaa7'
            }}>
              <strong>Login Required:</strong> Please login to create blog posts and engage with the community.
            </div>
          )}
        </div>

        {showForm && isAuthenticated && (
          <form className="blog-form" onSubmit={handleSubmit}>
            <h3>Create New Blog Post</h3>

            <div className="form-group">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                className="form-input"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter post title"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                name="category"
                className="form-input"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="General">General</option>
                <option value="Announcements">Announcements</option>
                <option value="Events">Events</option>
                <option value="Business">Business</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Content</label>
              <textarea
                name="content"
                className="form-textarea"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Write your blog post content..."
                rows="8"
                required
              />
            </div>

            <button type="submit" className="btn">Publish Post</button>
          </form>
        )}

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {categories.map(category => (
              <button
                key={category}
                className={`btn ${selectedCategory === category ? '' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory(category)}
                style={{ minWidth: 'auto' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-post">
              <h2>{post.title}</h2>
              <div className="blog-meta">
                By {post.author} • {post.date} • Category: {post.category}
              </div>
              <div className="blog-content">
                {post.content}
              </div>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                <button className="btn btn-secondary" style={{ marginRight: '1rem' }}>
                  👍 Like
                </button>
                <button className="btn btn-secondary">
                  💬 Comment
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
            <h3>No posts found</h3>
            <p>Try selecting a different category or create the first post in this category!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;