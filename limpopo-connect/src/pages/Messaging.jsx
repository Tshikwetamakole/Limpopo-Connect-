import React, { useState } from 'react';

const conversations = [
  { id: 1, name: 'JohnDoe', lastMessage: 'Hey, how are you?' },
  { id: 2, name: 'JaneSmith', lastMessage: 'See you tonight!' },
  { id: 3, name: 'Anonymous', lastMessage: 'Still on for tonight?' },
];

const messages = {
  1: [
    { id: 1, sender: 'JohnDoe', text: 'Hey, how are you?' },
    { id: 2, sender: 'Me', text: 'I\'m good, thanks! How about you?' },
  ],
  2: [
    { id: 1, sender: 'JaneSmith', text: 'See you tonight!' },
  ],
  3: [
    { id: 1, sender: 'Anonymous', text: 'Still on for tonight?' },
    { id: 2, sender: 'Me', text: 'Yep, see you there!' },
  ],
};

function ConversationList({ onSelectConversation }) {
  return (
    <div className="w-1/3 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      <ul>
        {conversations.map((convo) => (
          <li
            key={convo.id}
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => onSelectConversation(convo.id)}
          >
            <p className="font-bold">{convo.name}</p>
            <p className="text-sm text-gray-400">{convo.lastMessage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChatWindow({ conversationId }) {
 
  const chatMessages = typeof conversationId === 'string' && Object.prototype.hasOwnProperty.call(messages, conversationId) ? messages[conversationId] : [];

  const chatMessages = messages[conversationId] || [];


  return (
    <div className="w-2/3 bg-gray-900 text-white p-4 flex flex-col">
      <div className="flex-grow">
        {chatMessages.map((msg) => (
          <div key={msg.id} className={`mb-4 ${msg.sender === 'Me' ? 'text-right' : ''}`}>
            <p className={`p-2 rounded-lg inline-block ${msg.sender === 'Me' ? 'bg-red-600' : 'bg-gray-700'}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full bg-gray-800 border-gray-600 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
        />
      </div>
    </div>
  );
}


function Messaging() {
  const [selectedConversation, setSelectedConversation] = useState(1);

  return (
    <div className="min-h-screen bg-black flex">
      <ConversationList onSelectConversation={setSelectedConversation} />
      <ChatWindow conversationId={selectedConversation} />
    </div>
  );
}

export default Messaging;
