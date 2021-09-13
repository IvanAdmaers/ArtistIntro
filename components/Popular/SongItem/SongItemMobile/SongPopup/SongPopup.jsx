import PropTypes from 'prop-types';

import classes from './SongPopup.module.scss';

const SongPopup = ({ isOpen, onClose, artist, url, name, image }) => {
  const showPopupClass = isOpen ? classes.show : '';

  const handleClose = () => onClose();

  return (
    <div className={`${classes.popup} ${showPopupClass}`}>
      <div className={classes.content}>
        <div className={classes.contentInner}>
          <div className={classes.contentImage} style={{ backgroundImage: `url("${image}")` }} />
          <div className={classes.contentInfo}>
            <span className={classes.contentTitle}>
              {name}
            </span>
            <span className={classes.contentArtist}>
              {artist} • {name}
            </span>
          </div>
        </div>

        <ul className={classes.contextMenu}>
        <li>
          <button className={classes.contextMenuActionButton} type="button">
            <svg
              focusable="false"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              className={classes.contextMenuActionIcon}
            >
              <circle cx="12" cy="12" r="9.5" fill="none" stroke="#181818" />
              <circle cx="12" cy="12" r="2.51" fill="none" stroke="#181818" />
              <rect width="24" height="24" fill="none" />
            </svg>
            <a href={url} rel="noreferrer nofollow" target="_blank" className={classes.contextMenuActionText}>Listen</a>
          </button>
        </li>
      </ul>
      </div>

      <button onClick={handleClose} className={classes.closeButton} type="button">
        <span className={classes.closeButtonText}>Close</span>
      </button>
    </div>
  );
};

SongPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  artist: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SongPopup;
