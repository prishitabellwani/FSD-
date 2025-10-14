import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
import { createServer } from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5175', 'http://localhost:5174'],
  credentials: true
}));
app.use(express.json());

// Create HTTP server and Socket.IO server
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5175', 'http://localhost:5174'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Socket.IO connection handler
io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);

  // Join a room for group chat
  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`Socket ${socket.id} joined room ${room}`);
  });

  // Handle chat message event
  socket.on('chatMessage', ({ room, message, user }) => {
    io.to(room).emit('chatMessage', { message, user, timestamp: new Date() });
  });

  // Handle private message event
  socket.on('privateMessage', ({ toSocketId, message, user }) => {
    io.to(toSocketId).emit('privateMessage', { message, user, timestamp: new Date() });
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
  });
});

// Import routes and middleware
import userRoutes from './src/routes/users.js';
import resourceRoutes from './src/routes/resources.js';
import chatbotRoutes from './src/routes/chatbot.js';
import testUsersRoutes from './src/routes/testUsers.js';
import { authenticateToken } from './src/middleware/auth.js';

app.use('/api/auth', userRoutes);
app.use('/api/resources', authenticateToken, resourceRoutes);
app.use('/api/test-users', testUsersRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server Error' });
});

const PORT = process.env.PORT || 5002;

connectDB()
.then(() => {
  httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => {
  console.error('❌ Database connection error:', err);
  process.exit(1);
});
