import { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

/**
 * Renders the Settings page, which allows users to configure their privacy and notification preferences.
 *
 * @component
 * @returns {JSX.Element} The Settings page component.
 */
function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [notifications, setNotifications] = useState({
    email: true,
    push: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Valid email required.";
    if (form.password && form.password.length < 8) newErrors.password = "Password must be at least 8 characters.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleNotifChange = (e) => {
    setNotifications({ ...notifications, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 1200));
      setSuccess(true);
    } catch (err) {
      setErrors({ submit: "Update failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-brand-purple to-brand-dark">
      <form
        className="bg-white/90 rounded-xl shadow-lg p-8 w-full max-w-md fade-in"
        onSubmit={handleSubmit}
        autoComplete="off"
        aria-label="Settings form"
      >
        <h2 className="text-2xl font-bold text-brand-purple mb-6 text-center">Account Settings</h2>
        {success ? (
          <div className="text-green-600 text-center mb-4">Profile updated successfully!</div>
        ) : (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block text-brand-dark font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded border focus:ring-2 focus:ring-brand-purple ${errors.name ? "border-red-500" : "border-gray-300"}`}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                required
              />
              {errors.name && <div id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-brand-dark font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded border focus:ring-2 focus:ring-brand-purple ${errors.email ? "border-red-500" : "border-gray-300"}`}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                required
                autoComplete="off"
              />
              {errors.email && <div id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-brand-dark font-medium mb-1">New Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded border focus:ring-2 focus:ring-brand-purple ${errors.password ? "border-red-500" : "border-gray-300"}`}
                aria-invalid={!!errors.password}
                aria-describedby="password-error"
                autoComplete="new-password"
              />
              {errors.password && <div id="password-error" className="text-red-500 text-sm mt-1">{errors.password}</div>}
            </div>
            <div className="mb-6">
              <label className="block text-brand-dark font-medium mb-2">Notification Preferences</label>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="emailNotif"
                  name="email"
                  checked={notifications.email}
                  onChange={handleNotifChange}
                  className="mr-2 accent-brand-purple"
                  aria-checked={notifications.email}
                />
                <label htmlFor="emailNotif" className="text-brand-dark">Email Notifications</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="pushNotif"
                  name="push"
                  checked={notifications.push}
                  onChange={handleNotifChange}
                  className="mr-2 accent-brand-purple"
                  aria-checked={notifications.push}
                />
                <label htmlFor="pushNotif" className="text-brand-dark">Push Notifications</label>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-brand-dark font-medium mb-2">Theme</label>
              <button
                type="button"
                onClick={toggleTheme}
                className="py-2 px-4 bg-brand-purple text-white rounded hover:bg-brand-dark transition card-shadow"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
            </div>
            {errors.submit && <div className="text-red-500 text-center mb-4">{errors.submit}</div>}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-brand-purple text-white font-semibold rounded hover:bg-brand-dark transition card-shadow"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <span className="animate-spin mr-2 inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full align-middle"></span>
              ) : null}
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default Settings;
