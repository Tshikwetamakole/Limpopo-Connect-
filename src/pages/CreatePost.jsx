import React from 'react';

/**
 * Renders the Create Post page, which contains a form for creating a new post.
 * Users can enter a title, body, and choose to post anonymously.
 *
 * @component
 * @returns {JSX.Element} The Create Post page component.
 */
function CreatePost() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Create a New Post</h1>
          <form className="mt-6">
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="body" className="block text-sm font-medium">
                Body
              </label>
              <textarea
                id="body"
                name="body"
                rows={4}
                className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                defaultValue={''}
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                id="anonymous"
                name="anonymous"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded"
              />
              <label htmlFor="anonymous" className="ml-2 block text-sm">
                Post anonymously
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CreatePost;
