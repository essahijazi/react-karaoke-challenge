import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = ({playingSong}) => {
  return (
    <div className="karaoke-display">
      <h2>{playingSong.title}</h2>
      <Lyrics lyrics={playingSong.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
