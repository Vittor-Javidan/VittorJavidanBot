import tmi from 'tmi.js';
import dotenv from 'dotenv'
import TwitchViewer from './services/TwitchUser.js';

const client = new tmi.Client({
	channels: [ dotenv.config().parsed.CHANNEL_NAME ],
});

client.connect().catch(console.error);

client.on('message', (_, twitchResponseObj, message, self) => {

  /** @type {ViewerData} */
  const viewerData = {
    firstMessage: twitchResponseObj['first-msg'],
    username: twitchResponseObj['username'],
    message: message
  }

  if (typeof message !== 'string' || message === '') {
    return;
  }

  TwitchViewer.registerViewer(viewerData);
  TwitchViewer.displayMessage(viewerData);
});