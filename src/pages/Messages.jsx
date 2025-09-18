import { useState, useContext } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';

const Messages = () => {
  const { currentTheme } = useContext(ThemeContext);
  const { isAuthenticated, user } = useAuth();
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'SJ',
      lastMessage: 'Hey! Are you coming to the market tomorrow?',
      time: '2 hours ago',
      unread: true,
      messages: [
        { id: 1, sender: 'Sarah Johnson', content: 'Hi there! I saw your post about the community garden.', time: '2025-09-17 14:30' },
        { id: 2, sender: 'You', content: 'Hello! Yes, we\'re planning to expand it next month.', time: '2025-09-17 14:35' },
        { id: 3, sender: 'Sarah Johnson', content: 'That sounds amazing! I\'d love to help out.', time: '2025-09-17 14:40' },
        { id: 4, sender: 'Sarah Johnson', content: 'Hey! Are you coming to the market tomorrow?', time: '2025-09-17 16:00' }
      ]
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: 'MC',
      lastMessage: 'Thanks for the event recommendation!',
      time: '1 day ago',
      unread: false,
      messages: [
        { id: 1, sender: 'Mike Chen', content: 'Thanks for the event recommendation!', time: '2025-09-16 10:15' },
        { id: 2, sender: 'You', content: 'You\'re welcome! Hope you enjoy it.', time: '2025-09-16 10:20' }
      ]
    },
    {
      id: 3,
      name: 'Community Group',
      avatar: 'CG',
      lastMessage: 'New meeting scheduled for next week',
      time: '3 days ago',
      unread: false,
      messages: [
        { id: 1, sender: 'Community Group', content: 'New meeting scheduled for next week', time: '2025-09-14 09:00' }
      ]
    }
  ]);

  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: selectedConversation.messages.length + 1,
      sender: user.name,
      content: newMessage,
      time: new Date().toISOString().slice(0, 16).replace('T', ' ')
    };

    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [...conv.messages, message],
          lastMessage: newMessage,
          time: 'Just now'
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setSelectedConversation(updatedConversations.find(c => c.id === selectedConversation.id));
    setNewMessage('');
  };

  return (
    <>
      <SEO
        title="Messages - Limpopo Connect"
        description="Stay connected with the Limpopo community through our messaging platform. Chat with fellow residents and build meaningful relationships."
        keywords="Limpopo messages, community chat, social networking, communication, messaging"
        image={`${import.meta.env.BASE_URL || '/'}images/public-faces.jpg`}
      />

      <div className={`min-h-screen ${currentTheme.gradient} ${currentTheme.text}`}>
        {/* DEBUG: Updated Messages Component */}
        <main className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Messages</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect and communicate with fellow community members. Stay in touch and build relationships.
              </p>
            </div>

            {isAuthenticated ? (
              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Conversations List */}
                <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">Your Conversations</h3>
                  <div className="max-h-96 overflow-y-auto space-y-3">
                    {conversations.map(conversation => (
                      <div
                        key={conversation.id}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                          selectedConversation.id === conversation.id 
                            ? 'bg-gray-600 bg-opacity-80' 
                            : 'bg-gray-700 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-60'
                        }`}
                        onClick={() => setSelectedConversation(conversation)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {conversation.avatar}
                            </div>
                            <div>
                              <div className="font-semibold text-white">{conversation.name}</div>
                              <div className="text-sm text-gray-300 truncate max-w-48">
                                {conversation.lastMessage}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-400">{conversation.time}</div>
                            {conversation.unread && (
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-1 ml-auto"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Interface */}
                <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-600">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      {selectedConversation.avatar}
                    </div>
                    <h3 className="text-xl font-bold text-white">{selectedConversation.name}</h3>
                  </div>

                  <div className="h-80 overflow-y-auto bg-gray-900 bg-opacity-50 rounded-lg p-4 mb-4 space-y-3">
                    {selectedConversation.messages.map(message => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === user?.name ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === user?.name 
                            ? 'bg-red-500 text-white' 
                            : 'bg-gray-600 text-gray-100'
                        }`}>
                          <div className="text-sm">{message.content}</div>
                          <div className="text-xs opacity-70 mt-1">
                            {message.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSendMessage} className="flex gap-3">
                    <input
                      type="text"
                      className="flex-1 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button 
                      type="submit" 
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto bg-yellow-900 bg-opacity-20 border border-yellow-600 rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Login Required</h3>
                <p className="text-gray-300">Please login to access your messages and communicate with the community.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Messages;