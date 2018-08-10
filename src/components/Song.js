import React from 'react';

const Song = ({song, setPlayingSong}) => {
  
  return (
    <tr className="song">
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td><button onClick={() => setPlayingSong(song)} >Play</button></td>
    </tr>
  )
}

export default Song;
