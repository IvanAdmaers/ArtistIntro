import PropTypes from 'prop-types';

import SongItem from 'components/Popular/SongItem';

import classes from './Popular.module.scss';

const Popular = ({ artist, songs }) => {
  const title = `${artist}'s popular songs`;

  const songsElement = songs.map(
    ({ url, image, name, playcount, durationMs }, index) => (
      <SongItem
        key={url}
        index={index + 1}
        artist={artist}
        url={url}
        image={image}
        name={name}
        playcount={playcount}
        durationMs={durationMs}
      />
    )
  );

  return (
    <div className={classes.popular}>
      <h2 className={classes.title}>{title}</h2>
      {songsElement}
    </div>
  );
};

Popular.propTypes = {
  artist: PropTypes.string.isRequired,
  songs: PropTypes.arrayOf(
    PropTypes.shape([PropTypes.string, PropTypes.number])
  ).isRequired,
};

export default Popular;
