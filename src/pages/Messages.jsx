import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Messages = () => {
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md h-[600px] flex">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Messages</h2>
            </div>

            {conversations.length > 0 ? (
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      selectedConversation?.id === conversation.id ? 'bg-red-50 border-r-4 border-r-red-500' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {conversation.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {conversation.name}
                          </h3>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className={`text-sm truncate ${
                          conversation.unread ? 'font-medium text-gray-900' : 'text-gray-500'
                        }`}>
                          {conversation.lastMessage}
                        </p>
                      </div>
                      {conversation.unread && (
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State for Conversations */
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                  <p className="text-gray-600 mb-4 max-w-xs mx-auto">
                    Start connecting with people in your community. Join groups or attend events to begin conversations.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="/events"
                      className="btn btn-primary btn-sm block"
                    >
                      Browse Events
                    </a>
                    <a
                      href="/groups"
                      className="btn btn-outline btn-sm block"
                    >
                      Join Groups
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {selectedConversation.avatar}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{selectedConversation.name}</h3>
                      <p className="text-sm text-gray-500">Active now</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {selectedConversation.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === user?.name ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === user?.name
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-200 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === user?.name ? 'text-red-100' : 'text-gray-500'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <form onSubmit={handleSendMessage} className="flex space-x-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!newMessage.trim()}
                    >
                      Send
                    </button>
                  </form>
                </div>
              </>
            ) : (
              /* Empty Chat State */
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💭</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                  <p className="text-gray-600">Choose a conversation from the list to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;