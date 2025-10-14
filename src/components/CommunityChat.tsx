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

const CommunityChat: React.FC = () => {
  const { user } = useUser();
  const { translate } = useTranslation();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [room, setRoom] = useState('community'); // Default room for group chat
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) return;

    // Connect to Socket.IO server
    const socketInstance = io('http://localhost:5002');

    setSocket(socketInstance);

    socketInstance.on('connect', () => {
      console.log('Connected to Socket.IO server');
      console.log('Socket connected:', socketInstance.connected);
      setIsConnected(true);
      socketInstance.emit('joinRoom', room);
    });

    socketInstance.on('connect_error', (err) => {
      console.error('Socket connection error:', err);
      setIsConnected(false);
      setMessages((prev) => [...prev, {
        message: 'Connection error: ' + err.message,
        user: { id: 'system', name: 'System' },
        timestamp: new Date(),
        type: 'notification'
      }]);
    });

    socketInstance.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
      setIsConnected(false);
      setMessages((prev) => [...prev, {
        message: 'Disconnected: ' + reason,
        user: { id: 'system', name: 'System' },
        timestamp: new Date(),
        type: 'notification'
      }]);
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

  const chatContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (!chatContainer) return;

    // Scroll to bottom smoothly on new message
    chatContainer.scrollTo({
      top: chatContainer.scrollHeight,
      behavior: 'smooth',
    });
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
          <p className="text-sm text-gray-600">{translate('Connected users:')} {isConnected ? 'Online' : 'Offline'}</p>
        </div>
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-900 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.user.id === user.id ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-6 py-4 rounded-2xl shadow-lg ${
                msg.user.id === user.id
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-primary-500/60'
                  : msg.type === 'notification'
                  ? 'bg-yellow-100 text-yellow-900 border border-yellow-300'
                  : 'bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
              }`}>
                {msg.type === 'notification' ? (
                  <p className="font-semibold">{msg.message}</p>
                ) : (
                  <>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-extrabold text-lg text-primary-900 dark:text-primary-300">
                        {msg.user.id === user.id ? `${msg.user.name} (You)` : msg.user.name}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400 opacity-90">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-gray-900 dark:text-gray-100">{msg.message}</p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
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
            disabled={!isConnected}
          />
          <Button type="submit" variant="primary" disabled={!inputMessage.trim() || !isConnected}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CommunityChat;
