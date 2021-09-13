import cheerio from 'cheerio';

/**
 * This function gets an artist image
 *
 * @param {stirng} html - Page HTML
 * @returns {string} Artist image
 */
 const getArtistImage = (html = '') => {
  try {
    const $ = cheerio.load(html, null, false);

    const image = $('div.bg.lazy-image').attr('data-src');

    return image;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default getArtistImage;
