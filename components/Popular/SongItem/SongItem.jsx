import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import SongItemDesktop from 'components/Popular/SongItem/SongItemDesktop';
import SongItemMobile from 'components/Popular/SongItem/SongItemMobile';

import { msToMinutesAndSeconds, numberWithCommas } from 'utills';

import classes from './SongItem.module.scss';

const SongItem = ({
  index,
  artist,
  url,
  image,
  name,
  playcount,
  durationMs,
}) => {
  const [didMount, setDidMount] = useState(false);
  const [width, setWidth] = useState(0);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const handlePopup = () => setPopupIsOpen((prevState) => !prevState);

  useEffect(() => {
    if (didMount) return;

    setDidMount(true);
  }, [didMount]);

  useEffect(() => {
    if (!didMount) return null;

    const setInnerWidth = () => {
      const { innerWidth } = window;

      setWidth(innerWidth);
    };

    setInnerWidth();

    const listener = window.addEventListener('resize', setInnerWidth);

    return () => window.removeEventListener('resize', listener);
  }, [didMount]);

  const duration = msToMinutesAndSeconds(durationMs);
  const playcountFormatted = numberWithCommas(playcount);

  const itemElement =
    width === 0 || width > 600 ? (
      <div className={classes.container}>
        <SongItemDesktop
          index={index}
          url={url}
          image={image}
          name={name}
          playcount={playcountFormatted}
          duration={duration}
        />
      </div>
    ) : (
      <SongItemMobile
        isOpen={popupIsOpen}
        onPopup={handlePopup}
        index={index}
        artist={artist}
        url={url}
        image={image}
        name={name}
        playcount={playcountFormatted}
      />
    );

  return itemElement;
};

SongItem.propTypes = {
  index: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playcount: PropTypes.number.isRequired,
  durationMs: PropTypes.number.isRequired,
};

export default SongItem;
