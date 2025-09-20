export default function LoginRequired({ onLogin, onSignup }) {
  return (
    <section
      className="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur p-4 md:p-6 shadow-md"
      aria-labelledby="login-required-title"
      role="region"
    >
      <h2 id="login-required-title" className="text-lg font-semibold text-brand-dark">
        Join local events and meet neighbours
      </h2>
      <ul className="mt-3 space-y-1 text-sm text-gray-700">
        <li>• RSVP to events and message hosts</li>
        <li>• Follow groups around Limpopo</li>
        <li>• Share posts with your community</li>
      </ul>
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        <button
          onClick={onSignup}
          className="px-4 py-2 rounded-lg bg-brand-purple text-white text-sm font-medium hover:bg-brand-purple/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-purple"
        >
          Create free account
        </button>
        <button
          onClick={onLogin}
          className="px-4 py-2 rounded-lg border border-brand-purple text-brand-purple text-sm font-medium hover:bg-brand-purple/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-purple"
        >
          Log in
        </button>
      </div>
    </section>
  );
}
