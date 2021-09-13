import PropTypes from 'prop-types';
import Image from 'next/image';

import classes from './Preview.module.scss';

const Preview = ({ artist, image }) => {
  const imageAlt = `${artist} image`;

  return (
    <header className={classes.preview}>
      <h1 className={classes.title}>{artist}</h1>
      <div className={classes.image}>
        <Image
          width={500}
          height={500}
          src={image}
          alt={imageAlt}
          draggable={false}
        />
      </div>
    </header>
  );
};

Preview.propTypes = {
  artist: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Preview;
