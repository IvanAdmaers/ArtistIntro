import cheerio from 'cheerio';

/**
 * This function gets an artist name
 *
 * @param {stirng} html - Page HTML
 * @returns {string} Artist name
 */
const getArtistName = (html = '') => {
  try {
    const $ = cheerio.load(html, null, false);

    const name = $('h1.view-header').text();

    return name;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default getArtistName;

