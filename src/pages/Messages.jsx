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
    <div>
      <div className="page-container">
        <h1 className="page-title">Messages</h1>
        <p className="page-subtitle">
          Connect and communicate with fellow community members. Stay in touch and build relationships.
        </p>

        {isAuthenticated ? (
          <div className="grid-2">
          {/* Conversations List */}
          <div className="card">
            <h3>Your Conversations</h3>
            <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
              {conversations.map(conversation => (
                <div
                  key={conversation.id}
                  className="message"
                  style={{
                    cursor: 'pointer',
                    backgroundColor: selectedConversation.id === conversation.id ? '#f0f0f0' : 'white'
                  }}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <div className="message-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        className="profile-avatar"
                        style={{
                          width: '40px',
                          height: '40px',
                          fontSize: '1rem',
                          margin: 0
                        }}
                      >
                        {conversation.avatar}
                      </div>
                      <div>
                        <div className="message-sender">{conversation.name}</div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>
                          {conversation.lastMessage}
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="message-time">{conversation.time}</div>
                      {conversation.unread && (
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#ff6b6b',
                          borderRadius: '50%',
                          marginTop: '0.5rem'
                        }}></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div
                className="profile-avatar"
                style={{
                  width: '50px',
                  height: '50px',
                  fontSize: '1.2rem',
                  marginRight: '1rem'
                }}
              >
                {selectedConversation.avatar}
              </div>
              <h3>{selectedConversation.name}</h3>
            </div>

            <div style={{
              height: '300px',
              overflowY: 'auto',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              backgroundColor: '#fafafa'
            }}>
              {selectedConversation.messages.map(message => (
                <div
                  key={message.id}
                  style={{
                    marginBottom: '1rem',
                    textAlign: message.sender === user.name ? 'right' : 'left'
                  }}
                >
                  <div style={{
                    display: 'inline-block',
                    maxWidth: '70%',
                    padding: '0.5rem 1rem',
                    borderRadius: '18px',
                    backgroundColor: message.sender === user.name ? '#ff6b6b' : '#e0e0e0',
                    color: message.sender === user.name ? 'white' : '#333'
                  }}>
                    <div className="message-content">{message.content}</div>
                    <div style={{
                      fontSize: '0.8rem',
                      opacity: 0.7,
                      marginTop: '0.25rem'
                    }}>
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  style={{ margin: 0 }}
                />
                <button type="submit" className="btn">Send</button>
              </div>
            </form>
          </div>
        </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            background: '#fff3cd',
            color: '#856404',
            borderRadius: '8px',
            border: '1px solid #ffeaa7'
          }}>
            <h3>Login Required</h3>
            <p>Please login to access your messages and communicate with the community.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;