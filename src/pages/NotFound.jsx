import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-purple to-brand-dark px-4">
      <div className="bg-white/90 rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-brand-purple mb-4">Page Not Found</h1>
        <p className="text-brand-dark mb-6">The page you’re looking for doesn’t exist or has moved.</p>
        <Link to="/" className="inline-block py-2 px-4 bg-brand-purple text-white rounded hover:bg-brand-dark transition">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
