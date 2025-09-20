import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brand-purple to-brand-dark">
      <AnimatedBackground />
      <div className="relative z-10 w-full max-w-3xl px-4 py-8 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center text-white mb-6 drop-shadow-lg">
          Welcome to Limpopo Connect
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hookups Card */}
          <button
            className="group bg-white/80 rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            onClick={() => navigate('/hookups')}
            aria-label="Go to Hookups"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/hookups-card.png`}
              alt="Find Hookups in Limpopo"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 w-full flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-brand-red mb-2">Hookups</h2>
              <p className="text-brand-dark text-center">
                Meet new friends, discover personal connections, and join the vibrant Limpopo Hookups forum!
              </p>
            </div>
          </button>
          {/* Community Card */}
          <button
            className="group bg-white/80 rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-purple"
            onClick={() => navigate('/community')}
            aria-label="Go to Community"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/community-card.jpg`}
              alt="Limpopo Community Activities"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 w-full flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-brand-purple mb-2">Community</h2>
              <p className="text-brand-dark text-center">
                Explore local groups, events, and activities across Limpopo. Connect, participate, and grow your network!
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
