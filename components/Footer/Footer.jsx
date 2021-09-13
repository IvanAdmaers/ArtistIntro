import PropTypes from 'prop-types';

import classes from './Footer.module.scss';

const Footer = ({ year }) => {
  const contactUrl = process.env.NEXT_PUBLIC_SITE_OWNER_CONTACT_URL;

  return (
    <footer className={classes.footer}>
      <p className={classes.text}>
        Based on{' '}
        <a
          className={classes.link}
          href="https://spotify.com"
          target="_blank"
          rel="noreferrer nofollow"
        >
          Spotify
        </a>
        . Fan site.
      </p>
      <p className={classes.text}>
        Open source project{' '}
        <a
          className={classes.link}
          href="https://github.com/IvanAdmaers/artistintro"
          target="_blank"
          rel="noreferrer nofollow"
        >
          ArtistIntro
        </a>{' '}
        © {year}
      </p>
      <p>
        The site owner contact{' '}
        <a
          className={classes.link}
          href={contactUrl}
          target="_blank"
          rel="noreferrer nofollow"
        >
          link
        </a>
      </p>
    </footer>
  );
};

Footer.propTypes = {
  year: PropTypes.number.isRequired,
};

export default Footer;
