import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const mockProfile = {
  avatar: `${import.meta.env.BASE_URL}images/lady-azania.jpg`,
  name: "Azania Mphahlele",
  email: "azania@limpopoconnect.co.za",
  bio: "Community builder, artist, and event organizer in Polokwane.",
  badges: ["Community Leader", "Event Organizer", "Top Contributor"],
  rank: 2,
};

const Profile = () => {
  const { isAuthenticated, user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", bio: "" });

  // Initialize profile with authenticated user data
  useEffect(() => {
    if (isAuthenticated && user) {
      setProfile((prev) => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email,
      }));
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProfile(mockProfile);
      setLoading(false);
    }, 900);
  }, []);

  const handleEdit = () => {
    setEditForm({ name: profile.name, bio: profile.bio });
    setEditMode(true);
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    setProfile({ ...profile, name: editForm.name, bio: editForm.bio });
    setEditMode(false);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-brand-purple to-brand-dark px-4">
      <div className="bg-white/90 rounded-xl shadow-lg p-8 w-full max-w-md fade-in">
        <div className="flex flex-col items-center mb-6">
          <img
            src={profile.avatar}
            alt={profile.name + " avatar"}
            className="w-28 h-28 rounded-full border-4 border-brand-purple mb-3 object-cover"
          />
          {editMode ? (
            <form onSubmit={handleEditSave} className="w-full">
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleEditChange}
                className="w-full px-4 py-2 rounded border mb-2 focus:ring-2 focus:ring-brand-purple border-gray-300"
                aria-label="Edit name"
                required
              />
              <textarea
                name="bio"
                value={editForm.bio}
                onChange={handleEditChange}
                className="w-full px-4 py-2 rounded border mb-2 focus:ring-2 focus:ring-brand-purple border-gray-300"
                aria-label="Edit bio"
                rows={3}
                required
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="py-2 px-4 bg-brand-purple text-white rounded hover:bg-brand-dark transition card-shadow"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="py-2 px-4 bg-gray-300 text-brand-dark rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-brand-purple mb-1">
                {profile.name}
              </h2>
              <p className="text-brand-dark text-sm mb-2">{profile.email}</p>
              <p className="text-brand-dark text-center mb-2">{profile.bio}</p>
              <button
                onClick={handleEdit}
                className="py-2 px-4 bg-brand-purple text-white rounded hover:bg-brand-dark transition card-shadow mb-2"
                aria-label="Edit profile"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-brand-dark mb-2">Badges</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {profile.badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-brand-purple text-white rounded-full shadow slide-up animate-pulse"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-2 text-center">
          <span className="text-brand-dark font-medium">Leaderboard Rank:</span>
          <span className="ml-2 px-3 py-1 bg-brand-red text-white rounded-full shadow">
            #{profile.rank}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;