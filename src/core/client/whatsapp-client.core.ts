import qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';

export const whatsappClient = new Client({ authStrategy: new LocalAuth() });

// QR Code generation when authentication is required
whatsappClient.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

// Bot is ready event
whatsappClient.on('ready', () => {
  console.log('Bot is ready!');
});
