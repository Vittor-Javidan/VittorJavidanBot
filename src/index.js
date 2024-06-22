import tmi from 'tmi.js';
import dotenv from 'dotenv'

import usernameRandomColor from './usenameRandomColor.js';

const client = new tmi.Client({
	channels: [ dotenv.config().parsed.CHANNEL_NAME ],
});

client.connect().catch(console.error);

/**
 * @typedef {Object} TwitchResponseObj
 * @property {boolean} firstMessage
 * @property {string} username
 * @property {string} message
*/

client.on('message', (_, twitchResponseObj, message, self) => {

  /** @type {TwitchResponseObj} */
  const userData = {
    firstMessage: twitchResponseObj['first-msg'],
    username: twitchResponseObj['username'],
    message: message
  }

  if (typeof message !== 'string' || message === '') {
    return;
  }

  console.log(`${usernameRandomColor(userData.username)}: ${message}`);
});