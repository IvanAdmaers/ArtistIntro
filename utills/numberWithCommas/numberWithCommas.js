/**
 * This function separates a number
 * Example: 5329623 => 5,329,623
 * 
 * @param {number} number - Number to separates
 * @returns {string} Separated number
 */
const numberWithCommas = (number = 0) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default numberWithCommas;
