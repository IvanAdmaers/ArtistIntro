import getAritstData from 'lib/artist';

const getAritst = async (req, res) => {
  try {
    const artistUrl = process.env.SPOTIFY_ARTIST_URL;
    const message = 'Server error. Check server logs';

    if (!artistUrl) {
      console.log(
        'Incorrect artist url. Check param SPOTIFY_ARTIST_URL in .evn file'
      );
      return res.status(406).json({ message });
    }

    const fetchReq = await fetch(artistUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:2.0b8pre) Gecko/20101213 Firefox/4.0b8pre',
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-GB,en;q=0.9',
        Connection: 'keep-alive',
        Referer: 'https://www.google.com/',
      },
    });

    if (!fetchReq.ok) {
      console.log(
        `Something wrong with artist url. 
        Request status - ${fetchReq.status}
        Status text - ${fetchReq.statusText}
        `
      );
      return res.status(406).json({ message });
    }

    const HTML = await fetchReq.text();

    const data = getAritstData(HTML);

    return res.json({ ...data });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Something wrong' });
  }
};

export default getAritst;
