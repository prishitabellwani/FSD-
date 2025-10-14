import React from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="border rounded p-4 h-96 overflow-y-auto bg-white">
      {messages.map((msg) => (
        <div key={msg.id} className={`mb-3 ${msg.sender === 'bot' ? 'text-green-700' : 'text-blue-700'}`}>
          <div className="font-bold">{msg.sender === 'bot' ? 'My Helping Buddy' : 'You'}</div>
          <div>{msg.text}</div>
          <div className="text-xs text-gray-500">{new Date(msg.timestamp).toLocaleTimeString()}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
