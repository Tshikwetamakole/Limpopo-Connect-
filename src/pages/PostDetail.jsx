import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const mockPost = {
  id: 1,
  title: "Polokwane Programmers Meetup Recap",
  author: "Azania Mphahlele",
  authorBadge: "Community Leader",
  date: "2025-09-10",
  content: "We had an amazing time at the Polokwane Programmers Meetup! Thanks to everyone who joined and contributed to the lively discussions.",
  likes: 12
};
const mockComments = [
  { id: 1, author: "Thabo", text: "Great event! Learned a lot.", upvotes: 3 },
  { id: 2, author: "Lerato", text: "Looking forward to the next one.", upvotes: 2 }
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
  // Access the id if needed in future (currently mocked data)
  useParams();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
  const [error] = useState("");
    const [newComment, setNewComment] = useState("");
    const [commentLoading, setCommentLoading] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setPost(mockPost);
            setComments(mockComments);
            setLikeCount(mockPost.likes);
            setLoading(false);
        }, 900);
    }, []);

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        setCommentLoading(true);
        setTimeout(() => {
            setComments([
                ...comments,
                { id: comments.length + 1, author: "You", text: newComment, upvotes: 0 }
            ]);
            setNewComment("");
            setCommentLoading(false);
        }, 700);
    };

    const handleUpvote = (id) => {
        setComments(comments.map(c => c.id === id ? { ...c, upvotes: c.upvotes + 1 } : c));
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-brand-purple to-brand-dark">
                <span className="animate-spin inline-block w-10 h-10 border-4 border-t-transparent border-white rounded-full"></span>
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-brand-purple to-brand-dark">
                <div className="text-red-500 text-xl">{error}</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-brand-purple to-brand-dark px-4 py-8">
          <div className="bg-white/90 rounded-xl shadow-lg p-8 w-full max-w-2xl fade-in">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-brand-purple mb-2">{post.title}</h1>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-brand-dark font-medium">By {post.author}</span>
                <span className="px-2 py-1 bg-brand-purple text-white rounded-full text-xs animate-pulse">{post.authorBadge}</span>
                <span className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <p className="text-brand-dark mb-4">{post.content}</p>
              <button
                onClick={handleLike}
                className="py-2 px-4 bg-brand-red text-white rounded hover:bg-brand-dark transition card-shadow"
                aria-label="Like post"
              >
                ❤️ Like ({likeCount})
              </button>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-brand-dark mb-3">Comments</h2>
              <form onSubmit={handleCommentSubmit} className="mb-4 flex gap-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={e => setNewComment(e.target.value)}
                  className="flex-1 px-4 py-2 rounded border focus:ring-2 focus:ring-brand-purple border-gray-300"
                  placeholder="Add a comment..."
                  aria-label="Add a comment"
                  required
                  disabled={commentLoading}
                />
                <button
                  type="submit"
                  className="py-2 px-4 bg-brand-purple text-white rounded hover:bg-brand-dark transition card-shadow"
                  disabled={commentLoading}
                >
                  {commentLoading ? "Posting..." : "Post"}
                </button>
              </form>
              <ul className="space-y-4">
                {comments.map(comment => (
                  <li key={comment.id} className="bg-gray-100 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <span className="font-semibold text-brand-purple mr-2">{comment.author}</span>
                      <span className="text-brand-dark">{comment.text}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <button
                        onClick={() => handleUpvote(comment.id)}
                        className="px-2 py-1 bg-brand-red text-white rounded-full text-xs hover:bg-brand-dark transition"
                        aria-label={`Upvote comment by ${comment.author}`}
                      >
                        👍 {comment.upvotes}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
}

export default PostDetail;
