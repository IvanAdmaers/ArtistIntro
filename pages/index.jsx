import PropTypes from 'prop-types';
import Head from 'next/head';

import Preview from 'components/Preview';
import Popular from 'components/Popular';
import Footer from 'components/Footer';

import { getArtist } from 'api';

const Home = ({ name, image, songs, year }) => (
  <>
    <Head>
      <title>{name}</title>
      <meta name="description" content={`See the best ${name} songs. Get more about the artist. Artist ${name}`} />
    </Head>
    <Preview artist={name} image={image} />
    <Popular artist={name} songs={songs} />
    <Footer year={year} />
  </>
);

Home.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  songs: PropTypes.arrayOf(
    PropTypes.shape([PropTypes.string, PropTypes.number])
  ).isRequired,
  year: PropTypes.number.isRequired,
};

export const getStaticProps = async () => {
  try {
    const artist = await getArtist();

    const { name, image, songs } = artist;

    const year = new Date().getFullYear();

    return {
      props: { name, image, songs, year },
      revalidate: 60 * 60,
    };
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default Home;
