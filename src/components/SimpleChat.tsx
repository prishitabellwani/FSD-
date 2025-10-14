import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';
import { useUser } from '../context/UserContext';
import Button from './common/Button';
import Card from './common/Card';
import { useTranslation } from '../context/TranslationContext';

interface Message {
  message: string;
  user: { id: string; name: string; avatar?: string };
  timestamp: Date;
  type: 'chat' | 'private' | 'notification';
}

const SimpleChat: React.FC = () => {
  const { user } = useUser();
  const { translate } = useTranslation();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [room, setRoom] = useState('community'); // Default room for group chat
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('User in SimpleChat useEffect:', user);
    if (!user) return;

    // Connect to Socket.IO server without auth token for testing
    const socketInstance = io('http://localhost:5002');

    setSocket(socketInstance);

    socketInstance.on('connect', () => {
      console.log('Connected to Socket.IO server');
      socketInstance.emit('joinRoom', room);
    });

    // Listen for chat messages
    socketInstance.on('chatMessage', (data: Omit<Message, 'type'>) => {
      setMessages((prev) => [...prev, { ...data, type: 'chat' }]);
    });

    // Listen for private messages
    socketInstance.on('privateMessage', (data: Omit<Message, 'type'>) => {
      setMessages((prev) => [...prev, { ...data, type: 'private' }]);
    });

    // Listen for notifications (e.g., user joined, new resource, etc.)
    socketInstance.on('notification', (data: { message: string; type: 'info' | 'warning' | 'success' }) => {
      setMessages((prev) => [...prev, {
        message: data.message,
        user: { id: 'system', name: 'System' },
        timestamp: new Date(),
        type: 'notification'
      }]);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [user, room]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || !socket || !user) return;

    const messageData = {
      room,
      message: inputMessage,
      user: { id: user.id, name: user.username || user.email },
    };

    socket.emit('chatMessage', messageData);
    setInputMessage('');
  };

  if (!user) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <div className="text-center py-8">
          <MessageCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{translate('Join the Conversation')}</h3>
          <p className="text-gray-600 mb-4">{translate('Please log in to participate in the community chat.')}</p>
          <Button variant="primary">{translate('Sign In')}</Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto mt-8 h-[500px] flex flex-col">
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="p-4 border-b bg-gray-50 dark:bg-gray-800">
          <h3 className="text-lg font-semibold flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            {translate('Community Chat')}
          </h3>
          <p className="text-sm text-gray-600">{translate('Connected users:')} {socket?.connected ? 'Online' : 'Offline'}</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.user.id === user.id ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.user.id === user.id
                  ? 'bg-primary-500 text-white'
                  : msg.type === 'notification'
                  ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                  : 'bg-gray-100 text-gray-900'
              }`}>
                {msg.type === 'notification' ? (
                  <p className="font-medium">{msg.message}</p>
                ) : (
                  <>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-semibold text-sm">{msg.user.name}</span>
                      <span className="text-xs opacity-75">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm">{msg.message}</p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <form onSubmit={sendMessage} className="p-4 border-t bg-white dark:bg-gray-800">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={translate('Type your message...')}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            disabled={!socket?.connected}
          />
          <Button type="submit" variant="primary" disabled={!inputMessage.trim() || !socket?.connected}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default SimpleChat;
