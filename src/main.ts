import qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';

const client = new Client({ authStrategy: new LocalAuth() });

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log(
    '--------------------Bot tá Pronto!-----------------------------'
  );
});

client.on('message_create', async (message) => {
  console.log({ message });

  if (message.body === '!ping' && message.fromMe) {
    await message.reply('pong');
  }
});

client.initialize();
