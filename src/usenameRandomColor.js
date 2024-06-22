import chalk from 'chalk';

/**
 * @param {string} username 
 * @returns {string}
 */
export default function usernameRandomColor(username) {

  const randomNumber1 = Math.random();
  const randomNumber2 = Math.random();
  const randomNumber3 = Math.random();
  const randomRedValue = Math.floor(randomNumber1 * 256);
  const randomGreenValue = Math.floor(randomNumber2 * 256);
  const randomBlueValue = Math.floor(randomNumber3 * 256);
  const colorizedUseName = chalk.rgb(randomRedValue, randomGreenValue, randomBlueValue)(username);

  return colorizedUseName
}