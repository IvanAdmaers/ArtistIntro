const doFetch = async (url = '') => {
  const baseUrl = process.env.SERVER_API_URL;

  const req = await fetch(`${baseUrl}${url}`);

  const res = await req.json();

  return res;
};

// eslint-disable-next-line import/prefer-default-export
export const getArtist = async () => {
  const url = '/artist';

  const data = await doFetch(url);

  return data;
};
