import { commandHandler } from './lib/commands-handler.lib';
import { commandsSchema } from './core/commands/commands.core';
import { whatsappClient } from './core/client/whatsapp-client.core';


// Ping-Pong response to a specific command
whatsappClient.on('message_create', async (message) => {
  if (message.body.startsWith('!')) {
    const parsedCommandResult = commandsSchema.safeParse(message.body);

    if (!parsedCommandResult.success) {
      return await message.reply('Comando inválido');
    }

    const command = parsedCommandResult.data;

    await commandHandler(command, message);
  }
});

// Log details of all incoming messages
whatsappClient.on('message', async (message) => {
  if (!message.fromMe) {
    await whatsappClient.sendMessage(message.from, 'Cala a boca');
  }
});

// Initialize the WhatsApp whatsappClient
whatsappClient.initialize();
