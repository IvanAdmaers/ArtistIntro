import cheerio from 'cheerio';

/**
 * This function gets an artist data from HTML
 *
 * @param {stirng} html - Page HTML
 * @returns {Object} Artist data
 */
const getDataFromHTML = (html = '') => {
  const $ = cheerio.load(html, null, false);

  const script = $('script').eq(6).html();

  const stringIndex = script.indexOf('Spotify.Entity = ');
  const stringLength = String('Spotify.Entity = ').length;

  const substringAtrgument = stringIndex + stringLength;

  const scriptText = script.substring(substringAtrgument);
  const scriptData = scriptText.replace(/;/g, '');

  const data = JSON.parse(scriptData);

  return data;
};

/**
 * This function gets song playcount
 *
 * @param {string} songUri - Song uri
 * @param {Object} discography - Discography
 * @returns {number} Song playcount
 */
const getSongPlaycount = (songUri = '', discography = {}) => {
  const { items } = discography.topTracks;

  const song = items.find(({ track }) => track.uri === songUri);

  const playcount = +song.track.playcount;

  return playcount;
};

/**
 * This function gets an artist data
 *
 * @param {stirng} html - Page HTML
 * @returns {Object} Artist data
 */
const getAritstData = (html = '') => {
  const { artist, uri: songUri, top_tracks: topSongs } = getDataFromHTML(html);

  // Url
  const artistUrl = songUri.split(':').pop();

  const songUrl = `https://open.spotify.com/artist/${artistUrl}`;

  // Name
  const artistName = artist.profile.name;

  // Image
  const artistImage = artist.visuals.avatarImage.sources[0].url;

  // Top songs
  const { discography } = artist;

  const songsNumber = Object.keys(topSongs).length - 1;

  const songs = [];

  for (let i = 0; i < songsNumber; i += 1) {
    const song = topSongs[i];

    const { name, uri, album } = song;
    const url = song.external_urls.spotify;
    const image = album.images[1].url;
    const durationMs = song.duration_ms;
    const playcount = getSongPlaycount(uri, discography);

    const songData = {
      url,
      image,
      name,
      durationMs,
      playcount,
    };

    songs.push(songData);
  }

  return { url: songUrl, name: artistName, image: artistImage, songs };
};

export default getAritstData;
