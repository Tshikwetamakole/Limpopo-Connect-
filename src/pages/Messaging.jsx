import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

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

/**
 * Renders a list of conversations.
 *
 * @component
 * @param {object} props - The component props.
 * @param {function(number): void} props.onSelectConversation - Callback function to handle conversation selection.
 * @returns {JSX.Element} The conversation list component.
 */
function ConversationList({ onSelectConversation }) {
    const { currentTheme } = useContext(ThemeContext);
    return (
        <div className={`w-1/3 ${currentTheme.cardBg} ${currentTheme.text} p-4`}>
        <h2 className="text-2xl font-bold mb-4">Messages</h2>
        <ul>
            {conversations.map((convo) => (
            <li
                key={convo.id}
                className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg"
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

/**
 * Renders the chat window for a selected conversation.
 *
 * @component
 * @param {object} props - The component props.
 * @param {number} props.conversationId - The ID of the selected conversation.
 * @returns {JSX.Element} The chat window component.
 */
function ChatWindow({ conversationId }) {
  const { currentTheme } = useContext(ThemeContext);
  const chatMessages = messages[conversationId] || [];

  return (
    <div className={`w-2/3 ${currentTheme.gradient} ${currentTheme.text} p-4 flex flex-col`}>
      <div className="flex-grow overflow-y-auto">
        {chatMessages.map((msg) => (
          <div key={msg.id} className={`mb-4 flex ${msg.sender === 'Me' ? 'justify-end' : 'justify-start'}`}>
            <p className={`p-3 rounded-lg inline-block max-w-xs ${msg.sender === 'Me' ? currentTheme.button : 'bg-gray-700'}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full bg-gray-700 border-gray-600 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500 sm:text-sm text-white"
        />
      </div>
    </div>
  );
}

/**
 * Renders the Messaging page, which includes a list of conversations and a chat window.
 * The conversation and message data is currently hardcoded.
 *
 * @component
 * @returns {JSX.Element} The Messaging page component.
 */
function Messaging() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const { currentTheme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${currentTheme.gradient} flex`}>
      <ConversationList onSelectConversation={setSelectedConversation} />
      <ChatWindow conversationId={selectedConversation} />
    </div>
  );
}

export default Messaging;
