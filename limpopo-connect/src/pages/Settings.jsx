import React from 'react';

function Settings() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <div className="mt-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold">Privacy</h2>
            <div className="mt-4">
              <div className="flex items-center">
                <input
                  id="show-profile"
                  name="show-profile"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  defaultChecked
                />
                <label htmlFor="show-profile" className="ml-2 block text-sm text-gray-900">
                  Show my profile to other users
                </label>
              </div>
              <div className="flex items-center mt-4">
                <input
                  id="allow-messages"
                  name="allow-messages"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  defaultChecked
                />
                <label htmlFor="allow-messages" className="ml-2 block text-sm text-gray-900">
                  Allow other users to message me
                </label>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold">Notifications</h2>
            <div className="mt-4">
              <div className="flex items-center">
                <input
                  id="email-notifications"
                  name="email-notifications"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-900">
                  Receive email notifications
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
