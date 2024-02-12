import type WAWebJS from 'whatsapp-web.js';

import type { Commands } from '../core/commands/commands.core';
import { whatsappClient } from '../core/client/whatsapp-client.core';

export async function commandHandler(
  command: Commands,
  message?: WAWebJS.Message
) {
  switch (command) {
    case '!ping':
      await message?.reply('pong');
    case '!get-data':
      console.log(message);
  }
}
