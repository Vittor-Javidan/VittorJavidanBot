import chalk from "chalk";

export default class TwitchViewer {

  static viewersUsernameColors = {};

  /**
   * @param {ViewerData} viewerData 
   * @returns {void}
   */
  static registerViewer(viewerData) {
    const { username } = viewerData
    if (this.viewersUsernameColors[username] === undefined) {
      this.viewersUsernameColors[username] = usernameRandomColor(username);
    }
  }

  /**
   * @param {ViewerData} viewerData 
   * @returns {void}
   */
  static displayMessage(viewerData) {
    const { username, message } = viewerData
    console.log(`${this.viewersUsernameColors[username]}: ${message}`);
  }
}

function usernameRandomColor(username) {

  const randomNumber1 = Math.random();
  const randomNumber2 = Math.random();
  const randomNumber3 = Math.random();
  const randomRedValue = Math.floor(randomNumber1 * 256);
  const randomGreenValue = Math.floor(randomNumber2 * 256);
  const randomBlueValue = Math.floor(randomNumber3 * 256);
  const colorizedUseName = chalk.rgb(randomRedValue, randomGreenValue, randomBlueValue)(username);

  return colorizedUseName
}
