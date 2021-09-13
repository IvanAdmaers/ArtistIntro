/**
 * This funtcion converts Milliseconds to minutes and seconds
 * Example: 176640 => 2:57
 * 
 * @param {number} ms - Milliseconds
 * @returns {string} Converted number
 */
const msToMinutesAndSeconds = (ms = 0) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  const time =
    seconds === 60
      ? `${minutes + 1}:00`
      : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return time;
};

export default msToMinutesAndSeconds;
