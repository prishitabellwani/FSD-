import express from 'express';
import RiveScript from 'rivescript';

const router = express.Router();

const bot = new RiveScript();

bot.loadFile('./src/chatbot/bot.rive').then(() => {
  bot.sortReplies();
  console.log('RiveScript bot loaded and sorted replies');
}).catch((err) => {
  console.error('Error loading RiveScript bot:', err);
});

router.post('/message', async (req, res) => {
  const { message } = req.body;
  console.log('Chatbot received message:', message);

  if (!message) {
    console.log('Chatbot error: Message is required');
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const reply = await bot.reply('local-user', message);
    console.log('RiveScript reply:', reply);
    res.json({ response: reply });
  } catch (err) {
    console.error('Error getting RiveScript reply:', err);
    res.status(500).json({ error: 'Chatbot error' });
  }
});

export default router;
