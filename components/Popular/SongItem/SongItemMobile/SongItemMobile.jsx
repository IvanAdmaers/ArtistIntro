import PropTypes from 'prop-types';

import SongPopup from 'components/Popular/SongItem/SongItemMobile/SongPopup';

import classes from './SongItemMobile.module.scss';

const SongItemMobile = ({
  isOpen,
  onPopup,
  index,
  artist,
  url,
  image,
  name,
  playcount,
}) => {
  const handlePopup = () => onPopup();

  return (
    <>
      <div className={classes.item}>
        <button type="button" className={classes.content}>
          <span className={classes.index}>{index}</span>
          <div className={classes.contentTrack}>
            <div className={classes.contentTrackInner}>
              <span className={classes.trackTitle}>
                <span className={classes.trackTitleInner}>
                  <a href={url} target="_blank" rel="noreferrer nofollow">
                    {name}
                  </a>
                </span>
              </span>

              <span className={classes.audition}>{playcount}</span>
            </div>
          </div>
        </button>

        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          role="button"
          tabIndex={0}
          onClick={handlePopup}
          className={classes.menu}
        >
          <button className={classes.menuButton} type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={classes.menuIcon}
            >
              <path
                d="M13.5,4 C13.5,3.2 12.8,2.5 12,2.5 C11.2,2.5 10.5,3.2 10.5,4 C10.5,4.8 11.2,5.5 12,5.5 C12.8,5.5 13.5,4.8 13.5,4 Z M13.5,20 C13.5,19.2 12.8,18.5 12,18.5 C11.2,18.5 10.5,19.2 10.5,20 C10.5,20.8 11.2,21.5 12,21.5 C12.8,21.5 13.5,20.8 13.5,20 Z M13.5,12 C13.5,11.2 12.8,10.5 12,10.5 C11.2,10.5 10.5,11.2 10.5,12 C10.5,12.8 11.2,13.5 12,13.5 C12.8,13.5 13.5,12.8 13.5,12 Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <SongPopup
        isOpen={isOpen}
        onClose={handlePopup}
        artist={artist}
        url={url}
        name={name}
        image={image}
      />
    </>
  );
};

SongItemMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onPopup: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playcount: PropTypes.string.isRequired,
};

export default SongItemMobile;
