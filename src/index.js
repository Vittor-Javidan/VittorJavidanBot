import tmi from 'tmi.js';
import chalk from 'chalk';
import dotenv from 'dotenv'

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

  const randomNumber1 = Math.random();
  const randomNumber2 = Math.random();
  const randomNumber3 = Math.random();
  const randomRedValue = Math.floor(randomNumber1 * 256);
  const randomGreenValue = Math.floor(randomNumber2 * 256);
  const randomBlueValue = Math.floor(randomNumber3 * 256);
  const colorizedUseName = chalk.rgb(randomRedValue, randomGreenValue, randomBlueValue)(userData.username);

  console.log(`${colorizedUseName}: ${message}`);
});