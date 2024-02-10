import qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';

const client = new Client({ authStrategy: new LocalAuth() });

// QR Code generation when authentication is required
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

// Bot is ready event
client.on('ready', () => {
  console.log('Bot is ready!');
});

// Ping-Pong response to a specific command
client.on('message_create', async (message) => {
  console.log({ message });
  // Check for the '!ping' command from the bot itself
  if (message.body === '!ping' && message.fromMe) {
    await message.reply('pong');
  }
});

// Log details of all incoming messages
client.on('message', async (message) => {
  if (!message.fromMe) {
    await client.sendMessage(message.from, 'Cala a boca');
  }
});

// Initialize the WhatsApp client
client.initialize();
