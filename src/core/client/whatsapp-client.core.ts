import { Client, LocalAuth } from 'whatsapp-web.js';

export const whatsappClient = new Client({ authStrategy: new LocalAuth() });
