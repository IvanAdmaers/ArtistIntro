import PropTypes from 'prop-types';
import Image from 'next/image';

import classes from './SongItemDesktop.module.scss';

const SongItemDesktop = ({ index, url, image, name, playcount, duration }) => (
  <div>
    <a href={url} target="_blank" rel="noreferrer nofollow">
      <div className={classes.inner}>
        <div className={classes.item}>
          <div className={classes.indexInner}>
            <span className={classes.indexInnerSpan}>{index}</span>
          </div>
        </div>

        <div className={`${classes.item} ${classes.body}`}>
          <div className={classes.bodyImage}>
            <Image width={40} height={40} src={image} alt="song" />
          </div>
          <div className={classes.bodyTitle}>
            <div className={classes.bodyTitleText}>{name}</div>
          </div>
        </div>

        <div className={`${classes.item} ${classes.audition}`}>
          <div className={classes.auditionText}>{playcount}</div>
        </div>

        <div className={`${classes.item} ${classes.duration}`}>
          <div className={classes.durationText}>{duration}</div>
        </div>
      </div>
    </a>
  </div>
);

SongItemDesktop.propTypes = {
  index: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playcount: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default SongItemDesktop;
