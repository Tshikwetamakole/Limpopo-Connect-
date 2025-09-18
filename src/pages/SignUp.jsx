import { useState } from "react";

/**
 * Renders the SignUp page, which provides a form for new users to create an account.
 * It includes fields for email, password, experience preference, and age verification.
 *
 * @component
 * @returns {JSX.Element} The SignUp page component.
 */
const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Valid email required.";
    if (form.password.length < 8) newErrors.password = "Password must be at least 8 characters.";
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
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
      setErrors({ submit: "Sign up failed. Please try again." });
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
        aria-label="Sign up form"
      >
        <h2 className="text-2xl font-bold text-brand-purple mb-6 text-center">Create Your Account</h2>
        {success ? (
          <div className="text-green-600 text-center mb-4">Sign up successful! Welcome to Limpopo Connect.</div>
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
              <label htmlFor="password" className="block text-brand-dark font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded border focus:ring-2 focus:ring-brand-purple ${errors.password ? "border-red-500" : "border-gray-300"}`}
                aria-invalid={!!errors.password}
                aria-describedby="password-error"
                required
                autoComplete="new-password"
              />
              {errors.password && <div id="password-error" className="text-red-500 text-sm mt-1">{errors.password}</div>}
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-brand-dark font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded border focus:ring-2 focus:ring-brand-purple ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                aria-invalid={!!errors.confirmPassword}
                aria-describedby="confirmPassword-error"
                required
                autoComplete="new-password"
              />
              {errors.confirmPassword && <div id="confirmPassword-error" className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>}
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
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default SignUp;
