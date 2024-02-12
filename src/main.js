"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
const whatsapp_web_js_1 = require("whatsapp-web.js");
const client = new whatsapp_web_js_1.Client({ authStrategy: new whatsapp_web_js_1.LocalAuth() });
// QR Code generation when authentication is required
client.on('qr', (qr) => {
    qrcode_terminal_1.default.generate(qr, { small: true });
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
        await message.reply('pong manda o !ping denovo');
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
